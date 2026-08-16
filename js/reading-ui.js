/* 英语阅读理解板块（独立模块）：短文 + 可作答题目 */
window.ReadingUI = (function () {
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function allPassages() {
    var a = (window.READING_DATA && window.READING_DATA.passages) || [];
    var b = (window.READING_EXTRA_DATA && window.READING_EXTRA_DATA.passages) || [];
    var c = (window.READING_EXTRA2_DATA && window.READING_EXTRA2_DATA.passages) || [];
    var d = (window.READING_EXTRA3_DATA && window.READING_EXTRA3_DATA.passages) || [];
    return a.concat(b, c, d);
  }
  function render() {
    var passages = allPassages();
    var s = '<section class="card"><h2>📖 英语阅读理解</h2>';
    s += '<p class="dim">先通读短文，再看题定位原文。技巧：主旨看首尾段、细节找关键词、推断排除绝对化选项、词义靠上下文。</p>';
    if (!passages.length) { s += '<p class="dim">阅读材料生成中，请稍后刷新。</p>'; return s + '</section>'; }
    passages.forEach(function (p, pi) {
      s += '<div class="modcard"><h3 class="modhead" onclick="ReadingUI.toggle(\'r_body_' + p.id + '\')">' + (pi + 1) + '. ' + esc(p.title) + ' <span class="dim">(' + p.text.length + ' 词)</span></h3>';
      s += '<div id="r_body_' + p.id + '" class="modbody"' + (pi === 0 ? "" : ' style="display:none"') + '>';
      s += '<div class="example"><div class="ex-q" style="white-space:pre-wrap;font-weight:normal">' + esc(p.text) + '</div>';
      if (p.notes && p.notes.length) {
        s += '<div class="dim">生词：' + p.notes.map(function (nn) { return '<b>' + esc(nn.word) + '</b> ' + esc(nn.cn); }).join('　') + '</div>';
      }
      s += '</div>';
      s += '<h4>题目（作答后提交判分）</h4>';
      (p.questions || []).forEach(function (q, qi) {
        s += '<div class="example"><div class="ex-q">' + (qi + 1) + '. ' + esc(q.stem) + '</div>';
        if (q.options && q.options.length) {
          var letters = ["A", "B", "C", "D"];
          s += '<div class="qopts">';
          q.options.forEach(function (op, oi) {
            s += '<label class="opt"><input type="radio" name="rd' + p.id + '_' + qi + '" value="' + letters[oi] + '"> <span>' + letters[oi] + '. ' + esc(op) + '</span></label>';
          });
          s += '</div>';
          s += '<button class="btn" onclick="ReadingUI.check(\'' + p.id + '\',' + qi + ')">提交</button>';
          s += '<div class="ex-a dim" id="rd_ans_' + p.id + '_' + qi + '"></div>';
        }
        s += '</div>';
      });
      s += '<button class="btn primary" onclick="ReadingUI.checkAll(\'' + p.id + '\')">✅ 提交本篇全部</button>';
      s += '</div></div>';
    });
    s += '</section>';
    return s;
  }
  function findPassage(id) {
    var ps = allPassages();
    for (var i = 0; i < ps.length; i++) if (ps[i].id === id) return ps[i];
    return null;
  }
  function check(id, qi) {
    var p = findPassage(id);
    if (!p || !p.questions[qi]) return;
    var q = p.questions[qi];
    var radios = document.querySelectorAll("input[name=rd" + id + "_" + qi + "]:checked");
    var user = radios.length ? radios[0].value : "";
    var ok = user.toLowerCase() === String(q.answer).toLowerCase();
    var box = $("rd_ans_" + id + "_" + qi);
    if (box) box.textContent = (ok ? "✅ 正确" : "❌ 你的答案：" + (user || "未作答") + " · 正确答案：" + q.answer) + (q.explain ? "　" + q.explain : "");
  }
  function checkAll(id) {
    var p = findPassage(id);
    if (!p) return;
    var correct = 0;
    (p.questions || []).forEach(function (q, qi) {
      var radios = document.querySelectorAll("input[name=rd" + id + "_" + qi + "]:checked");
      var user = radios.length ? radios[0].value : "";
      var ok = user.toLowerCase() === String(q.answer).toLowerCase();
      if (ok) correct++;
      var box = $("rd_ans_" + id + "_" + qi);
      if (box) box.textContent = (ok ? "✅ 正确" : "❌ " + (user || "未作答") + " → 正确 " + q.answer) + (q.explain ? "　" + q.explain : "");
    });
    alert("本篇答对 " + correct + "/" + (p.questions || []).length + " 题");
  }
  function toggle(elId) { var el = $(elId); if (el) el.style.display = el.style.display === "none" ? "block" : "none"; }
  return { render: render, check: check, checkAll: checkAll, toggle: toggle };
})();
