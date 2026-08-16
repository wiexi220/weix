// 听力补充材料（浏览器 TTS 朗读英文；题目测理解）—— 对应考纲"听力"部分
window.LISTENING_EXTRA_DATA = {
  materials: [
    {
      id: "le1", title: "买衣服对话", type: "对话", topic: "Shopping",
      script: "Shop assistant: Welcome! Can I help you?\nCustomer: Yes, I'd like to buy a T-shirt. What colors do you have?\nShop assistant: We have white, blue and black. How about this blue one? It is on sale today.\nCustomer: It looks nice. How much is it?\nShop assistant: Sixty yuan, but it is half price today, so you only need to pay thirty.\nCustomer: Great! I'll take it. Here is the money.\nShop assistant: Thank you. Here is your change.",
      questions: [
        { type: "single", stem: "What does the customer want to buy?", options: ["A T-shirt", "A pair of shoes", "A hat", "A bag"], answer: "A", explain: "顾客说 I'd like to buy a T-shirt（我想买一件T恤）。" },
        { type: "single", stem: "What color does the customer choose?", options: ["White", "Black", "Blue", "Red"], answer: "C", explain: "店员推荐蓝色这件，顾客说 It looks nice，随后付款购买。" },
        { type: "single", stem: "How much does the customer pay at last?", options: ["Sixty yuan", "Thirty yuan", "Fifteen yuan", "Ninety yuan"], answer: "B", explain: "原价六十元，今天半价（half price），所以只需付三十元。" },
        { type: "judge", stem: "The blue T-shirt is on sale today.", options: ["正确", "错误"], answer: "正确", explain: "店员说 It is on sale today（今天打折）。" }
      ]
    },
    {
      id: "le2", title: "自我介绍独白", type: "独白", topic: "Self-introduction",
      script: "Good morning, everyone! My name is Li Hua, and I am nineteen years old. I come from Chongqing, a beautiful city in the southwest of China. I am a first-year college student, and my major is computer science. In my free time, I like reading English novels and playing basketball with my classmates. I am an easy-going person, and I am happy to make friends with all of you. I hope we can help each other in the coming years. Thank you!",
      questions: [
        { type: "single", stem: "How old is Li Hua?", options: ["Eighteen", "Nineteen", "Twenty", "Twenty-one"], answer: "B", explain: "介绍中说 I am nineteen years old（我十九岁）。" },
        { type: "single", stem: "What is Li Hua's major?", options: ["English", "Computer science", "Math", "Art"], answer: "B", explain: "My major is computer science（我的专业是计算机科学）。" },
        { type: "single", stem: "What does Li Hua like doing in his free time?", options: ["Watching TV and sleeping", "Reading English novels and playing basketball", "Cooking and singing", "Playing computer games"], answer: "B", explain: "In my free time, I like reading English novels and playing basketball（空闲时喜欢读英文小说、打篮球）。" },
        { type: "judge", stem: "Li Hua comes from Chongqing.", options: ["正确", "错误"], answer: "正确", explain: "I come from Chongqing（我来自重庆）。" }
      ]
    },
    {
      id: "le3", title: "看医生对话", type: "对话", topic: "Seeing a Doctor",
      script: "Doctor: What's wrong with you?\nPatient: I have a bad headache and I feel tired.\nDoctor: How long have you been like this?\nPatient: For about two days. I also have a little fever.\nDoctor: Let me check. Don't worry, it is just a cold. Take this medicine three times a day, and drink more warm water. You should also have a good rest.\nPatient: Thank you, doctor. I will follow your advice.\nDoctor: Come back to see me if you still don't feel well.",
      questions: [
        { type: "single", stem: "What is wrong with the patient?", options: ["She has a bad headache and a little fever", "She has a toothache", "She hurt her leg", "She has a stomachache"], answer: "A", explain: "病人说 I have a bad headache... I also have a little fever（头痛，还有点发烧）。" },
        { type: "single", stem: "How often should the patient take the medicine?", options: ["Once a day", "Twice a day", "Three times a day", "Four times a day"], answer: "C", explain: "医生说 Take this medicine three times a day（每天服药三次）。" },
        { type: "single", stem: "What should the patient do according to the doctor?", options: ["Drink more warm water and have a good rest", "Do more exercise", "Eat more fast food", "Stay up late"], answer: "A", explain: "医生建议 drink more warm water（多喝温水）并 have a good rest（好好休息）。" },
        { type: "judge", stem: "The patient has been ill for about two days.", options: ["正确", "错误"], answer: "正确", explain: "病人回答 For about two days（大约两天了）。" }
      ]
    },
    {
      id: "le4", title: "旅行计划对话", type: "对话", topic: "A Travel Plan",
      script: "Woman: The summer holiday is coming. Do you have any plans?\nMan: Yes, I am going to travel to Beijing with my parents.\nWoman: Sounds great! How will you go there?\nMan: We will take the high-speed train. It only takes about two hours.\nWoman: What will you do in Beijing?\nMan: We plan to visit the Great Wall, the Forbidden City and the Summer Palace. We will stay there for five days and try some local food like Beijing roast duck.\nWoman: Have a nice trip!",
      questions: [
        { type: "single", stem: "Where is the man going to travel?", options: ["Shanghai", "Beijing", "Guangzhou", "Chengdu"], answer: "B", explain: "男士说 I am going to travel to Beijing with my parents（我要和父母去北京旅行）。" },
        { type: "single", stem: "How will the man go to Beijing?", options: ["By plane", "By bus", "By high-speed train", "By ship"], answer: "C", explain: "We will take the high-speed train（我们将乘坐高铁）。" },
        { type: "single", stem: "How long will the man stay in Beijing?", options: ["Two days", "Three days", "Five days", "One week"], answer: "C", explain: "We will stay there for five days（我们会在那里待五天）。" },
        { type: "judge", stem: "The man will visit the Great Wall.", options: ["正确", "错误"], answer: "正确", explain: "男士说 We plan to visit the Great Wall（我们计划游览长城）。" }
      ]
    },
    {
      id: "le5", title: "周末安排对话", type: "对话", topic: "Weekend Plans",
      script: "Tom: Hello, Mary. What are you going to do this weekend?\nMary: I plan to clean my room on Saturday morning and do my homework in the afternoon.\nTom: That sounds busy. What about Sunday?\nMary: On Sunday, I will go to the park with my sister. We will fly kites and have a picnic there.\nTom: That's nice! Would you like to join me for a basketball game on Sunday afternoon?\nMary: I'd love to, but I have to visit my grandparents then.\nTom: Maybe next time. Have a good weekend!\nMary: Thank you, you too!",
      questions: [
        { type: "single", stem: "What will Mary do on Saturday morning?", options: ["Clean her room", "Go shopping", "Visit her grandparents", "Play basketball"], answer: "A", explain: "玛丽说 I plan to clean my room on Saturday morning（周六上午打算打扫房间）。" },
        { type: "single", stem: "What will Mary do on Sunday?", options: ["Stay at home alone", "Go to the park with her sister", "Go to school", "See a doctor"], answer: "B", explain: "On Sunday, I will go to the park with my sister（周日和姐姐去公园）。" },
        { type: "single", stem: "Why can't Mary play basketball on Sunday afternoon?", options: ["Because she is too tired", "Because she has to visit her grandparents", "Because she doesn't like basketball", "Because it will rain"], answer: "B", explain: "玛丽说 I have to visit my grandparents then（那时我得去看望祖父母）。" },
        { type: "judge", stem: "Mary will visit her grandparents on Sunday afternoon.", options: ["正确", "错误"], answer: "正确", explain: "玛丽明确说周日午后要去拜访祖父母。" }
      ]
    }
  ]
};
