// 阅读理解补充训练（零基础友好短文）—— 对应考纲"阅读理解"部分
// type: single 单选（4 选项，answer 为 A-D 字母）；notes 为难词中文注释（可选）
window.READING_EXTRA_DATA = {
  passages: [
    {
      id: "re1", title: "科技改变学习", topic: "科技与学习",
      text: "Technology is changing the way we learn. In the past, students could only study in classrooms with books and blackboards. Today, with the Internet, smartphones and computers, we can learn anywhere at any time.\n\nFor example, we can watch English videos online or take free courses from famous universities. Some apps help us remember new words, and AI can answer our questions day and night. My classmate Li Ming used to be weak in math, but after using a learning app for three months, his scores went up a lot.\n\nIn my school, teachers often use computers in class, and students hand in homework online. Last year, our class joined an online reading club, and every week we shared what we read and discussed together.\n\nOf course, technology also has problems. If we play with phones too much, we may waste time and harm our eyes. So we should use technology wisely and keep good study habits. In a word, technology gives us more chances to learn, but we must be the master of it.",
      notes: [
        { word: "technology", cn: "科技、技术" },
        { word: "Internet", cn: "互联网" },
        { word: "smartphone", cn: "智能手机" },
        { word: "course", cn: "课程" },
        { word: "app", cn: "应用程序（应用软件）" },
        { word: "score", cn: "分数、成绩" },
        { word: "wisely", cn: "明智地" },
        { word: "master", cn: "主人、掌控者" }
      ],
      questions: [
        { type: "single", stem: "What is the passage mainly about?", options: ["How technology is changing the way we learn", "How to play with phones", "The history of computers", "How to choose a university"], answer: "A", explain: "全文围绕科技如何改变学习方式展开：在线视频、学习软件、网上交作业等，主旨是“科技改变学习”。" },
        { type: "single", stem: "According to the passage, what can we do with technology?", options: ["Watch English videos online", "Eat healthy food", "Run faster", "Speak only Chinese"], answer: "A", explain: "第三句举例 we can watch English videos online（我们可以在线看英语视频），细节题直接对应。" },
        { type: "single", stem: "What happened to Li Ming after using a learning app?", options: ["His math scores went up", "He gave up math", "He left school", "He never used a phone"], answer: "A", explain: "文中说 Li Ming used to be weak in math, but after using a learning app for three months, his scores went up a lot（成绩提高了很多），可推断学习软件帮助了他。" },
        { type: "single", stem: "The word 'wisely' in the passage most probably means ___.", options: ["in a clever and careful way", "in a lazy way", "very fast", "in a loud voice"], answer: "A", explain: "wisely 意为“明智地”，即聪明又谨慎地使用；结合上下文“应明智使用科技、避免浪费时间”可知。" },
        { type: "single", stem: "The writer wrote this passage mainly to ___.", options: ["tell us to use technology in a good way", "ask us to buy new phones", "teach us computer science", "show that learning is boring"], answer: "A", explain: "末段强调要 wisely 使用科技、做科技的主人，写作意图是提醒大家正确使用科技来学习。" }
      ]
    },
    {
      id: "re2", title: "保护我们的环境", topic: "环境保护",
      text: "Our earth is our home, and protecting the environment is everyone's duty. But today the earth faces serious problems: the air is dirty in many cities, rivers are polluted, and forests are disappearing.\n\nWhy should we care? Because a clean environment keeps us healthy. Dirty air can make us cough and sick, and polluted water is bad for our body. Also, many animals lose their homes when forests are cut down.\n\nWhat can we do? Small actions can make a big difference. We can turn off the lights when we leave a room, take a bus instead of a car, and put rubbish in the right bins. We can also plant trees and save water. If everyone does a little, the earth will be better.\n\nEvery year, our school organizes a tree-planting activity in spring, and I always take part in it. Remember: we do not inherit the earth from our parents; we borrow it from our children. So let's start today and protect our home together.",
      notes: [
        { word: "environment", cn: "环境" },
        { word: "duty", cn: "责任、义务" },
        { word: "polluted", cn: "被污染的" },
        { word: "disappear", cn: "消失" },
        { word: "cough", cn: "咳嗽" },
        { word: "rubbish", cn: "垃圾" },
        { word: "bin", cn: "垃圾桶" },
        { word: "inherit", cn: "继承" }
      ],
      questions: [
        { type: "single", stem: "What is the passage mainly about?", options: ["How to protect the environment", "How to plant trees", "The history of the earth", "How to keep animals"], answer: "A", explain: "全文讲述环境面临的问题及我们能做的环保小事，主旨是“如何保护环境”。" },
        { type: "single", stem: "What problems does the earth face according to the passage?", options: ["Dirty air, polluted rivers and disappearing forests", "Too many parks", "Too much clean water", "No problems at all"], answer: "A", explain: "第一段列举 the air is dirty, rivers are polluted, forests are disappearing 三大问题，细节题直接对应。" },
        { type: "single", stem: "What can we infer from the passage?", options: ["Small actions can help protect the environment", "Only adults should protect the earth", "Cars are the best way to travel", "We can throw rubbish anywhere"], answer: "A", explain: "文中说 Small actions can make a big difference（小行动也能带来大改变），并列举关灯、乘公交等小事，可推断小事也能保护环境。" },
        { type: "single", stem: "The word 'inherit' in the passage most probably means ___.", options: ["receive from people who came before us", "give something to others", "throw away", "borrow money"], answer: "A", explain: "inherit 意为“继承”，即从前人那里获得；作者借此表达地球不是我们祖辈留给我们的私有财产，而是向子孙“借”来的。" },
        { type: "single", stem: "The writer wrote this passage to ___.", options: ["ask people to protect the environment", "teach people to drive cars", "describe a beautiful park", "sell planting tools"], answer: "A", explain: "结尾号召 let's start today and protect our home together（让我们今天就开始一起保护家园），写作意图是呼吁大家保护环境。" }
      ]
    }
  ]
};
