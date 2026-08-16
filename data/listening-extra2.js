// 听力补充材料 2（浏览器 TTS 朗读英文；题目测理解）—— 对应考纲"听力"部分
window.LISTENING_EXTRA2_DATA = {
  materials: [
    {
      id: "le21", title: "图书馆借书对话", type: "对话", topic: "At the Library",
      script: "Student: Excuse me, I'd like to borrow some English books. Can I borrow three at a time?\nLibrarian: Yes, you can borrow up to three books and keep them for two weeks.\nStudent: What if I can't finish them in time?\nLibrarian: You can renew them online or come to the library to do it.\nStudent: Do I need to pay if the books are late?\nLibrarian: Yes, you pay fifty cents a day for each late book.\nStudent: I see. Thank you for your help.\nLibrarian: You're welcome. Enjoy your reading!",
      questions: [
        { type: "single", stem: "How many books can the student borrow at a time?", options: ["One book", "Two books", "Three books", "Five books"], answer: "C", explain: "管理员说 you can borrow up to three books，最多可借三本。" },
        { type: "single", stem: "How long can the student keep the books?", options: ["One week", "Two weeks", "A month", "One day"], answer: "B", explain: "keep them for two weeks，可保留两周。" },
        { type: "single", stem: "What can the student do if he can't finish the books in time?", options: ["Throw them away", "Renew them", "Sell them", "Keep them forever"], answer: "B", explain: "管理员说 You can renew them online or come to the library to do it，可以续借。" },
        { type: "judge", stem: "The student must pay if the books are late.", options: ["正确", "错误"], answer: "正确", explain: "管理员说 you pay fifty cents a day for each late book，逾期每天要付费。" }
      ]
    },
    {
      id: "le22", title: "打电话预约医生", type: "对话", topic: "Making an Appointment",
      script: "Receptionist: Good morning, City Dental Clinic. Can I help you?\nPatient: Good morning. I have a toothache, and I'd like to see a doctor.\nReceptionist: When are you free?\nPatient: How about Wednesday afternoon?\nReceptionist: Sorry, Wednesday is full. What about Thursday morning at ten?\nPatient: Thursday morning is fine.\nReceptionist: OK. Your appointment is at ten on Thursday. Please bring your ID card.\nPatient: Thank you. Goodbye!",
      questions: [
        { type: "single", stem: "What is wrong with the patient?", options: ["He has a toothache", "He has a headache", "He has a cold", "He is fine"], answer: "A", explain: "病人说 I have a toothache（我牙疼）。" },
        { type: "single", stem: "When is the patient's appointment?", options: ["Wednesday afternoon", "Thursday morning at ten", "Friday morning", "Saturday evening"], answer: "B", explain: "周三已约满，双方定在周四上午十点：Your appointment is at ten on Thursday。" },
        { type: "single", stem: "What should the patient bring?", options: ["His ID card", "A book", "Some fruit", "A photo"], answer: "A", explain: "前台提醒 Please bring your ID card（请带上身份证）。" },
        { type: "judge", stem: "Wednesday is full, so the patient takes the appointment on Thursday.", options: ["正确", "错误"], answer: "正确", explain: "前台说 Wednesday is full，随后改约到周四上午。" }
      ]
    },
    {
      id: "le23", title: "天气预报独白", type: "独白", topic: "Weather and Travel",
      script: "Good morning! Here is the weather report for today.\nIn the morning, it is cloudy and cool, about fifteen degrees.\nIn the afternoon, there will be heavy rain and strong wind, so please take an umbrella with you.\nThe rain will stop at night, and tomorrow will be sunny and warm.\nIf you plan to travel by bus or train, please leave earlier, because the rain may make the roads slow.\nHave a nice day!",
      questions: [
        { type: "single", stem: "What is the weather like in the morning?", options: ["Sunny and hot", "Cloudy and cool", "Snowy", "Rainy and windy"], answer: "B", explain: "播报说 In the morning, it is cloudy and cool，早晨多云而凉爽。" },
        { type: "single", stem: "What should people take with them?", options: ["An umbrella", "A camera", "A map", "A book"], answer: "A", explain: "下午有暴雨和大风，请 take an umbrella with you（带上雨伞）。" },
        { type: "single", stem: "What will the weather be like tomorrow?", options: ["Rainy", "Snowy", "Sunny and warm", "Cold"], answer: "C", explain: "tomorrow will be sunny and warm，明天晴朗温暖。" },
        { type: "judge", stem: "The speaker asks people to leave earlier if they travel by bus or train.", options: ["正确", "错误"], answer: "正确", explain: "如果乘公交或火车出行请提前出发，因为下雨可能使道路变慢。" }
      ]
    }
  ]
};
