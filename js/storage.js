// 本地持久化存储(localStorage)，支撑长期进度维护、连击、历史记录。
window.Store = (function () {
  var KEY = "cqzsb.study.v1";
  function defaults() {
    return {
      progress: {},
      tasks: {},
      stats: {
        quizzesTaken: 0, answered: 0, correct: 0,
        streak: 0, lastActive: "",
        bySubject: {
          gaoshu: { taken: 0, answered: 0, correct: 0 },
          yingyu: { taken: 0, answered: 0, correct: 0 },
          jisuanji: { taken: 0, answered: 0, correct: 0 }
        },
        history: []
      },
      sequence: { gaoshu: 0, yingyu: 0, jisuanji: 0 },
      wrongBook: {},
      moduleStats: { gaoshu: {}, yingyu: {}, jisuanji: {} },
      vocabReview: {},
      dailyActivity: {},
      favIds: [],
      cutIds: [],                    // 斩题：一键移出普通练习池的题 id
      seqProgress: {},               // 顺序练习进度 { gaoshu: idx, ... }
      reviewPlan: {},                // 智能复习 { qid: { due: ts, step: 1-5 } }
      settings: {
        ai: { enabled: false, endpoint: "https://api.deepseek.com/v1/chat/completions", model: "deepseek-chat", apiKey: "" },
        examDate: "2027-04-15",
        dailyGoalMinutes: 180,
        remindTime: "19:00",
        shuffleOptions: true,        // 选项打乱开关（固定 A/B/C/D 标签，仅内容随机映射）
        showHints: true
      },
      theme: "light"
    };
  }
  function deepMerge(base, over) {
    if (!over || typeof over !== "object") return base;
    var out = {};
    var k;
    for (k in base) out[k] = base[k];
    for (k in over) {
      var b = base[k], o = over[k];
      if (o && typeof o === "object" && !Array.isArray(o) && b && typeof b === "object" && !Array.isArray(b)) {
        out[k] = deepMerge(b, o);
      } else {
        out[k] = o;
      }
    }
    return out;
  }
  var state = null;
  try { state = JSON.parse(localStorage.getItem(KEY)); } catch (e) { state = null; }
  if (!state || typeof state !== "object") state = {};
  state = deepMerge(defaults(), state);
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
    // 自动备份：保留最近 5 份快照，换设备/清缓存可恢复
    try {
      var BK = "cqzsb.backup.v1";
      var list;
      try { list = JSON.parse(localStorage.getItem(BK)) || []; } catch (e2) { list = []; }
      list.push({ ts: new Date().toISOString(), data: state });
      if (list.length > 5) list = list.slice(list.length - 5);
      localStorage.setItem(BK, JSON.stringify(list));
    } catch (e3) {}
  }
  return {
    get: function () { return state; },
    save: save,
    reset: function () { state = defaults(); save(); },
    exportData: function () { return JSON.stringify(state, null, 2); },
    importData: function (json) { state = deepMerge(defaults(), JSON.parse(json)); save(); }
  };
})();