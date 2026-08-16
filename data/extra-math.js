window.EXTRA_MATH_DATA = {
  "questions": [
    {
      "id": "xq1",
      "type": "single",
      "module": "m1",
      "point": "极限",
      "stem": "lim(x→0) (sin3x)/(sin2x) =（ ）",
      "options": [
        "1",
        "3/2",
        "2/3",
        "3"
      ],
      "answer": "B",
      "explain": "x→0 时 sin3x~3x，sin2x~2x，原式=3x/2x=3/2。",
      "difficulty": 1
    },
    {
      "id": "xq2",
      "type": "single",
      "module": "m1",
      "point": "连续",
      "stem": "设 f(x)={(1-cosx)/x, x≠0; a, x=0} 在 x=0 处连续，则 a=（ ）",
      "options": [
        "0",
        "1",
        "-1",
        "不存在"
      ],
      "answer": "A",
      "explain": "连续要求 a=f(0)=lim(x→0)(1-cosx)/x，而 1-cosx~x²/2，故 lim(x²/2)/x=0，即 a=0。",
      "difficulty": 2
    },
    {
      "id": "xq3",
      "type": "single",
      "module": "m1",
      "point": "导数的几何意义",
      "stem": "曲线 y=lnx 在点 (1,0) 处的切线斜率为（ ）",
      "options": [
        "0",
        "1",
        "e",
        "-1"
      ],
      "answer": "B",
      "explain": "y'=1/x，y'(1)=1，故切线斜率为 1。",
      "difficulty": 1
    },
    {
      "id": "xq4",
      "type": "single",
      "module": "m1",
      "point": "微分",
      "stem": "设 y=sin2x，则 dy=（ ）",
      "options": [
        "2cos2x dx",
        "cos2x dx",
        "-2cos2x dx",
        "2sin2x dx"
      ],
      "answer": "A",
      "explain": "dy=y'dx=2cos2x dx。",
      "difficulty": 1
    },
    {
      "id": "xq5",
      "type": "single",
      "module": "m1",
      "point": "极值",
      "stem": "函数 f(x)=x²e^(-x) 的极大值为（ ）",
      "options": [
        "4/e²",
        "e²",
        "2/e",
        "4e²"
      ],
      "answer": "A",
      "explain": "f'(x)=x(2-x)e^(-x)，驻点 x=0,2；x=2 处 f' 由正变负，为极大值，f(2)=4/e²。",
      "difficulty": 2
    },
    {
      "id": "xq6",
      "type": "single",
      "module": "m1",
      "point": "渐近线",
      "stem": "曲线 y=x+1/x 的斜渐近线为（ ）",
      "options": [
        "y=x",
        "y=x+1",
        "y=0",
        "x=0"
      ],
      "answer": "A",
      "explain": "k=lim(y/x)=lim(1+1/x²)=1，b=lim(y-x)=lim(1/x)=0，故斜渐近线 y=x。",
      "difficulty": 2
    },
    {
      "id": "xf1",
      "type": "fill",
      "module": "m1",
      "point": "高阶导数",
      "stem": "设 y=e^(3x)，则 y''=____。",
      "answer": "9e^(3x)",
      "explain": "y'=3e^(3x)，y''=9e^(3x)。",
      "difficulty": 1
    },
    {
      "id": "xf2",
      "type": "fill",
      "module": "m1",
      "point": "隐函数求导",
      "stem": "由方程 x²+y²=1 确定的隐函数 y(x)，则 dy/dx=____。",
      "answer": "-x/y",
      "explain": "两边对 x 求导：2x+2y·y'=0，得 y'=-x/y。",
      "difficulty": 2
    },
    {
      "id": "xf3",
      "type": "fill",
      "module": "m1",
      "point": "等价无穷小",
      "stem": "lim(x→0) x·cotx = ____。",
      "answer": "1",
      "explain": "x·cotx=x·cosx/sinx=cosx·(x/sinx)→1×1=1。",
      "difficulty": 2
    },
    {
      "id": "xc1",
      "type": "calc",
      "module": "m1",
      "point": "极限",
      "stem": "求极限 lim(x→0) (1-cosx)/(x·sinx)。",
      "answer": "1/2",
      "explain": "x→0 时 1-cosx~x²/2，sinx~x，原式=(x²/2)/(x·x)=1/2。",
      "difficulty": 1
    },
    {
      "id": "xc2",
      "type": "calc",
      "module": "m1",
      "point": "洛必达法则",
      "stem": "求极限 lim(x→0) (eˣ-1-sinx)/x²。",
      "answer": "1/2",
      "explain": "0/0 型，两次洛必达：=lim(eˣ-cosx)/(2x)=lim(eˣ+sinx)/2=(1+0)/2=1/2。",
      "difficulty": 2
    },
    {
      "id": "xc3",
      "type": "calc",
      "module": "m1",
      "point": "复合函数求导",
      "stem": "设 y=ln(x+√(1+x²))，求 y'。",
      "answer": "1/√(1+x²)",
      "explain": "y'=[1+x/√(1+x²)]/(x+√(1+x²))=1/√(1+x²)。",
      "difficulty": 2
    },
    {
      "id": "xc4",
      "type": "calc",
      "module": "m1",
      "point": "隐函数求导",
      "stem": "求由方程 e^y+xy-e=0 确定的隐函数 y(x) 在 x=0 处的导数。",
      "answer": "-1/e",
      "explain": "x=0 时 e^y=e 得 y=1；两边求导 e^y·y'+y+xy'=0，代入 (0,1) 得 e·y'+1=0，故 y'=-1/e。",
      "difficulty": 2
    },
    {
      "id": "xc5",
      "type": "calc",
      "module": "m1",
      "point": "参数方程求导",
      "stem": "设 x=t-sint，y=1-cost，求 dy/dx。",
      "answer": "sint/(1-cost)",
      "explain": "dy/dx=(dy/dt)/(dx/dt)=sint/(1-cost)。",
      "difficulty": 2
    },
    {
      "id": "xc6",
      "type": "calc",
      "module": "m1",
      "point": "最值",
      "stem": "求函数 f(x)=x³-3x² 在 [-1,1] 上的最大值和最小值。",
      "answer": "最大值 0，最小值 -4",
      "explain": "f'=3x²-6x=3x(x-2)，驻点 x=0；f(-1)=-4，f(0)=0，f(1)=-2，故最大值 0，最小值 -4。",
      "difficulty": 2
    },
    {
      "id": "xc7",
      "type": "calc",
      "module": "m1",
      "point": "拐点",
      "stem": "求曲线 y=x³-3x²-9x+1 的拐点。",
      "answer": "(1,-10)",
      "explain": "y'=3x²-6x-9，y''=6x-6=6(x-1)；x=1 处 y'' 变号，y(1)=-10，拐点为 (1,-10)。",
      "difficulty": 3
    },
    {
      "id": "xc8",
      "type": "calc",
      "module": "m1",
      "point": "微分近似",
      "stem": "利用微分求 e^(0.01) 的近似值。",
      "answer": "1.01",
      "explain": "f(x)=eˣ，f(0)=1，f'(0)=1，e^(0.01)≈f(0)+f'(0)·0.01=1+0.01=1.01。",
      "difficulty": 2
    },
    {
      "id": "xc9",
      "type": "calc",
      "module": "m1",
      "point": "高阶导数",
      "stem": "设 y=xeˣ，求 y''(0)。",
      "answer": "2",
      "explain": "y'=eˣ+xeˣ=(1+x)eˣ，y''=eˣ+(1+x)eˣ=(2+x)eˣ，y''(0)=2。",
      "difficulty": 3
    },
    {
      "id": "xp1",
      "type": "proof",
      "module": "m1",
      "point": "证明不等式",
      "stem": "证明：当 x>0 时，eˣ>1+x。",
      "answer": "略（见解析）",
      "explain": "设 f(x)=eˣ-1-x，则 f'(x)=eˣ-1>0（x>0），故 f 在 (0,+∞) 上单调递增，又 f(0)=0，故 x>0 时 f(x)>0，即 eˣ>1+x。",
      "difficulty": 2
    },
    {
      "id": "xp2",
      "type": "proof",
      "module": "m1",
      "point": "拉格朗日中值定理",
      "stem": "用拉格朗日中值定理证明：|arctan b - arctan a| ≤ |b-a|。",
      "answer": "略（见解析）",
      "explain": "设 f(x)=arctan x，在 [a,b] 上应用拉格朗日中值定理，存在 ξ 使 arctan b-arctan a=f'(ξ)(b-a)=[1/(1+ξ²)](b-a)，而 0<1/(1+ξ²)≤1，故 |arctan b-arctan a|≤|b-a|。",
      "difficulty": 3
    },
    {
      "id": "xq7",
      "type": "single",
      "module": "m2",
      "point": "不定积分",
      "stem": "∫(x²+1/x)dx =（ ）",
      "options": [
        "x³/3+ln|x|+C",
        "x³/3-ln|x|+C",
        "3x³+ln|x|+C",
        "x³/3+1/x²+C"
      ],
      "answer": "A",
      "explain": "∫x²dx=x³/3，∫(1/x)dx=ln|x|，故原式=x³/3+ln|x|+C。",
      "difficulty": 1
    },
    {
      "id": "xq8",
      "type": "single",
      "module": "m2",
      "point": "定积分换元",
      "stem": "∫[0,1] x·e^(x²) dx =（ ）",
      "options": [
        "(e-1)/2",
        "(e+1)/2",
        "e-1",
        "e/2"
      ],
      "answer": "A",
      "explain": "凑微分 xdx=(1/2)d(x²)，原式=(1/2)e^(x²)|[0,1]=(e-1)/2。",
      "difficulty": 2
    },
    {
      "id": "xq9",
      "type": "single",
      "module": "m2",
      "point": "定积分奇偶性",
      "stem": "∫[-π/2,π/2] x·cos²x dx =（ ）",
      "options": [
        "0",
        "1",
        "2",
        "π"
      ],
      "answer": "A",
      "explain": "x·cos²x 为奇函数，在对称区间上积分为 0。",
      "difficulty": 2
    },
    {
      "id": "xq10",
      "type": "single",
      "module": "m2",
      "point": "广义积分",
      "stem": "广义积分 ∫[1,+∞) (1/x^p)dx 收敛的充要条件是（ ）",
      "options": [
        "p>1",
        "p≥1",
        "p<1",
        "p≤1"
      ],
      "answer": "A",
      "explain": "∫[1,+∞)dx/x^p 当 p>1 收敛，p≤1 发散。",
      "difficulty": 1
    },
    {
      "id": "xf4",
      "type": "fill",
      "module": "m2",
      "point": "凑微分",
      "stem": "∫x·e^(x²)dx = ____。",
      "answer": "(1/2)e^(x²)+C",
      "explain": "凑微分 xdx=(1/2)d(x²)，原式=(1/2)e^(x²)+C。",
      "difficulty": 1
    },
    {
      "id": "xf5",
      "type": "fill",
      "module": "m2",
      "point": "定积分",
      "stem": "∫[0,π/2] sin²x dx = ____。",
      "answer": "π/4",
      "explain": "sin²x=(1-cos2x)/2，∫[0,π/2]sin²xdx=[x/2-sin2x/4]|[0,π/2]=π/4。",
      "difficulty": 2
    },
    {
      "id": "xf6",
      "type": "fill",
      "module": "m2",
      "point": "变限积分求导",
      "stem": "d/dx ∫[0,x³] cos(t²)dt = ____。",
      "answer": "3x²cos(x⁶)",
      "explain": "变限积分求导：f(x³)·(x³)'=cos(x⁶)·3x²。",
      "difficulty": 2
    },
    {
      "id": "xc10",
      "type": "calc",
      "module": "m2",
      "point": "分部积分",
      "stem": "求不定积分 ∫x·lnx dx。",
      "answer": "(x²/2)lnx-x²/4+C",
      "explain": "令 u=lnx，dv=xdx，则 du=dx/x，v=x²/2，原式=(x²/2)lnx-∫(x/2)dx=(x²/2)lnx-x²/4+C。",
      "difficulty": 2
    },
    {
      "id": "xc11",
      "type": "calc",
      "module": "m2",
      "point": "换元积分",
      "stem": "求不定积分 ∫dx/(1+√x)。",
      "answer": "2√x-2ln(1+√x)+C",
      "explain": "令 t=√x，x=t²，dx=2tdt，∫2t/(1+t)dt=2∫[1-1/(1+t)]dt=2[t-ln(1+t)]+C=2√x-2ln(1+√x)+C。",
      "difficulty": 2
    },
    {
      "id": "xc12",
      "type": "calc",
      "module": "m2",
      "point": "定积分分部",
      "stem": "求定积分 ∫[0,π] x·sinx dx。",
      "answer": "π",
      "explain": "分部：∫xsinxdx=-xcosx+sinx，[-xcosx+sinx]|[0,π]=π。",
      "difficulty": 2
    },
    {
      "id": "xc13",
      "type": "calc",
      "module": "m2",
      "point": "定积分换元",
      "stem": "求定积分 ∫[0,1] x/(1+x²) dx。",
      "answer": "(1/2)ln2",
      "explain": "凑微分 xdx=(1/2)d(1+x²)，原式=(1/2)ln(1+x²)|[0,1]=(1/2)ln2。",
      "difficulty": 2
    },
    {
      "id": "xc14",
      "type": "calc",
      "module": "m2",
      "point": "面积",
      "stem": "求曲线 y=x² 与直线 y=2x 所围图形的面积。",
      "answer": "4/3",
      "explain": "联立 x²=2x 得交点 x=0,2，S=∫[0,2](2x-x²)dx=[x²-x³/3]|[0,2]=4-8/3=4/3。",
      "difficulty": 2
    },
    {
      "id": "xc15",
      "type": "calc",
      "module": "m2",
      "point": "旋转体体积",
      "stem": "求曲线 y=sinx（0≤x≤π）绕 x 轴旋转所得旋转体的体积。",
      "answer": "π²/2",
      "explain": "V=π∫[0,π]sin²xdx=π·(π/2)=π²/2。",
      "difficulty": 3
    },
    {
      "id": "xc16",
      "type": "calc",
      "module": "m2",
      "point": "变限积分与洛必达",
      "stem": "求极限 lim(x→0) [∫[0,x] sin(t²)dt]/x³。",
      "answer": "1/3",
      "explain": "0/0 型，洛必达：=lim sin(x²)/(3x²)=lim x²/(3x²)=1/3。",
      "difficulty": 2
    },
    {
      "id": "xc17",
      "type": "calc",
      "module": "m2",
      "point": "广义积分",
      "stem": "求广义积分 ∫[0,+∞) e^(-2x) dx。",
      "answer": "1/2",
      "explain": "原式=[-e^(-2x)/2]|[0,+∞)=0-(-1/2)=1/2。",
      "difficulty": 2
    },
    {
      "id": "xp3",
      "type": "proof",
      "module": "m2",
      "point": "定积分性质",
      "stem": "证明：∫[0,π/2] sinⁿx dx = ∫[0,π/2] cosⁿx dx（n 为正整数）。",
      "answer": "略（见解析）",
      "explain": "令 t=π/2-x，则 dx=-dt；x=0 时 t=π/2，x=π/2 时 t=0，且 sinx=cos t，故 ∫[0,π/2]sinⁿxdx=∫[π/2,0]cosⁿt·(-dt)=∫[0,π/2]cosⁿtdt。",
      "difficulty": 2
    },
    {
      "id": "xq11",
      "type": "single",
      "module": "m3",
      "point": "向量垂直",
      "stem": "已知向量 a=(1,2,-1)，b=(2,k,2)，若 a⊥b，则 k=（ ）",
      "options": [
        "0",
        "1",
        "-1",
        "2"
      ],
      "answer": "A",
      "explain": "a⊥b ⇔ a·b=0，即 1×2+2k+(-1)×2=0，得 2k=0，k=0。",
      "difficulty": 1
    },
    {
      "id": "xq12",
      "type": "single",
      "module": "m3",
      "point": "平面方程",
      "stem": "过点 (1,0,0)、(0,1,0)、(0,0,1) 的平面方程为（ ）",
      "options": [
        "x+y+z=1",
        "x+y+z=0",
        "x+y+z=2",
        "x+y-z=1"
      ],
      "answer": "A",
      "explain": "三点满足截距式，平面方程为 x+y+z=1。",
      "difficulty": 2
    },
    {
      "id": "xf7",
      "type": "fill",
      "module": "m3",
      "point": "向量夹角",
      "stem": "向量 a=(1,0,1)，b=(0,1,1) 的夹角余弦 cosθ=____。",
      "answer": "1/2",
      "explain": "a·b=1，|a|=|b|=√2，cosθ=(a·b)/(|a||b|)=1/2。",
      "difficulty": 2
    },
    {
      "id": "xc18",
      "type": "calc",
      "module": "m3",
      "point": "数量积",
      "stem": "已知 |a|=2，|b|=3，a·b=3，求 (2a-b)·(a+2b)。",
      "answer": "-1",
      "explain": "展开=2|a|²+4a·b-a·b-2|b|²=2×4+3×3-2×9=8+9-18=-1。",
      "difficulty": 2
    },
    {
      "id": "xc19",
      "type": "calc",
      "module": "m3",
      "point": "直线方程",
      "stem": "求过点 (1,2,3) 且方向向量 s=(1,-1,2) 的直线方程。",
      "answer": "(x-1)/1=(y-2)/(-1)=(z-3)/2",
      "explain": "直线的对称式方程：(x-x₀)/s₁=(y-y₀)/s₂=(z-z₀)/s₃，代入得 (x-1)/1=(y-2)/(-1)=(z-3)/2。",
      "difficulty": 1
    },
    {
      "id": "xc20",
      "type": "calc",
      "module": "m3",
      "point": "平面方程",
      "stem": "求过点 (2,-1,1) 且与平面 x+2y-z=0 平行的平面方程。",
      "answer": "x+2y-z+1=0",
      "explain": "平行平面取同一法向量 n=(1,2,-1)，点法式 (x-2)+2(y+1)-(z-1)=0，整理得 x+2y-z+1=0。",
      "difficulty": 2
    },
    {
      "id": "xq13",
      "type": "single",
      "module": "m4",
      "point": "偏导数",
      "stem": "设 z=x²+y²，则 ∂z/∂y=（ ）",
      "options": [
        "2y",
        "2x",
        "x²",
        "y²"
      ],
      "answer": "A",
      "explain": "对 y 求导（x 看作常数）：∂z/∂y=2y。",
      "difficulty": 1
    },
    {
      "id": "xq14",
      "type": "single",
      "module": "m4",
      "point": "偏导数",
      "stem": "设 f(x,y)=x²y+eˣ，则 f_x(1,1)=（ ）",
      "options": [
        "2+e",
        "2",
        "e",
        "1+e"
      ],
      "answer": "A",
      "explain": "f_x=2xy+eˣ，f_x(1,1)=2+e。",
      "difficulty": 2
    },
    {
      "id": "xq15",
      "type": "single",
      "module": "m4",
      "point": "全微分",
      "stem": "设 z=xy，则全微分 dz=（ ）",
      "options": [
        "ydx+xdy",
        "xdx+ydy",
        "dx+dy",
        "xydx"
      ],
      "answer": "A",
      "explain": "dz=z_x dx+z_y dy=ydx+xdy。",
      "difficulty": 1
    },
    {
      "id": "xf8",
      "type": "fill",
      "module": "m4",
      "point": "偏导数",
      "stem": "设 z=sin(x+y)，则 ∂z/∂x=____。",
      "answer": "cos(x+y)",
      "explain": "对 x 求导（y 看作常数）：∂z/∂x=cos(x+y)。",
      "difficulty": 1
    },
    {
      "id": "xf9",
      "type": "fill",
      "module": "m4",
      "point": "混合偏导",
      "stem": "设 z=x²y+y³，则 ∂²z/∂x∂y=____。",
      "answer": "2x",
      "explain": "∂z/∂x=2xy，∂²z/∂x∂y=2x。",
      "difficulty": 2
    },
    {
      "id": "xc21",
      "type": "calc",
      "module": "m4",
      "point": "偏导数",
      "stem": "设 z=x·e^(xy)，求 ∂z/∂x 和 ∂z/∂y。",
      "answer": "∂z/∂x=(1+xy)e^(xy)，∂z/∂y=x²e^(xy)",
      "explain": "∂z/∂x=e^(xy)+x·y·e^(xy)=(1+xy)e^(xy)；∂z/∂y=x·x·e^(xy)=x²e^(xy)。",
      "difficulty": 2
    },
    {
      "id": "xc22",
      "type": "calc",
      "module": "m4",
      "point": "全微分",
      "stem": "求 z=arctan(y/x) 的全微分。",
      "answer": "dz=-y/(x²+y²)dx+x/(x²+y²)dy",
      "explain": "z_x=-y/(x²+y²)，z_y=x/(x²+y²)，故 dz=z_x dx+z_y dy。",
      "difficulty": 2
    },
    {
      "id": "xc23",
      "type": "calc",
      "module": "m4",
      "point": "二重积分",
      "stem": "计算二重积分 ∬_D y dxdy，其中 D:0≤x≤1，0≤y≤2。",
      "answer": "2",
      "explain": "∫[0,1]dx∫[0,2]ydy=∫[0,1][y²/2]|[0,2]dx=∫[0,1]2dx=2。",
      "difficulty": 2
    },
    {
      "id": "xc24",
      "type": "calc",
      "module": "m4",
      "point": "二重积分",
      "stem": "计算二重积分 ∬_D x² dxdy，其中 D 由 y=x、y=0、x=1 围成。",
      "answer": "1/4",
      "explain": "D:0≤x≤1，0≤y≤x，∬x²dσ=∫[0,1]dx∫[0,x]x²dy=∫[0,1]x³dx=1/4。",
      "difficulty": 3
    },
    {
      "id": "xc25",
      "type": "calc",
      "module": "m4",
      "point": "拉格朗日乘数法",
      "stem": "求函数 f(x,y)=x+y 在约束条件 x²+y²=1 下的最大值。",
      "answer": "√2",
      "explain": "构造 F=x+y+λ(x²+y²-1)，由 F_x=1+2λx=0，F_y=1+2λy=0 得 x=y，代入 x²+y²=1 得 x=y=±1/√2，最大值为 2/√2=√2。",
      "difficulty": 3
    },
    {
      "id": "xq16",
      "type": "single",
      "module": "m5",
      "point": "可分离变量方程",
      "stem": "微分方程 dy/dx=3y 的通解为（ ）",
      "options": [
        "y=Ce^(3x)",
        "y=Ce^(-3x)",
        "y=3Ceˣ",
        "y=Ceˣ"
      ],
      "answer": "A",
      "explain": "分离变量 dy/y=3dx，积分 ln|y|=3x+C，y=Ce^(3x)。",
      "difficulty": 1
    },
    {
      "id": "xq17",
      "type": "single",
      "module": "m5",
      "point": "微分方程概念",
      "stem": "微分方程 (y'')³+y'=x 的阶数为（ ）",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": "B",
      "explain": "最高阶导数为二阶导数，故阶数为 2。",
      "difficulty": 1
    },
    {
      "id": "xq18",
      "type": "single",
      "module": "m5",
      "point": "一阶线性方程",
      "stem": "微分方程 y'+2y=0 满足 y(0)=1 的特解为（ ）",
      "options": [
        "y=e^(-2x)",
        "y=e^(2x)",
        "y=e^(-x)",
        "y=e^(x/2)"
      ],
      "answer": "A",
      "explain": "通解 y=Ce^(-2x)，由 y(0)=1 得 C=1，特解 y=e^(-2x)。",
      "difficulty": 2
    },
    {
      "id": "xq19",
      "type": "single",
      "module": "m5",
      "point": "二阶常系数齐次方程",
      "stem": "微分方程 y''+y=0 的通解为（ ）",
      "options": [
        "y=C₁cosx+C₂sinx",
        "y=C₁eˣ+C₂e⁻ˣ",
        "y=(C₁+C₂x)eˣ",
        "y=C₁cosx+C₂"
      ],
      "answer": "A",
      "explain": "特征方程 r²+1=0，r=±i，通解 y=C₁cosx+C₂sinx。",
      "difficulty": 2
    },
    {
      "id": "xf10",
      "type": "fill",
      "module": "m5",
      "point": "齐次方程",
      "stem": "微分方程 dy/dx=y/x 的通解为____。",
      "answer": "y=Cx",
      "explain": "令 u=y/x，化为可分离变量方程，解得 u=C，即 y=Cx。",
      "difficulty": 2
    },
    {
      "id": "xf11",
      "type": "fill",
      "module": "m5",
      "point": "一阶线性方程",
      "stem": "微分方程 y'+y/x=0 的通解为____。",
      "answer": "y=C/x",
      "explain": "分离变量 dy/y=-dx/x，积分 ln|y|=-ln|x|+C，得 y=C/x。",
      "difficulty": 2
    },
    {
      "id": "xc26",
      "type": "calc",
      "module": "m5",
      "point": "可分离变量方程",
      "stem": "求微分方程 dy/dx=e^(x-y) 满足 y(0)=0 的特解。",
      "answer": "y=x",
      "explain": "分离变量 e^y dy=eˣdx，积分 e^y=eˣ+C；由 y(0)=0 得 1=1+C，C=0，故 e^y=eˣ，y=x。",
      "difficulty": 2
    },
    {
      "id": "xc27",
      "type": "calc",
      "module": "m5",
      "point": "一阶线性方程",
      "stem": "求微分方程 y'+2xy=2x 的通解。",
      "answer": "y=1+Ce^(-x²)",
      "explain": "P=2x，积分因子 e^(∫2xdx)=e^(x²)，y=e^(-x²)[∫2x·e^(x²)dx+C]=e^(-x²)[e^(x²)+C]=1+Ce^(-x²)。",
      "difficulty": 3
    },
    {
      "id": "xq20",
      "type": "single",
      "module": "m6",
      "point": "收敛必要条件",
      "stem": "若级数 Σu_n 收敛，则必有（ ）",
      "options": [
        "lim(n→∞)u_n=0",
        "lim(n→∞)u_n=1",
        "lim(n→∞)u_n=∞",
        "u_n 单调递减"
      ],
      "answer": "A",
      "explain": "级数收敛的必要条件是一般项趋于 0。",
      "difficulty": 1
    },
    {
      "id": "xq21",
      "type": "single",
      "module": "m6",
      "point": "等比级数求和",
      "stem": "级数 Σ(n=0→∞)(1/2)ⁿ 的和为（ ）",
      "options": [
        "2",
        "1",
        "1/2",
        "发散"
      ],
      "answer": "A",
      "explain": "首项 1、公比 1/2 的等比级数，和=1/(1-1/2)=2。",
      "difficulty": 2
    },
    {
      "id": "xq22",
      "type": "single",
      "module": "m6",
      "point": "幂级数收敛半径",
      "stem": "幂级数 Σ(n=0→∞) xⁿ/n! 的收敛半径为（ ）",
      "options": [
        "0",
        "1",
        "+∞",
        "2"
      ],
      "answer": "C",
      "explain": "R=lim|a_n/a_(n+1)|=lim(n+1)=+∞。",
      "difficulty": 2
    },
    {
      "id": "xf12",
      "type": "fill",
      "module": "m6",
      "point": "p级数",
      "stem": "p-级数 Σ(n=1→∞) 1/n^p 当 p____ 时收敛。",
      "answer": "p>1",
      "explain": "p-级数当 p>1 收敛，p≤1 发散。",
      "difficulty": 1
    },
    {
      "id": "xc28",
      "type": "calc",
      "module": "m6",
      "point": "比值判别法",
      "stem": "判断级数 Σ(n=1→∞) n/3ⁿ 的敛散性。",
      "answer": "收敛",
      "explain": "比值法：u_(n+1)/u_n=(n+1)/(3n)→1/3<1，故收敛。",
      "difficulty": 2
    },
    {
      "id": "xc29",
      "type": "calc",
      "module": "m6",
      "point": "收敛半径",
      "stem": "求幂级数 Σ(n=1→∞) xⁿ/(3ⁿ·n) 的收敛半径。",
      "answer": "R=3",
      "explain": "ρ=lim|a_(n+1)/a_n|=lim n/[3(n+1)]=1/3，R=1/ρ=3。",
      "difficulty": 2
    },
    {
      "id": "xc30",
      "type": "calc",
      "module": "m6",
      "point": "幂级数求和",
      "stem": "求幂级数 Σ(n=0→∞) xⁿ（|x|<1）的和函数。",
      "answer": "S(x)=1/(1-x)",
      "explain": "等比级数，首项 1、公比 x，|x|<1 时和 S(x)=1/(1-x)。",
      "difficulty": 2
    },
    {
      "id": "xc31",
      "type": "calc",
      "module": "m6",
      "point": "幂级数求和",
      "stem": "求幂级数 Σ(n=0→∞)(n+1)xⁿ（|x|<1）的和函数。",
      "answer": "S(x)=1/(1-x)²",
      "explain": "S(x)=Σxⁿ+Σnxⁿ=1/(1-x)+x/(1-x)²=1/(1-x)²。",
      "difficulty": 3
    },
    {
      "id": "xq23",
      "type": "single",
      "module": "m7",
      "point": "行列式",
      "stem": "二阶行列式 |3 1; 1 2| 的值为（ ）",
      "options": [
        "5",
        "-5",
        "1",
        "7"
      ],
      "answer": "A",
      "explain": "=3×2-1×1=6-1=5。",
      "difficulty": 1
    },
    {
      "id": "xq24",
      "type": "single",
      "module": "m7",
      "point": "矩阵乘法",
      "stem": "设 A=[1 2; 0 1]，则 A²=（ ）",
      "options": [
        "[1 4; 0 1]",
        "[1 2; 0 1]",
        "[1 2; 0 2]",
        "[1 0; 0 1]"
      ],
      "answer": "A",
      "explain": "A²=A·A=[1×1+2×0, 1×2+2×1; 0×1+1×0, 0×2+1×1]=[1 4; 0 1]。",
      "difficulty": 2
    },
    {
      "id": "xq25",
      "type": "single",
      "module": "m7",
      "point": "矩阵的秩",
      "stem": "矩阵 [1 2; 2 4] 的秩为（ ）",
      "options": [
        "0",
        "1",
        "2",
        "3"
      ],
      "answer": "B",
      "explain": "两行成比例（第2行=2×第1行），故秩为 1。",
      "difficulty": 2
    },
    {
      "id": "xq26",
      "type": "single",
      "module": "m7",
      "point": "线性方程组",
      "stem": "方程组 {x+y=2; x-y=0} 的解为（ ）",
      "options": [
        "x=1,y=1",
        "x=2,y=0",
        "x=0,y=2",
        "x=1,y=-1"
      ],
      "answer": "A",
      "explain": "两式相加 2x=2 得 x=1，代入得 y=1。",
      "difficulty": 1
    },
    {
      "id": "xf13",
      "type": "fill",
      "module": "m7",
      "point": "行列式",
      "stem": "三阶行列式 |1 0 0; 0 2 0; 0 0 -3| 的值为____。",
      "answer": "-6",
      "explain": "对角行列式=主对角线之积=1×2×(-3)=-6。",
      "difficulty": 1
    },
    {
      "id": "xf14",
      "type": "fill",
      "module": "m7",
      "point": "逆矩阵",
      "stem": "矩阵 A=[3 0; 0 2] 的逆矩阵 A⁻¹=____。",
      "answer": "[1/3 0; 0 1/2]",
      "explain": "对角矩阵的逆为对角元素取倒数：A⁻¹=[1/3 0; 0 1/2]。",
      "difficulty": 2
    },
    {
      "id": "xc32",
      "type": "calc",
      "module": "m7",
      "point": "行列式计算",
      "stem": "计算三阶行列式 |2 1 1; 1 2 1; 1 1 2|。",
      "answer": "4",
      "explain": "按第一行展开：2×|2 1;1 2|-1×|1 1;1 2|+1×|1 2;1 1|=2×3-1×1+1×(-1)=6-1-1=4。",
      "difficulty": 2
    },
    {
      "id": "xc33",
      "type": "calc",
      "module": "m7",
      "point": "逆矩阵",
      "stem": "求矩阵 A=[1 1; 0 1] 的逆矩阵。",
      "answer": "A⁻¹=[1 -1; 0 1]",
      "explain": "|A|=1，二阶逆矩阵公式 A⁻¹=1/1×[1 -1; 0 1]=[1 -1; 0 1]。",
      "difficulty": 1
    },
    {
      "id": "xc34",
      "type": "calc",
      "module": "m7",
      "point": "矩阵的秩",
      "stem": "求矩阵 [1 2 3; 0 1 2; 1 3 5] 的秩。",
      "answer": "2",
      "explain": "第3行减第1行得 [0 1 2]，与第2行相同，化为行阶梯形后非零行有 2 个，故 r=2。",
      "difficulty": 2
    },
    {
      "id": "xc35",
      "type": "calc",
      "module": "m7",
      "point": "线性方程组求解",
      "stem": "解线性方程组 {x+y+z=1; 2x+y-z=2; x-y+z=0}。",
      "answer": "x=2/3, y=1/2, z=-1/6",
      "explain": "第1式+第3式得 2x+2z=1，即 x+z=1/2；代入第1式得 y=1/2；第2式 2x-z=3/2，与 x+z=1/2 联立解得 x=2/3，z=-1/6。",
      "difficulty": 3
    },
    {
      "id": "xp4",
      "type": "proof",
      "module": "m7",
      "point": "逆矩阵性质",
      "stem": "证明：若 A、B 均为可逆矩阵，则 (AB)⁻¹=B⁻¹A⁻¹。",
      "answer": "略（见解析）",
      "explain": "因 (AB)(B⁻¹A⁻¹)=A(BB⁻¹)A⁻¹=AEA⁻¹=AA⁻¹=E，且 (B⁻¹A⁻¹)(AB)=B⁻¹(A⁻¹A)B=B⁻¹EB=B⁻¹B=E，由逆矩阵定义得 (AB)⁻¹=B⁻¹A⁻¹。",
      "difficulty": 2
    },
    {
      "id": "xp5",
      "type": "proof",
      "module": "m7",
      "point": "转置性质",
      "stem": "证明：设 A 为 m×s 矩阵、B 为 s×n 矩阵，则 (AB)ᵀ=BᵀAᵀ。",
      "answer": "略（见解析）",
      "explain": "由转置定义，(AB)ᵀ 的 (i,j) 元等于 AB 的 (j,i) 元 = Σ(k) a_jk b_ki = Σ(k) (Bᵀ)_ik (Aᵀ)_kj = (BᵀAᵀ) 的 (i,j) 元，故 (AB)ᵀ=BᵀAᵀ。",
      "difficulty": 3
    },
    {
      "id": "xq27",
      "type": "single",
      "module": "m8",
      "point": "古典概率",
      "stem": "掷两枚均匀骰子，点数之和为 7 的概率为（ ）",
      "options": [
        "1/6",
        "1/12",
        "1/36",
        "7/36"
      ],
      "answer": "A",
      "explain": "和为 7 的情形有 (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) 共 6 种，P=6/36=1/6。",
      "difficulty": 1
    },
    {
      "id": "xq28",
      "type": "single",
      "module": "m8",
      "point": "条件概率",
      "stem": "设 P(A)=0.5，P(B)=0.4，P(AB)=0.2，则 P(B|A)=（ ）",
      "options": [
        "0.4",
        "0.5",
        "0.2",
        "0.8"
      ],
      "answer": "A",
      "explain": "P(B|A)=P(AB)/P(A)=0.2/0.5=0.4。",
      "difficulty": 2
    },
    {
      "id": "xq29",
      "type": "single",
      "module": "m8",
      "point": "独立性",
      "stem": "设 A、B 独立，P(A)=0.4，P(B)=0.5，则 P(A∪B)=（ ）",
      "options": [
        "0.7",
        "0.9",
        "0.2",
        "0.5"
      ],
      "answer": "A",
      "explain": "P(A∪B)=P(A)+P(B)-P(A)P(B)=0.4+0.5-0.2=0.7。",
      "difficulty": 2
    },
    {
      "id": "xq30",
      "type": "single",
      "module": "m8",
      "point": "方差",
      "stem": "设 X~B(4,0.5)，则 D(X)=（ ）",
      "options": [
        "1",
        "2",
        "0.5",
        "4"
      ],
      "answer": "A",
      "explain": "二项分布 D(X)=np(1-p)=4×0.5×0.5=1。",
      "difficulty": 2
    },
    {
      "id": "xf15",
      "type": "fill",
      "module": "m8",
      "point": "概率加法公式",
      "stem": "设 P(A)=0.3，P(B)=0.2，且 A、B 互斥，则 P(A∪B)=____。",
      "answer": "0.5",
      "explain": "互斥时 P(A∪B)=P(A)+P(B)=0.5。",
      "difficulty": 1
    },
    {
      "id": "xf16",
      "type": "fill",
      "module": "m8",
      "point": "二项分布",
      "stem": "设 X~B(3,1/3)，则 P(X=1)=____。",
      "answer": "4/9",
      "explain": "P(X=1)=C(3,1)(1/3)(2/3)²=3×(1/3)×(4/9)=4/9。",
      "difficulty": 2
    },
    {
      "id": "xf17",
      "type": "fill",
      "module": "m8",
      "point": "数学期望",
      "stem": "设 X 的分布律为 P(X=1)=0.6，P(X=2)=0.4，则 E(X)=____。",
      "answer": "1.4",
      "explain": "E(X)=1×0.6+2×0.4=1.4。",
      "difficulty": 1
    },
    {
      "id": "xf18",
      "type": "fill",
      "module": "m8",
      "point": "分布密度",
      "stem": "设 X 的密度函数 f(x)={kx, 0≤x≤1; 0, 其他}，则 k=____。",
      "answer": "2",
      "explain": "由 ∫[0,1]kxdx=k/2=1 得 k=2。",
      "difficulty": 2
    },
    {
      "id": "xc36",
      "type": "calc",
      "module": "m8",
      "point": "期望与方差",
      "stem": "设 X 的分布律为 P(X=-1)=0.2，P(X=0)=0.3，P(X=1)=0.5，求 E(X) 和 D(X)。",
      "answer": "E(X)=0.3，D(X)=0.61",
      "explain": "E(X)=-1×0.2+0×0.3+1×0.5=0.3；E(X²)=1×0.2+0+1×0.5=0.7；D(X)=0.7-0.09=0.61。",
      "difficulty": 2
    },
    {
      "id": "xp6",
      "type": "proof",
      "module": "m8",
      "point": "概率加法公式",
      "stem": "证明：P(A∪B)=P(A)+P(B)-P(AB)。",
      "answer": "略（见解析）",
      "explain": "因 A∪B=A∪(B-AB) 且 A 与 B-AB 互斥，故 P(A∪B)=P(A)+P(B-AB)；又 B=(AB)∪(B-AB) 且互斥，P(B)=P(AB)+P(B-AB)，即 P(B-AB)=P(B)-P(AB)，代入即得 P(A∪B)=P(A)+P(B)-P(AB)。",
      "difficulty": 2
    }
  ]
};
