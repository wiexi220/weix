/* 计算机考点示意图（SVG）：流程图结构 / 网络拓扑 / 冯·诺依曼结构 */
window.ComputerSvg = (function () {
  var SVGS = {};
  // 1) 冯·诺依曼结构
  SVGS["c1-3"] = '<div class="svg-wrap"><svg viewBox="0 0 520 200" width="100%" style="max-width:520px">' +
    '<rect x="10" y="80" width="100" height="44" rx="8" fill="#eef2ff" stroke="#2b5ce6"/><text x="60" y="102" font-size="12" text-anchor="middle" fill="#1a2233">输入设备</text><text x="60" y="116" font-size="10" text-anchor="middle" fill="#6b7280">键盘/鼠标</text>' +
    '<rect x="210" y="80" width="100" height="44" rx="8" fill="#eef2ff" stroke="#2b5ce6"/><text x="260" y="102" font-size="12" text-anchor="middle" fill="#1a2233">存储器</text><text x="260" y="116" font-size="10" text-anchor="middle" fill="#6b7280">程序+数据</text>' +
    '<rect x="410" y="80" width="100" height="44" rx="8" fill="#eef2ff" stroke="#2b5ce6"/><text x="460" y="102" font-size="12" text-anchor="middle" fill="#1a2233">输出设备</text><text x="460" y="116" font-size="10" text-anchor="middle" fill="#6b7280">显示器/打印机</text>' +
    '<rect x="210" y="8" width="100" height="40" rx="8" fill="#dbeafe" stroke="#2563eb"/><text x="260" y="32" font-size="12" text-anchor="middle" fill="#1e3a8a">CPU</text>' +
    '<rect x="190" y="4" width="30" height="14" rx="4" fill="#93c5fd"/><rect x="300" y="4" width="30" height="14" rx="4" fill="#93c5fd"/><text x="205" y="14" font-size="8" text-anchor="middle" fill="#fff">运算器</text><text x="315" y="14" font-size="8" text-anchor="middle" fill="#fff">控制器</text>' +
    '<line x1="110" y1="102" x2="208" y2="102" stroke="#2b5ce6" stroke-width="2"/><polygon points="204,97 212,102 204,107" fill="#2b5ce6"/>' +
    '<line x1="312" y1="102" x2="408" y2="102" stroke="#2b5ce6" stroke-width="2"/><polygon points="404,97 412,102 404,107" fill="#2b5ce6"/>' +
    '<line x1="260" y1="52" x2="260" y2="78" stroke="#2563eb" stroke-width="2"/><polygon points="255,74 260,82 265,74" fill="#2563eb"/>' +
    '<line x1="260" y1="126" x2="260" y2="150" stroke="#2563eb" stroke-width="2"/><polygon points="255,146 260,154 265,146" fill="#2563eb"/>' +
    '<text x="320" y="170" font-size="11" fill="#6b7280">存储程序 + 程序控制（冯·诺依曼原理）</text>' +
    '</svg><p class="dim">计算机五大部件：运算器、控制器、存储器、输入设备、输出设备；CPU = 运算器 + 控制器</p></div>';

  // 2) 网络拓扑：星型
  SVGS["c3-star"] = '<div class="svg-wrap"><b>星型拓扑</b><svg viewBox="0 0 300 200" width="100%" style="max-width:300px">' +
    '<circle cx="150" cy="100" r="26" fill="#2b5ce6"/><text x="150" y="105" font-size="11" text-anchor="middle" fill="#fff">中心节点</text>' +
    ['[60,50]','[240,50]','[60,150]','[240,150]'].map(function(p, i) { var c = p.replace(/[\[\]]/g,'').split(','); return '<rect x="'+(+c[0]-24)+'" y="'+(+c[1]-12)+'" width="48" height="24" rx="6" fill="#eef2ff" stroke="#2b5ce6"/><text x="'+c[0]+'" y="'+(+c[1]+4)+'" font-size="10" text-anchor="middle">工作站'+(i+1)+'</text>'; }).join('') +
    '<line x1="150" y1="100" x2="60" y2="50" stroke="#94a3b8"/><line x1="150" y1="100" x2="240" y2="50" stroke="#94a3b8"/><line x1="150" y1="100" x2="60" y2="150" stroke="#94a3b8"/><line x1="150" y1="100" x2="240" y2="150" stroke="#94a3b8"/>' +
    '</svg><p class="dim">特点：各节点通过中心节点通信；中心故障则全网瘫痪</p></div>';

  // 3) 网络拓扑：总线型
  SVGS["c3-bus"] = '<div class="svg-wrap"><b>总线型拓扑</b><svg viewBox="0 0 320 160" width="100%" style="max-width:320px">' +
    '<line x1="20" y1="80" x2="300" y2="80" stroke="#2b5ce6" stroke-width="3"/>' +
    '<text x="160" y="70" font-size="11" text-anchor="middle" fill="#6b7280">总线(Bus)</text>' +
    ['60','130','200','270'].map(function(x, i) { return '<rect x="'+(x-22)+'" y="100" width="44" height="22" rx="6" fill="#eef2ff" stroke="#2b5ce6"/><text x="'+x+'" y="115" font-size="10" text-anchor="middle">节点'+(i+1)+'</text><line x1="'+x+'" y1="80" x2="'+x+'" y2="100" stroke="#94a3b8"/>'; }).join('') +
    '</svg><p class="dim">特点：所有节点共享一条总线；总线故障则全网瘫痪，布线简单</p></div>';

  // 4) 程序三种基本结构：顺序/分支/循环
  SVGS["c6-flow"] = '<div class="svg-wrap"><b>程序的三种基本结构</b><svg viewBox="0 0 520 200" width="100%" style="max-width:520px">' +
    '<text x="80" y="18" font-size="12" text-anchor="middle" fill="#1a2233">顺序结构</text>' +
    '<rect x="30" y="30" width="100" height="26" rx="6" fill="#eef2ff" stroke="#2b5ce6"/><text x="80" y="47" font-size="10" text-anchor="middle">语句A</text>' +
    '<line x1="80" y1="56" x2="80" y2="70" stroke="#2b5ce6"/><polygon points="76,66 80,74 84,66" fill="#2b5ce6"/>' +
    '<rect x="30" y="74" width="100" height="26" rx="6" fill="#eef2ff" stroke="#2b5ce6"/><text x="80" y="91" font-size="10" text-anchor="middle">语句B</text>' +
    '<text x="245" y="18" font-size="12" text-anchor="middle" fill="#1a2233">分支结构</text>' +
    '<rect x="195" y="30" width="100" height="26" rx="6" fill="#eef2ff" stroke="#2b5ce6"/><text x="245" y="47" font-size="10" text-anchor="middle">条件判断</text>' +
    '<line x1="245" y1="56" x2="245" y2="66" stroke="#2b5ce6"/><line x1="245" y1="66" x2="180" y2="66" stroke="#2b5ce6"/><line x1="245" y1="66" x2="310" y2="66" stroke="#2b5ce6"/>' +
    '<polygon points="176,62 184,66 176,70" fill="#2b5ce6"/><polygon points="306,62 314,66 306,70" fill="#2b5ce6"/>' +
    '<rect x="130" y="66" width="100" height="24" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="180" y="82" font-size="10" text-anchor="middle">真：执行A</text>' +
    '<rect x="260" y="66" width="100" height="24" rx="6" fill="#fee2e2" stroke="#dc2626"/><text x="310" y="82" font-size="10" text-anchor="middle">假：执行B</text>' +
    '<text x="425" y="18" font-size="12" text-anchor="middle" fill="#1a2233">循环结构</text>' +
    '<rect x="375" y="30" width="100" height="26" rx="6" fill="#eef2ff" stroke="#2b5ce6"/><text x="425" y="47" font-size="10" text-anchor="middle">条件成立?</text>' +
    '<rect x="375" y="84" width="100" height="24" rx="6" fill="#eef2ff" stroke="#2b5ce6"/><text x="425" y="100" font-size="10" text-anchor="middle">执行循环体</text>' +
    '<line x1="425" y1="56" x2="425" y2="82" stroke="#2b5ce6"/><polygon points="421,78 425,86 429,78" fill="#2b5ce6"/>' +
    '<line x1="475" y1="96" x2="500" y2="96" stroke="#2b5ce6"/><line x1="500" y1="96" x2="500" y2="43" stroke="#2b5ce6"/><line x1="500" y1="43" x2="477" y2="43" stroke="#2b5ce6"/><polygon points="481,39 477,47 485,47" fill="#2b5ce6"/>' +
    '<text x="390" y="125" font-size="9" fill="#6b7280">菱形=判断 · 矩形=处理 · 圆角矩形=起止</text>' +
    '</svg></div>';

  function get(pointId) { return SVGS[pointId] || ""; }
  return { get: get };
})();
