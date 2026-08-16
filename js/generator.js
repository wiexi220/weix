// 出题生成器：内置模板随机化，实现"离线无限自主出题"；联网出题见 ai.js。
// 题库 = 主题库(data/*.js) + 扩展题库(data/extra-*.js) 合并。
window.QuestionBank = {
  zhentiOf: function (key, opts) {
    opts = opts || {};
    var arr = [];
    if (key === "gaoshu") {
      arr = (window.ZHENTI_MATH_DATA && window.ZHENTI_MATH_DATA.questions) || [];
      arr = arr.concat((window.ZHENTI_MATH_EXTRA_DATA && window.ZHENTI_MATH_EXTRA_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_MATH_USER_DATA && window.ZHENTI_MATH_USER_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_MATH_2020_DATA && window.ZHENTI_MATH_2020_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_MATH_2025B_DATA && window.ZHENTI_MATH_2025B_DATA.questions) || []);
    } else if (key === "yingyu") {
      arr = (window.ZHENTI_ENGLISH_DATA && window.ZHENTI_ENGLISH_DATA.questions) || [];
      arr = arr.concat((window.ZHENTI_ENGLISH_EXTRA_DATA && window.ZHENTI_ENGLISH_EXTRA_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_ENGLISH_2015_DATA && window.ZHENTI_ENGLISH_2015_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_ENGLISH_2016_DATA && window.ZHENTI_ENGLISH_2016_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_ENGLISH_2018_DATA && window.ZHENTI_ENGLISH_2018_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_ENGLISH_2010_DATA && window.ZHENTI_ENGLISH_2010_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_ENGLISH_2011_DATA && window.ZHENTI_ENGLISH_2011_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_ENGLISH_2012_DATA && window.ZHENTI_ENGLISH_2012_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_ENGLISH_2013_DATA && window.ZHENTI_ENGLISH_2013_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_ENGLISH_2014_DATA && window.ZHENTI_ENGLISH_2014_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_ENGLISH_2017_DATA && window.ZHENTI_ENGLISH_2017_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_ENGLISH_2019_DATA && window.ZHENTI_ENGLISH_2019_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_ENGLISH_2025B_DATA && window.ZHENTI_ENGLISH_2025B_DATA.questions) || []);
    } else if (key === "jisuanji") {
      arr = (window.ZHENTI_COMPUTER_DATA && window.ZHENTI_COMPUTER_DATA.questions) || [];
      arr = arr.concat((window.ZHENTI_COMPUTER_EXTRA_DATA && window.ZHENTI_COMPUTER_EXTRA_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_COMPUTER_EARLY_DATA && window.ZHENTI_COMPUTER_EARLY_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_COMPUTER_2014_DATA && window.ZHENTI_COMPUTER_2014_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_COMPUTER_2015_DATA && window.ZHENTI_COMPUTER_2015_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_COMPUTER_2016_DATA && window.ZHENTI_COMPUTER_2016_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_COMPUTER_2017_DATA && window.ZHENTI_COMPUTER_2017_DATA.questions) || []);
      arr = arr.concat((window.ZHENTI_COMPUTER_2020_DATA && window.ZHENTI_COMPUTER_2020_DATA.questions) || []);
    }
    if (opts.minYear) arr = arr.filter(function (q) { return parseInt(q.year, 10) >= opts.minYear; });
    return arr;
  },
  // 近年真题（2019 年以后，含 2019）：自动组卷/模拟卷/每日检测只用这批，避开旧考纲
  recent: function (key) { return this.zhentiOf(key, { minYear: 2019 }); },
  get: function (key) {
    var arr = [];
    var extra = [];
    if (key === "gaoshu") {
      arr = (window.MATH_DATA && window.MATH_DATA.questions) || [];
      extra = (window.EXTRA_MATH_DATA && window.EXTRA_MATH_DATA.questions) || [];
      extra = extra.concat((window.EASY_MATH_DATA && window.EASY_MATH_DATA.questions) || []);
    } else if (key === "yingyu") {
      arr = (window.ENGLISH_DATA && window.ENGLISH_DATA.questions) || [];
      extra = (window.EXTRA_ENGLISH_DATA && window.EXTRA_ENGLISH_DATA.questions) || [];
      extra = extra.concat((window.EASY_ENGLISH_DATA && window.EASY_ENGLISH_DATA.questions) || []);
    } else if (key === "jisuanji") {
      arr = (window.COMPUTER_DATA && window.COMPUTER_DATA.questions) || [];
      extra = (window.EXTRA_COMPUTER_DATA && window.EXTRA_COMPUTER_DATA.questions) || [];
      extra = extra.concat((window.EASY_COMPUTER_DATA && window.EASY_COMPUTER_DATA.questions) || []);
    }
    return arr.concat(extra, this.zhentiOf(key));
  },
  count: function (key) { return this.get(key).length; },
  zhentiCount: function (key) { return this.zhentiOf(key).length; },
  zhentiYears: function (key) {
    var ys = [];
    this.zhentiOf(key).forEach(function (q) { if (q.year && ys.indexOf(q.year) < 0) ys.push(q.year); });
    return ys.sort();
  }
};

