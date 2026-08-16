/* 函数图像绘制：输入表达式，Canvas 绘制 y=f(x) 曲线（零依赖）
   用法：FuncGraph.draw(canvas, "x^2", {minX:-10, maxX:10}) */
window.FuncGraph = (function () {
  var FUNCS = { sin: "Math.sin", cos: "Math.cos", tan: "Math.tan", asin: "Math.asin", acos: "Math.acos", atan: "Math.atan", ln: "Math.log", log: "Math.log10", log2: "Math.log2", abs: "Math.abs", sqrt: "Math.sqrt", cbrt: "Math.cbrt", exp: "Math.exp", floor: "Math.floor", ceil: "Math.ceil" };
  function compile(expr) {
    var s = String(expr || "").trim();
    if (!s) return { error: "请输入函数表达式" };
    if (/[^0-9a-zA-Z+\-*/^().,\s]/.test(s)) return { error: "包含非法字符，仅支持数字、x、+ - * / ^ () 与函数 sin cos tan ln log abs sqrt exp pi e" };
    var t = s;
    for (var k in FUNCS) t = t.split(k).join(FUNCS[k]);
    t = t.split("^").join("**");
    t = t.split("pi").join("Math.PI");
    t = t.replace(/\be\b/g, "Math.E");
    try {
      var f = new Function("x", "return (" + t + ");");
      // 冒烟测试
      f(1);
      return { fn: f };
    } catch (e) { return { error: "表达式无法解析：" + e.message }; }
  }
  function draw(canvas, expr, opts) {
    if (!canvas || !canvas.getContext) return { error: "浏览器不支持 Canvas" };
    opts = opts || {};
    var minX = opts.minX != null ? opts.minX : -10;
    var maxX = opts.maxX != null ? opts.maxX : 10;
    var minY = opts.minY != null ? opts.minY : -8;
    var maxY = opts.maxY != null ? opts.maxY : 8;
    var c = compile(expr);
    if (c.error) return { error: c.error };
    var W = canvas.width, H = canvas.height;
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, W, H);
    function sx(x) { return (x - minX) / (maxX - minX) * W; }
    function sy(y) { return H - (y - minY) / (maxY - minY) * H; }
    // 网格
    ctx.strokeStyle = "#e8ecf3"; ctx.lineWidth = 1;
    for (var gx = Math.ceil(minX); gx <= maxX; gx++) {
      ctx.beginPath(); ctx.moveTo(sx(gx), 0); ctx.lineTo(sx(gx), H); ctx.stroke();
    }
    for (var gy = Math.ceil(minY); gy <= maxY; gy++) {
      ctx.beginPath(); ctx.moveTo(0, sy(gy)); ctx.lineTo(W, sy(gy)); ctx.stroke();
    }
    // 坐标轴
    ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(0, sy(0)); ctx.lineTo(W, sy(0)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(sx(0), 0); ctx.lineTo(sx(0), H); ctx.stroke();
    // 刻度
    ctx.fillStyle = "#64748b"; ctx.font = "11px sans-serif"; ctx.textAlign = "center";
    for (var tx = Math.ceil(minX); tx <= maxX; tx++) if (tx !== 0) ctx.fillText(tx, sx(tx), sy(0) + 14);
    ctx.textAlign = "right";
    for (var ty = Math.ceil(minY); ty <= maxY; ty++) if (ty !== 0) ctx.fillText(ty, sx(0) - 5, sy(ty) + 4);
    // 曲线
    ctx.strokeStyle = "#2563eb"; ctx.lineWidth = 2.5; ctx.lineJoin = "round";
    ctx.beginPath();
    var started = false;
    var STEPS = Math.min(2000, (maxX - minX) * 100);
    for (var i = 0; i <= STEPS; i++) {
      var x = minX + (maxX - minX) * i / STEPS;
      var y;
      try { y = c.fn(x); } catch (e) { y = NaN; }
      if (!isFinite(y) || y < minY - 4 || y > maxY + 4) { started = false; continue; }
      if (!started) { ctx.moveTo(sx(x), sy(y)); started = true; }
      else ctx.lineTo(sx(x), sy(y));
    }
    ctx.stroke();
    return { ok: true };
  }
  var PRESETS = ["x^2", "x^3", "sin(x)", "cos(x)", "e^x", "ln(x)", "1/x", "abs(x)", "sqrt(x)", "tan(x)"];
  return { draw: draw, compile: compile, PRESETS: PRESETS };
})();
