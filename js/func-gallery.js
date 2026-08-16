/* 常见函数图像图库：基本初等函数 + 性质说明（对应考纲 m1"基本初等函数的性质与图像"） */
window.FuncGallery = (function () {
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"); }
  var LIST = [
    { name: "一次函数 y = x", expr: "x", opts: { minX: -6, maxX: 6, minY: -6, maxY: 6 }, note: "定义域 R · 值域 R · 奇函数 · 过原点 · 单调递增" },
    { name: "二次函数 y = x²", expr: "x^2", opts: { minX: -4, maxX: 4, minY: -1, maxY: 16 }, note: "定义域 R · 值域 [0,+∞) · 偶函数 · 顶点(0,0) · 开口向上，对称轴 y 轴" },
    { name: "三次函数 y = x³", expr: "x^3", opts: { minX: -3, maxX: 3, minY: -20, maxY: 20 }, note: "定义域 R · 值域 R · 奇函数 · 过原点 · 单调递增" },
    { name: "反比例 y = 1/x", expr: "1/x", opts: { minX: -6, maxX: 6, minY: -6, maxY: 6 }, note: "定义域 x≠0 · 值域 y≠0 · 奇函数 · 双曲线 · 渐近线 x=0、y=0 · 两段分别单调减" },
    { name: "幂函数 y = √x", expr: "sqrt(x)", opts: { minX: 0, maxX: 9, minY: -1, maxY: 4 }, note: "定义域 [0,+∞) · 值域 [0,+∞) · 单调递增 · 过(0,0)(1,1)" },
    { name: "指数函数 y = eˣ", expr: "e^x", opts: { minX: -3, maxX: 3, minY: -1, maxY: 10 }, note: "定义域 R · 值域 (0,+∞) · 单调递增 · 过(0,1) · 渐近线 y=0" },
    { name: "指数函数 y = (1/2)ˣ", expr: "0.5^x", opts: { minX: -3, maxX: 3, minY: -1, maxY: 10 }, note: "底数 0<a<1：单调递减 · 过(0,1) · 渐近线 y=0 · 与 y=2ˣ 关于 y 轴对称" },
    { name: "对数函数 y = ln x", expr: "ln(x)", opts: { minX: 0.05, maxX: 8, minY: -3, maxY: 3 }, note: "定义域 (0,+∞) · 值域 R · 单调递增 · 过(1,0) · 渐近线 x=0" },
    { name: "正弦函数 y = sin x", expr: "sin(x)", opts: { minX: -6.28, maxX: 6.28, minY: -1.5, maxY: 1.5 }, note: "定义域 R · 值域 [-1,1] · 奇函数 · 周期 2π" },
    { name: "余弦函数 y = cos x", expr: "cos(x)", opts: { minX: -6.28, maxX: 6.28, minY: -1.5, maxY: 1.5 }, note: "定义域 R · 值域 [-1,1] · 偶函数 · 周期 2π" },
    { name: "正切函数 y = tan x", expr: "tan(x)", opts: { minX: -3.14, maxX: 3.14, minY: -5, maxY: 5 }, note: "定义域 x≠π/2+kπ · 值域 R · 奇函数 · 周期 π · 渐近线 x=±π/2" },
    { name: "绝对值 y = |x|", expr: "abs(x)", opts: { minX: -5, maxX: 5, minY: -1, maxY: 5 }, note: "定义域 R · 值域 [0,+∞) · 偶函数 · 顶点(0,0) · 图像为 V 形" },
    { name: "反正弦 y = arcsin x", expr: "asin(x)", opts: { minX: -1, maxX: 1, minY: -1.7, maxY: 1.7 }, note: "定义域 [-1,1] · 值域 [-π/2,π/2] · 奇函数 · 单调递增" },
    { name: "反正切 y = arctan x", expr: "atan(x)", opts: { minX: -6, maxX: 6, minY: -1.8, maxY: 1.8 }, note: "定义域 R · 值域 (-π/2,π/2) · 奇函数 · 单调递增 · 渐近线 y=±π/2" }
  ];
  function render() {
    var s = '<section class="card"><h2>📚 常见函数图像一览（基本初等函数）</h2>';
    s += '<p class="dim">考纲要求「掌握基本初等函数的性质与图像」。下图逐个列出幂/指数/对数/三角/反三角函数的图像与关键性质；想自己画任意函数，<a href="#/graph">📈 去函数图像绘制 →</a></p>';
    s += '<div class="grid2">';
    LIST.forEach(function (f, i) {
      s += '<div class="card" style="margin:0"><b>' + esc(f.name) + '</b><canvas id="fg_' + i + '" width="460" height="240" style="width:100%;height:auto;background:#fff;border:1px solid var(--line);border-radius:8px"></canvas><p class="dim" style="margin:6px 0 0">' + esc(f.note) + '</p></div>';
    });
    s += '</div>';
    s += '</section>';
    return s;
  }
  function drawAll() {
    LIST.forEach(function (f, i) {
      var cv = document.getElementById("fg_" + i);
      if (cv) window.FuncGraph.draw(cv, f.expr, f.opts);
    });
  }
  return { render: render, drawAll: drawAll };
})();
