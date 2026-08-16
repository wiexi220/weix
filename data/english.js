window.ENGLISH_DATA = {
  subject: "大学英语",
  grammar: [
    {
      id: "g1",
      title: "一般现在时",
      def: "表示经常性、习惯性的动作或客观事实、普遍真理。谓语用动词原形（主语为第三人称单数时加 -s/-es）。",
      rules: [
        "表示经常性、习惯性的动作，常与 always, usually, often, sometimes, every day 等连用。",
        "表示客观事实、普遍真理或格言。",
        "表示按计划、时刻表将要发生的动作（come, go, leave, start, arrive 等），可表将来。",
        "在时间状语从句和条件状语从句中，用一般现在时代替一般将来时。",
        "否定句借助 do/does，疑问句把 do/does 提前，动词一律还原为原形。"
      ],
      examples: [
        { en: "He goes to school by bike every day.", cn: "他每天骑自行车上学。", note: "主语 He 为第三人称单数，动词加 -es。" },
        { en: "The earth moves around the sun.", cn: "地球绕着太阳转。", note: "客观真理，永远用一般现在时。" },
        { en: "The train leaves at nine tomorrow morning.", cn: "火车明天早上九点发车。", note: "按时刻表发生的将来动作用一般现在时。" },
        { en: "If it rains tomorrow, we will stay at home.", cn: "如果明天下雨，我们就待在家里。", note: "条件状语从句中用一般现在时代替将来时。" },
        { en: "She does not like coffee.", cn: "她不喜欢咖啡。", note: "否定句借助助动词 does，动词还原为 like。" },
        { en: "Do you often play basketball?", cn: "你经常打篮球吗？", note: "疑问句把 Do 提前，动词用原形。" }
      ],
      practice: [
        { q: "The teacher told us that the earth ___ around the sun.", options: ["moves", "moved", "has moved", "will move"], answer: "A", explain: "客观真理不受主句时态影响，永远用一般现在时。" },
        { q: "If it ___ tomorrow, we will cancel the picnic.", options: ["will rain", "rains", "rained", "is raining"], answer: "B", explain: "条件状语从句中用一般现在时代替一般将来时。" },
        { q: "She usually ___ up at six in the morning.", options: ["get", "gets", "got", "getting"], answer: "B", explain: "usually 表习惯性动作，主语三单，谓语用 gets。" }
      ]
    },
    {
      id: "g2",
      title: "一般过去时",
      def: "表示过去某个时间发生的动作或存在的状态。谓语动词用过去式，规则动词加 -ed。",
      rules: [
        "表示过去某一时间发生的动作，常与 yesterday, last week, two days ago, in 2010 等连用。",
        "表示过去习惯性、经常性的动作（可借助 used to do）。",
        "规则动词过去式变化：一般加 -ed；以 e 结尾加 -d；辅音字母+y 结尾改 y 为 i 再加 -ed；重读闭音节双写末尾辅音字母再加 -ed。",
        "否定句、疑问句借助助动词 did，动词一律还原为原形。",
        "不规则动词的过去式需单独记忆（如 go→went, see→saw, do→did）。"
      ],
      examples: [
        { en: "I visited my grandparents last Sunday.", cn: "上周日我拜访了祖父母。", note: "visit 规则变化加 -ed。" },
        { en: "She studied English at college ten years ago.", cn: "十年前她在大学学英语。", note: "study 以辅音字母+y 结尾，改 y 为 i 加 -ed。" },
        { en: "They did not go to the party yesterday.", cn: "他们昨天没去参加聚会。", note: "否定句用 did not，go 用原形。" },
        { en: "Did you see the film last night?", cn: "你昨晚看电影了吗？", note: "疑问句 Did 提前，动词还原为 see。" },
        { en: "When I was young, I often played by the river.", cn: "我小时候常在河边玩。", note: "描述过去经常性的动作。" }
      ],
      practice: [
        { q: "He ___ his homework an hour ago.", options: ["finishes", "finished", "has finished", "is finishing"], answer: "B", explain: "an hour ago 是明确的过去时间，用一般过去时。" },
        { q: "___ you ___ to Beijing last year?", options: ["Did; go", "Do; go", "Have; gone", "Will; go"], answer: "A", explain: "last year 表过去，疑问句用 Did 提前，动词还原。" },
        { q: "She ___ the piano when she was a child.", options: ["play", "plays", "played", "playing"], answer: "C", explain: "when she was a child 表过去，用过去式 played。" }
      ]
    },
    {
      id: "g3",
      title: "进行时态",
      def: "表示正在进行的动作。现在进行时=am/is/are+doing；过去进行时=was/were+doing。",
      rules: [
        "现在进行时表示此刻正在进行的动作，常与 now, at the moment, Look!, Listen! 等连用。",
        "现在进行时可表示按计划即将发生的动作（go, come, leave, arrive, start 等位移动词）。",
        "过去进行时表示过去某一时刻正在进行的动作，常与 at that time, at eight last night, when/while 连用。",
        "过去进行时常与一般过去时搭配：一个动作正在进行，另一动作突然发生（用 when）。",
        "表示状态、感觉、心理的动词（know, like, love, hate, want, belong 等）一般不用进行时。"
      ],
      examples: [
        { en: "Look! The children are playing football on the playground.", cn: "看！孩子们正在操场上踢足球。", note: "Look! 提示此刻正在进行的动作。" },
        { en: "She is coming to see us tomorrow.", cn: "她明天要来看我们。", note: "come 的进行时表将来的计划安排。" },
        { en: "I was reading a novel at nine last night.", cn: "昨晚九点我正在读小说。", note: "过去某一时刻正在进行的动作。" },
        { en: "While he was watching TV, the telephone rang.", cn: "他正在看电视时，电话响了。", note: "while 后接过去进行时，另一动作突然发生。" },
        { en: "I know the answer.", cn: "我知道答案。", note: "know 表示状态，不用进行时。" }
      ],
      practice: [
        { q: "Listen! Someone ___ in the next room.", options: ["sings", "is singing", "sang", "has sung"], answer: "B", explain: "Listen! 提示此刻正在进行的动作，用现在进行时。" },
        { q: "I ___ my homework when he came in.", options: ["was doing", "am doing", "did", "do"], answer: "A", explain: "when he came in 表过去某时刻正在进行的动作，用过去进行时。" },
        { q: "She ___ English at eight yesterday evening.", options: ["was studying", "is studying", "studies", "studied"], answer: "A", explain: "at eight yesterday evening 是过去具体时刻，用过去进行时。" }
      ]
    },
    {
      id: "g4",
      title: "现在完成时",
      def: "表示过去发生的动作对现在造成的影响或结果，或从过去持续到现在的动作。结构：have/has+过去分词。",
      rules: [
        "表示过去动作对现在的影响或结果，常与 already, yet, just, ever, never 连用。",
        "表示从过去持续到现在的动作或状态，常与 for+时间段、since+时间点连用。",
        "与一般过去时的区别：一般过去时强调动作发生的时间，现在完成时强调对现在的影响。",
        "短暂性动词（buy, come, go, die, leave, borrow 等）不能与 for/since 连用，需换成延续性动词。",
        "have been to 表示“去过某地已回”；have gone to 表示“去了某地未回”。"
      ],
      examples: [
        { en: "I have already finished my homework.", cn: "我已经完成作业了。", note: "already 用于肯定句，表示对现在有影响。" },
        { en: "He has lived in Chongqing for ten years.", cn: "他在重庆住了十年了。", note: "for+时间段，表示动作持续至今。" },
        { en: "She has been a teacher since 2015.", cn: "她自 2015 年起就是一名教师。", note: "since+时间点，表示从过去持续到现在。" },
        { en: "I have had this car for two years.", cn: "这辆车我买了两年了。", note: "buy 是短暂性动词，须换成延续性动词 have。" },
        { en: "He has gone to Shanghai.", cn: "他去上海了（还没回来）。", note: "has gone to 强调人在上海，尚未回来。" }
      ],
      practice: [
        { q: "—Have you ever ___ to Beijing? —Yes, twice.", options: ["been", "gone", "go", "went"], answer: "A", explain: "have been to 表示“去过某地已回”，符合语境。" },
        { q: "He ___ here since 2010.", options: ["has lived", "lived", "lives", "is living"], answer: "A", explain: "since+时间点与现在完成时连用。" },
        { q: "I ___ my keys. I cannot find them anywhere.", options: ["have lost", "lost", "lose", "had lost"], answer: "A", explain: "强调“丢了钥匙”对现在的影响（现在找不到），用现在完成时。" }
      ]
    },
    {
      id: "g5",
      title: "过去完成时",
      def: "表示在过去某一时间或动作之前已经完成的动作，即“过去的过去”。结构：had+过去分词。",
      rules: [
        "表示“过去的过去”，常与 by the end of last..., by the time..., before..., after... 等连用。",
        "含两个过去动作的句子中，先发生的动作用过去完成时，后发生的用一般过去时。",
        "主句为一般过去时，宾语从句表示先于主句发生的动作时，从句用过去完成时。",
        "固定句型：hardly/scarcely...when..., no sooner...than... 表示“一……就……”。",
        "表示过去某时之前一直持续的状态，也可用过去完成时。"
      ],
      examples: [
        { en: "By the time I got to the station, the train had left.", cn: "我到达车站时，火车已经开走了。", note: "leave 发生在 got 之前，用过去完成时。" },
        { en: "She had finished the work before her boss came back.", cn: "老板回来之前，她已经完成了工作。", note: "finish 先于 came 发生，用过去完成时。" },
        { en: "He said that he had seen the film.", cn: "他说他看过那部电影。", note: "主句 said 为过去时，从句 see 更早发生，用过去完成时。" },
        { en: "No sooner had he arrived than it began to rain.", cn: "他一到就下起雨来。", note: "no sooner...than 句型，主句用过去完成时倒装。" },
        { en: "By the end of last year, they had learned 2,000 words.", cn: "到去年年底，他们已经学了 2000 个单词。", note: "by the end of last year 提示“过去的过去”。" }
      ],
      practice: [
        { q: "When I arrived, the meeting ___ already ___.", options: ["had; begun", "has; begun", "was; begun", "did; begin"], answer: "A", explain: "会议开始发生在“我到达”之前，用过去完成时 had begun。" },
        { q: "By the end of last year, they ___ 500 trees.", options: ["had planted", "planted", "have planted", "plant"], answer: "A", explain: "by the end of last year 提示过去完成时。" },
        { q: "He told me he ___ the book twice.", options: ["had read", "has read", "reads", "read"], answer: "A", explain: "主句 told 为过去时，从句 read 更早发生，用过去完成时。" }
      ]
    },
    {
      id: "g6",
      title: "完成进行时",
      def: "表示从过去某时开始一直持续到现在的动作，强调动作的持续性和进行性。结构：have/has+been+doing。",
      rules: [
        "表示从过去开始一直持续到现在、可能仍在继续的动作。",
        "常与 for+时间段、since+时间点、all day、all morning、recently 等连用。",
        "与现在完成时的区别：完成进行时更强调动作的持续进行和反复。",
        "表示状态的动词（know, like, have 表拥有等）一般不用于进行时。",
        "可表示近期持续、反复发生的动作。"
      ],
      examples: [
        { en: "I have been waiting for you for two hours.", cn: "我已经等了你两个小时了。", note: "强调“等”这一动作持续进行。" },
        { en: "She has been teaching English since she graduated.", cn: "她毕业以来一直在教英语。", note: "since+从句，动作一直持续。" },
        { en: "It has been raining all day.", cn: "雨下了一整天。", note: "强调持续不断地下。" },
        { en: "He has been reading this novel recently.", cn: "他最近一直在读这本小说。", note: "recently 强调近期持续的动作。" }
      ],
      practice: [
        { q: "I ___ for you all morning.", options: ["have been waiting", "waited", "wait", "am waiting"], answer: "A", explain: "all morning 强调动作从早一直持续到现在，用完成进行时。" },
        { q: "She ___ English for ten years.", options: ["has been studying", "studied", "studies", "is studying"], answer: "A", explain: "for ten years 与完成进行时连用，强调持续学习。" },
        { q: "—You look tired. —Yes, I ___ all day.", options: ["have been working", "worked", "work", "am working"], answer: "A", explain: "all day 强调一直工作到现在，用完成进行时。" }
      ]
    },
    {
      id: "g7",
      title: "一般将来时",
      def: "表示将来要发生的动作或状态。常见表达：will/shall+动词原形；be going to+动词原形。",
      rules: [
        "will+动词原形表示将来，常与 tomorrow, next week, in the future, soon 连用。",
        "be going to+动词原形表示计划、打算，或根据迹象推测即将发生。",
        "现在进行时表将来（go, come, leave, start, arrive 等位移动词）。",
        "一般现在时表将来（按时刻表安排的将来动作）。",
        "be about to+动词原形表示“即将、马上”，不与具体时间状语连用。"
      ],
      examples: [
        { en: "I will call you as soon as I arrive.", cn: "我一到就给你打电话。", note: "will+动词原形表将来。" },
        { en: "Look at the clouds! It is going to rain.", cn: "看那些云！要下雨了。", note: "根据迹象推测即将发生，用 be going to。" },
        { en: "We are leaving for Beijing tomorrow.", cn: "我们明天动身去北京。", note: "位移动词 leave 的进行时表将来。" },
        { en: "The film starts at eight this evening.", cn: "电影今晚八点开始。", note: "按时刻表安排的将来动作，用一般现在时。" },
        { en: "The meeting is about to begin.", cn: "会议马上开始。", note: "be about to 表示即将发生。" }
      ],
      practice: [
        { q: "There ___ a football match tomorrow.", options: ["will be", "is", "was", "has been"], answer: "A", explain: "tomorrow 表将来，there be 句型将来时为 there will be。" },
        { q: "I think it ___ sunny this afternoon.", options: ["will be", "is", "was", "would be"], answer: "A", explain: "this afternoon 表将来，用 will be。" },
        { q: "We ___ visit the Great Wall next week.", options: ["are going to", "go", "went", "have gone"], answer: "A", explain: "next week 表将来的计划，用 be going to。" }
      ]
    },
    {
      id: "g8",
      title: "被动语态",
      def: "强调动作的承受者。结构：be+过去分词，时态变化体现在 be 动词上。",
      rules: [
        "结构：be+过去分词；一般现在时 am/is/are done，一般过去时 was/were done，一般将来时 will be done，现在完成时 have/has been done，情态动词 can/must be done。",
        "主动句变被动句：宾语提前作主语，谓语变为 be+过去分词，原主语变为 by+宾语（可省略）。",
        "不及物动词及某些及物动词（have 表拥有、cost、fit、lack 等）没有被动语态。",
        "感官动词和使役动词的被动：see/hear/make sb do → sb be seen/heard/made to do（to 要还原）。",
        "双宾语动词的被动：give/show/tell sb sth → sb be given/shown/told sth。"
      ],
      examples: [
        { en: "English is spoken all over the world.", cn: "全世界都说英语。", note: "一般现在时被动语态。" },
        { en: "The bridge was built in 1998.", cn: "这座桥建于 1998 年。", note: "一般过去时被动语态。" },
        { en: "A new hospital will be built next year.", cn: "明年将建一所新医院。", note: "一般将来时被动语态。" },
        { en: "He was made to work late.", cn: "他被迫加班。", note: "make sb do 的被动语态要还原 to。" },
        { en: "She was given a present by her friend.", cn: "她收到了朋友送的礼物。", note: "双宾语动词 give 的被动语态。" }
      ],
      practice: [
        { q: "The Great Wall ___ by millions of people every year.", options: ["is visited", "visits", "visited", "has visited"], answer: "A", explain: "长城是“被参观”，且 every year 表一般现在时，用 is visited。" },
        { q: "This kind of machine ___ in China.", options: ["is made", "makes", "made", "make"], answer: "A", explain: "机器是“被制造”，用被动语态 is made。" },
        { q: "The work must ___ before Friday.", options: ["be finished", "finish", "finished", "be finish"], answer: "A", explain: "情态动词被动结构为 must+be+过去分词。" }
      ]
    }
    ,
    {
      id: "g9",
      title: "情态动词",
      def: "表示说话人的语气和态度，如能力、许可、推测、义务等。情态动词后接动词原形。",
      rules: [
        "can/could 表能力、许可；may/might 表许可、可能性；must 表必须、肯定推测。",
        "must 的否定 must not 表“禁止”；表示“不必”用 need not 或 do not have to。",
        "表推测：must（肯定）、may/might（可能）、can not（不可能）。",
        "should/ought to 表“应该”；need 作情态动词多用于否定句和疑问句。",
        "情态动词+have done 表对过去的推测或虚拟：must have done（一定做过）、should have done（本应做而未做）、could have done（本可以做而未做）。"
      ],
      examples: [
        { en: "You must finish your homework before nine.", cn: "你必须在九点前完成作业。", note: "must 表必须。" },
        { en: "—Must I hand in the paper now? —No, you need not.", cn: "我现在必须交论文吗？——不，不必。", note: "must 引导的问句，否定回答用 need not。" },
        { en: "He cannot be at home, because the light is off.", cn: "他不可能在家，因为灯关着。", note: "cannot 表否定推测（不可能）。" },
        { en: "You should have told me the truth.", cn: "你本应该告诉我真相。", note: "should have done 表本应做而未做。" },
        { en: "She must have arrived, for the meeting has begun.", cn: "她一定已经到了，因为会议已经开始了。", note: "must have done 表对过去的肯定推测。" }
      ],
      practice: [
        { q: "—Must I clean the room now? —No, you ___.", options: ["need not", "must not", "cannot", "will not"], answer: "A", explain: "must 问句的否定回答用 need not，表“不必”。" },
        { q: "You ___ smoke in the hospital.", options: ["must not", "need not", "do not have to", "may"], answer: "A", explain: "医院禁止吸烟，must not 表“禁止”。" },
        { q: "He ___ be in the office now, because he has gone to Beijing.", options: ["cannot", "must", "may", "should"], answer: "A", explain: "他去了北京，不可能在办公室，cannot 表否定推测。" }
      ]
    },
    {
      id: "g10",
      title: "虚拟语气",
      def: "表示与事实相反或主观愿望、假设、建议等。重点掌握 if 虚拟条件句的三种情况。",
      rules: [
        "与现在事实相反：if+一般过去时（be 一律用 were），主句 would/could/might+动词原形。",
        "与过去事实相反：if+过去完成时（had done），主句 would/could/might+have done。",
        "与将来事实相反：if+were to do / should do，主句 would/could/might+动词原形。",
        "省略 if 的倒装：把 were/had/should 提前。",
        "表示建议、要求、命令的动词（suggest, require, demand, insist, order）后的宾语从句用 (should)+动词原形。",
        "wish 后的从句：与现在相反用过去时，与过去相反用过去完成时。"
      ],
      examples: [
        { en: "If I were you, I would take his advice.", cn: "如果我是你，我会接受他的建议。", note: "与现在事实相反，be 用 were。" },
        { en: "If he had studied hard, he would have passed the exam.", cn: "如果他当时努力学习，他就会通过考试了。", note: "与过去事实相反，从句用过去完成时。" },
        { en: "If it should rain tomorrow, we would put off the match.", cn: "如果明天真下雨，我们就推迟比赛。", note: "与将来事实相反，should+动词原形。" },
        { en: "Had I known the truth, I would have told you.", cn: "如果我当时知道真相，我就会告诉你了。", note: "省略 if，把 had 提前构成倒装。" },
        { en: "The teacher suggested that we (should) read more.", cn: "老师建议我们多读书。", note: "suggest 后的宾语从句用 (should)+动词原形。" }
      ],
      practice: [
        { q: "If I ___ you, I would go there at once.", options: ["were", "was", "am", "will be"], answer: "A", explain: "与现在事实相反的虚拟条件句，be 一律用 were。" },
        { q: "If it had rained yesterday, we ___ at home.", options: ["would have stayed", "would stay", "stay", "stayed"], answer: "A", explain: "与过去事实相反，主句用 would have done。" },
        { q: "He wishes he ___ a bird.", options: ["were", "was", "is", "will be"], answer: "A", explain: "wish 后与现在事实相反，用过去时，be 用 were。" }
      ]
    },
    {
      id: "g11",
      title: "非谓语动词——不定式",
      def: "to+动词原形，可在句中作主语、宾语、表语、定语、状语、补语。",
      rules: [
        "作主语：To learn English well is important.（常用 it 作形式主语：It is important to learn...）",
        "作宾语：decide, want, hope, plan, agree, refuse, afford, manage, promise 等后接 to do。",
        "作宾语补足语：ask, tell, want, expect, allow, advise 等+sb+to do；使役动词 let/make/have 与感官动词 see/hear/watch 后接省 to 的不定式（被动语态还原 to）。",
        "作状语：表目的（in order to/so as to）、结果（only to, too...to, enough to）、原因。",
        "疑问词+to do 可作宾语：what to do, how to do it, where to go。",
        "不定式的时态与语态：to do / to be done / to have done。"
      ],
      examples: [
        { en: "To learn a foreign language well is not easy.", cn: "学好一门外语不容易。", note: "不定式作主语。" },
        { en: "I want to go abroad to study.", cn: "我想出国留学。", note: "want 后接 to do；to study 表目的。" },
        { en: "The teacher asked us to hand in our homework.", cn: "老师要求我们交作业。", note: "ask sb to do 作宾语补足语。" },
        { en: "He made the boy cry.", cn: "他把男孩弄哭了。", note: "make 后接省 to 的不定式。" },
        { en: "I do not know how to solve the problem.", cn: "我不知道如何解决这个问题。", note: "疑问词+to do 作宾语。" }
      ],
      practice: [
        { q: "It is important ___ English well.", options: ["to learn", "learn", "learning", "learned"], answer: "A", explain: "it 作形式主语，真正主语用不定式 to learn。" },
        { q: "She hopes ___ a doctor in the future.", options: ["to become", "become", "becoming", "became"], answer: "A", explain: "hope 后接不定式 to do。" },
        { q: "I saw him ___ into the room.", options: ["go", "to go", "going", "went"], answer: "A", explain: "感官动词 see 后接省 to 的不定式，see sb do sth。" }
      ]
    },
    {
      id: "g12",
      title: "非谓语动词——动名词",
      def: "动词的 -ing 形式，兼具动词和名词的性质，可作主语、宾语、表语、定语。",
      rules: [
        "作主语：Reading is my hobby.（可用 it 作形式主语：It is no use/good doing...）",
        "作宾语：enjoy, finish, avoid, mind, suggest, practice, keep, consider, admit 等后接 doing。",
        "介词后接动名词：look forward to, be used to, devote to, thanks for 等。",
        "有些动词后接 doing 与 to do 意义不同：remember/forget/stop/regret/try/mean。",
        "固定搭配：be busy doing, have difficulty/trouble (in) doing, spend...(in) doing。"
      ],
      examples: [
        { en: "Reading English aloud every morning is helpful.", cn: "每天早晨朗读英语很有帮助。", note: "动名词作主语。" },
        { en: "Would you mind opening the window?", cn: "你介意打开窗户吗？", note: "mind 后接动名词 doing。" },
        { en: "I am looking forward to hearing from you.", cn: "我盼望着收到你的来信。", note: "介词 to 后接动名词 hearing。" },
        { en: "I remember seeing her somewhere before.", cn: "我记得以前在哪儿见过她。", note: "remember doing 表示“记得做过某事”。" },
        { en: "He spent two hours (in) doing his homework.", cn: "他花了两个小时做作业。", note: "spend...doing 固定搭配。" }
      ],
      practice: [
        { q: "I enjoy ___ to music.", options: ["listening", "listen", "to listen", "listened"], answer: "A", explain: "enjoy 后接动名词 doing。" },
        { q: "He is busy ___ for the exam.", options: ["preparing", "prepare", "to prepare", "prepared"], answer: "A", explain: "be busy doing 固定搭配。" },
        { q: "She is used to ___ up early.", options: ["getting", "get", "got", "to get"], answer: "A", explain: "be used to doing 表示“习惯于做某事”，to 是介词。" }
      ]
    },
    {
      id: "g13",
      title: "非谓语动词——分词",
      def: "包括现在分词（doing）和过去分词（done），可作定语、状语、表语、补语。",
      rules: [
        "现在分词表主动、进行；过去分词表被动、完成。",
        "作定语：单个分词前置（a sleeping baby），分词短语后置（the boy standing there）。",
        "作状语：分词与句子主语是主动关系用 doing，被动关系用 done。",
        "作宾语补足语：see/hear/watch sb doing（正在做）；have sth done（让别人做/遭受）。",
        "独立主格结构：分词的逻辑主语与句子主语不同时，自带主语。"
      ],
      examples: [
        { en: "The sleeping baby is her son.", cn: "那个正在睡觉的婴儿是她的儿子。", note: "单个现在分词前置作定语。" },
        { en: "The boy standing there is my brother.", cn: "站在那边的男孩是我哥哥。", note: "分词短语后置作定语。" },
        { en: "Hearing the good news, they jumped with joy.", cn: "听到这个好消息，他们高兴得跳了起来。", note: "hearing 与主语 they 是主动关系。" },
        { en: "Seen from the hill, the city looks beautiful.", cn: "从山上看，这座城市很美。", note: "seen 与 city 是被动关系。" },
        { en: "I had my bike repaired yesterday.", cn: "昨天我让人修了自行车。", note: "have sth done 表示“让别人做某事”。" }
      ],
      practice: [
        { q: "___ from the top of the hill, the lake looks small.", options: ["Seen", "Seeing", "See", "To see"], answer: "A", explain: "湖是“被看”的，与主语是被动关系，用过去分词 Seen。" },
        { q: "The man ___ in the office is our manager.", options: ["working", "worked", "work", "works"], answer: "A", explain: "the man 与 work 是主动关系，用现在分词短语后置作定语。" },
        { q: "___ the news, she could not help crying.", options: ["Hearing", "Heard", "Hear", "To hear"], answer: "A", explain: "she 与 hear 是主动关系，用现在分词 Hearing。" }
      ]
    },
    {
      id: "g14",
      title: "名词性从句",
      def: "在句中起名词作用的从句，包括主语从句、宾语从句、表语从句、同位语从句。",
      rules: [
        "宾语从句：由 that（可省略）、whether/if、疑问词引导；用陈述语序；主句为过去时时从句用相应过去时（客观真理仍用一般现在时）。",
        "主语从句：that、whether、疑问词引导；常用 it 作形式主语。",
        "表语从句：位于系动词后，由 that、whether、疑问词引导。",
        "同位语从句：对前面名词（news, fact, idea, suggestion 等）解释说明，由 that 引导（that 不作成分、不可省略）。",
        "同位语从句与定语从句的区别：同位语从句中的 that 不作句子成分。"
      ],
      examples: [
        { en: "I believe that he will come.", cn: "我相信他会来。", note: "that 引导宾语从句，可省略。" },
        { en: "Whether we will go depends on the weather.", cn: "我们是否去取决于天气。", note: "whether 引导主语从句。" },
        { en: "The problem is that we do not have enough time.", cn: "问题是我们没有足够的时间。", note: "that 引导表语从句。" },
        { en: "The news that our team won is exciting.", cn: "我们队获胜的消息令人兴奋。", note: "that 引导同位语从句，说明 news 的内容。" },
        { en: "She asked me where I lived.", cn: "她问我住在哪里。", note: "宾语从句用陈述语序。" }
      ],
      practice: [
        { q: "___ he said at the meeting surprised us.", options: ["What", "That", "Which", "Who"], answer: "A", explain: "主语从句中缺宾语，用 what 引导（what 在从句中作 said 的宾语）。" },
        { q: "I do not know ___ he will come or not.", options: ["whether", "that", "what", "who"], answer: "A", explain: "与 or not 连用只能用 whether，不能用 if。" },
        { q: "The fact ___ she is late shows she missed the bus.", options: ["that", "which", "what", "who"], answer: "A", explain: "同位语从句用 that 引导，that 不作成分。" }
      ]
    },
    {
      id: "g15",
      title: "定语从句",
      def: "修饰名词或代词的从句。引导词：关系代词 who, whom, whose, which, that；关系副词 when, where, why。",
      rules: [
        "关系代词：who/that 指人（作主语/宾语），whom 指人（作宾语），which/that 指物，whose 表所属。",
        "关系副词：when 表时间，where 表地点，why 表原因（先行词为 reason）。",
        "只用 that 不用 which 的情况：先行词被最高级、序数词、all, everything, nothing, the only, the very 等修饰；先行词既有人又有物。",
        "只用 which 不用 that 的情况：非限制性定语从句、介词之后。",
        "非限制性定语从句（用逗号隔开）：不能用 that 引导。"
      ],
      examples: [
        { en: "The man who is talking to our teacher is my father.", cn: "正在和我们老师说话的人是我父亲。", note: "who 指人作主语。" },
        { en: "This is the book which/that I bought yesterday.", cn: "这是我昨天买的书。", note: "which/that 指物作宾语。" },
        { en: "The house whose windows are broken is empty.", cn: "窗户破了的那座房子是空的。", note: "whose 表所属。" },
        { en: "This is the factory where my father works.", cn: "这就是我父亲工作的工厂。", note: "where 表地点。" },
        { en: "This is the most interesting film that I have ever seen.", cn: "这是我看过的最有趣的电影。", note: "先行词被最高级修饰，用 that 不用 which。" }
      ],
      practice: [
        { q: "The girl ___ is singing is my sister.", options: ["who", "which", "whose", "whom"], answer: "A", explain: "先行词 the girl 指人，在从句中作主语，用 who。" },
        { q: "This is the place ___ I grew up.", options: ["where", "which", "who", "when"], answer: "A", explain: "先行词 the place 表地点，从句不缺成分，用关系副词 where。" },
        { q: "I will never forget the day ___ I met you.", options: ["when", "where", "which", "who"], answer: "A", explain: "先行词 the day 表时间，用关系副词 when。" }
      ]
    },
    {
      id: "g16",
      title: "状语从句",
      def: "在句中作状语，表示时间、地点、原因、条件、目的、结果、让步、比较、方式等。",
      rules: [
        "时间状语从句：when, while, as, before, after, since, until/till, as soon as, no sooner...than。",
        "条件状语从句：if, unless, as long as, in case；用一般现在时代替将来时。",
        "原因状语从句：because, since, as, now that；because 回答 why，语气最强。",
        "让步状语从句：though/although（不与 but 连用）, even if/though, no matter+疑问词=疑问词+ever。",
        "目的/结果状语从句：so that, in order that（目的）；so...that, such...that（结果）。",
        "比较状语从句：as...as, not as/so...as, than。"
      ],
      examples: [
        { en: "I will tell him the news as soon as he comes back.", cn: "他一回来我就把这个消息告诉他。", note: "as soon as 引导时间状语从句。" },
        { en: "If it does not rain, we will go out.", cn: "如果不下雨，我们就出去。", note: "条件句用一般现在时代替将来时。" },
        { en: "He did not come because he was ill.", cn: "他没来是因为生病了。", note: "because 表原因。" },
        { en: "Although he is old, he is very healthy.", cn: "尽管他年纪大了，但他很健康。", note: "although 不与 but 连用。" },
        { en: "She studied so hard that she passed the exam.", cn: "她学习如此努力，以至于通过了考试。", note: "so...that 表结果。" }
      ],
      practice: [
        { q: "I was reading ___ he came in.", options: ["when", "because", "if", "though"], answer: "A", explain: "when 引导时间状语从句，表示“正在……时”。" },
        { q: "___ it rains, we will stay at home.", options: ["If", "Because", "Though", "While"], answer: "A", explain: "if 引导条件状语从句，表“如果”。" },
        { q: "___ he is poor, he is honest.", options: ["Though", "Because", "If", "Since"], answer: "A", explain: "though 引导让步状语从句，表“尽管”。" }
      ]
    }
    ,
    {
      id: "g17",
      title: "倒装",
      def: "把谓语动词或助动词置于主语之前的语序，分为完全倒装和部分倒装。",
      rules: [
        "完全倒装：here, there, now, then 及表示方位的介词短语（in, out, up, down）置于句首，且主语为名词。",
        "部分倒装：否定词置于句首时用部分倒装，如 never, hardly, seldom, little, not until, no sooner, neither, nor。",
        "only+状语置于句首时用部分倒装。",
        "so/neither/nor+助动词+主语，表示“也/也不”。",
        "not only...but also... 连接两个分句时，前一分句用倒装。"
      ],
      examples: [
        { en: "Here comes the bus.", cn: "公交车来了。", note: "here 置于句首，完全倒装。" },
        { en: "Never have I seen such a beautiful place.", cn: "我从未见过如此美丽的地方。", note: "never 置于句首，部分倒装。" },
        { en: "Only in this way can we solve the problem.", cn: "只有这样我们才能解决这个问题。", note: "only+状语置于句首，部分倒装。" },
        { en: "He likes music, so do I.", cn: "他喜欢音乐，我也喜欢。", note: "so+助动词+主语，表“也”。" },
        { en: "Not until he came back did I leave.", cn: "直到他回来我才离开。", note: "not until 置于句首，主句部分倒装。" }
      ],
      practice: [
        { q: "Never ___ such a wonderful film.", options: ["have I seen", "I have seen", "I saw", "did I saw"], answer: "A", explain: "never 置于句首，用部分倒装，现在完成时倒装为 have I seen。" },
        { q: "Here ___ the bus.", options: ["comes", "come", "coming", "is come"], answer: "A", explain: "here 置于句首且主语为名词，完全倒装，谓语 comes 提前。" },
        { q: "Only in this way ___ learn English well.", options: ["can we", "we can", "we could", "could we"], answer: "A", explain: "only+状语置于句首，用部分倒装 can we。" }
      ]
    },
    {
      id: "g18",
      title: "主谓一致",
      def: "谓语动词与主语在人称和数上保持一致。",
      rules: [
        "就近原则：either...or, neither...nor, not only...but also, there be 句型中，谓语与最近的主语一致。",
        "就远原则：主语后跟 with, together with, along with, as well as, except, but 等短语时，谓语与前面的主语一致。",
        "集合名词：family, class, team 等作整体时用单数，强调成员时用复数。",
        "不定代词：everyone, someone, nobody, everything 等作主语时谓语用单数。",
        "由 and 连接的两个名词表示同一概念（如 bread and butter）时谓语用单数。",
        "时间、金钱、距离、价格作主语时视为整体，谓语用单数。"
      ],
      examples: [
        { en: "Neither he nor I am right.", cn: "他和我都不对。", note: "就近原则，谓语与 I 一致，用 am。" },
        { en: "The teacher together with his students is going to the park.", cn: "老师和他的学生们要去公园。", note: "就远原则，谓语与 the teacher 一致。" },
        { en: "My family is a big one.", cn: "我的家庭是个大家庭。", note: "family 作整体，谓语用单数。" },
        { en: "Everything is ready.", cn: "一切都准备好了。", note: "everything 作主语，谓语用单数。" },
        { en: "Ten years is a long time.", cn: "十年是一段很长的时间。", note: "时间作整体，谓语用单数。" }
      ],
      practice: [
        { q: "Either you or he ___ wrong.", options: ["is", "are", "am", "be"], answer: "A", explain: "就近原则，谓语与最近的主语 he 一致，用 is。" },
        { q: "The news ___ very important.", options: ["is", "are", "be", "were"], answer: "A", explain: "news 是不可数名词，谓语用单数 is。" },
        { q: "Not only the students but also the teacher ___ interested in the game.", options: ["is", "are", "am", "be"], answer: "A", explain: "就近原则，谓语与最近的 the teacher 一致，用 is。" }
      ]
    },
    {
      id: "g19",
      title: "形容词、副词的比较等级",
      def: "形容词和副词的原级、比较级、最高级的形式与用法。",
      rules: [
        "比较级变化：单音节及部分双音节加 -er/-est；多音节及部分双音节加 more/most；不规则变化 good/well→better→best, bad→worse→worst, many/much→more→most, little→less→least, far→farther/further→farthest/furthest。",
        "原级比较：as+原级+as（和……一样）；not as/so+原级+as（不如……）。",
        "比较级：形容词比较级+than；“比较级+and+比较级”（越来越……）；“the+比较级, the+比较级”（越……越……）。",
        "最高级：the+最高级+表示范围的短语（of/in/among）；序数词+最高级。",
        "修饰比较级的词：much, even, far, a little, a bit, still。",
        "比较级表最高级：比较级+than any other+单数名词。"
      ],
      examples: [
        { en: "She is as tall as her sister.", cn: "她和她姐姐一样高。", note: "as+原级+as 表同级比较。" },
        { en: "This book is more interesting than that one.", cn: "这本书比那本更有趣。", note: "多音节词用 more+原级+than。" },
        { en: "He is the tallest boy in his class.", cn: "他是班里最高的男孩。", note: "the+最高级+in+范围。" },
        { en: "The harder you work, the better you will be.", cn: "你越努力，就会越好。", note: "the+比较级, the+比较级 结构。" },
        { en: "China is larger than any other country in Asia.", cn: "中国比亚洲任何其他国家都大。", note: "比较级+than any other 表最高级含义。" }
      ],
      practice: [
        { q: "Tom is ___ than Mike.", options: ["taller", "tallest", "tall", "more tall"], answer: "A", explain: "单音节词 tall 的比较级直接加 -er，taller。" },
        { q: "This is ___ film I have ever seen.", options: ["the most interesting", "more interesting", "most interesting", "the more interesting"], answer: "A", explain: "多音节词最高级用 the most+原级。" },
        { q: "___ you study, ___ progress you will make.", options: ["The harder; the greater", "Harder; greater", "The hard; the great", "Hard; great"], answer: "A", explain: "the+比较级, the+比较级 结构，表示“越……越……”。" }
      ]
    },
    {
      id: "g20",
      title: "冠词",
      def: "定冠词 the 与不定冠词 a/an 及零冠词的用法。",
      rules: [
        "不定冠词 a/an 表“一个”，泛指；a 用于辅音音素前，an 用于元音音素前（an hour, a university）。",
        "定冠词 the 用于特指、独一无二的事物、乐器前、序数词/最高级前、江河湖海山川前。",
        "零冠词：球类、三餐、学科、季节、月份、星期、专有名词前一般不加冠词。",
        "固定搭配：in the morning, by bus, at home, go to school；in hospital（住院）与 in the hospital（在医院里）含义不同。"
      ],
      examples: [
        { en: "I have a pen and an orange.", cn: "我有一支钢笔和一个橙子。", note: "a 后接辅音音素，an 后接元音音素。" },
        { en: "He is an honest boy.", cn: "他是个诚实的男孩。", note: "honest 以元音音素开头，用 an。" },
        { en: "The sun rises in the east.", cn: "太阳从东方升起。", note: "独一无二的事物用 the。" },
        { en: "She plays the piano well.", cn: "她钢琴弹得好。", note: "乐器前加 the。" },
        { en: "They go to school by bus.", cn: "他们坐公交车上学。", note: "go to school 表“上学”不加冠词；by bus 表方式不加冠词。" }
      ],
      practice: [
        { q: "He is ___ university student.", options: ["a", "an", "the", "/"], answer: "A", explain: "university 以辅音音素 /ju:/ 开头，用 a。" },
        { q: "___ moon moves around the earth.", options: ["The", "A", "An", "/"], answer: "A", explain: "moon 是独一无二的事物，用定冠词 the。" },
        { q: "He likes playing ___ football.", options: ["/", "the", "a", "an"], answer: "A", explain: "球类运动前不加冠词，用零冠词。" }
      ]
    },
    {
      id: "g21",
      title: "介词",
      def: "表示时间、地点、方式、方向等关系的词，如 in, on, at, for, by, with, of 等。",
      rules: [
        "时间介词：in 用于年/月/季节/上午下午晚上（in 2020, in May, in the morning）；on 用于具体某天（on Monday, on May 1st）；at 用于时刻（at 8 o'clock, at noon, at night）。",
        "地点介词：in 用于大地点或内部（in China, in the box）；on 用于表面（on the desk）；at 用于小地点或点（at the station, at the door）。",
        "方式介词：by+交通工具（by bus）；with+工具；in+语言/材料（in English）。",
        "常见搭配：be good at, be interested in, be proud of, look forward to, be familiar with。",
        "in+时间段表“在……之后”（用于将来时）；after+时间点/从句表“在……之后”。"
      ],
      examples: [
        { en: "He was born in 2005.", cn: "他出生于 2005 年。", note: "年份前用 in。" },
        { en: "We have an English class on Monday morning.", cn: "我们周一早上有英语课。", note: "具体某天用 on。" },
        { en: "She gets up at six every day.", cn: "她每天六点起床。", note: "时刻用 at。" },
        { en: "He goes to school by bike.", cn: "他骑自行车上学。", note: "by+交通工具表方式。" },
        { en: "The meeting will begin in an hour.", cn: "会议一小时后开始。", note: "in+时间段表将来“在……之后”。" }
      ],
      practice: [
        { q: "He was born ___ May 1st.", options: ["on", "in", "at", "of"], answer: "A", explain: "具体某一天用介词 on。" },
        { q: "She is good ___ English.", options: ["at", "in", "on", "for"], answer: "A", explain: "be good at 是固定搭配，表“擅长”。" },
        { q: "They will arrive ___ Beijing tomorrow.", options: ["in", "at", "on", "to"], answer: "A", explain: "arrive in 后接大地点（城市、国家）。" }
      ]
    },
    {
      id: "g22",
      title: "代词",
      def: "代替名词的词，包括人称代词、物主代词、反身代词、指示代词、不定代词、疑问代词等。",
      rules: [
        "人称代词：主格（I, you, he, she, it, we, they）作主语；宾格（me, you, him, her, it, us, them）作宾语。",
        "物主代词：形容词性（my, your, his, her, its, our, their）后接名词；名词性（mine, yours, his, hers, ours, theirs）单独使用。",
        "反身代词：myself, yourself, himself, herself, itself, ourselves, yourselves, themselves；搭配 enjoy oneself, help oneself to, by oneself。",
        "不定代词：some/any, both/all, either/neither, none, each/every, few/a few, little/a little。",
        "指示代词：this/these（近），that/those（远）；that/those 可代替前面提到的名词以避免重复。",
        "it 的用法：指物、指时间/天气/距离、作形式主语或形式宾语。"
      ],
      examples: [
        { en: "She is my friend, and I like her.", cn: "她是我的朋友，我喜欢她。", note: "she 作主语，her 作宾语。" },
        { en: "This is my book; that is yours.", cn: "这是我的书，那是你的（书）。", note: "my 后接名词，yours 单独使用。" },
        { en: "He enjoyed himself at the party.", cn: "他在聚会上玩得很开心。", note: "enjoy oneself 固定搭配。" },
        { en: "There are two pens; one is red, the other is blue.", cn: "有两支钢笔，一支红的，一支蓝的。", note: "one...the other... 表示“一个……另一个……”。" },
        { en: "It is important to learn English.", cn: "学英语很重要。", note: "it 作形式主语。" }
      ],
      practice: [
        { q: "This is not my book. ___ is over there.", options: ["Mine", "My", "Me", "I"], answer: "A", explain: "名词性物主代词 mine 单独使用，作主语。" },
        { q: "He did the work all by ___.", options: ["himself", "him", "his", "he"], answer: "A", explain: "by oneself 表“独自”，用反身代词 himself。" },
        { q: "___ is raining outside.", options: ["It", "He", "She", "They"], answer: "A", explain: "it 指天气，作主语。" }
      ]
    }
  ],
  vocab: {
    words: [    { w: "abandon", pos: "v.", cn: "放弃；抛弃", ex: "He abandoned the plan at last.", exCn: "他最终放弃了这个计划。" },
    { w: "ability", pos: "n.", cn: "能力；才能", ex: "She has the ability to solve the problem.", exCn: "她有解决这个问题的能力。" },
    { w: "absorb", pos: "v.", cn: "吸收；使专心", ex: "Plants absorb water from the soil.", exCn: "植物从土壤中吸收水分。" },
    { w: "accept", pos: "v.", cn: "接受；承认", ex: "I am glad to accept your invitation.", exCn: "我很高兴接受你的邀请。" },
    { w: "achieve", pos: "v.", cn: "实现；取得", ex: "He worked hard to achieve his goal.", exCn: "他努力工作以实现目标。" },
    { w: "achievement", pos: "n.", cn: "成就；成绩", ex: "Winning the prize is a great achievement.", exCn: "获奖是一项了不起的成就。" },
    { w: "acquire", pos: "v.", cn: "获得；学到", ex: "It takes time to acquire a new skill.", exCn: "学会一项新技能需要时间。" },
    { w: "adapt", pos: "v.", cn: "适应；改编", ex: "She adapted quickly to the new environment.", exCn: "她很快适应了新环境。" },
    { w: "admire", pos: "v.", cn: "钦佩；欣赏", ex: "I admire her for her courage.", exCn: "我钦佩她的勇气。" },
    { w: "admit", pos: "v.", cn: "承认；准许进入", ex: "He admitted that he was wrong.", exCn: "他承认他错了。" },
    { w: "adopt", pos: "v.", cn: "采用；收养", ex: "They decided to adopt a new method.", exCn: "他们决定采用一种新方法。" },
    { w: "advantage", pos: "n.", cn: "优势；好处", ex: "Speaking English well is a great advantage.", exCn: "英语说得好是一大优势。" },
    { w: "affect", pos: "v.", cn: "影响；感动", ex: "The weather affects our mood.", exCn: "天气影响我们的心情。" },
    { w: "afford", pos: "v.", cn: "负担得起", ex: "I cannot afford such an expensive car.", exCn: "我买不起这么贵的车。" },
    { w: "agree", pos: "v.", cn: "同意", ex: "They agreed to meet at the station.", exCn: "他们同意在车站见面。" },
    { w: "allow", pos: "v.", cn: "允许", ex: "My parents allow me to watch TV.", exCn: "我父母允许我看电视。" },
    { w: "amount", pos: "n.", cn: "数量；总额", ex: "A large amount of money was spent.", exCn: "花了一大笔钱。" },
    { w: "ancient", pos: "adj.", cn: "古代的；古老的", ex: "We visited an ancient temple.", exCn: "我们参观了一座古庙。" },
    { w: "announce", pos: "v.", cn: "宣布；通知", ex: "The school announced the result yesterday.", exCn: "学校昨天宣布了结果。" },
    { w: "anxious", pos: "adj.", cn: "焦虑的；渴望的", ex: "She is anxious about the exam.", exCn: "她对考试感到焦虑。" },
    { w: "apologize", pos: "v.", cn: "道歉", ex: "You should apologize to her for being late.", exCn: "你应该为迟到向她道歉。" },
    { w: "appear", pos: "v.", cn: "出现；显得", ex: "A smile appeared on her face.", exCn: "她脸上露出了微笑。" },
    { w: "apply", pos: "v.", cn: "申请；应用", ex: "He applied for a job in the company.", exCn: "他申请了那家公司的一份工作。" },
    { w: "appreciate", pos: "v.", cn: "感激；欣赏", ex: "I really appreciate your help.", exCn: "我非常感激你的帮助。" },
    { w: "approach", pos: "n./v.", cn: "方法；接近", ex: "We need a new approach to the problem.", exCn: "我们需要解决这个问题的新方法。" },
    { w: "arrange", pos: "v.", cn: "安排；整理", ex: "She arranged a meeting for Friday.", exCn: "她把会议安排在周五。" },
    { w: "arrive", pos: "v.", cn: "到达", ex: "They arrived at the airport on time.", exCn: "他们准时到达了机场。" },
    { w: "attitude", pos: "n.", cn: "态度", ex: "A positive attitude helps you succeed.", exCn: "积极的态度有助于你成功。" },
    { w: "attract", pos: "v.", cn: "吸引", ex: "The beautiful scenery attracts many visitors.", exCn: "美丽的风景吸引了许多游客。" },
    { w: "available", pos: "adj.", cn: "可获得的；有空的", ex: "The tickets are available now.", exCn: "现在有票了。" },
    { w: "avoid", pos: "v.", cn: "避免", ex: "You should avoid making the same mistake.", exCn: "你应该避免犯同样的错误。" },
    { w: "aware", pos: "adj.", cn: "意识到的", ex: "He is aware of the danger.", exCn: "他意识到了危险。" },
    { w: "balance", pos: "n./v.", cn: "平衡", ex: "You should keep a balance between work and rest.", exCn: "你应该保持工作与休息的平衡。" },
    { w: "behave", pos: "v.", cn: "表现；举止", ex: "The children behaved well at the party.", exCn: "孩子们在聚会上表现得很好。" },
    { w: "benefit", pos: "n./v.", cn: "益处；受益", ex: "Exercise benefits our health.", exCn: "锻炼有益于我们的健康。" },
    { w: "borrow", pos: "v.", cn: "借入", ex: "May I borrow your dictionary?", exCn: "我可以借你的字典吗？" },
    { w: "brave", pos: "adj.", cn: "勇敢的", ex: "The brave boy saved the child.", exCn: "那个勇敢的男孩救了孩子。" },
    { w: "breath", pos: "n.", cn: "呼吸", ex: "Take a deep breath and relax.", exCn: "深呼吸并放松。" },
    { w: "breathe", pos: "v.", cn: "呼吸", ex: "It is hard to breathe at the top of the mountain.", exCn: "在山顶很难呼吸。" },
    { w: "brilliant", pos: "adj.", cn: "杰出的；明亮的", ex: "She came up with a brilliant idea.", exCn: "她想出了一个绝妙的主意。" },
    { w: "broad", pos: "adj.", cn: "宽阔的；广泛的", ex: "The river is broad here.", exCn: "这条河在这里很宽。" },
    { w: "cancel", pos: "v.", cn: "取消", ex: "The meeting was cancelled because of the rain.", exCn: "会议因下雨而取消了。" },
    { w: "careful", pos: "adj.", cn: "仔细的；小心的", ex: "Be careful when you cross the road.", exCn: "过马路时要小心。" },
    { w: "celebrate", pos: "v.", cn: "庆祝", ex: "We celebrated her birthday together.", exCn: "我们一起庆祝了她的生日。" },
    { w: "certain", pos: "adj.", cn: "确定的；某些", ex: "I am certain that he will come.", exCn: "我确信他会来。" },
    { w: "challenge", pos: "n./v.", cn: "挑战", ex: "Learning English is a challenge for me.", exCn: "学英语对我来说是一个挑战。" },
    { w: "chance", pos: "n.", cn: "机会；可能性", ex: "This is a good chance to practice English.", exCn: "这是练习英语的好机会。" },
    { w: "change", pos: "v./n.", cn: "改变；变化", ex: "Great changes have taken place in my hometown.", exCn: "我的家乡发生了巨大的变化。" },
    { w: "charge", pos: "v./n.", cn: "收费；负责", ex: "He is in charge of the project.", exCn: "他负责这个项目。" },
    { w: "choice", pos: "n.", cn: "选择", ex: "You have no choice but to wait.", exCn: "你别无选择，只能等待。" },
    { w: "choose", pos: "v.", cn: "选择", ex: "I choose to stay at home.", exCn: "我选择待在家里。" },
    { w: "collect", pos: "v.", cn: "收集", ex: "He likes collecting stamps.", exCn: "他喜欢集邮。" },
    { w: "comfort", pos: "n./v.", cn: "安慰；舒适", ex: "Her words comforted me a lot.", exCn: "她的话极大地安慰了我。" },
    { w: "communicate", pos: "v.", cn: "交流；沟通", ex: "We communicate with each other by email.", exCn: "我们通过电子邮件相互交流。" },
    { w: "compare", pos: "v.", cn: "比较", ex: "Do not compare yourself with others.", exCn: "不要拿自己和别人比较。" },
    { w: "compete", pos: "v.", cn: "竞争；比赛", ex: "Several teams will compete for the prize.", exCn: "几支队伍将争夺这个奖项。" },
    { w: "complain", pos: "v.", cn: "抱怨", ex: "He complained about the poor service.", exCn: "他抱怨服务差。" },
    { w: "complete", pos: "v./adj.", cn: "完成；完整的", ex: "I have completed all the tasks.", exCn: "我已经完成了所有任务。" },
    { w: "concentrate", pos: "v.", cn: "集中；专心", ex: "Please concentrate on your study.", exCn: "请专心学习。" },
    { w: "confident", pos: "adj.", cn: "自信的", ex: "She is confident of passing the exam.", exCn: "她有信心通过考试。" },
    { w: "connect", pos: "v.", cn: "连接；联系", ex: "The bridge connects the two cities.", exCn: "这座桥连接着两座城市。" },
    { w: "consider", pos: "v.", cn: "考虑；认为", ex: "I consider him a good friend.", exCn: "我认为他是个好朋友。" },
    { w: "consist", pos: "v.", cn: "组成；在于", ex: "The team consists of ten members.", exCn: "这个队由十名成员组成。" },
    { w: "contain", pos: "v.", cn: "包含", ex: "The box contains many books.", exCn: "这个箱子里装着许多书。" },
    { w: "continue", pos: "v.", cn: "继续", ex: "The rain continued all day.", exCn: "雨下了一整天。" },
    { w: "contribute", pos: "v.", cn: "贡献；捐助", ex: "Everyone should contribute to protecting the environment.", exCn: "每个人都应该为保护环境做贡献。" },
    { w: "convenient", pos: "adj.", cn: "方便的", ex: "It is convenient to take the subway.", exCn: "坐地铁很方便。" },
    { w: "courage", pos: "n.", cn: "勇气", ex: "He showed great courage in the face of danger.", exCn: "面对危险他表现出极大的勇气。" },
    { w: "create", pos: "v.", cn: "创造；创建", ex: "The government will create more jobs.", exCn: "政府将创造更多就业机会。" },
    { w: "culture", pos: "n.", cn: "文化", ex: "I am interested in Chinese culture.", exCn: "我对中国文化感兴趣。" },
    { w: "curious", pos: "adj.", cn: "好奇的", ex: "Children are curious about everything.", exCn: "孩子们对一切都很好奇。" },
    { w: "custom", pos: "n.", cn: "风俗；习惯", ex: "Every country has its own customs.", exCn: "每个国家都有自己的风俗。" },
    { w: "damage", pos: "v./n.", cn: "损害；破坏", ex: "The storm damaged many houses.", exCn: "暴风雨毁坏了许多房屋。" },
    { w: "decide", pos: "v.", cn: "决定", ex: "She decided to study abroad.", exCn: "她决定出国留学。" },
    { w: "decision", pos: "n.", cn: "决定", ex: "It is not easy to make a decision.", exCn: "做决定并不容易。" },
    { w: "decrease", pos: "v.", cn: "减少；降低", ex: "The number of cars has decreased.", exCn: "汽车的数量已经减少了。" },
    { w: "degree", pos: "n.", cn: "程度；学位", ex: "He got a degree in English.", exCn: "他获得了英语学位。" },
    { w: "demand", pos: "v./n.", cn: "需求；要求", ex: "The workers demanded higher pay.", exCn: "工人们要求提高工资。" },
    { w: "depend", pos: "v.", cn: "依靠；取决于", ex: "Success depends on hard work.", exCn: "成功取决于努力工作。" },
    { w: "describe", pos: "v.", cn: "描述", ex: "Can you describe what you saw?", exCn: "你能描述一下你看到的东西吗？" },
    { w: "deserve", pos: "v.", cn: "值得；应得", ex: "You deserve the prize.", exCn: "你应得这个奖。" },
    { w: "destroy", pos: "v.", cn: "破坏；毁坏", ex: "The fire destroyed the old building.", exCn: "大火摧毁了那座旧楼。" },
    { w: "develop", pos: "v.", cn: "发展；开发", ex: "China has developed rapidly in recent years.", exCn: "近年来中国发展迅速。" },
    { w: "devote", pos: "v.", cn: "奉献；致力于", ex: "He devoted himself to teaching.", exCn: "他献身于教学事业。" },
    { w: "difference", pos: "n.", cn: "差异；不同", ex: "There is a big difference between the two words.", exCn: "这两个词有很大的区别。" },
    { w: "difficult", pos: "adj.", cn: "困难的", ex: "The problem is difficult to solve.", exCn: "这个问题很难解决。" },
    { w: "direction", pos: "n.", cn: "方向；指导", ex: "He walked in the wrong direction.", exCn: "他走错了方向。" },
    { w: "discover", pos: "v.", cn: "发现", ex: "Columbus discovered America in 1492.", exCn: "哥伦布于 1492 年发现了美洲。" },
    { w: "discuss", pos: "v.", cn: "讨论", ex: "We discussed the plan at the meeting.", exCn: "我们在会上讨论了这个计划。" },
    { w: "distance", pos: "n.", cn: "距离", ex: "The distance between the two cities is 100 kilometers.", exCn: "这两座城市之间的距离是 100 公里。" },
    { w: "disturb", pos: "v.", cn: "打扰；扰乱", ex: "Do not disturb me while I am working.", exCn: "我工作时不要打扰我。" },
    { w: "divide", pos: "v.", cn: "划分；分开", ex: "The teacher divided the class into four groups.", exCn: "老师把全班分成四组。" },
    { w: "doubt", pos: "v./n.", cn: "怀疑", ex: "I have no doubt that he will succeed.", exCn: "我毫不怀疑他会成功。" },
    { w: "earn", pos: "v.", cn: "赚得；赢得", ex: "He earns a living by teaching.", exCn: "他靠教书谋生。" },
    { w: "education", pos: "n.", cn: "教育", ex: "Education is important for everyone.", exCn: "教育对每个人都很重要。" },
    { w: "effort", pos: "n.", cn: "努力", ex: "Success requires great effort.", exCn: "成功需要巨大的努力。" },
    { w: "encourage", pos: "v.", cn: "鼓励", ex: "My teacher encouraged me to try again.", exCn: "老师鼓励我再试一次。" },
    { w: "energy", pos: "n.", cn: "能量；精力", ex: "Young people are full of energy.", exCn: "年轻人充满活力。" },
    { w: "enjoy", pos: "v.", cn: "享受；喜欢", ex: "I enjoy listening to music.", exCn: "我喜欢听音乐。" },
    { w: "environment", pos: "n.", cn: "环境", ex: "We should protect the environment.", exCn: "我们应该保护环境。" },
    { w: "especially", pos: "adv.", cn: "尤其；特别", ex: "I like fruits, especially apples.", exCn: "我喜欢水果，尤其是苹果。" },
    { w: "establish", pos: "v.", cn: "建立；创立", ex: "The company was established in 1990.", exCn: "这家公司成立于 1990 年。" },
    { w: "examine", pos: "v.", cn: "检查；考试", ex: "The doctor examined the patient carefully.", exCn: "医生仔细地检查了病人。" },
    { w: "excellent", pos: "adj.", cn: "优秀的；极好的", ex: "He is an excellent student.", exCn: "他是一名优秀的学生。" },
    { w: "exchange", pos: "v./n.", cn: "交换；交流", ex: "We exchanged our ideas at the meeting.", exCn: "我们在会上交换了意见。" },
    { w: "excited", pos: "adj.", cn: "兴奋的", ex: "The children were excited about the trip.", exCn: "孩子们对这次旅行很兴奋。" },
    { w: "expect", pos: "v.", cn: "期望；预料", ex: "I expect to finish the work soon.", exCn: "我期望很快完成工作。" },
    { w: "experience", pos: "n.", cn: "经验；经历", ex: "He has much experience in teaching.", exCn: "他在教学方面经验丰富。" },
    { w: "experiment", pos: "n.", cn: "实验", ex: "We did an experiment in the lab.", exCn: "我们在实验室做了一个实验。" },
    { w: "explain", pos: "v.", cn: "解释", ex: "Can you explain the rule to me?", exCn: "你能给我解释一下这条规则吗？" },
    { w: "express", pos: "v.", cn: "表达", ex: "It is hard to express my feelings in words.", exCn: "很难用语言表达我的感受。" },
    { w: "familiar", pos: "adj.", cn: "熟悉的", ex: "I am familiar with this song.", exCn: "我很熟悉这首歌。" },
    { w: "famous", pos: "adj.", cn: "著名的", ex: "Chongqing is famous for its hot pot.", exCn: "重庆以火锅闻名。" },
    { w: "favor", pos: "n.", cn: "恩惠；帮助", ex: "Could you do me a favor?", exCn: "你能帮我一个忙吗？" },
    { w: "favorite", pos: "adj.", cn: "最喜爱的", ex: "English is my favorite subject.", exCn: "英语是我最喜欢的科目。" },
    { w: "finally", pos: "adv.", cn: "最后；终于", ex: "Finally, we solved the problem.", exCn: "最后，我们解决了这个问题。" },
    { w: "focus", pos: "v.", cn: "集中；聚焦", ex: "You should focus on your study.", exCn: "你应该专注于你的学习。" },
    { w: "follow", pos: "v.", cn: "跟随；遵循", ex: "Follow me, please.", exCn: "请跟我来。" },
    { w: "foreign", pos: "adj.", cn: "外国的", ex: "He can speak two foreign languages.", exCn: "他会说两门外语。" },
    { w: "forgive", pos: "v.", cn: "原谅", ex: "Please forgive me for being late.", exCn: "请原谅我迟到了。" },
    { w: "fortunate", pos: "adj.", cn: "幸运的", ex: "I am fortunate to have such good friends.", exCn: "我很幸运有这样好的朋友。" },
    { w: "freedom", pos: "n.", cn: "自由", ex: "Everyone longs for freedom.", exCn: "每个人都渴望自由。" },
    { w: "frequently", pos: "adv.", cn: "频繁地", ex: "He frequently goes to the library.", exCn: "他经常去图书馆。" },
    { w: "gain", pos: "v.", cn: "获得；增加", ex: "We gained a lot from the experience.", exCn: "我们从这次经历中收获很多。" },
    { w: "gather", pos: "v.", cn: "聚集；收集", ex: "People gathered to watch the game.", exCn: "人们聚集起来观看比赛。" },
    { w: "generous", pos: "adj.", cn: "慷慨的；大方的", ex: "He is generous with his time.", exCn: "他慷慨地付出自己的时间。" },
    { w: "goal", pos: "n.", cn: "目标；球门", ex: "My goal is to pass the exam.", exCn: "我的目标是考试及格。" },
    { w: "graduate", pos: "v.", cn: "毕业", ex: "She graduated from a famous university.", exCn: "她毕业于一所著名的大学。" },
    { w: "grateful", pos: "adj.", cn: "感激的", ex: "I am grateful for your kindness.", exCn: "我感激你的好意。" },
    { w: "habit", pos: "n.", cn: "习惯", ex: "Reading is a good habit.", exCn: "阅读是个好习惯。" },
    { w: "handle", pos: "v.", cn: "处理；操作", ex: "He knows how to handle the problem.", exCn: "他知道如何处理这个问题。" },
    { w: "hardly", pos: "adv.", cn: "几乎不", ex: "I can hardly hear you.", exCn: "我几乎听不见你说话。" },
    { w: "harm", pos: "n./v.", cn: "伤害；损害", ex: "Smoking does harm to your health.", exCn: "吸烟有害健康。" },
    { w: "harvest", pos: "n.", cn: "收获；收成", ex: "The farmers had a good harvest this year.", exCn: "农民们今年获得了丰收。" },
    { w: "hesitate", pos: "v.", cn: "犹豫", ex: "Do not hesitate to ask for help.", exCn: "不要犹豫，尽管求助。" },
    { w: "honest", pos: "adj.", cn: "诚实的", ex: "He is an honest boy.", exCn: "他是个诚实的男孩。" },
    { w: "honor", pos: "n.", cn: "荣誉；尊敬", ex: "It is a great honor to speak here.", exCn: "在这里发言是我的荣幸。" },
    { w: "however", pos: "adv.", cn: "然而；无论如何", ex: "However, the problem still exists.", exCn: "然而，问题依然存在。" },
    { w: "imagine", pos: "v.", cn: "想象", ex: "Can you imagine living on the moon?", exCn: "你能想象在月球上生活吗？" },
    { w: "immediate", pos: "adj.", cn: "立即的；直接的", ex: "We need an immediate answer.", exCn: "我们需要立即答复。" },
    { w: "improve", pos: "v.", cn: "提高；改善", ex: "Reading can improve your writing.", exCn: "阅读能提高你的写作水平。" },
    { w: "include", pos: "v.", cn: "包括", ex: "The price includes breakfast.", exCn: "这个价格包括早餐。" },
    { w: "increase", pos: "v.", cn: "增加；增长", ex: "The population is increasing rapidly.", exCn: "人口正在迅速增长。" },
    { w: "independent", pos: "adj.", cn: "独立的", ex: "She is an independent young woman.", exCn: "她是一个独立的年轻女性。" },
    { w: "influence", pos: "n./v.", cn: "影响", ex: "Parents have a great influence on children.", exCn: "父母对孩子有很大的影响。" },
    { w: "insist", pos: "v.", cn: "坚持", ex: "He insisted on paying the bill.", exCn: "他坚持要付账。" },
    { w: "inspire", pos: "v.", cn: "激励；鼓舞", ex: "Her story inspired many people.", exCn: "她的故事激励了许多人。" },
    { w: "introduce", pos: "v.", cn: "介绍；引进", ex: "Let me introduce my friend to you.", exCn: "让我把我的朋友介绍给你。" },
    { w: "invite", pos: "v.", cn: "邀请", ex: "They invited me to their party.", exCn: "他们邀请我参加他们的聚会。" },
    { w: "knowledge", pos: "n.", cn: "知识", ex: "Knowledge is power.", exCn: "知识就是力量。" },
    { w: "lead", pos: "v.", cn: "带领；导致", ex: "Hard work leads to success.", exCn: "努力工作通向成功。" },
    { w: "lend", pos: "v.", cn: "借出", ex: "Could you lend me your pen?", exCn: "你能把钢笔借给我吗？" },
    { w: "local", pos: "adj.", cn: "当地的", ex: "We visited a local school.", exCn: "我们参观了一所当地学校。" },
    { w: "manage", pos: "v.", cn: "管理；设法做到", ex: "He managed to finish the work on time.", exCn: "他设法按时完成了工作。" },
    { w: "mention", pos: "v.", cn: "提到；说起", ex: "He mentioned the plan in his letter.", exCn: "他在信中提到了这个计划。" },
    { w: "method", pos: "n.", cn: "方法", ex: "This is a good method to learn words.", exCn: "这是记单词的好方法。" },
    { w: "modern", pos: "adj.", cn: "现代的", ex: "The city has many modern buildings.", exCn: "这座城市有许多现代建筑。" },
    { w: "necessary", pos: "adj.", cn: "必要的", ex: "It is necessary to get enough sleep.", exCn: "充足的睡眠是必要的。" },
    { w: "notice", pos: "v./n.", cn: "注意；通知", ex: "I noticed that he was very tired.", exCn: "我注意到他很累。" },
    { w: "offer", pos: "v./n.", cn: "提供；提议", ex: "He offered me a cup of tea.", exCn: "他给了我一杯茶。" },
    { w: "opinion", pos: "n.", cn: "观点；意见", ex: "In my opinion, he is right.", exCn: "在我看来，他是对的。" },
    { w: "opportunity", pos: "n.", cn: "机会", ex: "This is a good opportunity to learn.", exCn: "这是学习的好机会。" },
    { w: "organize", pos: "v.", cn: "组织", ex: "They organized a charity activity.", exCn: "他们组织了一次慈善活动。" },
    { w: "overcome", pos: "v.", cn: "克服", ex: "We must overcome these difficulties.", exCn: "我们必须克服这些困难。" },
    { w: "particular", pos: "adj.", cn: "特别的；特定的", ex: "There is no particular reason.", exCn: "没有什么特别的理由。" },
    { w: "patient", pos: "adj./n.", cn: "耐心的；病人", ex: "The teacher is very patient with students.", exCn: "老师对学生很有耐心。" },
    { w: "persuade", pos: "v.", cn: "说服", ex: "I persuaded him to join us.", exCn: "我说服他加入我们。" },
    { w: "popular", pos: "adj.", cn: "受欢迎的；流行的", ex: "This song is popular among young people.", exCn: "这首歌在年轻人中很流行。" },
    { w: "positive", pos: "adj.", cn: "积极的；肯定的", ex: "Keep a positive attitude towards life.", exCn: "对生活保持积极的态度。" },
    { w: "practice", pos: "n./v.", cn: "练习；实践", ex: "Practice makes perfect.", exCn: "熟能生巧。" },
    { w: "prefer", pos: "v.", cn: "更喜欢", ex: "I prefer tea to coffee.", exCn: "比起咖啡，我更喜欢茶。" },
    { w: "prepare", pos: "v.", cn: "准备", ex: "She is preparing for the exam.", exCn: "她正在为考试做准备。" },
    { w: "prevent", pos: "v.", cn: "阻止；预防", ex: "The rain prevented us from going out.", exCn: "下雨使我们无法外出。" },
    { w: "promise", pos: "v./n.", cn: "承诺；诺言", ex: "He promised to help me.", exCn: "他答应帮助我。" },
    { w: "protect", pos: "v.", cn: "保护", ex: "We should protect wild animals.", exCn: "我们应该保护野生动物。" },
    { w: "provide", pos: "v.", cn: "提供", ex: "The school provides students with free books.", exCn: "学校为学生提供免费书籍。" },
    { w: "realize", pos: "v.", cn: "意识到；实现", ex: "I realized my mistake at last.", exCn: "我终于意识到了自己的错误。" },
    { w: "receive", pos: "v.", cn: "收到", ex: "I received a letter from my friend.", exCn: "我收到了朋友的一封信。" },
    { w: "recognize", pos: "v.", cn: "认出；承认", ex: "I recognized him at once.", exCn: "我立刻认出了他。" },
    { w: "recommend", pos: "v.", cn: "推荐；建议", ex: "I recommend this book to you.", exCn: "我向你推荐这本书。" },
    { w: "reduce", pos: "v.", cn: "减少；降低", ex: "We should reduce the use of plastic.", exCn: "我们应该减少使用塑料。" },
    { w: "refuse", pos: "v.", cn: "拒绝", ex: "He refused to answer the question.", exCn: "他拒绝回答这个问题。" },
    { w: "regard", pos: "v.", cn: "认为；看待", ex: "I regard him as my best friend.", exCn: "我把他当作最好的朋友。" },
    { w: "regret", pos: "v.", cn: "后悔；遗憾", ex: "I regret telling him the truth.", exCn: "我后悔告诉了他真相。" },
    { w: "relax", pos: "v.", cn: "放松", ex: "Music can help you relax.", exCn: "音乐能帮助你放松。" },
    { w: "remind", pos: "v.", cn: "提醒；使想起", ex: "The photo reminds me of my childhood.", exCn: "这张照片使我想起了童年。" },
    { w: "require", pos: "v.", cn: "要求；需要", ex: "The job requires patience.", exCn: "这份工作需要耐心。" },
    { w: "respect", pos: "v./n.", cn: "尊重；尊敬", ex: "We should respect the old.", exCn: "我们应该尊敬老人。" },
    { w: "responsible", pos: "adj.", cn: "负责的", ex: "He is responsible for the project.", exCn: "他负责这个项目。" },
    { w: "satisfy", pos: "v.", cn: "使满意；满足", ex: "The answer satisfied the teacher.", exCn: "这个答案让老师满意。" },
    { w: "separate", pos: "v./adj.", cn: "分开；单独的", ex: "The teacher separated the two boys.", exCn: "老师把那两个男孩分开了。" },
    { w: "serious", pos: "adj.", cn: "严肃的；严重的", ex: "The situation is very serious.", exCn: "情况非常严重。" },
    { w: "share", pos: "v.", cn: "分享", ex: "She shared her lunch with me.", exCn: "她和我分享了午餐。" },
    { w: "situation", pos: "n.", cn: "情况；形势", ex: "The situation is getting better.", exCn: "情况正在好转。" },
    { w: "society", pos: "n.", cn: "社会", ex: "Everyone should contribute to society.", exCn: "每个人都应该为社会做贡献。" },
    { w: "solve", pos: "v.", cn: "解决", ex: "We solved the problem together.", exCn: "我们一起解决了这个问题。" },
    { w: "spend", pos: "v.", cn: "花费；度过", ex: "I spent two hours reading.", exCn: "我花了两小时读书。" },
    { w: "success", pos: "n.", cn: "成功", ex: "Failure is the mother of success.", exCn: "失败是成功之母。" },
    { w: "suggest", pos: "v.", cn: "建议", ex: "I suggest going there by bus.", exCn: "我建议坐公交车去那里。" },
    { w: "support", pos: "v./n.", cn: "支持", ex: "Thank you for your support.", exCn: "谢谢你的支持。" }
    ,
    { w: "succeed", pos: "v.", cn: "成功", ex: "If you work hard, you will succeed.", exCn: "如果你努力工作，你就会成功。" },
    { w: "supply", pos: "v./n.", cn: "供应；供给", ex: "The store supplies us with fresh food.", exCn: "这家商店为我们供应新鲜食品。" },
    { w: "suppose", pos: "v.", cn: "假设；认为", ex: "I suppose he is right.", exCn: "我认为他是对的。" },
    { w: "survive", pos: "v.", cn: "幸存；存活", ex: "Few plants can survive in the desert.", exCn: "很少有植物能在沙漠中存活。" },
    { w: "talent", pos: "n.", cn: "天赋；才能", ex: "She has a talent for music.", exCn: "她有音乐天赋。" },
    { w: "therefore", pos: "adv.", cn: "因此", ex: "He was ill, therefore he stayed at home.", exCn: "他病了，因此待在家里。" },
    { w: "tradition", pos: "n.", cn: "传统", ex: "It is a tradition to eat dumplings during the Spring Festival.", exCn: "春节吃饺子是一种传统。" },
    { w: "translate", pos: "v.", cn: "翻译", ex: "Please translate the sentence into English.", exCn: "请把这个句子翻译成英语。" },
    { w: "treasure", pos: "n.", cn: "珍宝；财富", ex: "Health is our greatest treasure.", exCn: "健康是我们最大的财富。" },
    { w: "trust", pos: "v./n.", cn: "信任", ex: "I trust him completely.", exCn: "我完全信任他。" },
    { w: "value", pos: "n./v.", cn: "价值；重视", ex: "This book is of great value to me.", exCn: "这本书对我很有价值。" },
    { w: "various", pos: "adj.", cn: "各种各样的", ex: "There are various books in the library.", exCn: "图书馆里有各种各样的书。" },
    { w: "volunteer", pos: "n./v.", cn: "志愿者；自愿", ex: "She works as a volunteer at the hospital.", exCn: "她在医院做志愿者。" },
    { w: "wealth", pos: "n.", cn: "财富", ex: "Health is more important than wealth.", exCn: "健康比财富更重要。" },
    { w: "wonder", pos: "v./n.", cn: "想知道；奇迹", ex: "I wonder if he will come.", exCn: "我想知道他是否会来。" },
    { w: "worth", pos: "adj.", cn: "值得的", ex: "The film is worth seeing.", exCn: "这部电影值得一看。" },
    { w: "wisdom", pos: "n.", cn: "智慧", ex: "Experience brings wisdom.", exCn: "经验带来智慧。" },
    { w: "willing", pos: "adj.", cn: "乐意的", ex: "He is willing to help others.", exCn: "他乐于助人。" },
    { w: "quality", pos: "n.", cn: "质量；品质", ex: "The quality of the product is good.", exCn: "这个产品的质量很好。" },
    { w: "quantity", pos: "n.", cn: "数量", ex: "Quality is more important than quantity.", exCn: "质量比数量更重要。" }
],
    phrases: [    { p: "in charge of", cn: "负责", ex: "He is in charge of the sales department.", exCn: "他负责销售部。" },
    { p: "in addition to", cn: "除……之外", ex: "In addition to English, he speaks French.", exCn: "除英语外，他还会说法语。" },
    { p: "in spite of", cn: "尽管", ex: "In spite of the rain, they went out.", exCn: "尽管下雨，他们还是出去了。" },
    { p: "instead of", cn: "代替；而不是", ex: "Let us walk instead of taking a bus.", exCn: "我们走路而不是坐公交车吧。" },
    { p: "as a result", cn: "结果；因此", ex: "He studied hard; as a result, he passed the exam.", exCn: "他努力学习，结果通过了考试。" },
    { p: "as well as", cn: "也；和", ex: "She sings as well as dances.", exCn: "她既会唱歌也会跳舞。" },
    { p: "at present", cn: "目前", ex: "At present, he is studying in Chongqing.", exCn: "目前，他在重庆学习。" },
    { p: "at the same time", cn: "同时", ex: "You cannot do two things at the same time.", exCn: "你不能同时做两件事。" },
    { p: "be fond of", cn: "喜欢", ex: "She is fond of reading novels.", exCn: "她喜欢读小说。" },
    { p: "be interested in", cn: "对……感兴趣", ex: "He is interested in science.", exCn: "他对科学感兴趣。" },
    { p: "be good at", cn: "擅长", ex: "I am good at English.", exCn: "我擅长英语。" },
    { p: "be proud of", cn: "为……自豪", ex: "We are proud of our country.", exCn: "我们为祖国感到自豪。" },
    { p: "be used to", cn: "习惯于", ex: "He is used to getting up early.", exCn: "他习惯早起。" },
    { p: "be familiar with", cn: "熟悉", ex: "I am familiar with this city.", exCn: "我熟悉这座城市。" },
    { p: "be different from", cn: "与……不同", ex: "His plan is different from mine.", exCn: "他的计划与我的不同。" },
    { p: "be famous for", cn: "因……而著名", ex: "The city is famous for its beautiful scenery.", exCn: "这座城市以美丽的风景而闻名。" },
    { p: "be full of", cn: "充满", ex: "The room is full of people.", exCn: "房间里挤满了人。" },
    { p: "be busy with", cn: "忙于", ex: "She is busy with her homework.", exCn: "她忙于做作业。" },
    { p: "be worried about", cn: "担心", ex: "Parents are always worried about their children.", exCn: "父母总是担心他们的孩子。" },
    { p: "be made of", cn: "由……制成（看得出原料）", ex: "The desk is made of wood.", exCn: "这张桌子是木头做的。" },
    { p: "be made from", cn: "由……制成（看不出原料）", ex: "Paper is made from wood.", exCn: "纸是由木材制成的。" },
    { p: "belong to", cn: "属于", ex: "This book belongs to me.", exCn: "这本书属于我。" },
    { p: "by the way", cn: "顺便说一下", ex: "By the way, have you seen my pen?", exCn: "顺便问一下，你看到我的钢笔了吗？" },
    { p: "carry out", cn: "执行；实施", ex: "They carried out the plan successfully.", exCn: "他们成功地实施了计划。" },
    { p: "catch up with", cn: "赶上", ex: "Work hard to catch up with others.", exCn: "努力学习以赶上别人。" },
    { p: "come true", cn: "实现", ex: "I hope your dream will come true.", exCn: "我希望你的梦想会实现。" },
    { p: "come up with", cn: "想出；提出", ex: "He came up with a good idea.", exCn: "他想出了一个好主意。" },
    { p: "depend on", cn: "依靠；取决于", ex: "Children depend on their parents.", exCn: "孩子们依靠父母。" },
    { p: "deal with", cn: "处理", ex: "He knows how to deal with the problem.", exCn: "他知道如何处理这个问题。" },
    { p: "devote oneself to", cn: "致力于", ex: "She devoted herself to education.", exCn: "她献身于教育事业。" },
    { p: "do one's best", cn: "尽力", ex: "I will do my best to help you.", exCn: "我会尽力帮助你。" },
    { p: "due to", cn: "由于", ex: "The match was put off due to the rain.", exCn: "比赛因下雨而推迟了。" },
    { p: "end up", cn: "结束；告终", ex: "The meeting ended up in failure.", exCn: "会议以失败告终。" },
    { p: "even if", cn: "即使", ex: "I will go even if it rains.", exCn: "即使下雨我也要去。" },
    { p: "find out", cn: "查明；发现", ex: "Please find out when the train leaves.", exCn: "请查明火车何时开。" },
    { p: "for example", cn: "例如", ex: "Many students, for example, Tom, like English.", exCn: "许多学生，例如汤姆，喜欢英语。" },
    { p: "get along with", cn: "与……相处", ex: "He gets along well with his classmates.", exCn: "他和同学们相处得很好。" },
    { p: "get rid of", cn: "摆脱；去除", ex: "We should get rid of bad habits.", exCn: "我们应该改掉坏习惯。" },
    { p: "give up", cn: "放弃", ex: "Never give up your dream.", exCn: "永远不要放弃你的梦想。" },
    { p: "go on", cn: "继续", ex: "Let us go on with our discussion.", exCn: "让我们继续讨论吧。" },
    { p: "grow up", cn: "长大", ex: "I want to be a doctor when I grow up.", exCn: "我长大后想当一名医生。" },
    { p: "had better", cn: "最好", ex: "You had better go to bed early.", exCn: "你最好早点睡觉。" },
    { p: "hand in", cn: "上交", ex: "Please hand in your homework on time.", exCn: "请按时上交作业。" },
    { p: "have nothing to do with", cn: "与……无关", ex: "The accident has nothing to do with me.", exCn: "这次事故与我无关。" },
    { p: "in fact", cn: "事实上", ex: "In fact, he is very kind.", exCn: "事实上，他很善良。" },
    { p: "in front of", cn: "在……前面", ex: "There is a tree in front of the house.", exCn: "房子前面有一棵树。" },
    { p: "in order to", cn: "为了", ex: "He got up early in order to catch the bus.", exCn: "为了赶公交车，他起得很早。" },
    { p: "in other words", cn: "换句话说", ex: "In other words, he failed the exam.", exCn: "换句话说，他考试不及格。" },
    { p: "in the future", cn: "在将来", ex: "I will work harder in the future.", exCn: "将来我会更加努力。" },
    { p: "in time", cn: "及时", ex: "We arrived at the station in time.", exCn: "我们及时到达了车站。" },
    { p: "keep on", cn: "继续", ex: "He kept on working until midnight.", exCn: "他一直工作到午夜。" },
    { p: "keep up with", cn: "跟上", ex: "Read more to keep up with the times.", exCn: "多读书以跟上时代。" },
    { p: "lead to", cn: "导致；通向", ex: "Carelessness can lead to failure.", exCn: "粗心会导致失败。" },
    { p: "look after", cn: "照顾", ex: "She looks after her little brother.", exCn: "她照顾她的小弟弟。" },
    { p: "look down upon", cn: "看不起", ex: "Never look down upon others.", exCn: "永远不要看不起别人。" },
    { p: "look forward to", cn: "盼望", ex: "I am looking forward to your reply.", exCn: "我盼望着你的回复。" },
    { p: "look up", cn: "查阅；抬头看", ex: "Look up the new word in the dictionary.", exCn: "在词典里查这个生词。" },
    { p: "make a decision", cn: "做决定", ex: "It is time to make a decision.", exCn: "是做决定的时候了。" },
    { p: "make friends with", cn: "与……交朋友", ex: "He likes making friends with others.", exCn: "他喜欢和别人交朋友。" },
    { p: "make progress", cn: "取得进步", ex: "She has made great progress in English.", exCn: "她在英语上取得了很大进步。" },
    { p: "make sense", cn: "有意义；讲得通", ex: "What he said makes sense.", exCn: "他说的话有道理。" },
    { p: "make up one's mind", cn: "下定决心", ex: "He made up his mind to study hard.", exCn: "他下定决心努力学习。" },
    { p: "on the one hand", cn: "一方面", ex: "On the one hand, the job is easy.", exCn: "一方面，这份工作很轻松。" },
    { p: "on the other hand", cn: "另一方面", ex: "On the other hand, the pay is low.", exCn: "另一方面，工资很低。" },
    { p: "on time", cn: "准时", ex: "Please come to class on time.", exCn: "请准时来上课。" },
    { p: "pay attention to", cn: "注意", ex: "Pay attention to your pronunciation.", exCn: "注意你的发音。" },
    { p: "pick up", cn: "捡起；学会", ex: "She picked up some English in London.", exCn: "她在伦敦学会了一些英语。" },
    { p: "point out", cn: "指出", ex: "The teacher pointed out my mistakes.", exCn: "老师指出了我的错误。" },
    { p: "put forward", cn: "提出", ex: "He put forward a good suggestion.", exCn: "他提出了一个好建议。" },
    { p: "put off", cn: "推迟", ex: "The meeting was put off until next week.", exCn: "会议被推迟到下周。" },
    { p: "put up with", cn: "忍受", ex: "I cannot put up with the noise.", exCn: "我无法忍受这噪音。" },
    { p: "rather than", cn: "而不是", ex: "I would stay at home rather than go out.", exCn: "我宁愿待在家里也不愿出去。" },
    { p: "remind sb of", cn: "提醒某人；使想起", ex: "The song reminds me of my hometown.", exCn: "这首歌使我想起了家乡。" },
    { p: "run out of", cn: "用完", ex: "We have run out of water.", exCn: "我们的水用完了。" },
    { p: "set up", cn: "建立；设立", ex: "They set up a new school.", exCn: "他们建立了一所新学校。" },
    { p: "show up", cn: "出现；露面", ex: "He did not show up at the meeting.", exCn: "他没有在会议上露面。" },
    { p: "so far", cn: "到目前为止", ex: "So far, everything is going well.", exCn: "到目前为止，一切顺利。" },
    { p: "stand for", cn: "代表", ex: "What does UN stand for?", exCn: "UN 代表什么？" },
    { p: "take action", cn: "采取行动", ex: "We must take action to protect the environment.", exCn: "我们必须采取行动保护环境。" },
    { p: "take care of", cn: "照顾", ex: "Please take care of yourself.", exCn: "请照顾好自己。" },
    { p: "take part in", cn: "参加", ex: "Many students took part in the activity.", exCn: "许多学生参加了这次活动。" },
    { p: "take place", cn: "发生；举行", ex: "The story took place in a small village.", exCn: "这个故事发生在一个小村庄。" },
    { p: "take turns", cn: "轮流", ex: "We take turns to clean the classroom.", exCn: "我们轮流打扫教室。" },
    { p: "thanks to", cn: "多亏；由于", ex: "Thanks to your help, I passed the exam.", exCn: "多亏你的帮助，我通过了考试。" },
    { p: "turn down", cn: "拒绝；调低", ex: "He turned down my invitation.", exCn: "他拒绝了我的邀请。" },
    { p: "turn off", cn: "关闭", ex: "Please turn off the light when you leave.", exCn: "离开时请关灯。" },
    { p: "turn on", cn: "打开", ex: "Turn on the TV, please.", exCn: "请打开电视。" },
    { p: "turn out", cn: "结果是；证明是", ex: "The news turned out to be false.", exCn: "这个消息结果证明是假的。" },
    { p: "turn up", cn: "出现；调高", ex: "He turned up at the party at last.", exCn: "他最终在聚会上出现了。" },
    { p: "use up", cn: "用完", ex: "We have used up all the money.", exCn: "我们把所有的钱都用完了。" },
    { p: "work out", cn: "解决；算出", ex: "Can you work out this math problem?", exCn: "你能算出这道数学题吗？" }
],
    sentences: [    { en: "It is important for us to learn English well.", cn: "对我们来说，学好英语很重要。", topic: "写作" },
    { en: "As far as I am concerned, health comes first.", cn: "就我而言，健康第一。", topic: "写作" },
    { en: "There is no doubt that hard work leads to success.", cn: "毫无疑问，努力工作通向成功。", topic: "写作" },
    { en: "It is well known that practice makes perfect.", cn: "众所周知，熟能生巧。", topic: "写作" },
    { en: "The more you read, the more you will learn.", cn: "你读得越多，学到的就越多。", topic: "写作" },
    { en: "Only in this way can we protect the environment.", cn: "只有这样我们才能保护环境。", topic: "写作" },
    { en: "Not only does he study hard, but he also helps others.", cn: "他不仅学习努力，而且还帮助别人。", topic: "写作" },
    { en: "What I want to say is that we should never give up.", cn: "我想说的是，我们永远不应该放弃。", topic: "写作" },
    { en: "I am writing to apply for the position of assistant.", cn: "我写信是想申请助理这个职位。", topic: "翻译" },
    { en: "I would appreciate it if you could reply early.", cn: "如果您能尽早回复，我将不胜感激。", topic: "写作" },
    { en: "It is high time that we took action to solve the problem.", cn: "该是我们采取行动解决问题的时候了。", topic: "写作" },
    { en: "Nothing is more important than health.", cn: "没有什么比健康更重要。", topic: "写作" },
    { en: "Compared with others, he is more hardworking.", cn: "与别人相比，他更勤奋。", topic: "写作" },
    { en: "Where there is a will, there is a way.", cn: "有志者事竟成。", topic: "口语" },
    { en: "I am looking forward to your early reply.", cn: "我期待你的早日回复。", topic: "写作" },
    { en: "Thanks to your help, I made great progress.", cn: "多亏你的帮助，我取得了很大进步。", topic: "写作" },
    { en: "It took me two hours to finish the work.", cn: "我花了两个小时完成这项工作。", topic: "翻译" },
    { en: "He spends a lot of time reading every day.", cn: "他每天花很多时间读书。", topic: "翻译" },
    { en: "The harder you work, the better result you will get.", cn: "你越努力，结果就越好。", topic: "写作" },
    { en: "I cannot help thinking of my hometown.", cn: "我情不自禁地想起家乡。", topic: "翻译" },
    { en: "It is said that the book has been translated into many languages.", cn: "据说这本书已被译成多种语言。", topic: "翻译" },
    { en: "Would you mind my opening the window?", cn: "你介意我打开窗户吗？", topic: "口语" },
    { en: "I am not only a student but also a volunteer.", cn: "我不仅是一名学生，也是一名志愿者。", topic: "写作" },
    { en: "What a beautiful city it is!", cn: "多么美丽的城市啊！", topic: "口语" },
    { en: "It is the first time that I have been to Beijing.", cn: "这是我第一次去北京。", topic: "翻译" },
    { en: "He was about to leave when it began to rain.", cn: "他正要离开时，天开始下雨了。", topic: "翻译" },
    { en: "Hardly had I got home when it rained.", cn: "我刚到家就下雨了。", topic: "翻译" },
    { en: "I prefer to stay at home rather than go out.", cn: "我宁愿待在家里也不愿出去。", topic: "翻译" },
    { en: "The reason why he was late is that he missed the bus.", cn: "他迟到的原因是他错过了公交车。", topic: "写作" },
    { en: "It is no use crying over spilt milk.", cn: "覆水难收；后悔无益。", topic: "口语" },
    { en: "Reading is to the mind what food is to the body.", cn: "读书之于心灵，犹如食物之于身体。", topic: "写作" },
    { en: "I find it difficult to learn grammar well.", cn: "我发现学好语法很难。", topic: "翻译" },
    { en: "With the development of technology, our life is becoming more convenient.", cn: "随着科技的发展，我们的生活变得越来越便利。", topic: "写作" },
    { en: "In a word, we should protect the environment.", cn: "总之，我们应该保护环境。", topic: "写作" },
    { en: "First of all, we should have a clear goal.", cn: "首先，我们应该有一个明确的目标。", topic: "写作" },
    { en: "To sum up, health comes first.", cn: "总而言之，健康第一。", topic: "写作" },
    { en: "I suggest that we should plant more trees.", cn: "我建议我们应该多种树。", topic: "写作" },
    { en: "It is our duty to protect the environment.", cn: "保护环境是我们的责任。", topic: "写作" },
    { en: "As the saying goes, no pains, no gains.", cn: "俗话说，一分耕耘，一分收获。", topic: "写作" },
    { en: "He has made up his mind to study abroad.", cn: "他已下定决心出国留学。", topic: "翻译" },
    { en: "The book is so interesting that I have read it twice.", cn: "这本书如此有趣，我已经读了两遍。", topic: "翻译" },
    { en: "It is necessary for everyone to form a good habit.", cn: "对每个人来说，养成好习惯都是必要的。", topic: "写作" },
    { en: "As long as we work together, we can overcome any difficulty.", cn: "只要我们齐心协力，就能克服任何困难。", topic: "写作" },
    { en: "In my opinion, reading is a good way to relax.", cn: "在我看来，阅读是一种放松的好方式。", topic: "写作" }
]
  },
  writing: [    {
      id: "w1",
      type: "书信",
      structure: "称呼（Dear + 人名/称呼，后用逗号）→ 正文（开头问候+目的，主体展开，结尾致谢/期待）→ 结束语（Yours sincerely / Yours faithfully）→ 签名与日期。",
      template: "Dear ____,\nI am writing to ____.\n...（正文）...\nI am looking forward to your reply.\nYours sincerely,\nLi Hua",
      sample: "Dear Mr. Smith,\nI am writing to thank you for your help during my stay in London.\nI really enjoyed my time with you. Your kindness made my trip unforgettable.\nI hope you can visit China someday.\nI am looking forward to your reply.\nYours sincerely,\nLi Hua",
      tips: "称呼后用逗号；结尾 Yours sincerely 用于知道对方姓名，Yours faithfully 用于 Dear Sir/Madam；落款署英文名（如 Li Hua）。"
    },
    {
      id: "w2",
      type: "电子邮件",
      structure: "主题行（Subject）→ 称呼 → 正文（简洁明了）→ 结束语 → 署名；语气视对象而定（正式或随意）。",
      template: "Subject: ____\nDear ____,\nI am writing to ____.\n...（正文）...\nBest regards,\nLi Hua",
      sample: "Subject: Asking for Information\nDear Sir or Madam,\nI am writing to ask for some information about your English course.\nCould you tell me when the course begins and how much it costs?\nI would appreciate it if you could reply as soon as possible.\nBest regards,\nLi Hua",
      tips: "邮件必须有清晰的 Subject 主题行；正文要直入主题，避免冗长；商务邮件用 Best regards，朋友间可用 Best wishes / Yours。"
    },
    {
      id: "w3",
      type: "通知/告示",
      structure: "标题（Notice 居中）→ 正文（时间、地点、事由、参加者、要求等要素）→ 落款（发布单位）→ 日期。",
      template: "NOTICE\n...（正文：活动名称、时间、地点、内容、注意事项）...\nThe Students' Union\nJune 1, 2026",
      sample: "NOTICE\nIn order to improve our English, the Students' Union will hold an English speech contest in the school hall at 7:00 p.m. on June 10.\nAll students are welcome to take part. Those who are interested should sign up before June 5.\nThe Students' Union\nJune 1, 2026",
      tips: "通知要写清五要素（时间、地点、人物、事件、要求）；标题 NOTICE 居中大写；落款为发布单位，日期置于单位下方或上方。"
    },
    {
      id: "w4",
      type: "申请信",
      structure: "称呼 → 开头说明写信目的（申请）→ 主体陈述自身条件/理由 → 结尾表达期望与感谢 → 结束语与署名。",
      template: "Dear ____,\nI am writing to apply for ____.\n...（条件与理由）...\nI would be grateful if you could consider my application.\nYours sincerely,\nLi Hua",
      sample: "Dear Sir or Madam,\nI am writing to apply for the chance to study in your school.\nI have studied English for six years and I am good at it. Besides, I am interested in your culture.\nI would be grateful if you could consider my application.\nYours sincerely,\nLi Hua",
      tips: "申请信开头要明确申请对象；中间写清自身优势与理由；结尾礼貌表达期望，常用 I would be grateful if...。"
    },
    {
      id: "w5",
      type: "建议信",
      structure: "称呼 → 开头表示理解/收到来信 → 主体分条给出建议 → 结尾表达祝愿/希望建议有用 → 结束语与署名。",
      template: "Dear ____,\nI am glad to hear from you. Here are my suggestions.\nFirst, ____. Second, ____. Finally, ____.\nI hope my advice is helpful.\nYours sincerely,\nLi Hua",
      sample: "Dear Tom,\nI am sorry to hear that you have trouble learning Chinese. Here are my suggestions.\nFirst, listen to Chinese songs and watch Chinese films. Second, practice speaking with your classmates every day. Finally, do not be afraid of making mistakes.\nI hope my advice is helpful.\nYours sincerely,\nLi Hua",
      tips: "建议信常用 First/Second/Finally 分层；语气要诚恳、友好；结尾常写 I hope my advice is helpful 或 Hope my suggestions will be of some help to you。"
    },
    {
      id: "w6",
      type: "投诉信",
      structure: "称呼 → 开头说明写信目的（投诉）→ 主体描述问题及影响 → 提出要求/期望解决 → 结尾表达感谢与期待 → 结束语与署名。",
      template: "Dear ____,\nI am writing to complain about ____.\n...（问题描述）...\nI hope you can solve the problem as soon as possible.\nYours sincerely,\nLi Hua",
      sample: "Dear Sir or Madam,\nI am writing to complain about the mobile phone I bought from your store last week.\nIt does not work well and the screen is broken. I am very disappointed.\nI hope you can change it for a new one or return my money.\nI am looking forward to your reply.\nYours sincerely,\nLi Hua",
      tips: "投诉信语气要礼貌但坚定；写清问题、时间、经过；明确提出赔偿、更换或退款等要求。"
    },
    {
      id: "w7",
      type: "邀请信",
      structure: "称呼 → 开头说明邀请事由 → 主体说明活动时间、地点、安排 → 表达期待对方参加 → 结束语与署名。",
      template: "Dear ____,\nI am writing to invite you to ____.\nThe activity will be held ____（时间地点）.\n...（安排）...\nI would be very glad if you could come.\nYours sincerely,\nLi Hua",
      sample: "Dear Jack,\nI am writing to invite you to our English party.\nThe party will be held in our classroom at 7:00 p.m. next Friday. We will sing songs, play games and enjoy some delicious food.\nI would be very glad if you could come.\nYours sincerely,\nLi Hua",
      tips: "邀请信要写清活动的 what/when/where；结尾表达热切期待，常用 We would be honored if you could come。"
    },
    {
      id: "w8",
      type: "求职信",
      structure: "称呼 → 开头说明应聘职位及信息来源 → 主体陈述学历、技能、经验等优势 → 结尾表达面试愿望与感谢 → 结束语与署名（可附简历）。",
      template: "Dear ____,\nI am writing to apply for the position of ____ advertised in ____.\n...（学历、技能、经验）...\nI would welcome the chance of an interview.\nYours sincerely,\nLi Hua",
      sample: "Dear Sir or Madam,\nI am writing to apply for the position of English editor advertised on the Internet.\nI graduated from a famous university and I am good at writing. I have two years' experience in this field.\nI would welcome the chance of an interview.\nYours sincerely,\nLi Hua",
      tips: "求职信要突出与岗位匹配的技能与经验；用词正式；结尾主动提出希望面试，如 I would welcome the chance of an interview。"
    },
    {
      id: "w9",
      type: "演讲稿",
      structure: "称呼问候（Ladies and gentlemen / Dear teachers and students）→ 自我介绍+主题 → 主体分点论述 → 结尾号召/祝愿 → 致谢。",
      template: "Ladies and gentlemen,\nGood morning! I am glad to speak here. My topic is ____.\nFirst, ____. Second, ____. Finally, ____.\nLet us work together to ____!\nThank you for listening.",
      sample: "Dear teachers and students,\nGood morning! I am glad to speak here. My topic is how to learn English well.\nFirst, we should listen more. Second, we should read every day. Finally, we should be brave to speak.\nLet us work together to improve our English!\nThank you for listening.",
      tips: "演讲稿开头要有称呼和问候；语言要有感染力和号召力；结尾常以 Let us... 号召，并以 Thank you 结束。"
    },
    {
      id: "w10",
      type: "便条",
      structure: "称呼 → 正文（简短说明事由）→ 结束语（可省略）→ 署名 → 日期（右上角或下方）。",
      template: "Dear ____,\n...（简短正文）...\nYours,\nLi Hua",
      sample: "Tom,\nI have to go out for a while. Please tell our teacher that I will be back before 3:00 this afternoon. Thank you.\nLi Hua",
      tips: "便条语言简洁口语化；可省略 Dear 和 Yours；务必写清事由、时间，并署名；常用 leave a message 之类表达。"
    }
],
  questions: [    { id: "eq1", type: "single", section: "词汇结构", stem: "He ___ to Beijing three times.", options: ["has been", "has gone", "went", "goes"], answer: "A", explain: "has been to 表示“去过某地已回”，与 three times 连用。", difficulty: 1 },
    { id: "eq2", type: "single", section: "词汇结构", stem: "The story ___ by many people every day.", options: ["is read", "reads", "read", "are read"], answer: "A", explain: "the story 与 read 是被动关系，且 every day 表一般现在时，用 is read。", difficulty: 1 },
    { id: "eq3", type: "single", section: "词汇结构", stem: "I do not know ___ he will come tomorrow.", options: ["whether", "that", "what", "which"], answer: "A", explain: "“是否来”用 whether 引导宾语从句，表不确定。", difficulty: 1 },
    { id: "eq4", type: "single", section: "词汇结构", stem: "She is the girl ___ won the first prize.", options: ["who", "which", "whose", "whom"], answer: "A", explain: "先行词 the girl 指人，在定语从句中作主语，用 who。", difficulty: 1 },
    { id: "eq5", type: "single", section: "词汇结构", stem: "If I ___ time, I would travel around the world.", options: ["had", "have", "will have", "has"], answer: "A", explain: "与现在事实相反的虚拟语气，if 从句用一般过去时 had。", difficulty: 2 },
    { id: "eq6", type: "single", section: "词汇结构", stem: "The meeting ___ when I arrived.", options: ["had begun", "began", "has begun", "begins"], answer: "A", explain: "会议开始发生在“我到达”之前，是“过去的过去”，用过去完成时。", difficulty: 2 },
    { id: "eq7", type: "single", section: "词汇结构", stem: "Not until midnight ___ to bed.", options: ["did he go", "he went", "he did go", "went he"], answer: "A", explain: "not until 置于句首，主句用部分倒装 did he go。", difficulty: 2 },
    { id: "eq8", type: "single", section: "词汇结构", stem: "He spent the whole afternoon ___ the room.", options: ["cleaning", "to clean", "clean", "cleaned"], answer: "A", explain: "spend...(in) doing sth 为固定搭配，用动名词 cleaning。", difficulty: 1 },
    { id: "eq9", type: "single", section: "词汇结构", stem: "My mother asked me ___ the window.", options: ["to open", "open", "opening", "opened"], answer: "A", explain: "ask sb to do sth，用不定式 to open。", difficulty: 1 },
    { id: "eq10", type: "single", section: "词汇结构", stem: "This is the most beautiful city ___ I have ever visited.", options: ["that", "which", "where", "who"], answer: "A", explain: "先行词被最高级修饰时，关系代词用 that 不用 which。", difficulty: 2 },
    { id: "eq11", type: "single", section: "词汇结构", stem: "You had better ___ too much.", options: ["not eat", "not to eat", "do not eat", "not eating"], answer: "A", explain: "had better not do sth，接动词原形。", difficulty: 2 },
    { id: "eq12", type: "single", section: "词汇结构", stem: "The population of China is ___ than that of Japan.", options: ["larger", "more large", "largest", "the largest"], answer: "A", explain: "人口多应用 large 的比较级 larger，表示比较。", difficulty: 1 },
    { id: "eq13", type: "single", section: "词汇结构", stem: "It is necessary ___ the classroom clean.", options: ["to keep", "keep", "keeping", "kept"], answer: "A", explain: "it 作形式主语，真正主语用不定式 to keep。", difficulty: 1 },
    { id: "eq14", type: "single", section: "词汇结构", stem: "He ___ English for five years by next year.", options: ["will have learned", "will learn", "has learned", "learned"], answer: "A", explain: "by next year 表将来某一时间前完成，用将来完成时 will have done。", difficulty: 3 },
    { id: "eq15", type: "single", section: "词汇结构", stem: "The teacher, together with his students, ___ planting trees now.", options: ["is", "are", "was", "were"], answer: "A", explain: "就远原则，主语是 the teacher（together with 不改变主语），谓语用单数 is。", difficulty: 2 },
    { id: "eq16", type: "single", section: "词汇结构", stem: "She was too tired ___ any further.", options: ["to walk", "walking", "walk", "walked"], answer: "A", explain: "too...to do sth 表示“太……而不能……”。", difficulty: 1 },
    { id: "eq17", type: "single", section: "词汇结构", stem: "___ hard he tries, he never succeeds.", options: ["However", "Whatever", "Whoever", "Wherever"], answer: "A", explain: "However+副词引导让步状语从句，表示“无论多么努力”。", difficulty: 3 },
    { id: "eq18", type: "single", section: "词汇结构", stem: "I would rather ___ at home than go out.", options: ["stay", "to stay", "staying", "stayed"], answer: "A", explain: "would rather do sth than do sth，接动词原形。", difficulty: 2 },
    { id: "eq19", type: "single", section: "词汇结构", stem: "The number of students in our school ___ increasing.", options: ["is", "are", "were", "have been"], answer: "A", explain: "the number of 表示“……的数量”，作主语时谓语用单数。", difficulty: 2 },
    { id: "eq20", type: "single", section: "词汇结构", stem: "He is used to ___ in the countryside.", options: ["living", "live", "lived", "to live"], answer: "A", explain: "be used to doing 表示“习惯于做某事”，to 是介词，接动名词。", difficulty: 1 },
    { id: "eq21", type: "single", section: "词汇结构", stem: "Nobody but Jim and Mike ___ on the playground.", options: ["is", "are", "were", "be"], answer: "A", explain: "就远原则，主语是 nobody，but 后的成分不影响谓语，用单数 is。", difficulty: 2 },
    { id: "eq22", type: "single", section: "词汇结构", stem: "___ from space, the earth looks like a blue ball.", options: ["Seen", "Seeing", "See", "To see"], answer: "A", explain: "地球是“被看”的，与主语是被动关系，用过去分词 Seen。", difficulty: 2 },
    { id: "eq23", type: "single", section: "词汇结构", stem: "—How long have you ___ the book? —For a week.", options: ["kept", "borrowed", "bought", "lent"], answer: "A", explain: "borrow/buy/lend 是短暂性动词，不能与 How long 连用，须用延续性动词 keep。", difficulty: 2 },
    { id: "eq24", type: "single", section: "词汇结构", stem: "This is the very book ___ I want to buy.", options: ["that", "which", "what", "who"], answer: "A", explain: "先行词被 the very 修饰时，关系代词用 that 不用 which。", difficulty: 2 },
    { id: "eq25", type: "single", section: "词汇结构", stem: "He suggested that we ___ early tomorrow.", options: ["start", "started", "would start", "starting"], answer: "A", explain: "suggest 后的宾语从句用 (should)+动词原形，故用 start。", difficulty: 2 },
    { id: "eq26", type: "single", section: "词汇结构", stem: "The children ___ happily when their mother came back.", options: ["were playing", "played", "are playing", "have played"], answer: "A", explain: "妈妈回来时孩子们“正在”玩，用过去进行时。", difficulty: 1 },
    { id: "eq27", type: "single", section: "词汇结构", stem: "I have two brothers. One is a doctor, ___ is a teacher.", options: ["the other", "another", "other", "others"], answer: "A", explain: "两者中“一个……另一个……”用 one...the other...。", difficulty: 1 },
    { id: "eq28", type: "single", section: "词汇结构", stem: "___ it was raining hard, they went on working.", options: ["Although", "Because", "Since", "If"], answer: "A", explain: "although 引导让步状语从句，表“尽管”，注意不与 but 连用。", difficulty: 1 },
    { id: "eq29", type: "single", section: "词汇结构", stem: "He is ___ honest boy that everyone likes him.", options: ["such an", "so an", "such a", "so"], answer: "A", explain: "such+a/an+形容词+可数名词单数；honest 以元音音素开头，用 an。", difficulty: 2 },
    { id: "eq30", type: "single", section: "词汇结构", stem: "The question is ___ we can finish it on time.", options: ["whether", "that", "what", "which"], answer: "A", explain: "表语从句表示“是否”，用 whether 引导。", difficulty: 2 },
    { id: "eq31", type: "single", section: "翻译", stem: "汉译英：我盼望着收到你的来信。", options: ["I am looking forward to hearing from you.", "I am looking forward to hear from you.", "I look forward to hear from you.", "I am looking forward hear from you."], answer: "A", explain: "look forward to 中 to 是介词，后接动名词 hearing。", difficulty: 1 },
    { id: "eq32", type: "single", section: "翻译", stem: "汉译英：他花了两个小时完成作业。", options: ["He spent two hours to finish his homework.", "He spent two hours finishing his homework.", "He took two hours finish his homework.", "He paid two hours finishing his homework."], answer: "B", explain: "spend+时间+(in) doing sth，用动名词 finishing。", difficulty: 2 },
    { id: "eq33", type: "single", section: "翻译", stem: "汉译英：直到老师来了，我们才开始上课。", options: ["Not until the teacher came we began the class.", "Not until the teacher came did we begin the class.", "Until the teacher came we began the class.", "Not until did the teacher come we began the class."], answer: "B", explain: "not until 置于句首，主句用部分倒装 did we begin。", difficulty: 3 },
    { id: "eq34", type: "single", section: "翻译", stem: "汉译英：我一到家就给你打电话。", options: ["I will call you as soon as I get home.", "I call you as soon as I will get home.", "I will call you as soon as I will get home.", "I called you as soon as I get home."], answer: "A", explain: "as soon as 引导的时间状语从句用一般现在时代替将来时。", difficulty: 2 },
    { id: "eq35", type: "single", section: "翻译", stem: "汉译英：我们不应该看不起别人。", options: ["We should not look down others.", "We should not look up others.", "We should not look down upon others.", "We should not look upon others."], answer: "C", explain: "look down upon 是固定搭配，表“看不起”。", difficulty: 1 },
    { id: "eq36", type: "single", section: "翻译", stem: "汉译英：这本书值得一读。", options: ["This book is worth to read.", "This book is worth reading.", "This book is worthy to read.", "This book worths reading."], answer: "B", explain: "be worth doing 表示“值得做”，用动名词 reading。", difficulty: 2 },
    { id: "eq37", type: "single", section: "翻译", stem: "汉译英：随着科技的发展，我们的生活越来越便利。", options: ["With the development of technology, our life is becoming more and more convenient.", "With the developing of technology, our life becomes more convenient.", "As the development of technology, our life becomes convenient.", "With technology develops, our life is more convenient."], answer: "A", explain: "with the development of 为固定表达；“越来越……”用 more and more。", difficulty: 2 },
    { id: "eq38", type: "single", section: "翻译", stem: "汉译英：他宁愿待在家里也不愿出去。", options: ["He would rather to stay at home than go out.", "He prefers stay at home than go out.", "He would rather stay at home than go out.", "He would rather staying at home than going out."], answer: "C", explain: "would rather do than do 结构，接动词原形。", difficulty: 2 },
    { id: "eq39", type: "single", section: "翻译", stem: "汉译英：这个问题很难解决。", options: ["This problem is difficult to be solved.", "This problem is difficult to solve.", "This problem is difficult solving.", "This problem is difficult to solving."], answer: "B", explain: "形容词+difficult+to do 用主动形式表被动含义。", difficulty: 2 },
    { id: "eq40", type: "single", section: "翻译", stem: "汉译英：只有通过努力学习，我们才能取得成功。", options: ["Only by working hard we can achieve success.", "Only by working hard can we achieve success.", "Only we work hard can we achieve success.", "Only work hard we can achieve success."], answer: "B", explain: "only+状语置于句首，主句用部分倒装 can we。", difficulty: 3 }
    ,
    { id: "eq41", type: "single", section: "阅读理解", stem: "阅读短文：Tom is a middle school student. He gets up at six every morning. He goes to school by bike. He likes English very much and reads English for an hour every day.\n问题：How does Tom go to school?", options: ["By bus", "By bike", "On foot", "By car"], answer: "B", explain: "文中明确说 He goes to school by bike。", difficulty: 1 },
    { id: "eq42", type: "single", section: "阅读理解", stem: "阅读短文：The panda is one of the most popular animals in the world. It lives in the mountains of Sichuan. It mainly eats bamboo. There are not many pandas now, so we must protect them.\n问题：What does the panda mainly eat?", options: ["Meat", "Fish", "Bamboo", "Grass"], answer: "C", explain: "文中说 It mainly eats bamboo（主要吃竹子）。", difficulty: 1 },
    { id: "eq43", type: "single", section: "阅读理解", stem: "阅读短文：A library is a good place to study. It is quiet there. You can borrow books for free. But you must return them on time, or you will be fined.\n问题：What will happen if you do not return the books on time?", options: ["You will be praised", "You will be fined", "You will get more books", "You will be thanked"], answer: "B", explain: "文中说 or you will be fined（否则会被罚款）。", difficulty: 1 },
    { id: "eq44", type: "single", section: "阅读理解", stem: "阅读短文：Many people like to travel during the holidays. Traveling can open our eyes and make us relaxed. However, it can also be expensive and tiring. So we should plan carefully before traveling.\n问题：What is one disadvantage of traveling mentioned in the passage?", options: ["It opens our eyes", "It makes us relaxed", "It can be expensive and tiring", "It is always free"], answer: "C", explain: "However 转折后指出缺点：expensive and tiring。", difficulty: 2 },
    { id: "eq45", type: "single", section: "阅读理解", stem: "阅读短文：Reading is very important for students. It can improve their writing and thinking. Students who read more usually do better in exams. Therefore, teachers often advise students to read widely.\n问题：Why do teachers advise students to read widely?", options: ["Because reading is boring", "Because reading can improve writing and thinking", "Because reading is expensive", "Because reading wastes time"], answer: "B", explain: "文中说阅读可以提高写作和思维，所以老师建议多读。", difficulty: 1 },
    { id: "eq46", type: "single", section: "阅读理解", stem: "阅读短文：Water is necessary for life. We use water to drink, cook and wash. However, water is becoming less and less in some places. We should save water in our daily life, such as turning off the tap in time.\n问题：Which of the following is a way to save water?", options: ["Leaving the tap running", "Turning off the tap in time", "Using more water to wash", "Wasting water"], answer: "B", explain: "文中举例 saving water 的方式是 turning off the tap in time。", difficulty: 1 },
    { id: "eq47", type: "single", section: "阅读理解", stem: "阅读短文：The Internet has changed our life greatly. We can shop, study and make friends online. But we should be careful, because there is also false information on the Internet. We must learn to tell right from wrong.\n问题：What should we do when using the Internet?", options: ["Believe everything online", "Never use the Internet", "Learn to tell right from wrong", "Only shop online"], answer: "C", explain: "文末说 We must learn to tell right from wrong（明辨是非）。", difficulty: 2 },
    { id: "eq48", type: "single", section: "阅读理解", stem: "阅读短文：A good friend is someone you can trust. Good friends help each other and share happiness and sadness. A true friend will stay with you when you are in trouble.\n问题：What will a true friend do when you are in trouble?", options: ["Leave you", "Laugh at you", "Stay with you", "Avoid you"], answer: "C", explain: "文中说真正的朋友在你困难时会陪伴你（stay with you）。", difficulty: 1 },
    { id: "eq49", type: "single", section: "阅读理解", stem: "阅读短文：Exercise is good for our health. It makes our body strong and keeps us fit. Doctors suggest that we do exercise for at least half an hour every day. Walking, running and swimming are all good choices.\n问题：How long do doctors suggest we exercise every day?", options: ["At least half an hour", "At least one hour", "Less than ten minutes", "No exercise"], answer: "A", explain: "文中说每天至少锻炼半小时（at least half an hour）。", difficulty: 1 },
    { id: "eq50", type: "single", section: "阅读理解", stem: "阅读短文：Volunteers play an important role in society. They help the old, protect the environment and teach children for free. Volunteering not only helps others but also enriches our own life.\n问题：What does the passage mainly tell us?", options: ["Volunteers only help themselves", "Volunteering is important and beneficial", "Volunteering is a waste of time", "Only children can volunteer"], answer: "B", explain: "短文主旨：志愿活动重要且有益（帮助他人也丰富自己）。", difficulty: 2 },
    { id: "eq51", type: "single", section: "写作", stem: "英文书信中，称呼“尊敬的先生/女士”应写作？", options: ["Dear Sir or Madam", "Hello Sir", "Hi everyone", "Good morning"], answer: "A", explain: "正式书信中不知收信人姓名时用 Dear Sir or Madam。", difficulty: 1 },
    { id: "eq52", type: "single", section: "写作", stem: "求职信结尾最恰当的结束语是？", options: ["Yours sincerely", "Goodbye", "See you", "Thanks a lot"], answer: "A", explain: "正式书信结尾用 Yours sincerely（知道姓名）等结束语。", difficulty: 1 },
    { id: "eq53", type: "single", section: "写作", stem: "写英文通知时，标题通常写作？", options: ["NOTICE", "Dear", "Hello", "Bye"], answer: "A", explain: "通知的标题是 NOTICE，通常居中大写。", difficulty: 1 },
    { id: "eq54", type: "single", section: "写作", stem: "建议信中常用的表示层次的过渡词是？", options: ["First, Second, Finally", "Once upon a time", "In a word, goodbye", "Hello, everyone"], answer: "A", explain: "建议信常用 First/Second/Finally 分层表达建议。", difficulty: 1 },
    { id: "eq55", type: "single", section: "写作", stem: "“我写信是想邀请你参加我们的聚会。”的正确英文表达是？", options: ["I am writing to invite you to our party.", "I write to inviting you.", "I am write to invite you.", "I writing invite you party."], answer: "A", explain: "书信开头常用 I am writing to do sth。", difficulty: 1 },
    { id: "eq56", type: "single", section: "写作", stem: "电子邮件中必不可少的部分是？", options: ["主题行 Subject", "盖章", "照片", "签名章"], answer: "A", explain: "电子邮件必须有主题行 Subject，简明说明邮件内容。", difficulty: 1 },
    { id: "eq57", type: "single", section: "写作", stem: "投诉信的主要目的是？", options: ["表达不满并要求解决", "表达感谢", "邀请朋友", "通知开会"], answer: "A", explain: "投诉信用于表达不满并提出解决要求。", difficulty: 1 },
    { id: "eq58", type: "single", section: "写作", stem: "演讲稿结尾常用的号召句式是？", options: ["Let us work together!", "Dear Sir", "Please find enclosed", "I am sorry"], answer: "A", explain: "演讲稿结尾常用 Let us... 发出号召。", difficulty: 1 },
    { id: "eq59", type: "single", section: "写作", stem: "便条与正式书信相比，其主要特点是？", options: ["简短、口语化", "冗长、正式", "必须有主题行", "必须盖公章"], answer: "A", explain: "便条语言简洁、口语化，格式相对自由。", difficulty: 1 },
    { id: "eq60", type: "single", section: "写作", stem: "书信中 “Yours faithfully” 一般用于？", options: ["不知对方姓名时（Dear Sir/Madam）", "知道对方姓名时", "写给朋友时", "写给家人时"], answer: "A", explain: "Yours faithfully 用于 Dear Sir/Madam 等不知姓名的情况。", difficulty: 2 }
]
};
