// 听力训练材料（扩展3：12 段对话/独白，浏览器 TTS 朗读英文；题目测理解）
window.LISTENING_EXTRA3_DATA = {
  materials: [
    {
      id: "lx1", title: "购物对话", type: "对话", topic: "At a Clothes Shop",
      script: 'Clerk: Good afternoon! Can I help you?\nCustomer: Yes, I\'d like to buy a T-shirt for my brother. What colors do you have?\nClerk: We have white, blue and black. The white one is on sale this week.\nCustomer: How much is the blue one?\nClerk: It\'s eighty yuan, and the white one is only fifty yuan.\nCustomer: Great. The white one is cheap. I\'ll take it, please.\nClerk: OK. Here you are. Anything else?\nCustomer: No, that\'s all. Thank you.',
      questions: [
        { type: "single", stem: 'What does the customer want to buy?', options: ["A. A shirt", "B. A T-shirt", "C. A jacket", "D. A dress"], answer: "B", explain: '顾客说 I\'d like to buy a T-shirt for my brother，要买 T 恤。' },
        { type: "single", stem: 'Which color is on sale this week?', options: ["A. Blue", "B. Black", "C. White", "D. Red"], answer: "C", explain: '售货员说 The white one is on sale this week，白色本周促销。' },
        { type: "single", stem: 'How much is the white T-shirt?', options: ["A. 80 yuan", "B. 50 yuan", "C. 60 yuan", "D. 100 yuan"], answer: "B", explain: 'the white one is only fifty yuan，白色只要 50 元。' },
        { type: "judge", stem: 'The blue T-shirt costs eighty yuan.', options: ["正确", "错误"], answer: "正确", explain: 'It\'s eighty yuan（指蓝色那件），蓝色 80 元。' }
      ]
    },
    {
      id: "lx2", title: "看病对话", type: "对话", topic: "Seeing a Doctor",
      script: 'Doctor: Good morning. What\'s wrong with you?\nPatient: I have a headache and a sore throat, and I feel very tired.\nDoctor: How long have you felt like this?\nPatient: Since yesterday evening.\nDoctor: Let me take your temperature. It\'s a little high. You have a cold, but don\'t worry.\nPatient: Do I need to stay in bed?\nDoctor: Yes, you should rest at home and drink more hot water. Take this medicine three times a day.\nPatient: Thank you, doctor. I will.',
      questions: [
        { type: "single", stem: 'What is wrong with the patient?', options: ["A. A stomachache", "B. A toothache", "C. A headache and a sore throat", "D. A backache"], answer: "C", explain: '病人说 I have a headache and a sore throat，头痛加喉咙痛。' },
        { type: "single", stem: 'How often should the patient take the medicine?', options: ["A. Once a day", "B. Twice a day", "C. Three times a day", "D. Four times a day"], answer: "C", explain: '医生叮嘱 Take this medicine three times a day，一天三次。' },
        { type: "judge", stem: 'The patient should take the medicine twice a day.', options: ["正确", "错误"], answer: "错误", explain: '医生说的是 three times a day（一天三次），不是两次。' },
        { type: "judge", stem: 'The doctor asks the patient to drink more hot water.', options: ["正确", "错误"], answer: "正确", explain: '医生嘱咐 you should rest at home and drink more hot water。' }
      ]
    },
    {
      id: "lx3", title: "打电话对话", type: "对话", topic: "Making a Phone Call",
      script: 'Mary: Hello, this is Mary speaking. May I speak to Tom?\nTom\'s mother: Sorry, Tom is not at home right now. He has gone to the library.\nMary: I see. Could you tell him that our English class tomorrow has been moved to Room 302?\nTom\'s mother: Sure. What time does the class start?\nMary: It starts at nine o\'clock in the morning instead of ten.\nTom\'s mother: OK, I\'ll tell him as soon as he comes back.\nMary: Thank you very much. Goodbye!',
      questions: [
        { type: "single", stem: 'Who does Mary want to speak to?', options: ["A. Tom's mother", "B. Tom", "C. Her teacher", "D. Her friend Lily"], answer: "B", explain: '玛丽说 May I speak to Tom，她想找 Tom。' },
        { type: "single", stem: 'Where has Tom gone?', options: ["A. To the library", "B. To the classroom", "C. To the hospital", "D. To the park"], answer: "A", explain: 'Tom 的妈妈说 He has gone to the library。' },
        { type: "single", stem: 'When does the English class start tomorrow?', options: ["A. At eight", "B. At nine", "C. At ten", "D. At three"], answer: "B", explain: 'It starts at nine o\'clock in the morning instead of ten，九点开始。' },
        { type: "judge", stem: 'The English class will be held in Room 302.', options: ["正确", "错误"], answer: "正确", explain: '玛丽说 our English class tomorrow has been moved to Room 302。' }
      ]
    },
    {
      id: "lx4", title: "订票对话", type: "对话", topic: "Booking Train Tickets",
      script: 'Ticket Clerk: Good morning, Chongqing Railway Station. Can I help you?\nMan: Yes, I\'d like to book two train tickets to Chengdu for this Saturday.\nTicket Clerk: Let me check. We have a train at eight in the morning and another at three in the afternoon. Which one do you prefer?\nMan: The morning one, please.\nTicket Clerk: That\'s 110 yuan for each ticket. How would you like to pay?\nMan: By card, please.\nTicket Clerk: OK. Here are your tickets. Have a nice trip!\nMan: Thank you very much.',
      questions: [
        { type: "single", stem: 'Where does the man want to go?', options: ["A. To Chongqing", "B. To Chengdu", "C. To Beijing", "D. To Shanghai"], answer: "B", explain: '顾客说 book two train tickets to Chengdu，去成都。' },
        { type: "single", stem: 'Which train does the man choose?', options: ["A. The one at 8 a.m.", "B. The one at 3 p.m.", "C. The one at 6 p.m.", "D. The one at 10 a.m."], answer: "A", explain: 'The morning one, please，他选了早上八点的车。' },
        { type: "single", stem: 'How much is one ticket?', options: ["A. 100 yuan", "B. 110 yuan", "C. 120 yuan", "D. 220 yuan"], answer: "B", explain: 'That\'s 110 yuan for each ticket，每张 110 元。' },
        { type: "judge", stem: 'The man books two tickets.', options: ["正确", "错误"], answer: "正确", explain: 'book two train tickets to Chengdu，订了两张票。' }
      ]
    },
    {
      id: "lx5", title: "租房对话", type: "对话", topic: "Renting an Apartment",
      script: 'Landlord: Hello, you must be the student who called about the apartment.\nStudent: Yes. Could you tell me more about it?\nLandlord: It\'s a one-bedroom apartment on the third floor, and it is not far from your university.\nStudent: Sounds good. How much is the rent?\nLandlord: Twelve hundred yuan a month, including water and electricity.\nStudent: Is there a bus stop nearby?\nLandlord: Yes, the No. 5 bus stops right at the door.\nStudent: Great. Can I come to see it this afternoon?\nLandlord: Of course. See you then.',
      questions: [
        { type: "single", stem: 'What kind of apartment is it?', options: ["A. A two-bedroom apartment", "B. A one-bedroom apartment", "C. A house with a garden", "D. A room in a hotel"], answer: "B", explain: '房东说 It\'s a one-bedroom apartment，一居室。' },
        { type: "single", stem: 'How much is the rent per month?', options: ["A. 800 yuan", "B. 1000 yuan", "C. 1200 yuan", "D. 1500 yuan"], answer: "C", explain: 'Twelve hundred yuan a month，每月 1200 元。' },
        { type: "single", stem: 'What is near the apartment?', options: ["A. A hospital", "B. A bus stop", "C. A park", "D. A supermarket"], answer: "B", explain: 'the No. 5 bus stops right at the door，门口就有公交站。' },
        { type: "judge", stem: 'The rent includes water and electricity.', options: ["正确", "错误"], answer: "正确", explain: 'including water and electricity，租金含水电费。' }
      ]
    },
    {
      id: "lx6", title: "图书馆对话", type: "对话", topic: "At the Library",
      script: 'Librarian: Good afternoon. Can I help you?\nStudent: Yes, I\'m looking for a book about computer science.\nLibrarian: Books about computer science are on the second floor, Section B.\nStudent: Thank you. By the way, how long can I keep a book?\nLibrarian: Two weeks. If you need more time, you can renew it online.\nStudent: I see. And how much is the fine for a late book?\nLibrarian: Half a yuan a day.\nStudent: OK, that\'s not too much. Thank you very much.\nLibrarian: You\'re welcome.',
      questions: [
        { type: "single", stem: 'What kind of book is the student looking for?', options: ["A. A book about English", "B. A book about computer science", "C. A book about history", "D. A book about art"], answer: "B", explain: '学生说 I\'m looking for a book about computer science。' },
        { type: "single", stem: 'Where are the computer science books?', options: ["A. On the first floor", "B. On the second floor, Section B", "C. In the reading room", "D. On the third floor"], answer: "B", explain: 'on the second floor, Section B，在二楼 B 区。' },
        { type: "judge", stem: 'The fine for a late book is one yuan a day.', options: ["正确", "错误"], answer: "错误", explain: '管理员说 Half a yuan a day，每天五毛，不是一元。' },
        { type: "judge", stem: 'The student can renew a book online.', options: ["正确", "错误"], answer: "正确", explain: 'you can renew it online，可以在网上续借。' }
      ]
    },
    {
      id: "lx7", title: "校园生活独白", type: "独白", topic: "My Campus Life",
      script: 'My name is Li Hua, and I\'m a sophomore at Chongqing University. My campus life is busy but colorful. Every morning I have classes from eight to twelve. After lunch, I often play basketball with my classmates on the playground. I\'m a member of the English club, and we meet every Friday afternoon to practice speaking. On weekends, I sometimes work part-time in a bookstore. I really enjoy my life here, and I have made many good friends.',
      questions: [
        { type: "single", stem: 'What does the speaker often do after lunch?', options: ["A. Sleep in the dorm", "B. Play basketball", "C. Go to the library", "D. Watch TV"], answer: "B", explain: 'After lunch, I often play basketball with my classmates。' },
        { type: "single", stem: 'When does the English club meet?', options: ["A. Every Monday morning", "B. Every Friday afternoon", "C. Every Saturday evening", "D. Every Sunday"], answer: "B", explain: 'we meet every Friday afternoon to practice speaking。' },
        { type: "single", stem: 'What does the speaker do on weekends sometimes?', options: ["A. Work part-time in a bookstore", "B. Visit his parents", "C. Go traveling", "D. Stay at home"], answer: "A", explain: 'On weekends, I sometimes work part-time in a bookstore。' },
        { type: "judge", stem: 'The speaker is a freshman at the university.', options: ["正确", "错误"], answer: "错误", explain: 'I\'m a sophomore，是大二学生，不是大一新生。' }
      ]
    },
    {
      id: "lx8", title: "学习计划独白", type: "独白", topic: "My Study Plan",
      script: 'Good morning, everyone. I\'d like to share my study plan for the final exam. First, I will spend two hours every morning reviewing English, especially the new words. Second, in the afternoon I will do math exercises for one hour. Third, before I go to bed, I will read my notes for thirty minutes. On Sundays, I will take a rest and play sports to keep healthy. I believe if I follow this plan, I will pass the exam easily. Let\'s work hard together!',
      questions: [
        { type: "single", stem: 'How long does the speaker review English every morning?', options: ["A. Thirty minutes", "B. One hour", "C. Two hours", "D. Three hours"], answer: "C", explain: 'I will spend two hours every morning reviewing English，每天早晨两小时。' },
        { type: "single", stem: 'What does the speaker do in the afternoon?', options: ["A. Read English", "B. Do math exercises", "C. Play sports", "D. Read notes"], answer: "B", explain: 'in the afternoon I will do math exercises for one hour。' },
        { type: "single", stem: 'What does the speaker do on Sundays?', options: ["A. Study all day", "B. Take a rest and play sports", "C. Go to the movies", "D. Do homework"], answer: "B", explain: 'On Sundays, I will take a rest and play sports to keep healthy。' },
        { type: "judge", stem: 'The speaker reads notes for thirty minutes before bed.', options: ["正确", "错误"], answer: "正确", explain: 'before I go to bed, I will read my notes for thirty minutes。' }
      ]
    },
    {
      id: "lx9", title: "活动通知独白", type: "独白", topic: "A School Notice",
      script: 'Attention, please! Here is an important notice. Our school will hold a sports meeting on May 15th. The opening ceremony will start at eight thirty in the morning on the playground. All students must wear school uniforms and arrive ten minutes early. There will be many events, such as the 100-meter race, the long jump and the relay race. Anyone who wants to join should tell their class teacher before May 5th. That\'s all. Thank you.',
      questions: [
        { type: "single", stem: 'When will the sports meeting be held?', options: ["A. On May 5th", "B. On May 15th", "C. On March 15th", "D. On June 5th"], answer: "B", explain: 'Our school will hold a sports meeting on May 15th。' },
        { type: "single", stem: 'Where will the opening ceremony be held?', options: ["A. In the school hall", "B. In the gym", "C. On the playground", "D. In the classroom"], answer: "C", explain: 'The opening ceremony will start ... on the playground，在操场上。' },
        { type: "single", stem: 'What must all students wear?', options: ["A. Sports shoes", "B. School uniforms", "C. Hats", "D. White T-shirts"], answer: "B", explain: 'All students must wear school uniforms，必须穿校服。' },
        { type: "judge", stem: 'Students should arrive ten minutes early.', options: ["正确", "错误"], answer: "正确", explain: 'arrive ten minutes early，提前十分钟到场。' }
      ]
    },
    {
      id: "lx10", title: "自我介绍独白", type: "独白", topic: "Self-introduction",
      script: 'Hello, everyone! Let me introduce myself. My name is Wang Fang, and I come from a small city in Sichuan. I am eighteen years old. My favorite subject is English, because I want to be an English teacher in the future. In my free time, I like listening to music and reading novels. I am a shy person at first, but I become friendly once I know you. I hope we can be good friends and help each other in the coming years. Thank you!',
      questions: [
        { type: "single", stem: 'Where does Wang Fang come from?', options: ["A. A big city in Chongqing", "B. A small city in Sichuan", "C. A village in Hunan", "D. A town in Guizhou"], answer: "B", explain: 'I come from a small city in Sichuan，来自四川的一个小城市。' },
        { type: "single", stem: 'What does the speaker want to be in the future?', options: ["A. A doctor", "B. A singer", "C. An English teacher", "D. A writer"], answer: "C", explain: 'I want to be an English teacher in the future，将来想当英语老师。' },
        { type: "single", stem: 'What does the speaker like doing in her free time?', options: ["A. Playing basketball", "B. Listening to music and reading novels", "C. Watching movies", "D. Cooking"], answer: "B", explain: 'In my free time, I like listening to music and reading novels。' },
        { type: "judge", stem: 'The speaker\'s favorite subject is English.', options: ["正确", "错误"], answer: "正确", explain: 'My favorite subject is English。' }
      ]
    },
    {
      id: "lx11", title: "天气预报独白", type: "独白", topic: "Weather Forecast",
      script: 'Good evening, and here is the weather report for tomorrow. In the morning, it will be sunny and warm, with a temperature of about twenty degrees. But in the afternoon, there will be a strong wind and it may rain heavily in the evening. So if you go out tomorrow, please remember to take an umbrella and put on more clothes. The temperature will drop to about ten degrees at night. That\'s all for today\'s weather report. Have a nice day!',
      questions: [
        { type: "single", stem: 'What will the weather be like tomorrow morning?', options: ["A. Rainy and cold", "B. Sunny and warm", "C. Windy and cloudy", "D. Snowy"], answer: "B", explain: 'In the morning, it will be sunny and warm。' },
        { type: "single", stem: 'What may happen in the evening?', options: ["A. It may snow", "B. It may rain heavily", "C. It may be foggy", "D. It may be sunny"], answer: "B", explain: 'it may rain heavily in the evening，晚上可能下大雨。' },
        { type: "single", stem: 'What will the temperature be at night?', options: ["A. About twenty degrees", "B. About thirty degrees", "C. About ten degrees", "D. About five degrees"], answer: "C", explain: 'The temperature will drop to about ten degrees at night。' },
        { type: "judge", stem: 'The temperature will be about twenty degrees in the morning.', options: ["正确", "错误"], answer: "正确", explain: 'with a temperature of about twenty degrees，早晨气温约 20 度。' }
      ]
    },
    {
      id: "lx12", title: "旅行计划独白", type: "独白", topic: "My Travel Plan",
      script: 'I\'m planning a trip to Beijing next month. I will go there by high-speed train, and the journey takes about two hours. I will stay for three days. On the first day, I will visit the Great Wall. On the second day, I plan to go to the Palace Museum. On the last day, I will walk around the old streets and buy some gifts for my family. I have already booked the hotel near the train station. I can\'t wait to start my trip!',
      questions: [
        { type: "single", stem: 'How will the speaker go to Beijing?', options: ["A. By plane", "B. By high-speed train", "C. By bus", "D. By car"], answer: "B", explain: 'I will go there by high-speed train，坐高铁去。' },
        { type: "single", stem: 'How long will the speaker stay in Beijing?', options: ["A. Two days", "B. Three days", "C. Four days", "D. One week"], answer: "B", explain: 'I will stay for three days，待三天。' },
        { type: "single", stem: 'What will the speaker do on the second day?', options: ["A. Visit the Great Wall", "B. Go to the Palace Museum", "C. Buy gifts", "D. Walk around the old streets"], answer: "B", explain: 'On the second day, I plan to go to the Palace Museum。' },
        { type: "judge", stem: 'The speaker will visit the Great Wall on the first day.', options: ["正确", "错误"], answer: "正确", explain: 'On the first day, I will visit the Great Wall。' }
      ]
    }
  ]
};