// 高等数学 口诀与公式速记（配合考纲使用）
// 口诀针对零基础速记；公式为必背核心公式
window.MATH_TIPS_DATA = {
  "mnemonics": [
    {
      "title": "两个重要极限",
      "content": "① lim(x→0) sinx/x = 1（正弦比上自身，极限为 1）② lim(x→∞)(1+1/x)ˣ = e（一加无穷小，幂次无穷大，极限是 e）"
    },
    {
      "title": "等价无穷小（x→0）",
      "content": "sinx~x；tanx~x；arcsinx~x；ln(1+x)~x；eˣ-1~x；1-cosx~x²/2；(1+x)^a-1~ax。口诀：正弦正切反正弦，对数指数减一，一减余弦半平方。"
    },
    {
      "title": "洛必达法则",
      "content": "0/0 或 ∞/∞ 型未定式：分子分母分别求导，再求极限。口诀：零比零、无穷比无穷，上下求导继续算；算完再看还符不符，循环用到出结果。"
    },
    {
      "title": "求导口诀",
      "content": "常数求导为零；幂函数降幂乘系数 (xⁿ)'=nxⁿ⁻¹；eˣ 求导还是 eˣ；(aˣ)'=aˣlna；lnx 求导 1/x；sinx→cosx→-sinx→-cosx→sinx 循环。"
    },
    {
      "title": "复合求导",
      "content": "口诀：由外到内，层层求导，相乘连接。即 [f(φ(x))]' = f'(φ(x))·φ'(x)。"
    },
    {
      "title": "奇偶性口诀",
      "content": "奇函数关于原点对称，偶函数关于 y 轴对称。奇×奇=偶、偶×偶=偶、奇×偶=奇；奇函数在对称区间 [-a,a] 上的定积分为 0。"
    },
    {
      "title": "定积分牛顿-莱布尼茨",
      "content": "∫(a→b)f(x)dx = F(b) - F(a)（上限代入减下限代入）。口诀：先求原函数，上限减下限。"
    },
    {
      "title": "旋转体体积",
      "content": "绕 x 轴：V = π∫y²dx；绕 y 轴：V = π∫x²dy。口诀：绕谁谁不动，平方乘 π 再积分。"
    },
    {
      "title": "二阶行列式",
      "content": "|a b; c d| = ad - bc。口诀：主对角线相乘减副对角线相乘。"
    },
    {
      "title": "逆矩阵口诀",
      "content": "(AB)⁻¹ = B⁻¹A⁻¹（先来的后到，倒序）；(Aᵀ)⁻¹ = (A⁻¹)ᵀ。口诀：乘积取逆，次序颠倒。"
    },
    {
      "title": "矩阵秩与方程组",
      "content": "r(A) = r(Ā) 有解；r(A) = r(Ā) = n 唯一解；r(A) = r(Ā) < n 无穷多解；r(A) < r(Ā) 无解。"
    },
    {
      "title": "概率口诀",
      "content": "互斥事件概率相加：P(A∪B)=P(A)+P(B)；独立事件概率相乘：P(AB)=P(A)P(B)；一般加法公式：P(A∪B)=P(A)+P(B)-P(AB)。"
    },
    {
      "title": "微分方程解法",
      "content": "可分离变量：变量分离两边积分；一阶线性 y'+P(x)y=Q(x)：公式法 y=e^(-∫Pdx)[∫Q·e^(∫Pdx)dx+C]；二阶常系数齐次：特征方程 r²+pr+q=0 两根决定通解形式。"
    },
    {
      "title": "级数收敛",
      "content": "必要条件：收敛则通项趋于 0（lim uₙ=0，不满足必发散）；正项级数用比值/比较判别法；交错级数用莱布尼茨判别法。"
    },
    {
      "title": "多元函数极值",
      "content": "驻点 + 判别式 AC-B²：AC-B²>0 且 A>0 极小、A<0 极大；AC-B²<0 非极值；=0 需另判。口诀：判式大于零看 A 定极值，小于零不极值。"
    }
  ],
  "formulas": [
    {
      "title": "导数基本公式",
      "formula": "(xⁿ)'=nxⁿ⁻¹；(sinx)'=cosx；(cosx)'=-sinx；(eˣ)'=eˣ；(aˣ)'=aˣlna；(lnx)'=1/x；(tanx)'=sec²x"
    },
    {
      "title": "四则求导",
      "formula": "(u±v)'=u'±v'；(uv)'=u'v+uv'；(u/v)'=(u'v-uv')/v²"
    },
    {
      "title": "微分",
      "formula": "dy = f'(x)dx"
    },
    {
      "title": "不定积分基本公式",
      "formula": "∫xⁿdx=xⁿ⁺¹/(n+1)+C；∫(1/x)dx=ln|x|+C；∫eˣdx=eˣ+C；∫sinxdx=-cosx+C；∫cosxdx=sinx+C；∫(1/(1+x²))dx=arctanx+C"
    },
    {
      "title": "分部积分",
      "formula": "∫udv = uv - ∫vdu（口诀：反对幂指三，先 u 后 dv）"
    },
    {
      "title": "牛顿-莱布尼茨",
      "formula": "∫(a→b)f(x)dx = F(b)-F(a)"
    },
    {
      "title": "面积与体积",
      "formula": "面积 S=∫|f(x)-g(x)|dx；绕 x 轴体积 V=π∫y²dx"
    },
    {
      "title": "两个重要极限",
      "formula": "lim(x→0) sinx/x=1；lim(x→∞)(1+1/x)ˣ=e"
    },
    {
      "title": "等价无穷小",
      "formula": "sinx~tanx~arcsinx~x；ln(1+x)~x；eˣ-1~x；1-cosx~x²/2（x→0）"
    },
    {
      "title": "方向向量与法向量",
      "formula": "直线方向向量 s=(m,n,p)；平面法向量 n=(A,B,C)"
    },
    {
      "title": "平面方程",
      "formula": "点法式：A(x-x₀)+B(y-y₀)+C(z-z₀)=0"
    },
    {
      "title": "偏导数与全微分",
      "formula": "dz = (∂z/∂x)dx + (∂z/∂y)dy"
    },
    {
      "title": "二重积分",
      "formula": "直角坐标∬f dxdy；极坐标∬f·r drdθ；区域对称+奇函数→0"
    },
    {
      "title": "一阶线性方程",
      "formula": "y'+P(x)y=Q(x)，通解 y=e^(-∫Pdx)[∫Q·e^(∫Pdx)dx+C]"
    },
    {
      "title": "二阶常系数齐次",
      "formula": "特征方程 r²+pr+q=0：两实根 y=C₁e^r₁ˣ+C₂e^r₂ˣ；重根 y=(C₁+C₂x)e^rx；共轭复根 y=e^αx(C₁cosβx+C₂sinβx)"
    },
    {
      "title": "行列式按行展开",
      "formula": "D = ΣaᵢⱼAᵢⱼ（某行元素×对应代数余子式之和）"
    },
    {
      "title": "逆矩阵",
      "formula": "A⁻¹ = A*/|A|（|A|≠0）；(AB)⁻¹=B⁻¹A⁻¹；|A*|=|A|ⁿ⁻¹"
    },
    {
      "title": "概率公式",
      "formula": "P(A∪B)=P(A)+P(B)-P(AB)；独立：P(AB)=P(A)P(B)；条件：P(A|B)=P(AB)/P(B)"
    },
    {
      "title": "期望与方差",
      "formula": "E(aX+b)=aE(X)+b；D(X)=E(X²)-[E(X)]²；D(aX+b)=a²D(X)；常见：二项 X~B(n,p)，E=np，D=np(1-p)"
    },
    {
      "title": "幂级数收敛半径",
      "formula": "R = lim|aₙ/aₙ₊₁|（比值法）；端点需另判"
    }
  ]
};
