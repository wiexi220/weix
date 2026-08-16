/* 数学公式渲染模块 —— 套用开源项目 KaTeX(MIT)。
   内置"纯文本数学→LaTeX"轻量转换器；任何无法解析的内容自动回退为原文，绝不报错。
   用法：MathRender.render("∫ x^n dx = x^(n+1)/(n+1) + C") */
window.MathRender = (function () {
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function toLatex(s) {
    if (!s) return "";
    var t = s;
    var greek = { "π": "\\pi ", "α": "\\alpha ", "β": "\\beta ", "γ": "\\gamma ", "δ": "\\delta ", "θ": "\\theta ", "λ": "\\lambda ", "μ": "\\mu ", "σ": "\\sigma ", "φ": "\\varphi ", "ω": "\\omega ", "Δ": "\\Delta ", "Σ": "\\Sigma ", "Ω": "\\Omega " };
    for (var g in greek) t = t.split(g).join(greek[g]);
    t = t
      .replace(/∬/g, " \\iint ")
      .replace(/∫/g, " \\int ")
      .replace(/∑/g, " \\sum ")
      .replace(/lim\(x→0\)/g, "\\lim_{x\\to 0}")
      .replace(/lim\(x→∞\)/g, "\\lim_{x\\to \\infty}")
      .replace(/lim\(x→a\)/g, "\\lim_{x\\to a}")
      .replace(/lim\(n→∞\)/g, "\\lim_{n\\to \\infty}")
      .replace(/lim\(x→/g, "\\lim_{x\\to ")
      .replace(/lim\(/g, "\\lim(")
      .replace(/⁻¹/g, "^{-1}")
      .replace(/⁰/g, "^{0}").replace(/¹/g, "^{1}").replace(/²/g, "^{2}").replace(/³/g, "^{3}")
      .replace(/⁴/g, "^{4}").replace(/⁵/g, "^{5}").replace(/⁶/g, "^{6}").replace(/⁷/g, "^{7}")
      .replace(/⁸/g, "^{8}").replace(/⁹/g, "^{9}")
      .replace(/√\(([^()]*)\)/g, "\\sqrt{$1}")
      .replace(/√([A-Za-z0-9])/g, "\\sqrt{$1}")
      .replace(/√/g, " \\sqrt{} ")
      .replace(/\|([^|]*)\|/g, function (m0, inner) { if (inner.indexOf(";") < 0) return m0; var rows = inner.split(";"); var cells = rows.map(function (r) { return r.trim().split(/\s+/).filter(Boolean); }); var n = cells[0].length; if (n < 2 || cells.length < 2 || cells.some(function (c) { return c.length !== n; })) return m0; return "\\begin{vmatrix} " + cells.map(function (row) { return row.join(" & "); }).join(" \\\\ ") + " \\end{vmatrix}"; })
      .replace(/→∞/g, " \\to \\infty ")
      .replace(/→/g, " \\to ")
      .replace(/≤/g, "\\le ").replace(/≥/g, "\\ge ").replace(/≠/g, "\\ne ")
      .replace(/±/g, "\\pm ").replace(/×/g, "\\times ").replace(/÷/g, "\\div ").replace(/·/g, "\\cdot ")
      .replace(/∈/g, "\\in ").replace(/∉/g, "\\notin ").replace(/⊂/g, "\\subset ")
      .replace(/∪/g, "\\cup ").replace(/∩/g, "\\cap ").replace(/∅/g, "\\varnothing ")
      .replace(/∂/g, "\\partial ").replace(/∞/g, "\\infty ")
      .replace(/₁/g, "_{1}").replace(/₂/g, "_{2}").replace(/₃/g, "_{3}").replace(/₀/g, "_{0}")
      .replace(/([A-Za-z0-9\)])\^\{?([^}]*)\}?/g, "$1^{$2}")
      .replace(/\bsin\b/g, "\\sin ").replace(/\bcos\b/g, "\\cos ").replace(/\btan\b/g, "\\tan ")
      .replace(/\bln\b/g, "\\ln ").replace(/\blog\b/g, "\\log ").replace(/\blim\b/g, "\\lim ")
      .replace(/\bdx\b/g, "\\,dx ").replace(/\bdt\b/g, "\\,dt ")
      .replace(/([A-Za-z])(\d)/g, "$1_{$2}");
    return t;
  }
  function render(plain) {
    plain = String(plain == null ? "" : plain);
    if (!plain) return "";
    if (!window.katex) return esc(plain);
    try {
      if (!/[\u4e00-\u9fa5]/.test(plain)) {
        return window.katex.renderToString(toLatex(plain), { throwOnError: true, displayMode: true, strict: false });
      }
      // 中英混排：把纯数学片段逐段渲染，中文按原文显示
      var out = "", last = 0, m, re = /[^\u4e00-\u9fa5]+/g;
      while ((m = re.exec(plain))) {
        if (m.index > last) out += esc(plain.slice(last, m.index));
        var math = m[0].trim();
        if (math) {
          try { out += window.katex.renderToString(toLatex(math), { throwOnError: true, displayMode: false, strict: false }); }
          catch (e) { out += esc(m[0]); }
        }
        last = m.index + m[0].length;
      }
      if (last < plain.length) out += esc(plain.slice(last));
      return out;
    } catch (e) { return esc(plain); }
  }
  return { render: render, toLatex: toLatex };
})();