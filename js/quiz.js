// 测验引擎：洗牌、组卷、判分。
window.Quiz = {
  shuffle: function (arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  },
  pick: function (arr, n) { return this.shuffle(arr).slice(0, n); },
  fmt: function (sec) {
    sec = Math.max(0, Math.floor(sec));
    var m = Math.floor(sec / 60), s = sec % 60;
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  },
  build: function (subjectKey, opts) {
    opts = opts || {};
    var bank = window.QuestionBank.get(subjectKey);
    var list = bank.slice();
    // 斩题过滤：被斩的题移出普通练习池
    try {
      var st = window.Store && window.Store.get();
      var cut = st && st.cutIds ? st.cutIds : [];
      if (cut.length) { var cutMap = {}; cut.forEach(function (c) { cutMap[c] = 1; }); list = list.filter(function (x) { return !cutMap[x.id]; }); }
    } catch (e) {}
    if (opts.moduleId) list = list.filter(function (q) { return q.module === opts.moduleId || q.section === opts.moduleId; });
    if (opts.difficulty) list = list.filter(function (q) { return (!opts.difficulty || q.difficulty === opts.difficulty); });
    if (opts.source === "zhenti") list = list.filter(function (q) { return !!q.year; });
    if (opts.source === "style") list = list.filter(function (q) { return !q.year; });
    // 默认混合组卷：剔除旧考纲真题（2019 年前），避免练到过时题目；「仅历年真题」保留全部年份由用户自行选择
    if (!opts.source) list = list.filter(function (q) { return !q.year || parseInt(q.year, 10) >= 2019; });
    var need = (opts.count == null ? 10 : Math.max(0, opts.count));
    var chosen = this.pick(list, Math.min(need, list.length));
    if (chosen.length < need && opts.source !== "zhenti") {
      var extra = window.Generator.generate(subjectKey, need - chosen.length, opts);
      chosen = chosen.concat(extra);
    }
    return chosen.map(function (q, idx) { return window.Quiz.decorate(q, idx); });
  },
  buildMock: function (subjectKey) {
    var bank = window.QuestionBank.get(subjectKey);
    var zhenti = window.QuestionBank.recent(subjectKey);
    var picked = [];
    function pickType(type, n) {
      // 优先用真题，不足再用真题风格题补
      var pool = zhenti.filter(function (q) { return q.type === type; });
      if (pool.length < n) {
        var style = bank.filter(function (q) { return q.type === type && !q.year; });
        pool = pool.concat(style);
      }
      picked = picked.concat(window.Quiz.pick(pool, n));
    }
    if (subjectKey === "gaoshu") {
      pickType("single", 8); pickType("fill", 4); pickType("calc", 8); pickType("proof", 1);
    } else if (subjectKey === "yingyu") {
      pickType("single", 30); pickType("fill", 5); pickType("app", 1);
    } else if (subjectKey === "jisuanji") {
      pickType("single", 25); pickType("judge", 5); pickType("fill", 10); pickType("app", 4);
    }
    return picked.map(function (q, idx) { return window.Quiz.decorate(q, idx); });
  },
  scoreOf: function (subjectKey, q) {
    var t = q.type;
    if (subjectKey === "gaoshu") return t === "single" ? 4 : t === "fill" ? 4 : t === "calc" ? 8 : t === "proof" ? 8 : 4;
    if (subjectKey === "jisuanji") return t === "single" ? 2 : t === "judge" ? 2 : t === "fill" ? 2 : t === "multi" ? 2 : t === "app" ? 10 : 2;
    if (subjectKey === "yingyu") {
      if (t === "app") return 20;
      if (q.section === "阅读理解") return 2;
      return t === "fill" ? 2 : 1;
    }
    return 1;
  },
  mockTotal: function (subjectKey) { return 120; },
  blueprintTotal: function (subjectKey, bpId) {
    var bps = (window.MOCK_BLUEPRINTS && window.MOCK_BLUEPRINTS[subjectKey]) || [];
    var bp = bps.filter(function (b) { return b.id === bpId; })[0] || bps[0];
    if (!bp) return 120;
    var t = 0;
    bp.slots.forEach(function (s) { t += s.count * window.Quiz.scoreOf(subjectKey, { type: s.type, section: s.section }); });
    return t;
  },
  buildBlueprint: function (subjectKey, bpId) {
    var bps = (window.MOCK_BLUEPRINTS && window.MOCK_BLUEPRINTS[subjectKey]) || [];
    var bp = bps.filter(function (b) { return b.id === bpId; })[0] || bps[0];
    if (!bp) return [];
    var bank = window.QuestionBank.get(subjectKey);
    var zhenti = window.QuestionBank.recent(subjectKey);
    var picked = [];
    // 听力题池（从听力材料出题，带 script 供播放）
    var listenPool = [];
    if (subjectKey === "yingyu") {
      var lsrc = ["LISTENING_DATA","LISTENING_EXTRA_DATA","LISTENING_EXTRA2_DATA","LISTENING_EXTRA3_DATA"];
      lsrc.forEach(function (k) {
        if (window[k] && window[k].materials) {
          window[k].materials.forEach(function (m) {
            (m.questions || []).forEach(function (q) {
              listenPool.push({ id: "ls-" + m.id + "-" + listenPool.length, type: q.type, section: "听力", stem: q.stem, options: q.options, answer: q.answer, explain: q.explain, difficulty: 1, year: "", source: "听力训练材料", script: m.script || "", matTitle: m.title || "" });
            });
          });
        }
      });
    }
    bp.slots.forEach(function (slot) {
      var need = slot.count;
      var got = [];
      if (slot.section === "听力" && listenPool.length) {
        picked = picked.concat(window.Quiz.pick(listenPool, need));
        return;
      }
      function pickFrom(src, strict) {
        var pool = src.filter(function (q) {
          if (strict && q.type !== slot.type) return false;
          if (!strict) return true;
          if (slot.module) { if (q.module !== slot.module) return false; }
          else if (q.section !== slot.section) return false;
          if (slot.diff && slot.diff.indexOf(q.difficulty) < 0) return false;
          return true;
        });
        return window.Quiz.pick(pool, need - got.length);
      }
      // 1) 真题(严格匹配) 2) 自命题(严格匹配) 3) 任意同题型 4) 生成器(过滤题型)
      got = got.concat(pickFrom(zhenti, true));
      if (got.length < need) got = got.concat(pickFrom(bank.filter(function (q) { return !q.year; }), true));
      if (got.length < need) {
        var any = bank.filter(function (q) { return q.type === slot.type; });
        got = got.concat(window.Quiz.pick(any, need - got.length));
      }
      if (got.length < need) {
        var filled = got.length, guard = 0;
        while (filled < need && guard < 200) {
          var g = window.Generator.generate(subjectKey, (need - filled) * 3).filter(function (x) { return x.type === slot.type; });
          var add = g.slice(0, need - filled);
          got = got.concat(add);
          filled += add.length; guard++;
        }
      }
      picked = picked.concat(got);
    });
    return picked.map(function (q, idx) { return window.Quiz.decorate(q, idx); });
  },
  decorate: function (q, idx) {
    var nq = { index: idx, id: q.id, type: q.type, module: q.module || "", section: q.section || "", point: q.point || "", stem: q.stem, answer: q.answer, explain: q.explain || "", difficulty: q.difficulty || 1, year: q.year || "", source: q.source || "", options: null, answerText: q.answer, script: q.script || "", matTitle: q.matTitle || "" };
    if (q.options && q.options.length) {
      var letters = ["A", "B", "C", "D", "E", "F"];
      var up = String(q.answer).toUpperCase().trim();
      if (q.type === "multi") {
        // 多选：选项不洗牌，answer 保持字母组合，answerText 列出所有正确选项文本
        nq.options = q.options.slice();
        var ansLets = up.split("").filter(function (l) { return letters.indexOf(l) >= 0; });
        nq.answer = ansLets.join("");
        nq.answerText = ansLets.map(function (l) { return q.options[letters.indexOf(l)]; }).join("、");
        return nq;
      }
      var ansIdx = letters.indexOf(up);
      if (ansIdx < 0) {
        // 答案为文本(如判断题 正确/错误)：按文本在选项中定位
        ansIdx = q.options.indexOf(q.answer);
      }
      if (ansIdx < 0 || ansIdx >= q.options.length) ansIdx = 0;
      var correctText = q.options[ansIdx];
      var shuffled;
      var shuffleOn = true;
      try { var st = window.Store && window.Store.get(); shuffleOn = !(st && st.settings && st.settings.shuffleOptions === false); } catch (e) {}
      if (shuffleOn) {
        shuffled = this.shuffle(q.options.slice());
        var newIdx = shuffled.indexOf(correctText);
        nq.options = shuffled;
        nq.answer = letters[newIdx >= 0 ? newIdx : 0];
      } else {
        nq.options = q.options.slice();
        nq.answer = letters[ansIdx >= 0 ? ansIdx : 0];
      }
      nq.answerText = correctText;
    }
    return nq;
  },
  grade: function (questions, userAnswers) {
    var correct = 0, total = questions.length, detail = [];
    function normSet(s) { return String(s).toUpperCase().split("").filter(function (c) { return c >= "A" && c <= "F"; }).sort().join(""); }
    questions.forEach(function (q) {
      var ua = (userAnswers[q.index] != null ? userAnswers[q.index] : "").toString().trim();
      var ok;
      if (q.type === "multi") { ok = normSet(ua) === normSet(q.answer); }
      else if (q.type === "fill" && String(q.answer).indexOf("|") >= 0) {
        var uParts = ua.split("|").map(function (x) { return x.trim().toLowerCase(); });
        var aParts = String(q.answer).split("|").map(function (x) { return x.trim().toLowerCase(); });
        ok = uParts.length === aParts.length && uParts.every(function (x, i) { return x === aParts[i]; });
      }
      else { ok = ua.toLowerCase() === String(q.answer).toLowerCase(); }
      if (ok) correct++;
      detail.push({ q: q, user: ua, ok: ok });
    });
    return { correct: correct, total: total, percent: total ? Math.round(correct * 100 / total) : 0, detail: detail };
  }
};