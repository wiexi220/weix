// 可选联网AI出题与讲解：兼容 OpenAI 协议(DeepSeek / Qwen(DashScope) / 其他兼容端点)。
window.AI = (function () {
  var SYSTEM = "你是重庆市普通高校专升本命题与教研专家，精通高等数学、大学英语、计算机基础三科考纲与命题风格。你出的题必须严格遵循考纲、贴近命题风格、答案准确、解析清晰。";
  function isConfigured() {
    var s = Store.get().settings.ai;
    return !!(s && s.enabled && s.apiKey);
  }
  function buildPrompt(params) {
    var names = { gaoshu: "高等数学", yingyu: "大学英语", jisuanji: "计算机基础" };
    var types = { gaoshu: "单项选择题、填空题、计算题、证明题", yingyu: "单项选择题(词汇语法/翻译)、填空题", jisuanji: "单项选择题、判断题、填空题、应用题" };
    var subj = names[params.subject] || params.subject;
    var lines = [];
    lines.push("请为重庆专升本《" + subj + "》科目命制 " + (params.count || 5) + " 道题。");
    if (params.module) lines.push("重点考查模块：" + params.module + "。");
    if (params.difficulty) lines.push("难度：" + (params.difficulty === 1 ? "基础" : params.difficulty === 2 ? "中等" : "拔高") + "。");
    lines.push("可用题型：" + (types[params.subject] || "选择题") + "。");
    lines.push("要求：严格按考纲和历年考纲风格，答案准确，每题附简洁中文解析。");
    lines.push("只输出一个 JSON 数组，不要输出任何其他文字。每个元素的字段为：");
    lines.push('{"type":"single","stem":"题干","options":["A选项","B选项","C选项","D选项"],"answer":"正确选项字母","explain":"解析","difficulty":1}');
    lines.push("其中 type 取 single(单选)/judge(判断)/fill(填空)/calc(计算)/proof(证明)；单选必须给4个 options 且 answer 为 A/B/C/D 之一；判断、填空、计算的 options 用空数组 []，answer 填答案文本(判断题填 正确 或 错误)。");
    return lines.join("\n");
  }
  function parse(text) {
    if (!text) throw new Error("AI 未返回内容");
    var t = String(text).replace(/^\s*\x60\x60\x60(?:json)?\s*/i, "").replace(/\x60\x60\x60\s*$/, "").trim();
    var m = t.match(/\[[\s\S]*\]/);
    if (!m) throw new Error("未能从 AI 返回中解析出 JSON 数组");
    var arr = JSON.parse(m[0]);
    if (!Array.isArray(arr)) throw new Error("AI 返回不是数组");
    return arr.map(function (q, i) {
      return {
        id: "ai" + Date.now() + "_" + i,
        type: q.type || "single",
        module: q.module || "",
        point: q.point || "",
        stem: q.stem || "",
        options: Array.isArray(q.options) ? q.options : (q.options ? [q.options] : null),
        answer: String(q.answer != null ? q.answer : ""),
        explain: q.explain || "",
        difficulty: q.difficulty || 1
      };
    });
  }
  async function generate(params) {
    var s = Store.get().settings.ai;
    if (!s || !s.apiKey) throw new Error("未配置 AI 密钥，请在「设置」中填写后重试");
    var endpoint = s.endpoint || "https://api.deepseek.com/v1/chat/completions";
    var model = s.model || "deepseek-chat";
    var ctrl = new AbortController();
    var to = setTimeout(function () { try { ctrl.abort(); } catch (e) {} }, 30000);
    var resp;
    try {
      resp = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + s.apiKey },
        body: JSON.stringify({ model: model, messages: [{ role: "system", content: SYSTEM }, { role: "user", content: buildPrompt(params) }], temperature: 0.7 }),
        signal: ctrl.signal
      });
    } catch (e) { clearTimeout(to); throw new Error("AI 请求超时或失败，请检查网络/密钥"); }
    clearTimeout(to);
    if (!resp.ok) throw new Error("AI 请求失败 HTTP " + resp.status);
    var data = await resp.json();
    var text = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || "";
    return parse(text);
  }
  async function ask(messages, temperature) {
    var s = Store.get().settings.ai;
    if (!s || !s.apiKey) throw new Error("未配置 AI 密钥，请在「设置」中填写后重试");
    var endpoint = s.endpoint || "https://api.deepseek.com/v1/chat/completions";
    var model = s.model || "deepseek-chat";
    var resp = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + s.apiKey },
      body: JSON.stringify({ model: model, messages: messages, temperature: temperature == null ? 0.7 : temperature })
    });
    if (!resp.ok) throw new Error("AI 请求失败 HTTP " + resp.status);
    var data = await resp.json();
    return (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || "";
  }
  async function explainWrong(w) {
    var prompt = "请对以下这道做错的题进行深度讲解，输出结构：1)考点定位（对应重庆专升本哪个模块）；2)正确思路（分步）；3)易错点；4)同类题避坑提示。\n科目：" + (w.subject || "") + " 题型：" + (w.type || "") + (w.year ? " 年份：" + w.year + "真题" : "") + "\n题干：" + (w.stem || "") + (w.answerText ? " 正确答案：" + w.answerText : " 正确答案：" + w.answer) + "\n参考解析：" + (w.explain || "无") + "\n请用中文，简洁清晰，适合零基础理解。";
    return ask([{ role: "system", content: SYSTEM }, { role: "user", content: prompt }], 0.6);
  }
  async function gradeWriting(text, topic) {
    var prompt = "请批改以下重庆专升本英语应用文写作。\n题目要求：" + (topic || "（自定）") + "\n学生作文：\n" + text + "\n\n请按以下结构输出（中文）：\n1) 总评与估分（满分20分制，给出内容/语言/结构/格式四项得分）；\n2) 具体问题（逐条，指出语法/用词/格式错误并给出正确写法）；\n3) 改进后的范文（按同一题目重写一版，供参考）。";
    return ask([{ role: "system", content: SYSTEM }, { role: "user", content: prompt }], 0.6);
  }
  return { isConfigured: isConfigured, generate: generate, ask: ask, explainWrong: explainWrong, gradeWriting: gradeWriting };
})();
