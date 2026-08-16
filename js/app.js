/* ============================================================
   重庆专升本·三科学习助手 —— 应用主逻辑
   零基础 · 长期维护 · 手机电脑双端 · 内置计时 · 联网自主出题
   ============================================================ */
window.App = (function () {
  var state = Store.get();

  /* 合并扩充词汇（vocab-extra / vocab-extra2）到主词汇表，去重 */
  (function mergeVocabExtra() {
    try {
      var ed = window.ENGLISH_DATA;
      if (!ed || !ed.vocab || !ed.vocab.words) return;
      var extra = (window.VOCAB_EXTRA_DATA && window.VOCAB_EXTRA_DATA.words) || [];
      var extra2 = (window.VOCAB_EXTRA2_DATA && window.VOCAB_EXTRA2_DATA.words) || [];
      var extra3 = (window.VOCAB_EXTRA3_DATA && window.VOCAB_EXTRA3_DATA.words) || [];
      var extra4 = (window.VOCAB_EXTRA4_DATA && window.VOCAB_EXTRA4_DATA.words) || [];
      var extra5 = (window.VOCAB_EXTRA5_DATA && window.VOCAB_EXTRA5_DATA.words) || [];
      var seen = {};
      ed.vocab.words.forEach(function (w) { seen[w.w] = true; });
      ed.vocab.words = ed.vocab.words.concat(
        extra.filter(function (w) { return w && w.w && !seen[w.w]; }).map(function (w) { seen[w.w] = true; return w; }),
        extra2.filter(function (w) { return w && w.w && !seen[w.w]; }).map(function (w) { seen[w.w] = true; return w; }),
        extra3.filter(function (w) { return w && w.w && !seen[w.w]; }).map(function (w) { seen[w.w] = true; return w; }),
        extra4.filter(function (w) { return w && w.w && !seen[w.w]; }).map(function (w) { seen[w.w] = true; return w; }),
        extra5.filter(function (w) { return w && w.w && !seen[w.w]; }).map(function (w) { seen[w.w] = true; return w; })
      );
      // 合并扩充短语（phrases-extra）
      if (ed.vocab.phrases) {
        var pe = (window.PHRASES_EXTRA_DATA && window.PHRASES_EXTRA_DATA.phrases) || [];
        var pseen = {};
        ed.vocab.phrases.forEach(function (p) { pseen[p.p] = true; });
        ed.vocab.phrases = ed.vocab.phrases.concat(
          pe.filter(function (p) { return p && p.p && !pseen[p.p]; }).map(function (p) { pseen[p.p] = true; return p; })
        );
      }
    } catch (e) {}
  })();

  /* ---------- 基础工具 ---------- */
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function dateKey(d) {
    var y = d.getFullYear(), m = ("0" + (d.getMonth() + 1)).slice(-2), dd = ("0" + d.getDate()).slice(-2);
    return y + "-" + m + "-" + dd;
  }
  function todayKey() { return dateKey(new Date()); }
  function pad(n) { return (n < 10 ? "0" + n : "" + n); }

  var SUBJ = {
    gaoshu: { name: "高等数学", icon: "📐" },
    yingyu: { name: "大学英语", icon: "🔤" },
    jisuanji: { name: "计算机基础", icon: "💻" }
  };
  function subjData(key) {
    if (key === "gaoshu") return window.MATH_DATA;
    if (key === "yingyu") return window.ENGLISH_DATA;
    if (key === "jisuanji") return window.COMPUTER_DATA;
    return null;
  }
  function subjName(key) { return SUBJ[key] ? SUBJ[key].name : key; }
  function typeLabel(t) {
    var m = { single: "单选", judge: "判断", fill: "填空", calc: "计算", proof: "证明", app: "应用" };
    return m[t] || t;
  }

  /* ---------- 学习计时器(番茄钟) ---------- */
  var study = { remain: 25 * 60, running: false, mode: "work" };
  var studyTimerId = null;
  function studyTick() {
    if (study.remain > 0) study.remain--;
    var el = $("studyClock");
    if (el) el.textContent = Quiz.fmt(study.remain);
    var ml = $("studyMode");
    if (ml) ml.textContent = (study.mode === "work" ? "专注" : "休息");
    if (study.remain === 0) {
      stopStudyTimer();
      alert(study.mode === "work" ? "🍅 专注结束，休息一下吧！" : "休息结束，继续加油！");
    }
  }
  function stopStudyTimer() { if (studyTimerId) { clearInterval(studyTimerId); studyTimerId = null; } study.running = false; }
  function startStudyTimer() { if (study.running) return; study.running = true; studyTimerId = setInterval(studyTick, 1000); }
  function resetStudyTimer(mode) { study.mode = mode || "work"; study.remain = study.mode === "work" ? 25 * 60 : 5 * 60; studyTick(); }

  /* ---------- 打卡 / 连续学习 ---------- */
  function touchToday() {
    var t = todayKey();
    if (state.stats.lastActive !== t) {
      var y = new Date(); y.setDate(y.getDate() - 1);
      state.stats.streak = (state.stats.lastActive === dateKey(y)) ? state.stats.streak + 1 : 1;
      state.stats.lastActive = t;
      Store.save();
    }
  }

  /* ---------- 每日任务计划 ---------- */
  function pickDailyModule(subject, mods, seqIdx) {
    var weak = weakModules();
    for (var i = 0; i < weak.length; i++) {
      if (weak[i].subject === subject) {
        for (var j = 0; j < mods.length; j++) if (mods[j].id === weak[i].id) return mods[j];
      }
    }
    return mods[seqIdx % mods.length];
  }
  function todayPlan() {
    var t = todayKey();
    if (!state.tasks[t]) state.tasks[t] = { plan: [], done: {}, custom: [] };
    var rec = state.tasks[t];
    if (!rec.plan || rec.plan.length === 0) {
      var seq = state.sequence;
      var gmods = SYLLABUS.subjects.gaoshu.modules;
      var cmods = SYLLABUS.subjects.jisuanji.modules;
      var gram = (window.ENGLISH_DATA && window.ENGLISH_DATA.grammar) || [];
      var gm = pickDailyModule('gaoshu', gmods, seq.gaoshu);
      var cm = pickDailyModule('jisuanji', cmods, seq.jisuanji);
      var gt = gram.length ? gram[seq.yingyu % gram.length] : null;
      var weakList = weakModules();
      var weakHigh = weakList.filter(function (w2) { return w2.subject === "gaoshu"; })[0];
      var weakEng = weakList.filter(function (w2) { return w2.subject === "yingyu"; })[0];
      var weakCom = weakList.filter(function (w2) { return w2.subject === "jisuanji"; })[0];
      rec.plan = [
        { id: "g1", subject: "gaoshu", title: "高数 · " + gm.title + (weakHigh ? "（薄弱，优先巩固）" : "") + "：掌握核心考点、公式与例题", module: gm.id, target: "study" },
        { id: "e1", subject: "yingyu", title: "英语 · 今日词汇：20 个高频词 + 10 个短语", module: "e2", target: "vocab" },
        { id: "e2", subject: "yingyu", title: "英语 · " + (weakEng ? "薄弱" + weakEng.name + "专项复习" : "语法专题：" + (gt ? gt.title : "语法")), module: weakEng ? weakEng.id : "grammar", target: weakEng ? "study" : "grammar" },
        { id: "c1", subject: "jisuanji", title: "计算机 · " + cm.title + (weakCom ? "（薄弱，优先巩固）" : "") + "：掌握考点与操作要点", module: cm.id, target: "study" },
        { id: "q1", subject: "all", title: "三科每日检测：每科 5 题(共 15 题)", module: "quiz", target: "quiz" }
      ];
      seq.gaoshu = (seq.gaoshu + 1) % gmods.length;
      seq.yingyu = (seq.yingyu + 1) % Math.max(1, gram.length);
      seq.jisuanji = (seq.jisuanji + 1) % cmods.length;
      Store.save();
    }
    return rec;
  }
  function weakModules() {
    var out = [];
    for (var key in SUBJ) {
      var ms = state.moduleStats[key] || {};
      var names = subjModules(key);
      for (var modId in ms) {
        var st2 = ms[modId];
        if (st2.total < 3) continue;
        var rate = Math.round((st2.total - st2.correct) * 100 / st2.total);
        if (rate >= 40) {
          var nm = modId;
          for (var i = 0; i < names.length; i++) if (names[i].id === modId) { nm = names[i].title; break; }
          var topPt = '';
          if (st2.points) {
            var bestPt = null;
            for (var pn in st2.points) {
              var pp2 = st2.points[pn];
              if (pp2.total >= 2) {
                var pr = (pp2.total - pp2.correct) / pp2.total;
                if (!bestPt || pr > bestPt.rate) bestPt = { name: pn, rate: pr, total: pp2.total, correct: pp2.correct };
              }
            }
            if (bestPt) topPt = bestPt.name + '(' + Math.round((bestPt.total - bestPt.correct) * 100 / bestPt.total) + '%)';
          }
          out.push({ subject: key, id: modId, name: nm, correct: st2.correct, total: st2.total, rate: rate, topPoint: topPt });
        }
      }
    }
    out.sort(function (a, b) { return b.rate - a.rate || b.total - a.total; });
    return out.slice(0, 3);
  }
  var REVIEW_DAYS = [0, 1, 3, 7, 15, 30, 60];
  function vocabReviewStats() {
    var vr = state.vocabReview || {};
    var words = (window.ENGLISH_DATA && window.ENGLISH_DATA.vocab && window.ENGLISH_DATA.vocab.words) || [];
    var st = { newWord: 0, learning: 0, mastered: 0, due: 0 };
    words.forEach(function (w) {
      var r = vr[w.w];
      if (!r || r.level === 0) { st.newWord++; return; }
      if (r.level >= 5) { st.mastered++; return; }
      st.learning++;
      if (r.due <= Date.now()) st.due++;
    });
    return st;
  }
  function dueVocab(count) {
    var vr = state.vocabReview || {};
    var words = (window.ENGLISH_DATA && window.ENGLISH_DATA.vocab && window.ENGLISH_DATA.vocab.words) || [];
    var due = words.filter(function (w) { var r = vr[w.w]; return r && r.level >= 1 && r.level < 5 && r.due <= Date.now(); });
    due.sort(function (a, b) { return (vr[a.w].due) - (vr[b.w].due); });
    if (due.length >= count) return due.slice(0, count);
    var newWords = words.filter(function (w) { var r = vr[w.w]; return !r || r.level === 0; });
    var need = count - due.length;
    var start = (dayOffset() * 7) % Math.max(1, newWords.length);
    for (var i = 0; i < need && newWords.length; i++) due.push(newWords[(start + i) % newWords.length]);
    return due;
  }
  function vocabReviewAction(word, action) {
    var vr = state.vocabReview = state.vocabReview || {};
    var r = vr[word] || { level: 0, due: 0 };
    if (action === "remember") {
      r.level = Math.min(6, r.level + 1);
      var days = REVIEW_DAYS[Math.min(r.level, REVIEW_DAYS.length - 1)];
      r.due = Date.now() + days * 86400000;
    } else {
      r.level = Math.max(1, r.level - 1);
      r.due = Date.now() + 86400000;
    }
    vr[word] = r;
    Store.save();
    render();
  }
  function dayOffset() { return Math.floor(Date.now() / 86400000); }
  // 确定性伪随机（以天数为种子）：每天随机一批、当天稳定，次日自动换批
  function seededRand(seed) {
    var x = (seed || 0) % 233280;
    return function () {
      x = (x * 9301 + 49297) % 233280;
      return x / 233280;
    };
  }
  function seededShuffle(arr, seed) {
    var a = arr.slice();
    var rnd = seededRand(seed);
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }
  function todayVocab(count) {
    var words = (window.ENGLISH_DATA && window.ENGLISH_DATA.vocab && window.ENGLISH_DATA.vocab.words) || [];
    count = count || 20;
    if (!words.length) return [];
    var arr = seededShuffle(words, dayOffset() * 7919 + 13);
    // 优先复习到期词，再补其他（含新词）
    var vr = state.vocabReview || {};
    var due = arr.filter(function (w) { var r = vr[w.w]; return r && r.level >= 1 && r.level < 5 && r.due <= Date.now(); });
    var out = due.slice(0, count);
    for (var i = 0; out.length < count && i < arr.length; i++) {
      if (out.indexOf(arr[i]) < 0) out.push(arr[i]);
    }
    return out;
  }
  function todayPhrases(count) {
    var ps = (window.ENGLISH_DATA && window.ENGLISH_DATA.vocab && window.ENGLISH_DATA.vocab.phrases) || [];
    count = count || 10;
    if (!ps.length) return [];
    return seededShuffle(ps, dayOffset() * 5279 + 7).slice(0, count);
  }

  /* ---------- 路由与导航 ---------- */
  function setActiveNav(view) {
    var links = document.querySelectorAll("[data-nav]");
    for (var i = 0; i < links.length; i++) {
      links[i].className = (links[i].getAttribute("data-nav") === view) ? "active" : "";
    }
  }
  function navigate(hash) { location.hash = hash; }

  function render() {
    var hash = location.hash || "#/dashboard";
    var parts = hash.replace(/^#\/?/, "").split("/");
    var view = parts[0] || "dashboard";
    var arg = parts[1] || "";
    var out = "";
    if (view === "dashboard") { setActiveNav("dashboard"); out = renderDashboard(); }
    else if (view === "syllabus") { setActiveNav("syllabus"); out = renderSyllabus(arg); }
    else if (view === "study") { setActiveNav("study"); out = renderStudy(arg); }
    else if (view === "quiz") { setActiveNav("quiz"); out = renderQuizSetup(arg); }
    else if (view === "daily") { setActiveNav("daily"); out = renderDaily(); }
    else if (view === "wrongbook") { setActiveNav("wrongbook"); out = renderWrongBook(arg); }
    else if (view === "report") { setActiveNav("report"); out = renderReport(); }
    else if (view === "graph") { setActiveNav("graph"); out = renderGraph(); }
    else if (view === "listening") { setActiveNav("listening"); out = window.ListeningUI.render(); }
    else if (view === "reading") { setActiveNav("reading"); out = window.ReadingUI.render(); }
    else if (view === "funcgallery") { setActiveNav("graph"); out = window.FuncGallery.render(); }
    else if (view === "essays") { setActiveNav("study"); out = renderEssayBank(); }
    else if (view === "zhenti" || view === "zhenti-files") { setActiveNav("quiz"); out = '<section class="card"><h2>📚 历年真题</h2><p class="dim">开源演示版不含历年真题内容（版权原因）。</p><p class="dim">💡 本仓库提供程序框架与自编资料；真题请从官方渠道获取后，按 README 说明接入题库。</p></section>'; }

    else if (view === "settings") { setActiveNav("settings"); out = renderSettings(); }
    else { setActiveNav("dashboard"); out = renderDashboard(); }
    var v = $("view");
    if (v) v.innerHTML = out;
    if (view === "funcgallery" && window.FuncGallery) { setTimeout(function () { window.FuncGallery.drawAll(); }, 50); }
  }

  /* ================= 首页 ================= */
  function renderDashboard() {
    touchToday();
    var d = new Date();
    var week = ["日", "一", "二", "三", "四", "五", "六"];
    var examDays = daysToExam();
    var plan = todayPlan();
    var doneCount = plan.plan.filter(function (t) { return plan.done[t.id]; }).length;
    var st = state.stats;
    var acc = st.answered ? Math.round(st.correct * 100 / st.answered) : 0;

    var s = "";
    s += '<div class="hero">';
    s += '<div class="hero-main">';
    s += '<h1>你好，专升本战友 👋</h1>';
    s += '<p class="date">' + d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日 · 星期" + week[d.getDay()] + '</p>';
    s += '<div class="clock" id="liveClock">--:--:--</div>';
    s += '</div>';
    s += '<div class="hero-side">';
    s += '<div class="statbox">距离考试<br><b>' + (examDays == null ? "--" : examDays) + '</b> 天</div>';
    s += '<div class="statbox">连续学习<br><b>' + st.streak + '</b> 天</div>';
    s += '</div>';
    s += '</div>';

    s += '<div class="grid2">';
    s += '<section class="card"><h2>📌 今日任务 (' + doneCount + "/" + plan.plan.length + ')</h2><ul class="mini">';
    plan.plan.forEach(function (t) {
      var ok = plan.done[t.id] ? "✔" : "○";
      s += '<li class="' + (plan.done[t.id] ? "done" : "") + '">' + ok + ' ' + esc(t.title) + '</li>';
    });
    s += '</ul><a class="btn" href="#/daily">查看并打卡 →</a></section>';

    s += '<section class="card"><h2>🔥 学习打卡（近 20 周）</h2>' + renderHeatmap() + '</section>';
    s += renderBadges();
    s += renderSprint();

    s += '<section class="card"><h2>📊 学习统计</h2><ul class="kv">';
    s += '<li>累计测验：<b>' + st.quizzesTaken + '</b> 次</li>';
    s += '<li>累计做题：<b>' + st.answered + '</b> 题</li>';
    s += '<li>总体正确率：<b>' + acc + '%</b></li>';
    for (var k in SUBJ) {
      var b = st.bySubject[k] || { answered: 0, correct: 0 };
      var p = b.answered ? Math.round(b.correct * 100 / b.answered) : 0;
      s += '<li>' + SUBJ[k].icon + " " + SUBJ[k].name + '：<b>' + p + '%</b> (' + (b.answered || 0) + '题)</li>';
    }
    s += '</ul></section>';
    s += '</div>';

    s += '<div class="grid2"><a class="btn big" href="#/report">📊 学习周报（近7天）</a>';
    s += '<a class="btn big" href="#/wrongbook">📕 错题本 (' + Object.keys(state.wrongBook || {}).length + ')</a></div>';

    s += '<section class="card"><h2>🔎 薄弱考点 TOP3（按模块错误率）</h2>';
    var weak = weakModules();
    if (!weak.length) s += '<p class="dim">做题还不够多，先刷几组题再来看薄弱点～</p>';
    else {
      s += '<ul class="mini">';
      weak.forEach(function (w2) {
        s += '<li>' + SUBJ[w2.subject].icon + ' ' + esc(w2.name) + '：错误率 <b>' + w2.rate + '%</b>（' + (w2.total - w2.correct) + '/' + w2.total + ' 题错）' + (w2.topPoint ? ' · 薄弱考点：' + esc(w2.topPoint) : '') + '</li>';
      });
      s += '</ul>';
      s += '<a class="btn" href="#/quiz">针对性再练 →</a>';
    }
    s += '</section>';

    var wbCount = Object.keys(state.wrongBook || {}).length;
    var dueN = reviewDueCount();
    if (dueN > 0) {
      s += '<section class="card"><h2>🧠 智能复习 (' + dueN + ' 题到期)</h2>';
      s += '<p class="dim">有 ' + dueN + ' 道错题到了复习时间（按遗忘曲线 1/3/7/15/30 天安排）。先复习它们，对抗遗忘！</p>';
      s += '<button class="btn primary" onclick="App.startReviewQuiz()">🧠 开始复习到期错题</button></section>';
    }
    s += '<section class="card"><h2>📕 错题本 (' + wbCount + ')</h2>';
    s += '<p class="dim">答错的题自动归档，随时重练，直到消灭错题。</p>';
    s += '<a class="btn' + (wbCount ? ' primary' : '') + '" href="#/wrongbook">' + (wbCount ? '去重练 →' : '查看错题本 →') + '</a>';
    s += '</section>';

    s += '<section class="card"><h2>🍅 学习计时器(番茄钟)</h2>';
    s += '<div class="pomodoro"><div class="pomodoro-clock" id="studyClock">' + Quiz.fmt(study.remain) + '</div>';
    s += '<div class="pomodoro-mode" id="studyMode">专注</div>';
    s += '<div class="pomodoro-btns">';
    s += '<button class="btn" onclick="App.studyStart()">开始</button>';
    s += '<button class="btn" onclick="App.studyPause()">暂停</button>';
    s += '<button class="btn" onclick="App.studyReset(0)">专注25分</button>';
    s += '<button class="btn" onclick="App.studyReset(1)">休息5分</button>';
    s += '</div></div></section>';

    s += '<div class="grid3">';
    s += '<a class="btn big" href="#/study/gaoshu">📐 高数学习</a>';
    s += '<a class="btn big" href="#/study/yingyu">🔤 英语学习</a>';
    s += '<a class="btn big" href="#/study/jisuanji">💻 计算机学习</a>';
    s += '</div>';
    s += '<div class="grid3">';
    s += '<a class="btn big primary" href="#/quiz/gaoshu">📝 今日检测</a>';
    s += '<a class="btn big" href="#/syllabus">📋 查看考纲</a>';
    s += '<a class="btn big" href="#/settings">⚙️ 设置</a>';
    s += '</div>';

    s += '<section class="card note"><h2>💡 备考提示</h2><p>' + esc(SYLLABUS.meta.examTimeHint) + '</p><p>' + esc(SYLLABUS.meta.note) + '</p></section>';
    return s;
  }
  function daysToExam() {
    var d = state.settings.examDate;
    if (!d) return null;
    var e = new Date(d + "T00:00:00");
    var n = new Date(); n.setHours(0, 0, 0, 0);
    return Math.round((e - n) / 86400000);
  }

  /* ================= 考纲 ================= */
  function renderSyllabus(arg) {
    var key = arg && SYLLABUS.subjects[arg] ? arg : "gaoshu";
    var s = '<div class="subjtabs">';
    for (var k in SYLLABUS.subjects) {
      var sy = SYLLABUS.subjects[k];
      s += '<a class="tab' + (k === key ? " active" : "") + '" href="#/syllabus/' + k + '">' + SUBJ[k].icon + " " + sy.name + '</a>';
    }
    s += '</div>';
    var sub = SYLLABUS.subjects[key];
    s += '<section class="card"><h2>' + sub.name + (sub.code ? " (科目代码 " + sub.code + ")" : "") + '</h2>';
    s += '<ul class="kv"><li>适用对象：<b>' + esc(sub.audience) + '</b></li>';
    s += '<li>考试方式：<b>' + esc(sub.mode) + '</b> · ' + sub.time + '分钟 · 满分 <b>' + sub.total + '分</b></li>';
    s += '<li>题型分值：' + sub.types.map(function (t) { return esc(t.name) + "(" + esc(t.score) + ")"; }).join("、") + '</li></ul>';
    s += '<h3>参考书目</h3><ul class="mini">';
    sub.books.forEach(function (b) { s += '<li>' + esc(b) + '</li>'; });
    s += '</ul></section>';

    s += '<section class="card"><h2>📚 考试内容与要求</h2>';
    sub.modules.forEach(function (m) {
      s += '<div class="modcard"><h3>' + esc(m.title) + priorityBadge(key, m.id) + '</h3><ol class="points">';
      m.points.forEach(function (p) { s += '<li>' + esc(p) + '</li>'; });
      s += '</ol></div>';
    });
    s += '</section>';

    s += '<section class="card"><h2>🔗 官方与资料来源</h2><ul class="mini">';
    SYLLABUS.meta.sources.forEach(function (src) {
      s += '<li><a href="' + esc(src.url) + '" target="_blank" rel="noopener">' + esc(src.name) + '</a></li>';
    });
    s += '</ul></section>';
    return s;
  }

  /* ================= 学习 ================= */
  function renderStudy(arg) {
    var key = arg && SUBJ[arg] ? arg : "gaoshu";
    var s = '<div class="subjtabs">';
    for (var k in SUBJ) {
      s += '<a class="tab' + (k === key ? " active" : "") + '" href="#/study/' + k + '">' + SUBJ[k].icon + " " + SUBJ[k].name + '</a>';
    }
    s += '</div>';
    if (key === "gaoshu") s += renderStudyMath();
    else if (key === "yingyu") s += renderStudyEnglish();
    else s += renderStudyComputer();
    return s;
  }
  function mastered(key) { return !!state.progress[key]; }
  function renderStudyMath() {
    var data = window.MATH_DATA;
    if (!data) return '<section class="card">高数数据尚未生成，请稍后刷新。</section>';
    var s = '<section class="card"><h2>📐 高等数学 · 考点/公式/方法/例题</h2><p class="dim">点击模块展开；已掌握的条目显示 ✅。需要直观理解函数图像？<a href="#/graph">📈 函数图像绘制 →</a></p>';
    data.modules.forEach(function (m) {
      var mCount = m.items.filter(function (it) { return mastered("gaoshu:" + it.id); }).length;
      s += '<div class="modcard"><h3 class="modhead" onclick="App.toggle(\'mod_' + m.id + '\')">' + esc(m.title) + priorityBadge('gaoshu', m.id) + ' <span class="dim">(' + mCount + "/" + m.items.length + ')</span></h3>';
      s += '<div id="mod_' + m.id + '" class="modbody" style="display:none">';
      s += moduleIntroHTML('gaoshu', m.id);
      s += '<button class="btn" onclick="App.unitQuiz(\'gaoshu\',\'' + m.id + '\',\'' + esc(m.title) + '\')">📝 本单元练习(8题)</button>';
      m.items.forEach(function (it) {
        var mk = "gaoshu:" + it.id;
        var ok = mastered(mk);
        s += '<div class="item' + (ok ? " ok" : "") + '">';
        s += '<div class="item-head"><span class="badge kind">' + esc(it.kind || "考点") + '</span>' + (isHot('gaoshu', m.id, it.title) ? '<span class="badge year">🔥高频</span>' : '') + '<b>' + esc(it.title) + '</b>';
        s += '<button class="tick' + (ok ? " on" : "") + '" onclick="App.toggleProgress(\'' + mk + '\')">' + (ok ? "✅已掌握" : "☐标记掌握") + '</button></div>';
        if (it.content) s += '<div class="itm-content">' + window.MathRender.render(it.content) + '</div>';
        if (it.formula) s += '<div class="formula">' + window.MathRender.render(it.formula) + '</div>';
        if (it.examples && it.examples.length) {
          s += '<div class="examples">';
          it.examples.forEach(function (ex) {
            s += '<div class="example"><div class="ex-q">例：' + window.MathRender.render(ex.q) + '</div>';
            if (ex.steps && ex.steps.length) s += '<ol class="ex-steps">' + ex.steps.map(function (st2) { return "<li>" + window.MathRender.render(st2) + "</li>"; }).join("") + '</ol>';
            if (ex.a) s += '<div class="ex-a">答案：' + window.MathRender.render(ex.a) + '</div>';
            s += '</div>';
          });
          s += '</div>';
        }
        s += '</div>';
      });
      s += '</div></div>';
    });
    s += '<h3>🧠 口诀与公式速记（必背）</h3>';
    s += '<div class="subjtabs small"><a class="tab active" href="#/study/gaoshu" onclick="App.tipsTab(\'gaoshu\',0);return false;">📝 口诀</a><a class="tab" href="#/study/gaoshu" onclick="App.tipsTab(\'gaoshu\',1);return false;">📐 公式速记</a></div>';
    s += '<div id="tipsList_gaoshu">' + tipsListHTML("gaoshu", 0) + '</div>';
    s += '<p class="dim">🎲 每次进入/刷新自动打乱 · 点「换一批」重新随机</p>';
    s += '</section>';
    return s;
  }
  function renderStudyComputer() {
    var data = window.COMPUTER_DATA;
    if (!data) return '<section class="card">计算机数据尚未生成，请稍后刷新。</section>';
    var s = '<section class="card"><h2>💻 计算机基础 · 考点详解</h2><p class="dim">点击模块展开；已掌握的条目显示 ✅。</p>';
    data.modules.forEach(function (m) {
      var mCount = m.points.filter(function (p) { return mastered("jisuanji:" + p.id); }).length;
      s += '<div class="modcard"><h3 class="modhead" onclick="App.toggle(\'mod_c_' + m.id + '\')">' + esc(m.title) + priorityBadge('jisuanji', m.id) + ' <span class="dim">(' + mCount + "/" + m.points.length + ')</span></h3>';
      s += '<div id="mod_c_' + m.id + '" class="modbody" style="display:none">';
      s += moduleIntroHTML('jisuanji', m.id);
      s += '<button class="btn" onclick="App.unitQuiz(\'jisuanji\',\'' + m.id + '\',\'' + esc(m.title) + '\')">📝 本单元练习(8题)</button>';
      m.points.forEach(function (p) {
        var pk = "jisuanji:" + p.id;
        var ok = mastered(pk);
        s += '<div class="item' + (ok ? " ok" : "") + '">';
        s += '<div class="item-head"><b>' + esc(p.title) + '</b><button class="tick' + (ok ? " on" : "") + '" onclick="App.toggleProgress(\'' + pk + '\')">' + (ok ? "✅已掌握" : "☐标记掌握") + '</button></div>';
        if (p.content) s += '<div class="itm-content">' + esc(p.content) + '</div>';
        var svgH = window.ComputerSvg ? window.ComputerSvg.get(p.id) : '';
        if (!svgH) { var pt = p.title || ''; if (pt.indexOf('拓扑') >= 0) svgH = window.ComputerSvg.get('c3-star') + window.ComputerSvg.get('c3-bus'); else if (pt.indexOf('工作原理') >= 0) svgH = window.ComputerSvg.get('c1-3'); else if (pt.indexOf('基本结构') >= 0 || pt.indexOf('三种结构') >= 0) svgH = window.ComputerSvg.get('c6-flow'); }
        if (svgH) s += svgH;
        s += '</div>';
      });
      s += '</div></div>';
    });
    s += '<h3>🧠 考点口诀与必备短句</h3>';
    s += '<div class="subjtabs small"><a class="tab active" href="#/study/jisuanji" onclick="App.tipsTab(\'jisuanji\',0);return false;">📝 口诀</a><a class="tab" href="#/study/jisuanji" onclick="App.tipsTab(\'jisuanji\',1);return false;">💬 必备短句</a></div>';
    s += '<div id="tipsList_jisuanji">' + tipsListHTML("jisuanji", 0) + '</div>';
    s += '<p class="dim">🎲 每次进入/刷新自动打乱 · 点「换一批」重新随机</p>';
    s += '</section>';
    return s;
  }
  function renderStudyEnglish() {
    var data = window.ENGLISH_DATA;
    if (!data) return '<section class="card">英语数据尚未生成，请稍后刷新。</section>';
    var s = '<section class="card"><h2>🔤 大学英语</h2>';
    s += '<p class="dim">✍️ <a href="#/essays">作文范文库→</a> · 🎧 <a href="#/listening">听力训练（TTS 朗读+理解题）→</a> · 📖 <a href="#/reading">阅读理解（短文+练习）→</a> · 🧠 <a href="#/study/yingyu" onclick="App.vocabTab(3);return false;">记忆复习</a></p>';
    // 语法
    s += '<h3>一、语法专题（点开查看规则与例句，含练习）</h3>';
    data.grammar.forEach(function (g) {
      s += '<div class="modcard"><h3 class="modhead" onclick="App.toggle(\'g_' + g.id + '\')">' + esc(g.title) + '</h3>';
      s += '<div id="g_' + g.id + '" class="modbody" style="display:none">';
      if (g.def) s += '<div class="itm-content">' + esc(g.def) + '</div>';
      if (g.rules && g.rules.length) s += '<ul class="mini">' + g.rules.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + '</ul>';
      if (g.examples && g.examples.length) {
        s += '<div class="examples"><b>例句：</b>';
        g.examples.forEach(function (e) {
          s += '<div class="example"><div class="ex-q">' + esc(e.en) + '</div><div class="ex-a">' + esc(e.cn) + (e.note ? ' <span class="dim">(' + esc(e.note) + ')</span>' : '') + '</div></div>';
        });
        s += '</div>';
      }
      if (g.practice && g.practice.length) {
        s += '<div class="examples"><b>随堂练习（点选项后提交，看对错与解析）：</b>';
        g.practice.forEach(function (p, i) {
          s += '<div class="example"><div class="ex-q">' + (i + 1) + '. ' + esc(p.q) + '</div>';
          if (p.options && p.options.length) {
            var letters2 = ["A", "B", "C", "D", "E"];
            s += '<div class="qopts">';
            p.options.forEach(function (o, oi) {
              s += '<label class="opt"><input type="radio" name="prac_' + g.id + '_' + i + '" value="' + letters2[oi] + '"> <span>' + letters2[oi] + '. ' + esc(o) + '</span></label>';
            });
            s += '</div>';
            s += '<button class="btn" onclick="App.checkPractice(\'' + g.id + '\',' + i + ')">提交</button>';
            s += '<div class="ex-a dim" id="prac_ans_' + g.id + '_' + i + '"></div>';
          } else {
            s += '<div class="ex-a">答案：' + esc(p.answer) + ' · ' + esc(p.explain || "") + '</div>';
          }
          s += '</div>';
        });
        s += '</div>';
      }
      s += '</div></div>';
    });
    // 词汇
    s += '<h3>二、高频词汇与短语</h3>';
    s += '<div class="vocab-tools"><input id="vocabSearch" placeholder="搜索单词/释义…" oninput="App.filterVocab(this.value)"></div>';
    s += '<div class="subjtabs small"><a class="tab active" href="#/study/yingyu" onclick="App.vocabTab(0);return false;">高频词</a><a class="tab" href="#/study/yingyu" onclick="App.vocabTab(1);return false;">短语</a><a class="tab" href="#/study/yingyu" onclick="App.vocabTab(2);return false;">高频句型</a><a class="tab" href="#/study/yingyu" onclick="App.vocabTab(3);return false;">🧠 记忆复习</a></div>';
    s += '<div id="vocabList">' + vocabListHTML(0, "") + '</div>';
    // 写作
    s += '<h3>二、✍️ AI 作文批改（需配置 AI）</h3>';
    s += '<div class="form"><textarea id="aiEssay" rows="5" placeholder="粘贴你的应用文作文，AI 将给出评分、逐条修改意见与范文" style="width:100%;padding:10px;border:1px solid var(--line);border-radius:10px;font-size:14px"></textarea>';
    s += '<button class="btn primary" onclick="App.aiGrade()">🤖 批改作文</button></div>';
    s += '<div id="aiEssayOut" class="itm-content"></div>';
    s += '<h3>三、应用文写作模板</h3>';
    data.writing.forEach(function (w) {
      s += '<div class="modcard"><h3 class="modhead" onclick="App.toggle(\'w_' + w.id + '\')">' + esc(w.type) + '</h3>';
      s += '<div id="w_' + w.id + '" class="modbody" style="display:none">';
      if (w.structure) s += '<div class="itm-content"><b>格式结构：</b>' + esc(w.structure) + '</div>';
      if (w.template) s += '<div class="formula">' + esc(w.template) + '</div>';
      if (w.sample) s += '<div class="example"><div class="ex-q">范文：</div><div class="ex-a">' + esc(w.sample) + '</div></div>';
      if (w.tips) s += '<div class="itm-content">' + esc(w.tips) + '</div>';
      s += '</div></div>';
    });
    s += '</section>';
    return s;
  }
  var vocabTabState = 0;
  var vocabPageIdx = { 0: 0, 1: 0, 2: 0 };
  var VOCAB_PAGE_SIZE = 30;
  function vocabListHTML(tab, kw) {
    var data = window.ENGLISH_DATA;
    var list = tab === 0 ? data.vocab.words : tab === 1 ? data.vocab.phrases : data.vocab.sentences;
    kw = (kw || "").toLowerCase();
    var rows = list.filter(function (x) {
      if (!kw) return true;
      var hay = (tab === 0 ? (x.w + x.cn) : tab === 1 ? (x.p + x.cn) : (x.en + x.cn)).toLowerCase();
      return hay.indexOf(kw) >= 0;
    });
    rows = window.Quiz.shuffle(rows);
    var totalPages = Math.max(1, Math.ceil(rows.length / VOCAB_PAGE_SIZE));
    if (!vocabPageIdx[tab]) vocabPageIdx[tab] = 0;
    if (vocabPageIdx[tab] >= totalPages) vocabPageIdx[tab] = 0;
    var cur = vocabPageIdx[tab] || 0;
    var shown = rows.slice(cur * VOCAB_PAGE_SIZE, (cur + 1) * VOCAB_PAGE_SIZE);
    var s = '<div class="vocab-tools" style="margin:8px 0"><span class="dim">共 ' + list.length + ' 个 · 已随机打乱 · 本页 ' + shown.length + ' 个（' + (cur + 1) + '/' + totalPages + ' 页）</span> <button class="btn" onclick="App.vocabShuffle()">🎲 换一批</button></div>';
    if (tab === 0) {
      s += '<table class="vocab"><thead><tr><th>单词</th><th>词性</th><th>释义</th><th>例句</th></tr></thead><tbody>' +
        shown.map(function (w) { return '<tr><td><b>' + esc(w.w) + '</b> <button class="spk" onclick="App.speak(\x27' + esc(w.w) + '\x27)">🔊</button></td><td>' + esc(w.pos || "") + '</td><td>' + esc(w.cn) + '</td><td>' + esc(w.ex || "") + (w.exCn ? '<br><span class="dim">' + esc(w.exCn) + '</span>' : '') + '</td></tr>'; }).join("") +
        '</tbody></table>';
    } else if (tab === 1) {
      s += '<table class="vocab"><thead><tr><th>短语</th><th>释义</th><th>例句</th></tr></thead><tbody>' +
        shown.map(function (p) { return '<tr><td><b>' + esc(p.p) + '</b> <button class="spk" onclick="App.speak(\x27' + esc(p.p) + '\x27)">🔊</button></td><td>' + esc(p.cn) + '</td><td>' + esc(p.ex || "") + (p.exCn ? '<br><span class="dim">' + esc(p.exCn) + '</span>' : '') + '</td></tr>'; }).join("") +
        '</tbody></table>';
    } else {
      s += '<ul class="mini">' + shown.map(function (snt) { return '<li><b>' + esc(snt.en) + '</b><br><span class="dim">' + esc(snt.cn) + '</span>' + (snt.topic ? ' <span class="badge kind">' + esc(snt.topic) + '</span>' : '') + '</li>'; }).join("") + '</ul>';
    }
    if (totalPages > 1) {
      s += '<div class="pager" style="display:flex;justify-content:center;align-items:center;gap:10px;margin-top:12px">';
      s += '<button class="btn" style="padding:4px 12px" ' + (cur === 0 ? "disabled" : "") + ' onclick="App.vocabPage(\x27' + tab + '\x27,' + (cur - 1) + ')">← 上一页</button>';
      s += '<span class="dim">第 ' + (cur + 1) + ' / ' + totalPages + ' 页</span>';
      s += '<button class="btn" style="padding:4px 12px" ' + (cur >= totalPages - 1 ? "disabled" : "") + ' onclick="App.vocabPage(\x27' + tab + '\x27,' + (cur + 1) + ')">下一页 →</button>';
      s += '</div>';
    }
    return s;
  }
  function vocabPage(tab, page) {
    vocabPageIdx[tab] = parseInt(page, 10) || 0;
    var kw = $("vocabSearch") ? $("vocabSearch").value : "";
    var el = $("vocabList");
    if (el) el.innerHTML = vocabListHTML(vocabTabState, kw);
  }
  function vocabTab(tab) {
    vocabTabState = tab;
    vocabPageIdx[tab] = 0;
    var kw = $("vocabSearch") ? $("vocabSearch").value : "";
    var el = $("vocabList");
    if (el) el.innerHTML = (tab === 3) ? renderVocabReviewHTML() : vocabListHTML(tab, kw);
    var tabs = document.querySelectorAll(".subjtabs.small .tab");
    for (var i = 0; i < tabs.length; i++) tabs[i].className = "tab" + (i === tab ? " active" : "");
  }
  function renderVocabReviewHTML() {
    var data = window.ENGLISH_DATA;
    var words = (data.vocab && data.vocab.words) || [];
    var vr = state.vocabReview || {};
    var st = vocabReviewStats();
    var due = words.filter(function (w) { var r = vr[w.w]; return r && r.level >= 1 && r.level < 5 && r.due <= Date.now(); });
    due.sort(function (a, b) { return vr[a.w].due - vr[b.w].due; });
    var newWords = words.filter(function (w) { var r = vr[w.w]; return !r || r.level === 0; }).slice(0, 10);
    var s = '<div class="dim" style="margin-bottom:8px">生词 ' + st.newWord + ' · 学习中 ' + st.learning + '（今日到期 ' + st.due + '）· 已掌握 ' + st.mastered + '</div>';
    s += '<p class="dim">按遗忘曲线（1/3/7/15/30 天）自动安排复习：点「记住了」推迟复习，点「忘了」明天再学。</p>';
    if (due.length) {
      s += '<h4>🔔 今日需复习 (' + due.length + ')</h4><div class="wordgrid">';
      due.forEach(function (w) {
        var r = vr[w.w];
        s += '<div class="wordcard"><b>' + esc(w.w) + '</b> <button class="spk" onclick="App.speak(\'' + esc(w.w) + '\')">🔊</button><div>' + esc(w.cn) + '</div><div class="dim">' + esc(w.ex || "") + '</div>';
        s += '<div style="margin-top:6px"><button class="tick on" onclick="App.vocabReviewAction(\'' + esc(w.w) + '\',\'remember\')">✅ 记住了</button> <button class="tick" onclick="App.vocabReviewAction(\'' + esc(w.w) + '\',\'forget\')">🔄 忘了</button></div></div>';
      });
      s += '</div>';
    } else {
      s += '<p class="dim">今日没有到期复习词，去学新词吧～</p>';
    }
    if (newWords.length) {
      s += '<h4>📖 今日新词 (10)</h4><div class="wordgrid">';
      newWords.forEach(function (w) {
        s += '<div class="wordcard"><b>' + esc(w.w) + '</b> <button class="spk" onclick="App.speak(\'' + esc(w.w) + '\')">🔊</button><div>' + esc(w.cn) + '</div><div class="dim">' + esc(w.ex || "") + '</div>';
        s += '<div style="margin-top:6px"><button class="tick" onclick="App.vocabReviewAction(\'' + esc(w.w) + '\',\'remember\')">✅ 记住了</button></div></div>';
      });
      s += '</div>';
    }
    return s;
  }
  var vocabDebounce = null;
  function filterVocab(kw) {
    if (vocabDebounce) clearTimeout(vocabDebounce);
    vocabDebounce = setTimeout(function () {
      var el = $("vocabList");
      if (el) el.innerHTML = vocabListHTML(vocabTabState, kw);
    }, 180);
  }

  function vocabShuffle() {
    vocabPageIdx[vocabTabState] = Math.floor(Math.random() * 999);
    var el = $("vocabList");
    if (el) el.innerHTML = (vocabTabState === 3) ? renderVocabReviewHTML() : vocabListHTML(vocabTabState, $("vocabSearch") ? $("vocabSearch").value : "");
  }
  var tipsState = { gaoshu: 0, jisuanji: 0 };
  function tipsListHTML(subject, tab) {
    var data = subject === "gaoshu" ? (window.MATH_TIPS_DATA || null) : (window.COMPUTER_TIPS_DATA || null);
    if (!data) return '<p class="dim">速记数据加载中…</p>';
    var list = tab === 0 ? data.mnemonics : (subject === "gaoshu" ? data.formulas : data.phrases);
    var rows = window.Quiz.shuffle(list.slice());
    var shown = rows.slice(0, 12);
    var s = '<div class="vocab-tools" style="margin:8px 0"><span class="dim">共 ' + list.length + ' 条 · 已随机打乱（每次进入/刷新自动重排）</span> <button class="btn" onclick="App.tipsShuffle(\'' + subject + '\',' + tab + ')">🎲 换一批</button></div>';
    s += '<div class="modcard">';
    if (subject === "gaoshu" && tab === 1) {
      shown.forEach(function (f) {
        s += '<div class="formula" style="margin:8px 0"><b>' + esc(f.title) + '：</b>' + window.MathRender.render(f.formula) + '</div>';
      });
    } else {
      shown.forEach(function (m) {
        s += '<div class="item"><div class="item-head"><b>' + esc(m.title) + '</b></div><div class="itm-content">' + (subject === "gaoshu" ? window.MathRender.render(m.content) : esc(m.content)) + '</div></div>';
      });
    }
    s += '</div>';
    return s;
  }
  function tipsTab(subject, tab) {
    tipsState[subject] = tab;
    var el = $("tipsList_" + subject);
    if (el) el.innerHTML = tipsListHTML(subject, tab);
    var tabs = document.querySelectorAll(".subjtabs.small .tab");
    for (var i = 0; i < tabs.length; i++) {
      var onclick = tabs[i].getAttribute("onclick") || "";
      if (onclick.indexOf("tipsTab('" + subject + "'") >= 0) {
        tabs[i].className = "tab" + (onclick.indexOf("," + tab + ")") >= 0 ? " active" : "");
      }
    }
  }
  function tipsShuffle(subject, tab) {
    var el = $("tipsList_" + subject);
    if (el) el.innerHTML = tipsListHTML(subject, tab);
  }

  /* ================= 测验 ================= */
  var quiz = null;
  var lastResult = null;
  var quizTimerId = null;
  var quizCardOpen = false;
  var quizSeqKey = null;
  var quizSeqStart = 0;
  function renderQuizSetup(arg) {
    var key = arg && SUBJ[arg] ? arg : "gaoshu";
    var s = '<div class="subjtabs">';
    for (var k in SUBJ) s += '<a class="tab' + (k === key ? " active" : "") + '" href="#/quiz/' + k + '">' + SUBJ[k].icon + " " + SUBJ[k].name + '</a>';
    s += '</div>';
    s += '<section class="card"><h2>📝 组卷测验 · ' + SUBJ[key].name + '</h2>';
    s += '<div class="form"><label>题数 <select id="qcount">' + [5, 10, 15, 20].map(function (n) { return '<option value="' + n + '"' + (n === 10 ? " selected" : "") + '>' + n + '</option>'; }).join("") + '</select></label>';
    s += '<label>难度 <select id="qdiff"><option value="">全部</option><option value="1">基础</option><option value="2">中等</option><option value="3">拔高</option></select></label>';
    s += '<label>来源 <select id="qsource"><option value="">全部题库</option><option value="style">仅自编题(自命题)</option></select></label>';
    
    s += '<label>范围 <select id="qmodule"><option value="">全部模块</option>';
    var mods = subjModules(key);
    mods.forEach(function (m) { s += '<option value="' + esc(m.id) + '">' + esc(m.title) + '</option>'; });
    s += '</select></label></div>';
    s += '<div class="pomodoro-btns">';
    s += '<button class="btn primary" onclick="App.startQuiz(\'' + key + '\')">🚀 随机组卷(题库+生成器)</button>';
    s += '<label>模拟卷 <select id="qbp"><option value="">随机组卷(120分钟)</option>';
    var bps = (window.MOCK_BLUEPRINTS && window.MOCK_BLUEPRINTS[key]) || [];
    bps.forEach(function (b) { s += '<option value="' + esc(b.id) + '">' + esc(b.name) + '</option>'; });
    s += '</select></label>';
    s += '<button class="btn primary" onclick="App.startMockExam(\'' + key + '\')">🎯 开考模拟卷(120分钟·按考纲题型布局)</button>';
    s += '<button class="btn" onclick="App.startWeakQuiz(\'' + key + '\')">🔎 薄弱模块优先(10题)</button>';
    s += '<button class="btn" onclick="App.startDailyQuiz(\'' + key + '\')">📅 每日检测(5题)</button>';
    s += '<button class="btn" onclick="App.startEasyQuiz(\'' + key + '\')">🖐️ 基础找手感(10题·难度1)</button>';
    s += '<button class="btn" onclick="App.startSeqQuiz(\'' + key + '\')">🔁 顺序练习(按题库顺序·进度记忆)</button>';
    s += '<button class="btn" onclick="App.cutManage()">✂️ 斩题管理(' + cutCount() + ')</button>';
    s += '<button class="btn" id="aiBtn" onclick="App.aiQuiz(\'' + key + '\')">🤖 AI 联网出题</button>';
    s += '</div>';
    s += '<p class="dim">AI 出题需在「设置」中配置 AI 密钥；未配置时也可用内置题库 + 模板生成器离线出题。</p>';
    s += '<p class="dim">本科目内置题库：<b>' + window.QuestionBank.count(key) + '</b> 题（自编题 ' + (window.QuestionBank.count(key) - window.QuestionBank.zhentiCount(key)) + ' + 历年题 ' + window.QuestionBank.zhentiCount(key) + ' 题' + (window.QuestionBank.zhentiYears(key).length ? '：' + window.QuestionBank.zhentiYears(key).join('/') + ' 年' : '') + '）；支持计时自动交卷。</p>';
    s += '</section>';

    // 最近成绩
    s += '<section class="card"><h2>最近测验记录</h2>';
    var hist = state.stats.history.filter(function (h) { return h.subject === key; }).slice(0, 10);
    if (!hist.length) s += '<p class="dim">暂无记录。</p>';
    else {
      s += '<table class="vocab"><thead><tr><th>日期</th><th>方式</th><th>正确/总题</th><th>正确率</th></tr></thead><tbody>';
      hist.forEach(function (h) {
        s += '<tr><td>' + esc(h.date) + '</td><td>' + esc(h.mode || "") + '</td><td>' + h.correct + "/" + h.total + '</td><td>' + h.percent + '%</td></tr>';
      });
      s += '</tbody></table>';
    }
    s += '</section>';
    return s;
  }
  function startMockExam(key) {
    var bpId = ($('qbp') && $('qbp').value) || '';
    var qs;
    var mode = '模拟考试';
    if (bpId) {
      qs = Quiz.buildBlueprint(key, bpId);
      var bps = (window.MOCK_BLUEPRINTS && window.MOCK_BLUEPRINTS[key]) || [];
      var bp = bps.filter(function (b) { return b.id === bpId; })[0];
      mode = '模拟卷·' + (bp ? bp.name.split('（')[0] : bpId);
    } else {
      qs = Quiz.buildMock(key);
    }
    if (!qs.length) { alert('题库不足，无法组模拟卷'); return; }
    beginQuiz(qs, key, mode, true, bpId);
  }
  function startZhentiQuiz(subject, moduleId, count, title) {
    var qs = Quiz.build(subject, { source: 'zhenti', moduleId: moduleId, count: count || 10 });
    if (!qs.length) { alert('该分组暂无题目'); return; }
    beginQuiz(qs, subject, '专项练习·' + (title || moduleId));
  }
  function startYearQuiz(subject, year) {
    var qs = window.QuestionBank.zhentiOf(subject).filter(function (q) { return String(q.year) === String(year); });
    if (!qs.length) { alert('该年份暂无已录入题目'); return; }
    var ordered = window.Quiz.shuffle(qs.slice());
    var decorated = ordered.map(function (q, i) { return window.Quiz.decorate(q, i); });
    beginQuiz(decorated, subject, year + '年整卷测验·' + subjName(subject));
  }
  function startWeakQuiz(key) {
    var weak = weakModules().filter(function (w) { return w.subject === key; });
    if (!weak.length) { alert('该科目暂无薄弱模块，先多做几组题吧'); return; }
    var qs = Quiz.build(key, { moduleId: weak[0].id, count: 10 });
    beginQuiz(qs, key, '薄弱模块·' + weak[0].name);
  }
  /* ================= 斩题 / 顺序练习 / 智能复习 ================= */
  function isCut(id) {
    try { return (state.cutIds || []).indexOf(id) >= 0; } catch (e) { return false; }
  }
  function cutCount() {
    try { return (state.cutIds || []).length; } catch (e) { return 0; }
  }
  // 练习中一键斩题：加入斩题列表，跳过此题
  function cutQuestion(idx) {
    if (!quiz || !quiz.questions[idx]) return;
    var q = quiz.questions[idx];
    var id = q.id || ("q" + idx);
    state.cutIds = state.cutIds || [];
    if (state.cutIds.indexOf(id) < 0) state.cutIds.push(id);
    Store.save();
    if (quiz.current < quiz.questions.length - 1) { quiz.current++; renderQuiz(); }
    else { alert("✂️ 已斩题（最后一题）。返回测验页继续练习"); location.hash = "#/quiz/" + quiz.subject; }
  }
  // 恢复被斩的题
  function uncutQuestion(id) {
    state.cutIds = state.cutIds || [];
    var i = state.cutIds.indexOf(id);
    if (i >= 0) state.cutIds.splice(i, 1);
    Store.save();
    render();
  }
  // 斩题管理页
  function cutManage() {
    var cut = state.cutIds || [];
    var items = [];
    ["gaoshu", "yingyu", "jisuanji"].forEach(function (key) {
      window.QuestionBank.get(key).forEach(function (q) {
        if (cut.indexOf(q.id) >= 0) items.push({ q: q, subj: key });
      });
    });
    var s = '<section class="card"><h2>✂️ 斩题管理 (' + items.length + ')</h2>';
    s += '<p class="dim">斩题 = 把一眼就会/不想再练的题移出普通练习池（随机组卷/顺序练习不再出）。模拟卷与真题整卷不受影响。可随时恢复。</p>';
    if (!items.length) s += '<p class="dim">暂无斩题。练习时点题目右上角「✂️ 斩题」即可移出。</p>';
    else {
      s += '<div class="pomodoro-btns"><button class="btn primary" onclick="App.uncutAll()">♻️ 全部恢复</button></div>';
      s += '<ul class="tasklist">';
      items.forEach(function (it) {
        var q = it.q;
        s += '<li><div class="task-body"><div>' + SUBJ[it.subj].icon + ' <b>' + esc(String(q.stem || "").slice(0, 60)) + '</b></div>';
        s += '<div class="dim">' + esc(q.point || q.module || q.section || "") + ' · 答案：' + esc(q.answer) + '</div>';
        s += '<div class="task-act"><a href="javascript:void(0)" onclick="App.uncutQuestion(\x27' + q.id + '\x27)">♻️ 恢复</a></div></div></li>';
      });
      s += '</ul>';
    }
    s += '<div class="pomodoro-btns"><a class="btn" href="#/quiz">返回测验</a></div></section>';
    var v = $("view"); if (v) v.innerHTML = s;
  }
  function uncutAll() {
    state.cutIds = [];
    Store.save();
    render();
  }
  // 顺序练习：按题库顺序从上次位置继续，进度记忆
  function startSeqQuiz(key) {
    var bank = window.QuestionBank.get(key);
    var cut = state.cutIds || [];
    if (cut.length) { var cm = {}; cut.forEach(function (c) { cm[c] = 1; }); bank = bank.filter(function (x) { return !cm[x.id]; }); }
    if (!bank.length) { alert("该科目暂无题目"); return; }
    var pos = (state.seqProgress && state.seqProgress[key]) || 0;
    if (pos >= bank.length) pos = 0;
    var need = 10;
    var picked = [];
    for (var i = 0; i < need && (pos + i) < bank.length; i++) picked.push(bank[pos + i]);
    var decorated = picked.map(function (q, i) { return window.Quiz.decorate(q, i); });
    quizSeqKey = key;
    quizSeqStart = pos;
    beginQuiz(decorated, key, "顺序练习·第" + (pos + 1) + "-" + (pos + picked.length) + "题");
  }
  // 交卷后推进顺序练习进度
  function advanceSeq(key, answeredCount) {
    var bank = window.QuestionBank.get(key);
    var cur = (state.seqProgress && state.seqProgress[key]) || 0;
    var next = Math.min(cur + answeredCount, bank.length);
    state.seqProgress = state.seqProgress || {};
    state.seqProgress[key] = next;
    if (next >= bank.length) { state.seqProgress[key] = 0; alert("🎉 顺序练习已刷完一轮！已自动回到开头，可再刷一遍。"); }
    Store.save();
  }
  /* ---------- 智能复习：错题按遗忘曲线安排复习 ---------- */
  var REVIEW_STEPS = [1, 3, 7, 15, 30];
  function reviewDueCount() {
    var plan = state.reviewPlan || {};
    var wb = state.wrongBook || {};
    var now = Date.now();
    var n = 0;
    for (var id in plan) { if (wb[id] && plan[id].due <= now) n++; }
    return n;
  }
  function reviewDueList(subject) {
    var plan = state.reviewPlan || {};
    var wb = state.wrongBook || {};
    var now = Date.now();
    var out = [];
    for (var id in plan) {
      var w = wb[id];
      if (w && plan[id].due <= now && (!subject || w.subject === subject)) out.push(id);
    }
    return out;
  }
  // 智能复习：把到期错题组成一组练习
  function startReviewQuiz() {
    var ids = reviewDueList();
    var wb = state.wrongBook || {};
    if (!ids.length) { alert("今天没有到期需要复习的错题 🎉"); return; }
    ids.sort(function (a, b) { return wb[a].wrongAt - wb[b].wrongAt; });
    var qs = ids.map(function (id, i) {
      var w = wb[id];
      return Quiz.decorate({ id: id, type: w.type, module: w.module, section: w.section, point: "", stem: w.stem, options: w.options, answer: w.answerText || w.answer, explain: w.explain, difficulty: 1, year: w.year }, i);
    });
    beginQuiz(qs, qs[0] ? qs[0].subject : "gaoshu", "🧠 智能复习·到期错题");
  }
  // 错题答对时推进复习计划；答错重置
  function updateReviewPlan(id, ok) {
    try {
      state.reviewPlan = state.reviewPlan || {};
      if (!ok) {
        state.reviewPlan[id] = { due: Date.now(), step: 0 };
        return;
      }
      var cur = state.reviewPlan[id];
      var step = (cur && typeof cur.step === "number") ? cur.step + 1 : 1;
      var days = REVIEW_STEPS[Math.min(step, REVIEW_STEPS.length) - 1] || 30;
      state.reviewPlan[id] = { due: Date.now() + days * 86400000, step: step };
    } catch (e) {}
  }

  function priorityBadge(subject, moduleId) {
    var pr = window.SUBJECT_PRIORITY && window.SUBJECT_PRIORITY[subject] && window.SUBJECT_PRIORITY[subject][moduleId];
    if (!pr || !pr.level) return '';
    var map = { '必考': '⭐必考', '常考': '🔥常考', '低频': '📄低频' };
    return ' <span class="badge ' + (pr.level === '必考' ? 'year' : 'kind') + '">' + (map[pr.level] || pr.level) + '</span>';
  }
  function hotOf(subject, moduleId) {
    var pr = window.SUBJECT_PRIORITY && window.SUBJECT_PRIORITY[subject] && window.SUBJECT_PRIORITY[subject][moduleId];
    return (pr && pr.hot) || [];
  }
  function isHot(subject, moduleId, title) {
    var hot = hotOf(subject, moduleId);
    for (var i = 0; i < hot.length; i++) if (title && title.indexOf(hot[i]) >= 0) return true;
    return false;
  }
  function moduleIntroHTML(subject, moduleId) {
    var intro = window.MODULE_INTROS && window.MODULE_INTROS[subject] && window.MODULE_INTROS[subject][moduleId];
    if (!intro) return '';
    var h = '';
    if (intro.intro) h += '<div class="itm-content" style="background:#fff7e6;border-left:3px solid #f59e0b;padding:8px 12px;border-radius:6px">🎯 ' + esc(intro.intro) + '</div>';
    if (intro.links && intro.links.length) {
      h += '<p class="dim">📺 推荐学习：' + intro.links.map(function (l) { return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.name) + '</a>'; }).join('　') + '</p>';
    }
    return h;
  }
  function checkPractice(gid, idx) {
    var g = null;
    (window.ENGLISH_DATA.grammar || []).forEach(function (x) { if (x.id === gid) g = x; });
    if (!g || !g.practice || !g.practice[idx]) return;
    var q = g.practice[idx];
    var radios = document.querySelectorAll("input[name=prac_" + gid + "_" + idx + "]:checked");
    var user = radios.length ? radios[0].value : "";
    var ok = user.toLowerCase() === String(q.answer).toLowerCase();
    var box = $("prac_ans_" + gid + "_" + idx);
    if (box) box.textContent = (ok ? "✅ 正确！" : "❌ 你的答案：" + (user || "未作答") + " · 正确答案：" + q.answer) + (q.explain ? "　" + q.explain : "");
  }
  function unitQuiz(subject, moduleId, title) {
    var qs = Quiz.build(subject, { moduleId: moduleId, count: 8 });
    if (!qs.length) { alert('本单元暂无题目'); return; }
    beginQuiz(qs, subject, "单元练习·" + (title || moduleId));
  }
  function subjModules(key) {
    if (key === "yingyu") {
      var secs = [];
      var eqs = window.QuestionBank.get("yingyu");
      eqs.forEach(function (q) { if (q.section && secs.indexOf(q.section) < 0) secs.push(q.section); });
      if (secs.length) return secs.map(function (s) { return { id: s, title: s }; });
      return SYLLABUS.subjects.yingyu.modules;
    }
    var d = subjData(key);
    if (d && d.modules) return d.modules;
    return SYLLABUS.subjects[key].modules;
  }
  function readQuizOpts() {
    var count = parseInt($("qcount") ? $("qcount").value : "10", 10);
    var diff = $("qdiff") ? parseInt($("qdiff").value, 10) : 0;
    var mod = $("qmodule") ? $("qmodule").value : "";
    var src = $("qsource") ? $("qsource").value : "";
    return { count: count, difficulty: diff || 0, moduleId: mod || "", source: src || "" };
  }
  var quiz = null;
  var lastResult = null;
  var quizTimerId = null;

  function startQuiz(key) {
    var o = readQuizOpts();
    var qs = Quiz.build(key, o);
    beginQuiz(qs, key, "随机组卷");
  }
  function startDailyQuiz(key) {
    var qs = Quiz.build(key, { count: 5 });
    beginQuiz(qs, key, "每日检测");
  }
  function startEasyQuiz(key) {
    var qs = Quiz.build(key, { count: 10, difficulty: 1 });
    if (!qs.length) { alert("暂无基础题，先做其他练习吧"); return; }
    beginQuiz(qs, key, "基础找手感");
  }
  function beginQuiz(qs, key, mode, isMock, bpId) {
    quiz = { questions: qs, answers: {}, current: 0, startTs: Date.now(), totalSec: Math.max(60, (isMock ? 120 : qs.length) * 60), subject: key, mode: mode, isMock: !!isMock, blueprintId: bpId || '' };
    renderQuiz();
    startQuizTimer();
  }
  async function aiQuiz(key) {
    var o = readQuizOpts();
    var btn = $("aiBtn");
    if (!AI.isConfigured()) {
      if (!confirm("尚未配置 AI 密钥。是否现在前往设置？")) return;
      location.hash = "#/settings";
      return;
    }
    try {
      if (btn) { btn.disabled = true; btn.textContent = "AI 生成中…"; }
      var raw = await AI.generate({ subject: key, module: o.moduleId || "", count: o.count, difficulty: o.difficulty });
      var qs = raw.map(function (q, i) { return Quiz.decorate(q, i); });
      beginQuiz(qs, key, "AI出题");
    } catch (e) {
      alert("AI 出题失败：" + e.message);
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = "🤖 AI 联网出题"; }
    }
  }
  function startQuizTimer() {
    if (quizTimerId) clearInterval(quizTimerId);
    quizTimerId = setInterval(function () {
      if (!quiz) return;
      var elapsed = Math.floor((Date.now() - quiz.startTs) / 1000);
      var remain = Math.max(0, quiz.totalSec - elapsed);
      var el = $("qztimer");
      if (el) el.textContent = "⏱ " + Quiz.fmt(remain);
      if (remain <= 0) { clearInterval(quizTimerId); quizSubmit(true); }
    }, 1000);
  }
  function renderQuiz() {
    if (!quiz) return;
    var q = quiz.questions[quiz.current];
    var s = '<section class="card">';
    s += '<div class="quizbar">';
    s += '<div class="quizmeta">' + SUBJ[quiz.subject].icon + " " + subjName(quiz.subject) + " · " + esc(quiz.mode) + '</div>';
    s += '<div class="qztimer" id="qztimer">⏱ ' + Quiz.fmt(quiz.totalSec) + '</div>';
    s += '</div>';
    var answeredCount = quiz.questions.filter(function (qq) { return quiz.answers[qq.index] != null && quiz.answers[qq.index] !== ""; }).length;
    s += '<div class="qprog">第 ' + (quiz.current + 1) + ' / ' + quiz.questions.length + ' 题 · 已答 ' + answeredCount + '/' + quiz.questions.length + ' <button class="btn" style="padding:2px 10px;margin-left:6px" onclick="App.toggleCard()">📋 答题卡</button></div>';
    s += '<div class="qdots">';
    quiz.questions.forEach(function (qq, i) {
      var cls = i === quiz.current ? "qdot cur" : (quiz.answers[qq.index] != null && quiz.answers[qq.index] !== "" ? "qdot ans" : "qdot");
      s += '<span class="' + cls + '" onclick="App.quizGoto(' + i + ')">' + (i + 1) + '</span>';
    });
    s += '</div>';
    s += questionHTML(q);
    s += '<div class="quiznav">';
    s += '<button class="btn" ' + (quiz.current === 0 ? "disabled" : "") + ' onclick="App.quizPrev()">← 上一题</button>';
    s += '<button class="btn" onclick="App.quizNext()">' + (quiz.current === quiz.questions.length - 1 ? "到最后一题" : "下一题 →") + '</button>';
    s += '<button class="btn" onclick="App.toggleCard()">📋 答题卡</button>';
    s += '<button class="btn" onclick="App.cutQuestion(' + quiz.current + ')" title="把这道题移出普通练习池">✂️ 斩题</button>';
    s += '<button class="btn primary" onclick="App.quizSubmit()">交卷</button>';
    s += '</div></section>';
    s += '<button class="qsubmit-fab" onclick="App.quizSubmit()">📤 交卷</button>';
    if (quizCardOpen) {
      var cells = quiz.questions.map(function (qq, i) {
        var st = i === quiz.current ? "cur" : (quiz.answers[qq.index] != null && quiz.answers[qq.index] !== "" ? "ans" : "");
        return '<span class="acell ' + st + '" onclick="App.cardGoto(' + i + ')">' + (i + 1) + '</span>';
      }).join("");
      s += '<div class="card-overlay" onclick="if(event.target===this)App.toggleCard()"><div class="answer-card"><div class="answer-card-head">📋 答题卡 <button class="btn" style="padding:2px 10px" onclick="App.toggleCard()">✕ 关闭</button></div>';
      s += '<div class="answer-card-grid">' + cells + '</div>';
      s += '<div class="answer-card-legend"><span class="acell ans" style="display:inline-block;width:22px;height:22px;font-size:11px;line-height:22px;text-align:center;border-radius:4px;margin-right:4px">1</span>已答　<span class="acell" style="display:inline-block;width:22px;height:22px;font-size:11px;line-height:22px;text-align:center;border-radius:4px;margin-right:4px">2</span>未答　<span class="acell cur" style="display:inline-block;width:22px;height:22px;font-size:11px;line-height:22px;text-align:center;border-radius:4px;margin-right:4px">3</span>当前题</div>';
      s += '<div class="answer-card-foot"><button class="btn primary" onclick="App.quizSubmit()">📤 交卷</button></div></div></div>';
    }
    var v = $("view"); if (v) v.innerHTML = s;
  }
  function toggleCard() { quizCardOpen = !quizCardOpen; renderQuiz(); }
  function cardGoto(i) { quizCardOpen = false; quiz.current = i; renderQuiz(); }
  function questionHTML(q) {
    var src = q.source || "";
    var pendingMark = (src.indexOf("AI判定") >= 0 || src.indexOf("AI 判定") >= 0 || src.indexOf("重建") >= 0 || src.indexOf("OCR") >= 0 || src.indexOf("核算") >= 0) ? ' <span class="badge kind" title="该题原卷为回忆版/扫描件，答案由 AI 或 OCR 整理，建议对照官方答案确认">⚠️ 待官方确认</span>' : "";
    var s = '<div class="qcard"><div class="qmeta">' + (isCut(q.id) ? '<span class="badge kind" title="已斩题，普通练习不会出此题">✂️ 已斩</span> ' : '') + '<span class="badge kind">' + typeLabel(q.type) + '</span>' + (q.year ? ' <span class="badge year">📅 ' + esc(q.year) + ' 真题</span>' : '') + (q.point ? ' <span class="dim">' + esc(q.point) + '</span>' : '') + ' <span class="badge kind">' + window.Quiz.scoreOf(quiz.subject, q) + '分</span> <span class="dim">难度' + "★".repeat(q.difficulty || 1) + '</span>' + pendingMark + '</div>';
    if (q.script) {
      s += '<div class="itm-content" style="background:#eef6ff;margin-bottom:8px"><b>🎧 听力材料：' + esc(q.matTitle || "") + '</b> <button class="btn" style="padding:2px 10px" onclick="App.playListen(' + q.index + ')">🔊 播放材料</button><br><span class="dim" style="font-size:12px">点击播放听材料（可重听），再回答下列问题。</span></div>';
    }
    s += '<div class="qstem">' + (quiz.subject === "gaoshu" ? window.MathRender.render(q.stem) : esc(q.stem)) + '</div>';
    if (q.options && q.options.length) {
      var letters = ["A", "B", "C", "D", "E", "F"];
      s += '<div class="qopts">';
      if (q.type === "multi") {
        q.options.forEach(function (opt, i) {
          var cur = quiz.answers[q.index] || "";
          var sel = cur.indexOf(letters[i]) >= 0;
          s += '<label class="opt' + (sel ? " sel" : "") + '"><input type="checkbox" name="q' + q.index + '" value="' + letters[i] + '"' + (sel ? " checked" : "") + ' onchange="App.toggleMulti(' + q.index + ',\'' + letters[i] + '\')"> <span>' + letters[i] + '. ' + esc(opt) + '</span></label>';
        });
      } else {
        q.options.forEach(function (opt, i) {
          var sel = (quiz.answers[q.index] === letters[i]);
          s += '<label class="opt' + (sel ? " sel" : "") + '"><input type="radio" name="q' + q.index + '" value="' + letters[i] + '"' + (sel ? " checked" : "") + ' onchange="App.setAnswer(' + q.index + ',\'' + letters[i] + '\')"> <span>' + letters[i] + '. ' + esc(opt) + '</span></label>';
        });
      }
      s += '</div>';
    } else if (q.type === "fill" && String(q.answer || "").indexOf("|") >= 0) {
      // 多空填空：多个空分开作答，答案用 | 分隔
      var nBlanks = String(q.answer).split("|").length;
      var curVal = quiz.answers[q.index] || "";
      var curParts = curVal.split("|");
      s += '<div class="qfill"><div class="dim" style="margin-bottom:4px">本题有 ' + nBlanks + ' 个空，请分别填写：</div>';
      for (var bi = 0; bi < nBlanks; bi++) {
        s += '<input type="text" id="fill' + q.index + '_' + bi + '" value="' + esc(curParts[bi] || "") + '" placeholder="第 ' + (bi + 1) + ' 空" oninput="App.setFill(' + q.index + ',' + bi + ', this.value)" style="margin:2px 6px 2px 0;min-width:140px">';
      }
      s += '</div>';
    } else {
      var val = quiz.answers[q.index] || "";
      s += '<div class="qfill"><input type="text" id="fill' + q.index + '" value="' + esc(val) + '" placeholder="请输入答案" oninput="App.setAnswer(' + q.index + ', this.value)"></div>';
    }
    s += '</div>';
    return s;
  }
  function setFill(idx, blankIdx, val) {
    if (!quiz) return;
    var parts = (quiz.answers[idx] || "").split("|");
    while (parts.length <= blankIdx) parts.push("");
    parts[blankIdx] = val;
    quiz.answers[idx] = parts.join("|");
    var dots = document.querySelectorAll(".qdot");
    if (dots[idx]) { dots[idx].className = quiz.answers[idx] === "" ? "qdot" : "qdot ans"; }
  }
  function setAnswer(idx, val) {
    if (!quiz) return;
    quiz.answers[idx] = val;
    var dots = document.querySelectorAll(".qdot");
    if (dots[idx]) { dots[idx].className = val === "" ? "qdot" : "qdot ans"; }
    var labels = document.querySelectorAll(".qopts .opt");
    for (var i = 0; i < labels.length; i++) {
      var inp = labels[i].querySelector("input");
      labels[i].className = "opt" + (inp && inp.checked ? " sel" : "");
    }
  }
  function toggleMulti(idx, letter) {
    if (!quiz) return;
    var cur = quiz.answers[idx] || "";
    var has = cur.indexOf(letter) >= 0;
    var set = cur.split("").filter(function (c) { return c !== letter; });
    if (!has) set.push(letter);
    set.sort();
    quiz.answers[idx] = set.join("");
    var dots = document.querySelectorAll(".qdot");
    if (dots[idx]) { dots[idx].className = quiz.answers[idx] === "" ? "qdot" : "qdot ans"; }
    var labels = document.querySelectorAll(".qopts .opt");
    for (var i = 0; i < labels.length; i++) {
      var inp = labels[i].querySelector("input");
      labels[i].className = "opt" + (inp && inp.checked ? " sel" : "");
    }
  }
  function quizGoto(i) { if (!quiz) return; quiz.current = i; renderQuiz(); }
  function quizPrev() { if (!quiz || quiz.current === 0) return; quiz.current--; renderQuiz(); }
  function quizNext() { if (!quiz) return; if (quiz.current < quiz.questions.length - 1) { quiz.current++; renderQuiz(); } }
  function quizSubmit(auto) {
    if (!quiz) return;
    if (quizTimerId) clearInterval(quizTimerId);
    var g = Quiz.grade(quiz.questions, quiz.answers);
    lastResult = g;
    try { recordStats(quiz.subject, g); } catch (e) { try { console.error('recordStats:', e); } catch (e2) {} }
    if (quizSeqKey && !quiz.isMock) { try { advanceSeq(quizSeqKey, quiz.questions.length); } catch (e3) {} quizSeqKey = null; }
    renderQuizResult(g, auto);
  }
  function retryWrong() {
    if (!lastResult || !quiz) return;
    var wrongs = lastResult.detail.filter(function (d) { return !d.ok; }).map(function (d) { return d.q; });
    if (!wrongs.length) { alert('本组没有错题，太棒了 🎉'); return; }
    var qs = wrongs.map(function (q, i) {
      return Quiz.decorate({ id: q.id, type: q.type, module: q.module, point: q.point, stem: q.stem, options: q.options, answer: q.answerText, explain: q.explain, difficulty: q.difficulty }, i);
    });
    beginQuiz(qs, quiz.subject, '错题重练');
  }
  function recordStats(subjectKey, g) {
    state.stats.quizzesTaken += 1;
    state.stats.answered += g.total;
    state.stats.correct += g.correct;
    var bs = state.stats.bySubject[subjectKey] || { taken: 0, answered: 0, correct: 0 };
    bs.taken += 1; bs.answered += g.total; bs.correct += g.correct;
    state.stats.bySubject[subjectKey] = bs;
    state.stats.history.unshift({ date: todayKey(), subject: subjectKey, mode: quiz.mode, correct: g.correct, total: g.total, percent: g.percent });
    if (state.stats.history.length > 200) state.stats.history.length = 200;
    var mstats = state.moduleStats[subjectKey] = state.moduleStats[subjectKey] || {};
    g.detail.forEach(function (d) {
      var q = d.q;
      var modId = q.module || q.section || "other";
      var ms = mstats[modId] = mstats[modId] || { correct: 0, total: 0, points: {} };
      if (!ms.points) ms.points = {};
      if (!ms.correct) ms.correct = 0;
      if (!ms.total) ms.total = 0;
      ms.total++; if (d.ok) ms.correct++;
      var pt = q.point || '其他';
      var ps = ms.points[pt] = ms.points[pt] || { correct: 0, total: 0 };
      ps.total++; if (d.ok) ps.correct++;
      var wb = state.wrongBook;
      if (d.ok && wb[q.id]) {
        wb[q.id].consecutiveCorrect = (wb[q.id].consecutiveCorrect || 0) + 1;
        if (wb[q.id].consecutiveCorrect >= 3) { delete wb[q.id]; if (state.reviewPlan) delete state.reviewPlan[q.id]; state.stats.autoMastered = (state.stats.autoMastered || 0) + 1; }
        else { updateReviewPlan(q.id, true); }
      }
      if (!d.ok && q.id) {
        if (!wb[q.id]) wb[q.id] = { subject: subjectKey, stem: q.stem, answer: q.answer, answerText: q.answerText || "", explain: q.explain || "", year: q.year || "", module: q.module || "", section: q.section || "", type: q.type, wrongAt: Date.now(), wrongCount: 0, consecutiveCorrect: 0 };
        wb[q.id].wrongCount++; wb[q.id].wrongAt = Date.now(); wb[q.id].consecutiveCorrect = 0;
        updateReviewPlan(q.id, false);
      }
    });
    // 每日活动记录(周报用)
    var t = todayKey();
    var da = state.dailyActivity = state.dailyActivity || {};
    var d2 = da[t] = da[t] || { answered: 0, correct: 0, quizzes: 0 };
    d2.answered += g.total; d2.correct += g.correct; d2.quizzes += 1;
    touchToday();
    Store.save();
  }
  function renderQuizResult(g, auto) {
    var msg = g.percent >= 90 ? "🎉 太棒了，继续保持！" : g.percent >= 70 ? "👍 不错，继续巩固薄弱点！" : g.percent >= 50 ? "💪 有进步空间，坚持就是胜利！" : "📚 零基础别灰心，多刷多练！";
    var s = '<section class="card"><h2>测验结果</h2>';
    var isMock = quiz.isMock;
    if (isMock) {
      var score = 0, totalScore = quiz.blueprintId ? Quiz.blueprintTotal(quiz.subject, quiz.blueprintId) : Quiz.mockTotal(quiz.subject);
      g.detail.forEach(function (d) { if (d.ok) score += Quiz.scoreOf(quiz.subject, d.q); });
      s += '<div class="score">' + score + ' / ' + totalScore + ' 分</div>';
      s += '<div class="score-sub">模拟得分（按考纲分值计）· 答对 ' + g.correct + '/' + g.total + ' 题</div>';
    } else {
      s += '<div class="score">' + g.correct + ' / ' + g.total + '</div>';
      s += '<div class="score-sub">正确率 ' + g.percent + '% ' + (auto ? "(超时自动交卷)" : "") + '</div>';
    }
    s += '<div class="score-sub">' + msg + '</div>';
    s += '<div class="score-sub">📕 答错的题已自动加入错题本，可随时在首页「错题本」重练。</div>';
    s += '<div class="pomodoro-btns"><a class="btn primary" href="#/quiz/' + quiz.subject + '">再来一组</a>';
    if (g.correct < g.total) s += '<button class="btn" onclick="App.retryWrong()">🔁 错题重练(' + (g.total - g.correct) + '题)</button>';
    s += '<a class="btn" href="#/dashboard">回首页</a></div>';
    s += '</section>';
    s += '<section class="card"><h2>📖 逐题解析</h2>';
    g.detail.forEach(function (d, i) {
      var q = d.q;
      s += '<div class="example' + (d.ok ? "" : " wrong") + '">';
      s += '<div class="ex-q">' + (i + 1) + '. [' + typeLabel(q.type) + '] ' + (q.year ? '【' + esc(q.year) + '】' : '') + (quiz.subject === "gaoshu" ? window.MathRender.render(q.stem) : esc(q.stem)) + '</div>';
      if (q.options && q.options.length) {
        var letters = ["A", "B", "C", "D", "E", "F"];
        s += '<div class="ex-a">选项：' + q.options.map(function (o, j) { return letters[j] + ". " + esc(o); }).join('　') + '</div>';
      }
      s += '<div class="ex-a">你的答案：' + (d.user === "" ? "未作答" : esc(d.user)) + '　·　正确答案：' + esc(q.answer) + (q.answerText && q.answerText !== q.answer ? " (" + esc(q.answerText) + ")" : "") + (d.ok ? " ✅" : " ❌") + '</div>';
      if (q.explain) s += '<div class="ex-a dim">解析：' + esc(q.explain) + '</div>';
      s += '</div>';
    });
    s += '</section>';
    var v = $("view"); if (v) v.innerHTML = s;
    window.scrollTo(0, 0);
  }
  /* ================= 函数图像 ================= */
  function renderGraph() {
    var s = '<section class="card"><h2>📈 函数图像绘制</h2>';
    s += '<p class="dim">输入函数表达式（支持 x、+ - * / ^、括号与 sin cos tan ln log abs sqrt exp、常量 pi/e），点击绘制。对应考纲「基本初等函数的性质与图像」。</p>';
    s += '<p><a class="btn" href="#/funcgallery">📚 常见函数图像一览（基本初等函数+性质）→</a></p>';
    s += '<div class="form"><label>y = <input type="text" id="fxExpr" value="x^2" placeholder="例如 x^2、sin(x)、e^x、1/x"></label>';
    s += '<div class="pomodoro-btns"><button class="btn primary" onclick="App.drawGraph()">🎯 绘制</button>';
    s += '<button class="btn" onclick="App.graphClear()">清空</button></div></div>';
    s += '<div class="pomodoro-btns">';
    var ps = window.FuncGraph.PRESETS || [];
    ps.forEach(function (p2) { s += '<button class="btn" onclick="App.graphSet(\'' + p2 + '\')">y=' + esc(p2) + '</button>'; });
    s += '</div>';
    s += '<canvas id="fxCanvas" width="960" height="480" style="width:100%;height:auto;max-height:480px;background:#fff;border:1px solid var(--line);border-radius:10px"></canvas>';
    s += '<p class="dim" id="fxHint">示例：x^2（抛物线）、sin(x)（正弦）、e^x（指数）、ln(x)（对数）、1/x（反比例）</p>';
    s += '</section>';
    return s;
  }
  function drawGraph() {
    var el = $("fxExpr");
    var expr = el ? el.value : "x^2";
    var cv = $("fxCanvas");
    var hint = $("fxHint");
    if (cv) {
      var r = window.FuncGraph.draw(cv, expr);
      if (hint) hint.textContent = r.error ? ("⚠ " + r.error) : ("y = " + expr + " 的图像如上");
    }
  }
  function graphSet(expr) {
    var el = $("fxExpr");
    if (el) el.value = expr;
    drawGraph();
  }
  function graphClear() {
    var cv = $("fxCanvas");
    if (cv) { var ctx = cv.getContext("2d"); ctx.clearRect(0, 0, cv.width, cv.height); }
    var hint = $("fxHint");
    if (hint) hint.textContent = "";
  }

  /* ================= 错题本 ================= */

  /* ---------- 重点题收藏 ---------- */
  function favQuestions() {
    var favs = state.favIds || [];
    var out = [];
    ["gaoshu", "yingyu", "jisuanji"].forEach(function (key) {
      window.QuestionBank.get(key).forEach(function (q) {
        if (favs.indexOf(q.id) >= 0) out.push(q);
      });
    });
    return out;
  }
  function toggleFav(id) {
    var favs = state.favIds = state.favIds || [];
    var i = favs.indexOf(id);
    if (i >= 0) favs.splice(i, 1); else favs.push(id);
    Store.save();
    render();
  }
  function isFav(id) { return (state.favIds || []).indexOf(id) >= 0; }
  function startFavQuiz() {
    var favs = favQuestions();
    if (!favs.length) { alert("暂无收藏的题"); return; }
    var decorated = favs.map(function (q, i) { return window.Quiz.decorate(q, i); });
    var subj = favs[0].module ? "gaoshu" : (favs[0].section ? "yingyu" : "jisuanji");
    beginQuiz(decorated, subj, "⭐ 收藏的题");
  }
  function renderFavSection() {
    var favs = favQuestions();
    if (!favs.length) return "";
    var s = '<section class="card"><h2>⭐ 我的收藏 (' + favs.length + ')</h2><p class="dim">答题时点「☆收藏」即可收藏；这里可重做或取消。</p>';
    s += '<div class="pomodoro-btns"><button class="btn primary" onclick="App.startFavQuiz()">📝 重做收藏(' + favs.length + ')</button></div>';
    s += '<ul class="tasklist">';
    favs.forEach(function (q) {
      var subj = q.module ? "gaoshu" : (q.section ? "yingyu" : "jisuanji");
      var icon = SUBJ[subj] ? SUBJ[subj].icon : "📌";
      s += '<li><div class="task-body"><div>' + icon + ' ' + (q.year ? '<span class="badge year">📅 ' + esc(q.year) + '</span> ' : '') + '<b>' + esc(String(q.stem || "").length > 50 ? String(q.stem).slice(0, 50) + "…" : q.stem) + '</b></div>';
      s += '<div class="task-act"><a href="javascript:void(0)" onclick="App.toggleFav(\x27' + q.id + '\x27)">✕ 取消收藏</a></div></div></li>';
    });
    s += '</ul></section>';
    return s;
  }

  function renderWrongBook(arg) {
    var subj = arg && SUBJ[arg] ? arg : "all";
    var wb = state.wrongBook || {};
    var items = [];
    for (var id in wb) items.push({ id: id, w: wb[id] });
    items.sort(function (a, b) { return (b.w.wrongCount - a.w.wrongCount) || (b.w.wrongAt - a.w.wrongAt); });
    if (subj !== "all") items = items.filter(function (it) { return it.w.subject === subj; });
    var s = '<section class="card"><h2>📕 错题本 (' + items.length + ')</h2>';
    s += '<div class="subjtabs"><a class="tab' + (subj === "all" ? " active" : "") + '" href="#/wrongbook">全部</a>';
    for (var k in SUBJ) s += '<a class="tab' + (subj === k ? " active" : "") + '" href="#/wrongbook/' + k + '">' + SUBJ[k].icon + " " + SUBJ[k].name + '</a>';
    s += '</div>';
    s += '<p class="dim">做错的题自动收入错题本（带年份/考点/错误次数）；连续答对 3 次自动标记掌握并移除；可一键重练、同类题再练、AI 讲解或手动移除。</p>';
    if (!items.length) s += '<p class="dim">暂无错题，继续保持！🎉</p>';
    else {
      s += '<div class="pomodoro-btns"><button class="btn" onclick="App.startReviewQuiz()">🧠 智能复习(到期' + reviewDueCount() + ')</button>';
      s += '<button class="btn primary" onclick="App.retryWrongBook(\'' + (subj === "all" ? "" : subj) + '\')">🔁 重练全部' + (subj === "all" ? "" : "（" + SUBJ[subj].name + "）") + '错题</button>';
      s += '<button class="btn" onclick="window.print()">🖨 打印错题</button> <button class="btn" onclick="App.exportWrong()">📄 导出错题(txt)</button></div>';
      s += '<ul class="tasklist">';
      items.forEach(function (it) {
        var w = it.w;
        var year = w.year ? ' <span class="badge year">📅 ' + esc(w.year) + ' 真题</span>' : '';
        var mod = w.module || w.section || "";
        s += '<li><div class="task-body">';
        s += '<div>' + SUBJ[w.subject].icon + ' ' + (year ? year + ' ' : '') + '<b>' + esc(w.stem.length > 60 ? w.stem.slice(0, 60) + "…" : w.stem) + '</b> <span class="dim">×' + w.wrongCount + '</span></div>';
        s += '<div class="dim">' + esc(mod) + ' · 答案：' + esc(w.answer) + (w.answerText && w.answerText !== w.answer ? '（' + esc(w.answerText) + '）' : '') + '</div>';
        if (w.explain) s += '<div class="dim">' + esc(w.explain.slice(0, 80)) + '</div>';
        s += '<div class="task-act">';
        s += '<a href="javascript:void(0)" onclick="App.retryWrongBook(\'' + w.subject + '\')">重练该科 →</a>';
        s += ' <a href="javascript:void(0)" onclick="App.retrySimilar(\'' + w.subject + '\',\'' + (w.module || w.section || '') + '\')">📎 同类题再练</a>';
        if (AI.isConfigured()) s += ' <a href="javascript:void(0)" onclick="App.aiExplain(\'' + it.id + '\')">🤖 AI 深度讲解</a>';
        s += ' <a href="javascript:void(0)" onclick="App.removeWrong(\'' + it.id + '\')">✕ 已掌握移除</a>';
        s += '</div></div></li>';
      });
      s += '</ul>';
    }
    s += '</section>';
    return s;
  }
  function retryWrongBook(subject) {
    var wb = state.wrongBook || {};
    var ids = [];
    for (var id in wb) { if (!subject || wb[id].subject === subject) ids.push(id); }
    if (!ids.length) { alert('错题本是空的 🎉'); return; }
    var qs = ids.map(function (id, i) {
      var w = wb[id];
      return Quiz.decorate({ id: id, type: w.type, module: w.module, section: w.section, point: "", stem: w.stem, options: w.options, answer: w.answerText || w.answer, explain: w.explain, difficulty: 1, year: w.year }, i);
    });
    var subj = subject || (wb[ids[0]] ? wb[ids[0]].subject : "gaoshu");
    beginQuiz(qs, subj, "错题重练");
  }
  function retrySimilar(subject, moduleId) {
    var qs = Quiz.build(subject, { moduleId: moduleId || '', count: 5 });
    if (!qs.length) { alert('该考点暂无题目'); return; }
    beginQuiz(qs, subject, '同类巩固·' + (moduleId || ''));
  }
  function removeWrong(id) {
    if (state.wrongBook && state.wrongBook[id]) { delete state.wrongBook[id]; Store.save(); render(); }
  }
  function exportWrong() {
    var wb = state.wrongBook || {};
    var ids = Object.keys(wb);
    if (!ids.length) { alert('错题本是空的'); return; }
    var lines = ['重庆专升本学习助手 - 错题本导出', '导出时间：' + new Date().toLocaleString(), '共 ' + ids.length + ' 题', '='.repeat(30)];
    ids.sort(function (a, b) { return (wb[b].wrongCount - wb[a].wrongCount) || (wb[b].wrongAt - wb[a].wrongAt); });
    ids.forEach(function (id, i) {
      var w = wb[id];
      lines.push('[' + (i + 1) + '] ' + (w.year ? '(' + w.year + '年) ' : '') + (w.stem || ''));
      lines.push('    考点：' + (w.module || w.section || '') + '　答案：' + (w.answerText || w.answer) + '　错' + w.wrongCount + '次');
      if (w.explain) lines.push('    解析：' + w.explain);
      lines.push('');
    });
    var blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = '错题本-' + todayKey() + '.txt';
    a.click();
  }
  async function aiExplain(id) {
    var w = state.wrongBook && state.wrongBook[id];
    if (!w) return;
    if (!AI.isConfigured()) { alert('未配置 AI 密钥，请在「设置」中填写'); return; }
    var el = $("view");
    try {
      var text = await AI.explainWrong(w);
      var out = '<section class="card"><h2>🤖 AI 深度讲解</h2>';
      out += '<div class="qstem">' + esc(w.stem) + '</div>';
      out += '<div class="ex-a">正确答案：' + esc(w.answerText || w.answer) + '</div>';
      out += '<div class="formula" style="white-space:pre-wrap">' + esc(text) + '</div>';
      out += '<div class="pomodoro-btns"><a class="btn" href="#/wrongbook">返回错题本</a></div></section>';
      if (el) el.innerHTML = out;
    } catch (e) { alert("AI 讲解失败：" + e.message); }
  }
  async function aiGrade() {
    var el = $("aiEssay");
    if (!AI.isConfigured()) { alert('未配置 AI 密钥，请在「设置」中填写'); return; }
    var txt = (el && el.value || "").trim();
    if (!txt) { alert('请先粘贴作文内容'); return; }
    var out = $("aiEssayOut");
    if (out) out.innerHTML = '<p class="dim">AI 批改中，请稍候…</p>';
    try {
      var text = await AI.gradeWriting(txt, "（应用文）");
      if (out) out.innerHTML = '<div class="formula" style="white-space:pre-wrap">' + esc(text) + '</div>';
    } catch (e) { if (out) out.innerHTML = '<p class="dim">AI 批改失败：' + esc(e.message) + '</p>'; }
  }
  function playListen(idx) {
    try {
      var q = quiz.questions[idx];
      if (q && q.script) { speak(q.script); return; }
      if (q) speak(q.stem);
    } catch (e) {}
  }
  function speak(text) {
    if (!window.speechSynthesis || !text) return;
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US"; u.rate = 0.9;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }


  /* ================= 每日任务 ================= */
  function renderDaily() {
    touchToday();
    var plan = todayPlan();
    var doneCount = plan.plan.filter(function (t) { return plan.done[t.id]; }).length;
    var examDays = daysToExam();
    var phase = examDays == null ? "" : (examDays > 180 ? "基础期" : examDays > 60 ? "强化期" : examDays > 0 ? "冲刺期" : "已到考试日");
    var phaseTip = examDays == null ? "" : (examDays > 180 ? "时间充裕：按部就班过考点、背单词、打基础。" : examDays > 60 ? "强化阶段：多刷近年试卷与模拟卷，错题逐个消灭。" : examDays > 0 ? "冲刺阶段：主攻高频考点与错题，每天模拟卷计时练习！" : "今天就是考试日，放平心态，正常发挥！");
    var st = state.stats;
    var s = '<section class="card plan-hero"><h2>⏳ 备考倒排计划</h2>';
    if (examDays == null) s += '<p class="dim">请先到 <a href="#/settings">设置</a> 里填写考试日期，即可自动生成倒排计划。</p>';
    else s += '<div class="grid2"><div><div style="font-size:34px;font-weight:700;color:var(--primary)">' + examDays + ' <span style="font-size:16px">天</span></div><div class="dim">距 2027 年考试</div></div><div><div><b>' + phase + '</b></div><div class="dim">' + phaseTip + '</div></div></div>';
    s += '<div class="dim" style="margin-top:8px">三科进度：' + ["gaoshu","yingyu","jisuanji"].map(function (k) { var b = st.bySubject[k] || { answered: 0, correct: 0 }; return SUBJ[k].icon + ' ' + (b.answered ? Math.round(b.correct * 100 / b.answered) + '%' : '未开始'); }).join(' · ') + '</div>';
    s += '</section>';
    s += '<section class="card"><h2>📅 今日学习任务 (' + doneCount + "/" + plan.plan.length + ')</h2>';
    s += '<div class="progressbar"><div class="progressfill" style="width:' + (plan.plan.length ? Math.round(doneCount * 100 / plan.plan.length) : 0) + '%"></div></div>';
    s += '<ul class="tasklist">';
    plan.plan.forEach(function (t) {
      var ok = !!plan.done[t.id];
      var icon = t.subject === "all" ? "📝" : SUBJ[t.subject].icon;
      var weakSet = {};
      weakModules().forEach(function (w2) { weakSet[w2.subject + ':' + w2.id] = true; });
      var isWeak = t.module && weakSet[t.subject + ':' + t.module];
      s += '<li class="' + (ok ? "done" : "") + '">';
      s += '<button class="tick' + (ok ? " on" : "") + '" onclick="App.markTask(\'' + t.id + '\')">' + (ok ? "✅" : "○") + '</button>';
      s += '<div class="task-body"><div>' + icon + ' ' + esc(t.title) + (isWeak ? ' <span class="badge year">🔎 薄弱</span>' : '') + '</div>';
      s += '<div class="task-act">';
      if (t.target === "study" && t.module) s += '<a href="#/study/' + t.subject + '">去学习 →</a>';
      if (t.target === "vocab") s += '<a href="#/study/yingyu" onclick="App.vocabTab(3);return false;">背单词/复习 →</a>';
      if (t.target === "grammar") s += '<a href="#/study/yingyu">学语法 →</a>';
      if (t.target === "quiz") s += '<a href="#/quiz">开始检测 →</a>';
      s += '</div></div></li>';
    });
    s += '</ul></section>';

    var words = todayVocab(20);
    s += '<section class="card"><h2>🔤 今日词汇(20)：先复习到期词，再学新词</h2><div class="wordgrid">';
    words.forEach(function (w) {
      s += '<div class="wordcard"><b>' + esc(w.w) + '</b> <button class="spk" onclick="App.speak(\'' + esc(w.w) + '\')">🔊</button><div>' + esc(w.cn) + '</div><div class="dim">' + esc(w.ex || "") + '</div>';
      s += '<div style="margin-top:6px"><button class="tick" onclick="App.vocabReviewAction(\'' + esc(w.w) + '\',\'remember\')">✅ 记住了</button></div></div>';
    });
    s += '</div></section>';
    var phrases = todayPhrases(10);
    s += '<section class="card"><h2>🔗 今日高频短语(10)</h2><ul class="mini">';
    phrases.forEach(function (p) { s += '<li><b>' + esc(p.p) + '</b> — ' + esc(p.cn) + '</li>'; });
    s += '</ul></section>';

    s += '<section class="card"><h2>➕ 自定义任务</h2><div class="form">';
    s += '<input id="customTask" placeholder="输入想加的任务，例如：整理错题本">';
    s += '<button class="btn" onclick="App.addCustomTask()">添加</button></div>';
    var custom = plan.custom || [];
    if (custom.length) {
      s += '<ul class="tasklist">';
      custom.forEach(function (c, i) {
        s += '<li><button class="tick" onclick="App.delCustomTask(' + i + ')">✕</button><div class="task-body">' + esc(c) + '</div></li>';
      });
      s += '</ul>';
    }
    s += '</section>';
    return s;
  }
  function markTask(id) {
    var plan = todayPlan();
    plan.done[id] = !plan.done[id];
    touchToday();
    Store.save();
    render();
  }
  function addCustomTask() {
    var el = $("customTask");
    var v = (el && el.value) ? el.value.trim() : "";
    if (!v) return;
    var plan = todayPlan();
    plan.custom = plan.custom || [];
    plan.custom.push(v);
    Store.save();
    render();
  }
  function delCustomTask(i) {
    var plan = todayPlan();
    if (plan.custom) plan.custom.splice(i, 1);
    Store.save();
    render();
  }




  /* ---------- 作文范文库 ---------- */
  function renderEssayBank() {
    var s = '<section class="card"><h2>✍️ 英语作文范文库</h2>';
    s += '<p class="dim">英语写作题范文（含题目说明与参考范文），可背诵、可复制。共 ';
    var essays = [];
    var zt = window.QuestionBank ? window.QuestionBank.zhentiOf("yingyu") : [];
    zt.forEach(function (q) {
      if (q.type === "app" && (q.section === "写作" || (q.stem || "").indexOf("说明") >= 0 || (q.stem || "").indexOf("写作") >= 0)) {
        essays.push(q);
      }
    });
    s += essays.length + ' 篇。</p>';
    if (!essays.length) { s += '<p class="dim">暂无范文。</p>'; return s + '</section>'; }
    essays.sort(function (a, b) { return (b.year || "").localeCompare(a.year || ""); });
    essays.forEach(function (e) {
      s += '<div class="modcard"><h3 class="modhead" onclick="App.toggle(\x27es_' + e.id + '\x27)">' + (e.year ? "📅 " + e.year + " 年" : "") + ' 写作范文 <span class="dim">（点击展开范文）</span></h3>';
      s += '<div id="es_' + e.id + '" class="modbody" style="display:none">';
      s += '<div class="itm-content"><b>题目：</b>' + esc(e.stem || "") + '</div>';
      s += '<div class="example"><div class="ex-q">参考范文：</div><div class="ex-a" style="white-space:pre-wrap">' + esc(e.answer || "") + '</div></div>';
      if (e.explain) s += '<div class="itm-content"><b>解析：</b>' + esc(e.explain) + '</div>';
      s += '</div></div>';
    });
    s += '</section>';
    return s;
  }

  /* ---------- 成就徽章 ---------- */
  function badges() {
    var st = state.stats;
    var wbCount = Object.keys(state.wrongBook || {}).length;
    var acc = st.answered ? Math.round(st.correct * 100 / st.answered) : 0;
    var list = [
      { id: "b1", name: "🏁 起步", desc: "完成第 1 次测验", got: st.quizzesTaken >= 1, icon: "✅" },
      { id: "b2", name: "🔥 连击 7 天", desc: "连续学习 7 天", got: st.streak >= 7, icon: "🔥" },
      { id: "b3", name: "⚡ 连击 30 天", desc: "连续学习 30 天", got: st.streak >= 30, icon: "⚡" },
      { id: "b4", name: "💯 百题斩", desc: "累计做题 100 题", got: st.answered >= 100, icon: "💯" },
      { id: "b5", name: "🏆 五百题", desc: "累计做题 500 题", got: st.answered >= 500, icon: "🏆" },
      { id: "b6", name: "👑 千题王", desc: "累计做题 1000 题", got: st.answered >= 1000, icon: "👑" },
      { id: "b7", name: "🎯 神枪手", desc: "正确率达到 85%+（≥50 题）", got: st.answered >= 50 && acc >= 85, icon: "🎯" },
      { id: "b8", name: "🧹 错题清道夫", desc: "错题本清空一次（0 错题）", got: wbCount === 0 && st.answered >= 10, icon: "🧹" },
      { id: "b9", name: "📚 模拟达人", desc: "完成 3 次模拟卷", got: st.quizzesTaken >= 3, icon: "📚" },
      { id: "b10", name: "🗓️ 打卡 7 天", desc: "本周 7 天都学习", got: (function () { var da = state.dailyActivity || {}; var n = 0; for (var i = 0; i < 7; i++) { var d = new Date(); d.setDate(d.getDate() - i); var r = da[dateKey(d)]; if (r && r.answered > 0) n++; } return n >= 7; })(), icon: "🗓️" }
    ];
    return list;
  }
  function renderBadges() {
    var got = badges().filter(function (b) { return b.got; });
    var all = badges();
    var s = '<section class="card"><h2>🏅 成就徽章（' + got.length + '/' + all.length + '）</h2>';
    s += '<div style="display:flex;flex-wrap:wrap;gap:8px">';
    all.forEach(function (b) {
      s += '<div title="' + esc(b.desc) + '" style="' + (b.got ? "" : "opacity:.35;filter:grayscale(1)") + ';background:var(--line,#f0f2f5);border-radius:10px;padding:8px 12px;text-align:center;min-width:86px"><div style="font-size:22px">' + (b.got ? b.icon : "🔒") + '</div><div style="font-size:12px;margin-top:4px">' + esc(b.name) + '</div></div>';
    });
    s += '</div><p class="dim">完成条件：' + all.map(function (b) { return b.name + "（" + b.desc + "）"; }).join("；") + '</p>';
    s += '</section>';
    return s;
  }


  /* ---------- 考前冲刺清单 ---------- */
  function renderSprint() {
    var days = daysToExam();
    if (days == null || days <= 0) return '<section class="card"><h2>🏃 考前冲刺清单</h2><p class="dim">请先到「设置」填写考试日期，即可自动生成冲刺建议。</p></section>';
    var phase = days > 180 ? "基础期" : days > 60 ? "强化期" : "冲刺期";
    var s = '<section class="card"><h2>🏃 考前冲刺清单（剩 ' + days + ' 天 · ' + phase + '）</h2><ul class="mini">';
    var pr = window.SUBJECT_PRIORITY || {};
    ["gaoshu", "yingyu", "jisuanji"].forEach(function (key) {
      var mods = pr[key] || {};
      var hot = [];
      for (var mid in mods) {
        if (mods[mid].level === "必考") hot.push(mid);
      }
      if (hot.length) {
        var names = hot.slice(0, 4).map(function (id) {
          var d = window.SYLLABUS.subjects[key].modules.filter(function (m) { return m.id === id; })[0];
          return d ? d.title : id;
        });
        var icon = { gaoshu: "📐", yingyu: "🔤", jisuanji: "💻" }[key] || "";
        s += '<li>' + icon + ' 必考模块复习：' + names.join("、") + '</li>';
      }
    });
    if (days > 180) {
      s += '<li>📚 现在以「基础 + 近年试卷」为主，先打牢考点。</li>';
    } else if (days > 60) {
      s += '<li>📚 强化期：刷近 5 年试卷（2021-2025），错题逐个消灭。</li>';
    } else {
      s += '<li>📚 冲刺期：每天一套模拟卷计时练习 + 错题本重做 + 背高频词。</li>';
    }
    s += '<li>🔤 词汇：每天新学 20 个 + 复习到期词（记忆复习里完成）。</li>';
    s += '<li>📝 考前第 3 天起：只做试卷和错题，不再学新内容，调整作息。</li>';
    s += '</ul><p class="dim">建议优先级：<b>必考模块 > 错题 > 近年试卷 > 词汇</b></p></section>';
    return s;
  }

  /* ---------- 打卡热力图 ---------- */
  function renderHeatmap() {
    var da = state.dailyActivity || {};
    var weeks = 20;
    var today = new Date();
    var start = new Date(today);
    start.setDate(start.getDate() - weeks * 7 + 1);
    var cols = [];
    for (var w = 0; w < weeks; w++) {
      var col = [];
      for (var d = 0; d < 7; d++) {
        var dt = new Date(start);
        dt.setDate(start.getDate() + w * 7 + d);
        if (dt > today) { col.push(null); continue; }
        var key = dateKey(dt);
        var rec = da[key];
        var level = 0;
        if (rec && rec.answered > 0) level = rec.answered >= 20 ? 4 : rec.answered >= 10 ? 3 : rec.answered >= 5 ? 2 : 1;
        col.push({ key: key, level: level, answered: rec ? rec.answered : 0 });
      }
      cols.push(col);
    }
    var colors = ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"];
    var days = ["一", "三", "五", "日"];
    var s = '<div style="overflow-x:auto"><div style="display:flex;gap:3px">';
    cols.forEach(function (col) {
      s += '<div>';
      col.forEach(function (c) {
        if (!c) { s += '<div style="width:13px;height:13px;margin:2px 0"></div>'; return; }
        s += '<div title="' + c.key + '：' + c.answered + ' 题" style="width:13px;height:13px;margin:2px 0;border-radius:3px;background:' + colors[c.level] + '"></div>';
      });
      s += '</div>';
    });
    s += '</div></div>';
    s += '<div class="dim" style="margin-top:6px">少 ' + '<span style="display:inline-block;width:11px;height:11px;border-radius:2px;background:#ebedf0;vertical-align:middle"></span>' + ' ｜ 多 ' + '<span style="display:inline-block;width:11px;height:11px;border-radius:2px;background:#c6e48b;vertical-align:middle"></span>' + '<span style="display:inline-block;width:11px;height:11px;border-radius:2px;background:#7bc96f;vertical-align:middle"></span>' + '<span style="display:inline-block;width:11px;height:11px;border-radius:2px;background:#239a3b;vertical-align:middle"></span>' + '<span style="display:inline-block;width:11px;height:11px;border-radius:2px;background:#196127;vertical-align:middle"></span></div>';
    return s;
  }

  /* ================= 周报 ================= */

  /* ---------- 三科掌握率雷达图(SVG) ---------- */
  function radarSVG() {
    var labels = [];
    var vals = [];
    ["gaoshu", "yingyu", "jisuanji"].forEach(function (key) {
      var b = state.stats.bySubject[key] || { answered: 0, correct: 0 };
      vals.push(b.answered ? Math.round(b.correct * 100 / b.answered) : 0);
      labels.push(SUBJ[key].name);
    });
    var cx = 110, cy = 100, R = 70;
    function pt(i, r) { var a = Math.PI / 2 + i * 2 * Math.PI / 3; return (cx + Math.cos(a) * r) + "," + (cy - Math.sin(a) * r); }
    var grid = "";
    for (var g = 1; g <= 3; g++) {
      grid += '<polygon points="' + [0,1,2].map(function (i) { return pt(i, R * g / 3); }).join(" ") + '" fill="none" stroke="#e0e0e0"/>';
    }
    var dataPoly = '<polygon points="' + [0,1,2].map(function (i) { return pt(i, Math.max(4, R * vals[i] / 100)); }).join(" ") + '" fill="rgba(43,92,230,.3)" stroke="#2b5ce6" stroke-width="2"/>';
    var dots = [0,1,2].map(function (i) { var p = pt(i, Math.max(4, R * vals[i] / 100)).split(","); return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="#2b5ce6"/>'; }).join("");
    var texts = [0,1,2].map(function (i) { var p = pt(i, R + 24).split(","); return '<text x="' + p[0] + '" y="' + (parseFloat(p[1]) + 4) + '" text-anchor="middle" font-size="12" fill="#666">' + labels[i] + " " + vals[i] + "%</text>"; }).join("");
    return '<svg width="220" height="215" viewBox="0 0 220 215" style="max-width:100%">' + grid + dataPoly + dots + texts + '</svg>';
  }

  function renderReport() {
    var da = state.dailyActivity || {};
    var days = [];
    for (var i = 6; i >= 0; i--) {
      var d = new Date(); d.setDate(d.getDate() - i);
      var key = dateKey(d);
      var r = da[key] || { answered: 0, correct: 0, quizzes: 0 };
      var pct = r.answered ? Math.round(r.correct * 100 / r.answered) : 0;
      days.push({ key: key, label: (d.getMonth() + 1) + "/" + d.getDate(), answered: r.answered, pct: pct, quizzes: r.quizzes });
    }
    var max = Math.max.apply(null, days.map(function (x) { return x.answered; }).concat([1]));
    var m30 = { answered: 0, correct: 0, quizzes: 0, days: 0 };
    for (var mi = 0; mi < 30; mi++) { var md = new Date(); md.setDate(md.getDate() - mi); var mr = da[dateKey(md)]; if (mr && mr.answered > 0) { m30.answered += mr.answered; m30.correct += mr.correct; m30.quizzes += mr.quizzes; m30.days++; } }
    var s = '<section class="card"><h2>🗓️ 月度概览（近 30 天）</h2><ul class="kv">' +
      '<li>学习天数：<b>' + m30.days + '</b> 天</li><li>累计做题：<b>' + m30.answered + '</b> 题</li>' +
      '<li>正确率：<b>' + (m30.answered ? Math.round(m30.correct * 100 / m30.answered) : 0) + '%</b></li><li>测验：<b>' + m30.quizzes + '</b> 次</li></ul></section>';
    s += '<section class="card"><h2>🎯 三科掌握率</h2>' + radarSVG() + '</section>';
    s += '<section class="card"><h2>📊 学习周报（近 7 天）</h2>';
    s += '<div style="display:flex;align-items:flex-end;gap:8px;height:150px;padding:10px 4px">';
    days.forEach(function (x) {
      var h = Math.max(3, Math.round(x.answered / max * 120));
      s += '<div style="flex:1;text-align:center">';
      s += '<div style="height:' + h + 'px;background:var(--primary);border-radius:6px 6px 0 0;opacity:' + (x.answered ? 1 : 0.25) + '"></div>';
      s += '<div style="font-size:11px;margin-top:4px">' + x.label + '</div>';
      s += '<div style="font-size:11px" class="dim">' + x.answered + '题 ' + (x.answered ? x.pct + '%' : '') + '</div>';
      s += '</div>';
    });
    s += '</div>';
    var total7 = days.reduce(function (a, x) { return a + x.answered; }, 0);
    var corr7 = days.reduce(function (a, x) { return a + x.correct; }, 0);
    s += '<p class="dim">近 7 天共做题 <b>' + total7 + '</b> 题，正确率 <b>' + (total7 ? Math.round(corr7 * 100 / total7) : 0) + '%</b>，测验 ' + days.reduce(function (a, x) { return a + x.quizzes; }, 0) + ' 次。</p>';
    s += '</section>';
    return s;
  }


  /* ================= 设置 ================= */
  function renderSettings() {
    var ai = state.settings.ai;
    var s = '<section class="card"><h2>⚙️ 设置</h2>';
    s += '<div class="form"><label>考试日期 <input type="date" id="setExamDate" value="' + esc(state.settings.examDate) + '"></label>';
    s += '<label>每日学习目标(分钟) <input type="number" id="setDailyGoal" value="' + esc(state.settings.dailyGoalMinutes) + '" min="30" step="30"></label>';
    s += '<label>每日提醒时间 <input type="time" id="setRemindTime" value="' + esc(state.settings.remindTime || "19:00") + '"></label>';
    s += '<label>主题 <select id="setTheme"><option value="light"' + (state.theme === "light" ? " selected" : "") + '>浅色</option><option value="dark"' + (state.theme === "dark" ? " selected" : "") + '>深色(护眼)</option></select></label>';
    s += '<label>选项打乱 <select id="setShuffle"><option value="1"' + (state.settings.shuffleOptions !== false ? " selected" : "") + '>打乱(推荐)</option><option value="0"' + (state.settings.shuffleOptions === false ? " selected" : "") + '>保持原顺序</option></select> <span class="dim">固定A/B/C/D标签，内容随机映射，防止背选项位置</span></label></div>';
    s += '<p class="dim">🔔 每日提醒：保存后浏览器会在设定时间弹出通知提醒学习（需点击下方授权，页面需保持打开或安装为桌面应用）。<button class="btn" style="padding:2px 10px" onclick="App.enableReminder()">授权通知</button> <span id="remindState"></span></p>';

    s += '<h3>🤖 AI 联网出题(可选)</h3><p class="dim">配置 OpenAI 兼容接口即可联网自主出题、错题深度讲解与作文批改。DeepSeek 示例端点已填好；也可填通义千问 DashScope 兼容端点。</p>';
    s += '<div class="form"><label>启用 AI <input type="checkbox" id="setAiEnabled"' + (ai.enabled ? " checked" : "") + '></label>';
    s += '<label>接口地址 <input type="text" id="setAiEndpoint" value="' + esc(ai.endpoint) + '" placeholder="https://api.deepseek.com/v1/chat/completions"></label>';
    s += '<label>模型 <input type="text" id="setAiModel" value="' + esc(ai.model) + '" placeholder="deepseek-chat"></label>';
    s += '<label>API 密钥 <input type="password" id="setAiKey" value="' + esc(ai.apiKey) + '" placeholder="sk-..."></label></div>';
    s += '<p class="dim">密钥仅保存在本机浏览器 localStorage，不会上传。</p>';

    s += '<div class="pomodoro-btns"><button class="btn primary" onclick="App.saveSettings()">保存设置</button></div></section>';

    s += '<section class="card"><h2>💾 数据维护(长期备考)</h2>';
    s += '<p class="dim">进度保存在本机浏览器 localStorage。建议定期导出备份，换设备时导入。</p>';
    s += '<div class="pomodoro-btns">';
    s += '<button class="btn" onclick="App.exportData()">导出进度(JSON)</button>';
    s += '<button class="btn" onclick="App.importData()">导入进度</button>';
    s += '<button class="btn danger" onclick="App.resetData()">清空全部数据</button>';
    s += '</div></section>';

    s += '<section class="card"><h2>📖 使用说明</h2><ol class="mini">';
    s += '<li>每天打开「每日任务」打卡，按计划学习三科。</li>';
    s += '<li>在「学习」页逐条掌握考点并标记 ✅；词汇用「记忆复习」按遗忘曲线背。</li>';
    s += '<li>在「测验」页做每日检测/随机组卷/模拟卷(按考纲题型布局，120分钟)，计时自动交卷并逐题解析。</li>';
    s += '<li>错题自动入错题本，可重练/同类巩固/打印/AI 讲解；连续答对自动掌握。</li>';
    s += '<li>配置 AI 密钥后可「AI 联网出题」「错题深度讲解」「作文批改」。</li>';
    s += '<li>首页番茄钟辅助专注；周报看近 7 天趋势；数学用「函数图像」「常见函数图库」理解。</li>';
    s += '</ol></section>';
    return s;
  }
  function saveSettings() {
    var a = state.settings.ai;
    a.enabled = $("setAiEnabled") ? $("setAiEnabled").checked : false;
    a.endpoint = ($("setAiEndpoint") ? $("setAiEndpoint").value : a.endpoint).trim();
    a.model = ($("setAiModel") ? $("setAiModel").value : a.model).trim();
    a.apiKey = $("setAiKey") ? $("setAiKey").value.trim() : a.apiKey;
    state.settings.examDate = $("setExamDate") ? $("setExamDate").value : state.settings.examDate;
    state.theme = $("setTheme") ? $("setTheme").value : state.theme;
    applyTheme();
    state.settings.dailyGoalMinutes = parseInt($("setDailyGoal") ? $("setDailyGoal").value : state.settings.dailyGoalMinutes, 10);
    state.settings.remindTime = $("setRemindTime") ? $("setRemindTime").value : state.settings.remindTime;
    state.settings.shuffleOptions = $("setShuffle") ? $("setShuffle").value !== "0" : true;
    Store.save();
    alert("设置已保存 ✅");
  }
  function exportData() {
    var blob = new Blob([Store.exportData()], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "cqzsb-progress-" + todayKey() + ".json";
    a.click();
  }
  function importData() {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.onchange = function () {
      var f = input.files && input.files[0];
      if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        try { Store.importData(r.result); state = Store.get(); render(); alert("导入成功 ✅"); }
        catch (e) { alert("导入失败：" + e.message); }
      };
      r.readAsText(f);
    };
    input.click();
  }
  function resetData() {
    if (confirm("确定清空全部学习进度与设置吗？此操作不可撤销。建议先导出备份。")) {
      Store.reset(); state = Store.get(); render();
    }
  }

  /* ---------- 每日提醒（PWA 通知） ---------- */
  function enableReminder() {
    if (!("Notification" in window)) { alert("当前浏览器不支持通知，请使用新版 Edge/Chrome。"); return; }
    Notification.requestPermission().then(function (perm) {
      var el = $("remindState");
      if (el) el.textContent = perm === "granted" ? "✅ 已授权，每天 " + (state.settings.remindTime || "19:00") + " 提醒" : (perm === "denied" ? "❌ 已拒绝，请在浏览器设置中开启" : "未授权");
    }).catch(function () { alert("无法请求通知权限。"); });
  }
  function checkReminder() {
    try {
      if (!("Notification" in window) || Notification.permission !== "granted") return;
      var t = state.settings.remindTime || "19:00";
      var now = new Date();
      var hm = (now.getHours() < 10 ? "0" : "") + now.getHours() + ":" + (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
      if (hm !== t) return;
      var tk = todayKey();
      if (state.settings.lastRemindDate === tk) return;
      state.settings.lastRemindDate = tk;
      Store.save();
      var days = daysToExam();
      var examTxt = days == null ? "" : "距离考试还有 " + days + " 天！";
      new Notification("📚 该学习啦！", { body: examTxt + " 打开「今日任务」打卡，背单词、做检测，坚持就是胜利 💪" });
    } catch (e) {}
  }
  function startReminder() {
    try {
      if (!("Notification" in window)) return;
      var el = $("remindState");
      if (el) el.textContent = Notification.permission === "granted" ? "✅ 已授权，每天 " + (state.settings.remindTime || "19:00") + " 提醒" : (Notification.permission === "denied" ? "❌ 已拒绝" : "");
      checkReminder();
      if (window._remindTimer) clearInterval(window._remindTimer);
      window._remindTimer = setInterval(checkReminder, 30000);
    } catch (e) {}
  }

  /* ---------- 通用交互 ---------- */
  function toggle(id) {
    var el = $(id);
    if (el) el.style.display = el.style.display === "none" ? "block" : "none";
  }
  function toggleProgress(key) {
    state.progress[key] = !state.progress[key];
    touchToday();
    Store.save();
    render();
  }

  /* ---------- 时钟 ---------- */
  var clockId = null;
  function startClock() {
    if (clockId) clearInterval(clockId);
    function tick() {
      var d = new Date();
      var el = $("liveClock");
      if (el) el.textContent = d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) + " " + pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
    }
    tick();
    clockId = setInterval(tick, 1000);
  }

  /* ---------- 初始化 ---------- */
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme === "dark" ? "dark" : "light");
  }
  function init() {
    applyTheme();
    startClock();
    render();
    startReminder();
    window.addEventListener("hashchange", render);
  }

  /* 对外暴露 */
  return {
    init: init,
    render: render,
    toggle: toggle,
    toggleProgress: toggleProgress,
    toggleFav: toggleFav,
    isFav: isFav,
    startFavQuiz: startFavQuiz,
    vocabTab: vocabTab,
    vocabShuffle: vocabShuffle,
    vocabPage: vocabPage,
    tipsTab: tipsTab,
    tipsShuffle: tipsShuffle,
    filterVocab: filterVocab,
    startQuiz: startQuiz,
    startDailyQuiz: startDailyQuiz,
    startEasyQuiz: startEasyQuiz,
    aiQuiz: aiQuiz,
    startMockExam: startMockExam,
    startWeakQuiz: startWeakQuiz,
    startZhentiQuiz: startZhentiQuiz,
    startYearQuiz: startYearQuiz,
    setAnswer: setAnswer,
    enableReminder: enableReminder,
    toggleMulti: toggleMulti,
    quizGoto: quizGoto,
    quizPrev: quizPrev,
    quizNext: quizNext,
    toggleCard: toggleCard,
    cardGoto: cardGoto,
    quizSubmit: quizSubmit,
    retryWrong: retryWrong,
    retryWrongBook: retryWrongBook,
    retrySimilar: retrySimilar,
    removeWrong: removeWrong,
    exportWrong: exportWrong,
    aiExplain: aiExplain,
    aiGrade: aiGrade,
    drawGraph: drawGraph,
    graphSet: graphSet,
    graphClear: graphClear,
    unitQuiz: unitQuiz,
    checkPractice: checkPractice,
    markTask: markTask,
    addCustomTask: addCustomTask,
    delCustomTask: delCustomTask,
    saveSettings: saveSettings,
    exportData: exportData,
    importData: importData,
    resetData: resetData,
    studyStart: startStudyTimer,
    studyPause: stopStudyTimer,
    studyReset: resetStudyTimer,
    cutQuestion: cutQuestion,
    uncutQuestion: uncutQuestion,
    uncutAll: uncutAll,
    cutManage: cutManage,
    startSeqQuiz: startSeqQuiz,
    startReviewQuiz: startReviewQuiz,
    setFill: setFill,
    speak: speak,
    playListen: playListen,
    weakModules: weakModules,
    vocabReviewAction: vocabReviewAction
  };
})();

document.addEventListener("DOMContentLoaded", function () { App.init(); });
