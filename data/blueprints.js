// 模拟卷蓝图：严格按重庆专升本考纲题型布局（题型×题量×分值），难度贴近真题；全部模块覆盖
window.MOCK_BLUEPRINTS = {
  gaoshu: [
    {
      id: "gaoshu-A", name: "模拟卷A·2025结构·全模块覆盖（8单选+4填空+8计算+1证明）",
      desc: "对齐 2024/2025 考纲题型结构：单选8×4+填空4×4+计算8×8+证明1×8=120分；8 大模块全覆盖（m1-m8）",
      slots: [
        { module: "m1", type: "single", count: 2, diff: [1, 2] }, { module: "m2", type: "single", count: 2, diff: [1, 2] },
        { module: "m3", type: "single", count: 1, diff: [1, 2] }, { module: "m4", type: "single", count: 1, diff: [1, 2] },
        { module: "m7", type: "single", count: 1, diff: [1, 2] }, { module: "m8", type: "single", count: 1, diff: [1, 2] },
        { module: "m1", type: "fill", count: 1, diff: [1, 2] }, { module: "m2", type: "fill", count: 1, diff: [1, 2] },
        { module: "m3", type: "fill", count: 1, diff: [1, 2] }, { module: "m6", type: "fill", count: 1, diff: [1, 2] },
        { module: "m1", type: "calc", count: 2, diff: [2, 3] }, { module: "m2", type: "calc", count: 2, diff: [2, 3] },
        { module: "m4", type: "calc", count: 1, diff: [2, 3] }, { module: "m5", type: "calc", count: 1, diff: [2, 3] },
        { module: "m7", type: "calc", count: 1, diff: [2, 3] }, { module: "m8", type: "calc", count: 1, diff: [2, 3] },
        { module: "m1", type: "proof", count: 1, diff: [3] }
      ]
    },
    {
      id: "gaoshu-B", name: "模拟卷B·计算强化·全模块覆盖（计算占比更高）",
      desc: "突出计算题：单选6×4+填空2×4+计算10×8+证明1×8=120分；m3/m4/m6 均覆盖",
      slots: [
        { module: "m1", type: "single", count: 2, diff: [1, 2] }, { module: "m2", type: "single", count: 1, diff: [1, 2] },
        { module: "m3", type: "single", count: 1, diff: [1, 2] }, { module: "m7", type: "single", count: 1, diff: [1, 2] },
        { module: "m8", type: "single", count: 1, diff: [1, 2] },
        { module: "m1", type: "fill", count: 1, diff: [1, 2] }, { module: "m6", type: "fill", count: 1, diff: [1, 2] },
        { module: "m1", type: "calc", count: 3, diff: [2, 3] }, { module: "m2", type: "calc", count: 2, diff: [2, 3] },
        { module: "m4", type: "calc", count: 1, diff: [2, 3] }, { module: "m5", type: "calc", count: 1, diff: [2, 3] },
        { module: "m7", type: "calc", count: 2, diff: [2, 3] }, { module: "m8", type: "calc", count: 1, diff: [2, 3] },
        { module: "m1", type: "proof", count: 1, diff: [3] }
      ]
    }
  ],
  jisuanji: [
    {
      id: "jisuanji-A", name: "模拟卷A·2025结构·全模块覆盖（25单选+5判断+10填空+4应用）",
      desc: "对齐 2025 考纲题型结构：单选25×2+判断5×2+填空10×2+应用4×10=120分；c1-c8 八模块全覆盖",
      slots: [
        { module: "c1", type: "single", count: 5, diff: [1, 2] }, { module: "c2", type: "single", count: 4, diff: [1, 2] },
        { module: "c3", type: "single", count: 4, diff: [1, 2] }, { module: "c4", type: "single", count: 4, diff: [1, 2] },
        { module: "c5", type: "single", count: 2, diff: [1, 2] }, { module: "c6", type: "single", count: 2, diff: [1, 2] },
        { module: "c7", type: "single", count: 2, diff: [1, 2] }, { module: "c8", type: "single", count: 2, diff: [1, 2] },
        { module: "c1", type: "judge", count: 1, diff: [1] }, { module: "c3", type: "judge", count: 1, diff: [1, 2] },
        { module: "c6", type: "judge", count: 1, diff: [1, 2] }, { module: "c7", type: "judge", count: 1, diff: [1, 2] },
        { module: "c8", type: "judge", count: 1, diff: [1, 2] },
        { module: "c1", type: "fill", count: 2, diff: [1, 2] }, { module: "c2", type: "fill", count: 1, diff: [1, 2] },
        { module: "c3", type: "fill", count: 2, diff: [1, 2] }, { module: "c4", type: "fill", count: 2, diff: [1, 2] },
        { module: "c5", type: "fill", count: 1, diff: [1, 2] }, { module: "c6", type: "fill", count: 1, diff: [1, 2] },
        { module: "c7", type: "fill", count: 1, diff: [1, 2] },
        { module: "c2", type: "app", count: 1, diff: [2, 3] }, { module: "c3", type: "app", count: 1, diff: [2, 3] },
        { module: "c4", type: "app", count: 1, diff: [2, 3] }, { module: "c7", type: "app", count: 1, diff: [2, 3] }
      ]
    }
  ],
  yingyu: [
    {
      id: "yingyu-A", name: "模拟卷A·完整结构（听力15+词汇20+阅读20+翻译10+写作1）",
      desc: "对齐考纲题型顺序：听力15×1+词汇20×1+阅读20×2+翻译选择10×1+写作1×20=105分（听力题附 TTS 播放材料；段落翻译15分为主观题，请用「听力训练」练英译汉）",
      slots: [
        { section: "听力", type: "listen", count: 15, diff: [1, 2] },
        { section: "词汇结构", type: "single", count: 20, diff: [1, 2] },
        { section: "阅读理解", type: "single", count: 15, diff: [1, 2] },
        { section: "阅读理解", type: "fill", count: 5, diff: [1, 2] },
        { section: "翻译", type: "single", count: 10, diff: [2] },
        { section: "写作", type: "app", count: 1, diff: [3] }
      ]
    }
  ]
};