window.Generator = (function () {
  var uid = 900000;
  function ri(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
  function single(module, point, stem, correct, wrongs, explain, difficulty) {
    return { id: "gen" + (uid++), type: "single", module: module, point: point, stem: stem, options: [correct].concat(wrongs || []), answer: "A", explain: explain, difficulty: difficulty || 1 };
  }
  function fill(module, point, stem, answer, explain, difficulty) {
    return { id: "gen" + (uid++), type: "fill", module: module, point: point, stem: stem, answer: answer, explain: explain, difficulty: difficulty || 1 };
  }

  /* ---------- 高数模板(答案均由参数实时计算，保证正确) ---------- */
  var mathTemplates = [
    function () { var a = ri(2, 6); return single("m1", "两个重要极限", "求极限 lim(x→0) sin(" + a + "x)/x 的值为", String(a), [String(a + 1), "1", "0"], "重要极限 lim(x→0) sin(x)/x = 1，故 lim sin(" + a + "x)/x = " + a + "·1 = " + a, 1); },
    function () { var n = ri(2, 6); return fill("m1", "导数公式", "设 f(x) = x^" + n + "，则 f'(x) = ____", n + "x^" + (n - 1), "幂函数求导公式 (x^n)' = n·x^(n-1)。", 1); },
    function () { var a = ri(2, 5), n = ri(2, 4); var c = a * n; return single("m1", "导数四则运算", "设 y = " + a + "x^" + n + "，则 y' =", c + "x^" + (n - 1), [a + "x^" + n, (a * (n - 1)) + "x^" + (n - 1), c + "x^" + n], "(a·x^n)' = a·n·x^(n-1) = " + c + "x^" + (n - 1), 1); },
    function () { var a = ri(2, 5); return single("m1", "复合函数求导", "设 y = sin(" + a + "x)，则 y' =", a + "·cos(" + a + "x)", ["cos(" + a + "x)", "-" + a + "·sin(" + a + "x)", "cos(" + a + "x)/" + a], "复合求导：y=sin(u),u=" + a + "x，y'=cos(u)·u'=" + a + "cos(" + a + "x)", 1); },
    function () { var a = ri(2, 5); return single("m1", "复合函数求导", "设 y = e^(" + a + "x)，则 y' =", a + "·e^(" + a + "x)", ["e^(" + a + "x)", a + "·e^(" + (a + 1) + "x)", "e^(" + (a + 1) + "x)"], "复合求导：(e^u)' = e^u·u'，u=" + a + "x，故 y'=" + a + "·e^(" + a + "x)", 1); },
    function () { var a = ri(2, 5), b = ri(1, 4); return single("m1", "复合函数求导", "设 y = ln(" + a + "x+" + b + ")，则 y' =", a + "/(" + a + "x+" + b + ")", ["1/(" + a + "x+" + b + ")", (a + b) + "/(" + a + "x+" + b + ")", a + "·ln(" + a + "x+" + b + ")"], "(ln u)' = u'/u，u=" + a + "x+" + b + "，故 y'=" + a + "/(" + a + "x+" + b + ")", 1); },
    function () { var a = ri(1, 4); var c = a * a / 2; var wrong = [String(c + 1), String(c * 2), String(a)]; return single("m1", "等价无穷小", "求极限 lim(x→0) (1-cos(" + a + "x))/x² 的值为", String(c), wrong, "等价无穷小 1-cosx~x²/2，故原式 = (" + a + "x)²/2 / x² = " + a + "²/2 = " + c, 2); },
    function () { var a = ri(2, 5); return single("m1", "洛必达法则", "求极限 lim(x→0) (e^(" + a + "x)-1)/x 的值为", String(a), [String(a + 1), "1", "0"], "0/0 型用洛必达：分子求导得 " + a + "·e^(" + a + "x)，x→0 时趋于 " + a, 2); },
    function () { var r = ri(2, 5); return fill("m1", "隐函数求导", "设 x²+y²=" + (r * r) + "，则 dy/dx = ____", "-x/y", "两边对 x 求导：2x+2y·y'=0，得 y'=-x/y。", 2); },
    function () { var n = ri(3, 4); var f = 1; for (var i = 1; i <= n; i++) f *= i; return single("m1", "高阶导数", "设 y = x^" + n + "，则 y 的 " + n + " 阶导数 y^(" + n + ") =", String(f), [String(f + 1), String(f * 2), String(n)], "每求导一次次数降1，系数累乘，" + n + " 阶导数 = " + n + "! = " + f, 2); },
    function () { var n = ri(2, 6); return single("m2", "基本积分公式", "不定积分 ∫ x^" + n + " dx =", "x^" + (n + 1) + "/" + (n + 1) + " + C", ["x^" + n + " + C", (n + 1) + "x^" + (n + 1) + " + C", "x^" + (n + 1) + " + C"], "∫ x^n dx = x^(n+1)/(n+1) + C  (n≠-1)", 1); },
    function () { var n = ri(1, 5); return single("m2", "牛顿-莱布尼兹公式", "定积分 ∫[0→1] x^" + n + " dx =", "1/" + (n + 1), ["1/" + n, String(n + 1), String(n)], "∫[0→1] x^n dx = [x^(n+1)/(n+1)]₀¹ = 1/(n+1)", 1); },
    function () { var a = ri(2, 5); return single("m2", "换元积分法", "不定积分 ∫ cos(" + a + "x) dx =", "sin(" + a + "x)/" + a + " + C", ["sin(" + a + "x) + C", a + "·sin(" + a + "x) + C", "-sin(" + a + "x)/" + a + " + C"], "凑微分：∫cos(ax)dx = (1/a)sin(ax) + C", 1); },
    function () { var a = ri(2, 5), b = ri(1, 4); return single("m2", "换元积分法", "不定积分 ∫ 1/(" + a + "x+" + b + ") dx =", "(1/" + a + ")·ln|" + a + "x+" + b + "| + C", ["ln|" + a + "x+" + b + "| + C", (1 / a) + "·ln|" + (a + b) + "x| + C", a + "·ln|" + a + "x+" + b + "| + C"], "∫ 1/(ax+b) dx = (1/a)ln|ax+b| + C", 1); },
    function () { return single("m2", "分部积分法", "不定积分 ∫ x·e^x dx =", "(x-1)·e^x + C", ["x·e^x + C", "(x+1)·e^x + C", "e^x/x + C"], "分部积分：∫x·e^x dx = x·e^x - ∫e^x dx = (x-1)e^x + C", 2); },
    function () { var a = ri(2, 5); return single("m2", "变限积分求导", "d/dx ∫[0→x] t² dt 的结果是", "x²", [String(a), a + "x²", "2x"], "变限积分求导：d/dx ∫[0→x] f(t)dt = f(x)，故 = x²", 2); },
    function () { var a = ri(1, 3); return fill("m2", "定积分性质", "定积分 ∫[-" + a + "→" + a + "] x³ dx = ____", "0", "x³ 为奇函数，在对称区间 [-a,a] 上的定积分为 0。", 2); },
    function () { return single("m2", "旋转体体积", "曲线 y=x 与 x 轴、直线 x=1 所围图形绕 x 轴旋转所得旋转体体积为", "π/3", ["π", "π/2", "2π/3"], "V=π∫[0→1]x²dx = π/3", 2); },
    function () { var r1 = ri(1, 3), r2 = ri(2, 4); if (r1 === r2) r2++; var s = r1 + r2, p = r1 * r2; return single("m5", "二阶常系数齐次方程", "微分方程 y'' - " + s + "y' + " + p + "y = 0 的通解为", "y = C1·e^(" + r1 + "x) + C2·e^(" + r2 + "x)", ["y = C1·e^(" + s + "x)", "y = (C1 + C2x)·e^(" + r1 + "x)", "y = e^(" + r1 + "x)(C1·cos(" + r2 + "x) + C2·sin(" + r2 + "x))"], "特征方程 r²-" + s + "r+" + p + "=0 两根 " + r1 + "、" + r2 + "，通解 y=C1e^(r1x)+C2e^(r2x)", 2); },
    function () { return single("m5", "一阶线性微分方程", "微分方程 y' + y = 0 的通解为", "y = C·e^(-x)", ["y = C·e^x", "y = e^x + C", "y = C·x"], "分离变量：dy/y = -dx，积分得 ln|y| = -x + C，即 y = C·e^(-x)", 1); },
    function () { return single("m6", "幂级数", "幂级数 Σ(n=1→∞) x^n/n 的收敛半径 R =", "1", ["0", "2", "∞"], "R = lim|a_n/a_(n+1)| = lim(n+1)/n = 1", 2); },
    function () { return single("m6", "级数收敛", "级数 Σ(n=1→∞) 1/2^n 的和为", "1", ["2", "1/2", "发散"], "等比级数公比 q=1/2<1，和 = a/(1-q) = (1/2)/(1-1/2) = 1", 2); },
    function () { var a = ri(1, 3), b = ri(1, 3), c = ri(1, 3), d = ri(1, 3); return single("m7", "行列式计算", "二阶行列式 |" + a + " " + b + "; " + c + " " + d + "| 的值为", String(a * d - b * c), [String(a * d + b * c), String(a * c - b * d), String(a + b + c + d)], "二阶行列式 |a b; c d| = ad - bc", 1); },
    function () { var a = ri(1, 3), b = ri(2, 4); var m = [ [a, b], [b, a] ]; var n = [ [1, 0], [0, 1] ]; return single("m7", "矩阵乘法", "设 A=[[" + a + "," + b + "],[" + b + "," + a + "]]，B=[[1,0],[0,1]]（单位阵），则 AB =", "[[" + a + "," + b + "],[" + b + "," + a + "]]", ["[[1,0],[0,1]]", "[[2" + a + ",0],[0,2" + a + "]]", "[[0,0],[0,0]]"], "任何矩阵乘单位阵等于其本身，AB = A。", 1); },
    function () { var a = ri(1, 3), b = ri(2, 4); return fill("m7", "逆矩阵", "设 A=[[1,2],[0,1]]，则 A⁻¹ = ____", "[[1,-2],[0,1]]", "用初等行变换或伴随矩阵：A⁻¹ = (1/|A|)·A*，|A|=1，伴随矩阵为 [[1,-2],[0,1]]。", 2); },
    function () { return single("m8", "数学期望", "掷一枚均匀骰子一次，点数的数学期望 E(X) =", "3.5", ["3", "4", "2.5"], "E(X) = (1+2+3+4+5+6)/6 = 3.5", 1); },
    function () { return single("m8", "古典概率", "同时掷两枚均匀骰子，点数之和为 7 的概率为", "1/6", ["1/12", "1/9", "7/36"], "和为7的组合有 6 种：(1,6)(2,5)(3,4)(4,3)(5,2)(6,1)，总情况 36 种，P=6/36=1/6", 2); },
    function () { var x = ri(1, 5), y = ri(-3, 3); var A = x + y, B = x - y; return single("m7", "线性方程组", "解方程组 x+y=" + A + ", x-y=" + B + " 得", "x=" + x + ", y=" + y, ["x=" + A + ", y=" + B, "x=" + B + ", y=" + A, "x=" + (x + 1) + ", y=" + y], "两式相加得 2x=" + (2 * x) + " → x=" + x + "；相减得 2y=" + (2 * y) + " → y=" + y, 2); },
    function () { var w = ri(2, 6), b = ri(2, 6), t = w + b; return single("m8", "古典概率", "盒中有 " + w + " 个白球和 " + b + " 个黑球，随机取 1 个，取到白球的概率为", w + "/" + t, [b + "/" + t, w + "/" + b, String(w)], "古典概率 = 有利样本数/总样本数 = " + w + "/" + t, 1); },
    function () { var a = ri(1, 3), b = ri(2, 4); return single("m2", "二重积分", "二重积分 ∬_D dxdy，其中 D 为 " + a + "×" + b + " 的矩形区域，其值为", String(a * b), [String(a + b), String(a * b * 2), String(b - a)], "∬_D dxdy 表示区域 D 的面积，矩形面积 = 长×宽 = " + a * b, 2); },
    function () { return single("m3", "向量", "已知向量 a=(1,2,2)，则 |a| =", "3", ["5", "√5", "9"], "向量的模 = √(1²+2²+2²) = √9 = 3", 1); },
    function () { return single("m3", "平面方程", "过点 (1,0,0)、(0,1,0)、(0,0,1) 的平面方程为", "x + y + z = 1", ["x + y + z = 0", "x²+y²+z²=1", "xy + yz + zx = 1"], "截距式 x/1 + y/1 + z/1 = 1，即 x+y+z=1", 2); },
    function () { var a = ri(1, 4); return fill("m1", "导数定义", "设 f(x) = x²，按定义求 f'(" + a + ") = ____", String(2 * a), "f'(x) = lim[h→0]((x+h)²-x²)/h = 2x，故 f'(" + a + ") = " + (2 * a), 2); }
  ];

  /* ---------- 计算机模板(答案实时计算) ---------- */
  var computerTemplates = [
    function () { var d = ri(10, 63); var bin = d.toString(2); return single("c1", "数制转换", "十进制数 " + d + " 对应的二进制数是", bin, [d.toString(8), d.toString(16), (d + 1).toString(2)], "十进制转二进制：除2取余，倒序排列。", 1); },
    function () { var d = ri(5, 31); var bin = d.toString(2); return single("c1", "数制转换", "二进制数 " + bin + " 对应的十进制数是", String(d), [String(d + 1), String(d * 2), String(d - 1)], "按权展开求和：" + bin + " = " + d, 1); },
    function () { var d = ri(16, 255); var hex = d.toString(16).toUpperCase(); return single("c1", "数制转换", "十六进制数 " + hex + " 对应的十进制数是", String(d), [String(d + 1), String(d * 2), String(d - 1)], "按权展开求和：0x" + hex + " = " + d, 1); },
    function () { var d = ri(8, 63); return single("c1", "数制转换", "十进制数 " + d + " 对应的八进制数是", d.toString(8), [d.toString(2), d.toString(16), String(d)], "十进制转八进制：除8取余，倒序排列。", 1); },
    function () { var d = ri(16, 255); var hex = d.toString(16); var bin = parseInt(hex, 16).toString(2); while (bin.length % 4) bin = "0" + bin; return single("c1", "数制转换", "十六进制数 " + hex.toUpperCase() + " 对应的二进制数是", bin, [d.toString(2), bin.slice(0, -1), d.toString(10)], "每 1 位十六进制数对应 4 位二进制数。", 2); },
    function () { return single("c1", "信息存储", "1KB 等于", "1024B", ["1000B", "1024bit", "512B"], "1KB = 1024B = 2^10 B", 1); },
    function () { return single("c1", "信息编码", "一个字节(Byte)等于", "8 bit", ["4 bit", "16 bit", "32 bit"], "1 Byte = 8 bit", 1); },
    function () { return single("c1", "信息编码", "标准ASCII码中，大写字母 A 的编码值是", "65", ["97", "48", "32"], "常用ASCII：A=65、a=97、数字0=48、空格=32", 1); },
    function () { return single("c1", "信息编码", "在GB2312汉字编码中，一个汉字通常占", "2个字节", ["1个字节", "3个字节", "4个字节"], "GB2312中一个汉字占2个字节(16位)。", 2); },
    function () { return single("c1", "信息编码", "用 16×16 点阵存储一个汉字字形需要", "32字节", ["16字节", "64字节", "256字节"], "16×16点阵=256个点=256位=32字节。", 2); },
    function () { return single("c5", "多媒体技术", "一幅 800×600、颜色深度 24 位的真彩色图像，其存储量约为", "1.37MB", ["0.37MB", "2.74MB", "4.10MB"], "800×600×24/8 = 1,440,000 字节 ≈ 1.37MB。", 2); },
    function () { var n = ri(2, 4); var host = Math.pow(2, 8 - n) - 2; return single("c3", "子网划分", "将 C 类网络划分为 2^" + n + " 个子网（借用 " + n + " 位作子网号），每个子网可用的主机数为", String(host), [String(Math.pow(2, 8 - n)), String(host + 2), String(host + 1)], "C 类地址主机位共 8 位，借用 " + n + " 位作子网号后剩 " + (8 - n) + " 位主机位，可用主机数 = 2^" + (8 - n) + " - 2 = " + host, 3); },
    function () { return single("c3", "IP地址", "IP 地址 192.168.1.1 属于", "C类地址", ["A类地址", "B类地址", "D类地址"], "192 在 192-223 之间，为 C 类地址。", 1); },
    function () { return single("c3", "IP地址", "C类IP地址的默认子网掩码是", "255.255.255.0", ["255.0.0.0", "255.255.0.0", "255.255.255.255"], "默认子网掩码：A类255.0.0.0、B类255.255.0.0、C类255.255.255.0", 2); },
    function () { return single("c3", "网络服务", "HTTP 协议默认使用的端口号是", "80", ["21", "25", "443"], "HTTP=80、FTP=21、SMTP=25、HTTPS=443。", 1); },
    function () { return single("c2", "办公自动化", "在 Excel 中，用于对区域数值求和的函数是", "SUM", ["AVERAGE", "MAX", "COUNT"], "SUM 求和、AVERAGE 平均值、MAX 最大值、COUNT 计数。", 1); },
    function () { return single("c4", "SQL", "在SQL中，用于从数据表中查询记录的关键字是", "SELECT", ["INSERT", "UPDATE", "DELETE"], "SELECT 查询、INSERT 插入、UPDATE 更新、DELETE 删除", 1); },
    function () { return single("c4", "SQL", "SQL 语句 SELECT * FROM 学生 ORDER BY 成绩 DESC 的含义是", "按成绩降序显示学生记录", ["按成绩升序显示", "删除成绩记录", "按学号排序"], "ORDER BY 排序，DESC 降序、ASC 升序。", 2); },
    function () { return single("c6", "程序基本结构", "程序的三种基本结构不包括", "递归结构", ["顺序结构", "分支结构", "循环结构"], "三种基本结构：顺序、分支(选择)、循环。", 1); },
    function () { return single("c6", "算法", "用冒泡排序对 5,3,8,1 进行第一趟排序后的结果为", "3,5,1,8", ["1,3,5,8", "8,5,3,1", "5,8,3,1"], "冒泡排序第一趟：相邻比较交换，最大数沉底：5,3,8,1 → 3,5,1,8。", 2); },
    function () { return single("c6", "算法描述", "流程图中，用菱形框表示", "判断", ["处理", "输入输出", "起止"], "菱形=判断、矩形=处理、平行四边形=输入输出、圆角矩形=起止。", 1); },
    function () { return single("c7", "云计算", "云计算按服务模式可分为 IaaS、PaaS、SaaS，其中 SaaS 指", "软件即服务", ["基础设施即服务", "平台即服务", "数据即服务"], "IaaS 基础设施即服务、PaaS 平台即服务、SaaS 软件即服务。", 2); },
    function () { return single("c7", "新技术", "物联网的核心思想是", "物与物、物与人互联互通", ["人与计算机交互", "海量数据存储", "量子计算"], "物联网通过传感设备实现物与物、物与人之间的互联。", 1); },
    function () { return single("c1", "计算机系统", "CPU 由哪两部分组成", "运算器与控制器", ["运算器与存储器", "控制器与输入设备", "存储器与输出设备"], "CPU = 运算器 + 控制器。", 1); },
    function () { return single("c1", "操作系统", "下列属于系统软件的是", "操作系统", ["Word", "Excel", "浏览器"], "系统软件包括操作系统、语言处理程序、数据库管理系统等；Office/浏览器属于应用软件。", 1); },
    function () { return single("c3", "信息安全", "下列属于信息安全防护措施的是", "数据备份与病毒防护", ["关闭防火墙", "共享所有文件", "随意点击陌生链接"], "数据备份、病毒防护、隐私保护、电信反欺诈等都是常用防护措施。", 1); }
  ];

  function math(n) { var out = []; for (var i = 0; i < n; i++) { out.push(mathTemplates[ri(0, mathTemplates.length - 1)]()); } return out; }
  function computer(n) { var out = []; for (var i = 0; i < n; i++) { out.push(computerTemplates[ri(0, computerTemplates.length - 1)]()); } return out; }
  function english(n) {
    var out = [];
    var data = window.ENGLISH_DATA || {};
    var words = (data.vocab && data.vocab.words) || [];
    var phrases = (data.vocab && data.vocab.phrases) || [];
    var sents = (data.vocab && data.vocab.sentences) || [];
    for (var i = 0; i < n; i++) {
      var kind = i % 3;
      if (kind === 0 && words.length >= 4) {
        var t = words[ri(0, words.length - 1)];
        var wrongs = [];
        var seen = [t];
        while (wrongs.length < 3 && seen.length < words.length) {
          var d = words[ri(0, words.length - 1)];
          if (seen.indexOf(d) < 0) { seen.push(d); wrongs.push(d.cn); }
        }
        while (wrongs.length < 3) wrongs.push("(无)");
        out.push(single("e2", "词汇", "单词 \"" + t.w + "\" 的中文意思是", t.cn, wrongs, t.w + " " + (t.pos || "") + " " + t.cn + (t.ex ? "；例：" + t.ex + " " + (t.exCn || "") : ""), 1));
      } else if (kind === 1 && sents.length >= 4) {
        var s = sents[ri(0, sents.length - 1)];
        var sw = [];
        var ss = [s];
        while (sw.length < 3 && ss.length < sents.length) {
          var sd = sents[ri(0, sents.length - 1)];
          if (ss.indexOf(sd) < 0) { ss.push(sd); sw.push(sd.en); }
        }
        while (sw.length < 3) sw.push("(无)");
        out.push(single("e4", "翻译", "汉译英：" + s.cn, s.en, sw, "高频句型：" + s.en + (s.topic ? "（" + s.topic + "）" : ""), 2));
      } else if (phrases.length >= 4) {
        var p = phrases[ri(0, phrases.length - 1)];
        var pw = [];
        var sp = [p];
        while (pw.length < 3 && sp.length < phrases.length) {
          var pd = phrases[ri(0, phrases.length - 1)];
          if (sp.indexOf(pd) < 0) { sp.push(pd); pw.push(pd.cn); }
        }
        while (pw.length < 3) pw.push("(无)");
        out.push(single("e2", "短语", "短语 \"" + p.p + "\" 的中文意思是", p.cn, pw, p.p + " " + p.cn + (p.ex ? "；例：" + p.ex + " " + (p.exCn || "") : ""), 1));
      }
    }
    return out;
  }

  return {
    generate: function (key, n, opts) {
      opts = opts || {};
      if (key === "gaoshu") return math(n);
      if (key === "yingyu") return english(n);
      if (key === "jisuanji") return computer(n);
      return [];
    }
  };
})();