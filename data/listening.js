// 听力训练材料（浏览器 TTS 朗读英文；题目测理解）—— 对应考纲"听力"部分
window.LISTENING_DATA = {
  materials: [
    {
      id: "l1", title: "餐厅点餐对话", type: "对话", topic: "At a Restaurant",
      script: "Waiter: Good evening! Can I take your order?\nCustomer: Yes, I'd like a bowl of tomato soup and a steak, please.\nWaiter: How would you like your steak done?\nCustomer: Medium, please. And a glass of orange juice.\nWaiter: Anything else?\nCustomer: No, that's all. Thank you.\nWaiter: You're welcome. Your order will be ready in about fifteen minutes.",
      questions: [
        { type: "single", stem: "What does the customer order first?", options: ["A. Tomato soup", "B. A salad", "C. A cake", "D. Coffee"], answer: "A", explain: "顾客先说 I'd like a bowl of tomato soup and a steak，第一个是番茄汤。" },
        { type: "single", stem: "How does the customer want the steak done?", options: ["A. Rare", "B. Well done", "C. Medium", "D. Raw"], answer: "C", explain: "Medium, please. 即五分熟。" },
        { type: "single", stem: "How long will the order take?", options: ["A. 5 minutes", "B. About fifteen minutes", "C. Half an hour", "D. An hour"], answer: "B", explain: "服务员说 about fifteen minutes。" },
        { type: "judge", stem: "The customer also orders a glass of orange juice.", options: ["正确", "错误"], answer: "正确", explain: "顾客说 And a glass of orange juice." }
      ]
    },
    {
      id: "l2", title: "学习计划独白", type: "独白", topic: "My Study Plan",
      script: "Hello, everyone! Today I'd like to share my study plan for the coming year. I get up at six every morning and read English for thirty minutes. In the afternoon, I review math and computer science. On weekends, I do past exam papers. I think making a clear plan is the first step to success, and I will stick to it.",
      questions: [
        { type: "single", stem: "When does the speaker get up every morning?", options: ["A. At five", "B. At six", "C. At seven", "D. At eight"], answer: "B", explain: "I get up at six every morning." },
        { type: "single", stem: "What does the speaker do in the afternoon?", options: ["A. Read English", "B. Do sports", "C. Review math and computer science", "D. Watch TV"], answer: "C", explain: "In the afternoon, I review math and computer science." },
        { type: "single", stem: "What does the speaker do on weekends?", options: ["A. Do past exam papers", "B. Travel", "C. Play games", "D. Sleep"], answer: "A", explain: "On weekends, I do past exam papers." },
        { type: "judge", stem: "The speaker thinks a clear plan is the first step to success.", options: ["正确", "错误"], answer: "正确", explain: "I think making a clear plan is the first step to success." }
      ]
    },
    {
      id: "l3", title: "问路对话", type: "对话", topic: "Asking for Directions",
      script: "Man: Excuse me, could you tell me how to get to the City Library?\nWoman: Sure. Go straight along this street, turn left at the second crossing, and you will see a big supermarket. The library is just behind it.\nMan: Is it far from here?\nWoman: About ten minutes on foot.\nMan: Thank you very much.\nWoman: You are welcome.",
      questions: [
        { type: "single", stem: "Where does the man want to go?", options: ["A. A supermarket", "B. The City Library", "C. A bank", "D. A hospital"], answer: "B", explain: "男人问 how to get to the City Library。" },
        { type: "single", stem: "Where is the library?", options: ["A. Beside a bank", "B. In front of a park", "C. Behind a big supermarket", "D. Near a school"], answer: "C", explain: "The library is just behind it（超市后面）。" },
        { type: "single", stem: "How far is the library?", options: ["A. Two minutes", "B. About ten minutes on foot", "C. Twenty minutes by bus", "D. An hour"], answer: "B", explain: "About ten minutes on foot." },
        { type: "judge", stem: "The man should turn right at the second crossing.", options: ["正确", "错误"], answer: "错误", explain: "女人说 turn left at the second crossing，是左转不是右转。" }
      ]
    },
    {
      id: "l4", title: "活动通知独白", type: "独白", topic: "A School Notice",
      script: "Attention, please! There will be an English speech contest in the school hall at seven o'clock on Friday evening. Anyone who is interested can sign up at the Students' Union before Wednesday. The winner will get a prize and a chance to study abroad. Please come and join us!",
      questions: [
        { type: "single", stem: "When will the English speech contest be held?", options: ["A. Friday morning", "B. Friday evening at seven", "C. Wednesday", "D. Saturday"], answer: "B", explain: "at seven o'clock on Friday evening。" },
        { type: "single", stem: "Where will the contest be held?", options: ["A. In the library", "B. In the school hall", "C. In the classroom", "D. In the gym"], answer: "B", explain: "in the school hall。" },
        { type: "single", stem: "When should students sign up?", options: ["A. Before Friday", "B. Before Wednesday", "C. On the contest day", "D. Next week"], answer: "B", explain: "sign up ... before Wednesday。" },
        { type: "judge", stem: "The winner can get a chance to study abroad.", options: ["正确", "错误"], answer: "正确", explain: "The winner will get a prize and a chance to study abroad." }
      ]
    }
  ]
};
