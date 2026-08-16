// 阅读理解训练（零基础友好短文）—— 对应考纲"阅读理解"部分
// type: single 单选（4 选项，answer 为 A-D 字母）；notes 为难词中文注释（可选）
window.READING_DATA = {
  passages: [
    {
      id: "r1", title: "我的大学第一年", topic: "校园生活",
      text: "My first year at college was both exciting and challenging. When I arrived, everything was new to me. I did not know anyone, and I felt a little nervous. However, I soon made some good friends. We often studied together in the library and helped each other with homework.\n\nI also joined the English club. Every Friday afternoon, we had English Corner, where we talked about different topics in English. At first, I was afraid to speak, but my teacher encouraged me to be brave. After a few weeks, I could express my ideas more freely.\n\nCollege life taught me an important lesson: time management. With many courses, activities and part-time jobs, I had to plan my day carefully. I made a timetable and tried to follow it. Now I can finish my work on time and still have time for fun. I believe these habits will help me in the future.",
      notes: [
        { word: "challenging", cn: "有挑战性的" },
        { word: "nervous", cn: "紧张的" },
        { word: "encourage", cn: "鼓励" },
        { word: "express", cn: "表达" },
        { word: "management", cn: "管理" },
        { word: "timetable", cn: "时间表" },
        { word: "habit", cn: "习惯" }
      ],
      questions: [
        { type: "single", stem: "What is the passage mainly about?", options: ["The writer's first year at college", "How to make friends quickly", "The history of the English club", "How to find a part-time job"], answer: "A", explain: "全文围绕作者大学第一年的经历展开：交朋友、参加英语角、学会时间管理，主旨是大学第一年的生活与收获。" },
        { type: "single", stem: "When did the writer have English Corner?", options: ["Every Monday morning", "Every Friday afternoon", "Every Saturday evening", "Every Sunday morning"], answer: "B", explain: "第二段明确说 Every Friday afternoon, we had English Corner（每周五下午有英语角）。" },
        { type: "single", stem: "What can we infer from the passage?", options: ["The writer never felt nervous at college", "The writer was afraid of speaking English at first", "The writer disliked the library", "The writer gave up the English club"], answer: "B", explain: "由 At first, I was afraid to speak（起初我不敢说）可推断作者一开始害怕说英语，后来在老师鼓励下才变得勇敢。" },
        { type: "single", stem: "The word 'express' in the passage most probably means ___.", options: ["hide", "forget", "say or show", "repeat"], answer: "C", explain: "express 意为“表达”，即用语言说出或展示自己的想法，与 say or show 同义。" },
        { type: "single", stem: "The writer wrote this passage mainly to ___.", options: ["share his college experience and what he learned", "teach us how to cook", "describe a famous library", "advertise the English club"], answer: "A", explain: "作者以第一人称分享大一经历及收获（友谊、英语进步、时间管理），写作目的是分享经历与感悟。" }
      ]
    },
    {
      id: "r2", title: "怎样记住英语单词", topic: "学习方法",
      text: "Many students find it hard to remember English words. They read a word once or twice and soon forget it. Here are some useful ways to help you remember words better.\n\nFirst, learn words in groups. For example, learn food words like apple, bread and milk together. When you think of one, you will remember the others. Second, use new words in sentences. A word is easy to forget if you only see it in a book, but it is not easy to forget if you use it in your daily life. Third, review words before you go to bed. Your brain keeps working while you sleep, so words you review at night may stay in your memory longer.\n\nThe most important thing is to be patient. Learning words takes time, and there is no shortcut. If you study a little every day, you will see progress. Remember: practice makes perfect.",
      notes: [
        { word: "review", cn: "复习" },
        { word: "brain", cn: "大脑" },
        { word: "memory", cn: "记忆" },
        { word: "patient", cn: "耐心的" },
        { word: "shortcut", cn: "捷径" },
        { word: "progress", cn: "进步" }
      ],
      questions: [
        { type: "single", stem: "What is the passage mainly about?", options: ["How to remember English words", "Why English is difficult", "How to make friends", "The history of the English language"], answer: "A", explain: "全文介绍记住英语单词的方法（分组学、造句用、睡前复习），主旨是“怎样记住英语单词”。" },
        { type: "single", stem: "According to the passage, what should you do before going to bed?", options: ["Watch TV", "Review words", "Play games", "Eat something"], answer: "B", explain: "第三点建议是 review words before you go to bed（睡前复习单词）。" },
        { type: "single", stem: "The word 'shortcut' in the passage most probably means ___.", options: ["a quick and easy way", "a long way", "a heavy bag", "a small book"], answer: "A", explain: "shortcut 意为“捷径”，即又快又省力的方法。前文说记单词需要时间，没有捷径可走。" },
        { type: "single", stem: "What can we learn from the sentence 'practice makes perfect'?", options: ["We should practice a lot to become good at something", "We should sleep more", "Practice is a kind of game", "Perfect students never practice"], answer: "A", explain: "practice makes perfect 意为“熟能生巧”，可推断要多练习才能学好。" },
        { type: "single", stem: "The writer wrote this passage to ___.", options: ["give students advice on remembering words", "show that English is too hard to learn", "ask students to buy books", "talk about his holiday"], answer: "A", explain: "文中给出多条记单词的具体建议，写作目的是给学生提供记忆单词的方法。" }
      ]
    },
    {
      id: "r3", title: "健康好习惯", topic: "健康生活",
      text: "Good health is important for everyone, and we can do many simple things to keep healthy.\n\nFirst, eat well. A healthy diet should include vegetables, fruit, eggs and milk. Try to eat less fast food and drink less cola, because too much sugar and oil is bad for our body. Second, exercise regularly. You do not need to run a marathon. Walking for thirty minutes a day, riding a bike or playing ball games are all good choices. Third, sleep enough. Many students stay up late at night to study or play with their phones. This is a bad habit. Our body needs about seven or eight hours of sleep every day to rest and grow.\n\nBesides, keep a happy mind. When you feel stressed, talk to your friends or listen to music. A good mood can make you stronger and healthier. In a word, if we follow these habits, we can enjoy a healthy and happy life.",
      notes: [
        { word: "diet", cn: "饮食" },
        { word: "include", cn: "包括" },
        { word: "sugar", cn: "糖" },
        { word: "regularly", cn: "有规律地" },
        { word: "marathon", cn: "马拉松" },
        { word: "stressed", cn: "焦虑的，紧张的" },
        { word: "mood", cn: "心情" }
      ],
      questions: [
        { type: "single", stem: "What is the passage mainly about?", options: ["How to keep healthy", "How to play ball games", "How to study well", "How to make friends"], answer: "A", explain: "短文从吃、运动、睡眠、心情四个方面介绍保持健康的方法，主旨为“怎样保持健康”。" },
        { type: "single", stem: "How many hours of sleep does our body need every day?", options: ["About three or four hours", "About seven or eight hours", "About ten or eleven hours", "About one hour"], answer: "B", explain: "文中说 Our body needs about seven or eight hours of sleep every day（每天大约需要七八小时睡眠）。" },
        { type: "single", stem: "The word 'stressed' in the passage most probably means ___.", options: ["happy", "worried and nervous", "excited", "sleepy"], answer: "B", explain: "stressed 意为“有压力的、焦虑紧张的”，与 worried and nervous 意思相近。" },
        { type: "single", stem: "What can we infer from the passage about students who stay up late?", options: ["They will get more knowledge", "Their health may be hurt", "They will become stronger", "They will sleep better"], answer: "B", explain: "文中把熬夜称为 bad habit（坏习惯），且指出身体需要足够睡眠才能休息和成长，可推断熬夜会损害健康。" },
        { type: "single", stem: "The writer wrote this passage to ___.", options: ["advise people to keep healthy habits", "teach people how to cook", "introduce a famous doctor", "sell sports shoes"], answer: "A", explain: "短文通篇给出健康生活建议，写作目的是劝告人们养成健康的好习惯。" }
      ]
    },
    {
      id: "r4", title: "互联网改变生活", topic: "科技与社会",
      text: "The Internet has changed our life in many ways. Today, almost every family can use the Internet, and most people have a smartphone in their hand.\n\nWith the Internet, we can do many things easily. We can search for information in a few seconds, instead of looking through heavy books in the library. We can shop online without going out, and the goods will be sent to our door. We can also keep in touch with friends far away by video calls, just like talking face to face.\n\nHowever, the Internet also brings problems. Some students spend too much time playing online games and forget to study. Some people share their personal information online, which may be unsafe. Too much time in front of screens is also bad for our eyes.\n\nSo we should use the Internet in a smart way. It is a good servant, but not a good master. Use it to learn and help others, and remember to give our eyes a rest now and then.",
      notes: [
        { word: "smartphone", cn: "智能手机" },
        { word: "search", cn: "搜索" },
        { word: "information", cn: "信息" },
        { word: "online", cn: "在线的" },
        { word: "goods", cn: "商品" },
        { word: "personal", cn: "个人的" },
        { word: "servant", cn: "仆人，工具" },
        { word: "screen", cn: "屏幕" }
      ],
      questions: [
        { type: "single", stem: "What is the passage mainly about?", options: ["The advantages and disadvantages of the Internet", "How to play online games", "The history of computers", "How to send letters"], answer: "A", explain: "短文先讲互联网带来的便利（利），再讲它带来的问题（弊），主旨是互联网的利与弊。" },
        { type: "single", stem: "According to the passage, what can we do with the Internet?", options: ["Shop online without going out", "Cook meals", "Drive a car", "Plant trees"], answer: "A", explain: "文中说 We can shop online without going out（我们可以不出门在网上购物）。" },
        { type: "single", stem: "The word 'servant' in the passage most probably means ___.", options: ["a person or thing that serves people", "a kind of computer game", "a famous teacher", "a small animal"], answer: "A", explain: "servant 意为“仆人、工具”，这里指互联网应为人服务（good servant），而不是反过来支配人（good master）。" },
        { type: "single", stem: "What does the writer think of the Internet?", options: ["It is always bad", "It is useful but we should use it wisely", "It is completely useless", "It is only for shopping"], answer: "B", explain: "作者既提到互联网的好处也提到问题，并建议 smart way（明智地）使用，可推断他认为互联网有用但应合理使用。" },
        { type: "single", stem: "The writer wrote this passage mainly to ___.", options: ["tell us how to use the Internet wisely", "ask us to stop using the Internet", "teach us how to make video calls", "introduce online shopping"], answer: "A", explain: "结尾建议用 smart way 使用互联网、用它学习和帮助他人，写作目的是告诉人们要明智地使用互联网。" }
      ]
    }
  ]
};
