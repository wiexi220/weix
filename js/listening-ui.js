/* 英语听力训练 UI（独立模块，浏览器 TTS 朗读 + 理解题） */
window.ListeningUI = (function () {
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function allMaterials() {
    var a = (window.LISTENING_DATA && window.LISTENING_DATA.materials) || [];
    var b = (window.LISTENING_EXTRA_DATA && window.LISTENING_EXTRA_DATA.materials) || [];
    var c = (window.LISTENING_EXTRA2_DATA && window.LISTENING_EXTRA2_DATA.materials) || [];
    var d = (window.LISTENING_EXTRA3_DATA && window.LISTENING_EXTRA3_DATA.materials) || [];
    return a.concat(b, c, d);
  }
  function find(id) {
    var d = allMaterials();
    for (var i = 0; i < d.length; i++) if (d[i].id === id) return d[i];
    return null;
  }
  function render() {
    var mats = allMaterials();
    var s = '<section class="card"><h2>🎧 英语听力训练</h2>';
    s += '<p class="dim">浏览器内置语音朗读英文材料（可慢速/正常），听完完成理解题。对应考纲听力：主旨、细节、推断。</p>';
    mats.forEach(function (m) {
      s += '<div class="modcard"><h3 class="modhead" onclick="ListeningUI.toggle(\'l_body_' + m.id + '\')">' + esc(m.title) + ' <span class="badge kind">' + esc(m.type) + '</span></h3>';
      s += '<div id="l_body_' + m.id + '" class="modbody" style="display:none">';
      s += '<div class="pomodoro-btns">';
      s += '<button class="btn primary" onclick="ListeningUI.play(\'' + m.id + '\',0.85)">▶ 慢速播放</button>';
      s += '<button class="btn" onclick="ListeningUI.play(\'' + m.id + '\',1)">▶ 正常播放</button>';
      s += '<button class="btn" onclick="ListeningUI.stop()">⏹ 停止</button>';
      s += '<button class="btn" onclick="ListeningUI.toggle(\'l_script_' + m.id + '\')">📄 显示/隐藏原文</button>';
      s += '</div>';
      s += '<div id="l_script_' + m.id + '" class="formula" style="display:none;white-space:pre-wrap">' + esc(m.script) + '</div>';
      s += '<h4>题目</h4>';
      (m.questions || []).forEach(function (q, qi) {
        s += '<div class="example"><div class="ex-q">' + (qi + 1) + '. ' + esc(q.stem) + '</div>';
        if (q.options && q.options.length) {
          var letters = ["A", "B", "C", "D"];
          q.options.forEach(function (op, oi) {
            s += '<label class="opt" style="margin:4px 0"><input type="radio" name="lk' + m.id + '_' + qi + '" value="' + letters[oi] + '"> <span>' + letters[oi] + '. ' + esc(op) + '</span></label>';
          });
        }
        s += '<div class="ex-a dim" id="lk_ans_' + m.id + '_' + qi + '"></div></div>';
      });
      s += '<button class="btn primary" onclick="ListeningUI.submit(\'' + m.id + '\')">✅ 提交本段答案</button>';
      s += '</div></div>';
    });
    s += '</section>';
    return s;
  }
  function play(id, rate) {
    var m = find(id);
    if (!m) return;
    if (!window.speechSynthesis) { alert('当前浏览器不支持语音朗读'); return; }
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(m.script);
    u.lang = "en-US";
    u.rate = rate || 1;
    window.speechSynthesis.speak(u);
  }
  function stop() { if (window.speechSynthesis) window.speechSynthesis.cancel(); }
  function toggle(elId) { var el = $(elId); if (el) el.style.display = el.style.display === "none" ? "block" : "none"; }
  function submit(id) {
    var m = find(id);
    if (!m) return;
    var correct = 0;
    (m.questions || []).forEach(function (q, qi) {
      var radios = document.querySelectorAll("input[name=lk" + id + "_" + qi + "]:checked");
      var user = radios.length ? radios[0].value : "";
      var ok = user.toLowerCase() === String(q.answer).toLowerCase();
      if (ok) correct++;
      var box = $("lk_ans_" + id + "_" + qi);
      if (box) box.textContent = (ok ? "✅ 正确" : "❌ 你的答案：" + (user || "未作答") + " · 正确答案：" + q.answer) + (q.explain ? "　" + q.explain : "");
    });
    alert("本段答对 " + correct + "/" + (m.questions || []).length + " 题");
  }
  return { render: render, play: play, stop: stop, toggle: toggle, submit: submit };
})();
