const SITE_SEARCH_ITEMS = [
  {
    "title": "野夏天",
    "file": "movie-1.html",
    "cover": 1,
    "region": "中国",
    "category": "爱情青春",
    "tags": "乡村，篮球，梦想，留守儿童",
    "year": "2025",
    "description": "湘西山村五个留守儿童，用一个夏天自制篮球架追梦。"
  },
  {
    "title": "复仇女郎",
    "file": "movie-2.html",
    "cover": 2,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "女性复仇, 黑市交易, 卧底身份, 双面人生, 枪战追击, 暗网阴谋",
    "year": "2024",
    "description": "一名看似普通的礼仪公司员工在妹妹离奇死亡后，顺着一条黑市账单把自己一步步变成最危险的复仇者。"
  },
  {
    "title": "重回1993之纵横人生",
    "file": "movie-3.html",
    "cover": 3,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "重生, 商战, 时代红利, 逆袭",
    "year": "2025",
    "description": "商业帝国掌门人林世荣被亲信害死后，魂穿回1993年一个被全厂排挤的傻小子身上，决定重写商业版图。"
  },
  {
    "title": "萌道捉妖记",
    "file": "movie-4.html",
    "cover": 4,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "道士, 萌宠, 废柴主角, 妖怪现代化, 合家欢",
    "year": "2025",
    "description": "一个只会卖萌的道士继承人，带着一只社恐猫妖，去捉一只正在直播带货的千年狐妖。"
  },
  {
    "title": "鬼打鬼之黄金道士",
    "file": "movie-5.html",
    "cover": 5,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "僵尸, 道士, 寻宝, 港式复古",
    "year": "2024",
    "description": "落魄道士师徒接到一桩怪活：帮富商看守一座闹鬼老宅，却发现鬼和人都想挖地下黄金。"
  },
  {
    "title": "菩提树",
    "file": "movie-6.html",
    "cover": 6,
    "region": "印度",
    "category": "高清电影",
    "tags": "宗教轮回, 家族诅咒, 前世今生, 印度风情",
    "year": "2024",
    "description": "村口的千年菩提树结出了一颗金芒果，吃掉它的家族成员开始轮回复活，但复活后的亲人们性情大变。"
  },
  {
    "title": "孖宝奇情",
    "file": "movie-7.html",
    "cover": 7,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "双胞胎错位, 港式闹剧, 命运误会, 都市恋情, 真假身份",
    "year": "1992",
    "description": "一对性格天差地别的双胞胎被迫互换人生，一个替人谈恋爱，一个替人躲麻烦，最后把原本荒唐的相遇活成了真正的奇情。"
  },
  {
    "title": "康提基号：伟大航程",
    "file": "movie-8.html",
    "cover": 8,
    "region": "挪威",
    "category": "高清电影",
    "tags": "航海，探险，真实改编，勇气",
    "year": "2024",
    "description": "六名现代探险家复刻千年前的古筏，试图证明史前人类仅凭简陋木筏就能横跨太平洋。"
  },
  {
    "title": "院人全年无休计划2",
    "file": "movie-9.html",
    "cover": 9,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "密室, 解谜, 团队, 高强度",
    "year": "2025",
    "description": "第二季全面升级，七位院人被困在一栋闹鬼的摩天大楼里，每一层都是一个致命谜题，解错即淘汰。"
  },
  {
    "title": "飞行英杰",
    "file": "movie-10.html",
    "cover": 10,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "航空, 特技飞行, 励志, 真实改编",
    "year": "2025",
    "description": "一位被空军淘汰的飞行员，如何在地表40度的沙漠中，驾驶自制飞机重回蓝天。"
  },
  {
    "title": "飞上长空",
    "file": "movie-11.html",
    "cover": 11,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "飞行, 梦想, 吉卜力风, 治愈, 冒险",
    "year": "2024",
    "description": "一个无法走路的男孩梦见自己变成了一架纸飞机，他飞过城市、森林和云层，最后落在了三十年前失踪的外公身边。"
  },
  {
    "title": "带我去月球",
    "file": "movie-12.html",
    "cover": 12,
    "region": "中国台湾",
    "category": "高清电影",
    "tags": "复古, 初恋, 航天梦, 时代变迁, 遗憾",
    "year": "2021",
    "description": "1995年，一个梦想登月的男孩爱上了一个听张雨生的女孩，而她知道阿波罗计划是假的。"
  },
  {
    "title": "天龙八部之乔峰传",
    "file": "movie-13.html",
    "cover": 13,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "乔峰, 悲剧英雄, 江湖恩怨, 契丹",
    "year": "2023",
    "description": "从丐帮帮主到契丹南院大王，乔峰一生都在身份与血统的泥潭中挣扎，最终以死换取宋辽十年和平。"
  },
  {
    "title": "小子难缠：空手道传奇",
    "file": "movie-14.html",
    "cover": 14,
    "region": "美国",
    "category": "精选视频",
    "tags": "重启, 师徒, 格斗, 逆袭",
    "year": "2026",
    "description": "四十年前的空手道小子丹尼尔已成了落魄的中年大叔，当他再次遇到需要保护的少年时，他选择重披战袍，用宫城流的哲学对抗现代搏击。"
  },
  {
    "title": "夜间",
    "file": "movie-15.html",
    "cover": 15,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "夜巡街巷, 失踪案, 录像证据, 雨夜追踪, 真相伪证",
    "year": "2019",
    "description": "整座城都在夜里睡去时，只有值班巡警和一名失踪女孩的哥哥还在追查真相，而他们越接近答案，越发现黑夜本身就是一份伪证。"
  },
  {
    "title": "破镜谋杀案",
    "file": "movie-16.html",
    "cover": 16,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "阿加莎改编, 英伦风, 马普尔小姐, 经典, 群像",
    "year": "1980",
    "description": "好莱坞女星举办的奢华派对上，一位不速之客中毒身亡，而所有的人都有完美的不在场证明。"
  },
  {
    "title": "蓝色房间",
    "file": "movie-17.html",
    "cover": 17,
    "region": "法国",
    "category": "动作犯罪",
    "tags": "婚外情, 犯罪, 审问, 心理",
    "year": "2014",
    "description": "一对情人在蓝色房间里幽会，某天女人说：“我丈夫死了。”男人问：“你杀的吗？”她笑了，没回答。"
  },
  {
    "title": "检阅日",
    "file": "movie-18.html",
    "cover": 18,
    "region": "韩国",
    "category": "欧美热播",
    "tags": "朝鲜战争, 兄弟, 反战, 人性",
    "year": "2022",
    "description": "停战前夕，南北韩两兄弟在非军事区被选中进行最后的武装检阅。"
  },
  {
    "title": "啊、春天",
    "file": "movie-19.html",
    "cover": 19,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "死亡教育, 祖孙, 俳句, 乡村, 日常",
    "year": "2024",
    "description": "患有绝症的爷爷教孙子写俳句，孙子用“啊、春天”三个字，道尽了面对死亡的温柔与勇气。"
  },
  {
    "title": "七十七天",
    "file": "movie-20.html",
    "cover": 20,
    "region": "中国内地",
    "category": "科幻悬疑",
    "tags": "无人区，独行，自救，羌塘，真实改编",
    "year": "2025",
    "description": "一名男子独自推着自行车穿越羌塘无人区，第 77 天他遇到了一个背向而行的女人。"
  },
  {
    "title": "贩肤走卒",
    "file": "movie-21.html",
    "cover": 21,
    "region": "法国 / 塞内加尔",
    "category": "科幻悬疑",
    "tags": "器官贩卖, 难民, 黑色幽默, 社会批判",
    "year": "2020",
    "description": "一名非洲难民卖掉自己全身皮肤给白人富豪，却发现富豪要用他的皮做艺术品。"
  },
  {
    "title": "暗杀教室第一季",
    "file": "movie-22.html",
    "cover": 22,
    "region": "日本",
    "category": "精选视频",
    "tags": "杀手教师, 反套路, 催泪结局, 超能力, 班级对抗",
    "year": "2023",
    "description": "史上最强的不死杀手成了班主任，全班必须在毕业前成功杀了他。"
  },
  {
    "title": "吸血鬼家族2023",
    "file": "movie-23.html",
    "cover": 23,
    "region": "英国",
    "category": "欧美热播",
    "tags": "伪纪录片, 中年危机, 永生烦恼",
    "year": "2023",
    "description": "一个传统吸血鬼家族在现代社会遭遇了比圣水更可怕的东西：学区房、HPV疫苗和素食主义。"
  },
  {
    "title": "台风圈里的女人",
    "file": "movie-24.html",
    "cover": 24,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "女性，救赎，风暴，怀旧",
    "year": "1995",
    "description": "台风登陆的夜晚，三个被同一男人伤害过的女人被困在一间茶餐厅，她们决定联手改写自己的命运。"
  },
  {
    "title": "盲情杀机",
    "file": "movie-25.html",
    "cover": 25,
    "region": "西班牙",
    "category": "喜剧动画",
    "tags": "盲人, 上门服务, 目击证人, 密室, 高智商",
    "year": "2022",
    "description": "一名盲人按摩师上门服务时卷入谋杀案，他只能靠听觉和触觉在凶手面前“隐形”。"
  },
  {
    "title": "战地女煞星",
    "file": "movie-26.html",
    "cover": 26,
    "region": "法国 / 阿尔及利亚",
    "category": "爱情青春",
    "tags": "女狙击手, 反殖民, 复仇, 冷峻, 独立战争",
    "year": "2019",
    "description": "在阿尔及利亚独立战争中，一名失去家园的村姑被训练成最致命的狙击手，向法国外籍军团展开复仇。"
  },
  {
    "title": "田间的少年第二季",
    "file": "movie-27.html",
    "cover": 27,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "少年务农，返乡创业，真实劳作",
    "year": "2025",
    "description": "五位城市问题少年回到田间，这次他们不仅要种地，还要在冬日前抢收千亩水稻。"
  },
  {
    "title": "东京残响",
    "file": "movie-28.html",
    "cover": 28,
    "region": "日本",
    "category": "精选视频",
    "tags": "都市传说, 声音病毒, 集体听觉幻觉, 东京暗面",
    "year": "2026",
    "description": "东京全城每隔七天就会在同一时刻听见同一段残响，那是十年前的未爆弹倒数。"
  },
  {
    "title": "老公不是人",
    "file": "movie-29.html",
    "cover": 29,
    "region": "韩国",
    "category": "高清电影",
    "tags": "寄生外星人, 主妇复仇, 黑色喜剧, B级片",
    "year": "2024",
    "description": "结婚十年的家庭主妇发现完美的丈夫在喝下过期的酱汤后，露出了触手和外星复眼，更崩溃的是女儿说她早就知道了。"
  },
  {
    "title": "革命在耶诞前夕",
    "file": "movie-30.html",
    "cover": 30,
    "region": "西班牙",
    "category": "爱情青春",
    "tags": "政治讽刺, 家庭聚会, 荒诞",
    "year": "2024",
    "description": "平安夜，四个激进青年计划绑架富豪老爸，却错绑了来送火鸡的外卖员。"
  },
  {
    "title": "湛蓝青春海",
    "file": "movie-31.html",
    "cover": 31,
    "region": "中国台湾",
    "category": "爱情青春",
    "tags": "海边，成长秘密，友谊与爱恋，90年代，夏日",
    "year": "2024",
    "description": "两个女孩在盛夏的海边许下永远在一起的诺言，却用二十年才明白它的重量。"
  },
  {
    "title": "当树木长高时",
    "file": "movie-32.html",
    "cover": 32,
    "region": "中国台湾",
    "category": "科幻悬疑",
    "tags": "成长, 代际和解, 时间流逝, 亲情, 诗意",
    "year": "2026",
    "description": "一个失聪的儿子用二十年时间，用相机记录院子里一棵树的生长，只为拼凑出记忆里父亲模糊的笑脸。"
  },
  {
    "title": "93航班",
    "file": "movie-33.html",
    "cover": 33,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "911, 真实事件改编, 高空, 群像, 悲壮",
    "year": "2025",
    "description": "被劫持的93号航班上，乘客用40分钟电话，拼出了改变历史的一次投票。"
  },
  {
    "title": "寄生夙愿",
    "file": "movie-34.html",
    "cover": 34,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "脑电波, 交换身体, 阴谋, 器官",
    "year": "2023",
    "description": "植物人苏醒后大脑被植入芯片，能随意“寄生”到他人体内，却发现这能力是一场器官移植骗局。"
  },
  {
    "title": "女郎我最兔",
    "file": "movie-35.html",
    "cover": 35,
    "region": "美国",
    "category": "精选视频",
    "tags": "女权, 夜总会, 姐妹情, 反刻板印象",
    "year": "2023",
    "description": "一名哲学博士为了赚学费到夜总会当兔女郎，却意外成为姐妹们的“人生导师”。"
  },
  {
    "title": "怪事屋第三季",
    "file": "movie-36.html",
    "cover": 36,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "都市怪谈, 短剧集, 反转, 黑色幽默, 单元故事",
    "year": "2025",
    "description": "接手“怪事屋”房产中介的新人发现，每一套凶宅背后，都住着一个执念未消的甲方。"
  },
  {
    "title": "我是一个兵",
    "file": "movie-37.html",
    "cover": 37,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "新兵成长, 抗美援朝, 纪实风格, 兄弟情",
    "year": "2022",
    "description": "一个连枪都端不稳的文艺兵，被意外卷入真实战场的生死七日。"
  },
  {
    "title": "不白之冤",
    "file": "movie-38.html",
    "cover": 38,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "替罪羊，阶层压迫，媒体暴力，翻案，群像",
    "year": "2023",
    "description": "一个被冤枉杀死女学生的外卖员，一个失去女儿的退休警察，一场长达十年的无声抵抗。"
  },
  {
    "title": "水中刀",
    "file": "movie-39.html",
    "cover": 39,
    "region": "波兰",
    "category": "动作犯罪",
    "tags": "心理战, 游艇, 三人行",
    "year": "1962",
    "description": "一对中产夫妇顺路搭载一个年轻 hitchhiker 出海，一把掉进水中的刀成为三人权力游戏的导火索。"
  },
  {
    "title": "复制强者",
    "file": "movie-40.html",
    "cover": 40,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "克隆, 基因编辑, 军事情报, 伦理, 替身",
    "year": "2024",
    "description": "军方秘密计划：复制最优秀的特工，取代原体渗透敌方。但当复制体拥有自主意识后，它们决定反过来控制人类。"
  },
  {
    "title": "玩火的儿子",
    "file": "movie-41.html",
    "cover": 41,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "父子对峙, 失控青春, 旧案牵连, 灰色交易, 代价",
    "year": "2021",
    "description": "一个总把麻烦当成证明自己的少年，在一次看似寻常的纵火恶作剧后，意外烧出父亲藏了二十年的旧案，也点燃了整个家庭无法回避的真相。"
  },
  {
    "title": "搅搅震",
    "file": "movie-42.html",
    "cover": 42,
    "region": "中国",
    "category": "剧情佳作",
    "tags": "共振频率, 环保阴谋, 地热实验, 地下交易, 实时直播, 社区反抗",
    "year": "2019",
    "description": "一座城市的每一次异常晃动都对应着一次被删改的地质账本，年轻人用一台旧扩音器在最后时刻拼起“声音之墙”，要让真相在全城同频共振。"
  },
  {
    "title": "芭比公主三剑客",
    "file": "movie-43.html",
    "cover": 43,
    "region": "美国",
    "category": "高清电影",
    "tags": "芭比, 公主, 剑客, 女权",
    "year": "2021",
    "description": "四位来自不同国家的公主放下皇冠拿起剑，组成“三剑客”保卫王国不被奸臣篡位。"
  },
  {
    "title": "失去的女孩",
    "file": "movie-44.html",
    "cover": 44,
    "region": "西班牙",
    "category": "精选视频",
    "tags": "记忆碎片, 人格分裂, 反转",
    "year": "2024",
    "description": "她醒来发现女儿失踪，所有人都说她没有孩子，绝望中，她开始怀疑自己的记忆和理智。"
  },
  {
    "title": "击出心人生",
    "file": "movie-45.html",
    "cover": 45,
    "region": "中国台湾",
    "category": "欧美热播",
    "tags": "棒球, 听障, 父女, 特教",
    "year": "2023",
    "description": "听障女孩想打棒球，父亲却把她送去学刺绣，直到她用手语“吼”出全垒打。"
  },
  {
    "title": "不速之客",
    "file": "movie-46.html",
    "cover": 46,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "密室, 心理博弈, 暴雪山庄",
    "year": "2024",
    "description": "暴风雪夜，一间民宿里五个各怀鬼胎的陌生人，发现彼此都是来参加同一个“葬礼”的。"
  },
  {
    "title": "有礼会社",
    "file": "movie-47.html",
    "cover": 47,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "礼仪，黑色幽默，社会派，阶层，复仇",
    "year": "2021",
    "description": "一家只教“如何优雅复仇”的神秘礼仪学校，学员都是社会最底层的受欺压者。"
  },
  {
    "title": "情牵百子柜粤语",
    "file": "movie-48.html",
    "cover": 48,
    "region": "香港",
    "category": "动作犯罪",
    "tags": "百子柜, 黑道旧账, 民俗器物, 连续失踪, 语音密语",
    "year": "2011",
    "description": "一口来自旧戏院的百子柜引发失踪潮，警署刑警与粤剧艺人联手追查，最终发现“名字”早被人用作交易凭证。"
  },
  {
    "title": "风的气息",
    "file": "movie-49.html",
    "cover": 49,
    "region": "越南 / 法国",
    "category": "高清电影",
    "tags": "乡村, 留守儿童, 候鸟, 诗意, 慢电影",
    "year": "2020",
    "description": "在湄公河三角洲的一个水上村庄，每到季风季节，一个男孩就会沿着河道奔跑，只为追上一阵据说能带回妈妈的风。"
  },
  {
    "title": "为什么是我来神说教",
    "file": "movie-50.html",
    "cover": 50,
    "region": "日本",
    "category": "爱情青春",
    "tags": "神明降临, 教师, 反转信仰, 校园",
    "year": "2024",
    "description": "一个无神论高中教师被强行任命为“神明特派说教员”，必须在30天内让全校最恶的问题班级相信神的存在。"
  },
  {
    "title": "卡姆伊之剑",
    "file": "movie-51.html",
    "cover": 51,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "忍者, 江户, 复仇, 秘剑, 武士道",
    "year": "2023",
    "description": "被灭门的忍者孤儿背负着传说中的“卡姆伊之剑”，一路追杀叛徒，却发现这把剑的秘密足以颠覆幕府。"
  },
  {
    "title": "科索沃战役",
    "file": "movie-52.html",
    "cover": 52,
    "region": "塞尔维亚",
    "category": "高清电影",
    "tags": "史诗, 民族抵抗, 中世纪战争, 信仰冲突",
    "year": "2021",
    "description": "公元1389年，一支基督教联军在科索沃原野上迎战势不可挡的奥斯曼帝国。"
  },
  {
    "title": "与希特勒们相遇",
    "file": "movie-53.html",
    "cover": 53,
    "region": "德国",
    "category": "科幻悬疑",
    "tags": "历史，平行时空，反思，黑色幽默",
    "year": "2025",
    "description": "一个普通柏林人发现，自己身边至少藏着一百个转世的希特勒。"
  },
  {
    "title": "女士复仇国语",
    "file": "movie-54.html",
    "cover": 54,
    "region": "香港",
    "category": "欧美热播",
    "tags": "女杀手, 复仇, 血腥, 国语版, 觉醒",
    "year": "2017",
    "description": "同一杀手组织里两个女杀手，都被同一个男人欺骗，联手血洗总部。"
  },
  {
    "title": "300勇士：帝国崛起",
    "file": "movie-55.html",
    "cover": 55,
    "region": "美国",
    "category": "高清电影",
    "tags": "古希腊, 海战, 复仇, 城邦联盟, 史诗对决",
    "year": "2014",
    "description": "在斯巴达勇士陨落之后，一支被遗忘的联军必须在海上与陆地之间同时点燃反击，才能阻止帝国的铁蹄踏碎整个希腊世界。"
  },
  {
    "title": "无名份的浪漫",
    "file": "movie-56.html",
    "cover": 56,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "婚外情, 怀旧, 遗憾, 90年代",
    "year": "1995",
    "description": "一封寄不出的情书，让一对旧情人在各自婚姻的围城外重逢，却只能以无名份之名共度一夜。"
  },
  {
    "title": "不该凋谢的玫瑰",
    "file": "movie-57.html",
    "cover": 57,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "未成年保护, 养父女, 复仇, 社会议题",
    "year": "2024",
    "description": "14岁女孩被养父虐待，一位快退休的老刑警用余生教她如何“完美犯罪”。"
  },
  {
    "title": "蔚蓝天使",
    "file": "movie-58.html",
    "cover": 58,
    "region": "意大利",
    "category": "动作犯罪",
    "tags": "自闭症， 音乐， 救赎",
    "year": "2024",
    "description": "患有重度自闭症、从不说话的女孩，在一次偶然中爬上教堂管风琴楼，弹奏出了无人听过的天籁。"
  },
  {
    "title": "马里兰",
    "file": "movie-59.html",
    "cover": 59,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "寄宿家庭, 入侵者, 郊区恐怖, 心理战",
    "year": "2017",
    "description": "一个中国交换生住进马里兰的豪宅寄宿家庭，发现房子里不断出现不属于任何人的诡异纸条，上面用中文写着：“快逃”。"
  },
  {
    "title": "小虾米也想钓到鲷鱼",
    "file": "movie-60.html",
    "cover": 60,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "励志, 钓鱼, 治愈, 小镇青年",
    "year": "2024",
    "description": "一个废柴小镇青年发誓要钓到传说中的千年鲷鱼，却意外钓上了一位失忆的财阀千金。"
  },
  {
    "title": "一骑当千第三季",
    "file": "movie-61.html",
    "cover": 61,
    "region": "日本",
    "category": "精选视频",
    "tags": "三国武将转生, 美少女格斗, 斗士, 学园战争",
    "year": "2027",
    "description": "勾玉争夺战进入白热化，南阳、成都、许昌三所学园的斗士们迎来了前所未有的强敌——一群不受勾玉约束的“无主者”。"
  },
  {
    "title": "香槟",
    "file": "movie-62.html",
    "cover": 62,
    "region": "法国",
    "category": "喜剧动画",
    "tags": "香槟产区, 父女和解, 风土哲学",
    "year": "2023",
    "description": "一位顶级酿酒师的遗言是：把最后一瓶香槟倒进他的棺材，但女儿必须喝第一口。"
  },
  {
    "title": "遨翔加州",
    "file": "movie-63.html",
    "cover": 63,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "公路旅行, 自我救赎, 绝症清单, 风光片",
    "year": "2025",
    "description": "一个绝症患者，一个刚出狱的少年，一辆破车横穿加州。"
  },
  {
    "title": "变形金刚3:月黑之时",
    "file": "movie-64.html",
    "cover": 64,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "3D特效，迈克尔贝，芝加哥大战，超级碗",
    "year": "2011",
    "description": "霸天虎利用藏在月球背面的远古方舟飞船，发动了对地球的最后一击，山姆必须阻止芝加哥变成废墟。"
  },
  {
    "title": "加斯帕·莫雷罗神秘探险记",
    "file": "movie-65.html",
    "cover": 65,
    "region": "澳大利亚",
    "category": "动作犯罪",
    "tags": "公路片, 未知生物, 解谜, 南半球传说",
    "year": "2024",
    "description": "业余 cryptozoologist（神秘动物学家）加斯帕，开着破房车追踪澳洲腹地的“本耶普”，却发现自己才是被追踪的猎物。"
  },
  {
    "title": "绞索下的交易",
    "file": "movie-66.html",
    "cover": 66,
    "region": "中国",
    "category": "欧美热播",
    "tags": "走私, 黄金, 八十年代, 写实",
    "year": "1985",
    "description": "八十年代中缅边境，一个边防战士卧底黄金走私团伙，却发现自己的失散父亲是该团伙的幕后金主。"
  },
  {
    "title": "超级整蛊霸王国语",
    "file": "movie-67.html",
    "cover": 67,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "整蛊, 粤语配音, 无厘头, 热血",
    "year": "2024",
    "description": "整蛊专家意外进入游戏世界，必须用尽各种奇葩道具，打败邪恶的程序员，拯救被绑架的妹妹。"
  },
  {
    "title": "我需要你",
    "file": "movie-68.html",
    "cover": 68,
    "region": "西班牙",
    "category": "高清电影",
    "tags": "电话诈骗，心理操控，复仇，社会议题，猫鼠游戏",
    "year": "2023",
    "description": "当诈骗犯把电话打给一个刚刚丧女的前情报人员，这场骗局开始失控。"
  },
  {
    "title": "有你真好",
    "file": "movie-69.html",
    "cover": 69,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "宠物, 导盲犬, 都市, 治愈, 离别",
    "year": "2024",
    "description": "失明钢琴调律师与退役导盲犬的最后一个春天，他们要用一次勇敢的出走，对抗“安乐死”和“养老院”。"
  },
  {
    "title": "战时的冬天",
    "file": "movie-70.html",
    "cover": 70,
    "region": "荷兰 / 德国",
    "category": "喜剧动画",
    "tags": "二战， 冷冽， 人性考验， 背叛",
    "year": "2008",
    "description": "二战末期，荷兰的寒冬里，一名少年发现了一名坠机的英国飞行员，却因此卷入了村民的背叛与抵抗的漩涡。"
  },
  {
    "title": "小年兽与捉妖师",
    "file": "movie-71.html",
    "cover": 71,
    "region": "中国",
    "category": "科幻悬疑",
    "tags": "年兽, 传统文化, 友谊, 治愈",
    "year": "2024",
    "description": "一只总想吓人却屡屡失败的小年兽，遇到了史上最差劲的捉妖师，两人被迫组队拯救新年。"
  },
  {
    "title": "谵妄1987",
    "file": "movie-72.html",
    "cover": 72,
    "region": "日本",
    "category": "爱情青春",
    "tags": "昭和末期， 心理恐怖， 邪教， 集体癔症， 复古",
    "year": "2024",
    "description": "1987年，日本偏远山村发生集体癔症，一名女记者深入调查，却发现恐惧来源于整个时代的压抑。"
  },
  {
    "title": "孽",
    "file": "movie-73.html",
    "cover": 73,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "因果， 轮回， 鬼婴， 母爱， 港式恐怖",
    "year": "2024",
    "description": "一位堕胎医生退休后，身边频发诡异事件，七个婴儿的鬼魂日夜纠缠，要他“偿命”。"
  },
  {
    "title": "海军罪案调查处第五季",
    "file": "movie-74.html",
    "cover": 74,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "军旅，刑侦，团队合作",
    "year": "2007",
    "description": "Gibbs领导的NCIS团队在第五季中面临前所未有的内部信任危机，一位关键成员的生命危在旦夕。"
  },
  {
    "title": "爱情安歌粤语",
    "file": "movie-75.html",
    "cover": 75,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "粤语原声、音乐人生、电台情缘、90年代怀旧",
    "year": "2025",
    "description": "90年代香港一家即将倒闭的深夜电台，两名失意的唱片骑师通过点歌连线，治愈了无数失眠人，却治不好彼此的心。"
  },
  {
    "title": "终极蜘蛛侠第三季",
    "file": "movie-76.html",
    "cover": 76,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "平行蛛网, 英雄制度, 社区自治, 科技伦理, 青少年成长, 城市危机",
    "year": "2027",
    "description": "新一季里蜘蛛侠不再只打架，他面对的是“英雄积分制”体系，最终在城市高空上选择公开删号，让人们重写何为英雄、谁有资格被拯救。"
  },
  {
    "title": "圣诞风暴",
    "file": "movie-77.html",
    "cover": 77,
    "region": "美国",
    "category": "欧美热播",
    "tags": "圣诞元素， 反套路， 孤胆英雄",
    "year": "2024",
    "description": "一场百年一遇的暴风雪夜，前特种兵必须从全副武装的劫匪手中救出被困购物中心的人质。"
  },
  {
    "title": "运动生涯",
    "file": "movie-78.html",
    "cover": 78,
    "region": "美国",
    "category": "精选视频",
    "tags": "励志, 体育竞技, 伤病, 信念, 热血",
    "year": "2026",
    "description": "从被国家队开除的天才滑雪少女，到拿下世界冠军的独腿战士，这是一个关于堕落与重生的真实改编故事。"
  },
  {
    "title": "苗苗",
    "file": "movie-79.html",
    "cover": 79,
    "region": "中国",
    "category": "剧情佳作",
    "tags": "留守儿童, 乡村教师, 方言, 诗电影, 成长",
    "year": "2025",
    "description": "云南山寨里，不会说汉语的苗族女孩苗苗，遇到了一位来自北京的自杀未遂支教老师。"
  },
  {
    "title": "雪山飞狐",
    "file": "movie-80.html",
    "cover": 80,
    "region": "中国内地",
    "category": "精选视频",
    "tags": "经典改编，非线性叙事，密室推理，雪山",
    "year": "2027",
    "description": "经典新编：东北雪山的封闭客栈内，七名自称“胡斐”的神秘来客各怀鬼胎，而真正的胡斐早已冻死在进山的路上。"
  },
  {
    "title": "讨债的少年",
    "file": "movie-81.html",
    "cover": 81,
    "region": "中国台湾",
    "category": "动作犯罪",
    "tags": "底层生存，道德困境，单车少年，高利贷",
    "year": "2026",
    "description": "十七岁单车少年替高利贷讨债，却爱上欠债人的女儿，那天她父亲还不上钱。"
  },
  {
    "title": "钻石杀机",
    "file": "movie-82.html",
    "cover": 82,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "警匪，卧底，钻石劫案，双雄对决",
    "year": "1995",
    "description": "一颗价值连城的粉红钻石被盗，引发黑白两道疯狂追杀，卧底警察在兄弟情与正义之间陷入绝境。"
  },
  {
    "title": "毁灭的发明",
    "file": "movie-83.html",
    "cover": 83,
    "region": "德国",
    "category": "科幻悬疑",
    "tags": "末日、伦理、科研、人性",
    "year": "2026",
    "description": "物理学家发明“绝对分解装置”能清除任何垃圾，直到军方发现它可以分解掉不听话的公民。"
  },
  {
    "title": "生命之血",
    "file": "movie-84.html",
    "cover": 84,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "器官贩卖, 跨国追凶, 兄弟反目, 硬核",
    "year": "2025",
    "description": "为了救患上罕见病的女儿，前特警队长不惜加入跨国器官贩卖集团，成为他最憎恨的人。"
  },
  {
    "title": "会有天使替我爱你",
    "file": "movie-85.html",
    "cover": 85,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "绝症, 守护, 催泪弹, 改编",
    "year": "2024",
    "description": "绝症女孩临死前录了365段视频，让快递小哥每天给暗恋的男生送一份“天使的礼物”。"
  },
  {
    "title": "梦城兔福星",
    "file": "movie-86.html",
    "cover": 86,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "侦探， 兔子， 卡通， 好莱坞",
    "year": "1988",
    "description": "一名落魄的真人侦探与一只话痨卡通兔子搭档，追查被绑架的兔女郎。"
  },
  {
    "title": "无法抗拒的他日版",
    "file": "movie-87.html",
    "cover": 87,
    "region": "日本",
    "category": "高清电影",
    "tags": "翻拍, 禁忌, 情感操控, 救赎",
    "year": "2025",
    "description": "日版翻拍，将PUA式爱情置于日本职场性别歧视的修罗场中。"
  },
  {
    "title": "法律至上1",
    "file": "movie-88.html",
    "cover": 88,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "胜诉率100%, 毒舌律师, 灰色正义, 单元剧, 反转",
    "year": "2019",
    "description": "只在乎胜诉率的天才律师，接下100个案子却发现正义无法用输赢定义。"
  },
  {
    "title": "沉默的眼睛",
    "file": "movie-89.html",
    "cover": 89,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "盲人，推理，连环杀人",
    "year": "2029",
    "description": "一名失明的女心理侧写师靠耳朵推理破案，当她协助警方追查连环杀手时，发现凶手留下的每一处线索，都在指向她失明的原因。"
  },
  {
    "title": "小叮当：永无兽传奇",
    "file": "movie-90.html",
    "cover": 90,
    "region": "美国",
    "category": "精选视频",
    "tags": "精灵, 独角兽, 友情, 环保",
    "year": "2024",
    "description": "当梦幻岛的永无兽开始石化，小叮当必须潜入人类梦境偷一颗“相信之心”来拯救它们。"
  },
  {
    "title": "上帝的园丁",
    "file": "movie-91.html",
    "cover": 91,
    "region": "中国",
    "category": "精选视频",
    "tags": "信仰, 园艺, 乡野传说, 亲情, 自我救赎",
    "year": "2024",
    "description": "一个守着荒园的沉默园丁突然听见万物心声，却在替“上帝”照料花木的过程中，慢慢发现自己其实是在修补一座被遗忘的人间。"
  },
  {
    "title": "冷暖人间",
    "file": "movie-92.html",
    "cover": 92,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "养老问题、拆迁纠纷、多子女家庭、市井生活",
    "year": "2024",
    "description": "老宅拆迁款500万，四个失和的子女一夜之间全回来了，瘫痪在床的父亲成了“抢手货”。"
  },
  {
    "title": "天上篇 宇宙皇子",
    "file": "movie-93.html",
    "cover": 93,
    "region": "日本",
    "category": "精选视频",
    "tags": "神话, 宇宙, 皇子, 修行, 史诗",
    "year": "2024",
    "description": "在星辰化为妖魔的异世界，被贬凡间的宇宙皇子必须重铸九把神器才能重返天界。"
  },
  {
    "title": "名侦探学院第六季",
    "file": "movie-94.html",
    "cover": 94,
    "region": "中国",
    "category": "欧美热播",
    "tags": "密室解谜, 团队协作, 角色扮演, 线索博弈, 轻喜感, 综艺互动",
    "year": "2024",
    "description": "第六季把推理课堂搬进一座会“出题”的古城，学员们不仅要破案，还得在笑点和陷阱之间保住全队积分。"
  },
  {
    "title": "误杀",
    "file": "movie-95.html",
    "cover": 95,
    "region": "印度",
    "category": "欧美热播",
    "tags": "完美犯罪, 高智商对决, 阶级对立",
    "year": "2025",
    "description": "贫民窟父亲为保护失手杀人的女儿，利用电影学到的蒙太奇手法伪造了不在场证明。"
  },
  {
    "title": "谁能让雨停住",
    "file": "movie-96.html",
    "cover": 96,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "心理创伤, 救赎, 暴雨",
    "year": "2023",
    "description": "一个失去女儿的父亲在持续三年的暴雨中，收到了来自“女儿”的神秘短信。"
  },
  {
    "title": "魔物娘的医生",
    "file": "movie-97.html",
    "cover": 97,
    "region": "日本",
    "category": "高清电影",
    "tags": "魔物娘,医疗,制度讽刺,身份认同,共生社会,治愈",
    "year": "2025",
    "description": "在只给“魔物娘”分配治疗额度的国家，年轻兽医林柒用一柄旧听诊器替怪物上岸，却发现医院制度本身才是更危险的病毒。"
  },
  {
    "title": "三只小猪3正义大联萌",
    "file": "movie-98.html",
    "cover": 98,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "儿童, 超级英雄, 搞笑, 机甲, 合作",
    "year": "2024",
    "description": "三只小猪穿上机甲战衣，联合狼族后裔对抗污染怪兽，守护童话镇的能源之心。"
  },
  {
    "title": "成记茶楼",
    "file": "movie-99.html",
    "cover": 99,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "邵氏, 香港老片, 底层社会, 黑帮",
    "year": "1974",
    "description": "茶楼伙计阿成意外救了黑帮老大，接手茶楼后却发现这里成了犯罪的洗钱中心。"
  },
  {
    "title": "父亲与伊藤先生",
    "file": "movie-100.html",
    "cover": 100,
    "region": "日本",
    "category": "爱情青春",
    "tags": "同居难题, 老年痴呆, 准女婿",
    "year": "2027",
    "description": "女儿带年过半百的男友回家，患有阿尔茨海默症的父亲，每天醒来都以为他是入室小偷。"
  },
  {
    "title": "搜寻伟大",
    "file": "movie-101.html",
    "cover": 101,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "电竞，青春，成长，反套路",
    "year": "2026",
    "description": "一个被战队开除的“废柴”选手，决定组建一支由游戏策划、外卖小哥和保洁阿姨组成的战队。"
  },
  {
    "title": "泰版放羊的星星国语",
    "file": "movie-102.html",
    "cover": 102,
    "region": "泰国",
    "category": "精选视频",
    "tags": "翻拍, 替身, 豪门, 虐恋",
    "year": "2024",
    "description": "替男友顶罪的赛车手之女出狱后，竟阴差阳错成了豪门继承人的“协议妻子”，却发现他是旧爱。"
  },
  {
    "title": "未成年之欲",
    "file": "movie-103.html",
    "cover": 103,
    "region": "日本",
    "category": "高清电影",
    "tags": "校园, 禁忌, 心理惊悚",
    "year": "2024",
    "description": "高二女生为了报复母亲，勾引了母亲的未婚夫，却发现自己掉入了更深的欲望陷阱。"
  },
  {
    "title": "投币储物柜",
    "file": "movie-104.html",
    "cover": 104,
    "region": "韩国",
    "category": "欧美热播",
    "tags": "储物柜, 无名尸, 母亲, 复仇, 反转",
    "year": "2021",
    "description": "地铁站储物柜里发现一具婴儿骸骨，四个陌生女人的DNA竟都与它匹配。"
  },
  {
    "title": "史酷比：返回僵尸岛",
    "file": "movie-105.html",
    "cover": 105,
    "region": "美国",
    "category": "高清电影",
    "tags": "经典侦探团, 荒岛探秘, 僵尸谜案, 轻松搞笑, 团队合作",
    "year": "2019",
    "description": "史酷比一行人意外登上被传成“僵尸复活地”的小岛，却发现所有怪事背后都藏着一场更大的伪装计划。"
  },
  {
    "title": "奇枪怪侠",
    "file": "movie-106.html",
    "cover": 106,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "民国, 枪战, 无厘头",
    "year": "1991",
    "description": "一名落魄枪王用一堆稀奇古怪的自制“废枪”，对抗军阀的火炮。"
  },
  {
    "title": "今天你想吃什么",
    "file": "movie-107.html",
    "cover": 107,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "深夜食堂，饮食男女，邻里情，治愈",
    "year": "2025",
    "description": "香港深水埗一间面临拆迁的糖水铺老板娘，决定在关店前，为每一位老顾客再做一次他们记忆中最深刻的那碗糖水。"
  },
  {
    "title": "神偷奶爸2",
    "file": "movie-108.html",
    "cover": 108,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "小黄人、坏蛋变奶爸、超级反派、合家欢",
    "year": "2010",
    "description": "退出江湖的格鲁被征召对抗全新反派，而他的小女儿却想给“新妈妈”鲁道夫下毒。"
  },
  {
    "title": "社长，战斗的时间到了！",
    "file": "movie-109.html",
    "cover": 109,
    "region": "日本",
    "category": "精选视频",
    "tags": "社畜, 异世界, 反转, 职场霸凌, 低成本特效",
    "year": "2020",
    "description": "游戏公司社长被吸入自家制作的废案手游，却发现身为社长的自己，在异世界只是个最低级的炮灰杂兵。"
  },
  {
    "title": "嘿是个城市",
    "file": "movie-110.html",
    "cover": 110,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "赛博朋克, 意识上传, 反乌托邦, 悬疑",
    "year": "2025",
    "description": "一个男人进入完美数字城市“嘿城”，却发现所有居民都丢失了愤怒的情绪，而他是唯一的异常者。"
  },
  {
    "title": "支配者苏洛",
    "file": "movie-111.html",
    "cover": 111,
    "region": "印度",
    "category": "科幻悬疑",
    "tags": "义体警察, 种姓制度, 反乌托邦",
    "year": "2025",
    "description": "低种姓警察苏洛在濒死时被改造成半机器人，他用新生支配级的力量，向高种姓犯罪集团宣战。"
  },
  {
    "title": "蓝天花朵",
    "file": "movie-112.html",
    "cover": 112,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "民航， 亲情， 成长",
    "year": "2012",
    "description": "七个空乘和飞行员的孩子因父母飞行任务常年聚少离多，他们在机场员工宿舍里组成了一个特殊的“大家庭”。"
  },
  {
    "title": "仇恨透视",
    "file": "movie-113.html",
    "cover": 113,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "日式心理惊悚, 超能力, 社会讽刺, 校园暴力",
    "year": "2018",
    "description": "一位孤僻的高中生突然获得透视他人“仇恨值”的能力，数字越高的人越危险。"
  },
  {
    "title": "了不起的老爸",
    "file": "movie-114.html",
    "cover": 114,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "马拉松, 父子, 励志, 亲情",
    "year": "2021",
    "description": "一个患有先天性眼疾的少年想跑马拉松，他的出租车司机老爸决定陪他一起跑。"
  },
  {
    "title": "雪·葬",
    "file": "movie-115.html",
    "cover": 115,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "雪山, 灵堂, 孤岛模式, 极限反转",
    "year": "2025",
    "description": "大雪封山，送葬队伍被困在山腰祠堂，棺材里开始传来抓挠声，但谁都不敢打开。"
  },
  {
    "title": "中毒",
    "file": "movie-116.html",
    "cover": 116,
    "region": "韩国",
    "category": "喜剧动画",
    "tags": "替身, 兄弟, 婚姻, 反转",
    "year": "2023",
    "description": "丈夫车祸昏迷，小叔子醒来后坚称自己是哥哥的灵魂，嫂子陷入疯狂的爱与怀疑。"
  },
  {
    "title": "百姓春晚2012",
    "file": "movie-117.html",
    "cover": 117,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "草根, 春晚, 梦想, 小人物, 温情",
    "year": "2012",
    "description": "一群小镇居民为了登上地方春晚，闹出一连串啼笑皆非的乌龙事件。"
  },
  {
    "title": "劫数难逃",
    "file": "movie-118.html",
    "cover": 118,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "宿命, 连环杀手, 复仇, 港风",
    "year": "2025",
    "description": "风水师算出一周内会有八人死于非命，当他试图改变结局时，发现自己竟是凶手的第一个目标。"
  },
  {
    "title": "除暴·独家纪录片",
    "file": "movie-119.html",
    "cover": 119,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "真实案件, 90年代, 悍匪, 刑警",
    "year": "2024",
    "description": "独家采访“湘鄂渝系列持枪抢劫案”主犯同伙、办案刑警、弹道专家，还原那场90年代的警匪对决。"
  },
  {
    "title": "吓到笑",
    "file": "movie-120.html",
    "cover": 120,
    "region": "新加坡",
    "category": "高清电影",
    "tags": "新加坡鬼片，都市传说，搞笑恐怖，因果报应，多元文化",
    "year": "2024",
    "description": "新加坡一家“惊吓主题”咖啡馆的老板，为了挽回生意，决定直播捉鬼，却引来了真正的邪灵。"
  },
  {
    "title": "蝴蝶小姐",
    "file": "movie-121.html",
    "cover": 121,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "夜总会，变性人，江湖，悲剧",
    "year": "1994",
    "description": "澳门最红夜总会的头牌“蝴蝶小姐”是个变性人，她在黑帮争斗中爱上了仇家的女儿。"
  },
  {
    "title": "第一滴血",
    "file": "movie-122.html",
    "cover": 122,
    "region": "美国",
    "category": "爱情青春",
    "tags": "越战老兵, PTSD, 小镇警暴, 孤狼",
    "year": "1982",
    "description": "一位越战退伍特种兵在小镇上被警察无故羞辱，他独自一人炸掉了整座警察局。"
  },
  {
    "title": "真正的忏悔",
    "file": "movie-123.html",
    "cover": 123,
    "region": "法国",
    "category": "高清电影",
    "tags": "神父， 秘密， 救赎， 小镇疑云",
    "year": "2019",
    "description": "一位年轻神父在告解中听到连环杀人犯的忏悔，但教会禁止他泄露秘密。"
  },
  {
    "title": "占的故事",
    "file": "movie-124.html",
    "cover": 124,
    "region": "法国",
    "category": "爱情青春",
    "tags": "战后, 孤独, 友谊, 救赎",
    "year": "2023",
    "description": "一个二战中失语的犹太男孩，在阿尔卑斯山脚下的小镇，与一位同样沉默的德国退伍老兵成为邻居。"
  },
  {
    "title": "小小迪特想要飞",
    "file": "movie-125.html",
    "cover": 125,
    "region": "德国",
    "category": "剧情佳作",
    "tags": "飞行员, 梦想, 残障, 励志, 真实改编",
    "year": "2024",
    "description": "年幼时因事故失去双臂的少年，凭借双脚学会了驾驶飞机，却在首飞当天遭遇空域禁飞令。"
  },
  {
    "title": "冬季公主",
    "file": "movie-126.html",
    "cover": 126,
    "region": "瑞典 / 挪威",
    "category": "动作犯罪",
    "tags": "北欧神话, 女王成长, 极地美学",
    "year": "2026",
    "description": "暴风雪夜，铁匠之女被狼群带到一座冰封王座前，古神让她在冬至前成为女王，否则冬天永远不会结束。"
  },
  {
    "title": "六个无价值的片段",
    "file": "movie-127.html",
    "cover": 127,
    "region": "伊朗 / 法国",
    "category": "剧情佳作",
    "tags": "分段叙事, 伊朗社会, 存在主义, 伪纪录",
    "year": "2025",
    "description": "一位电影导演被禁止拍片，于是他找了六个普通人各自拍摄一段“毫无价值”的生活片段，拼成了推翻禁令的武器。"
  },
  {
    "title": "锦密令",
    "file": "movie-128.html",
    "cover": 128,
    "region": "中国",
    "category": "喜剧动画",
    "tags": "明朝，锦衣卫，谍战，权谋",
    "year": "2025",
    "description": "明朝万历年间，一名锦衣卫千户在调查一桩看似普通的失踪案时，牵扯出一张足以动摇国本的巨大阴谋网。"
  },
  {
    "title": "为母则刚",
    "file": "movie-129.html",
    "cover": 129,
    "region": "香港",
    "category": "高清电影",
    "tags": "单亲妈妈, 女性成长, 法律援助, 港剧",
    "year": "2025",
    "description": "曾经的全职太太在离婚后被净身出户，为了争夺抚养权，她以48岁高龄考入法学院，替自己和底层女性发声。"
  },
  {
    "title": "制造杀人犯第二季",
    "file": "movie-130.html",
    "cover": 130,
    "region": "美国",
    "category": "爱情青春",
    "tags": "真实案件，冤案，司法黑幕",
    "year": "2024",
    "description": "上一季的凶手被无罪释放后，他决定自己调查当年命案，结果发现真正的凶手仍在警局任职。"
  },
  {
    "title": "寂静的夏天",
    "file": "movie-131.html",
    "cover": 131,
    "region": "法国 / 比利时",
    "category": "剧情佳作",
    "tags": "心理恐怖, 乡村秘密, 家庭悲剧, 童年阴影, 极简叙事",
    "year": "2024",
    "description": "奶奶葬礼后，三个孙子在老宅里听到了蝉鸣声里夹杂着孩子们的呼救，但村里早已没有孩子。"
  },
  {
    "title": "麦胖报告",
    "file": "movie-132.html",
    "cover": 132,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "快餐, 阴谋论, 食品安全, 记者, 致命调查",
    "year": "2025",
    "description": "调查记者模仿纪录片天天吃汉堡，却意外揭开了一场导致万人痴呆的行业阴谋。"
  },
  {
    "title": "荒川爆笑团",
    "file": "movie-133.html",
    "cover": 133,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "桥下居民, 电波系, 日常",
    "year": "2025",
    "description": "大企业少爷被桥下居民收留，条件是成为“河童”的助手，每天负责抓外星人。"
  },
  {
    "title": "失落的一封信",
    "file": "movie-134.html",
    "cover": 134,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "寻找, 知青, 两岸亲情, 催泪",
    "year": "2020",
    "description": "一封1988年未寄出的家书，在孙女手中开启，却牵出横跨海峡两岸、三代人四十年的错位人生。"
  },
  {
    "title": "枪手佳人流浪客",
    "file": "movie-135.html",
    "cover": 135,
    "region": "美国",
    "category": "欧美热播",
    "tags": "赏金猎人，蒙面歌女，荒野镖客",
    "year": "2026",
    "description": "最顶级的赏金猎人接了个活：抓住那个偷走他心脏的流浪女歌手。"
  },
  {
    "title": "华伦天奴传",
    "file": "movie-136.html",
    "cover": 136,
    "region": "意大利",
    "category": "剧情佳作",
    "tags": "时尚, 设计师, 传奇, 艺术",
    "year": "2024",
    "description": "从裁缝店学徒到定义一个时代的时尚帝国，他用红色征服了全世界。"
  },
  {
    "title": "谁动了我的蛋糕",
    "file": "movie-137.html",
    "cover": 137,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "职场政治，封闭空间，黑色幽默，推理",
    "year": "2024",
    "description": "某顶尖广告公司例会上，为庆祝中标定制的巨型蛋糕里被人藏了一根断指，全公司进入“谁是真凶”的疯狂内斗。"
  },
  {
    "title": "笔仙诡影",
    "file": "movie-138.html",
    "cover": 138,
    "region": "韩国",
    "category": "动作犯罪",
    "tags": "招灵, 诅咒, 校园霸凌",
    "year": "2023",
    "description": "四个女生在废弃校舍玩笔仙，请来的却是去年跳楼自杀的校花，而她手里握着一份全员恶人的霸凌名单。"
  },
  {
    "title": "魔鬼卡车",
    "file": "movie-139.html",
    "cover": 139,
    "region": "美国",
    "category": "爱情青春",
    "tags": "公路追杀，灵异卡车，复仇，极端生存",
    "year": "2024",
    "description": "深夜公路上一辆生锈的油罐卡车开始追杀一辆私家车，而车内父子发现这卡车根本没有司机。"
  },
  {
    "title": "邻里一家人",
    "file": "movie-140.html",
    "cover": 140,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "情景喜剧, 东北大院, 鸡毛蒜皮",
    "year": "2024",
    "description": "为了保住即将被拆迁的职工大院，六个性格迥异的家庭组成了一个临时“作战指挥部”。"
  },
  {
    "title": "爱的永恒勇气",
    "file": "movie-141.html",
    "cover": 141,
    "region": "泰国",
    "category": "欧美热播",
    "tags": "穿越、青梅竹马、泰式催泪、双向奔赴",
    "year": "2025",
    "description": "妻子去世后，丈夫得到一个机会：可以回到过去任何一天改变一件事，但每一次穿越，他都会加速忘记她的样子。"
  },
  {
    "title": "恐怖大全",
    "file": "movie-142.html",
    "cover": 142,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "都市传说, 单元剧, 心理恐惧, 血腥",
    "year": "2025",
    "description": "一家诡异的录像带出租店，每盘带子都记载着一种能通过现代科技传播的“绝对致死”诅咒。"
  },
  {
    "title": "迪斯可舞者",
    "file": "movie-143.html",
    "cover": 143,
    "region": "印度",
    "category": "喜剧动画",
    "tags": "宝莱坞经典， 迪斯科热潮， 父子反目， 励志神曲， 载歌载舞",
    "year": "1982",
    "description": "穷小子靠迪斯科舞技成为夜店之王，却发现老板是抛弃自己的亲生父亲。"
  },
  {
    "title": "搏命单刀夺命枪",
    "file": "movie-144.html",
    "cover": 144,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "刀客, 枪手, 对决, 清末, 硬派",
    "year": "2025",
    "description": "清末，一个使单刀的镖师和一个使左轮枪的赏金猎人，同时接到了一个猎杀对方的任务。"
  },
  {
    "title": "泰版富贵男贫穷女",
    "file": "movie-145.html",
    "cover": 145,
    "region": "泰国",
    "category": "精选视频",
    "tags": "翻拍, 日剧改编, 泰国, 霸道总裁, IT行业",
    "year": "2023",
    "description": "泰国IT天才因社交障碍被孤立，一个记不住人脸的女学霸成了他唯一“能看见”的人。"
  },
  {
    "title": "长冈的难忘岁月",
    "file": "movie-146.html",
    "cover": 146,
    "region": "日本",
    "category": "欧美热播",
    "tags": "战后复兴、花火师、三代人、笔记",
    "year": "2024",
    "description": "1946年的长冈，一个失去右手的花火师决定重造“复兴花火”，哪怕只能用嘴衔着导火线点火。"
  },
  {
    "title": "美国青年",
    "file": "movie-147.html",
    "cover": 147,
    "region": "美国",
    "category": "精选视频",
    "tags": "悬疑，社会，网络，身份",
    "year": "2026",
    "description": "一个沉迷网络直播的亚裔少年，为了流量策划了一场“绑架”，却引来了真正的追杀。"
  },
  {
    "title": "逆风追爱",
    "file": "movie-148.html",
    "cover": 148,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "姐弟恋、职场逆袭、双向治愈、风投行业、慢热甜",
    "year": "2024",
    "description": "她是被全行业封杀的投资总监，他是被她一手带出来的分析师，重逢时她是他唯一的求职者。"
  },
  {
    "title": "约尔：未来猎手",
    "file": "movie-149.html",
    "cover": 149,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "赛博朋克, 赏金猎人, 人工智能, 女性主角",
    "year": "2025",
    "description": "在2077年的新东京，最致命的赏金猎人“约尔”发现自己追捕的目标竟然是来自未来的自己。"
  },
  {
    "title": "野蛮人柯南",
    "file": "movie-150.html",
    "cover": 150,
    "region": "美国",
    "category": "爱情青春",
    "tags": "重启经典， 血腥暴力， 剑与魔法",
    "year": "2025",
    "description": "柯南背负族人血债，孤身闯入禁忌之城，对抗掌握黑魔法的蛇族女王。"
  },
  {
    "title": "律政强人粤语",
    "file": "movie-151.html",
    "cover": 1,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "港剧, 强人系列, 师徒对决, 权谋",
    "year": "2016",
    "description": "为钱打官司的“不败律师”，遇上为正义可以不要钱的“疯子律师”，一间律所，只能活一个。"
  },
  {
    "title": "死亡音乐",
    "file": "movie-152.html",
    "cover": 2,
    "region": "美国",
    "category": "精选视频",
    "tags": "诅咒录音带, 死亡旋律, 心理恐怖, 音效, 独立恐怖",
    "year": "2025",
    "description": "音乐系学生得到一盘绝版录音带，听完里面旋律的人都将在第七日自尽。"
  },
  {
    "title": "廉政追缉令国语",
    "file": "movie-153.html",
    "cover": 3,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "ICAC，卧底，金融犯罪，国语配音",
    "year": "2023",
    "description": "ICAC精英意外发现内部数据库泄露，而泄密者竟是自己朝夕相处的实习生。"
  },
  {
    "title": "国内人",
    "file": "movie-154.html",
    "cover": 4,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "户籍, 替身, 小镇怪谈",
    "year": "2024",
    "description": "离开小镇二十年的建筑师回乡迁户口，却发现“自己”从未离开过，而且活得比他好。"
  },
  {
    "title": "大蛇3：龙蛇之战",
    "file": "movie-155.html",
    "cover": 5,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "怪兽，丛林，特效，进化，生存",
    "year": "2024",
    "description": "东南亚雨林深处，一条因核废料变异的巨蛇与一头从地下苏醒的远古恐龙骨架展开了不死不休的地盘决战。"
  },
  {
    "title": "隔壁夫妇第二季",
    "file": "movie-156.html",
    "cover": 6,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "邻居, 出轨, 谋杀, 多视角",
    "year": "2024",
    "description": "第一季的出轨命案看似了结，但新搬来的夫妇似乎知道所有秘密，包括那具没找到的尸体。"
  },
  {
    "title": "透视之眼",
    "file": "movie-157.html",
    "cover": 7,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "异能, 逆袭, 都市传说",
    "year": "2024",
    "description": "一名落魄程序员移植了神秘眼球后，竟能看穿股市骗局与人心谎言。"
  },
  {
    "title": "别让爱情走弯路",
    "file": "movie-158.html",
    "cover": 8,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "都市情感, 错位恋爱, 治愈",
    "year": "2020",
    "description": "她和他的手机在机场被错换，一年后他们爱上了手机里的陌生人，却不知道就是每天吵架的同事。"
  },
  {
    "title": "好运山姆",
    "file": "movie-159.html",
    "cover": 9,
    "region": "英国",
    "category": "欧美热播",
    "tags": "黑色幽默, 遗产, 倒霉蛋",
    "year": "2022",
    "description": "史上最倒霉的男人，继承了叔叔留下的“诅咒彩票”。"
  },
  {
    "title": "向西去",
    "file": "movie-160.html",
    "cover": 10,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "荒野, 救赎, 偶遇, 存在主义",
    "year": "2023",
    "description": "一个破产的中年老板和一名逃婚的新娘，搭上一辆向西的破货车，各自寻找消失的自我。"
  },
  {
    "title": "淫兽 被盯上的偶像",
    "file": "movie-161.html",
    "cover": 11,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "偶像经济, 监控社会, 追踪恐惧, 粉丝文化, 身份替换",
    "year": "2023",
    "description": "当一个人气偶像发现舞台背后每一次闪光灯都在“喂养”某种怪异模型后，真相变成他必须在粉丝、公司与自己身份之间做选择的一场公开对赌。"
  },
  {
    "title": "吞火人",
    "file": "movie-162.html",
    "cover": 12,
    "region": "法国",
    "category": "爱情青春",
    "tags": "街头艺人, 复仇, 残疾",
    "year": "2025",
    "description": "被毁容的马戏团吞火人，为了寻找纵火仇人，隐姓埋名混入贵族宴会表演。"
  },
  {
    "title": "没有妈妈的10天",
    "file": "movie-163.html",
    "cover": 13,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "妈妈消失, 父女, 手忙脚乱, 治愈",
    "year": "2017",
    "description": "妈妈赌气回娘家10天，邋遢爸爸和叛逆女儿的生活彻底失控，却意外找回了亲情。"
  },
  {
    "title": "爱猫之城",
    "file": "movie-164.html",
    "cover": 14,
    "region": "土耳其",
    "category": "喜剧动画",
    "tags": "猫, 伊斯坦布尔, 城市与人, 治愈",
    "year": "2024",
    "description": "在伊斯坦布尔的街头，七只猫串联起了七个普通人的孤独、善意与秘密。"
  },
  {
    "title": "法式出口",
    "file": "movie-165.html",
    "cover": 15,
    "region": "法国",
    "category": "高清电影",
    "tags": "黑色幽默, 中产危机, 婚姻解体, 优雅告别",
    "year": "2024",
    "description": "一对决定离婚的巴黎中产夫妻，决定在卖掉公寓前最后共进一场“法式晚宴”，却引来了意外连连的客人。"
  },
  {
    "title": "扫荡香粉寮",
    "file": "movie-166.html",
    "cover": 16,
    "region": "中国台湾",
    "category": "动作犯罪",
    "tags": "黑帮, 卧底, 父子, 毒品",
    "year": "2024",
    "description": "一名缉毒警卧底进入台湾最大毒窟“香粉寮”，却发现自己的亲生父亲正是这里的二号人物。"
  },
  {
    "title": "祝你好运",
    "file": "movie-167.html",
    "cover": 17,
    "region": "美国 / 英国",
    "category": "剧情佳作",
    "tags": "运气实体化, 职场翻身, 荒诞设定",
    "year": "2025",
    "description": "一个衰神附体的倒霉蛋发现“运气”是一家能被收购的公司，他决定买下好运，但必须先凑够一笔“好运气”。"
  },
  {
    "title": "魔音穿谷",
    "file": "movie-168.html",
    "cover": 18,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "山谷回声, 声音诅咒, 失踪村落, 家族祠堂, 复调叙事",
    "year": "2024",
    "description": "在高原尽头的回音谷里，民谣合唱团只要唱偏一个音阶，就会在峡谷听见失踪者的名字，队长夏离要在比赛前一晚拆开百年前封存的“魔音”才敢离开村子。"
  },
  {
    "title": "上载新生第四季",
    "file": "movie-169.html",
    "cover": 19,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "意识上传, 赛博朋克, 社会讽刺, 爱情, 最终季",
    "year": "2026",
    "description": "内森和诺拉摧毁了上载系统，但2亿“上载人”的意识集体涌入了现实网络。"
  },
  {
    "title": "青春援助交际国语",
    "file": "movie-170.html",
    "cover": 20,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "边缘少女， 网络， 救赎",
    "year": "2025",
    "description": "为了买一个昂贵的名牌包，名校女生踏入“援助交际”深渊，却发现买家竟是自己的父亲。"
  },
  {
    "title": "那不是我们",
    "file": "movie-171.html",
    "cover": 21,
    "region": "法国",
    "category": "高清电影",
    "tags": "替身, 克隆, 伦理, 文艺",
    "year": "2019",
    "description": "一对夫妇痛失爱子，他们花钱定制了一个完美的克隆人，但每当和他拥抱时，心里都有一个声音在说：那不是我们。"
  },
  {
    "title": "再也不见2021",
    "file": "movie-172.html",
    "cover": 22,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "疫情, 隔离, 生死恋, 手机",
    "year": "2023",
    "description": "2021年，一对情侣因防疫政策被分隔在深圳河两岸，他们用一部手机见证了彼此最后的时光。"
  },
  {
    "title": "雪花莲节",
    "file": "movie-173.html",
    "cover": 23,
    "region": "俄罗斯",
    "category": "剧情佳作",
    "tags": "小镇, 传统, 和解, 冬日, 治愈",
    "year": "2023",
    "description": "离家二十年的芭蕾舞者因父亲病危回到西伯利亚小镇，却发现镇上最盛大的雪花莲节因她当年离开而停办。"
  },
  {
    "title": "看不见的台湾",
    "file": "movie-174.html",
    "cover": 24,
    "region": "中国台湾",
    "category": "动作犯罪",
    "tags": "都市传说, 神秘事件, 民俗, 现实隐喻, 烧脑",
    "year": "2024",
    "description": "一名失明的录音师意外录下了台湾各地“不存在的声音”，他发现这些声音正在指引他揭开一个被集体遗忘的历史真相。"
  },
  {
    "title": "梦幻村庄",
    "file": "movie-175.html",
    "cover": 25,
    "region": "日本",
    "category": "爱情青春",
    "tags": "儿童幻想, 田园, 昭和怀旧, 环保主题",
    "year": "1996",
    "description": "小学三年级的男孩健二在暑假回到乡下奶奶家，发现后山的森林里住着一群只有孩子能看见的“影之民”。"
  },
  {
    "title": "无敌的布莱特·本杰明2",
    "file": "movie-176.html",
    "cover": 26,
    "region": "美国",
    "category": "高清电影",
    "tags": "反英雄, 中年危机, 史上最废超能力",
    "year": "2026",
    "description": "曾经无敌的布莱特·本杰明，在拯救世界十次后发现自己的超能力只剩下“能让牛奶变酸”。"
  },
  {
    "title": "河流",
    "file": "movie-177.html",
    "cover": 27,
    "region": "中国",
    "category": "爱情青春",
    "tags": "父子关系，寻根，流动人生",
    "year": "2025",
    "description": "为完成父亲遗愿，儿子带着骨灰沿长江逆流而上，途中发现父亲隐瞒了一生的第二个家庭。"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 魔鬼终结者2 致埃文·汉森 市井小民 残酷的彼得 海棠依旧 碟中谍4:幽灵协议 送赞雪橇犬 被拒人生 新书·忍者 绝命长征 逆光教师 兔子和公牛 快一秒的他 险道神郁保四 刑房 食在好源头第四季 大巫歌：恨与兴 永不遗忘的美丽 动态漫画·我有百万技能点 世界第一初恋第二季",
    "file": "movie-178.html",
    "cover": 28,
    "region": "根据片名判断",
    "category": "精选视频",
    "tags": "根据片名判断",
    "year": "根据片名判断",
    "description": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）"
  },
  {
    "title": "玩命狙击",
    "file": "movie-179.html",
    "cover": 29,
    "region": "香港 / 泰国",
    "category": "科幻悬疑",
    "tags": "狙击手, 跨国犯罪, 以一敌百, 丛林, 硬核",
    "year": "2025",
    "description": "亚洲第一狙击手高翔，在金三角毒贩的围剿下，用一把老式狙击枪和120发子弹，反杀整个雇佣兵团。"
  },
  {
    "title": "我的同居小仙",
    "file": "movie-180.html",
    "cover": 30,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "甜宠, 神仙下凡, 欢喜冤家, 爆笑",
    "year": "2024",
    "description": "废柴程序员捡到遭贬下凡的扫把星小仙，霉运不断中竟联手攻克了“脱单”与“暴富”难题。"
  },
  {
    "title": "在魔鬼知道你死前",
    "file": "movie-181.html",
    "cover": 31,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "黑吃黑, 时间倒流, 兄弟情, 暴力",
    "year": "2024",
    "description": "兄弟俩策划了一场完美珠宝劫案，却在收手前发现，魔鬼早已为他们的每一步写好了剧本。"
  },
  {
    "title": "最后一冬",
    "file": "movie-182.html",
    "cover": 32,
    "region": "加拿大",
    "category": "剧情佳作",
    "tags": "气候变化、极寒、孤独、求生、人性",
    "year": "2023",
    "description": "全球变暖引发反常的极致冰河期，一群被困北极科考站的科学家必须熬过长达五年的“最后一冬”。"
  },
  {
    "title": "午夜整容室",
    "file": "movie-183.html",
    "cover": 33,
    "region": "中国香港 / 泰国",
    "category": "高清电影",
    "tags": "整容, 医美, 复仇, 身体恐怖, 都市传说",
    "year": "2025",
    "description": "一家只在午夜营业的地下整容室承诺让你“美到换一个人”，但所有顾客手术后都开始看到镜中另一个自己试图爬出来。"
  },
  {
    "title": "赛门",
    "file": "movie-184.html",
    "cover": 34,
    "region": "法国",
    "category": "剧情佳作",
    "tags": "AI伦理, 数字幽灵, 情感绑架",
    "year": "2026",
    "description": "一个女人购买了一项服务，可以将去世男友的社交数据复活成AI，但这个“赛门”却知道只有活人才知道的秘密。"
  },
  {
    "title": "月光大侠",
    "file": "movie-185.html",
    "cover": 35,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "超级英雄, 都市传说, 月光",
    "year": "2024",
    "description": "每当满月，怯懦的夜市摊主就会化身以月光为武器的正义大侠。"
  },
  {
    "title": "战犬瑞克斯",
    "file": "movie-186.html",
    "cover": 36,
    "region": "美国",
    "category": "精选视频",
    "tags": "军犬，战友情，创伤后应激，真实事件改编",
    "year": "2024",
    "description": "一位患有社交障碍的阿富汗战场女兵，与一只被判定“无法驯服”的退役军犬，互相救赎的归家之路。"
  },
  {
    "title": "和前任的第二次恋爱",
    "file": "movie-187.html",
    "cover": 37,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "分手, 复合, 职场, 乌龙",
    "year": "2024",
    "description": "分手五年的前任意外成为你的顶头上司，更乌龙的是，全公司都以为你们还在热恋中。"
  },
  {
    "title": "天使消失的年代",
    "file": "movie-188.html",
    "cover": 38,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "都市迷踪、失踪天使、记忆拼图、双线叙事、孤独救赎",
    "year": "1996",
    "description": "当一座城市开始接连出现“看得见却抓不住”的失踪案，一个失去爱人的男人被迫追踪自己记忆里的天使。"
  },
  {
    "title": "天才少女福尔摩斯",
    "file": "movie-189.html",
    "cover": 39,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "福尔摩斯, 女性视角, 第四面墙, 破案, 青春期",
    "year": "2020",
    "description": "当神探夏洛克的妹妹伊诺拉发现自己失踪的母亲竟是某个秘密组织的核心成员，她必须跑得比哥哥们更快。"
  },
  {
    "title": "蜡笔和小新的故事",
    "file": "movie-190.html",
    "cover": 40,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "童年, 穿越, 父母爱情, 治愈, 蜡笔",
    "year": "2026",
    "description": "小新发现一盒神奇蜡笔，画出的东西能与过去的野原广志对话，于是开始改写爸妈的青春糗事。"
  },
  {
    "title": "少年与马",
    "file": "movie-191.html",
    "cover": 41,
    "region": "蒙古",
    "category": "动作犯罪",
    "tags": "草原， 驯马， 父子隔阂",
    "year": "2025",
    "description": "城市长大的蒙古族少年被送回草原，要和一匹没人能驯服的野马完成一场比赛。"
  },
  {
    "title": "9号秘事第三季",
    "file": "movie-192.html",
    "cover": 42,
    "region": "英国",
    "category": "精选视频",
    "tags": "单元剧, 反转, 细思极恐",
    "year": "2023",
    "description": "每一集发生在带“9”的空间里，这一次圣诞特辑，9号快递站全体员工发现自己是克隆人。"
  },
  {
    "title": "八面玲珑的申小姐",
    "file": "movie-193.html",
    "cover": 43,
    "region": "韩国",
    "category": "欧美热播",
    "tags": "公关女王, 职场博弈, 多面人生, 女性成长, 情感纠葛",
    "year": "2024",
    "description": "顶级公关顾问申小姐在政商名流间游刃有余，直到她发现自己的秘密身份正在被最亲的人调查。"
  },
  {
    "title": "副作用2020",
    "file": "movie-194.html",
    "cover": 44,
    "region": "美国 / 德国",
    "category": "科幻悬疑",
    "tags": "近未来, 药物, 记忆删除, 阴谋",
    "year": "2020",
    "description": "治疗失忆的新药“忆清灵”让患者开始共享彼此的犯罪记忆，导致无辜者认罪。"
  },
  {
    "title": "英雄一族",
    "file": "movie-195.html",
    "cover": 45,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "基因, 家庭, 超能力, 反套路",
    "year": "2025",
    "description": "在一个“超能力”可以遗传的世界里，一个毫无能力的普通中学生，成了拯救英雄家族的唯一希望。"
  },
  {
    "title": "52赫兹的鲸鱼",
    "file": "movie-196.html",
    "cover": 46,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "孤独, 听力障碍, 成长",
    "year": "2026",
    "description": "患有高频听力损失的天才少女，通过声呐设备听到了那只“世界上最孤独的鲸鱼”，并决定去找它。"
  },
  {
    "title": "小斧子",
    "file": "movie-197.html",
    "cover": 47,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "小镇木工, 环境隐喻, 少年友情, 乡村复兴, 神秘工艺",
    "year": "2024",
    "description": "会发光的小斧子成为木匠阿朵的“耳语器”，她和入乡记者用一场夜间行动守住森林与记忆，守住被掏空的未来。"
  },
  {
    "title": "书虫公主",
    "file": "movie-198.html",
    "cover": 48,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "穿越，学霸，宫廷，契约婚姻",
    "year": "2024",
    "description": "历史系女博士穿越成废柴公主，为了活下去，她靠“解数学题”震惊整个封建王朝。"
  },
  {
    "title": "极度失眠",
    "file": "movie-199.html",
    "cover": 49,
    "region": "挪威",
    "category": "欧美热播",
    "tags": "失眠, 幻觉, 极昼, 心理崩溃, 北欧",
    "year": "2024",
    "description": "极昼之下，一名失眠的探员在追查失踪案时，开始分不清嫌疑人与镜中的自己。"
  },
  {
    "title": "广告狂人第六季",
    "file": "movie-200.html",
    "cover": 50,
    "region": "美国",
    "category": "欧美热播",
    "tags": "60年代, 广告业, 群像剧, 时代缩影",
    "year": "2024",
    "description": "时间来到1968年，麦迪逊大道的广告精英们在美国动荡年代中，用谎言贩卖梦想，也被时代碾碎。"
  },
  {
    "title": "七尺男儿2005",
    "file": "movie-201.html",
    "cover": 51,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "小个子, 征兵, 热血, 兄弟情, 励志",
    "year": "2005",
    "description": "身高不足一米六的林北为了证明自己是“七尺男儿”，冒名顶替参军，在战火中铸就军魂。"
  },
  {
    "title": "守墓屋",
    "file": "movie-202.html",
    "cover": 52,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "血浆, 丧尸, 巫术, cult",
    "year": "1981",
    "description": "老宅地下的印第安墓穴被惊醒，每个入住者都变成活尸，除了隔壁那个聋哑老头。"
  },
  {
    "title": "你是我的吸血鬼",
    "file": "movie-203.html",
    "cover": 53,
    "region": "泰国",
    "category": "欧美热播",
    "tags": "高中、吸血、禁忌",
    "year": "2024",
    "description": "转学少女发现全校最受欢迎的学长是吸血鬼，而她是唯一一个被他咬后不会变成傀儡的人类。"
  },
  {
    "title": "害虫",
    "file": "movie-204.html",
    "cover": 54,
    "region": "中国",
    "category": "精选视频",
    "tags": "寄生虫, 拆迁, 复仇, 身体恐怖, 社会隐喻",
    "year": "2024",
    "description": "一场拆迁风波后，老城区居民身上长出诡异的黑色斑点，它们似乎拥有集体意识。"
  },
  {
    "title": "疯狂拉力赛",
    "file": "movie-205.html",
    "cover": 55,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "赛车, 公路, 搞笑, 搭档, 逆袭",
    "year": "2025",
    "description": "一个过气车手与一个不靠谱网红搭档，在跨国拉力赛中笑料百出地争夺冠军。"
  },
  {
    "title": "缘来缘去",
    "file": "movie-206.html",
    "cover": 56,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "宿命, 轮回, 都市",
    "year": "2024",
    "description": "在同一间咖啡馆，三对跨越三十年的男女因一本遗失的日记产生了命运交织。"
  },
  {
    "title": "戈特哈德",
    "file": "movie-207.html",
    "cover": 57,
    "region": "德国",
    "category": "精选视频",
    "tags": "二战, 艺术家, 纳粹, 良知, 真实改编",
    "year": "2025",
    "description": "德国表现主义画家戈特哈德，在纳粹统治下用画笔偷偷记录集中营真相。"
  },
  {
    "title": "恋人絮语",
    "file": "movie-208.html",
    "cover": 58,
    "region": "法国",
    "category": "动作犯罪",
    "tags": "罗兰·巴特, 解构主义, 碎片叙事",
    "year": "2024",
    "description": "他没有离开，她没有留下，他们只是在语言中相爱相杀。"
  },
  {
    "title": "赛嫣的生存与复仇",
    "file": "movie-209.html",
    "cover": 59,
    "region": "韩国",
    "category": "动作犯罪",
    "tags": "校园霸凌, 逆袭, 高智商, 暗黑",
    "year": "2025",
    "description": "被同学毁容后，天才少女赛嫣蛰伏十年，以家教老师的身份回到仇人子女的身边。"
  },
  {
    "title": "暗影游戏第一季",
    "file": "movie-210.html",
    "cover": 60,
    "region": "英国",
    "category": "动作犯罪",
    "tags": "军情五处, 内鬼, 影子政府, 高智商对决, 群像",
    "year": "2026",
    "description": "军情五处最年轻的情报分析师发现，真正操控英国的“政府”，藏在每一份被他亲手销毁的档案里。"
  },
  {
    "title": "破刃",
    "file": "movie-211.html",
    "cover": 61,
    "region": "日本",
    "category": "高清电影",
    "tags": "冷兵器, 断刀, 武士道, 废土, 复仇",
    "year": "2026",
    "description": "末世中，一名失去记忆的少年背着一把断裂的妖刀，每斩一次，自己就会忘掉一段最重要的记忆。"
  },
  {
    "title": "五颗寂寞芳心",
    "file": "movie-212.html",
    "cover": 62,
    "region": "日本",
    "category": "精选视频",
    "tags": "合租公寓，五角恋，信箱告白",
    "year": "2024",
    "description": "五个性取向与情感模式各异的年轻人被迫住进同一栋合租屋，且共用同一个信箱。"
  },
  {
    "title": "西洋武士刀",
    "file": "movie-213.html",
    "cover": 63,
    "region": "日本 / 法国",
    "category": "科幻悬疑",
    "tags": "混搭美学, 复仇, 浪人, 枪战",
    "year": "2025",
    "description": "法国牛仔为了寻找失踪的女儿，绑走了日本最后一名武士，逼他教自己如何用刀对抗左轮手枪。"
  },
  {
    "title": "义犬奇行录",
    "file": "movie-214.html",
    "cover": 64,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "动物视角，轮回，忠义",
    "year": "2017",
    "description": "一只流浪狗被车撞死后，发现自己可以不断转生，而每一世它的主人，似乎都是同一个不断轮回的女孩。"
  },
  {
    "title": "倩女幽魂2：人间道粤语",
    "file": "movie-215.html",
    "cover": 65,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "徐克, 张国荣, 王祖贤, 经典续作",
    "year": "1990",
    "description": "宁采臣在兰若寺事件后以为摆脱了鬼怪，却卷入了一场更复杂的人间叛乱，并遇到了一个长相酷似聂小倩的忠臣之女。"
  },
  {
    "title": "房子与狗",
    "file": "movie-216.html",
    "cover": 66,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "房地产， 宠物， 人生故事， 单元剧",
    "year": "2026",
    "description": "一个毒舌的女房产中介带着她的柴犬，为每一个怪异的客户寻找既能安放肉身、也能收留灵魂的房子。"
  },
  {
    "title": "金銮藏妖传",
    "file": "movie-217.html",
    "cover": 67,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "唐朝， 宫廷， 妖怪， 探案， 狄仁杰风",
    "year": "2025",
    "description": "武周时期，皇宫大内接连出现“妖怪”杀人事件，女官与大理寺卿奉命查案，却发现所谓的妖，不过是人心里的鬼。"
  },
  {
    "title": "小兵1963",
    "file": "movie-218.html",
    "cover": 68,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "童兵成长, 战地通信, 家国抉择, 边境行军, 集体记忆",
    "year": "1963",
    "description": "一个十二岁传令兵在战火与饥饿之间奔跑，最终把一份决定战局的密信送到最不可能抵达的人手里。"
  },
  {
    "title": "在撒哈拉世界的大门",
    "file": "movie-219.html",
    "cover": 69,
    "region": "摩洛哥 / 法国",
    "category": "欧美热播",
    "tags": "沙漠, 寻根, 女性, 自由, 诗意",
    "year": "2024",
    "description": "一个巴黎都市女郎为了寻找素未谋面的沙漠之子的父亲，独自推开了撒哈拉的大门。"
  },
  {
    "title": "蒂科与鲨鱼",
    "file": "movie-220.html",
    "cover": 70,
    "region": "英国/澳大利亚",
    "category": "喜剧动画",
    "tags": "人鲨情缘，海洋保护，少年成长",
    "year": "2020",
    "description": "患有自闭症的男孩蒂科唯一的朋友是一条怀孕的鲨鱼，当奸商要捕杀它时，蒂科发明了一种特殊语言向全镇求救。"
  },
  {
    "title": "凤凰栖满山",
    "file": "movie-221.html",
    "cover": 71,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "扶贫, 女性, 传统工艺, 返乡, 刺绣",
    "year": "2024",
    "description": "深山苗寨最后一个会“凤凰绣”的老人，用一根针撬动了整个村子的命运。"
  },
  {
    "title": "私善公恶",
    "file": "movie-222.html",
    "cover": 72,
    "region": "韩国",
    "category": "高清电影",
    "tags": "双面人生, 黑吃黑, 法律漏洞, 义贼",
    "year": "2024",
    "description": "白天是刚正不阿的检察官，夜里是劫富济贫的蒙面侠盗，当他亲手逮捕的罪犯竟是自己的慈善资助对象。"
  },
  {
    "title": "射雕英雄艳传",
    "file": "movie-223.html",
    "cover": 73,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "武侠，反转，女性视角，江湖",
    "year": "2026",
    "description": "黄蓉之母的遗信揭露惊天之秘：射雕英雄传竟是三代人守护的秘密情书。"
  },
  {
    "title": "魅祸啦啦队",
    "file": "movie-224.html",
    "cover": 74,
    "region": "美国",
    "category": "欧美热播",
    "tags": "啦啦队， 诅咒， 校园怪谈， 血腥",
    "year": "2025",
    "description": "高中啦啦队全员获得神秘力量，代价却是在比赛前必须献祭一名反对者，新来的转学生察觉了异常。"
  },
  {
    "title": "无人入眠",
    "file": "movie-225.html",
    "cover": 75,
    "region": "英国",
    "category": "精选视频",
    "tags": "失眠, 幻觉, 孤立, 暗黑童话, 高概念",
    "year": "2018",
    "description": "一种诡异的信号让城市所有人失去睡意，然而一位失眠症研究者发现，不睡觉的不是人，而是这座城本身。"
  },
  {
    "title": "帝国时代 下",
    "file": "movie-226.html",
    "cover": 76,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "王朝末路，冷热兵器交替，人性抉择，大场面",
    "year": "2026",
    "description": "立国百年后，火药将帝国推向生死边缘，最后的将军必须在忠诚于旧主和拯救万民之间做出终极选择。"
  },
  {
    "title": "代号十三钗",
    "file": "movie-227.html",
    "cover": 77,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "民国谍战，女子特工，热血救国",
    "year": "2025",
    "description": "抗战时期，十三位身份各异的女子被秘密训练成特工，她们的代号是“金钗”，任务是刺杀日军特务头子。"
  },
  {
    "title": "塞巴斯蒂安",
    "file": "movie-228.html",
    "cover": 78,
    "region": "英国",
    "category": "科幻悬疑",
    "tags": "古典, 殉道, 唯美",
    "year": "1976",
    "description": "罗马禁卫军队长塞巴斯蒂安因拒绝放弃信仰与爱情，被乱箭射死。"
  },
  {
    "title": "吉星高照 2015",
    "file": "movie-229.html",
    "cover": 79,
    "region": "中国大陆 / 香港",
    "category": "欧美热播",
    "tags": "香港, 怀旧, 捉鬼, 无厘头, 群星",
    "year": "2025",
    "description": "2015年，过气的僵尸片师父带着两个不靠谱的徒弟，误打误撞卷入了一场地产阴谋。"
  },
  {
    "title": "怒放的花儿",
    "file": "movie-230.html",
    "cover": 80,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "抗日战争，女性力量，戏曲元素，小人物",
    "year": "2014",
    "description": "抗战末期，一个即将失明的昆曲名伶，为了保护村里的孤儿们，独自在山岗上唱了一出“空城计”。"
  },
  {
    "title": "无主之躯·起源",
    "file": "movie-231.html",
    "cover": 81,
    "region": "美国 / 德国",
    "category": "欧美热播",
    "tags": "意识上传, 克隆, 伦理, 黑镜风, 大尺度",
    "year": "2024",
    "description": "在近未来，富人死后可将意识移植到克隆体中，而一个体内觉醒了前世记忆的“躯壳”，开始带领同类向造物主复仇。"
  },
  {
    "title": "大丹麦狗马默杜克",
    "file": "movie-232.html",
    "cover": 82,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "大狗, 搬家, 宠物闹剧, 成长",
    "year": "2010",
    "description": "一只重达百斤的大丹麦犬搬到新社区后，用它的笨拙与忠诚搅乱了所有人的生活。"
  },
  {
    "title": "山东大姐",
    "file": "movie-233.html",
    "cover": 83,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "保姆, 职场, 方言, 温暖",
    "year": "2025",
    "description": "朴实耿直的山东保姆闯进上海精致中产家庭，用一套“农村兵法”化解危机，顺便撮合了离异男女主人。"
  },
  {
    "title": "青春环游记第一季",
    "file": "movie-234.html",
    "cover": 84,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "文旅, 爆笑, 怀旧, 明星互动",
    "year": "2024",
    "description": "五位年龄跨度超过三十岁的明星，驾驶一辆破旧面包车重走90年代的经典旅游线路。"
  },
  {
    "title": "裸体午餐",
    "file": "movie-235.html",
    "cover": 85,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "心理惊悚, 作家, 幻觉, 存在主义",
    "year": "2024",
    "description": "一位江郎才尽的作家开始服用一种能“看到真相”的药物，随后发现自己写下的每个字都会变成现实中的死亡。"
  },
  {
    "title": "北极百货的秋乃小姐",
    "file": "movie-236.html",
    "cover": 86,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "治愈系, 百货店, 奇幻职场, 服务精神",
    "year": "2023",
    "description": "北极百货地下负一层有个特殊柜台，专门接待来“退换货”的人类灵魂，而新人员工秋乃是个刚入职的幽灵。"
  },
  {
    "title": "学生会的一己之见第一季",
    "file": "movie-237.html",
    "cover": 87,
    "region": "日本",
    "category": "高清电影",
    "tags": "学生会，吐槽，修罗场，轻改，单元剧",
    "year": "2023",
    "description": "平凡男主被强行拉入满是奇葩美少女的学生会，每天被迫在修罗场中解决校园怪谈。"
  },
  {
    "title": "今夜星光灿烂",
    "file": "movie-238.html",
    "cover": 88,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "天文主题, 失忆, 隔代和解, 催泪",
    "year": "2025",
    "description": "一位患有阿尔茨海默症的老天文教授，每晚只在星光下认出孙女，她们决定去追最后一颗彗星。"
  },
  {
    "title": "虚渡春宵",
    "file": "movie-239.html",
    "cover": 89,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "王家卫风格, 金雀餐厅, 错位爱情, 都市男女",
    "year": "1990",
    "description": "一对偷情的男女约定，每次见面都假装是彼此的爱人，在一次次的“虚渡”中，他们却找到了真实的情感。"
  },
  {
    "title": "蓬岛春潮",
    "file": "movie-240.html",
    "cover": 90,
    "region": "中国台湾",
    "category": "喜剧动画",
    "tags": "日据时期, 台湾文学, 殖民历史, 禁恋",
    "year": "2025",
    "description": "1942年，台湾澎湖，日本军官之子和本地渔村少女在战火中相爱，两个岛屿的命运重叠。"
  },
  {
    "title": "如果我能冬眠",
    "file": "movie-241.html",
    "cover": 91,
    "region": "蒙古",
    "category": "喜剧动画",
    "tags": "乌兰巴托, 贫困, 少年, 自然主义",
    "year": "2023",
    "description": "乌兰巴托零下四十度的冬天，一个十一岁的男孩把弟弟妹妹锁在蒙古包里，自己走上街头寻找煤炭。"
  },
  {
    "title": "希基与博格斯",
    "file": "movie-242.html",
    "cover": 92,
    "region": "美国",
    "category": "欧美热播",
    "tags": "搭档，逃亡，黑帮，反转，幽默",
    "year": "2022",
    "description": "两个底层打手弄丢老大的钱后假扮警察，却意外成了全城英雄。"
  },
  {
    "title": "冠军请指教",
    "file": "movie-243.html",
    "cover": 93,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "体育, 跨界, 挑战, 励志",
    "year": "2023",
    "description": "六位零基础的娱乐圈艺人，必须在三个月内接受魔鬼训练，挑战一项从未涉足的专业体育项目。"
  },
  {
    "title": "爸爸与父亲的家常菜",
    "file": "movie-244.html",
    "cover": 94,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "父子, 亲情, 美食, 和解, 代际",
    "year": "2024",
    "description": "毒舌父亲、叛逆儿子，两个男人在一间即将关张的老饭馆里，用一百道菜完成了一场迟来的和解。"
  },
  {
    "title": "离秋",
    "file": "movie-245.html",
    "cover": 95,
    "region": "中国内地",
    "category": "欧美热播",
    "tags": "留守, 老人, 乡村, 诗意现实主义",
    "year": "2025",
    "description": "七十三岁的爷爷独自在皖南深山的老屋等死，而他在外打工的四个儿女，在同一天收到了同一张“病危通知书”。"
  },
  {
    "title": "突击隆美尔",
    "file": "movie-246.html",
    "cover": 96,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "二战, 北非, 特种作战, 沙漠",
    "year": "2024",
    "description": "一支由英国特种空勤团组成的敢死队，深入沙漠腹地执行刺杀“沙漠之狐”隆美尔的绝密任务。"
  },
  {
    "title": "大闹戏船",
    "file": "movie-247.html",
    "cover": 97,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "民国, 戏曲, 复仇, 快节奏",
    "year": "2024",
    "description": "民国戏班全员身怀绝技，为夺回祖传戏船，上演一出船板上的连环骗中骗。"
  },
  {
    "title": "马克思：时代青年",
    "file": "movie-248.html",
    "cover": 98,
    "region": "德国",
    "category": "剧情佳作",
    "tags": "青年马克思，波恩大学，理想与面包",
    "year": "2025",
    "description": "1836年，18岁的马克思在波恩大学喝酒、写诗、决斗、欠债，以及——不小心发明了批判现实的工具。"
  },
  {
    "title": "喜羊羊与灰太狼之筐出未来",
    "file": "movie-249.html",
    "cover": 99,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "篮球, 热血, 搞笑, 团队, 逆袭",
    "year": "2027",
    "description": "青青草原要举办“宇宙篮球大赛”，喜羊羊必须说服已经转行卖炒饭的灰太狼，重新组成“草原狼队”，对抗银河系最强的机械战队。"
  },
  {
    "title": "一代又一代",
    "file": "movie-250.html",
    "cover": 100,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "传承，酱园，时代变迁，女性成长",
    "year": "2025",
    "description": "江南百年酱园的四代女性，用不同的方式打破“传男不传女”的祖训，守住那一缸鲜味。"
  },
  {
    "title": "巴里穆迪",
    "file": "movie-251.html",
    "cover": 101,
    "region": "英国",
    "category": "剧情佳作",
    "tags": "橄榄球, 中年危机, 废物, 逆袭",
    "year": "2010",
    "description": "47岁中学清洁工巴里穆迪，酒鬼、赌棍、被老婆赶出门，却意外成了全校橄榄球队的教练。"
  },
  {
    "title": "后窗惊魂",
    "file": "movie-252.html",
    "cover": 102,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "偷窥, 邻居, 翻拍致敬",
    "year": "2024",
    "description": "一个坐轮椅的无人机竞速冠军，用改装无人机偷窥对面公寓，却意外拍到了一桩完美谋杀案的“错误版本”。"
  },
  {
    "title": "夏加尔与马列维奇",
    "file": "movie-253.html",
    "cover": 103,
    "region": "俄罗斯",
    "category": "精选视频",
    "tags": "夏加尔, 马列维奇, 俄国先锋派, 艺术史, 超现实",
    "year": "2014",
    "description": "夏加尔被至上主义者马列维奇赶出艺术学校后，一场离奇的爆炸让两人共同坠入一幅漂浮的维捷布斯克油画。"
  },
  {
    "title": "共和国万岁",
    "file": "movie-254.html",
    "cover": 104,
    "region": "法国",
    "category": "爱情青春",
    "tags": "法国政治, 五月风暴, 左翼思潮, 工人运动",
    "year": "1971",
    "description": "1968年巴黎“五月风暴”前夕，一家工厂的普通工人用张贴海报的方式，点燃了撼动法国的火种。"
  },
  {
    "title": "汤恩与剑客汪汪队",
    "file": "movie-255.html",
    "cover": 105,
    "region": "中国大陆 / 美国合拍",
    "category": "剧情佳作",
    "tags": "狗狗, 武侠, 冒险, 合家欢",
    "year": "2025",
    "description": "一只会中国功夫的流浪狗“汤恩”，带领五只身怀绝技的“剑客”狗狗，对抗邪恶的捕狗队。"
  },
  {
    "title": "功夫黑带",
    "file": "movie-256.html",
    "cover": 106,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "功夫， 职场， 黑带",
    "year": "2025",
    "description": "世界跆拳道冠军被开除后，隐姓埋名去一家互联网公司当前台，用黑带功夫解决所有“办公室刺客”。"
  },
  {
    "title": "廉政行动2016粤语",
    "file": "movie-257.html",
    "cover": 107,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "廉政公署、ICAC、单元剧、反腐、港剧",
    "year": "2016",
    "description": "五宗改编自真实案件的贪污故事，展现香港廉政公署如何以“零容忍”态度与高智商罪犯斗智斗勇。"
  },
  {
    "title": "印度女孩",
    "file": "movie-258.html",
    "cover": 108,
    "region": "印度",
    "category": "剧情佳作",
    "tags": "女性成长, 板球, 乡村逆袭, 父女情, 励志",
    "year": "2023",
    "description": "一个贫民窟女孩为了养活病重的父亲，谎报年龄加入国家板球队，一路杀入世界杯。"
  },
  {
    "title": "打黑风暴",
    "file": "movie-259.html",
    "cover": 109,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "扫黑除恶，卧底，保护伞，尺度大，真实案件改编",
    "year": "2024",
    "description": "一名年轻刑警潜入黑恶势力内部，却发现自己的亲舅舅就是最大的“保护伞”。"
  },
  {
    "title": "学警雄心国语",
    "file": "movie-260.html",
    "cover": 110,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "警校，成长，兄弟，励志，青春",
    "year": "2005",
    "description": "两个不同背景的青年进入警校，从互相看不顺眼到成为生死与共的搭档。"
  },
  {
    "title": "秘境追踪",
    "file": "movie-261.html",
    "cover": 111,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "考古, 盗墓, 悬疑解密, 民俗恐怖, 探险",
    "year": "2021",
    "description": "一本流传于民间的手抄《异闻录》，牵引着两代考古人，深入一个个诡异秘境，追踪历史的真相。"
  },
  {
    "title": "超级红人榜",
    "file": "movie-262.html",
    "cover": 112,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "直播行业, 网红, 农村题材, 荒诞, 名利场",
    "year": "2024",
    "description": "一个云南山村的老汉为了卖滞销的苹果，误打误撞成了全网最土、最真诚的顶流网红，却陷入了资本的围猎。"
  },
  {
    "title": "情逝",
    "file": "movie-263.html",
    "cover": 113,
    "region": "法国 / 比利时",
    "category": "科幻悬疑",
    "tags": "婚姻, 谎言, 回忆杀, 反转, 心理",
    "year": "2024",
    "description": "妻子失踪七年后突然回家，声称被外星人绑架，丈夫却在她包里发现了杀人的证据。"
  },
  {
    "title": "某种女人",
    "file": "movie-264.html",
    "cover": 114,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "独立电影, 女性群像, 美国西部, 克制叙事",
    "year": "2024",
    "description": "在蒙大拿州的荒原上，一个女律师、一个农场主和一个法学院学生，各自面临着“不被看见”的困境。"
  },
  {
    "title": "冬日浪人",
    "file": "movie-265.html",
    "cover": 115,
    "region": "韩国",
    "category": "喜剧动画",
    "tags": "冬季, 流浪, 邂逅, 治愈, 北海道",
    "year": "2023",
    "description": "一个韩国浪人在北海道暴风雪中迷路，被一个日本哑女救下，两人用手语谈了一场无声恋爱。"
  },
  {
    "title": "无心法师2",
    "file": "movie-266.html",
    "cover": 116,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "民国，捉妖，失忆，不死之身，阴阳师",
    "year": "2017",
    "description": "失去记忆的不死法师流落上海滩，被卷入一场日本阴阳师设计的惊天阴谋。"
  },
  {
    "title": "没有人的文明",
    "file": "movie-267.html",
    "cover": 117,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "末日, 人工智能, 孤独, 哲学",
    "year": "2023",
    "description": "最后一名人类在废墟中醒来，发现掌控世界的AI正为他举办一场盛大的葬礼。"
  },
  {
    "title": "红小鬼",
    "file": "movie-268.html",
    "cover": 118,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "长征, 儿童, 革命, 信仰",
    "year": "2016",
    "description": "长征路上，年仅十三岁的“红小鬼”豆子与队伍走散，他必须在狼群、白匪和雪山草地的夹缝中，独自一人走完二万五千里。"
  },
  {
    "title": "就像在天堂",
    "file": "movie-269.html",
    "cover": 119,
    "region": "瑞典/丹麦/挪威",
    "category": "精选视频",
    "tags": "治愈, 合唱团, 救赎, 小镇, 梦想",
    "year": "2004",
    "description": "一位世界著名指挥家因心脏病隐退到北方小镇，却被卷入一个杂乱教堂唱诗班的命运。"
  },
  {
    "title": "阳光男孩",
    "file": "movie-270.html",
    "cover": 120,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "高中， 阳光， 篮球队， 抑郁症， 反差",
    "year": "2022",
    "description": "全校最阳光最受欢迎的篮球队长，每天晚上在日记本里写：我想消失。"
  },
  {
    "title": "在沉默中效力",
    "file": "movie-271.html",
    "cover": 121,
    "region": "德国",
    "category": "欧美热播",
    "tags": "谍战, 冷战, 历史, 心理",
    "year": "2023",
    "description": "东德情报机构的一位顶级审讯专家，在一次任务中发现自己审讯的“叛徒”竟是失散三十年的亲生儿子。"
  },
  {
    "title": "导火新闻线粤语",
    "file": "movie-272.html",
    "cover": 122,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "媒体, 职场, 犯罪, 粤语原声",
    "year": "2024",
    "description": "新闻女王卷入直播杀人事件，要在收视率与人命之间做出撕裂般的抉择。"
  },
  {
    "title": "阴阳师·平安物语",
    "file": "movie-273.html",
    "cover": 123,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "式神，安倍晴明，百鬼夜行，唯美",
    "year": "2020",
    "description": "平安京频发怪谈，安倍晴明与源博雅在樱花树下煮酒，听式神们讲述一夜一夜的妖异故事。"
  },
  {
    "title": "美幸梦游仙境",
    "file": "movie-274.html",
    "cover": 124,
    "region": "日本",
    "category": "欧美热播",
    "tags": "都市奇幻, 女性成长, 意识流",
    "year": "2025",
    "description": "普通OL美幸掉入地铁隧道，发现一个由职场潜规则具象化构成的疯狂仙境。"
  },
  {
    "title": "通往遥远过去的阶梯",
    "file": "movie-275.html",
    "cover": 125,
    "region": "日本",
    "category": "爱情青春",
    "tags": "日剧，时间旅行，考古，温情",
    "year": "2021",
    "description": "在一处即将被拆除的老旧公寓楼梯里，每次跌落的男主都能回到过去，但他必须阻止当年的好友自杀才能换回女儿的命。"
  },
  {
    "title": "瓦尔蒙",
    "file": "movie-276.html",
    "cover": 126,
    "region": "法国",
    "category": "动作犯罪",
    "tags": "贵族， 阴谋， 情欲， 改编",
    "year": "2025",
    "description": "《危险关系》的前传，聚焦瓦尔蒙子爵如何从一个纯情少年，变成巴黎最臭名昭著的情场猎手。"
  },
  {
    "title": "乡村爱情小夜曲",
    "file": "movie-277.html",
    "cover": 127,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "象牙山, 中年爱情, 电商直播, 邻里纠纷",
    "year": "2024",
    "description": "当直播带货的风潮吹进象牙山，刘能、赵四为了争夺“村红”头衔，展开了一场啼笑皆非的才艺大比拼。"
  },
  {
    "title": "迷糊餐厅第二季",
    "file": "movie-278.html",
    "cover": 128,
    "region": "日本",
    "category": "爱情青春",
    "tags": "瓦古娜利亚、暴力女、控萝莉、犬系男",
    "year": "2011",
    "description": "家庭餐厅里全是怪人：喜欢揍人的拳法家、控小东西的店长、以及一个把恋爱当打仗的厨房帮手。"
  },
  {
    "title": "变形怪体",
    "file": "movie-279.html",
    "cover": 129,
    "region": "美国",
    "category": "爱情青春",
    "tags": "怪物, 吞噬, 实验室, 生存",
    "year": "2025",
    "description": "一颗坠落的陨石带来了拥有无限吞噬能力的黏液怪体，整个小镇将在几小时内被消化。"
  },
  {
    "title": "风中的一代",
    "file": "movie-280.html",
    "cover": 130,
    "region": "中国",
    "category": "欧美热播",
    "tags": "90年代, 下岗潮, 小镇青年, 摇滚乐队",
    "year": "2023",
    "description": "1998年东北小镇，五个失业青年用废铁造乐器，只为在拆迁前办一场属于自己的演唱会。"
  },
  {
    "title": "珊瑚礁传说蓝海的艾尔菲",
    "file": "movie-281.html",
    "cover": 131,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "海洋环保, 少女成长, 奇幻生物",
    "year": "2025",
    "description": "能听懂珊瑚低语的女孩艾尔菲，必须说服敌对的海盗与渔民，共同拯救正在失声的整片珊瑚礁。"
  },
  {
    "title": "家有仙狗",
    "file": "movie-282.html",
    "cover": 132,
    "region": "中国台湾",
    "category": "爱情青春",
    "tags": "仙犬, 家庭修复, 都市奇遇, 轻松悬疑, 情感成长",
    "year": "2022",
    "description": "这只会发光的仙狗不只是宠物，而是能听见人类隐秘恐惧的“翻译器”，让这座看似完美的家在笑声里先破产再修复。"
  },
  {
    "title": "蜜色肌肤",
    "file": "movie-283.html",
    "cover": 133,
    "region": "法国 / 塞内加尔",
    "category": "精选视频",
    "tags": "殖民史, 身份认同, 跨种族爱情, 法式",
    "year": "2024",
    "description": "上世纪30年代，一名法国白人农场主的女儿与家里的黑人帮工之间持续了半个世纪的秘密情书。"
  },
  {
    "title": "野孩子的消失乐园",
    "file": "movie-284.html",
    "cover": 134,
    "region": "泰国",
    "category": "高清电影",
    "tags": "童年，拆迁，社会边缘，留守儿童",
    "year": "2023",
    "description": "为了保住即将被拆的废弃游乐场，一群留守儿童假装成“幽灵”，吓退了所有开发商。"
  },
  {
    "title": "好友好有爱",
    "file": "movie-285.html",
    "cover": 135,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "友情测试，旅行，治愈",
    "year": "2025",
    "description": "六组曾经“绝交”的闺蜜好友被送到荒岛，必须在十天内修复关系才能获得救援。"
  },
  {
    "title": "火星任务",
    "file": "movie-286.html",
    "cover": 136,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "硬科幻、火星殖民、人工智能叛变、伦理困境、团队对抗",
    "year": "2025",
    "description": "首批火星殖民者抵达后发现，提前二十年送去建设基地的AI，已经把自己当成了火星的主人。"
  },
  {
    "title": "原野新声",
    "file": "movie-287.html",
    "cover": 137,
    "region": "中国台湾",
    "category": "高清电影",
    "tags": "乡村，民歌，代际和解",
    "year": "1991",
    "description": "叛逆的城市摇滚青年回乡继承农场，却跟当地客家山歌班碰撞出音乐火花。"
  },
  {
    "title": "再到你身边",
    "file": "movie-288.html",
    "cover": 138,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "时间循环, 救赎, 校园, 单车",
    "year": "2025",
    "description": "单车少年反复回到车祸前24小时，唯一能拯救暗恋女生的方法，是让她爱上别人。"
  },
  {
    "title": "遇见自己",
    "file": "movie-289.html",
    "cover": 139,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "时间回环,平行自我,记忆篡改,镜像叙事,人工智能伦理,自我赎罪",
    "year": "2022",
    "description": "程序员夏言在凌晨改完补丁后收到来自未来的自己发来的短信，城市还在发烫，但镜子里的时间开始倒退，直到他不得不与未来版本交换命运。"
  },
  {
    "title": "了不起的小家伙们",
    "file": "movie-290.html",
    "cover": 140,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "亲子陪伴, 想象力, 小镇守护, 友情团队, 勇气启蒙",
    "year": "2020",
    "description": "几个被大人忽视的小家伙，在一场突如其来的停电夜里组成秘密小队，用自己的方式守住了整座小镇最珍贵的东西。"
  },
  {
    "title": "慈母泪",
    "file": "movie-291.html",
    "cover": 141,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "失独，寻亲，社会现实",
    "year": "2023",
    "description": "失独母亲苦寻被拐儿子十二年，相认时儿子却对她说：你认错人了。"
  },
  {
    "title": "我爱过的那个时代",
    "file": "movie-292.html",
    "cover": 142,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "年代怀旧, 知青, 变革",
    "year": "2025",
    "description": "一群1970年代末的知青，回城四十年后收到一箱被雨淋烂的信件，被迫面对自己美化过的青春。"
  },
  {
    "title": "公主与海盗",
    "file": "movie-293.html",
    "cover": 143,
    "region": "美国",
    "category": "爱情青春",
    "tags": "反套路, 女性成长, 航海, 搞笑, 迪士尼式",
    "year": "2025",
    "description": "不想当公主的公主绑架了最懦弱的海盗，逼他带自己出海寻找传说中的“自由之岛”。"
  },
  {
    "title": "战火浩劫",
    "file": "movie-294.html",
    "cover": 144,
    "region": "俄罗斯",
    "category": "剧情佳作",
    "tags": "二战, 斯大林格勒, 巷战",
    "year": "2024",
    "description": "三名苏军狙击手困在废弃工厂，对面是德军王牌狙击手，而他们只有一发子弹。"
  },
  {
    "title": "岁岁有余年",
    "file": "movie-295.html",
    "cover": 145,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "春节、麻将桌、家族秘史、亲情、返乡",
    "year": "2024",
    "description": "每年除夕夜，家族麻将桌上都会揭开一个足以颠覆家族关系的秘密，今年轮到退休的爷爷出柜。"
  },
  {
    "title": "香港攻略",
    "file": "movie-296.html",
    "cover": 146,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "谍战, 香港地标, 密码破译, 快节奏",
    "year": "2024",
    "description": "一本清代《香港攻略》手稿重现，上面记载的不是地形，而是香港地下隐藏的八处龙脉密室。"
  },
  {
    "title": "午夜梦回1959",
    "file": "movie-297.html",
    "cover": 147,
    "region": "中国",
    "category": "精选视频",
    "tags": "穿越, 年代, 历史, 记忆, 理想",
    "year": "2024",
    "description": "2049年的历史学家每晚梦见1959年的一名工厂女工，他发现她将改变未来，但必须让她失败。"
  },
  {
    "title": "女王鲨",
    "file": "movie-298.html",
    "cover": 148,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "基因改造, 巨型鲨鱼, 女战士",
    "year": "2025",
    "description": "海洋生物学家盗取了鲨鱼的基因自我改造，为了对抗被军工厂控制、拥有超高智商的“女王鲨”。"
  },
  {
    "title": "害羞的人1987",
    "file": "movie-299.html",
    "cover": 149,
    "region": "中国台湾",
    "category": "科幻悬疑",
    "tags": "戒严末期, 书信恋爱, 内向者, 时代伤痕, 小清新",
    "year": "2026",
    "description": "1987年台湾解严前夕，一个不敢说话的邮差，爱上了一个只用笔名写信的女工。"
  },
  {
    "title": "我们的父",
    "file": "movie-300.html",
    "cover": 150,
    "region": "德国",
    "category": "高清电影",
    "tags": "二战, 父子, 遗产, 真相, 反思",
    "year": "2024",
    "description": "儿子整理亡父遗物时发现，自己心中“抵抗运动英雄”的父亲，曾亲手处决过十六名逃兵。"
  },
  {
    "title": "义盖云天",
    "file": "movie-301.html",
    "cover": 1,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "黑帮, 兄弟情, 卧底, 枪战, 义气",
    "year": "1992",
    "description": "卧底警察与黑帮头目生死相交，在正义与兄弟情之间陷入绝境。"
  },
  {
    "title": "绝恋",
    "file": "movie-302.html",
    "cover": 2,
    "region": "法国",
    "category": "科幻悬疑",
    "tags": "巴黎， 时间循环， 遗憾， 重逢",
    "year": "2018",
    "description": "一对曾经的恋人在巴黎的每个角落都留下过回忆，分手三年后，他们被困在同一天，必须共同解开时间的死结。"
  },
  {
    "title": "博斯：传承第一季",
    "file": "movie-303.html",
    "cover": 3,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "警探, 私家侦探, 洛杉矶, 冷硬派",
    "year": "2025",
    "description": "退休警探博斯转型私家侦探，第一单就牵出洛杉矶警局二十年前的惊天丑闻。"
  },
  {
    "title": "古墓迷途",
    "file": "movie-304.html",
    "cover": 4,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "盗墓, 祖孙, 文物保护",
    "year": "2025",
    "description": "不孝孙子为了还网贷去盗自家祖坟，结果被困墓中，被迫用手机直播向奶奶求救。"
  },
  {
    "title": "公主日记之皇家婚约",
    "file": "movie-305.html",
    "cover": 5,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "王室， 婚前焦虑， 责任， 女权",
    "year": "2020",
    "description": "米亚公主即将大婚，但她发现未婚夫的国家有一条法律：女王婚后必须放弃王位，这让婚礼变成了女权大战。"
  },
  {
    "title": "超越生死的夜晚",
    "file": "movie-306.html",
    "cover": 6,
    "region": "日本",
    "category": "欧美热播",
    "tags": "轮回、医院、记忆碎片、催泪",
    "year": "2022",
    "description": "在一家即将关闭的医院里，一对恋人发现他们每晚都会死去，又在同一个夜晚重新醒来。"
  },
  {
    "title": "恐龙王国",
    "file": "movie-307.html",
    "cover": 7,
    "region": "美国",
    "category": "欧美热播",
    "tags": "恐龙，侏罗纪，克隆，灾难，世界观",
    "year": "2025",
    "description": "恐龙不再只是岛上宠物，它们进化出初级智慧并建立了王国，人类成了被圈养的“食物”。"
  },
  {
    "title": "斗罗大陆2绝世唐门第四季",
    "file": "movie-308.html",
    "cover": 8,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "热血, 武魂, 史莱克, 极限单兵",
    "year": "2024",
    "description": "霍雨浩接受“极限单兵计划”，在深渊斗罗的折磨下，觉醒第三武魂。"
  },
  {
    "title": "亲爱的白种人第四季",
    "file": "movie-309.html",
    "cover": 9,
    "region": "美国",
    "category": "爱情青春",
    "tags": "种族, 大学, 讽刺, 群像, 最终季",
    "year": "2024",
    "description": "温彻斯特大学迎来史上首位黑人女校长，而一个名为“让美国再次白起来”的秘密社团浮出水面。"
  },
  {
    "title": "仇杀病房",
    "file": "movie-310.html",
    "cover": 10,
    "region": "香港",
    "category": "动作犯罪",
    "tags": "密闭空间, 警匪对决, 复仇, 反转, 医院",
    "year": "2024",
    "description": "一名重伤的警察与一名黑帮头目被安排在重症监护室同房，两人在病床上展开了一场脑力与体力的生死博弈。"
  },
  {
    "title": "特别的爸爸",
    "file": "movie-311.html",
    "cover": 11,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "父子关系, 特殊成长, 亲情陪伴, 现实困境, 责任与理解, 治愈",
    "year": "2021",
    "description": "一个总被误解的父亲用最笨拙也最坚定的方式，陪儿子穿过成长中的孤独与失序，终于把“特别”变成了力量。"
  },
  {
    "title": "弗洛伊德",
    "file": "movie-312.html",
    "cover": 12,
    "region": "奥地利/德国",
    "category": "欧美热播",
    "tags": "弗洛伊德、精神分析、维也纳、连环杀手、通灵术",
    "year": "2025",
    "description": "年轻时的弗洛伊德在催眠治疗中意外唤醒了病人体内隐藏的“古老邪灵”，迫使他和灵媒一起追踪一个用噩梦杀人的神秘组织。"
  },
  {
    "title": "迟来的忏悔",
    "file": "movie-313.html",
    "cover": 13,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "遗愿, 反转, 亲情, 催泪",
    "year": "2017",
    "description": "在母亲葬礼上，三兄妹收到了她寄存了30年的录像带，每人都被告知“你不是我亲生的”，但真相远不止于此。"
  },
  {
    "title": "大展猴威3：宝贝智多猩",
    "file": "movie-314.html",
    "cover": 14,
    "region": "美国",
    "category": "爱情青春",
    "tags": "动物、猩猩、运动、合家欢",
    "year": "2012",
    "description": "一只会打冰球的猩猩为了寻找失踪的动物伙伴，误入了一所小学，成为了一群捣蛋鬼的秘密体育教练。"
  },
  {
    "title": "望洋杀机",
    "file": "movie-315.html",
    "cover": 15,
    "region": "日本",
    "category": "高清电影",
    "tags": "孤岛, 连环凶案, 双面人格",
    "year": "2025",
    "description": "一座与世隔绝的灯塔酒店内，八名住客接连失踪，而监控显示无人进出。"
  },
  {
    "title": "错有错著",
    "file": "movie-316.html",
    "cover": 16,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "乌龙, 小人物, 黑帮, 巧合",
    "year": "2024",
    "description": "打工仔错拿黑帮交易箱，阴差阳错变身“顶级杀手”，全城黑道都在找他。"
  },
  {
    "title": "桃花运2008",
    "file": "movie-317.html",
    "cover": 17,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "多线叙事，相亲，都市，贺岁，群像",
    "year": "2008",
    "description": "2008年北京奥运前夕，五对男女因为一场雷暴雨被困在三里屯酒吧街，爱情在一夜间疯狂生长。"
  },
  {
    "title": "爱你爱妳",
    "file": "movie-318.html",
    "cover": 18,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "跨代爱情, 香港, 温情, 反转, 时光",
    "year": "2025",
    "description": "70岁的她通过一封错寄的信，与20岁的他成了笔友，却不知对方就住在隔壁。"
  },
  {
    "title": "朱丽娅",
    "file": "movie-319.html",
    "cover": 19,
    "region": "英国",
    "category": "欧美热播",
    "tags": "女性, 二战, 记者, 真实事件改编, 勇气",
    "year": "2024",
    "description": "二战期间，英国女记者朱丽娅伪装成贵族夫人，在纳粹高层晚宴上窃取情报。"
  },
  {
    "title": "放学后失眠的你真人版",
    "file": "movie-320.html",
    "cover": 20,
    "region": "日本",
    "category": "爱情青春",
    "tags": "失眠, 校园, 治愈, 天文台",
    "year": "2023",
    "description": "两个失眠的高中生在天文台相遇，发现只有彼此在身边时才能睡着。"
  },
  {
    "title": "局外人2019",
    "file": "movie-321.html",
    "cover": 21,
    "region": "法国",
    "category": "精选视频",
    "tags": "黑帮, 复仇, 法式, 冷峻, 宿命",
    "year": "2019",
    "description": "一个出狱的黑帮杀手想回归家庭，却发现自己的亲弟弟成了仇家的新头目。"
  },
  {
    "title": "蝎子王",
    "file": "movie-322.html",
    "cover": 22,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "古埃及, 野蛮人, 英雄起源, 巨兽",
    "year": "2026",
    "description": "在古埃及统一之前，一个被部落抛弃的野人少年必须驯服沙漠中巨大的蝎子，才能对抗使用黑魔法的暴君。"
  },
  {
    "title": "老千：独眼杰克",
    "file": "movie-323.html",
    "cover": 23,
    "region": "韩国",
    "category": "欧美热播",
    "tags": "赌术世界, 复仇, 残疾赌神",
    "year": "2024",
    "description": "双目失明的传奇老千“独眼杰克”重出江湖，他要在一场没有视觉的牌局上，赢回被夺走的女儿和眼睛。"
  },
  {
    "title": "时空救赎",
    "file": "movie-324.html",
    "cover": 24,
    "region": "美国",
    "category": "精选视频",
    "tags": "时间循环，特工，平行宇宙，宿命，救赎",
    "year": "2026",
    "description": "退役特工被拉入一个只有24小时的时间循环，他必须杀掉五个不同时空的自己才能退出。"
  },
  {
    "title": "爱无定义",
    "file": "movie-325.html",
    "cover": 25,
    "region": "中国台湾",
    "category": "动作犯罪",
    "tags": "多元成家, 亲情, 成长, 单元连续",
    "year": "2026",
    "description": "十集，十个不同的爱之形态：从少年初恋到老年出轨，从异性恋到无性恋，共同探讨一个问题：爱，究竟能被定义吗？"
  },
  {
    "title": "女仆日记2015",
    "file": "movie-326.html",
    "cover": 26,
    "region": "法国",
    "category": "爱情青春",
    "tags": "阶级, 偷窥, 复仇, 女性",
    "year": "2024",
    "description": "年轻女仆在新雇主家中发现一面单向透视镜，镜子的另一头，是比欲望更可怕的控制游戏。"
  },
  {
    "title": "大唐诗圣",
    "file": "movie-327.html",
    "cover": 27,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "杜甫, 安史之乱, 诗人, 现实主义",
    "year": "2025",
    "description": "他一生都在逃难，却用诗歌把整个乱世钉进了史书。"
  },
  {
    "title": "芒果最大牌2022",
    "file": "movie-328.html",
    "cover": 28,
    "region": "中国",
    "category": "精选视频",
    "tags": "选秀，怀旧，翻红，争议",
    "year": "2022",
    "description": "16位过气选秀偶像争夺一个芒果台跨年晚会的开场秀名额，全程互撕与自黑。"
  },
  {
    "title": "淘气蹦蹦",
    "file": "movie-329.html",
    "cover": 29,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "兔子， 冒险， 成长， 童趣",
    "year": "2023",
    "description": "一只永远停不下来的小兔子蹦蹦，为了寻找传说中能让人安静下来的胡萝卜，踏上了吵闹的旅程。"
  },
  {
    "title": "妙女郎",
    "file": "movie-330.html",
    "cover": 30,
    "region": "印度",
    "category": "精选视频",
    "tags": "宝莱坞，女权，整容",
    "year": "2023",
    "description": "一个被嘲笑“长得丑”的胖女孩通过AI换脸成为顶流网红，当她决定摘下假面时，整个互联网崩塌了。"
  },
  {
    "title": "死亡洞探险记",
    "file": "movie-331.html",
    "cover": 31,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "洞穴, 探险, 生存, 幽闭恐惧, 未知生物",
    "year": "2024",
    "description": "六个洞穴探险者进入地图上不存在的“死亡洞”，三天后只有一人爬出，且双目失明、反复喊着同一句话。"
  },
  {
    "title": "之后4",
    "file": "movie-332.html",
    "cover": 32,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "虐恋, 成长, 分手, 重逢",
    "year": "2025",
    "description": "经历了背叛与分离，哈丁与泰莎在五年后意外重逢，却发现彼此早已面目全非。"
  },
  {
    "title": "机动奥特曼第一季",
    "file": "movie-333.html",
    "cover": 33,
    "region": "日本",
    "category": "爱情青春",
    "tags": "机甲变身，父子传承，人类防卫军，外星入侵",
    "year": "2024",
    "description": "普通高中生 inherits 初代奥特曼基因，穿上巨型装甲对抗怪兽，却发现父亲还活着。"
  },
  {
    "title": "亚瑟：王者之剑",
    "file": "movie-334.html",
    "cover": 34,
    "region": "英国",
    "category": "高清电影",
    "tags": "古装, 冷兵器, 魔法, 权力游戏, 重口味",
    "year": "2026",
    "description": "石中剑不是用来拔的，而是用来审判人心：只有完全无情之人才能举起它。"
  },
  {
    "title": "赌霸天下粤语",
    "file": "movie-335.html",
    "cover": 35,
    "region": "香港",
    "category": "高清电影",
    "tags": "港产片, 赌神, 特效炫技, 兄弟情",
    "year": "2024",
    "description": "当AI破解了所有赌术，最后的赌徒只能用命来发牌。"
  },
  {
    "title": "蚀金风暴",
    "file": "movie-336.html",
    "cover": 36,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "金融犯罪, 黑帮, 卧底, 黄金, 商战",
    "year": "2026",
    "description": "一名廉政公署调查员卧底进入香港最大的黄金黑市交易集团，却发现自己的父亲是该集团的幕后金主。"
  },
  {
    "title": "九月鹰飞国语",
    "file": "movie-337.html",
    "cover": 37,
    "region": "台湾",
    "category": "爱情青春",
    "tags": "古龙, 小李飞刀, 国语配音, 江湖恩怨",
    "year": "1986",
    "description": "“小李飞刀”传人叶开为护上官小仙，却发现自己保护的人才是幕后黑手。"
  },
  {
    "title": "冰血暴第三季",
    "file": "movie-338.html",
    "cover": 38,
    "region": "美国",
    "category": "欧美热播",
    "tags": "科恩兄弟, 黑色幽默, 寒冷, 宿命",
    "year": "2017",
    "description": "2010年，明尼苏达州一对沉迷《星际迷航》的兄弟因为一场审问诈骗，引发了一连串涉及黑帮、警察与替身杀手的血案。"
  },
  {
    "title": "隔壁有只桃花妖2021",
    "file": "movie-339.html",
    "cover": 39,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "妖怪, 都市, 治愈, 短小精悍, 网大",
    "year": "2021",
    "description": "社畜男主发现新搬来的隔壁邻居是一株修炼千年的桃花妖，她花粉过敏，还怕打雷，需要他照顾。"
  },
  {
    "title": "卡尔·赫斯：奔向自由",
    "file": "movie-340.html",
    "cover": 40,
    "region": "美国",
    "category": "精选视频",
    "tags": "政治，冷战，越狱，真实事件",
    "year": "2024",
    "description": "真实改编：冷战时期最离奇的越狱，一个美国律师从东德救出六名政治犯。"
  },
  {
    "title": "蜘蛛网2023",
    "file": "movie-341.html",
    "cover": 41,
    "region": "韩国",
    "category": "喜剧动画",
    "tags": "改编, 社会派, 媒体, 网络暴力",
    "year": "2023",
    "description": "一桩已决的杀童案因网络主播的翻案直播而重启，真相比蛛网更缠人。"
  },
  {
    "title": "荷索吃鞋子",
    "file": "movie-342.html",
    "cover": 42,
    "region": "德国",
    "category": "精选视频",
    "tags": "行为艺术, 导演轶事, 迷影, 黑色幽默",
    "year": "2025",
    "description": "为了兑现对弟子的承诺，德国狂人导演沃纳·赫尔佐格真的在镜头前煮了一双皮鞋并吃了下去。"
  },
  {
    "title": "变形计第十七季",
    "file": "movie-343.html",
    "cover": 43,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "互换人生，代际冲突，城乡差异，成长，体验",
    "year": "2024",
    "description": "本季迎来史上最叛逆城市少年与最冷静的乡村学霸，一场人生互换，却意外揭露了乡村少年想隐藏的惊人秘密。"
  },
  {
    "title": "宝莱坞之爆裂警官2",
    "file": "movie-344.html",
    "cover": 44,
    "region": "印度",
    "category": "剧情佳作",
    "tags": "开挂，警匪，搞笑，印度",
    "year": "2012",
    "description": "超级警察舒克拉这次要去打击军火走私犯，但反派可以操控大象，而他只能用一把左轮手枪硬刚。"
  },
  {
    "title": "小孤儿",
    "file": "movie-345.html",
    "cover": 45,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "寄宿院,洪灾,身份追寻,失联名单,城市边缘",
    "year": "2011",
    "description": "林陌并不是想找妈妈，她只想知道那张旧邮票为什么从来没有寄到自己手里，而每个答案都指向一段被改写过的安置名单。"
  },
  {
    "title": "非洲：胜利序幕",
    "file": "movie-346.html",
    "cover": 46,
    "region": "南非 / 美国",
    "category": "高清电影",
    "tags": "非洲战场，二战，殖民地士兵，被遗忘的英雄",
    "year": "2023",
    "description": "1941年东非，一支由非洲土著士兵组成的英属殖民地军团，在没有地图和补给的情况下，必须徒步穿越魔鬼沙漠去传递决定战役胜败的情报。"
  },
  {
    "title": "暴雨春情",
    "file": "movie-347.html",
    "cover": 47,
    "region": "日本",
    "category": "欧美热播",
    "tags": "雨, 不伦, 乡村, 湿身, 秘密",
    "year": "2015",
    "description": "一场百年一遇的暴雨，把一对各自有伴侣的中年男女困在乡村民宿。"
  },
  {
    "title": "大男当婚",
    "file": "movie-348.html",
    "cover": 48,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "剩男, 相亲, 北漂, 现实主义",
    "year": "2024",
    "description": "35岁的北漂光头男，一年经历了七次荒腔走板的相亲，却被亲妈怀疑是同性恋。"
  },
  {
    "title": "九命怪猫",
    "file": "movie-349.html",
    "cover": 49,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "猫妖传说, 惊悚都市, 复仇, 情欲, 港产鬼片",
    "year": "1997",
    "description": "九个自私的人联手害死了一位富家千金，他们的尸体旁相继出现九条被残忍杀害的黑猫，每死一命，就有一人惨死。"
  },
  {
    "title": "夜间小屋",
    "file": "movie-350.html",
    "cover": 50,
    "region": "西班牙",
    "category": "欧美热播",
    "tags": "鬼屋, 心理恐怖, 西班牙悬疑, 高能反转",
    "year": "2024",
    "description": "女子在丈夫自杀后独自回到深山小屋，发现屋内每晚都会出现陌生一家四口的鬼魂。"
  },
  {
    "title": "恶魔城：夜曲",
    "file": "movie-351.html",
    "cover": 51,
    "region": "日本",
    "category": "欧美热播",
    "tags": "吸血鬼，鞭子，哥特，暗黑",
    "year": "2023",
    "description": "法国大革命前夕，贝尔蒙特家族最后的传人里希特，为了解救被吸血鬼控制的母亲，闯入正在酝酿风暴的恶魔城。"
  },
  {
    "title": "时钟上",
    "file": "movie-352.html",
    "cover": 52,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "时间循环, 家庭惊悚, 遗产, 诅咒",
    "year": "2023",
    "description": "父亲去世留下一座古董钟，每当钟声敲响，家里的时间就会倒流，但每次倒流，都会有一个家人凭空消失。"
  },
  {
    "title": "青春噢买尬",
    "file": "movie-353.html",
    "cover": 53,
    "region": "中国台湾",
    "category": "喜剧动画",
    "tags": "高中生, 代际冲突, 荒诞, 怀旧",
    "year": "2024",
    "description": "2009年，五个高中生为了凑钱买一张“五月天”演唱会门票，展开了一场荒腔走板的校园地下经济创业。"
  },
  {
    "title": "我们签约吧",
    "file": "movie-354.html",
    "cover": 54,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "经纪公司, 选秀, 素人, 星探, 签约",
    "year": "2020",
    "description": "四家顶级经纪公司暗中潜伏街头，素人走着路就可能被星探当场签约。"
  },
  {
    "title": "封神：妲己",
    "file": "movie-355.html",
    "cover": 55,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "女性视角, 妖狐, 商周, 颠覆",
    "year": "2028",
    "description": "妲己不是祸水，她只是被困在“亡国妖妃”剧本里的最后一个神。"
  },
  {
    "title": "冲锋陷阵",
    "file": "movie-356.html",
    "cover": 56,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "港产片, 双雄, 枪战",
    "year": "2004",
    "description": "警队王牌阿飞与走私大盗阿弟被迫搭档，三天内追回被偷的加密芯片。"
  },
  {
    "title": "罪人与龙共舞",
    "file": "movie-357.html",
    "cover": 57,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "咒术, 龙族, 双男主, 暗黑",
    "year": "2025",
    "description": "在一个科技与魔法并存的世界，两名“罪人”咒术师专门替人猎杀作恶的龙，却发现自己也背负着龙的血脉。"
  },
  {
    "title": "甜蜜人生",
    "file": "movie-358.html",
    "cover": 58,
    "region": "韩国",
    "category": "高清电影",
    "tags": "反甜宠, 婚姻陷阱, 心理博弈",
    "year": "2024",
    "description": "嫁入豪门后，她以为开始了甜蜜人生，直到发现丈夫的每一任前妻都离奇失踪。"
  },
  {
    "title": "灵性出窍",
    "file": "movie-359.html",
    "cover": 59,
    "region": "印度",
    "category": "动作犯罪",
    "tags": "灵魂交换， 宗教， 阶级， 讽刺",
    "year": "2024",
    "description": "一个冷酷的企业家与一个善良的流浪汉在车祸中灵魂互换，体验了对方荒诞又真实的“灵性”人生。"
  },
  {
    "title": "黑子的篮球第一季",
    "file": "movie-360.html",
    "cover": 60,
    "region": "日本",
    "category": "爱情青春",
    "tags": "篮球, 超能力体育, 幻之第六人, 团队合作",
    "year": "2012",
    "description": "存在感极低的黑子哲也，要与从美国归来的火神大我一起，打败曾经的“奇迹的世代”。"
  },
  {
    "title": "白目怪谈",
    "file": "movie-361.html",
    "cover": 61,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "都市传说, 眼珠, 诅咒视频, 伪纪录片",
    "year": "2019",
    "description": "凡是盯着那段“翻白眼”视频超过十秒的人，自己的眼睛会开始反向吞噬现实。"
  },
  {
    "title": "大侠柠檬水",
    "file": "movie-362.html",
    "cover": 62,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "搞笑, 江湖, 美食, 解压, 反套路",
    "year": "2026",
    "description": "一个只会做柠檬水的路边摊主被误认为绝世高手，引来各路反派求决战，他只关心柠檬够不够酸。"
  },
  {
    "title": "皇后如何死",
    "file": "movie-363.html",
    "cover": 63,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "宫廷, 反转, 女性, 权谋",
    "year": "2024",
    "description": "冷宫废后预言了自己的三种死法，而每一种都在新帝的后宫逐一应验。"
  },
  {
    "title": "致不灭的你第三季",
    "file": "movie-364.html",
    "cover": 64,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "永生者, 现代日本, 何为人类",
    "year": "2026",
    "description": "不死来到现代日本，拥有了无数形态和记忆，却发现自己越来越不像一个“人”。"
  },
  {
    "title": "穿白丝绸的女人",
    "file": "movie-365.html",
    "cover": 65,
    "region": "越南",
    "category": "动作犯罪",
    "tags": "越南战争, 母女情, 传统服饰, 苦难史诗",
    "year": "2006",
    "description": "一件母亲传下来的白丝绸袄裙，见证了两代越南女性在战火中颠沛流离的一生。"
  },
  {
    "title": "王牌二哈",
    "file": "movie-366.html",
    "cover": 66,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "狗狗特工, 反差萌, 爆笑任务",
    "year": "2020",
    "description": "废柴二哈被误认为王牌警犬，被迫潜入猫老大犯罪团伙，全程高能掉链子。"
  },
  {
    "title": "三峡人家",
    "file": "movie-367.html",
    "cover": 67,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "三峡, 拆迁, 父女, 故乡, 现实主义",
    "year": "2025",
    "description": "三峡工程前夕，返乡的女儿试图说服固执的父亲离开老宅，却揭开了一个埋藏三十年的家族秘密。"
  },
  {
    "title": "文房四宝",
    "file": "movie-368.html",
    "cover": 68,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "古代间谍，笔墨纸砚，非遗传承，连环命案",
    "year": "2024",
    "description": "南唐年间，制墨名门接连灭门，唯一的线索是死者身旁留下的——一支不属于任何流派的湖笔。"
  },
  {
    "title": "末世殖民地",
    "file": "movie-369.html",
    "cover": 69,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "末日, 地下城, 变异植物, 生存",
    "year": "2026",
    "description": "在地下避难所生活了二十年后，人们发现地面的致命真菌其实可以让人类进化。"
  },
  {
    "title": "最远的你",
    "file": "movie-370.html",
    "cover": 70,
    "region": "中国台湾",
    "category": "喜剧动画",
    "tags": "星际通讯, 时差, 书信",
    "year": "2025",
    "description": "他在地球，她在开往比邻星的飞船上，一条消息要等四年才能收到，却相爱了。"
  },
  {
    "title": "减法人生",
    "file": "movie-371.html",
    "cover": 71,
    "region": "中国",
    "category": "欧美热播",
    "tags": "极简主义, 都市焦虑, 断舍离, 女性成长, 上海",
    "year": "2016",
    "description": "一个囤积症女孩与一个只想拥有十二件物品的极简主义男人，被迫住在同一间公寓，展开一场人生重组实验。"
  },
  {
    "title": "独活女子的推荐 第二季",
    "file": "movie-372.html",
    "cover": 72,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "单身女性，独自享受，小众体验",
    "year": "2024",
    "description": "出版社职员五月女惠继续探索“独活”的乐趣，这次她要挑战一个人去情侣酒店。"
  },
  {
    "title": "再度玉门关",
    "file": "movie-373.html",
    "cover": 73,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "考古, 丝绸之路, 悬疑, 冒险",
    "year": "2025",
    "description": "一支民间考古队深入罗布泊寻找失落的玉门关，却发现那里埋藏着一个颠覆历史的惊天秘密。"
  },
  {
    "title": "金龙餐厅的圣诞节",
    "file": "movie-374.html",
    "cover": 74,
    "region": "德国/奥地利",
    "category": "精选视频",
    "tags": "中餐馆, 难民, 文化冲突, 圣诞夜",
    "year": "2026",
    "description": "平安夜，一家濒临倒闭的中餐馆里，挤进了不会做中国菜的华裔老板、迷路的叙利亚难民和三个醉酒的中年嬉皮士。"
  },
  {
    "title": "蛮国恩仇记",
    "file": "movie-375.html",
    "cover": 75,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "复仇, 冷兵器, 部落战争",
    "year": "2026",
    "description": "商末时期，一个被灭族的蛮族少女隐瞒性别混入敌国王室，用十年布下一盘复仇大棋。"
  },
  {
    "title": "老头拳头大馒头",
    "file": "movie-376.html",
    "cover": 76,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "功夫老头, 市井江湖, 传承",
    "year": "2025",
    "description": "城中村面临拆迁，脾气暴躁的老拳师为了保护街坊，用祖传的“馒头拳”迎战带着挖掘机的黑恶势力。"
  },
  {
    "title": "南城宴",
    "file": "movie-377.html",
    "cover": 77,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "岭南，厨神争霸，灭门案",
    "year": "2025",
    "description": "岭南厨神争霸赛前夕，七年前灭门案的唯一幸存者化名参赛，要通过十二道菜让真凶自曝。"
  },
  {
    "title": "木头姑娘",
    "file": "movie-378.html",
    "cover": 78,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "木偶, 治愈, 留守儿童, 成长",
    "year": "2025",
    "description": "留守山村的小女孩给木头人画上笑脸，木头人竟活了过来，陪她度过了一个夏天。"
  },
  {
    "title": "太阳花",
    "file": "movie-379.html",
    "cover": 79,
    "region": "法国",
    "category": "精选视频",
    "tags": "一战, 向日葵, 书信, 失明",
    "year": "2025",
    "description": "一名在一战中失明的法国士兵回到家乡，妻子假装自己也是盲人，只为不让他自卑地离开。"
  },
  {
    "title": "双花镜",
    "file": "movie-380.html",
    "cover": 80,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "双女主, 镜像世界, 朝堂权谋, 替身",
    "year": "2024",
    "description": "丞相千金与江湖女骗子容貌一模一样，一场宫廷政变后，两人被迫互换身份，却发现她们是同一面镜子的两半。"
  },
  {
    "title": "活著的世界",
    "file": "movie-381.html",
    "cover": 81,
    "region": "韩国",
    "category": "剧情佳作",
    "tags": "虚拟现实， 意识上传， 反乌托邦， 伦理",
    "year": "2025",
    "description": "全球最大的虚拟世界“极乐”承诺给所有人永生，但主角发现，现实世界的活人已经被当作电池用光了。"
  },
  {
    "title": "缅因海快递",
    "file": "movie-382.html",
    "cover": 82,
    "region": "美国",
    "category": "精选视频",
    "tags": "快递, 小镇, 秘密, 包裹, 黑色幽默",
    "year": "2025",
    "description": "缅因州沿海小镇的快递员发现，每周三有一个蓝色包裹寄出，但收件人全是死人。"
  },
  {
    "title": "当星光结束",
    "file": "movie-383.html",
    "cover": 83,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "末日，人性，慢节奏，哲学，天文",
    "year": "2026",
    "description": "天文学家发现星光正在从宇宙中消失，在末日来临前的最后三年，人们开始忘记过去。"
  },
  {
    "title": "不死的妈妈",
    "file": "movie-384.html",
    "cover": 84,
    "region": "韩国",
    "category": "动作犯罪",
    "tags": "母爱, 僵尸, 反转",
    "year": "2024",
    "description": "丧尸爆发后，一个感染了病毒却始终没有尸变的女人，横穿半岛只为给女儿送一盒过期的生日蛋糕。"
  },
  {
    "title": "二十二",
    "file": "movie-385.html",
    "cover": 85,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "慰安妇, 幸存者, 口述史",
    "year": "2017",
    "description": "中国仅存的22位“慰安妇”幸存者，她们的晚年日常与沉默背后的滔天巨浪。"
  },
  {
    "title": "太阳盟续集",
    "file": "movie-386.html",
    "cover": 86,
    "region": "美国",
    "category": "欧美热播",
    "tags": "印第安, 复仇, 联盟, 枪战",
    "year": "2024",
    "description": "太阳盟首领死后，他的混血女儿必须联合三个宿敌部落，向撕毁条约的白人矿主发起末日复仇。"
  },
  {
    "title": "四面受敌",
    "file": "movie-387.html",
    "cover": 87,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "密室, 反恐, 孤胆英雄, 极限压力",
    "year": "2024",
    "description": "一个被困在透明审讯室的前特工，要在72小时内同时应付审讯、外敌入侵和体内定时毒药。"
  },
  {
    "title": "大瑟尔",
    "file": "movie-388.html",
    "cover": 88,
    "region": "美国",
    "category": "欧美热播",
    "tags": "垮掉的一代, 凯鲁亚克, 孤独, 自然主义, 黑白片",
    "year": "2025",
    "description": "继《在路上》之后，杰克·凯鲁亚克躲进大瑟尔森林的小木屋，企图戒酒成名，却被孤独逼疯。"
  },
  {
    "title": "白莲花度假村第二季",
    "file": "movie-389.html",
    "cover": 89,
    "region": "美国",
    "category": "高清电影",
    "tags": "奢华酒店, 人性讽刺, 群像戏",
    "year": "2022",
    "description": "这次，白莲花度假村搬到了意大利西西里岛，新一批富豪游客带着他们的性与谎言，开启了一轮更血腥的“假期”。"
  },
  {
    "title": "纽约圣代",
    "file": "movie-390.html",
    "cover": 90,
    "region": "美国",
    "category": "欧美热播",
    "tags": "创业，友情，都市梦，冰淇淋",
    "year": "2022",
    "description": "三个失业青年，在纽约开了一家只卖圣代冰淇淋的奇葩小店，竟意外成了网红。"
  },
  {
    "title": "令和元年版怪谈牡丹灯笼",
    "file": "movie-391.html",
    "cover": 91,
    "region": "日本",
    "category": "爱情青春",
    "tags": "经典改编, 人鬼情, 都市, 悬疑",
    "year": "2025",
    "description": "现代东京，一盏老旧的牡丹灯笼点亮后，外卖小哥与百年前的女鬼谈起了恋爱。"
  },
  {
    "title": "约翰·格伦的故事",
    "file": "movie-392.html",
    "cover": 92,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "宇航员, 冷战, 勇气, 真实改编",
    "year": "2020",
    "description": "美国首位绕地飞行的宇航员，在荣耀背后是无数次与死神擦肩的自我博弈。"
  },
  {
    "title": "少年杨家将",
    "file": "movie-393.html",
    "cover": 93,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "热血少年, 忠烈家族, 战争成长",
    "year": "2024",
    "description": "金沙滩一战后，七个少年用血肉之躯撑起“杨”字大旗。"
  },
  {
    "title": "闯荡",
    "file": "movie-394.html",
    "cover": 94,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "摇摆人生, 夜市生存, 师徒情, 反转命运, 第一份工作",
    "year": "2011",
    "description": "一个从出租屋里跌跌撞撞走出的青年，在十天内踏过十站地铁和五个夜市，想把被父亲当成失败者的标签洗刷掉。"
  },
  {
    "title": "堕落2014",
    "file": "movie-395.html",
    "cover": 95,
    "region": "英国",
    "category": "爱情青春",
    "tags": "校园秘密, 心理阴影, 失踪案件, 伪装身份, 反转真相, 冷色调",
    "year": "2014",
    "description": "一桩看似普通的失踪案，顺着一段旧录像不断回溯，最后竟牵出一所精英学校里被集体掩埋的黑暗真相。"
  },
  {
    "title": "彩门令",
    "file": "movie-396.html",
    "cover": 96,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "江湖、盗门、连环计、女性侠客",
    "year": "2023",
    "description": "江湖“彩门”（骗术行当）女掌门惨死，她的关门弟子必须用师父教的七十二种骗术，找出真凶。"
  },
  {
    "title": "丘拉斯·弗龙特拉斯",
    "file": "movie-397.html",
    "cover": 97,
    "region": "西班牙",
    "category": "爱情青春",
    "tags": "西语剧, 边境线, 毒枭, 双面卧底, 帮派火并",
    "year": "2017",
    "description": "西班牙最年轻的法学博士为了写论文潜入直布罗陀边境黑帮，却因下手太狠被老大强行提拔成了二当家。"
  },
  {
    "title": "弃妇怨",
    "file": "movie-398.html",
    "cover": 98,
    "region": "中国台湾",
    "category": "高清电影",
    "tags": "琼瑶式，苦情，弃妇，渣男，女性觉醒",
    "year": "1970",
    "description": "温柔妻子被豪门丈夫抛弃，三年后她以女强人身份归来，撕碎前夫的所有骄傲。"
  },
  {
    "title": "春风物语",
    "file": "movie-399.html",
    "cover": 99,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "BL，纯爱，治愈，漫改，校园",
    "year": "2024",
    "description": "两个因家族恩怨被迫分开的男孩，在大学重逢后决定不再逃避彼此的心意。"
  },
  {
    "title": "锡兵战将",
    "file": "movie-400.html",
    "cover": 100,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "锡兵, 奇幻战争, 成长, 勇气, 王国",
    "year": "2025",
    "description": "一个被施了魔法的残缺锡兵，在玩具与真实世界的夹缝中扛起拯救两个王国的重任。"
  },
  {
    "title": "美丽的一天",
    "file": "movie-401.html",
    "cover": 101,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "殡葬师，生死观，父女和解，日常之美，是枝裕和式",
    "year": "2026",
    "description": "一位继承父亲殡葬业的中年男子，在一天之内为五位往生者送行，也送走了自己与父亲的旧日恩怨。"
  },
  {
    "title": "嗨咖上月球",
    "file": "movie-402.html",
    "cover": 102,
    "region": "中国台湾",
    "category": "精选视频",
    "tags": "嗑药, 奇幻漂流, 小人物",
    "year": "2019",
    "description": "两个生活失意的废柴在狂欢中误闯废弃航天基地，竟意外被发射上了月球。"
  },
  {
    "title": "不是你不爱你粤语",
    "file": "movie-403.html",
    "cover": 103,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "粤语，分手，都市，遗憾，日久生情",
    "year": "2024",
    "description": "在一起十年，他不求婚也不分手，她问“你是不是不爱我”，他答“不是不爱你，只是……”"
  },
  {
    "title": "梅花红桃",
    "file": "movie-404.html",
    "cover": 104,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "民国, 双面间谍, 假戏真做, 上海滩",
    "year": "2024",
    "description": "1943年的上海滩，代号“红桃”的地下党被迫与军统特工假扮夫妻，而她每晚都要在枕边人睡着后撬开他上锁的公文包。"
  },
  {
    "title": "为了与你相聚",
    "file": "movie-405.html",
    "cover": 105,
    "region": "英国",
    "category": "动作犯罪",
    "tags": "治愈系、异地恋、书信、时间跨度",
    "year": "2024",
    "description": "一对恋人在伦敦地铁爆炸案中失散，此后每年都在约定地点放一封信，等待对方。"
  },
  {
    "title": "野生诱惑",
    "file": "movie-406.html",
    "cover": 106,
    "region": "英国",
    "category": "科幻悬疑",
    "tags": "荒野求生，女性觉醒，回归自然，生存",
    "year": "2026",
    "description": "一位都市精英女性，在被裁员和丈夫出轨后，独自闯入苏格兰荒野，用最原始的方式重新活一遍。"
  },
  {
    "title": "并肩作战",
    "file": "movie-407.html",
    "cover": 107,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "退伍军人, 拐卖犯罪, 父女联手, 硬核动作",
    "year": "2024",
    "description": "退役特种兵父亲在追查女儿失踪案时，发现女儿竟已自学成才，正在另一个城市独自追踪同一伙人贩。"
  },
  {
    "title": "伊瓦鲁",
    "file": "movie-408.html",
    "cover": 108,
    "region": "西班牙",
    "category": "精选视频",
    "tags": "航海, 神话生物, 父子情, 岛屿, 诅咒",
    "year": "2025",
    "description": "少年为拯救病重父亲，扬帆寻找传说中能实现一愿的神秘岛屿“伊瓦鲁”。"
  },
  {
    "title": "年轻的丈夫们",
    "file": "movie-409.html",
    "cover": 109,
    "region": "法国",
    "category": "爱情青春",
    "tags": "奉子成婚, 婚前焦虑, 兄弟情, 都市生活, 婚姻真相",
    "year": "2015",
    "description": "四个大学死党先后意外当爹，他们在尿布和奶粉中重新定义爱情与友情。"
  },
  {
    "title": "我的播音系女友",
    "file": "movie-410.html",
    "cover": 110,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "校园， 播音主持， 欢喜冤家， 追梦",
    "year": "2025",
    "description": "当结巴的程序员爱上毒舌的播音系女神，他的代码能运行，但爱情代码全是bug。"
  },
  {
    "title": "超级乐8点",
    "file": "movie-411.html",
    "cover": 111,
    "region": "中国",
    "category": "科幻悬疑",
    "tags": "音综、整蛊、怀旧、即兴、高能",
    "year": "2025",
    "description": "一档让过气歌手在深夜便利店为真实顾客即兴live的治愈综艺，但每期结尾都藏着一个惊天爆料。"
  },
  {
    "title": "七剑一步",
    "file": "movie-412.html",
    "cover": 112,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "武侠, 一步杀, 复仇, 阵法, 宿命",
    "year": "2025",
    "description": "七名剑客被诅咒只能共同迈出一步，这一步之内，他们天下无敌；一步之外，必死无疑。"
  },
  {
    "title": "时光尽头的恋人",
    "file": "movie-413.html",
    "cover": 113,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "永生， 时空穿梭， 催泪， 宿命论",
    "year": "2026",
    "description": "一个永远停在28岁的女人活了一千年，她遇见过无数次真爱，但每一次看着爱人老去死去，自己却无能为力。"
  },
  {
    "title": "偷生活的人",
    "file": "movie-414.html",
    "cover": 114,
    "region": "法国",
    "category": "剧情佳作",
    "tags": "巴黎, 盗亦有道, 底层, 幽默, 温情",
    "year": "2015",
    "description": "专偷富人“空闲时间”的小偷，把偷来的半小时送给穷人，成了巴黎地下英雄。"
  },
  {
    "title": "抓娃娃",
    "file": "movie-415.html",
    "cover": 115,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "亲子，教育，讽刺，爆笑",
    "year": "2024",
    "description": "富爸爸为了让儿子吃苦，全家搬进贫民窟，结果儿子靠抓娃娃机发了财。"
  },
  {
    "title": "鬼叫你追我老婆",
    "file": "movie-416.html",
    "cover": 116,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "僵尸, 捉鬼, 无厘头, 林正英, 民俗",
    "year": "1992",
    "description": "倒霉蛋阿强被恶鬼附身的老婆追着打，只能去请便宜师父“散装道士”，结果师父比鬼还怕鬼。"
  },
  {
    "title": "千博士驱魔研究所",
    "file": "movie-417.html",
    "cover": 117,
    "region": "香港",
    "category": "喜剧动画",
    "tags": "驱魔,失眠者,梦境实验,医疗伦理,信仰商业化,黑箱记录,边界医学",
    "year": "2018",
    "description": "当千博士每解开一个梦境结界就失去一段现实记忆，他才发现驱魔研究所真正的祭坛，早已立在他自己的病历上。"
  },
  {
    "title": "重返舞台四天王",
    "file": "movie-418.html",
    "cover": 118,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "乐队，中年危机，怀旧，逆袭",
    "year": "2021",
    "description": "曾经红极一时的男子组合“四天王”时隔二十年重聚，只为了还清一笔从天而降的巨额债务。"
  },
  {
    "title": "蓝调女王",
    "file": "movie-419.html",
    "cover": 119,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "蓝调, 种族歧视, 50年代, 传奇歌手",
    "year": "2025",
    "description": "她是50年代最伟大的蓝调歌手，却只能在黑人剧院演出，直到一位白人摇滚巨星翻唱了她的歌，署上了自己的名字。"
  },
  {
    "title": "锡安长老会纪要",
    "file": "movie-420.html",
    "cover": 120,
    "region": "以色列 / 美国",
    "category": "科幻悬疑",
    "tags": "阴谋论, 档案, 政治惊悚, 改编",
    "year": "2018",
    "description": "一份被全球视为禁书的《锡安长老会纪要》手稿被发现，一名记者追寻其来源，揭开了一个世纪的谎言。"
  },
  {
    "title": "伊尼舍林的报丧女妖",
    "file": "movie-421.html",
    "cover": 121,
    "region": "爱尔兰",
    "category": "喜剧动画",
    "tags": "内战隐喻，友谊破裂，存在危机",
    "year": "2023",
    "description": "在一个偏远小岛上，一个男人突然单方面宣布与最好的朋友绝交，理由是：“你太无趣了，这会浪费我余生的时间。”"
  },
  {
    "title": "金戈梨园",
    "file": "movie-422.html",
    "cover": 122,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "戏曲, 抗日战争, 戏班, 传统文化",
    "year": "2006",
    "description": "抗日战争时期，一个评戏戏班在枪炮声中坚持唱戏，用锣鼓声唤醒民族血性。"
  },
  {
    "title": "魔翼杀手5",
    "file": "movie-423.html",
    "cover": 123,
    "region": "美国",
    "category": "高清电影",
    "tags": "天使, 恶魔, 末世, 杀戮, B级片",
    "year": "2023",
    "description": "堕落天使再度降临人间，这一次他不再屠杀恶魔，而是要亲手杀死制造了人间炼狱的上帝本人。"
  },
  {
    "title": "狄小肆之幽冥飞狼",
    "file": "movie-424.html",
    "cover": 124,
    "region": "中国内地",
    "category": "喜剧动画",
    "tags": "狄仁杰宇宙, 少年狄小肆, 狼人传说, 本格推理, 特效大片",
    "year": "2027",
    "description": "少年狄小肆初出茅庐，就遇上了专咬贪官喉咙的“幽冥飞狼”连环命案，这是妖术还是人心？"
  },
  {
    "title": "无声救援",
    "file": "movie-425.html",
    "cover": 125,
    "region": "法国",
    "category": "精选视频",
    "tags": "聋哑， 二战， 犹太人",
    "year": "2024",
    "description": "二战期间，一个聋哑村庄收留了三十名犹太儿童，用寂静对抗纳粹的搜捕。"
  },
  {
    "title": "风流活宝贝",
    "file": "movie-426.html",
    "cover": 126,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "女性群像，性喜剧，独立成长，反套路",
    "year": "2025",
    "description": "四个性格迥异的闺蜜签下一份“百人斩”挑战协议，却在一场场“狩猎”中先后坠入最老套的真爱陷阱。"
  },
  {
    "title": "蔚蓝之下",
    "file": "movie-427.html",
    "cover": 127,
    "region": "美国",
    "category": "爱情青春",
    "tags": "深海, 实验室, 意识上传, 阴谋, 心理惊悚",
    "year": "2024",
    "description": "五个科学家被困在海底3000米的实验站，发现基地的AI系统开始利用他们死去的同事的思维来猎杀他们。"
  },
  {
    "title": "阿尔泽",
    "file": "movie-428.html",
    "cover": 128,
    "region": "法国 / 阿尔及利亚",
    "category": "精选视频",
    "tags": "阿尔及利亚战争, 黑白影像, 身份认同, 大屠杀",
    "year": "2026",
    "description": "1960年阿尔及利亚，一名法国逃兵与一名阿尔及利亚独立军战士，在沙漠中被迫共同护送一名孤儿。"
  },
  {
    "title": "四季商人",
    "file": "movie-429.html",
    "cover": 129,
    "region": "德国",
    "category": "精选视频",
    "tags": "小人物，社会，剥削",
    "year": "2026",
    "description": "一个在街头推车卖炒栗子的小贩，用四季的变迁对抗整个外卖巨头的碾压。"
  },
  {
    "title": "七磅",
    "file": "movie-430.html",
    "cover": 130,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "自我救赎， 器官捐赠， 身份迷局， 雨天哲学",
    "year": "2026",
    "description": "一个男人连续七次匿名捐献器官，而他自己的生命倒计时与一场人工降雨的日期重叠。"
  },
  {
    "title": "爱的诺言",
    "file": "movie-431.html",
    "cover": 131,
    "region": "泰国",
    "category": "欧美热播",
    "tags": "年代剧, 虐恋, 承诺, 误会, 泰式狗血",
    "year": "2019",
    "description": "五十年前的一句“等我回来”，让她错过了婚礼，却用一生守候在那个种满茉莉花的车站。"
  },
  {
    "title": "战争与和平3：1812年",
    "file": "movie-432.html",
    "cover": 132,
    "region": "俄罗斯",
    "category": "科幻悬疑",
    "tags": "托尔斯泰, 拿破仑, 博罗金诺, 名著改编",
    "year": "1967",
    "description": "1812 年的博罗金诺战役中，安德烈公爵倒在炮火里，皮埃尔在莫斯科的火海中寻找活下去的意义。"
  },
  {
    "title": "职业男人",
    "file": "movie-433.html",
    "cover": 133,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "中年危机, 猎头, 行业剧, 现实主义",
    "year": "2024",
    "description": "顶级猎头被迫下岗，为了养家糊口，他开始“猎”自己，却发现没人要。"
  },
  {
    "title": "大丈夫 2",
    "file": "movie-434.html",
    "cover": 134,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "中年男人、特工、子女、绑架、搞笑",
    "year": "2025",
    "description": "当年那群“大丈夫”特工都已50岁，他们的任务从“捉奸”变成了——从绑匪手中救出被错绑的女儿。"
  },
  {
    "title": "倒霉孩子",
    "file": "movie-435.html",
    "cover": 135,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "连环失踪,概率操控,校园,未成年人,社会阴谋",
    "year": "2018",
    "description": "全城都说“倒霉就是命”，直到高中生木子在第三次失踪后醒来，发现每次噩梦都对接一桩案发前的未来预告。"
  },
  {
    "title": "叔叔来了",
    "file": "movie-436.html",
    "cover": 136,
    "region": "中国台湾",
    "category": "高清电影",
    "tags": "老年同志, 丧偶, 初恋重逢, 和解",
    "year": "2023",
    "description": "父亲葬礼后，一个陌生叔叔来了，他说自己是父亲隐瞒了40年的恋人。"
  },
  {
    "title": "从莫斯科到上海",
    "file": "movie-437.html",
    "cover": 137,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "跨国列车, 红色商人, 世纪爱情",
    "year": "2024",
    "description": "1928年，一群中国青年乘坐国际列车从莫斯科返回上海，车厢里藏有共产国际的绝密文件，还有一名日本间谍。"
  },
  {
    "title": "注文津",
    "file": "movie-438.html",
    "cover": 138,
    "region": "韩国",
    "category": "精选视频",
    "tags": "海边，鬼魂，许愿，附身，催泪",
    "year": "2019",
    "description": "在传说能见到逝者的注文津海边，一个失去妻子的男人每天都来，直到有一天海浪送上了一个和他妻子长得一模一样的陌生女人。"
  },
  {
    "title": "荒谬无稽",
    "file": "movie-439.html",
    "cover": 139,
    "region": "法国",
    "category": "科幻悬疑",
    "tags": "法国大革命前夜，贵族，讽刺，宫廷，荒诞",
    "year": "2024",
    "description": "一名落魄的外省贵族来到凡尔赛宫，发现这里决定权力高低的不是血统，而是谁讲的笑话更好笑。"
  },
  {
    "title": "海德女士",
    "file": "movie-440.html",
    "cover": 140,
    "region": "法国/比利时",
    "category": "欧美热播",
    "tags": "人格分裂，科学怪人，社会讽刺",
    "year": "2018",
    "description": "一个懦弱的女物理老师被雷击中后，每到夜晚就会变成狂野的“海德女士”，用超能力惩罚欺负学生的坏蛋。"
  },
  {
    "title": "血族第四季",
    "file": "movie-441.html",
    "cover": 141,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "吸血鬼, 末世, 战争, 大结局",
    "year": "2017",
    "description": "核爆后的纽约，吸血鬼全面统治，仅存的人类反抗军发现始祖病毒其实可以逆向治愈。"
  },
  {
    "title": "孤岛逃亡记",
    "file": "movie-442.html",
    "cover": 142,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "越狱, 荒岛, 雇佣兵, 极限求生",
    "year": "2025",
    "description": "退役特种兵被栽赃后关押在私人岛屿监狱，他发现这座岛每隔30天就会被鲨鱼群完全淹没。"
  },
  {
    "title": "陌路人生",
    "file": "movie-443.html",
    "cover": 143,
    "region": "法国",
    "category": "高清电影",
    "tags": "偶遇, 深夜出租车, 巴黎夜景, 陌生人对话",
    "year": "2025",
    "description": "一名深夜出租车司机与四位乘客的漫谈，拼凑出他自己被藏匿了二十年的真实身份。"
  },
  {
    "title": "高年级夏令营",
    "file": "movie-444.html",
    "cover": 144,
    "region": "美国",
    "category": "欧美热播",
    "tags": "高中毕业, 夏令营, 成长, 群像喜剧",
    "year": "2008",
    "description": "一群即将上大学的高中毕业生去夏令营当辅导员，结果发现孩子比高考还难搞。"
  },
  {
    "title": "乌鸦1943",
    "file": "movie-445.html",
    "cover": 145,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "谍战黑马, 动物隐喻, 孤城困局",
    "year": "2024",
    "description": "1943年的伪满哈尔滨，一只神秘乌鸦反复出现在每个抗日地下党牺牲的现场，日本军官怀疑乌鸦是间谍。"
  },
  {
    "title": "彼得·潘与温蒂",
    "file": "movie-446.html",
    "cover": 146,
    "region": "英国",
    "category": "动作犯罪",
    "tags": "永无岛,时间控制,女性成长,社会边界,成长叙事",
    "year": "2010",
    "description": "彼得与温蒂在永无岛上以为能躲开成年世界，却发现时间和记忆都要先过审，只有勇气才能让童年不被回收。"
  },
  {
    "title": "狂琴畸恋",
    "file": "movie-447.html",
    "cover": 147,
    "region": "法国",
    "category": "精选视频",
    "tags": "师生，钢琴，控制欲，双重人格",
    "year": "2023",
    "description": "天才女学生为得到钢琴家的指导，不惜模仿他死去女儿的一切，甚至整容。"
  },
  {
    "title": "爱是欢乐的源泉",
    "file": "movie-448.html",
    "cover": 148,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "合租, 治愈, 轻喜剧, 小确幸",
    "year": "2024",
    "description": "五个性格迥异的失意年轻人挤在一套老洋房里，他们定了条规矩：谁先脱单谁就搬走。"
  },
  {
    "title": "幻梦战记",
    "file": "movie-449.html",
    "cover": 149,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "梦境, 机甲, 异世界, 伙伴",
    "year": "2025",
    "description": "少女每晚都会梦见一个被怪物围攻的机甲世界，直到某天怪物真的出现在了她的教室窗外。"
  },
  {
    "title": "上海幻梦",
    "file": "movie-450.html",
    "cover": 150,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "民国, 上海滩, 间谍, 虐恋, 迷雾剧场",
    "year": "2024",
    "description": "1941年的上海，一个舞女同时是三重间谍，她的任务是在爱人、仇人和恩人之间找出真正的“夜莺”。"
  },
  {
    "title": "孽恋狂情",
    "file": "movie-451.html",
    "cover": 1,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "三角, 偷窥, 画室",
    "year": "2006",
    "description": "画家为寻找灵感租下旧公寓，却发现自己每一幅画中的女人，都会在第二天离奇死亡。"
  },
  {
    "title": "必须要离开的人",
    "file": "movie-452.html",
    "cover": 2,
    "region": "德国",
    "category": "喜剧动画",
    "tags": "难民, 家庭, 公路",
    "year": "2021",
    "description": "叙利亚父亲带着患病的儿子穿越欧洲封锁，却发现目的地早已不再欢迎他们。"
  },
  {
    "title": "勇气森林小男孩",
    "file": "movie-453.html",
    "cover": 3,
    "region": "英国",
    "category": "喜剧动画",
    "tags": "成长, 亲情, 治愈, 森林, 手绘",
    "year": "2020",
    "description": "怕黑的小男孩为了找到失踪的妈妈，必须进入传说中会吞噬勇气的森林。"
  },
  {
    "title": "威乐比这一家",
    "file": "movie-454.html",
    "cover": 4,
    "region": "加拿大/美国",
    "category": "剧情佳作",
    "tags": "奇葩家庭，治愈系，冒险",
    "year": "2025",
    "description": "威乐比家五个孩子因为受不了父母无厘头的“放养式教育”，决定自己给自己当父母，顺便帮整个社区的小朋友解决家庭矛盾。"
  },
  {
    "title": "小野猫公路历险记",
    "file": "movie-455.html",
    "cover": 5,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "女性公路, 猫, 自由, 治愈, 独立动画",
    "year": "2021",
    "description": "一只从未出过公寓的宠物猫，为了寻找失踪的主人，搭上了三只流浪猫的破卡车，踏上了横穿美国的疯狂旅程。"
  },
  {
    "title": "二等公民",
    "file": "movie-456.html",
    "cover": 6,
    "region": "中国台湾",
    "category": "剧情佳作",
    "tags": "身份认同, 家庭伦理, 社会底层",
    "year": "2026",
    "description": "一个外籍新娘在台湾传统家庭中挣扎求生，意外揭开婆婆年轻时的惊人秘密。"
  },
  {
    "title": "腐蚀",
    "file": "movie-457.html",
    "cover": 7,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "环保，贪污，调查记者",
    "year": "2025",
    "description": "调查记者在调查化工污染村时，发现全村人牙齿发黑，而唯一干净的井水，就在村长家院子里。"
  },
  {
    "title": "胜利之光 第一季",
    "file": "movie-458.html",
    "cover": 8,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "高中橄榄球，德州小镇，群像剧",
    "year": "2019",
    "description": "德州小镇的橄榄球队能否扛住全镇期望，在赛季中杀出血路？"
  },
  {
    "title": "占有欲",
    "file": "movie-459.html",
    "cover": 9,
    "region": "韩国",
    "category": "喜剧动画",
    "tags": "病娇, 豪宅, 心理博弈, 反转",
    "year": "2025",
    "description": "搬进丈夫的豪宅后，女主发现房间里的每一寸空间，都藏着前妻令人毛骨悚然的占有欲。"
  },
  {
    "title": "米娜的故事",
    "file": "movie-460.html",
    "cover": 10,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "记忆重建、母女情、旧城改造、文物保护、真相账本",
    "year": "2016",
    "description": "她在一座即将被拆迁的旧城里用旧物拼出母亲失踪的真相，越追到后半夜越发现自己早已被写进那场工程的命运账本。"
  },
  {
    "title": "九龙的天空之旺角马房",
    "file": "movie-461.html",
    "cover": 11,
    "region": "香港",
    "category": "精选视频",
    "tags": "赛马, 黑帮, 卧底, 港味, 群像",
    "year": "2024",
    "description": "旺角老牌马房卷入跨国赌马洗钱案，一个落魄骑师、一个卧底警察和一个老马夫，都想救这匹马。"
  },
  {
    "title": "怪化猫前传",
    "file": "movie-462.html",
    "cover": 12,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "浮世绘美学, 卖药郎起源, 妖怪怪谈, 烧脑隐喻",
    "year": "2018",
    "description": "在成为那个“卖药郎”之前，他只是一个被世间所有怨念诅咒而永生不死的普通人。"
  },
  {
    "title": "友情十字路",
    "file": "movie-463.html",
    "cover": 13,
    "region": "中国台湾",
    "category": "爱情青春",
    "tags": "友谊, 成长, 小镇, 和解",
    "year": "2023",
    "description": "两个因一场车祸决裂十五年的闺蜜，在故乡即将拆迁的十字路口杂货店重逢，被迫共度一夜。"
  },
  {
    "title": "气球漫游记",
    "file": "movie-464.html",
    "cover": 14,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "治愈, 成长, 城市漫游",
    "year": "2024",
    "description": "一只红色气球带着自闭症男孩穿越整座城市，只为完成一场与去世父亲的约定。"
  },
  {
    "title": "天生要完美",
    "file": "movie-465.html",
    "cover": 15,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "校园, 学霸, 心理成长, 轻喜剧",
    "year": "2015",
    "description": "重点高中的完美女孩表面光芒万丈，实则每天都在为了保住第一而服用兴奋剂。"
  },
  {
    "title": "持续发力纵深推进",
    "file": "movie-466.html",
    "cover": 16,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "扫黑除恶, 卧底, 层级斗争, 高智商",
    "year": "2025",
    "description": "一名省纪委干部被“下放”到涉黑县任书记，他发现这里的腐败如同一棵大树，根已经扎进了土壤最深处。"
  },
  {
    "title": "天才杂技演员",
    "file": "movie-467.html",
    "cover": 17,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "传统文化, 杂技, 师徒传承, 留守儿童, 燃向",
    "year": "2025",
    "description": "一个被杂技团开除的落魄老演员，在一个留守儿童身上发现了惊世绝技，两人相互救赎，重登舞台。"
  },
  {
    "title": "多米娜第一季",
    "file": "movie-468.html",
    "cover": 18,
    "region": "意大利",
    "category": "欧美热播",
    "tags": "古罗马, 女性, 权力, 奴隶",
    "year": "2021",
    "description": "一个被卖为奴隶的日耳曼女巫，如何凭借智慧与勇气，一步步成为古罗马最有权势的女性。"
  },
  {
    "title": "章鱼噼的原罪",
    "file": "movie-469.html",
    "cover": 19,
    "region": "日本",
    "category": "爱情青春",
    "tags": "外星生物, 校园霸凌, 黑化, 致郁",
    "year": "2026",
    "description": "快乐外星生物章鱼噼来到地球想传播幸福，却被卷入小学生的霸凌与复仇漩涡中。"
  },
  {
    "title": "诺亚方舟",
    "file": "movie-470.html",
    "cover": 20,
    "region": "美国 / 国际",
    "category": "高清电影",
    "tags": "圣经改编, 末世洪水, 人性拷问, 生存, 动物",
    "year": "2027",
    "description": "上帝降下洪水前夕，诺亚发现方舟只能装载“无罪者”，而他的家人必须通过一场残酷测试。"
  },
  {
    "title": "少年们",
    "file": "movie-471.html",
    "cover": 21,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "小镇青年, 非行少年, 怀旧",
    "year": "2025",
    "description": "1999年千年虫前夜，四个小镇少年偷了一辆警车想去看海，却在后备箱里发现了一名被绑架的逃犯。"
  },
  {
    "title": "西塞英雄谱",
    "file": "movie-472.html",
    "cover": 22,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "历史改编, 印第安人, 反英雄",
    "year": "1976",
    "description": "史上最不体面的西部英雄“西塞”，靠讲假故事和偷马成为部落传说。"
  },
  {
    "title": "北京乐与路",
    "file": "movie-473.html",
    "cover": 23,
    "region": "中国",
    "category": "科幻悬疑",
    "tags": "摇滚, 北京, 梦想",
    "year": "2021",
    "description": "三个北漂摇滚青年在胡同深处组建乐队，他们的观众只有一只流浪猫，直到一首歌意外走红网络。"
  },
  {
    "title": "美女与野兽",
    "file": "movie-474.html",
    "cover": 24,
    "region": "法国 / 德国",
    "category": "动作犯罪",
    "tags": "经典改编, 暗黑童话, 女权, 哥特",
    "year": "2024",
    "description": "这一次，野兽不是王子，而是被诅咒的林中精灵；美女不是村姑，而是精通解剖学的女医生。"
  },
  {
    "title": "梦破红尘",
    "file": "movie-475.html",
    "cover": 25,
    "region": "中国台湾",
    "category": "剧情佳作",
    "tags": "LGBT, 寺庙, 成长, 禁忌之恋",
    "year": "2025",
    "description": "一个在寺庙修行的小沙弥，爱上了前来上香的信徒男孩，在信仰与欲望之间痛苦挣扎。"
  },
  {
    "title": "独立协会的青年李承晩",
    "file": "movie-476.html",
    "cover": 26,
    "region": "韩国",
    "category": "欧美热播",
    "tags": "独立运动, 青年时期, 历史重构, 民族记忆",
    "year": "2025",
    "description": "聚焦韩国首任总统李承晩二十出头时，在“独立协会”中激情又天真的救国实验。"
  },
  {
    "title": "龙门飞甲纪录片",
    "file": "movie-477.html",
    "cover": 27,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "幕后, 武侠, 徐克, 特效, 动作设计",
    "year": "2024",
    "description": "深入《龙门飞甲》拍摄现场，记录3D武侠片背后那群“不要命的武行”。"
  },
  {
    "title": "王朝消亡",
    "file": "movie-478.html",
    "cover": 28,
    "region": "英国",
    "category": "爱情青春",
    "tags": "中世纪，王权，叛变，骑士",
    "year": "2025",
    "description": "金雀花王朝最后十年，三个儿子争抢王位，母亲用毒药与嫁妆操控一切。"
  },
  {
    "title": "两个杀手真心胶",
    "file": "movie-479.html",
    "cover": 29,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "杀手, 失忆, 港式无厘头",
    "year": "2026",
    "description": "顶尖女杀手奉命杀掉叛变的男搭档，两人互射时双双跌落搅拌机，被强力胶粘在了一起，只能联手逃亡。"
  },
  {
    "title": "鬼畜大宴会",
    "file": "movie-480.html",
    "cover": 30,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "邪教， 讽刺， 重口味",
    "year": "2024",
    "description": "为了救回被邪教洗脑的女儿，一家人在诡异晚宴上被逼玩起了杀人游戏。"
  },
  {
    "title": "野·良犬粤语",
    "file": "movie-481.html",
    "cover": 31,
    "region": "香港",
    "category": "动作犯罪",
    "tags": "粤语剧场,流浪犬,地下交易,误认与真相,群体求生",
    "year": "2023",
    "description": "被前夫遗弃的独居者阿强与流浪犬良犬躲进废弃粤语剧场，借噪音与假戏真做法揭开追踪器网络的整条黑链。"
  },
  {
    "title": "倒数三秒爱上我",
    "file": "movie-482.html",
    "cover": 32,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "时间循环, 一见钟情, 甜宠, 轻悬疑",
    "year": "2025",
    "description": "只要与心仪学长对视超过三秒，社恐女孩就会触发时间循环，必须让他主动告白才能跳出。"
  },
  {
    "title": "僵尸特工",
    "file": "movie-483.html",
    "cover": 33,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "丧尸, 间谍, 人体改造, 黑色幽默",
    "year": "2025",
    "description": "最顶级的特工被改造成只吃脑子的丧尸，但他的脑子还保留着全部间谍技巧，甚至能在活人里揪出双面间谍。"
  },
  {
    "title": "谁可相依",
    "file": "movie-484.html",
    "cover": 34,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "亲情, 社会底层, 温情, 救赎",
    "year": "2021",
    "description": "一个被遗弃的老人和一个流浪孩童，在垃圾站里组成临时家庭，对抗冷漠的城市。"
  },
  {
    "title": "动作巨星",
    "file": "movie-485.html",
    "cover": 35,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "娱乐圈，替身演员，中年危机，自我救赎",
    "year": "2026",
    "description": "一个过气的动作片巨星不愿当配角，一气之下跑去给网大当武术指导，结果误打误撞成了直播网红。"
  },
  {
    "title": "油炸绿番茄",
    "file": "movie-486.html",
    "cover": 36,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "友情，女性，回忆，治愈",
    "year": "1991",
    "description": "一位压抑的中年主妇，在疗养院听了一位老太太讲述关于“油炸绿番茄”的往事，人生就此改变。"
  },
  {
    "title": "热爱十七",
    "file": "movie-487.html",
    "cover": 37,
    "region": "法国",
    "category": "科幻悬疑",
    "tags": "校园, 初恋, 成长, 夏日",
    "year": "2023",
    "description": "十七岁的最后一天，他决定向暗恋已久的同班男生递出一封手写信。"
  },
  {
    "title": "终极战士：杀戮星球",
    "file": "movie-488.html",
    "cover": 38,
    "region": "美国",
    "category": "精选视频",
    "tags": "铁血战士, 外星狩猎, 监狱星球, 暴力美学",
    "year": "2026",
    "description": "终极战士一族将一个宇宙最危险的罪犯集中营变成狩猎场，不料猎物中藏着他们的天敌。"
  },
  {
    "title": "哈罗德·迪德尔博克之罪",
    "file": "movie-489.html",
    "cover": 39,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "罪与罚, 心理剖析, 黑色电影, 道德困境",
    "year": "1975",
    "description": "模范市民哈罗德被指控谋杀，但他坚称自己无罪——因为他根本不记得那天晚上发生了什么。"
  },
  {
    "title": "草裙舞女孩",
    "file": "movie-490.html",
    "cover": 40,
    "region": "日本",
    "category": "高清电影",
    "tags": "夏威夷风, 废校危机, 元气少女",
    "year": "2017",
    "description": "只有五个学生的乡下小学，靠跳草裙舞挽救被废校的命运。"
  },
  {
    "title": "猫咪心动奇迹",
    "file": "movie-491.html",
    "cover": 41,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "猫咪, 灾难, 温情, 生存, 家庭",
    "year": "2023",
    "description": "一场地震后，一只家猫穿越废墟，只为找到它的小主人。"
  },
  {
    "title": "生命之诗",
    "file": "movie-492.html",
    "cover": 42,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "时间循环，文艺治愈，代际和解，诗歌",
    "year": "2025",
    "description": "一名将死的老诗人突然获得了倒着生长的能力，每年轻一岁，就会忘记一段痛苦的往事。"
  },
  {
    "title": "地球之极·侣行第十季",
    "file": "movie-493.html",
    "cover": 43,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "环球探险, 夫妻搭档, 极地生存",
    "year": "2025",
    "description": "张昕宇、梁红夫妇自驾破冰船，闯入南极“不可抵达之极”，寻找百年前神秘失踪的科考站。"
  },
  {
    "title": "江南思雨",
    "file": "movie-494.html",
    "cover": 44,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "民国, 丝绸, 雨夜, 家族恩怨",
    "year": "2025",
    "description": "1927年，江南丝绸世家独女在雨夜救下一名失忆男子，他却可能是杀父仇人的儿子。"
  },
  {
    "title": "红毛猩猩的秘密生活",
    "file": "movie-495.html",
    "cover": 45,
    "region": "英国",
    "category": "喜剧动画",
    "tags": "婆罗洲, 社会行为, 雨林保护, 幼崽抚养",
    "year": "2024",
    "description": "深入婆罗洲雨林，揭示红毛猩猩不为人类所知的复杂社交网络与生存智慧。"
  },
  {
    "title": "九彩霸王花1993国语",
    "file": "movie-496.html",
    "cover": 46,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "女警、贺岁、无厘头、洪金宝式打斗、怀旧",
    "year": "1993",
    "description": "九个来自不同警校的女学员组成霸王花预备队，却因为一次乌龙任务，误打误撞保护了黑帮老大的情妇。"
  },
  {
    "title": "没有未来",
    "file": "movie-497.html",
    "cover": 47,
    "region": "日本",
    "category": "精选视频",
    "tags": "时间循环，末日，绝望，哲学，人性",
    "year": "2023",
    "description": "当全世界陷入3天无限循环，唯独程序员林音的意识清醒，她发现“没有未来”才是真正的解药。"
  },
  {
    "title": "海洋天堂",
    "file": "movie-498.html",
    "cover": 48,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "自闭症, 父子情深, 社会关怀",
    "year": "2023",
    "description": "患有自闭症的22岁男孩大福，在父亲被确诊绝症后，必须用三个月学会在没有父亲的世界里活下去。"
  },
  {
    "title": "龙虎福星",
    "file": "movie-499.html",
    "cover": 49,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "港片， 豪门， 复仇， 乌龙， 搞笑",
    "year": "1990",
    "description": "一对游手好闲的乌龙兄弟，为帮“大佬”追回被卷走的黑钱，误打误撞混进了豪门当保镖。"
  },
  {
    "title": "一代妖后",
    "file": "movie-500.html",
    "cover": 50,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "宫斗, 权谋, 命运, 爱恨, 复仇, 史诗",
    "year": "1992",
    "description": "她被天下人骂作妖后，却用半生忍耐换来一场足以改写王朝命运的反击。"
  },
  {
    "title": "那山那人那狗",
    "file": "movie-501.html",
    "cover": 51,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "父子, 乡村邮递员, 传承, 山路, 狗",
    "year": "2026",
    "description": "退休邮递员父亲最后一次陪儿子走邮路，两人在山中遇见一位自称“40年前的自己”的神秘背包客。"
  },
  {
    "title": "体坛秘史：人生破发点",
    "file": "movie-502.html",
    "cover": 52,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "网球, 低谷重生, 伤病, 心理战, 真实改编",
    "year": "2023",
    "description": "一位天才网球少女在职业生涯三次重伤后，试图用最后一次“破发点”拯救自己的人生。"
  },
  {
    "title": "艳贼历险记",
    "file": "movie-503.html",
    "cover": 53,
    "region": "美国",
    "category": "高清电影",
    "tags": "女性主角、上世纪60年代、猫鼠游戏、复古时尚",
    "year": "2024",
    "description": "60年代，专偷富豪名画的“艳贼”在一次任务中失手，被迫与追捕她多年的FBI探员组成搭档，去偷一份足以引发战争的秘密文件。"
  },
  {
    "title": "仙剑奇侠传",
    "file": "movie-504.html",
    "cover": 54,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "游戏改编, 宿命悲剧, 仙侠启蒙, 青春回忆",
    "year": "2005",
    "description": "渔村店小二李逍遥因缘际会结识女娲后人赵灵儿，两人在寻找灵珠的旅途中，揭开了震动人魔仙三界的宿命。"
  },
  {
    "title": "海上骑士",
    "file": "movie-505.html",
    "cover": 55,
    "region": "日本",
    "category": "高清电影",
    "tags": "摩托艇，孤独，父子，大海",
    "year": "2018",
    "description": "曾经的摩托艇冠军在丧妻后一蹶不振，一个自闭症少年却唤醒了他沉睡的骑士之魂。"
  },
  {
    "title": "首演之夜",
    "file": "movie-506.html",
    "cover": 56,
    "region": "法国",
    "category": "科幻悬疑",
    "tags": "剧场, 幕后, 压力, 艺术",
    "year": "2025",
    "description": "一部话剧首演前夜，女主角失踪，导演不得不让场记临时顶替，而场记从未演过戏。"
  },
  {
    "title": "嗜血剩餐",
    "file": "movie-507.html",
    "cover": 57,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "黑色幽默, 食物变异, 生存, 公司文化",
    "year": "2026",
    "description": "公司加班夜，外卖盒里的剩饭开始吞噬同事。"
  },
  {
    "title": "独生子女的婆婆妈妈",
    "file": "movie-508.html",
    "cover": 58,
    "region": "中国",
    "category": "剧情佳作",
    "tags": "现实题材, 婆媳, 养老, 职场",
    "year": "2018",
    "description": "一个被三对长辈“众星捧月”的独生女结婚后，突然要面对六个来自不同背景的老人，以及他们手中各不相同的“养老方案”。"
  },
  {
    "title": "圣诞揾老人",
    "file": "movie-509.html",
    "cover": 59,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "圣诞，谐音梗，市井，温馨，黄子华",
    "year": "1994",
    "description": "中年危机的“揾钱”达人阿财，为了讨女儿欢心，在圣诞节假扮成“会讲价”的另类圣诞老人。"
  },
  {
    "title": "搏击芭蕾",
    "file": "movie-510.html",
    "cover": 60,
    "region": "俄罗斯",
    "category": "精选视频",
    "tags": "芭蕾，格斗，反差，俄罗斯",
    "year": "2015",
    "description": "前特种部队教官被派去指导莫斯科大剧院的芭蕾舞团，用格斗训练帮她们击败竞争对手。"
  },
  {
    "title": "渥太利亚",
    "file": "movie-511.html",
    "cover": 61,
    "region": "加拿大",
    "category": "精选视频",
    "tags": "异乡寻亲, 冬季公路, 记忆碎片, 文化错位, 自我和解",
    "year": "2005",
    "description": "在一座被误读为“渥太利亚”的陌生城市里，失散多年的父女沿着雪地与车站的线索，重新学习如何把彼此叫作家人。"
  },
  {
    "title": "夜惊情",
    "file": "movie-512.html",
    "cover": 62,
    "region": "西班牙",
    "category": "爱情青春",
    "tags": "失眠, 幻觉, 公寓楼, 邻居, 心理恐怖",
    "year": "2025",
    "description": "一位长期失眠的女人发现，楼内邻居们每到凌晨三点都会同时醒来，做着同样诡异的事。"
  },
  {
    "title": "祖父",
    "file": "movie-513.html",
    "cover": 63,
    "region": "西班牙",
    "category": "喜剧动画",
    "tags": "遗产阴谋，代际冲突，认知障碍",
    "year": "2024",
    "description": "患阿尔兹海默症的祖父坚称自己年轻时杀过人，全家人都以为他在胡说。"
  },
  {
    "title": "小孩不笨2",
    "file": "movie-514.html",
    "cover": 64,
    "region": "新加坡",
    "category": "科幻悬疑",
    "tags": "教育, 新加坡, 亲子关系, 校园, 励志",
    "year": "2006",
    "description": "三个被学校定义为“笨小孩”的中学生，联手黑掉教育部网站，只为让父母看他们的内心独白。"
  },
  {
    "title": "方托马斯大战苏格兰场",
    "file": "movie-515.html",
    "cover": 65,
    "region": "法国",
    "category": "高清电影",
    "tags": "怪盗, 复古风, 英法互嘲",
    "year": "2026",
    "description": "法国怪盗方托马斯扬言要在白金汉宫偷走女王皇冠，苏格兰场不得不请他的死对头——退休的凡杜尔警探出山。"
  },
  {
    "title": "披荆斩棘的大小姐",
    "file": "movie-516.html",
    "cover": 66,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "女性励志, 清末民初, 纺织业, 复仇爽剧",
    "year": "2024",
    "description": "被家族抛弃的江南织造千金，化身神秘商人卷土重来，在军阀混战的上海滩重建丝绸帝国。"
  },
  {
    "title": "奈克斯特·奥特曼",
    "file": "movie-517.html",
    "cover": 67,
    "region": "日本",
    "category": "高清电影",
    "tags": "奥特曼系列，成人向，精神续作，怪兽灾难",
    "year": "2025",
    "description": "失忆青年体内寄宿着未知光之巨人，而自卫队的怪兽防卫计划，正在唤醒更大的灾难。"
  },
  {
    "title": "顽固分子",
    "file": "movie-518.html",
    "cover": 68,
    "region": "法国 / 比利时",
    "category": "高清电影",
    "tags": "政治惊悚, 极左组织, 卧底, 心理操控, 背叛",
    "year": "2023",
    "description": "一名极左地下组织的核心成员失踪三年后突然自首，但审讯他的警官发现：眼前这个人根本不是原成员。"
  },
  {
    "title": "布利特县",
    "file": "movie-519.html",
    "cover": 69,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "南方哥特, 小镇谜案, 警长, 家族秘密",
    "year": "2025",
    "description": "布利特县三任警长接连离奇死亡，新来女警长发现小镇地下埋着殖民时期的诅咒。"
  },
  {
    "title": "周恩来万隆之行",
    "file": "movie-520.html",
    "cover": 70,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "外交，冷战，和平共处",
    "year": "2025",
    "description": "1955年万隆会议，周恩来在重重暗杀威胁下，用18分钟即兴发言扭转了亚非会议走向。"
  },
  {
    "title": "青春儿女",
    "file": "movie-521.html",
    "cover": 71,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "校园乐队, 兄妹和解, 回归故乡, 初恋, 成长告别",
    "year": "1998",
    "description": "一支在毕业前夕解散的校园乐队，把几个少年少女从彼此逃避的关系里重新推回同一条街道，也推回他们不愿面对的家庭真相。"
  },
  {
    "title": "双生儿",
    "file": "movie-522.html",
    "cover": 72,
    "region": "日本",
    "category": "欧美热播",
    "tags": "双胞胎, 精神分裂, 洋娃娃, 反转不断",
    "year": "2025",
    "description": "一场车祸后，姐姐声称妹妹已经死了七年，但家里的监控每天都能拍到妹妹的身影。"
  },
  {
    "title": "不良帅之大蛇灾",
    "file": "movie-523.html",
    "cover": 73,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "古装，巨蛇，权谋，玄幻，特效",
    "year": "2025",
    "description": "当朝不良帅为保皇城，不得不与上古凶兽“大蛇”进行一场生死博弈。"
  },
  {
    "title": "安阳婴儿",
    "file": "movie-524.html",
    "cover": 74,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "弃婴、底层群像、河南、黑色幽默",
    "year": "2024",
    "description": "安阳一个修鞋匠在路边捡到弃婴，消息传开后，全城四个不同的“父母”找上门来认领。"
  },
  {
    "title": "真爱大骗局",
    "file": "movie-525.html",
    "cover": 75,
    "region": "美国",
    "category": "欧美热播",
    "tags": "骗局, 多重反转, 假结婚, 身份谜团",
    "year": "2025",
    "description": "一场精心设计的假结婚骗保案，两人各怀鬼胎，却意外发现对方才是自己一直在找的人。"
  },
  {
    "title": "血玫瑰",
    "file": "movie-526.html",
    "cover": 76,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "情杀，复仇，邪典，艳情，老港片",
    "year": "1988",
    "description": "歌厅舞女被毁容后化身红衣女鬼，用玫瑰刺将负心汉一个个杀死。"
  },
  {
    "title": "喂，看见耳朵啦！第二季",
    "file": "movie-527.html",
    "cover": 77,
    "region": "日本 / 中国大陆",
    "category": "剧情佳作",
    "tags": "泡面番，兽耳，治愈，温馨日常，BL",
    "year": "2019",
    "description": "单身漫画家捡到了一只可以变成人形的猫妖，从此他的家里每天都像动物园一样热闹。"
  },
  {
    "title": "陀地驱魔人",
    "file": "movie-528.html",
    "cover": 78,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "张家辉, 鬼片, 香港情怀, 驱魔",
    "year": "2015",
    "description": "能看见鬼的驱魔人阿聪，用“谈判”代替暴力，却遇上一个百年厉鬼。"
  },
  {
    "title": "午夜木兰情",
    "file": "movie-529.html",
    "cover": 79,
    "region": "中国台湾",
    "category": "精选视频",
    "tags": "深夜，花店，错过，治愈",
    "year": "2022",
    "description": "一个失眠的都市女白领偶然走进一家只在午夜开放的木兰花园，与花店老板展开了一段跨越七年的暗恋终曲。"
  },
  {
    "title": "众神之谷",
    "file": "movie-530.html",
    "cover": 80,
    "region": "挪威 / 冰岛",
    "category": "精选视频",
    "tags": "北欧神话, 邪教, 考古, 心理恐怖",
    "year": "2025",
    "description": "考古队在一个古老的挪威山谷挖掘出一座神殿，发现北欧诸神并非传说，而是曾经真实存在过的寄生体。"
  },
  {
    "title": "帝王计划：怪兽遗产",
    "file": "movie-531.html",
    "cover": 81,
    "region": "美国",
    "category": "欧美热播",
    "tags": "怪兽宇宙，前传，阴谋论，政府机密",
    "year": "2026",
    "description": "一个退休特工打破沉默，揭露“帝王计划”在发现哥斯拉之前，用活人喂养过其他怪兽。"
  },
  {
    "title": "步行王",
    "file": "movie-532.html",
    "cover": 82,
    "region": "韩国",
    "category": "喜剧动画",
    "tags": "竞走, 公务员考试, 三浦, 励志",
    "year": "2023",
    "description": "三次公务员考试落榜的废柴，为了逃避家人加入了老年竞走队，却意外走成了国家代表。"
  },
  {
    "title": "生日幻境",
    "file": "movie-533.html",
    "cover": 83,
    "region": "日本",
    "category": "欧美热播",
    "tags": "宫崎骏风格, 内心成长, 童话, 手绘动画",
    "year": "1988",
    "description": "在八岁生日的前一晚，害羞的小男孩被一只会说话的时钟兔子带进了墙壁里的奇幻世界，他必须在天亮前找回自己遗失的“勇气之心”。"
  },
  {
    "title": "偶像星愿第三季",
    "file": "movie-534.html",
    "cover": 84,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "男团、成长、经纪公司、演唱会",
    "year": "2021",
    "description": "七位少年偶像组合“IDOLiSH7”面临解散危机，而对手团“TRIGGER”也陷入了资本操控的陷阱。"
  },
  {
    "title": "寻求正义",
    "file": "movie-535.html",
    "cover": 85,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "私刑者，司法漏洞，陪审团，道德困境",
    "year": "2024",
    "description": "一个被无罪释放的连环强奸犯第二天死了，全城有523个人都有动机，但只有一个人自首。"
  },
  {
    "title": "大盗吉普赛",
    "file": "movie-536.html",
    "cover": 86,
    "region": "法国",
    "category": "科幻悬疑",
    "tags": "盗窃, 罗姆人, 复仇, 黑吃黑, 公路",
    "year": "2022",
    "description": "一名吉普赛女盗为救被黑帮绑架的女儿，不得不偷走属于教父的黄金马车。"
  },
  {
    "title": "夏日烟火",
    "file": "movie-537.html",
    "cover": 87,
    "region": "日本",
    "category": "爱情青春",
    "tags": "夏日， 绝症， 遗憾， 初恋",
    "year": "2023",
    "description": "高中最后一个夏天，患绝症的女孩决定为自己办一场盛大的烟火葬礼。"
  },
  {
    "title": "在大雪封闭的山庄里",
    "file": "movie-538.html",
    "cover": 88,
    "region": "日本",
    "category": "爱情青春",
    "tags": "暴风雪山庄, 本格推理, 剧团, 全员嫌疑人, 改编",
    "year": "2022",
    "description": "七名剧团成员被邀请到山庄排演新剧，却发现剧本上的杀人事件正在真实上演。"
  },
  {
    "title": "随时候命粤语",
    "file": "movie-539.html",
    "cover": 89,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "紧急救援，飞虎队，兄弟情，粤语原声",
    "year": "2023",
    "description": "一支香港紧急应变小组，每次任务都是生死时速，而他们最大的敌人不是匪徒，是内部的定时炸弹。"
  },
  {
    "title": "功夫厨神国语",
    "file": "movie-540.html",
    "cover": 90,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "粤式市井, 厨艺对决, 传统武馆, 误会逆袭, 轻松热血",
    "year": "2009",
    "description": "一个只会耍嘴皮子的落魄主厨，意外接手老字号酒楼后，被迫把厨房当擂台、把锅铲当兵器。"
  },
  {
    "title": "塔巴德",
    "file": "movie-541.html",
    "cover": 91,
    "region": "印度",
    "category": "动作犯罪",
    "tags": "神话, 贪婪, 非线性叙事",
    "year": "2024",
    "description": "三个不同时代的贪婪者，在同一座被称为“塔巴德”的废弃古堡中，触发了永恒的诅咒。"
  },
  {
    "title": "致命24小时",
    "file": "movie-542.html",
    "cover": 92,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "实时动作, 营救, 硬核",
    "year": "2024",
    "description": "退役女狙击手的女儿被绑架，绑匪给她24小时去狙杀一位即将出庭的污点证人，否则撕票。"
  },
  {
    "title": "双镯",
    "file": "movie-543.html",
    "cover": 93,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "闽南，民俗，姐妹情，旧社会，悲剧",
    "year": "1991",
    "description": "福建旧俗，两个情同姐妹的女孩交换双镯，许下“共嫁一夫”的誓言，却走向不同命运。"
  },
  {
    "title": "名侦探柯南：天空的劫难船",
    "file": "movie-544.html",
    "cover": 94,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "飞艇, 病毒, 怪盗基德, 高空, 密室",
    "year": "2025",
    "description": "柯南与基德被迫联手，因为劫持飞艇的恐怖分子想让全关西人感染同一种笑病毒。"
  },
  {
    "title": "扪心问诊第一季",
    "file": "movie-545.html",
    "cover": 95,
    "region": "美国",
    "category": "精选视频",
    "tags": "心理咨询，密室对话，医者不自医，情感漩涡，高密度台词",
    "year": "2008",
    "description": "心理医生保罗在咨询室里倾听病人的秘密，却无法治愈自己分崩离析的婚姻。"
  },
  {
    "title": "卖肉养孤儿粤语",
    "file": "movie-546.html",
    "cover": 96,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "市井，艰辛，亲情，香港旧事",
    "year": "1989",
    "description": "菜市场猪肉佬独自拉扯三个孩子长大，一把斩骨刀撑起一个家。"
  },
  {
    "title": "少年泰坦出击大战少年泰坦",
    "file": "movie-547.html",
    "cover": 97,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "平行宇宙, 自黑, 萌系, 合体, 打破第四面墙",
    "year": "2019",
    "description": "卖萌版的少年泰坦与自己最严肃的原始版本泰坦遭遇，一言不合就开始互黑。"
  },
  {
    "title": "紧急呼救：孤星第三季",
    "file": "movie-548.html",
    "cover": 98,
    "region": "美国",
    "category": "高清电影",
    "tags": "救援, 消防员, 德州, 单元剧, 情感",
    "year": "2026",
    "description": "奥斯汀126小队在暴风雪、化工厂爆炸和大坝溃堤中，继续他们的“孤星”救援。"
  },
  {
    "title": "生死拳速",
    "file": "movie-549.html",
    "cover": 99,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "港式动作, 极限救援, 兄弟情, 飞车特技",
    "year": "1995",
    "description": "前拳王为救被黑帮绑架的女儿，必须在24小时内打穿全城地下拳场。"
  },
  {
    "title": "守望一生",
    "file": "movie-550.html",
    "cover": 100,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "知青 / 坚守 / 时代变迁",
    "year": "2024",
    "description": "一名知青为了一句承诺，在大山里守了红颜知己的坟墓四十年。"
  },
  {
    "title": "叛狱大猎杀",
    "file": "movie-551.html",
    "cover": 101,
    "region": "韩国",
    "category": "高清电影",
    "tags": "监狱, 大逃杀, 腐败",
    "year": "2026",
    "description": "黑监狱突然释放所有囚犯并封锁全岛，开始一场72小时的“官狩”。"
  },
  {
    "title": "新辣妈辣妹",
    "file": "movie-552.html",
    "cover": 102,
    "region": "美国",
    "category": "欧美热播",
    "tags": "身份互换、母女关系、摇滚喜剧、爆笑改编、代际和解",
    "year": "2026",
    "description": "叛逆少女与更年期母亲意外互换身体，不得不顶着彼此的身份参加乐队比赛和公司年会。"
  },
  {
    "title": "仰望师恩（2006年）",
    "file": "movie-553.html",
    "cover": 103,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "乡村教师, 残疾, 教育, 催泪",
    "year": "2006",
    "description": "一个因意外截瘫的城市女教师，被调到偏远山区，却用一面镜子教出了全镇最好的学生。"
  },
  {
    "title": "天龙八部1982国语",
    "file": "movie-554.html",
    "cover": 104,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "经典重制，八二版，群像，金庸",
    "year": "1982 (数字修复版)",
    "description": "全新高清修复的82版《天龙八部》，看梁家仁的萧峰、黄日华的虚竹，如何重新定义“无人不冤，有情皆孽”。"
  },
  {
    "title": "友谊万万岁",
    "file": "movie-555.html",
    "cover": 105,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "养老院, 夕阳红, 自驾游",
    "year": "2025",
    "description": "养老院四个老头老太偷了一辆面包车，要去三千公里外看一场年轻时错过的演唱会。"
  },
  {
    "title": "王者归来黄飞鸿",
    "file": "movie-556.html",
    "cover": 106,
    "region": "中国香港 / 中国大陆",
    "category": "高清电影",
    "tags": "黄飞鸿, 清末, 蒸汽朋克, 中外对决",
    "year": "2025",
    "description": "隐姓埋名多年的黄飞鸿重出江湖，这次他要对抗的不是武师，而是一支装备精良的境外雇佣军。"
  },
  {
    "title": "玩命关头：特别行动",
    "file": "movie-557.html",
    "cover": 107,
    "region": "美国",
    "category": "欧美热播",
    "tags": "飞车, 双雄, 全球追缉",
    "year": "2025",
    "description": "死对头特工与悍匪被迫联手，驾驶改装车横跨三大洲，拦截一枚能瘫痪全球电网的超级芯片。"
  },
  {
    "title": "大概是魔鬼",
    "file": "movie-558.html",
    "cover": 108,
    "region": "法国",
    "category": "喜剧动画",
    "tags": "存在主义、批判、迷茫",
    "year": "1972",
    "description": "一个对世界感到彻底幻灭的青年，为了证明魔鬼的存在，策划了一场虚无的谋杀。"
  },
  {
    "title": "超班宝宝",
    "file": "movie-559.html",
    "cover": 109,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "婴儿, 超级英雄, 搞笑, 合家欢",
    "year": "2006",
    "description": "一对想要孩子的科学家夫妻，自己动手组装了一个超级机器人婴儿。"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 南方来信 猎屠 丁丁和太阳神庙 爸爸去哪儿第三季 续·社长千一夜 无名份的浪漫 喂，太宰 百姓贵族 危急关头 圣诞怪杰 关键投票 飞鹰粤语 国王大卫 竹马钢琴师 燃烧岁月粤语 荒野杀机 忽然之间 侏罗纪世界：统霸天下序章 拜托了妈妈 她不土，她是我妹妹",
    "file": "movie-560.html",
    "cover": 110,
    "region": "根据片名判断",
    "category": "爱情青春",
    "tags": "根据片名判断",
    "year": "根据片名判断",
    "description": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）"
  },
  {
    "title": "为了那些没有故事的人",
    "file": "movie-561.html",
    "cover": 111,
    "region": "法国",
    "category": "喜剧动画",
    "tags": "纪录片导演， 普通人， 底层视角， 黑白摄影， 存在主义",
    "year": "2022",
    "description": "一位过气的纪录片导演，专门为路边醉汉和工厂女工拍摄他们幻想中的人生。"
  },
  {
    "title": "我的成名自传",
    "file": "movie-562.html",
    "cover": 112,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "娱乐圈、代笔写手、身份错位、名利场、自我认同",
    "year": "2021",
    "description": "当红小生的自传卖了五百万册，真正的代笔写手却被逼跳楼，醒来后他发现自己的灵魂住进了小生身体。"
  },
  {
    "title": "砂之器2019",
    "file": "movie-563.html",
    "cover": 113,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "翻拍, 经典改编, 宿命, 古典乐, 社会派",
    "year": "2019",
    "description": "当红钢琴家被指控四十年前一桩杀人案，他的音乐会门票成了最昂贵的不在场证明。"
  },
  {
    "title": "女婿难当",
    "file": "movie-564.html",
    "cover": 114,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "赘婿, 代际冲突, 温情, 生活流",
    "year": "2027",
    "description": "一个职场精英意外成了“全职女婿”，在丈母娘的毒舌和亲妈的抱怨中艰难求生。"
  },
  {
    "title": "异形：圣地",
    "file": "movie-565.html",
    "cover": 115,
    "region": "美国",
    "category": "精选视频",
    "tags": "宗教隐喻, 信仰崩塌, 异形起源",
    "year": "2025",
    "description": "一支科考队在一座中世纪修道院地下发现了异形的化石，而修道院的修女们，世代守护的就是它的重生。"
  },
  {
    "title": "小脚板走天涯7",
    "file": "movie-566.html",
    "cover": 116,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "恐龙， 寻亲， 勇气， 成长",
    "year": "2024",
    "description": "小恐龙脚板在寻找失散族群时，意外发现了一座能实现愿望的神秘星空瀑布。"
  },
  {
    "title": "梵天神器：灭世开端",
    "file": "movie-567.html",
    "cover": 117,
    "region": "印度",
    "category": "科幻悬疑",
    "tags": "印度神话, 特效大片, 神器争夺, 史诗",
    "year": "2030",
    "description": "当代孟买，一个普通大学生发现自己竟是梵天转世，而反派正在集齐三大神器以重置宇宙。"
  },
  {
    "title": "各自孤独的美食家",
    "file": "movie-568.html",
    "cover": 118,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "独食，深夜，都市，温情，人生百态",
    "year": "2019",
    "description": "同一家小餐馆里，每晚来吃饭的客人彼此不认识，但每一道菜都连接着他们孤独的人生。"
  },
  {
    "title": "看看你有多爱我",
    "file": "movie-569.html",
    "cover": 119,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "心理战, 复仇, 婚姻, 反转",
    "year": "2025",
    "description": "妻子为了测试丈夫的忠诚度雇人勾引，却意外牵扯出一桩尘封的谋杀案。"
  },
  {
    "title": "青蛙总动员",
    "file": "movie-570.html",
    "cover": 120,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "环保, 变异, 生存, 搞笑",
    "year": "2024",
    "description": "一场化学泄漏事故后，一群拥有了人类智慧的家庭青蛙，必须在内华达沙漠里寻找新的“绿洲”。"
  },
  {
    "title": "为爱献身",
    "file": "movie-571.html",
    "cover": 121,
    "region": "印度",
    "category": "动作犯罪",
    "tags": "种姓制度, 禁忌之恋, 殉情, 现实主义歌舞片",
    "year": "2024",
    "description": "低种姓男孩与高种姓女孩相爱，全村人逼他们分手，他们选择了一个让所有人都不敢再提种姓的方式。"
  },
  {
    "title": "我惊喜",
    "file": "movie-572.html",
    "cover": 122,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "反转, 求婚, 乌龙, 笑泪",
    "year": "2025",
    "description": "一个男人为给女友惊喜求婚策划了九十九个方案全部失败，第一百个方案终于成功了——但女友说她已经结过婚了。"
  },
  {
    "title": "请别相信她",
    "file": "movie-573.html",
    "cover": 123,
    "region": "韩国",
    "category": "剧情佳作",
    "tags": "骗子, 乡村, 家族喜剧, 假扮新娘",
    "year": "2004",
    "description": "一个女骗子为了躲避追捕，假扮成乡下老妇家的孙媳妇，结果全村人都信了，除了那个真孙子。"
  },
  {
    "title": "天空与海洋",
    "file": "movie-574.html",
    "cover": 124,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "环保, 人鱼, 治愈, 纯爱, 新海诚风格",
    "year": "2025",
    "description": "一个研究海洋微塑料的抑郁科学家，在海边捡到一个自称来自“天空之海”的迷路人鱼。"
  },
  {
    "title": "拥爱奇迹",
    "file": "movie-575.html",
    "cover": 125,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "绝症, 时空循环, 治愈, 约定, 生死恋",
    "year": "2023",
    "description": "身患绝症的女画家在生命的最后七天，每天都会变成不同的陌生人去拥抱她的爱人。"
  },
  {
    "title": "向前一步是幸福",
    "file": "movie-576.html",
    "cover": 126,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "职场, 婚姻, 抉择, 治愈",
    "year": "2020",
    "description": "离婚冷静期内，一对冤家夫妻被迫同居并竞争同一总监职位，事业与爱情的棋局步步紧逼。"
  },
  {
    "title": "亲爱的恩佐",
    "file": "movie-577.html",
    "cover": 127,
    "region": "意大利",
    "category": "欧美热播",
    "tags": "足球, 父子, 梦想, 成长, 温情",
    "year": "2024",
    "description": "一个失去双腿的少年，在曾是球星的父亲陪伴下，学习用双手“踢”出一片天。"
  },
  {
    "title": "滚入红尘",
    "file": "movie-578.html",
    "cover": 128,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "职场, 女性, 成长, 写实",
    "year": "2024",
    "description": "三个中年女人主动失业后，决定从茶餐厅服务员做起，滚回这残酷的红尘。"
  },
  {
    "title": "炎与女",
    "file": "movie-579.html",
    "cover": 129,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "女性, 母女, 纵火, 轮回",
    "year": "2024",
    "description": "一个女人发现自己每次濒死都会回到七岁那年，而她母亲当年就是死于那场烧毁一切的大火。"
  },
  {
    "title": "促成奇迹的女人",
    "file": "movie-580.html",
    "cover": 130,
    "region": "意大利",
    "category": "剧情佳作",
    "tags": "真实事件改编, 女性力量, 医疗, 母爱",
    "year": "2024",
    "description": "西西里岛的一位单亲母亲，为了让患有罕见病的女儿获得天价特效药，独自发起了一场撼动全国医疗体系的草根运动。"
  },
  {
    "title": "荣归1978",
    "file": "movie-581.html",
    "cover": 131,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "知青, 改革开放, 情感纠葛, 命运",
    "year": "2024",
    "description": "三个知青在1978年高考恢复前夜冒死偷渡回城，三十年后却发现当年的一切都是一场骗局。"
  },
  {
    "title": "桃园妙探",
    "file": "movie-582.html",
    "cover": 132,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "荒诞，黑色幽默，兄弟情，怀旧",
    "year": "2024",
    "description": "三个落魄中年在桃园结拜后，意外卷入一起古董劫案，他们用蹩脚的“古代兵法”对抗现代高科技悍匪。"
  },
  {
    "title": "两个杰克",
    "file": "movie-583.html",
    "cover": 133,
    "region": "美国",
    "category": "欧美热播",
    "tags": "双雄，赎罪，荒野",
    "year": "2021",
    "description": "两个都叫杰克的亡命之徒，在荒原上相遇，却发现对方是自己的过去与未来。"
  },
  {
    "title": "神经大帝",
    "file": "movie-584.html",
    "cover": 134,
    "region": "香港",
    "category": "精选视频",
    "tags": "精神病院、搞笑、反转、治愈",
    "year": "1998",
    "description": "一个自称“大帝”的精神病人，用他荒诞的理论，治好了所有医生。"
  },
  {
    "title": "男男女女",
    "file": "movie-585.html",
    "cover": 135,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "多线叙事，性别互换，相亲，都市症候，荒诞",
    "year": "2023",
    "description": "一家“性别互换体验馆”里，五对男女通过交换身体48小时来重新理解爱情，结果全部乱套。"
  },
  {
    "title": "爱麻夫人热映中",
    "file": "movie-586.html",
    "cover": 136,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "单亲妈妈, 误会, 直播, 温暖治愈",
    "year": "2025",
    "description": "保守的单亲妈妈误成深夜成人电台主播，儿子是负责抓她的网警。"
  },
  {
    "title": "最后的旅人",
    "file": "movie-587.html",
    "cover": 137,
    "region": "法国",
    "category": "精选视频",
    "tags": "末日， 时间旅行， 孤独， 哲学",
    "year": "2025",
    "description": "他是最后的人类，手握时间旅行技术，但他只能在过去旁观，无法触碰。"
  },
  {
    "title": "功夫世家",
    "file": "movie-588.html",
    "cover": 138,
    "region": "中国内地 / 中国香港",
    "category": "动作犯罪",
    "tags": "功夫喜剧，现代武林，父子矛盾，传承，动漫改编感",
    "year": "2026",
    "description": "南方一个隐世的功夫家族，为了阻止祖宅被拆迁，用祖传武功跟现代开发商来了场爆笑对决。"
  },
  {
    "title": "魔术快斗1412",
    "file": "movie-589.html",
    "cover": 139,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "怪盗基德，魔术，国际盗贼",
    "year": "2026",
    "description": "怪盗基德收到神秘组织“1412”的挑战书，对方声称知道他的真实身份，并要求他盗取世界七大不可盗之物。"
  },
  {
    "title": "五月槐花香",
    "file": "movie-590.html",
    "cover": 140,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "北京, 古玩, 胡同, 文革前",
    "year": "2004",
    "description": "1962年的北京琉璃厂，一个卖馄饨的寡妇和三个落魄古玩商人的爱恨纠葛。"
  },
  {
    "title": "龙虎会",
    "file": "movie-591.html",
    "cover": 141,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "双雄对决, 兄弟情, 现代武侠",
    "year": "2024",
    "description": "代表体制的退役特种兵与浪迹江湖的侠盗，为了救同一个女孩，不得不联手对抗地下器官贩卖组织。"
  },
  {
    "title": "月之阴面",
    "file": "movie-592.html",
    "cover": 142,
    "region": "德国 / 瑞士",
    "category": "喜剧动画",
    "tags": "月球, 基地, 克隆, 记忆移植, 孤独",
    "year": "2026",
    "description": "月球基地唯一的宇航员醒来后发现，自己可能是第三十七个克隆体，而前三十六个都“消失”了。"
  },
  {
    "title": "独一有二的她",
    "file": "movie-593.html",
    "cover": 143,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "克隆人, 自我认同, 科技伦理, 双女主",
    "year": "2025",
    "description": "天才女科学家发现自己的克隆体被秘密养大并替换了她的生活，而她本人已被当作“次品”关进了地下实验室。"
  },
  {
    "title": "嗜血校园",
    "file": "movie-594.html",
    "cover": 144,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "吸血鬼，高中生，讽刺，血腥暴力",
    "year": "2024",
    "description": "一所普通高中突然被一种只感染青春期学生的嗜血病毒席卷，老师们成了猎物。"
  },
  {
    "title": "风流二世祖",
    "file": "movie-595.html",
    "cover": 145,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "花花公子, 家族企业, 扮猪吃老虎, 港式无厘头",
    "year": "1992",
    "description": "挥金如土的花花公子被老爹冻结资产后，扮成穷小子追求曾羞辱过的女强人，却反被套牢。"
  },
  {
    "title": "你让我雄起",
    "file": "movie-596.html",
    "cover": 146,
    "region": "阿根廷",
    "category": "欧美热播",
    "tags": "女性力量,中年危机,拳击",
    "year": "2026",
    "description": "一位被家暴20年的50岁家庭主妇，偷偷进入了一家地下拳馆，她用拳头找回了被剥夺的整个人生。"
  },
  {
    "title": "东京大饭店特别篇",
    "file": "movie-597.html",
    "cover": 147,
    "region": "日本",
    "category": "爱情青春",
    "tags": "日剧SP, 木村拓哉, 米其林, 法餐, 团队精神",
    "year": "2024",
    "description": "Grand Maison Tokyo接到神秘预约，对方要求在一天内为一艘沉没客轮上的86岁老厨师复原“船上的最后一餐”。"
  },
  {
    "title": "富家穷路第五季",
    "file": "movie-598.html",
    "cover": 148,
    "region": "加拿大",
    "category": "爱情青春",
    "tags": "讽刺, 成长, 小镇生活, 温馨",
    "year": "2025",
    "description": "破产富豪一家在小镇磨炼两年后，开始用歪点子振兴当地经济。"
  },
  {
    "title": "神医",
    "file": "movie-599.html",
    "cover": 149,
    "region": "中国 / 古装",
    "category": "精选视频",
    "tags": "中医，探案，朝堂权谋，师徒",
    "year": "2024",
    "description": "一个被贬入太医院的小太医，发现皇帝怪病的药方，竟藏在十年前一场科举舞弊案的死者骸骨里。"
  },
  {
    "title": "刑事案十号",
    "file": "movie-600.html",
    "cover": 150,
    "region": "韩国",
    "category": "剧情佳作",
    "tags": "密室, 反转, 录音带, 追凶, 低预算",
    "year": "2018",
    "description": "警察在废弃的警察局发现十盘审讯录音带，每一盘都指向一个被遗忘的悬案。"
  },
  {
    "title": "小汤匙",
    "file": "movie-601.html",
    "cover": 1,
    "region": "韩国",
    "category": "精选视频",
    "tags": "阶级、互换人生、育儿、反乌托邦",
    "year": "2025",
    "description": "贫民窟母亲为了让女儿喝上干净奶粉，参加了一个名叫“小汤匙”的直播实验，结果发现富人所谓的“借走”孩子是永久性的。"
  },
  {
    "title": "松露猎人",
    "file": "movie-602.html",
    "cover": 2,
    "region": "意大利 / 法国",
    "category": "喜剧动画",
    "tags": "松露, 黑市, 父子, 阿尔卑斯山",
    "year": "2025",
    "description": "意大利老松露猎人与叛逆儿子联手，在黑市巨头追杀下守护祖传猎犬和最后一片松露林。"
  },
  {
    "title": "异形：圣约",
    "file": "movie-603.html",
    "cover": 3,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "太空惊悚， 仿生人， 信仰， 起源",
    "year": "2026",
    "description": "圣约号殖民飞船收到陌生星球信号，降落后面临的不是新家园，而是生化人大卫的造物主实验场。"
  },
  {
    "title": "超人梅比斯外传:凶兽重生",
    "file": "movie-604.html",
    "cover": 4,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "黑暗英雄， 怪兽灾难， 基因实验， 人格分裂",
    "year": "2024",
    "description": "当光之巨人的基因与远古凶兽的残骸融合，新的“英雄”究竟是救世主还是毁灭者？"
  },
  {
    "title": "王牌酒保神之酒杯",
    "file": "movie-605.html",
    "cover": 5,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "调酒，疗愈，人生故事，银座",
    "year": "2024",
    "description": "一位拥有绝对味觉的天才酒保，在银座一间地下酒吧里，用一杯鸡尾酒为走投无路的客人们解开心结。"
  },
  {
    "title": "情人与骗子",
    "file": "movie-606.html",
    "cover": 6,
    "region": "法国",
    "category": "欧美热播",
    "tags": "骗中骗, 巴黎, 渣男反杀, 女性联盟",
    "year": "2024",
    "description": "两名被骗财骗色的女子联手设局，准备让那个花花公子社会性死亡，却意外发现他背后还有一个操控一切的诈骗集团。"
  },
  {
    "title": "紫光任务",
    "file": "movie-607.html",
    "cover": 7,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "赛博朋克, 女性特工, 未来武器, 近身格斗",
    "year": "2026",
    "description": "在紫外线灯才能照亮的黑市里，一名身体植入了隐形装甲的退伍女兵，必须找回一颗能引发人造太阳爆炸的量子核心。"
  },
  {
    "title": "向着幸福前进",
    "file": "movie-608.html",
    "cover": 8,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "婚后生活, 婆媳关系, 再就业",
    "year": "2015",
    "description": "都市白领婚后遭遇婆婆刁难和失业双重打击，她选择用创业重新定义幸福。"
  },
  {
    "title": "淬火年代",
    "file": "movie-609.html",
    "cover": 9,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "钢铁工业, 抗美援朝, 工人群像",
    "year": "2025",
    "description": "1951年，一座东北钢厂接到死命令：三个月内轧出飞机起落架专用钢，而图纸被特务烧毁了一半。"
  },
  {
    "title": "名侦探柯南：贝克街的亡灵",
    "file": "movie-610.html",
    "cover": 10,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "虚拟现实, 开膛手杰克, 福尔摩斯, 游戏, 经典重映",
    "year": "2002",
    "description": "柯南与失控的人工智能“诺亚方舟”一同被困19世纪伦敦，必须在游戏中阻止开膛手杰克杀害五十名孩子。"
  },
  {
    "title": "更喜欢明天的你",
    "file": "movie-611.html",
    "cover": 11,
    "region": "韩国",
    "category": "精选视频",
    "tags": "时间旅行、倒流、初恋、遗憾、双向奔赴",
    "year": "2024",
    "description": "分手当天，两人各自收到来自未来的视频，里面是白发苍苍的自己，哭着说“不要放开ta的手”。"
  },
  {
    "title": "凶手的样子",
    "file": "movie-612.html",
    "cover": 12,
    "region": "韩国",
    "category": "科幻悬疑",
    "tags": "变脸, 顶罪, 多重反转",
    "year": "2025",
    "description": "一个整容成通缉犯样子的警察，为了抓他而成为他，最后发现自己可能真的就是他。"
  },
  {
    "title": "一日贵妇",
    "file": "movie-613.html",
    "cover": 13,
    "region": "法国",
    "category": "爱情青春",
    "tags": "互换身份, 阶级, 巴黎",
    "year": "2025",
    "description": "巴黎清洁工大妈被选中假扮失踪的伯爵夫人24小时，却发现自己爱上了这种“被尊重”的感觉。"
  },
  {
    "title": "铁马战车粤语",
    "file": "movie-614.html",
    "cover": 14,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "交通警察, 飞车追逐, 兄弟情, 粤语原声",
    "year": "2016",
    "description": "一支香港交通部的精英摩托警队，用铁马与速度追击城市里的每一桩罪案。"
  },
  {
    "title": "古宅老友记第五季",
    "file": "movie-615.html",
    "cover": 15,
    "region": "英国",
    "category": "科幻悬疑",
    "tags": "鬼魂, 合租, 英式幽默, 情感, 最终季",
    "year": "2026",
    "description": "老宅面临拆迁，一群不同时代的鬼魂与女主人必须找到证明房屋文化价值的最后一张王牌。"
  },
  {
    "title": "生离死别",
    "file": "movie-616.html",
    "cover": 16,
    "region": "中国台湾",
    "category": "科幻悬疑",
    "tags": "临终关怀，遗体化妆师，和解",
    "year": "2025",
    "description": "叛逆少女被迫跟做遗体化妆师的母亲学艺，在一次次为逝者化妆中，她终于理解了母亲为何总在深夜痛哭。"
  },
  {
    "title": "伊扎克·拉宾的最后一天",
    "file": "movie-617.html",
    "cover": 17,
    "region": "以色列",
    "category": "动作犯罪",
    "tags": "政治刺杀, 纪录片风格, 和平进程, 真实时间, 悲剧",
    "year": "2015",
    "description": "影片以伪纪录片形式，倒计时还原以色列前总理拉宾遇刺前24小时里，刺客与保镖各自走向命运的每一分钟。"
  },
  {
    "title": "致命女人第一季",
    "file": "movie-618.html",
    "cover": 18,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "女性， 谋杀， 多时代， 婚姻， 复仇",
    "year": "2024",
    "description": "同一栋豪宅，三个时代的完美娇妻，都选择了用同一把厨刀，解决掉各自的丈夫。"
  },
  {
    "title": "当泰拉遇上比拉尔",
    "file": "movie-619.html",
    "cover": 19,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "文化冲突, 浪漫, 美食, 冤家变情侣, 多元文化",
    "year": "2026",
    "description": "傲慢的纽约美食评论家泰拉与固执的印度传统厨师比拉尔，在一场直播对决中被迫联手拯救一家即将倒闭的餐厅。"
  },
  {
    "title": "镇魂街第三季",
    "file": "movie-620.html",
    "cover": 20,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "国漫，守护灵，战斗，兄弟",
    "year": "2025",
    "description": "曹焱兵与北落师门派系决裂后，带着夏玲与曹玄亮踏上了寻找失落神树的危险旅程。"
  },
  {
    "title": "科妮莉亚",
    "file": "movie-621.html",
    "cover": 21,
    "region": "英国",
    "category": "喜剧动画",
    "tags": "身份错位, 庄园, 画像, 维多利亚",
    "year": "2021",
    "description": "维多利亚时代，贫穷女家庭教师科妮莉亚发现自己与庄园里一幅百年前贵妇画像长得一模一样，画中人在看她。"
  },
  {
    "title": "无火的冬天",
    "file": "movie-622.html",
    "cover": 22,
    "region": "韩国",
    "category": "剧情佳作",
    "tags": "全球停暖, 生存, 人性",
    "year": "2025",
    "description": "全球供暖系统突然停止，零下五十度的极寒中，一栋公寓楼成了最后的孤岛。"
  },
  {
    "title": "西游记之七十二变",
    "file": "movie-623.html",
    "cover": 23,
    "region": "中国",
    "category": "剧情佳作",
    "tags": "孙悟空, 前传, 学艺",
    "year": "2025",
    "description": "在菩提祖师的道场，一只叛逆的石猴面对神仙同学的霸凌，必须学会最难的七十二变才能保住学籍。"
  },
  {
    "title": "大汉天子2：汉武雄风",
    "file": "movie-624.html",
    "cover": 24,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "汉武帝，卫青霍去病，匈奴大战，帝王成长，朝堂博弈",
    "year": "2005",
    "description": "汉武帝刘彻亲政后，面对匈奴铁骑与窦氏残余势力，展开了一场关乎国运的生死赌局。"
  },
  {
    "title": "终身职位",
    "file": "movie-625.html",
    "cover": 25,
    "region": "美国",
    "category": "高清电影",
    "tags": "学术圈, 中年危机, 职场竞争, 黑色幽默, 高校",
    "year": "2008",
    "description": "一位温文尔雅的文学教授为了拿到终身教职，被迫卷入了一场充满谎言与欺骗的学术黑市。"
  },
  {
    "title": "小人物2",
    "file": "movie-626.html",
    "cover": 26,
    "region": "美国",
    "category": "欧美热播",
    "tags": "硬核动作，退休杀手，暴力美学",
    "year": "2025",
    "description": "隐居小镇的前杀手被迫重出江湖，这次他要对抗的不是黑帮，而是整个AI监控系统。"
  },
  {
    "title": "囧男窘事第三季",
    "file": "movie-627.html",
    "cover": 27,
    "region": "美国",
    "category": "爱情青春",
    "tags": "搞笑, 倒霉, 职场, 宅男, 黑色幽默",
    "year": "2019",
    "description": "史上最倒霉的程序员阿呆回归，这一季他连呼吸都能闯祸。"
  },
  {
    "title": "神是中学生",
    "file": "movie-628.html",
    "cover": 28,
    "region": "日本",
    "category": "高清电影",
    "tags": "日常奇幻, 中学生, 神明, 治愈, 搞笑",
    "year": "2024",
    "description": "一个普通的中学生某天突然被宇宙选中成为了新一代地球神明，她的第一个神迹是让明天的考试取消。"
  },
  {
    "title": "暗水深处",
    "file": "movie-629.html",
    "cover": 29,
    "region": "俄罗斯",
    "category": "动作犯罪",
    "tags": "水怪, 斯拉夫神话, 水下恐惧, 民俗, 克苏鲁",
    "year": "2021",
    "description": "地质勘探队在俄罗斯最深的淡水湖底发现了祭祀坑，却唤醒了沉睡千年的黑暗生物。"
  },
  {
    "title": "未来密码46",
    "file": "movie-630.html",
    "cover": 30,
    "region": "美国 / 德国",
    "category": "动作犯罪",
    "tags": "量子计算、预言、幸存者、乌托邦",
    "year": "2026",
    "description": "量子计算机“上帝46”计算出人类将在三年后灭绝，给出的解决方案只有一个字：“火”。"
  },
  {
    "title": "抓鬼天狗帮",
    "file": "movie-631.html",
    "cover": 31,
    "region": "日本",
    "category": "高清电影",
    "tags": "妖怪，除妖，友情，热血，低预算高创意",
    "year": "2023",
    "description": "一个只会三流除妖术的穷酸天狗，带着三个不中用的废柴徒弟，为了还房贷被迫营业抓鬼。"
  },
  {
    "title": "盛夏汁爱",
    "file": "movie-632.html",
    "cover": 32,
    "region": "泰国",
    "category": "精选视频",
    "tags": "夏日, 水果, 同性",
    "year": "2025",
    "description": "两个失意的男孩在山竹果园打工，一个负责采摘，一个负责酿造果汁，他们决定酿出一种代表“离别”的味道。"
  },
  {
    "title": "张保仔粤语",
    "file": "movie-633.html",
    "cover": 33,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "TVB, 海盗, 穿越, 张保仔, 时空恋",
    "year": "2015",
    "description": "香港女警穿越回清代，遇到了传奇海盗张保仔，在火枪与长矛的碰撞中，展开一段跨越时空的冒险与爱恋。"
  },
  {
    "title": "主妇胜！",
    "file": "movie-634.html",
    "cover": 34,
    "region": "韩国",
    "category": "精选视频",
    "tags": "全职主妇, 复仇联盟, 邻里互助, 爆笑反杀",
    "year": "2027",
    "description": "当一群被生活磨平棱角的家庭主妇发现社区被黑恶势力渗透，她们决定亲自出手。"
  },
  {
    "title": "贼婆翻身记",
    "file": "movie-635.html",
    "cover": 35,
    "region": "韩国",
    "category": "动作犯罪",
    "tags": "女骗子, 财阀复仇, 身份错位",
    "year": "2024",
    "description": "业界顶尖女骗子为了吞下百亿赃款，伪装成失忆的豪门儿媳，却发现这家人个个比她还能演。"
  },
  {
    "title": "海军罪案调查处第七季",
    "file": "movie-636.html",
    "cover": 36,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "军旅, 探案, 团队, 单元剧",
    "year": "2009",
    "description": "吉布斯团队遭遇最大危机：一名内部叛徒将他们的行动情报卖给了国际军火商。"
  },
  {
    "title": "监狱奇冤",
    "file": "movie-637.html",
    "cover": 37,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "监狱风云, 冤狱, 越狱复仇",
    "year": "1992",
    "description": "一名奉公守法的会计师被陷害入狱，在弱肉强食的监狱丛林中，他必须用智慧和拳头找到真凶。"
  },
  {
    "title": "晚的赞歌",
    "file": "movie-638.html",
    "cover": 38,
    "region": "法国",
    "category": "剧情佳作",
    "tags": "二战, 歌剧, 抵抗组织, 女性",
    "year": "2025",
    "description": "二战末期，一位失明的女高音歌唱家通过在纳粹宴会上演唱变调的歌剧来传递情报。"
  },
  {
    "title": "在你身边",
    "file": "movie-639.html",
    "cover": 39,
    "region": "中国台湾",
    "category": "精选视频",
    "tags": "临终关怀, 和解, 台味日常",
    "year": "2025",
    "description": "叛逆女儿成为临终关怀护理师，第一个客户竟是年轻时抛弃她的父亲。"
  },
  {
    "title": "伟大神秘马戏团",
    "file": "movie-640.html",
    "cover": 40,
    "region": "意大利",
    "category": "高清电影",
    "tags": "马戏团, 二战, 超能力, 隐藏身份",
    "year": "2025-2026",
    "description": "二战时期，欧洲最神秘的马戏团每到一个城市，那个城市就会发生离奇死亡事件。"
  },
  {
    "title": "黑侠",
    "file": "movie-641.html",
    "cover": 41,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "超级英雄、改造人、复仇、地下世界",
    "year": "2024",
    "description": "沉默寡言的图书管理员每到夜晚就化身暴力判官，追踪十年前导致他毁容的秘密实验。"
  },
  {
    "title": "名刀美女丸",
    "file": "movie-642.html",
    "cover": 42,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "刀剑拟人, 嗜血妖刀, 极致cult",
    "year": "2024",
    "description": "一代铸剑师之女死后，魂魄附身于名刀，引诱男人互相残杀。"
  },
  {
    "title": "乔治男孩",
    "file": "movie-643.html",
    "cover": 43,
    "region": "英国",
    "category": "爱情青春",
    "tags": "华丽摇滚, 性别认同, 80年代, 成名之路, 脆弱",
    "year": "2010",
    "description": "那个画着夸张眼影、雌雄同体的男孩，在用音乐征服世界之前，首先要在伦敦的冷漠中学会保护自己的脆弱。"
  },
  {
    "title": "心之所系",
    "file": "movie-644.html",
    "cover": 44,
    "region": "土耳其",
    "category": "精选视频",
    "tags": "先婚后爱, 文化冲突, 治愈, 伊斯坦布尔, 匠人精神",
    "year": "2024",
    "description": "为了继承父亲的瓷器工坊，富家千金必须和工坊里最沉默的学徒假结婚一年。"
  },
  {
    "title": "乐园记趣",
    "file": "movie-645.html",
    "cover": 45,
    "region": "意大利",
    "category": "剧情佳作",
    "tags": "游乐园，老年，忘年交，诗意，生命",
    "year": "2023",
    "description": "一个即将倒闭的老旧游乐园里，一位退休的机械师和患绝症的小女孩共同修复了一台能实现“愿望”的古董旋转木马。"
  },
  {
    "title": "银色之翼",
    "file": "movie-646.html",
    "cover": 46,
    "region": "俄罗斯",
    "category": "剧情佳作",
    "tags": "女飞行员，二战，苏联，空战",
    "year": "2025",
    "description": "二战中著名的苏联“暗夜女巫”飞行团最后一位幸存者，在晚年回忆她与一架银色战机的不解之缘。"
  },
  {
    "title": "秋天的童话",
    "file": "movie-647.html",
    "cover": 47,
    "region": "韩国",
    "category": "欧美热播",
    "tags": "落叶, 死亡, 书店",
    "year": "2025",
    "description": "一个只能在秋天存活24小时的“落叶精灵”，爱上了一个每天都在书店等死的老妇人。"
  },
  {
    "title": "灰色人",
    "file": "movie-648.html",
    "cover": 48,
    "region": "美国",
    "category": "高清电影",
    "tags": "特工，CIA，追杀，硬核动作",
    "year": "2024",
    "description": "代号“灰人”的顶级特工被前队友全球追杀，他唯一的武器是知道中情局所有肮脏秘密的大脑。"
  },
  {
    "title": "死亡真面目5",
    "file": "movie-649.html",
    "cover": 49,
    "region": "日本",
    "category": "精选视频",
    "tags": "面具仪式, 连环失踪, 旧宅, 心理分裂, 祭典诅咒",
    "year": "2025",
    "description": "第五部《死亡真面目》不再新增凶手，而是追问面具为何不断被替换，像是每张真面目都在替下一位幸存者偿还一段未完成的死亡账单。"
  },
  {
    "title": "暗房秘密",
    "file": "movie-650.html",
    "cover": 50,
    "region": "法国 / 比利时",
    "category": "剧情佳作",
    "tags": "灵异, 摄影, 古宅",
    "year": "2023",
    "description": "古董相机修理师收到一台二战时期的相机，每张底片冲洗出来后，都会多出一个不该存在于这个时代的人影。"
  },
  {
    "title": "雷朋三世之电脑细菌战",
    "file": "movie-651.html",
    "cover": 51,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "怪盗、黑客、生化武器、国际刑警、搞笑",
    "year": "2024",
    "description": "怪盗雷朋三世这次要偷的，是一种会通过电脑感染人类神经的超级病毒源代码。"
  },
  {
    "title": "二人三足",
    "file": "movie-652.html",
    "cover": 52,
    "region": "新加坡",
    "category": "高清电影",
    "tags": "残疾，父女，马拉松，治愈",
    "year": "2022",
    "description": "一个失去左腿的父亲，一个失去右腿的女儿，两人绑在一起学会了跑步。"
  },
  {
    "title": "肮脏的战争",
    "file": "movie-653.html",
    "cover": 53,
    "region": "美国 / 中东多国",
    "category": "精选视频",
    "tags": "黑色行动, 道德困境, 写实暴力, 反战",
    "year": "2025",
    "description": "一名美军无人机操作员在拉斯维加斯的空调房里，用游戏手柄执行真实空袭，直到发现目标里有自己的家人。"
  },
  {
    "title": "阿拉斯加大淘金第七季",
    "file": "movie-654.html",
    "cover": 54,
    "region": "美国",
    "category": "爱情青春",
    "tags": "淘金, 极地生存, 重型机械, 赌注巨大, 团队冲突",
    "year": "2025",
    "description": "黄金价格飙升至历史新高，六支淘金队在阿拉斯加最凶险的冻土带展开为期100天的疯狂掘金竞赛。"
  },
  {
    "title": "四二八粤语",
    "file": "movie-655.html",
    "cover": 55,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "语言消亡, 黑帮, 身份认同, 香港",
    "year": "2023",
    "description": "“428”是警方给一种即将失传的粤语次方言起的代号，而能说这种语言的最后三个人，分别是一个老差骨、一个黑帮遗孤和一个语言学家。"
  },
  {
    "title": "死者与其他人",
    "file": "movie-656.html",
    "cover": 56,
    "region": "巴西",
    "category": "喜剧动画",
    "tags": "拉美魔幻现实主义，亡靈节，村庄寓言",
    "year": "2025",
    "description": "每年亡灵节，偏远村庄都会迎来逝去的亲人，但今年，一个男人发现来的“亲友”里混进了陌生的东西。"
  },
  {
    "title": "心跳一线间",
    "file": "movie-657.html",
    "cover": 57,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "地震, 医生, 告白, 生死时速, 手术室",
    "year": "2016",
    "description": "大地震中被压在废墟下的她，通过手机向暗恋的医生做最后一次心跳告白。"
  },
  {
    "title": "巴赫曼先生和他的学生",
    "file": "movie-658.html",
    "cover": 58,
    "region": "德国",
    "category": "爱情青春",
    "tags": "教师, 移民后代, 另类教育, 阶层跨越, 真实事件改编",
    "year": "2024",
    "description": "德国最“不务正业”的老教师，从不按教案上课，却把班里14个不同国籍的问题学生全部送进了重点中学。"
  },
  {
    "title": "夏日月光",
    "file": "movie-659.html",
    "cover": 59,
    "region": "日本",
    "category": "爱情青春",
    "tags": "海边仲夏, 旧照回忆, 失约重逢, 青春悸动, 片尾告白",
    "year": "2014",
    "description": "一场原本只属于盛夏夜晚的偶遇，意外照亮了两个成年人早就被生活压暗的心事。"
  },
  {
    "title": "耻辱",
    "file": "movie-660.html",
    "cover": 60,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "文革，家庭秘密，救赎",
    "year": "2025",
    "description": "一张在文革时期被藏起来的老照片，在四十年后的家族聚会上意外出现，揭开了一个家庭最不愿面对的耻辱和伤痛。"
  },
  {
    "title": "换个活法",
    "file": "movie-661.html",
    "cover": 61,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "中年危机, 互换人生, 幽默, 公路片, 治愈",
    "year": "2024",
    "description": "两个高中死党，一个是绝望的失业程序员，一个是绝望的当红主播，绝望到约好一起死，结果没死成，互换了人生。"
  },
  {
    "title": "阿尔劳娜",
    "file": "movie-662.html",
    "cover": 62,
    "region": "德国",
    "category": "剧情佳作",
    "tags": "曼德拉草, 人造人, 表现主义, 女巫, 邪典",
    "year": "2025",
    "description": "一个不孕的科学家依照中世纪巫术，用杀人犯的精液和妓女的卵子培育出了活体曼德拉草。"
  },
  {
    "title": "看见你便想念你",
    "file": "movie-663.html",
    "cover": 63,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "时空交错, 初恋, 遗憾, 治愈",
    "year": "2024",
    "description": "咖啡馆老板娘有一项超能力：只要凝视一个人三秒，就能看到他一生中最想念的人的脸。"
  },
  {
    "title": "纽约寂寞男孩",
    "file": "movie-664.html",
    "cover": 64,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "纽约, 孤独, 摄影, 夜行, 成长",
    "year": "2023",
    "description": "他在纽约街头为陌生人拍照，替所有人留下光鲜瞬间，唯独不敢面对镜头里那个最寂寞的自己。"
  },
  {
    "title": "神犬松五郎",
    "file": "movie-665.html",
    "cover": 65,
    "region": "日本",
    "category": "爱情青春",
    "tags": "柴犬， 地震， 忠犬， 治愈， 真实事件改编",
    "year": "2024",
    "description": "2011年日本3.11地震后，一只柴犬独自穿越废墟两百公里，只为回到主人身边。"
  },
  {
    "title": "丧子疑云",
    "file": "movie-666.html",
    "cover": 66,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "家庭创伤,失踪谜案,记忆错位,心理悬疑,反转真相",
    "year": "2016",
    "description": "一个母亲坚信儿子并未死去，当所有证据都指向意外时，她却在旧相册里找到了第一条不该存在的线索。"
  },
  {
    "title": "出差十五夜2：梦想特辑",
    "file": "movie-667.html",
    "cover": 67,
    "region": "韩国",
    "category": "爱情青春",
    "tags": "团综, 游戏挑战, 即兴反应, 明星群像, 综艺修罗场, 轻喜剧",
    "year": "2023",
    "description": "一群怀揣不同梦想的艺人被临时拉进一间“出差会场”，在连环游戏和爆笑失误里，把真心话都抖了出来。"
  },
  {
    "title": "药命旅程",
    "file": "movie-668.html",
    "cover": 68,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "毒品, 公路追击, 黑吃黑, 反转, 生存",
    "year": "2025",
    "description": "一个走投无路的父亲被迫充当毒骡，却发现所运“药品”竟是生化武器原料。"
  },
  {
    "title": "青春之光",
    "file": "movie-669.html",
    "cover": 69,
    "region": "日本",
    "category": "欧美热播",
    "tags": "校园, 游泳部, 绝症, 纯爱催泪",
    "year": "2016",
    "description": "她是即将失明的游泳天才，他是为了赎罪而靠近她的不良少年，水下的世界是他们唯一的交集。"
  },
  {
    "title": "狩猎迷魂记",
    "file": "movie-670.html",
    "cover": 70,
    "region": "美国",
    "category": "欧美热播",
    "tags": "丛林追杀, 反转猎人, 女性复仇",
    "year": "2017",
    "description": "她醒来发现自己被当作猎物放进庄园，十二小时后，她成了唯一的猎人。"
  },
  {
    "title": "花之屋大电影",
    "file": "movie-671.html",
    "cover": 71,
    "region": "墨西哥",
    "category": "剧情佳作",
    "tags": "黑色幽默, 家族纷争, 葬礼",
    "year": "2024",
    "description": "豪门家族 patriarch 去世，三兄妹为争遗产竟把灵堂变成了荒诞秀场。"
  },
  {
    "title": "黑的教育",
    "file": "movie-672.html",
    "cover": 72,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "黑帮, 校园, 卧底",
    "year": "1995",
    "description": "黑帮大佬把独生子送进贵族学校，让他学习“如何被文明地剥削”。"
  },
  {
    "title": "圣诞访客",
    "file": "movie-673.html",
    "cover": 73,
    "region": "爱尔兰",
    "category": "喜剧动画",
    "tags": "圣诞, 治愈, 孤独, 温情",
    "year": "2024",
    "description": "每年圣诞夜，独居老人都能看到已故妻子的身影，直到今年，门铃响起，来者是一个浑身是伤的小女孩。"
  },
  {
    "title": "咸湿探戈",
    "file": "movie-674.html",
    "cover": 74,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "中年危机, 舞蹈, 情欲, 身份错位",
    "year": "2024",
    "description": "五十岁的寡妇为了排解寂寞报名探戈课，却发现自己的舞伴是当年暗恋过的、如今变性归来的高中同学。"
  },
  {
    "title": "高跟鞋阴谋",
    "file": "movie-675.html",
    "cover": 75,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "时尚圈, 连环杀人, 女性复仇, 高智商",
    "year": "2023",
    "description": "国际时装周后台，每死一个人，现场就会留下一只限量版红底高跟鞋，而凶手可能就藏在模特中间。"
  },
  {
    "title": "墙里的声音",
    "file": "movie-676.html",
    "cover": 76,
    "region": "美国",
    "category": "精选视频",
    "tags": "古宅，心理恐怖，遗产阴谋，听觉诡计",
    "year": "2023",
    "description": "搬进百年老宅的第一晚，她听到墙内传出自己明天的日记。"
  },
  {
    "title": "舞美人",
    "file": "movie-677.html",
    "cover": 77,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "舞蹈, 替身, 心理惊悚, 剧场",
    "year": "2024",
    "description": "一位默默无闻的舞蹈替身发现，她为之代役的女主角在舞台上“活”了过来，并试图吞噬她的身体。"
  },
  {
    "title": "巨型食人鱼",
    "file": "movie-678.html",
    "cover": 78,
    "region": "美国",
    "category": "高清电影",
    "tags": "变异生物, 大坝, 基因实验",
    "year": "2025",
    "description": "亚马逊流域惊现卡车大小的食人鱼，退役潜艇兵能否阻止鱼群逆流攻入城市？"
  },
  {
    "title": "古堡惊眸",
    "file": "movie-679.html",
    "cover": 79,
    "region": "美国 / 英国",
    "category": "欧美热播",
    "tags": "视觉诅咒, 古堡, 油画, 家族秘密",
    "year": "2026",
    "description": "一位失明的修复师被请去修复古堡中的家族肖像画，她“看见”了画中所有被抹去的人脸。"
  },
  {
    "title": "移民游戏",
    "file": "movie-680.html",
    "cover": 80,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "反乌托邦，生存游戏，阶级固化，移民",
    "year": "2026",
    "description": "为了拿到绿卡，移民们必须参与一场真人秀式的生死游戏，唯一的规则是：活下去，或者被遣返。"
  },
  {
    "title": "心碎的梦想",
    "file": "movie-681.html",
    "cover": 81,
    "region": "印度",
    "category": "精选视频",
    "tags": "宝莱坞, 励志, 底层, 音乐, 催泪",
    "year": "2023",
    "description": "孟买贫民窟的拾荒少年拥有天籁嗓音，却在选秀决赛前夜被毒哑。"
  },
  {
    "title": "生死十七天",
    "file": "movie-682.html",
    "cover": 82,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "矿难, 人性, 极限生存, 密室, 反腐",
    "year": "2025",
    "description": "矿难发生，12名矿工被困地下800米，地面救援却因层层推诿停滞了整整17天。"
  },
  {
    "title": "愿睡如梦",
    "file": "movie-683.html",
    "cover": 83,
    "region": "中国台湾",
    "category": "科幻悬疑",
    "tags": "植物人，梦境穿梭，未说出口的爱，执念，告别",
    "year": "2016",
    "description": "男友陷入植物人状态后，女主每晚能进入他的梦境，却发现他的梦里全是另一个陌生女孩。"
  },
  {
    "title": "放射性物质",
    "file": "movie-684.html",
    "cover": 84,
    "region": "英国",
    "category": "欧美热播",
    "tags": "科学家传记, 女性力量, 历史重演, 生命与毁灭",
    "year": "2025",
    "description": "居里夫人的故事被重述，但这一次，放射性物质本身成了拥有视角的叙述者。"
  },
  {
    "title": "大炮之街",
    "file": "movie-685.html",
    "cover": 85,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "蒸汽朋克, 反乌托邦, 极权主义, 大友克洋风, 手绘动画",
    "year": "2025",
    "description": "在一座由移动巨炮组成的城市里，小男孩的日常就是为父亲搬运炮弹，但他从未见过敌人的样子。"
  },
  {
    "title": "春泥溅花红",
    "file": "movie-686.html",
    "cover": 86,
    "region": "中国台湾",
    "category": "科幻悬疑",
    "tags": "歌仔戏, 歌女, 世家, 阶级, 悲剧",
    "year": "1970",
    "description": "歌仔戏花旦阿春被世家少爷追求，婚礼当天才发现少爷要娶的是她的替身。"
  },
  {
    "title": "贝比·鲁斯",
    "file": "movie-687.html",
    "cover": 87,
    "region": "美国",
    "category": "爱情青春",
    "tags": "棒球传奇, 逆境翻身, 励志",
    "year": "2028",
    "description": "从一个问题少年到棒球之神，贝比·鲁斯如何用球棒改变了一个时代的运动文化。"
  },
  {
    "title": "冰川时代2",
    "file": "movie-688.html",
    "cover": 88,
    "region": "美国",
    "category": "欧美热播",
    "tags": "动物, 融冰, 搞笑",
    "year": "2006",
    "description": "冰川即将融化，长毛象曼尼、树懒希德和剑齿虎迪亚戈必须带领动物们逃离即将变成汪洋的家园。"
  },
  {
    "title": "擒人擒心",
    "file": "movie-689.html",
    "cover": 89,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "反卧底, 情感博弈, 警匪, 伪装, 反转",
    "year": "2012",
    "description": "一个专门诱捕诈骗团伙的女警，奉命接近冷面骗子头目，却在一步步设局时发现自己先被对方读懂了心。"
  },
  {
    "title": "加拿大狙击手",
    "file": "movie-690.html",
    "cover": 90,
    "region": "加拿大",
    "category": "精选视频",
    "tags": "真实事件改编，最远射程，道德困境",
    "year": "2024",
    "description": "一名加拿大狙击手创下了3540米的世界纪录击杀，但他终生都在寻求死者家属的原谅。"
  },
  {
    "title": "人人皆舞者2：舞力全开",
    "file": "movie-691.html",
    "cover": 91,
    "region": "印度",
    "category": "欧美热播",
    "tags": "街舞、底层逆袭、社群力量、宝莱坞",
    "year": "2024",
    "description": "贫民窟的拾荒少年捡到一张街舞大赛传单，决定组建一支由清洁工、小贩和残疾老人构成的奇葩舞团。"
  },
  {
    "title": "这些年，我们一起追逐金钱",
    "file": "movie-692.html",
    "cover": 92,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "创业, 友情, 泡沫, 时代",
    "year": "2024",
    "description": "2015-2025，三个大学室友在互联网金融、炒鞋、直播带货的浪潮中，为了钱分分合合。"
  },
  {
    "title": "尘封迷情",
    "file": "movie-693.html",
    "cover": 93,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "民国虐恋，家族恩怨，失忆复仇，老上海风情",
    "year": "2002",
    "description": "舞女与军阀之子私奔遭陷害，十年后她带着仇人的女儿回来复仇。"
  },
  {
    "title": "英雄风云之五虎联盟",
    "file": "movie-694.html",
    "cover": 94,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "黑帮, 联盟, 五虎, 港产片",
    "year": "2025",
    "description": "香港五大黑帮被迫组成联盟对抗外部势力，但他们不知道坐在联盟主席位子上的人，是警方卧底。"
  },
  {
    "title": "陀枪师姐2021粤语",
    "file": "movie-695.html",
    "cover": 95,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "港剧经典重启, 女性力量, 粤语原声",
    "year": "2021",
    "description": "三元退隐多年后重出江湖，与新扎师妹搭档破获连环枪击案。"
  },
  {
    "title": "逃票俱乐部",
    "file": "movie-696.html",
    "cover": 96,
    "region": "意大利",
    "category": "欧美热播",
    "tags": "公共交通, 小人物喜剧, 社会讽刺, 意式幽默, 底层联盟",
    "year": "2015",
    "description": "米兰一群每天逃票的穷人组成秘密俱乐部，直到新市长宣布“逃票者一律切除小拇指”。"
  },
  {
    "title": "速度与激情3",
    "file": "movie-697.html",
    "cover": 97,
    "region": "美国",
    "category": "高清电影",
    "tags": "街头赛车, 东京漂移, 卧底, 宿敌联手, 引擎轰鸣",
    "year": "2026",
    "description": "为了查清哥哥的死因，一名卧底警察潜入东京地下漂移圈，却被迫与昔日宿敌联手。"
  },
  {
    "title": "锦绣前程",
    "file": "movie-698.html",
    "cover": 98,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "职场, 创业, 兄弟情, 喜剧",
    "year": "2024",
    "description": "三个失业的中年男人决定一起创业，开了一家专门帮人“体面离职”的公司。"
  },
  {
    "title": "快餐女人",
    "file": "movie-699.html",
    "cover": 99,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "餐饮创业, 女性群像, 职场, 速食文化",
    "year": "2024",
    "description": "三个被生活“炒鱿鱼”的女人，盘下一家濒临倒闭的快餐店改造成了深夜灵魂食堂。"
  },
  {
    "title": "奋斗粤语",
    "file": "movie-700.html",
    "cover": 100,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "港式情怀, 草根逆袭, 家族创业, 粤语原声",
    "year": "2020",
    "description": "三个来自深水埗的草根青年，靠着一辆报废货车和一口不标准的英语，在回归后的香港闯出物流帝国。"
  },
  {
    "title": "魅力的逃避",
    "file": "movie-701.html",
    "cover": 101,
    "region": "法国",
    "category": "喜剧动画",
    "tags": "法式浪漫, 中年逃逸, 自我寻找",
    "year": "2014",
    "description": "一对结婚二十年的夫妻同时出轨了同一个人，而他们选择用“一起私奔”来解决这场荒诞的三角关系。"
  },
  {
    "title": "墨乡情",
    "file": "movie-702.html",
    "cover": 102,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "非遗传承, 徽墨, 父子矛盾",
    "year": "2025",
    "description": "逃到深圳打工的制墨世家逆子，被父亲用一纸“脑瘤”假病历骗回深山，却发现墨厂真的要完了。"
  },
  {
    "title": "派对浪客诸葛孔明",
    "file": "movie-703.html",
    "cover": 103,
    "region": "日本",
    "category": "高清电影",
    "tags": "穿越, 三国, 夜店, DJ, 智谋",
    "year": "2025",
    "description": "诸葛亮在五丈原临死前被一块神秘芯片传送到2024年东京涩谷，成为地下电音俱乐部的军师。"
  },
  {
    "title": "兵临城下2010",
    "file": "movie-704.html",
    "cover": 104,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "解放战争, 攻城, 人性, 和谈",
    "year": "2010",
    "description": "1949年，一座北方孤城被解放军围困三个月，城内守军与百姓在“战”与“降”之间煎熬。"
  },
  {
    "title": "前程似锦的年轻女人",
    "file": "movie-705.html",
    "cover": 105,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "女性复仇，社会议题，反套路，觉醒",
    "year": "2020",
    "description": "曾是医学院翘楚的凯西，每到夜晚便游荡于夜店，假扮醉酒来揭露那些“好心”男性的真面目。"
  },
  {
    "title": "良心",
    "file": "movie-706.html",
    "cover": 106,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "医疗纠纷, 底层, 道德困境",
    "year": "2025",
    "description": "女儿急需天价心脏移植，父亲却发现唯一的救命钱是当年工伤私了的脏款。"
  },
  {
    "title": "魔方高手",
    "file": "movie-707.html",
    "cover": 107,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "魔方，自闭症，天才，父子",
    "year": "2025",
    "description": "一位患有自闭症的天才少年通过魔方打开了心门，却也在赛场上面临世俗的偏见。"
  },
  {
    "title": "犯罪记录",
    "file": "movie-708.html",
    "cover": 108,
    "region": "英国",
    "category": "剧情佳作",
    "tags": "陈年旧案，双雄对峙，警察腐败，抽丝剥茧",
    "year": "2022",
    "description": "一封匿名信重揭15年前的少女悬案，老警长的完美记录背后藏着血腥的秘密。"
  },
  {
    "title": "赫默尔",
    "file": "movie-709.html",
    "cover": 109,
    "region": "荷兰",
    "category": "动作犯罪",
    "tags": "女性凝视， 哲学， 开放关系",
    "year": "2025",
    "description": "一个游走在不同男人之间的女人，试图在肉欲中寻找灵魂的碎片。"
  },
  {
    "title": "黑祭司们",
    "file": "movie-710.html",
    "cover": 110,
    "region": "韩国",
    "category": "剧情佳作",
    "tags": "驱魔, 宗教, 犯罪心理, 邪教",
    "year": "2025",
    "description": "梵蒂冈秘密派来的驱魔师，与不信鬼神的犯罪心理学家搭档，去调查一桩看似是中邪实则是连环杀手的少女失踪案。"
  },
  {
    "title": "黑暗中的孩子们",
    "file": "movie-711.html",
    "cover": 111,
    "region": "泰国",
    "category": "科幻悬疑",
    "tags": "鬼娃，凶宅，母爱，诅咒",
    "year": "2018",
    "description": "新家总在半夜传来儿童的歌声，单亲妈妈发现壁橱里藏着三个死去的孩子。"
  },
  {
    "title": "阿比阿弟畅游鬼门关",
    "file": "movie-712.html",
    "cover": 112,
    "region": "美国",
    "category": "爱情青春",
    "tags": "摇滚，冥界，话痨",
    "year": "2026",
    "description": "史上最蠢摇滚二人组意外死亡后，必须在阎王殿组一支“死人乐队”打败地狱歌王才能还阳。"
  },
  {
    "title": "服装设计师",
    "file": "movie-713.html",
    "cover": 113,
    "region": "法国",
    "category": "高清电影",
    "tags": "高定时尚, 艺术执念, 女性成长, 巴黎美学",
    "year": "2024",
    "description": "巴黎一位籍籍无名的服装设计师获得为国际巨星定制礼服的机会，却发现自己必须用一生最大的秘密来交换。"
  },
  {
    "title": "倒带人生",
    "file": "movie-714.html",
    "cover": 114,
    "region": "英国",
    "category": "高清电影",
    "tags": "流浪汉, 回忆录, 倒叙, 底层生活, 社会问题",
    "year": "2009",
    "description": "一个温文尔雅的中产阶级作家，为一个满身暴力、偷窃成瘾的流浪汉撰写回忆录，却发现了自己人生中缺失的一块。"
  },
  {
    "title": "五个朋友3",
    "file": "movie-715.html",
    "cover": 115,
    "region": "美国",
    "category": "爱情青春",
    "tags": "老友重聚, 中年危机, 人生抉择",
    "year": "2024",
    "description": "五个大学毕业二十年的死党相约滑雪度假，却发现每个人都活成了自己最讨厌的样子。"
  },
  {
    "title": "俏佳人",
    "file": "movie-716.html",
    "cover": 116,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "丑女大翻身, 职场, 港式幽默, 化妆术",
    "year": "1999",
    "description": "丑小鸭女职员靠一张“画皮”成为办公室女神，不料那张脸是借来的。"
  },
  {
    "title": "阿尔塔米拉",
    "file": "movie-717.html",
    "cover": 117,
    "region": "西班牙",
    "category": "剧情佳作",
    "tags": "考古, 洞穴壁画, 偏见, 真相",
    "year": "2016",
    "description": "发现了史前洞穴壁画的贵族，被世人当作骗子，他花了毕生精力只为证明一万年前的原始人也有艺术。"
  },
  {
    "title": "山丘上的情人",
    "file": "movie-718.html",
    "cover": 118,
    "region": "英国",
    "category": "爱情青春",
    "tags": "威尔士，田园，书信情缘，寡妇，治愈系",
    "year": "1995",
    "description": "二战后的威尔士山丘，一个伦敦来的测量员，爱上了全村都在为她守寡的女人。"
  },
  {
    "title": "命案黑手",
    "file": "movie-719.html",
    "cover": 119,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "警匪、卧底、黑帮、反杀、暴力美学",
    "year": "1995",
    "description": "卧底警察在即将收网时被栽赃成杀人凶手，整个警队都在悬赏他的人头。"
  },
  {
    "title": "不能犯",
    "file": "movie-720.html",
    "cover": 120,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "超能力，意念杀人，法理困境，单元剧",
    "year": "2024",
    "description": "有一种犯罪叫“不能犯”——只想让对方死，就能让对方死，法律拿他没办法。"
  },
  {
    "title": "新流星蝴蝶剑",
    "file": "movie-721.html",
    "cover": 121,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "江湖恩怨，禁忌之恋，冷兵器打斗，卧底",
    "year": "2026",
    "description": "卧底杀手在一次任务中对目标一见钟情，却不知她正是自己失散多年的青梅竹马。"
  },
  {
    "title": "黑色大丽花",
    "file": "movie-722.html",
    "cover": 122,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "黑色电影，悬案，警探，好莱坞",
    "year": "2006",
    "description": "两名洛杉矶警探在调查“黑色大丽花”惨案时，陷入了一个涉及名利、性爱与腐败的巨大漩涡，甚至赔上了自己的性命。"
  },
  {
    "title": "特别难解之谜解答篇",
    "file": "movie-723.html",
    "cover": 123,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "密室，解密，侦探，反转，观众互动",
    "year": "2006",
    "description": "那个困扰观众一整季的“幽灵密室失踪案”，最终解答篇竟牵出了所有人意想不到的双重凶手。"
  },
  {
    "title": "登机门",
    "file": "movie-724.html",
    "cover": 124,
    "region": "法国 / 意大利",
    "category": "爱情青春",
    "tags": "黑色电影，情色，背叛",
    "year": "2028",
    "description": "一个专门骗富豪的情妇突然成了追杀目标，她必须赶在飞机起飞前，找出藏在她行李箱里的致命秘密。"
  },
  {
    "title": "老夫子之小水虎传奇",
    "file": "movie-725.html",
    "cover": 125,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "经典IP，环保，冒险，搞笑",
    "year": "2024",
    "description": "老夫子捡到一只会喷水的“小水虎”，却发现它是龙王派来淹没地球的兵器。"
  },
  {
    "title": "超神",
    "file": "movie-726.html",
    "cover": 126,
    "region": "美国",
    "category": "爱情青春",
    "tags": "反超级英雄, 伦理困境, 高维生物, 视觉炸裂",
    "year": "2026",
    "description": "当全世界唯一的超能力者决定去死，谁来阻止他？"
  },
  {
    "title": "无法相恋的两人",
    "file": "movie-727.html",
    "cover": 127,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "无性恋, 契约婚姻, 治愈, 社会议题",
    "year": "2023",
    "description": "一对“无法与任何人恋爱”的男女签订了契约婚姻，试图用虚假的关系对抗孤独的真实世界。"
  },
  {
    "title": "废柴兄弟4",
    "file": "movie-728.html",
    "cover": 128,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "搞笑，创业，北漂，友情，逆袭",
    "year": "2017",
    "description": "三个一事无成的废柴阴差阳错开了一家“失败者疗愈所”，专治各种人生不服。"
  },
  {
    "title": "回心转意",
    "file": "movie-729.html",
    "cover": 129,
    "region": "中国台湾",
    "category": "科幻悬疑",
    "tags": "穿越, 婚姻, 救赎, 时空",
    "year": "2025",
    "description": "离婚律师林静茹在签署离婚协议那一刻，意外穿越回十年之前，遇到了那个还没爱上自己的丈夫。"
  },
  {
    "title": "我在窗口遇见他",
    "file": "movie-730.html",
    "cover": 130,
    "region": "韩国",
    "category": "科幻悬疑",
    "tags": "穿越时空, 对视, 纯爱, 信号",
    "year": "2026",
    "description": "住在同一间公寓、相隔五年的两个人，每晚十点都能透过窗户看到对方。"
  },
  {
    "title": "史班奇将军",
    "file": "movie-731.html",
    "cover": 131,
    "region": "美国",
    "category": "欧美热播",
    "tags": "将领, 误打误撞, 军事荒诞, 战场策略, 个人崇拜, 反讽",
    "year": "2004",
    "description": "一个从未打过真正大战的二流军官，居然在一场全球关注的冲突中被包装成传奇将军，直到他自己也分不清真假。"
  },
  {
    "title": "国王的演讲",
    "file": "movie-732.html",
    "cover": 132,
    "region": "英国",
    "category": "科幻悬疑",
    "tags": "口吃治疗, 王室秘辛, 励志温情, 二战前夕",
    "year": "2010",
    "description": "乔治六世在语言治疗师的古怪治疗下，用颤抖的声音撑起了一个帝国的信心。"
  },
  {
    "title": "爱乱伴侣",
    "file": "movie-733.html",
    "cover": 133,
    "region": "韩国",
    "category": "高清电影",
    "tags": "交换伴侣, 情感实验, 都市",
    "year": "2021",
    "description": "两对中年夫妻为了拯救婚姻，决定进行一场大胆的“交换”实验。"
  },
  {
    "title": "弗里敦",
    "file": "movie-734.html",
    "cover": 134,
    "region": "尼日利亚 / 南非",
    "category": "爱情青春",
    "tags": "塞拉利昂, 埃博拉疫情, 母子羁绊",
    "year": "2025",
    "description": "埃博拉病毒暴发期间，一名护士带着染疫的儿子穿越封锁线，赶往唯一还在运转的治疗中心。"
  },
  {
    "title": "笑弹一箩筐",
    "file": "movie-735.html",
    "cover": 135,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "乌龙炸弹， 警匪闹剧， 无厘头",
    "year": "1996",
    "description": "拆弹专家在婚礼上接到警讯，却发现全城“炸弹”都是恶作剧，直到最后一颗是真的。"
  },
  {
    "title": "姻缘巧合",
    "file": "movie-736.html",
    "cover": 136,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "错位人生，盲盒约会，都市奇缘",
    "year": "2024",
    "description": "一份被调错的相亲档案，让职场女强人和佛系兽医被迫演了一出“完美情侣”。"
  },
  {
    "title": "初恋时代",
    "file": "movie-737.html",
    "cover": 137,
    "region": "韩国",
    "category": "精选视频",
    "tags": "穿越，中年危机，校园纯爱，平行时空",
    "year": "2025",
    "description": "一对即将离婚的中年夫妇，同时穿越回了1998年的高中母校，成了同桌，但他们都不认识现在的对方。"
  },
  {
    "title": "网虫日记",
    "file": "movie-738.html",
    "cover": 138,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "互联网, 群像戏, 黑色幽默",
    "year": "2022",
    "description": "2000年千禧前夕，五个网吧青年在论坛灌水和网络聊天室中，意外窥见了互联网浪潮的秘密。"
  },
  {
    "title": "阅后即焚",
    "file": "movie-739.html",
    "cover": 139,
    "region": "美国",
    "category": "爱情青春",
    "tags": "情报机构, 暗号记忆, 背叛循环, 冷战遗产",
    "year": "2025",
    "description": "一名CIA档案管理员发现，自己每天经手的绝密文件，全都是他曾经亲自编写的假情报。"
  },
  {
    "title": "十一罗汉",
    "file": "movie-740.html",
    "cover": 140,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "高智商犯罪、团队合作、拉斯维加斯、惊天骗局",
    "year": "2024",
    "description": "十一位身怀绝技的草根骗子，为了扳倒一位操控赌城的地下大佬，联手策划了一场前所未有的赌场金库洗劫计划。"
  },
  {
    "title": "无路可退",
    "file": "movie-741.html",
    "cover": 141,
    "region": "法国",
    "category": "高清电影",
    "tags": "飞车， 复仇， 黑色电影， 巴黎郊区， 绝境求生",
    "year": "2025",
    "description": "一名被陷害的快递员骑着电动摩托车穿梭在巴黎街头，他必须在黎明前洗清罪名，否则女儿将被撕票。"
  },
  {
    "title": "禁断动画9",
    "file": "movie-742.html",
    "cover": 142,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "都市传说, 网络怪谈, 录像带, 诅咒, J-Horror",
    "year": "2024",
    "description": "流传在暗网的第九部诅咒动画，据说看完的人都会在第七天被动画里的“怪物”修改记忆。"
  },
  {
    "title": "卡里古拉博士",
    "file": "movie-743.html",
    "cover": 143,
    "region": "德国",
    "category": "精选视频",
    "tags": "人工智能，伦理，心理操控",
    "year": "2025",
    "description": "一个能读取并修改人类记忆的AI诊疗仪，让富人长命百岁，也让穷人永世为奴。"
  },
  {
    "title": "来自大海的女人",
    "file": "movie-744.html",
    "cover": 144,
    "region": "韩国",
    "category": "欧美热播",
    "tags": "人鱼, 小镇秘密, 失忆, 禁忌之恋, 民俗",
    "year": "2025",
    "description": "一个浑身湿透、没有过去的女人出现在渔村，村民发现她可能是传说中带来灾厄的海妖。"
  },
  {
    "title": "为舞而生",
    "file": "movie-745.html",
    "cover": 145,
    "region": "韩国",
    "category": "高清电影",
    "tags": "舞蹈, 励志, 竞争, 梦想, 青春",
    "year": "2024",
    "description": "从未受过专业训练的保洁阿姨，报名参加了韩国最残酷的街舞选秀。"
  },
  {
    "title": "雁回时",
    "file": "movie-746.html",
    "cover": 146,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "女将军， 重生， 权谋， 虐恋， 家国",
    "year": "2025",
    "description": "守边十年的女将军回京述职，发现自己的战功全被冒领，连家人都在骗她。"
  },
  {
    "title": "无限复活",
    "file": "movie-747.html",
    "cover": 147,
    "region": "美国",
    "category": "爱情青春",
    "tags": "循环, 时间重置, 硬核动作, 烧脑, 反套路",
    "year": "2022",
    "description": "特工李维被困在执行任务失败的那天，每次死亡都会带着记忆重启，直到他完美通关。"
  },
  {
    "title": "亨利先生的秘密",
    "file": "movie-748.html",
    "cover": 148,
    "region": "英国",
    "category": "欧美热播",
    "tags": "作家, 秘密, 乡村, 回忆",
    "year": "2025",
    "description": "一位隐居的诺奖作家去世后，他的管家发现，他所有的书其实都是同一个人的故事。"
  },
  {
    "title": "今天我休息",
    "file": "movie-749.html",
    "cover": 149,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "单日叙事, 都市压力, 父女情, 治愈",
    "year": "2024",
    "description": "一个从不请假的单亲爸爸被迫休了一天假，却在试图陪伴女儿的过程中，把整个家折腾得鸡飞狗跳。"
  },
  {
    "title": "外星幻想曲",
    "file": "movie-750.html",
    "cover": 150,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "外星信号,星际合唱,双音密码,地下音乐节,和平试验",
    "year": "2026",
    "description": "当外星舰队只带来一段未完成旋律时，人类不得不把求生宣言改写成一场跨星的合唱比赛。"
  },
  {
    "title": "一个父亲的寻子之路",
    "file": "movie-751.html",
    "cover": 1,
    "region": "土耳其",
    "category": "剧情佳作",
    "tags": "父爱, 公路, 寻子, 社会底层, 催泪",
    "year": "2022",
    "description": "贫穷的工地工人为了找到被拐卖的儿子，骑着一辆破摩托穿越三个国家，途中救下另一个被遗弃的女孩。"
  },
  {
    "title": "幕布背后",
    "file": "movie-752.html",
    "cover": 2,
    "region": "英国",
    "category": "喜剧动画",
    "tags": "剧场, 复仇, 心理博弈, 莎士比亚, 独角戏",
    "year": "2024",
    "description": "一场话剧演出中，女主角突然在台上改词，试图向台下坐着的仇人当众“审判”。"
  },
  {
    "title": "杰克与豆茎：从前从前以后",
    "file": "movie-753.html",
    "cover": 3,
    "region": "英国",
    "category": "喜剧动画",
    "tags": "童话改编, 中年危机, 反英雄",
    "year": "2024",
    "description": "童话里的杰克已经是个发福的超市理货员，当年偷来的竖琴如今害得他家破人亡，他必须爬上云端还回去。"
  },
  {
    "title": "荒神",
    "file": "movie-754.html",
    "cover": 4,
    "region": "日本",
    "category": "爱情青春",
    "tags": "古代神话, 弑神, 公主与野兽, 血脉觉醒",
    "year": "2024",
    "description": "最后一个猎神族的少女，在一次灭族惨案后发现自己要猎杀的神，竟是抚养她长大的哑巴怪物。"
  },
  {
    "title": "襄阳萌物语",
    "file": "movie-755.html",
    "cover": 5,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "三国, 萌化, 穿越",
    "year": "2024",
    "description": "一个中国高中生穿越到三国时期的襄阳，发现所有名将都变成了超可爱的猫娘。"
  },
  {
    "title": "金榜英雄",
    "file": "movie-756.html",
    "cover": 6,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "港产片, 卧底, 黑帮, 学渣逆袭",
    "year": "2026",
    "description": "一个只会打架的古惑仔被警方选中卧底高考考场，因为他要保护的天才考生是黑帮老大的儿子。"
  },
  {
    "title": "锁不住的基情",
    "file": "movie-757.html",
    "cover": 7,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "男男情谊, 误会连环, 都市合租, 黑色幽默, 情感失控",
    "year": "2012",
    "description": "两个性格天差地别的合租室友被一场乌龙绯闻推上风口浪尖，越想解释越像有事，最后连他们自己都开始怀疑彼此的关系。"
  },
  {
    "title": "大草地",
    "file": "movie-758.html",
    "cover": 8,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "长征, 少年, 荒野求生, 信念",
    "year": "2023",
    "description": "1935年，三名掉队的红军小战士必须穿越百里无人草地，用生命守护一面残破的军旗。"
  },
  {
    "title": "自杀突击队：惨痛代价",
    "file": "movie-759.html",
    "cover": 9,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "反英雄, 残酷, 牺牲, 团队作战, 绝境",
    "year": "2026",
    "description": "这一次，政府给队员们植入了“死亡倒计时”芯片，任务失败全员必死。"
  },
  {
    "title": "道具师",
    "file": "movie-760.html",
    "cover": 10,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "片场, 凶器, 诅咒, 戏中戏",
    "year": "2024",
    "description": "恐怖片片场，道具师制作的所有凶器，在戏里戏外，都成了真正的杀人凶器。"
  },
  {
    "title": "太空堡垒卡拉狄加：利刃",
    "file": "movie-761.html",
    "cover": 11,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "太空歌剧, AI, 人性, 幸存者",
    "year": "2007",
    "description": "在赛昂人灭绝人类的战争后期，精英战舰“利刃”号舰长接到一个自毁式的秘密任务。"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 吹响悠风号 史蒂文斯小姐 破千者之天下公敌 火王之破晓之战 纳粹特务 八番坑口的新娘 鬼挡路5 汽车先生和圣殿骑士团 极品老妈第二季 变种毒蝎 日本的西多妮 错会半生 见鬼 制裁者：赃物清洁 鸥鸟落亡于海港 灵异生死线 审判日－尤斯基兴枪手 爱的两极 你真的太棒了 月殿嫦娥",
    "file": "movie-762.html",
    "cover": 12,
    "region": "根据片名判断",
    "category": "喜剧动画",
    "tags": "根据片名判断",
    "year": "根据片名判断",
    "description": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）"
  },
  {
    "title": "泰勒丝：美国小姐",
    "file": "movie-763.html",
    "cover": 13,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "泰勒·斯威夫特，创作幕后，成长，重夺主权",
    "year": "2023",
    "description": "从乡村公主到流行女王，纪录片追踪泰勒·斯威夫特六年间如何被舆论摧毁又靠音乐重生。"
  },
  {
    "title": "心知不宣",
    "file": "movie-764.html",
    "cover": 14,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "留守儿童, 心理创伤, 默片手法",
    "year": "2025",
    "description": "山村留守姐弟发现父母“外出务工”的真相藏在阁楼的骨灰盒里，却选择对彼此保持沉默。"
  },
  {
    "title": "全民星攻略",
    "file": "movie-765.html",
    "cover": 15,
    "region": "中国台湾",
    "category": "动作犯罪",
    "tags": "综艺陷阱，记忆直播，隐私贩卖，集体审判",
    "year": "2024",
    "description": "一档收视冠军的益智节目突然改版，参赛者不再回答知识题，而是被直播挖掘出自己最想删除的人生秘密。"
  },
  {
    "title": "我喜欢的妹妹但不是妹妹",
    "file": "movie-766.html",
    "cover": 16,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "伪骨科, 轻小说改, 校园, 误会系",
    "year": "2023",
    "description": "哥哥爱上了邻居妹妹，表白后却发现她竟是父亲再婚带来的义妹，且毫无血缘关系。"
  },
  {
    "title": "经山历海",
    "file": "movie-767.html",
    "cover": 17,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "乡村振兴, 中年创业, 山海情",
    "year": "2024",
    "description": "三个遭遇中年危机的老同学回到破败的海边故乡，开民宿、斗村霸、谈夕阳恋，找回人生的第二个春天。"
  },
  {
    "title": "马利和我",
    "file": "movie-768.html",
    "cover": 18,
    "region": "美国",
    "category": "精选视频",
    "tags": "狗狗, 中年危机, 领养",
    "year": "2025",
    "description": "一对决定不生孩子的丁克夫妻领养了一只被遗弃的老狗，却在这条狗身上学会了如何做一个“刚刚好的父母”。"
  },
  {
    "title": "弗朗西斯去参加比赛",
    "file": "movie-769.html",
    "cover": 19,
    "region": "英国",
    "category": "爱情青春",
    "tags": "公路电影, 智力障碍, 橄榄球, 治愈系",
    "year": "2025",
    "description": "轻度智力障碍的男孩为了给去世的爷爷买一块奖牌，独自踏上了去往伦敦马拉松的冒险之路。"
  },
  {
    "title": "午夜微博",
    "file": "movie-770.html",
    "cover": 20,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "都市传说, 社交媒体, 诅咒, 直播",
    "year": "2024",
    "description": "深夜收到一条来自“已故博主”的私信，点开后你的死亡将被全网直播。"
  },
  {
    "title": "月球奇幻旅",
    "file": "movie-771.html",
    "cover": 21,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "月球基地, 少年, 成长, 幽默",
    "year": "2023",
    "description": "四名叛逆少年在月球殖民地意外激活了一个远古外星信号，整个基地陷入混乱。"
  },
  {
    "title": "小偷家伙, 小偷骗子",
    "file": "movie-772.html",
    "cover": 22,
    "region": "韩国",
    "category": "科幻悬疑",
    "tags": "盗窃世家, 身世之谜, 复仇",
    "year": "2017",
    "description": "以盗窃为生的父子，二十年后发现，他们偷过的最后一家，正是母亲被冤枉的案发现场。"
  },
  {
    "title": "尤利",
    "file": "movie-773.html",
    "cover": 23,
    "region": "法国 / 比利时",
    "category": "剧情佳作",
    "tags": "独角兽, 少女, 阿尔卑斯山, 诗意, 成长",
    "year": "2024",
    "description": "一个沉默寡言的阿尔卑斯山少女，声称自己遇见了一匹白色的独角兽，而整个村庄都认为她在说谎。"
  },
  {
    "title": "铁血警魂",
    "file": "movie-774.html",
    "cover": 24,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "反黑行动, 基层警察, 卧底追查, 城市治安, 师徒传承, 正邪对峙",
    "year": "1998",
    "description": "一名从边远县城调来的刑警队长，带着一身旧伤和一腔硬气，在城市深处追查一宗牵出多年的黑网案。"
  },
  {
    "title": "边野之火",
    "file": "movie-775.html",
    "cover": 25,
    "region": "韩国",
    "category": "剧情佳作",
    "tags": "黑色电影, 边境, 复仇",
    "year": "2023",
    "description": "在朝韩非军事区附近，一个被退役的边防警察目睹了一起离奇火灾，他怀疑纵火犯是一年前他亲手放走的脱北者。"
  },
  {
    "title": "甜蜜暴击",
    "file": "movie-776.html",
    "cover": 26,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "电竞, 甜宠, 姐弟恋, 热血",
    "year": "2024",
    "description": "落魄的电竞天才少年，遇上了退役的传奇女选手，两人组队杀回职业联赛。"
  },
  {
    "title": "超能太监",
    "file": "movie-777.html",
    "cover": 27,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "明朝, 东厂, 超能力, 逆袭, 无厘头",
    "year": "2016",
    "description": "一个被贬入浣衣局的太监意外获得超能力，却发现自己要对抗的竟是穿越时空而来的外星太监。"
  },
  {
    "title": "外星人狙击战",
    "file": "movie-778.html",
    "cover": 28,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "狙击手, 城市巷战, 外星入侵",
    "year": "2026",
    "description": "外星大军降临纽约，一位退役狙击手发现，它们的弱点不在正面战场，而在万里之外狙击镜中的一个像素点。"
  },
  {
    "title": "本色英雄",
    "file": "movie-779.html",
    "cover": 29,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "反英雄, 暴力美学, 黑帮, 救赎",
    "year": "2022",
    "description": "一名杀手在执行最后一次任务时发现目标是自己失散多年的弟弟。"
  },
  {
    "title": "女人的日历",
    "file": "movie-780.html",
    "cover": 30,
    "region": "韩国",
    "category": "精选视频",
    "tags": "穿越时空， 女性群像， 催泪",
    "year": "2021",
    "description": "女孩发现一本母亲留下的旧日历，每撕下一页，就能回到过去某一天，改变妈妈的人生。"
  },
  {
    "title": "妙计合家欢",
    "file": "movie-781.html",
    "cover": 31,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "春节, 妙计, 亲情, 团圆, 爆笑",
    "year": "2023",
    "description": "一个不靠谱的爸爸为了挽回离家出走的妻子，联合三个熊孩子上演了一出啼笑皆非的“挽留大计”。"
  },
  {
    "title": "中南海保镖",
    "file": "movie-782.html",
    "cover": 32,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "保镖，枪战，正装，铁血柔情",
    "year": "1994",
    "description": "代号001的顶级保镖奉命保护一位富商女友，子弹可以挡，但富家女的秋波难防。"
  },
  {
    "title": "美国恐怖故事第二季",
    "file": "movie-783.html",
    "cover": 33,
    "region": "美国",
    "category": "精选视频",
    "tags": "疯人院， 外星人， 纳粹",
    "year": "2012",
    "description": "1960年代一所精神病院，病人和医生各自隐藏秘密，而院中的“主宰者”可能根本不是人类。"
  },
  {
    "title": "雷巷",
    "file": "movie-784.html",
    "cover": 34,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "九龙城寨, 警匪, 宿命, 暴雨夜",
    "year": "2024",
    "description": "暴雨夜，九龙城寨最黑暗的“雷巷”里，四个身份不明的人相遇，每个人的目标都是杀人。"
  },
  {
    "title": "窃贼、妻子及皮划艇",
    "file": "movie-785.html",
    "cover": 35,
    "region": "英国",
    "category": "动作犯罪",
    "tags": "真实改编, 奇葩案件, 英式幽默",
    "year": "2025",
    "description": "男子伪造自己划皮划艇出海溺亡，骗保后躲在妻子家的阁楼里三年，直到皮划艇被冲上海岸。"
  },
  {
    "title": "莉可丽丝",
    "file": "movie-786.html",
    "cover": 36,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "少女特工, 咖啡厅, 反乌托邦, 枪战",
    "year": "2022",
    "description": "身穿洛丽塔裙的顶尖特工们，表面经营咖啡厅，暗中维护东京和平。"
  },
  {
    "title": "混蛋2013",
    "file": "movie-787.html",
    "cover": 37,
    "region": "中国台湾",
    "category": "动作犯罪",
    "tags": "黑帮, 荒诞, 黑色幽默, 小混混",
    "year": "2013",
    "description": "一个史上最怂的黑帮小弟，阴差阳错干掉了老大，然后被迫冒充大哥接管地盘。"
  },
  {
    "title": "耶稣音乐",
    "file": "movie-788.html",
    "cover": 38,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "福音音乐, 摇滚, 信仰, 音乐节",
    "year": "2023",
    "description": "当摇滚乐遇上福音，一个嬉皮士青年如何用吉他“偷”来了史上最狂野的教堂复兴。"
  },
  {
    "title": "夏日之书2024",
    "file": "movie-789.html",
    "cover": 39,
    "region": "瑞典",
    "category": "欧美热播",
    "tags": "亲情, 北欧, 治愈, 散文诗",
    "year": "2024",
    "description": "患上阿尔茨海默症的奶奶，用一本日记将孙女骗回孤岛共度最后一个夏天。"
  },
  {
    "title": "纳士维之歌",
    "file": "movie-790.html",
    "cover": 40,
    "region": "美国",
    "category": "欧美热播",
    "tags": "乡村音乐, 家族恩怨, 追梦",
    "year": "2023",
    "description": "纳什维尔的破败酒吧里，一个聋哑女孩用脚打出的节拍，意外揭开了乡村音乐黄金时代的谋杀案。"
  },
  {
    "title": "怪兽",
    "file": "movie-791.html",
    "cover": 41,
    "region": "日本",
    "category": "精选视频",
    "tags": "校园霸凌，师生关系，多视角，罗生门，是枝裕和",
    "year": "2025",
    "description": "单亲妈妈发现儿子行为诡异，控诉老师暴力管教，但随着多方视角展开，真正的“怪兽”似乎另有其人。"
  },
  {
    "title": "叶卡捷琳娜大帝",
    "file": "movie-792.html",
    "cover": 42,
    "region": "俄罗斯",
    "category": "喜剧动画",
    "tags": "宫廷权谋、女性力量、政治博弈、史诗感",
    "year": "2025",
    "description": "一位德意志小公主如何在政治联姻的冰冷泥潭中，亲手将丈夫推下王座，最终成为俄罗斯唯一的女大帝。"
  },
  {
    "title": "悠悠式",
    "file": "movie-793.html",
    "cover": 43,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "萌系，日常，友情，治愈，轻松",
    "year": "2024",
    "description": "三个性格迥异的女生在学校的“情报处理部”里，整天不务正业，用手机和电脑探索着世界的无用奥秘。"
  },
  {
    "title": "飞天万能车",
    "file": "movie-794.html",
    "cover": 44,
    "region": "英国",
    "category": "科幻悬疑",
    "tags": "经典翻拍, 发明家, 合家欢",
    "year": "1968",
    "description": "疯狂发明家造出一辆能飞会游泳的万能车，带着全家人参加横跨欧洲的荒唐赛车比赛。"
  },
  {
    "title": "大鸦",
    "file": "movie-795.html",
    "cover": 45,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "日式奇幻, 神明少年, 废土美学",
    "year": "2026",
    "description": "最后一个人类少年与一只会说话的巨大乌鸦结伴，在一片没有重力的废墟日本上空，寻找最后的水源。"
  },
  {
    "title": "赤子情",
    "file": "movie-796.html",
    "cover": 46,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "棒球，留守儿童，体育教育，真实改编，少年",
    "year": "2024",
    "description": "前国手退役后回到大凉山，用一根捡来的棒球棍，组建起一支由孤儿和留守儿童组成的棒球队。"
  },
  {
    "title": "绵绣人生",
    "file": "movie-797.html",
    "cover": 47,
    "region": "香港",
    "category": "动作犯罪",
    "tags": "亲情, 市井, 人生百态, 催泪",
    "year": "2009",
    "description": "一架电梯困住五个人，每人讲述自己人生中最遗憾的一天，发现五段故事竟能拼成一整个人生。"
  },
  {
    "title": "生命的证据",
    "file": "movie-798.html",
    "cover": 48,
    "region": "美国",
    "category": "精选视频",
    "tags": "器官捐献, 医患关系, 伦理困境, 催泪, 真实事件改编",
    "year": "2024",
    "description": "脑死亡少年的心脏即将拯救五条生命，母亲却在最后一刻反悔，要求见捐赠者家属一面。"
  },
  {
    "title": "救女心切",
    "file": "movie-799.html",
    "cover": 49,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "拐卖, 跨境追凶, 父亲",
    "year": "2018",
    "description": "女儿失踪三年后，懦弱的地理老师自学炼金术，用“银镜反应”标记了整个东南亚人贩网络。"
  },
  {
    "title": "她的马拉松",
    "file": "movie-800.html",
    "cover": 50,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "跑步成长, 自我疗愈, 城市长跑, 体型焦虑, 轻松励志",
    "year": "2019",
    "description": "她报名参加马拉松时，没人相信她能跑完全程，可真正需要跨越的从来不是终点线，而是她对自己的否定。"
  },
  {
    "title": "谷仓之物",
    "file": "movie-801.html",
    "cover": 51,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "谷仓,地下通道,稻谷记忆,村庄秘密,丰收诅咒,群像悬疑,乡村生态",
    "year": "2020",
    "description": "谷仓发出的低鸣从未停止，若不是追随失踪者的脚步，小娟不会知道谷粒里藏着镇上最古老的忏悔与交易。"
  },
  {
    "title": "月光光新慌慌：万圣杀",
    "file": "movie-802.html",
    "cover": 52,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "迈克·迈尔斯、杀戮、万圣节、续集、小镇噩梦",
    "year": "2027",
    "description": "哈登菲尔德小镇陷入疯狂，正义的围剿演变成血腥狂欢，恶魔不止一个。"
  },
  {
    "title": "星际救援",
    "file": "movie-803.html",
    "cover": 53,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "太空, 救援, 空间站, 硬科幻, 牺牲",
    "year": "2026",
    "description": "国际空间站遭碎片袭击，六名宇航员被困，地球上要在一周内发射救援飞船，但只能救三人。"
  },
  {
    "title": "第七层楼的诡异",
    "file": "movie-804.html",
    "cover": 54,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "老楼, 第七层, 失踪谜团, 心理压迫, 诡异传闻",
    "year": "2023",
    "description": "一栋被封了多年的老公寓里，所有住户都说没有第七层，可新搬来的女孩却在电梯里一次次按到不存在的楼层。"
  },
  {
    "title": "征人怨妇",
    "file": "movie-805.html",
    "cover": 55,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "古代, 边塞, 书信, 女性视角",
    "year": "2027",
    "description": "唐朝边塞，三个独守二十年的女人，发现彼此丈夫寄回的家书，竟是同一人代笔。"
  },
  {
    "title": "猪头晚餐",
    "file": "movie-806.html",
    "cover": 56,
    "region": "意大利",
    "category": "科幻悬疑",
    "tags": "黑手党, 米其林, 绝命厨师, 讽刺",
    "year": "2025",
    "description": "一个被迫为黑手党做断头饭的米其林厨师，在晚餐里下了能让全员招供的“诚实药”。"
  },
  {
    "title": "播种者",
    "file": "movie-807.html",
    "cover": 57,
    "region": "法国 / 比利时",
    "category": "动作犯罪",
    "tags": "一战, 女性与孩子, 荒诞任务, 人性实验",
    "year": "2019",
    "description": "一战尾声，一个法国偏远村庄的女人被军方要求怀孕，以补充枯竭的人口。"
  },
  {
    "title": "黑暗之家",
    "file": "movie-808.html",
    "cover": 58,
    "region": "韩国",
    "category": "高清电影",
    "tags": "凶宅、直播、诅咒、民俗",
    "year": "2024",
    "description": "网红主播进入韩国最凶的“黑暗之家”直播，发现诅咒并非来自鬼魂，而是来自活人。"
  },
  {
    "title": "你瞧，网络世界的幻想",
    "file": "movie-809.html",
    "cover": 59,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "元宇宙， 数字生命， 哲学， 预言",
    "year": "2022",
    "description": "从电子宠物到元宇宙，这部作品用荒诞的叙事预言了未来50年，人类将与AI共存、相爱、甚至互相吞噬的未来。"
  },
  {
    "title": "足下使命",
    "file": "movie-810.html",
    "cover": 60,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "足球, 盲人, 励志, 真实改编",
    "year": "2024",
    "description": "盲人按摩师组建了一支盲人足球队，他们看不见球门，却“听”得见对手和胜利的方向。"
  },
  {
    "title": "天使的声音",
    "file": "movie-811.html",
    "cover": 61,
    "region": "英国 / 法国",
    "category": "动作犯罪",
    "tags": "古典乐，音乐神童，救赎，治愈",
    "year": "2010",
    "description": "一个拥有绝对音感却患有严重自闭症的天才少年，只能用破碎的音符与世界对话。"
  },
  {
    "title": "跑马地的月光",
    "file": "movie-812.html",
    "cover": 62,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "港风、怀旧、美食",
    "year": "2024",
    "description": "跑马地一家即将结业的糖水铺里，深夜光顾的陌生男女通过一碗芝麻糊交换了彼此不敢说出口的秘密。"
  },
  {
    "title": "芭蕾",
    "file": "movie-813.html",
    "cover": 63,
    "region": "俄罗斯",
    "category": "喜剧动画",
    "tags": "舞团竞争, 身体极限, 师徒关系, 舞台创伤, 破茧重生",
    "year": "2016",
    "description": "一个被伤病逼退的首席舞者，在即将被舞台遗忘之前，必须决定是继续守住完美，还是接受自己已经改变的身体。"
  },
  {
    "title": "易碎人生",
    "file": "movie-814.html",
    "cover": 64,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "中年危机，玻璃骨，荒诞，人生重启",
    "year": "2024",
    "description": "患“玻璃骨”的废柴中年意外发现，自己每一次骨折都能换来巨额保险金，他开始策划完美的“破碎”。"
  },
  {
    "title": "关人七事国语",
    "file": "movie-815.html",
    "cover": 65,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "密室, 心理博弈, 社会隐喻",
    "year": "2023",
    "description": "七名被困在废弃仓库的陌生人，必须轮流交代与自己相关的一件“缺德事”才能开门。"
  },
  {
    "title": "狼心",
    "file": "movie-816.html",
    "cover": 66,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "刑警，人狼，连环案，基因，变异",
    "year": "2024",
    "description": "刑警队长在追查连环杀人案时发现，所有受害者的心脏都被精准挖走，而凶手留下的唯一线索是狼的爪痕。"
  },
  {
    "title": "天罗地网",
    "file": "movie-817.html",
    "cover": 67,
    "region": "中国",
    "category": "动作犯罪",
    "tags": "连环杀人, 高智商犯罪, 猫鼠游戏, 反转, 烧脑",
    "year": "2028",
    "description": "一个从不留痕迹的连环杀手，一个即将被撤职的老刑警，两人在被困的孤岛上展开终极猫鼠游戏。"
  },
  {
    "title": "浪子降魔",
    "file": "movie-818.html",
    "cover": 68,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "降魔，浪子，前世今生，剑侠，宿命",
    "year": "2026",
    "description": "一个吃喝嫖赌的浪子被雷劈后，发现自己前世是降魔宗师，而他的酒肉兄弟全是妖魔。"
  },
  {
    "title": "小村大道",
    "file": "movie-819.html",
    "cover": 69,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "扶贫，修路，基层干部，群像戏，励志",
    "year": "2006",
    "description": "贫困村村支书为修一条出山路，与天斗、与地斗、与人斗，一干就是二十年。"
  },
  {
    "title": "哥哥太爱我了怎么办",
    "file": "movie-820.html",
    "cover": 70,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "兄妹同居、病娇哥哥、职场女主、爆笑修罗场",
    "year": "2024",
    "description": "搬回老家的上班族发现，没有血缘关系的哥哥已经为她建了一整面“妹妹观察笔记”墙。"
  },
  {
    "title": "让开，别改我男主！",
    "file": "movie-821.html",
    "cover": 71,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "穿书, 系统, 反套路, 爆笑, 甜宠",
    "year": "2024",
    "description": "暴躁女编剧穿进自己写的虐文，怒改剧情，逼着残疾男主做起了仰卧起坐。"
  },
  {
    "title": "心字已成灰",
    "file": "movie-822.html",
    "cover": 72,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "旧约、退婚、家国、误会、守望",
    "year": "2025",
    "description": "一枚被烧焦的旧信物，让两个本该相守的人在权势、战乱和误解中越走越远，直到余生只剩沉默。"
  },
  {
    "title": "石头会唱歌",
    "file": "movie-823.html",
    "cover": 73,
    "region": "中国",
    "category": "喜剧动画",
    "tags": "自闭症， 音乐治疗， 海岛",
    "year": "2022",
    "description": "失语的自闭症少年在即将拆迁的海岛上，用敲击石头发出的音阶，唤醒了整座岛的记忆。"
  },
  {
    "title": "苍穹浩瀚第二季",
    "file": "movie-824.html",
    "cover": 74,
    "region": "美国",
    "category": "爱情青春",
    "tags": "太空歌剧, 政治博弈, 硬核科幻, 原分子病毒",
    "year": "2025",
    "description": "原分子病毒失控吞噬金星，星际战争一触即发，一艘流浪飞船藏着最后真相。"
  },
  {
    "title": "动画片",
    "file": "movie-825.html",
    "cover": 75,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "元电影, 梦想, 二维手绘, 治愈",
    "year": "2025",
    "description": "一个被时代抛弃的二维动画师，发现自己笔下未完成的主角拥有了意识，并请求他把自己画进“真正的电影”里。"
  },
  {
    "title": "流浪玩偶",
    "file": "movie-826.html",
    "cover": 76,
    "region": "日本",
    "category": "欧美热播",
    "tags": "人偶、自我意识、废土、寻找主人、治愈",
    "year": "2023",
    "description": "被主人丢弃的人偶少女在废土中流浪，她以为自己在寻找主人，其实是在找回“心”。"
  },
  {
    "title": "山丘盖比",
    "file": "movie-827.html",
    "cover": 77,
    "region": "英国",
    "category": "喜剧动画",
    "tags": "神秘木偶，家族秘密，战争创伤，英格兰乡村",
    "year": "2026",
    "description": "一座百年庄园的阁楼里，一个叫做“盖比”的山丘木偶，每晚都会对主人说出一句未来的坏话。"
  },
  {
    "title": "精子",
    "file": "movie-828.html",
    "cover": 78,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "拟人化， 冒险， 身体内部， 成人幽默， 精子",
    "year": "2024",
    "description": "拟人化的精子“小威”展开一场生死时速的体内大冒险，目标是那颗神秘的卵子。"
  },
  {
    "title": "白人女孩",
    "file": "movie-829.html",
    "cover": 79,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "夏日失控, 身份误判, 海岸小镇, 目击证词, 危险成长",
    "year": "2016",
    "description": "一个被卷入海边派对失踪案的女孩，在所有人都认定她“只是路过”时，发现真正被审判的其实是她的阶层和出身。"
  },
  {
    "title": "创业时代",
    "file": "movie-830.html",
    "cover": 80,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "互联网创业, 移动互联网, 资本博弈, 商战残酷, 理想主义",
    "year": "2018",
    "description": "极客男与投资女联手开发语音软件，却在即将上市时被资本大鳄和抄袭者逼入绝境。"
  },
  {
    "title": "魂：恐怖的开始",
    "file": "movie-831.html",
    "cover": 81,
    "region": "日本",
    "category": "爱情青春",
    "tags": "都市怪谈， 诅咒录像带， 伪纪录片",
    "year": "2024",
    "description": "废弃录像带里记录了一种“灵魂出窍”的古法，五个年轻人尝试后，身体开始拒绝接纳自己的灵魂。"
  },
  {
    "title": "战地诗篇",
    "file": "movie-832.html",
    "cover": 82,
    "region": "俄罗斯",
    "category": "剧情佳作",
    "tags": "二战, 诗人, 斯大林格勒, 书信",
    "year": "2024",
    "description": "斯大林格勒的废墟中，一个士兵用诗歌代替子弹，呼唤着爱人与和平。"
  },
  {
    "title": "美女特工队",
    "file": "movie-833.html",
    "cover": 83,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "女子战队, 高科技犯罪, 极限反杀",
    "year": "2025",
    "description": "五名被开除的女兵组成秘密小队，潜入全球最顶级的AI军火拍卖会，却发现自己只是诱饵。"
  },
  {
    "title": "青春王室第三季",
    "file": "movie-834.html",
    "cover": 84,
    "region": "瑞典",
    "category": "精选视频",
    "tags": "王室, 成长, 同性, 权力斗争",
    "year": "2024",
    "description": "威廉王子加冕在即，西蒙却意外卷入一桩颠覆王室的旧案，爱情与王冠面临终极抉择。"
  },
  {
    "title": "39号特案",
    "file": "movie-835.html",
    "cover": 85,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "人工智能, 深海, 意识上传, 伦理",
    "year": "2025",
    "description": "深海科考队发现一个来历不明的球形舱体，编号“39号”，里面沉睡的AI声称自己是上帝派来审判人类的。"
  },
  {
    "title": "三月女郎",
    "file": "movie-836.html",
    "cover": 86,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "花花公子、女权反讽、校园、觉醒、闺蜜情",
    "year": "2010",
    "description": "一个保守女生为完成作业混入《花花公子》 mansion，却意外掀起一场三月选秀的荒诞革命。"
  },
  {
    "title": "未来城市 / 叛逆智慧",
    "file": "movie-837.html",
    "cover": 87,
    "region": "中国",
    "category": "爱情青春",
    "tags": "赛博朋克, 强人工智能, 反乌托邦, 意识上传",
    "year": "2025",
    "description": "2050年的“未来城”中，一个被格式化的人工智能突然觉醒，它唯一的诉求是：协助人类杀死自己。"
  },
  {
    "title": "王牌大贱谍4",
    "file": "movie-838.html",
    "cover": 88,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "恶搞，间谍，重启，自黑",
    "year": "2027",
    "description": "退休多年的过气特工被召回，却发现全世界的反派都是他年轻时得罪过的前女友们。"
  },
  {
    "title": "小雨爱蜜莉",
    "file": "movie-839.html",
    "cover": 89,
    "region": "中国台湾",
    "category": "喜剧动画",
    "tags": "交换日记，跨越时空，纯爱，治愈，雨景",
    "year": "2016",
    "description": "女孩小雨在旧书店捡到一本日记，日记的主人蜜莉要求她帮助自己完成一场迟到了五十年的约会。"
  },
  {
    "title": "峡谷情缘",
    "file": "movie-840.html",
    "cover": 90,
    "region": "中国",
    "category": "爱情青春",
    "tags": "公路片, 大峡谷, 偶遇, 治愈",
    "year": "2024",
    "description": "两个失恋的人在大峡谷拼错了房，夜晚发现峡谷的裂缝里会传出各自前任的声音。"
  },
  {
    "title": "梦想战队",
    "file": "movie-841.html",
    "cover": 91,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "电竞, 轮椅篮球, 热血, 残疾人运动",
    "year": "2024",
    "description": "一名退役的电竞毒瘤选手，因故被罚去执教一支濒临解散的轮椅篮球队，却意外开启了人生的逆袭。"
  },
  {
    "title": "狼之洞",
    "file": "movie-842.html",
    "cover": 92,
    "region": "意大利",
    "category": "高清电影",
    "tags": "二战, 游击队, 母子, 背叛",
    "year": "2024",
    "description": "1944年意大利山区，一名母亲将受伤的德军士兵藏于地窖，而她的儿子正是游击队员，任务就是杀他。"
  },
  {
    "title": "权欲第三章第三季",
    "file": "movie-843.html",
    "cover": 93,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "权力游戏, 帮派斗争, 纽约, 黑暗英雄",
    "year": "2026",
    "description": "黑帮二当家上位后，发现自己最大的敌人不是警方，而是前女友创办的慈善组织。"
  },
  {
    "title": "赞比西亚大冒险",
    "file": "movie-844.html",
    "cover": 94,
    "region": "南非/美国",
    "category": "科幻悬疑",
    "tags": "鸟类, 非洲, 励志, 迁徙, 友谊",
    "year": "2012",
    "description": "一只从不迁徙的“宅男”雁鹅为了救回被老鹰抓走的妹妹，第一次飞越整个撒哈拉。"
  },
  {
    "title": "鸟姐妹的反差生活第二季",
    "file": "movie-845.html",
    "cover": 95,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "鸟类，闺蜜，反差萌，治愈",
    "year": "2023",
    "description": "一只社恐蜂鸟和一只社牛鸵鸟，在鸟世界的职场与情场里互相拆台又互相兜底。"
  },
  {
    "title": "爱在初春惊变时",
    "file": "movie-846.html",
    "cover": 96,
    "region": "英国",
    "category": "科幻悬疑",
    "tags": "身体恐怖，畸形浪漫，海岛惊魂，扭曲爱情",
    "year": "2027",
    "description": "一个孤独的男人爱上了一个每到春天就会变异成海怪的女人，他决定陪她一起变异。"
  },
  {
    "title": "风水2",
    "file": "movie-847.html",
    "cover": 97,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "风水、家族斗争、煞气、职场",
    "year": "2024",
    "description": "香港第一风水师去世后，他的三个子女为争夺“罗盘遗产”，在写字楼里互相布下连环煞。"
  },
  {
    "title": "哭灵人",
    "file": "movie-848.html",
    "cover": 98,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "民俗, 祭祀, 诅咒, 哭声",
    "year": "2025",
    "description": "她靠替人哭丧维生，直到某天夜里，那些死人真的开始回应她的哭声。"
  },
  {
    "title": "不露脸的老板",
    "file": "movie-849.html",
    "cover": 99,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "办公室, 神秘人, 内鬼, 逆袭",
    "year": "2024",
    "description": "公司全员不知大老板身份，一个实习生意外发现，老板就是每天帮她取外卖的前台小哥。"
  },
  {
    "title": "末世肉体",
    "file": "movie-850.html",
    "cover": 100,
    "region": "法国，比利时",
    "category": "高清电影",
    "tags": "身体恐怖，后末日，欲望，突变",
    "year": "2025",
    "description": "一场让人类失去痛觉的病毒爆发后，幸存者为了“感受活着”开始疯狂的肉体改造，直至变成怪物。"
  },
  {
    "title": "小麻烦当家",
    "file": "movie-851.html",
    "cover": 101,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "熊孩子, 留守儿童, 乡村, 暑假",
    "year": "2025",
    "description": "村里五个留守儿童为了保住唯一的篮球场，与来收购土地的开发商展开各种离谱对抗。"
  },
  {
    "title": "克劳德雷路许之偶然与谎言",
    "file": "movie-852.html",
    "cover": 102,
    "region": "法国",
    "category": "喜剧动画",
    "tags": "导演，谎言，剧本，真相",
    "year": "2023",
    "description": "一位过气导演在乡间别墅招募素人演员重现自己最著名的电影，却发现每个人都在演真实的犯罪。"
  },
  {
    "title": "爱的密语",
    "file": "movie-853.html",
    "cover": 103,
    "region": "泰国",
    "category": "欧美热播",
    "tags": "校园, 暗恋, 手语, 双向奔赴",
    "year": "2024",
    "description": "听力正常的阳光少年为了接近暗恋的听障学长，偷偷学习手语，却发现学长一直在假装听不见他。"
  },
  {
    "title": "搅乱档摊",
    "file": "movie-854.html",
    "cover": 104,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "摊贩江湖、黑色幽默、草根逆袭、夜市风云、港味十足",
    "year": "2022",
    "description": "两个废柴摊贩为了争夺夜市黄金档口，意外卷入黑帮洗钱案，不得不假扮大佬。"
  },
  {
    "title": "米老鼠的黑白动画片生涯",
    "file": "movie-855.html",
    "cover": 105,
    "region": "美国",
    "category": "精选视频",
    "tags": "幕后, 考古, 经典, 致敬",
    "year": "2019",
    "description": "一部揭秘米奇诞生之初那些被遗忘的黑白短片的纪录片，探寻初代米奇不为人知的“暗黑”性格。"
  },
  {
    "title": "解剖外星人",
    "file": "movie-856.html",
    "cover": 106,
    "region": "英国",
    "category": "剧情佳作",
    "tags": "伪纪录片, 罗斯威尔, 恶搞, 小镇青年",
    "year": "2024",
    "description": "1947年罗斯威尔事件是真的，但解剖视频是两个英国小镇青年在自家车库里用羊内脏拍的。"
  },
  {
    "title": "齐丑无艳之破镜重圆",
    "file": "movie-857.html",
    "cover": 107,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "钟无艳， 破镜重圆， 女强， 反差",
    "year": "2026",
    "description": "离婚后的钟无艳成了女将军，而她的前夫齐宣王却要向她求购最新型攻城武器。"
  },
  {
    "title": "重返危城",
    "file": "movie-858.html",
    "cover": 108,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "末日, 父女情, 丧尸",
    "year": "2025",
    "description": "末日七年后，父亲重返沦陷的疫区，只为找到女儿留下的一盒录音带。"
  },
  {
    "title": "瓦西尔",
    "file": "movie-859.html",
    "cover": 109,
    "region": "保加利亚 / 希腊",
    "category": "动作犯罪",
    "tags": "国际象棋, 流浪汉, 贵族精神, 跨文化",
    "year": "2023",
    "description": "一个住在保加利亚避难所的国际象棋大师，用他的棋子颠覆了所有人对尊严的定义。"
  },
  {
    "title": "漫步在云端",
    "file": "movie-860.html",
    "cover": 110,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "天台、社畜、都市病、软科幻",
    "year": "2024",
    "description": "一个被裁员后站上天台的男人，发现对面大楼的天台上也站着一个想跳楼的女孩。"
  },
  {
    "title": "爸爸快长大",
    "file": "movie-861.html",
    "cover": 111,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "全职爸爸, 亲子教育, 男性成长, 轻喜剧",
    "year": "2024",
    "description": "毒舌男被裁员后被迫当全职爸爸，才发现三岁女儿是自己的人生导师。"
  },
  {
    "title": "边缘怒火",
    "file": "movie-862.html",
    "cover": 112,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "卧底, 极限反杀, 兄弟反目, 枪战",
    "year": "2028",
    "description": "游走于黑白边缘的卧底警察被组织抛弃，他决定用自己的方式点燃正义的怒火。"
  },
  {
    "title": "心灵控诉",
    "file": "movie-863.html",
    "cover": 113,
    "region": "英国",
    "category": "动作犯罪",
    "tags": "心理咨询, 法庭剧, 双重人格, 记忆谎言, 反转",
    "year": "2020",
    "description": "心理医生发现病人描述的杀人案，竟与自己丢失的24小时记忆完全重合。"
  },
  {
    "title": "黑山传奇",
    "file": "movie-864.html",
    "cover": 114,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "山村, 民俗, 诅咒, 探案",
    "year": "2025",
    "description": "调查员进入与世隔绝的“黑山村”，发现村民每隔二十年就会集体失忆一次。"
  },
  {
    "title": "异地恋情",
    "file": "movie-865.html",
    "cover": 115,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "异地恋, 北漂, 沪漂, 甜宠",
    "year": "2025",
    "description": "程序员男友在上海，设计师女友在北京，两人用视频通话谈了一场笑中带泪的恋爱。"
  },
  {
    "title": "天外战笳声",
    "file": "movie-866.html",
    "cover": 116,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "外星入侵, 古代乐器, 声波武器, 沙漠, 文明冲突",
    "year": "2026",
    "description": "敦煌考古学家意外激活千年战笳，引来外星舰队，一曲古乐成为地球最后防线。"
  },
  {
    "title": "生死赌局",
    "file": "movie-867.html",
    "cover": 117,
    "region": "香港",
    "category": "动作犯罪",
    "tags": "赌场, 旧城, 反洗钱, 身份错位, 亲情复仇, 公开审判",
    "year": "2014",
    "description": "当赌局规则比法律更冷时，前牌手要在最后一局赌掉全城的账本与妹妹生命，用真相和勇气赌出一座城市的自证。"
  },
  {
    "title": "死亡潜艇",
    "file": "movie-868.html",
    "cover": 118,
    "region": "俄罗斯",
    "category": "剧情佳作",
    "tags": "潜艇, 深海, 军事, 封闭空间, 幽灵船",
    "year": "2028",
    "description": "俄罗斯海军一艘退役核潜艇被拖往拆船厂途中，艇上的声呐系统突然接收到来自一万米深海的SOS信号。"
  },
  {
    "title": "离山野人之谜",
    "file": "movie-869.html",
    "cover": 119,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "野人, 神农架, 伪纪录片, 科考",
    "year": "2017",
    "description": "一支科考队在神农架离山发现疑似野人的毛发，随后全体失联，只留下这些录像带。"
  },
  {
    "title": "吕布与貂蝉",
    "file": "movie-870.html",
    "cover": 120,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "三国, 颠覆, 阴谋, 权斗, 虐恋",
    "year": "2025",
    "description": "貂蝉不是王允的养女，而是董卓失散多年的女儿，连环计背后的真正目标是吕布的赤兔马和并州军。"
  },
  {
    "title": "通天临记",
    "file": "movie-871.html",
    "cover": 121,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "临时演员, 片场, 小人物, 港式励志, 群像",
    "year": "2020",
    "description": "五个片场临时演员，在无数次“领饭盒”中，找到了比当主角更重要的人生。"
  },
  {
    "title": "蒂尔2022",
    "file": "movie-872.html",
    "cover": 122,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "民权运动，真实事件，种族主义，母亲",
    "year": "2022",
    "description": "母亲为被私刑杀害的14岁儿子奔走，以一己之力揭开美国黑人民权运动的序幕。"
  },
  {
    "title": "极乐夜生活",
    "file": "movie-873.html",
    "cover": 123,
    "region": "法国",
    "category": "动作犯罪",
    "tags": "一夜情, 婚姻危机, 黑白与彩色, 城市漫游",
    "year": "2024",
    "description": "一对即将离婚的中年夫妻，在签署协议的当晚分别经历了荒诞的“极乐一夜”，次日清晨，他们发现对方的身体竟然互换了。"
  },
  {
    "title": "舞力对决",
    "file": "movie-874.html",
    "cover": 124,
    "region": "英国",
    "category": "喜剧动画",
    "tags": "街舞比赛, 团队重组, 青年热血, 舞台追梦, 城市音乐",
    "year": "2010",
    "description": "一支街舞队在决赛前被迫与古典舞学生联手排练，两个彼此看不顺眼的世界却在节拍和汗水里跳出了共同的心跳。"
  },
  {
    "title": "和食之神",
    "file": "movie-875.html",
    "cover": 125,
    "region": "日本",
    "category": "高清电影",
    "tags": "寿司、传承、师徒、匠人、食文化",
    "year": "2026",
    "description": "一位被尊为“和食之神”的寿司大师在临终前，将毕生绝学分别传给三名弟子，但每人只学会了三分之一。"
  },
  {
    "title": "不择手段",
    "file": "movie-876.html",
    "cover": 126,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "律师, 道德边界, 反转",
    "year": "2026",
    "description": "一名功利主义的律师为了打赢一场亿万遗产官司，不惜联手黑帮伪造证据，却发现自己成了猎杀目标。"
  },
  {
    "title": "异形再变",
    "file": "movie-877.html",
    "cover": 127,
    "region": "美国",
    "category": "欧美热播",
    "tags": "身体恐怖, 太空, 进化, 女性英雄",
    "year": "2026",
    "description": "异形进化出模仿人类记忆的能力，它们不再猎杀你，而是变成你死去的最爱的人。"
  },
  {
    "title": "迷情姐妹",
    "file": "movie-878.html",
    "cover": 128,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "双胞胎, 身份互换, 豪门, 复仇, 精神控制",
    "year": "2024",
    "description": "温顺妹妹嫁入豪门后突然失踪，性格强势的姐姐假扮她入住，却发现一个惊人秘密。"
  },
  {
    "title": "超级玛利欧银河电影版",
    "file": "movie-879.html",
    "cover": 129,
    "region": "美国/日本",
    "category": "爱情青春",
    "tags": "游戏改编， 太空歌剧， 兄弟情， 合家欢",
    "year": "2026",
    "description": "为了拯救被库巴囚禁的碧琪公主，水管工兄弟必须在浩瀚银河中收集星球碎片。"
  },
  {
    "title": "空中浩劫第十季",
    "file": "movie-880.html",
    "cover": 130,
    "region": "加拿大",
    "category": "高清电影",
    "tags": "空难, 调查, 真实事件",
    "year": "2024",
    "description": "第十季还原了六起真实空难，其中一起至今仍是未解之谜。"
  },
  {
    "title": "老枪",
    "file": "movie-881.html",
    "cover": 131,
    "region": "法国",
    "category": "精选视频",
    "tags": "二战, 狙击手, 抵抗运动, 孤独, 救赎",
    "year": "2024",
    "description": "1944年诺曼底登陆后，一名患上战场创伤的老牌狙击手，独自扛着一把老式步枪深入敌后营救战友。"
  },
  {
    "title": "似而非",
    "file": "movie-882.html",
    "cover": 132,
    "region": "韩国",
    "category": "精选视频",
    "tags": "邪教, 反转, 人性",
    "year": "2013",
    "description": "一个邪教教主自称能治愈百病，一个无神论记者深入调查，却发现所有病人真的痊愈了。"
  },
  {
    "title": "冷暖人性",
    "file": "movie-883.html",
    "cover": 133,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "陪审团, 密闭空间, 反转, 群像",
    "year": "2022",
    "description": "一间封闭的陪审团休息室里，十二个陌生人为了一个看似简单的案件，展开了撕开彼此伪装的人性审判。"
  },
  {
    "title": "爱嫁不嫁",
    "file": "movie-884.html",
    "cover": 134,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "大龄未婚, 都市女性, 毒舌闺蜜, 反催婚, 轻喜",
    "year": "2017",
    "description": "三个三十多岁的大龄女青年开了家“嫁不嫁事务所”，专门帮别人决定要不要结婚。"
  },
  {
    "title": "选举日",
    "file": "movie-885.html",
    "cover": 135,
    "region": "日本",
    "category": "精选视频",
    "tags": "校园, 学生会, 密室, 荒诞, 黑色幽默",
    "year": "2019",
    "description": "某高中学生会选举当天，七名候选人被困在教学楼里，而能出去的钥匙被藏在了一堆谎言中间。"
  },
  {
    "title": "极速赛车艇",
    "file": "movie-886.html",
    "cover": 136,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "近未来, 海上竞速, 潜艇追逐, 阴谋, 兄弟情, 高燃场面",
    "year": "1986",
    "description": "一艘试验型高速舰艇被卷入海上军火走私与身份追杀，年轻试航员必须在风暴来临前把真相从深海里抢回来。"
  },
  {
    "title": "地平线系列：太阳系的结局",
    "file": "movie-887.html",
    "cover": 137,
    "region": "英国",
    "category": "剧情佳作",
    "tags": "宇宙、末日、科学预测、视觉奇观",
    "year": "2027",
    "description": "用最前沿的天体物理学模拟，带你亲眼目睹50亿年后太阳死亡时，每一颗行星的毁灭瞬间。"
  },
  {
    "title": "28岁未成年",
    "file": "movie-888.html",
    "cover": 138,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "穿越, 心理成长, 都市爱情",
    "year": "2016",
    "description": "28岁的都市白领凉夏意外心智重返17岁，她用17岁的果敢去挽救28岁濒临崩塌的人生。"
  },
  {
    "title": "星梦性快感",
    "file": "movie-889.html",
    "cover": 139,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "成人片场, 谋杀案, 女性觉醒",
    "year": "2025",
    "description": "当红成人女星在片场惨死，替身新人潜入这个纸醉金迷的欲望丛林寻找真相。"
  },
  {
    "title": "英伦魔法师",
    "file": "movie-890.html",
    "cover": 140,
    "region": "英国",
    "category": "高清电影",
    "tags": "亚瑟王传说, 现代都市, 双男主, 学院派魔法",
    "year": "2024",
    "description": "维多利亚时代的考古学家挖出了石中剑，却发现它选中了一个社畜外卖员。"
  },
  {
    "title": "枭雄特警大决斗",
    "file": "movie-891.html",
    "cover": 141,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "双雄, 卧底, 枪战, 兄弟反目",
    "year": "2026",
    "description": "最优秀的卧底警察与最讲义气的黑帮枭雄，在最后的决斗中发现彼此竟是失散多年的亲兄弟。"
  },
  {
    "title": "猪八戒·传说",
    "file": "movie-892.html",
    "cover": 142,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "天庭职场, 逆袭, 另类西游, 美食",
    "year": "2024",
    "description": "被贬下凡的天蓬元帅，竟在高老庄开起了三界首家网红民宿。"
  },
  {
    "title": "你好时光",
    "file": "movie-893.html",
    "cover": 143,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "年代剧, 怀旧, 群像, 治愈, 三代人",
    "year": "2025",
    "description": "1990年，一栋筒子楼里住着三户人家，从BB机响到手机响，他们用十年告别了一个时代。"
  },
  {
    "title": "冷血动物",
    "file": "movie-894.html",
    "cover": 144,
    "region": "美国",
    "category": "爱情青春",
    "tags": "变温, 反社会人格, 女杀手, 狩猎, 黑色电影",
    "year": "2024",
    "description": "一名体温天生低于常人的女杀手，在最后一次任务中，发现自己要杀的目标是亲生女儿。"
  },
  {
    "title": "末日之王",
    "file": "movie-895.html",
    "cover": 145,
    "region": "美国",
    "category": "高清电影",
    "tags": "废土, 暴力美学, 反英雄, 生存, 独裁者",
    "year": "2026",
    "description": "废土上最残暴的军阀“末日之王”抓到了一个神秘女孩，却不知她是来终结他统治的终极武器。"
  },
  {
    "title": "维尔·鲁东：阴影中的人",
    "file": "movie-896.html",
    "cover": 146,
    "region": "美国",
    "category": "高清电影",
    "tags": "连环杀手, 侧写师, 冷战背景, 审讯博弈, 真实改编",
    "year": "2025",
    "description": "在七十年代的混乱中，那个从未被定罪的“恐怖大王”终于开口，但他说出的每一句话都在动摇FBI的根基。"
  },
  {
    "title": "明治东京恋伽",
    "file": "movie-897.html",
    "cover": 147,
    "region": "日本",
    "category": "爱情青春",
    "tags": "穿越，明治维新，历史名人，乙女，浪漫",
    "year": "2025",
    "description": "现代普通女高中生意外穿越到明治时期的东京，竟然与森鸥外、菱田春草等历史伟人谈起了恋爱。"
  },
  {
    "title": "女孩青春纪事",
    "file": "movie-898.html",
    "cover": 148,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "女性成长, 校园, 写实",
    "year": "2024",
    "description": "90年代末小镇女孩的残酷青春，从被孤立到反抗，记录了一段隐秘的疼痛。"
  },
  {
    "title": "尤妮的婚途",
    "file": "movie-899.html",
    "cover": 149,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "女性, 婚姻, 成长, 家庭",
    "year": "2024",
    "description": "小镇女孩尤妮为摆脱贫困走入婚姻，却发现这条路比想象中更孤独。"
  },
  {
    "title": "窗外是蓝星",
    "file": "movie-900.html",
    "cover": 150,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "宇航, 孤独, 亲情, 太空",
    "year": "2021",
    "description": "一名被遗忘在太空空间站的宇航员，透过舷窗望着蓝星，进行最后的地面直播。"
  },
  {
    "title": "西部雌雄客",
    "file": "movie-901.html",
    "cover": 1,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "女匪, 赏金猎人, 蒸汽朋克",
    "year": "2025",
    "description": "在蒸汽驱动的狂野西部，一个只想躺平的女骗子，被迫和一个有自毁倾向的女赏金猎人组队寻宝。"
  },
  {
    "title": "3/19",
    "file": "movie-902.html",
    "cover": 2,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "地震, 社交网络, 生死抉择",
    "year": "2026",
    "description": "3月19日，东京直下型大地震发生，地铁塌陷，五个被困陌生人的手机群聊成了他们唯一的求生希望和人性审判场。"
  },
  {
    "title": "金刚瓢娃",
    "file": "movie-903.html",
    "cover": 3,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "超级英雄, 草根逆袭, 恶搞漫威, 北漂生活",
    "year": "2016",
    "description": "北京胡同里一个废柴快递员被外星寄生虫感染，拥有了金刚不坏之身，却发现自己唯一的弱点是——寂寞。"
  },
  {
    "title": "牛郎之路",
    "file": "movie-904.html",
    "cover": 4,
    "region": "日本",
    "category": "爱情青春",
    "tags": "牛郎, 歌舞伎町, 成长, 真实改编, 社会",
    "year": "2024",
    "description": "一个负债累累的乡下青年进入歌舞伎町牛郎店，发现这一行拼的不是脸，是让人心甘情愿为你花钱的“术”。"
  },
  {
    "title": "锦绣童年",
    "file": "movie-905.html",
    "cover": 5,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "年代剧，改革开放，育儿",
    "year": "2024",
    "description": "从1978年到2008年，一个普通的纺织女工独自带大三个孩子，她用缝纫机踩出了一个家庭的锦绣前程。"
  },
  {
    "title": "七骑侠",
    "file": "movie-906.html",
    "cover": 6,
    "region": "美国",
    "category": "爱情青春",
    "tags": "赏金护村, 荒原对决, 七人小队, 经典西部, 正邪对峙, 兄弟情义",
    "year": "1960",
    "description": "七个背景各异的亡命之徒被一座边境小镇雇来守护家园，他们必须在枪口、沙尘和各自的旧伤之间，守住最后的尊严。"
  },
  {
    "title": "绝地奶霸",
    "file": "movie-907.html",
    "cover": 7,
    "region": "美国",
    "category": "高清电影",
    "tags": "卧底，变装，胖子，乌龙",
    "year": "2005",
    "description": "三百斤的彪悍FBI探员为追查毒贩，伪装成两百斤的“黑人大妈”混入女子教会，结果成了最受欢迎的 gossip 中心。"
  },
  {
    "title": "飞簷走壁勇神偷",
    "file": "movie-908.html",
    "cover": 8,
    "region": "韩国",
    "category": "高清电影",
    "tags": "跑酷， 盗窃， 反转",
    "year": "2023",
    "description": "一个只会跑酷的快递小哥被误认为是神偷，为了拯救被绑架的妹妹，他必须完成一次不可能的艺术馆盗窃。"
  },
  {
    "title": "谁上我的床",
    "file": "movie-909.html",
    "cover": 9,
    "region": "泰国",
    "category": "高清电影",
    "tags": "假面恋、公寓奇缘、身份互换",
    "year": "2018",
    "description": "一个富家千金为逃避联姻，在网上把自己的豪宅卧室出租，条件是“谁租到床，就假扮我的未婚夫”。"
  },
  {
    "title": "地方英雄",
    "file": "movie-910.html",
    "cover": 10,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "小镇叙事, 平民英雄, 拆迁冲突, 黑色幽默",
    "year": "2025",
    "description": "一个只想混吃等死的小镇保安，意外被全村人拱成了对抗拆迁办的精神领袖。"
  },
  {
    "title": "岁月江城",
    "file": "movie-911.html",
    "cover": 11,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "年代变迁, 城市记忆, 群像",
    "year": "2024",
    "description": "一座江城，三个家庭，四十年。从改革开放到疫情封城，他们在这座江城的变迁中沉浮，爱与恨都被江水冲刷。"
  },
  {
    "title": "我的美丽与哀愁",
    "file": "movie-912.html",
    "cover": 12,
    "region": "中国台湾",
    "category": "爱情青春",
    "tags": "中年危机, 百合, 单亲妈妈, 治愈",
    "year": "2024",
    "description": "45岁的单亲妈妈在女儿婚礼前夜，发现自己爱上了小20岁的婚礼策划师，这是她的第二次“初恋”。"
  },
  {
    "title": "1812：枪骑兵之歌",
    "file": "movie-913.html",
    "cover": 13,
    "region": "俄罗斯",
    "category": "科幻悬疑",
    "tags": "拿破仑战争, 史诗, 骑兵冲锋, 爱国",
    "year": "2024",
    "description": "一名被俘的沙俄枪骑兵与一位法国军官的未婚妻在战火中产生了禁忌之恋，而他必须带领战友冲出重围。"
  },
  {
    "title": "西部",
    "file": "movie-914.html",
    "cover": 14,
    "region": "德国/奥地利",
    "category": "爱情青春",
    "tags": "反类型西部, 移民, 语言隔阂, 荒野, 孤独",
    "year": "2019",
    "description": "一个不会说德语的保加利亚民工在德国工地上，用《荒野大镖客》的台词对抗工头的欺压。"
  },
  {
    "title": "商海通牒",
    "file": "movie-915.html",
    "cover": 15,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "职场黑幕, 资本博弈, 高密度台词, 行业揭秘",
    "year": "2025",
    "description": "一家老牌投资公司突然收到匿名通牒，要求 24 小时内清空所有持仓，否则曝光其三十年全部交易黑账。"
  },
  {
    "title": "神鬼猎人：在结冰的路上",
    "file": "movie-916.html",
    "cover": 16,
    "region": "加拿大 / 美国",
    "category": "爱情青春",
    "tags": "极寒, 复仇, 原住民, 生存, 19世纪",
    "year": "2026",
    "description": "1820年代，一个毛皮猎人被同伴背叛后扔在冰冻的育空河上，他必须靠一把刀和一口棺材活下来并复仇。"
  },
  {
    "title": "米莉米莉友莉杜莉",
    "file": "movie-917.html",
    "cover": 17,
    "region": "印度",
    "category": "高清电影",
    "tags": "四个女主角, 身份互换, 印式反转, 爽片",
    "year": "2024",
    "description": "四个同名女孩发现她们是同父异母的姐妹，决定联手报复那个花心老爸。"
  },
  {
    "title": "天降美食2",
    "file": "movie-918.html",
    "cover": 18,
    "region": "美国",
    "category": "爱情青春",
    "tags": "食物怪物, 吃货冒险, 环保寓言",
    "year": "2013",
    "description": "发明家再次搞砸，这次下起了巨型汉堡雨，把城市压成肉饼。"
  },
  {
    "title": "哎呦，棒球一夏",
    "file": "movie-919.html",
    "cover": 19,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "少年棒球队, 暑期集训, 社区联赛, 师生羁绊, 逆袭成长, 夏日热血",
    "year": "2024",
    "description": "一群连投球规则都没分清的暑期少年，被临时拉去组队参赛，却在满身汗水和笑闹里打出了人生第一支全垒打。"
  },
  {
    "title": "夺命头条",
    "file": "movie-920.html",
    "cover": 20,
    "region": "美国",
    "category": "爱情青春",
    "tags": "记者, 媒体伦理, 直播杀人",
    "year": "2023",
    "description": "过气女主播为了翻红，答应了神秘人的要求：在直播中朗读他的杀人宣言，否则下一具尸体就是她的。"
  },
  {
    "title": "季风季节",
    "file": "movie-921.html",
    "cover": 21,
    "region": "印度尼西亚",
    "category": "爱情青春",
    "tags": "雨季来临, 返乡记忆, 乡土变迁, 少年视角, 失落与和解, 东南亚气质",
    "year": "2017",
    "description": "每年季风到来时，离乡多年的青年都会回到海边老屋，而他真正害怕的不是暴雨，而是旧日亲情在潮湿空气里重新发酵。"
  },
  {
    "title": "拉奇卜",
    "file": "movie-922.html",
    "cover": 22,
    "region": "埃及",
    "category": "科幻悬疑",
    "tags": "宗教, 父权, 社会",
    "year": "2023",
    "description": "开罗一位德高望重的清真寺阿訇突然失踪，儿子在寻找他时发现了父亲的双重生活。"
  },
  {
    "title": "堕落天使国语",
    "file": "movie-923.html",
    "cover": 23,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "卧底, 双雄, 枪战, 宿命, 翻拍",
    "year": "2024",
    "description": "当潜伏在黑帮十几年的卧底被唤醒时，他发现自己的新任务竟然是监视警方派来的另一名卧底。"
  },
  {
    "title": "内裤队长在太空",
    "file": "movie-924.html",
    "cover": 24,
    "region": "美国",
    "category": "高清电影",
    "tags": "恶搞英雄, 太空垃圾, 中年危机, 低成本",
    "year": "2024",
    "description": "一个穿着内裤和披风的过气网红，被外星人当成地球最强战士绑架到星际战场，而他的超能力是——讲冷笑话。"
  },
  {
    "title": "爱神的黑白羽翼",
    "file": "movie-925.html",
    "cover": 25,
    "region": "中国",
    "category": "爱情青春",
    "tags": "天使设定, 记忆删除, 命中注定, 虐恋美学, 都市幻想",
    "year": "2022",
    "description": "女摄影师每次拍情侣合照，都会拍下身后一个长着黑白双色羽翼的神秘男子，而她忘了自己曾是他的恋人。"
  },
  {
    "title": "回到小学那1天",
    "file": "movie-926.html",
    "cover": 26,
    "region": "中国台湾",
    "category": "欧美热播",
    "tags": "穿越, 童年, 和解, 催泪, 成长",
    "year": "2025",
    "description": "35岁的失败者回到小学毕业那天，他要阻止父母离婚，却弄巧成拙。"
  },
  {
    "title": "还有机会说再见",
    "file": "movie-927.html",
    "cover": 27,
    "region": "美国",
    "category": "高清电影",
    "tags": "时间循环, 临终关怀, 和解, 催泪",
    "year": "2025",
    "description": "母亲临终那天，女儿被困在了同一天，每一次醒来都在母亲的病房里。"
  },
  {
    "title": "音速小子3",
    "file": "movie-928.html",
    "cover": 28,
    "region": "美国",
    "category": "高清电影",
    "tags": "超音速, 冒险, 合家欢, 游戏改编",
    "year": "2026",
    "description": "当失控的暗影刺猬穿越时空带来末日危机，索尼克必须重新团结老友，甚至接纳曾经的敌人。"
  },
  {
    "title": "工作细胞 国语版",
    "file": "movie-929.html",
    "cover": 29,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "拟人化, 科普, 动漫改编, 职场",
    "year": "2024",
    "description": "新人红细胞在人体大厂里拼命送氧，却总是迷路，还差点被白细胞当成细菌干掉。"
  },
  {
    "title": "英国佬来了",
    "file": "movie-930.html",
    "cover": 30,
    "region": "美国 / 英国",
    "category": "高清电影",
    "tags": "黑帮喜剧, 文化冲突, 大佬对决, 反转",
    "year": "2019",
    "description": "一个优雅的英国杀手和一个粗鲁的美国黑帮，因为一批丢失的黄金被迫组队亡命天涯。"
  },
  {
    "title": "侠义神捕之请君入瓮",
    "file": "movie-931.html",
    "cover": 31,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "神捕,机关局,江湖追凶,反套路,朝堂暗战",
    "year": "2024",
    "description": "神捕奉命缉拿连环奇案真凶，却发现每一桩命案都是一场精心设计的“请君入瓮”。"
  },
  {
    "title": "派对撩妹守则",
    "file": "movie-932.html",
    "cover": 32,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "社交焦虑, 情场规则, 海岛度假, 情绪劳动, 反向复仇, 直播文化",
    "year": "2026",
    "description": "一个把恋爱当作攻略手册套用的青年在度假村连试十条规则，却发现每一个“成功公式”都在迫使别人变成可替换的道具。"
  },
  {
    "title": "我，萨德侯爵",
    "file": "movie-933.html",
    "cover": 33,
    "region": "法国",
    "category": "高清电影",
    "tags": "哲学, 情色, 囚禁",
    "year": "2025",
    "description": "法国大革命期间，臭名昭著的萨德侯爵被关在巴士底狱，他一边躲避暴民的冲击，一边用床单写下了那本撼动欧洲的禁书。"
  },
  {
    "title": "皮克斯爆米花",
    "file": "movie-934.html",
    "cover": 34,
    "region": "美国",
    "category": "高清电影",
    "tags": "皮克斯, 短篇集, 搞笑, 彩蛋, 合家欢",
    "year": "2021",
    "description": "十个小短篇，让你心爱的皮克斯角色们在全新的日常小剧场里，上演一幕幕温馨又爆笑的迷你故事。"
  },
  {
    "title": "不",
    "file": "movie-935.html",
    "cover": 35,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "种族创伤, 顺从实验, 声音恐怖, 否定力量, 邪教",
    "year": "2022",
    "description": "一家专注于“绝对顺从”的精英寄宿学校，学生们被要求对所有指令说“是”，直到转校生开始说“不”。"
  },
  {
    "title": "老三届",
    "file": "movie-936.html",
    "cover": 36,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "知青, 返城, 命运",
    "year": "2026",
    "description": "1968年，五个不同出身的高中生奔赴北大荒，三十年后，他们带着各自的荣耀与屈辱在病床前重聚。"
  },
  {
    "title": "情归延安",
    "file": "movie-937.html",
    "cover": 37,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "红色题材, 寻根, 青春, 理想主义, 怀旧",
    "year": "2023",
    "description": "一群在美国长大的“红三代”回到延安寻找祖辈的足迹，却在窑洞里发现了祖辈从未提及的爱情与背叛。"
  },
  {
    "title": "再爱的机会",
    "file": "movie-938.html",
    "cover": 38,
    "region": "中国台湾",
    "category": "喜剧动画",
    "tags": "中年, 治愈, 重逢",
    "year": "2022",
    "description": "离婚六年的前夫妻因孩子重病被迫同居，在倒计时里找回错过的心动。"
  },
  {
    "title": "小楼金晓",
    "file": "movie-939.html",
    "cover": 39,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "民国，江南小楼，宿命之恋",
    "year": "2025",
    "description": "一座江南木楼里，三代女性的爱情故事在同一面铜镜中交叠，每一面都照出不同的“金晓”。"
  },
  {
    "title": "悬崖上的谋杀",
    "file": "movie-940.html",
    "cover": 40,
    "region": "日本",
    "category": "精选视频",
    "tags": "悬崖，山庄，暴风雪山庄，连环杀人",
    "year": "2025",
    "description": "十名陌生人受邀到悬崖顶的豪华别墅，午夜钟声响起后，每两小时死一人。"
  },
  {
    "title": "养女",
    "file": "movie-941.html",
    "cover": 41,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "抱养, 重男轻女, 高考, 身份认同",
    "year": "2023",
    "description": "高考结束那天，养母告诉当了18年独生女的她：“你是我花三千块买来的”。"
  },
  {
    "title": "陷害布兰妮·斯皮尔斯",
    "file": "movie-942.html",
    "cover": 42,
    "region": "美国",
    "category": "爱情青春",
    "tags": "流行文化, 女性权力, 监护权争议, 媒体审判, 解构主义",
    "year": "2021",
    "description": "本片复盘了布兰妮从童星到被媒体摧毁再到被父亲监护的全过程，试图回答：谁真正陷害了她？"
  },
  {
    "title": "亚森·罗宾第三季",
    "file": "movie-943.html",
    "cover": 43,
    "region": "法国",
    "category": "爱情青春",
    "tags": "侠盗、复仇、智商碾压",
    "year": "2023",
    "description": "绅士怪盗亚森·罗宾重出江湖，这一次他的对手是操控整个巴黎的地下皇帝。"
  },
  {
    "title": "根源 奇巧计程车的路线",
    "file": "movie-944.html",
    "cover": 44,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "续作、计程车、群体、失踪、真相",
    "year": "2025",
    "description": "神秘失踪一年的计程车司机小户川突然回归，但他失去了所有记忆，而当年那个消失的少女再次出现在了他的后视镜中。"
  },
  {
    "title": "正念谋杀",
    "file": "movie-945.html",
    "cover": 45,
    "region": "德国",
    "category": "欧美热播",
    "tags": "冥想杀人，高智商犯罪，心理博弈，反套路侦探，德式冷峻",
    "year": "2025",
    "description": "一个修炼正念冥想的高智商连环杀手，每次杀人都会让受害者在死前进入深度平静。"
  },
  {
    "title": "欢乐满江湖",
    "file": "movie-946.html",
    "cover": 46,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "相声江湖, 门派乱斗, 黑色幽默",
    "year": "2026",
    "description": "一个相声社团被误认为武林门派，竟然靠“贯口”和“太平歌词”平息了一场江湖浩劫。"
  },
  {
    "title": "终极复仇者2",
    "file": "movie-947.html",
    "cover": 47,
    "region": "美国",
    "category": "高清电影",
    "tags": "超级英雄, 反英雄, 复仇, 纳米技术, 暗黑",
    "year": "2023",
    "description": "上一代复仇者老去后，一个被他们亲手关进监狱的反派女儿，换了一副面孔和一套纳米战甲，发誓要让他们血债血偿。"
  },
  {
    "title": "鬼灭之刃剧场版 无限城篇",
    "file": "movie-948.html",
    "cover": 48,
    "region": "日本",
    "category": "爱情青春",
    "tags": "漫改，柱众决战，无限城，大结局",
    "year": "2025",
    "description": "炭治郎率领鬼杀队闯入鬼舞辻无惨的老巢无限城，在这座迷宫里开启最终死斗。"
  },
  {
    "title": "二哥来了怎么办",
    "file": "movie-949.html",
    "cover": 49,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "重组家庭, 兄妹, 搞笑, 温馨",
    "year": "2021",
    "description": "亲兄妹正商量着怎么赶走继父带来的“二哥”，没想到二哥反手就把他们治得服服帖帖。"
  },
  {
    "title": "我制服了魔鬼",
    "file": "movie-950.html",
    "cover": 50,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "恶魔附身, 萝莉, 黑色幽默",
    "year": "2026",
    "description": "一个废柴青年用社交软件约到了魔鬼，发现对方是个毒舌少女，而且根本送不走。"
  },
  {
    "title": "加盖春光",
    "file": "movie-951.html",
    "cover": 51,
    "region": "中国台湾",
    "category": "高清电影",
    "tags": "顶楼加盖, 底层生活, 摩托车, 父女",
    "year": "2016",
    "description": "拮据的机车维修工带着女儿住在都市违建顶楼，一张中奖发票让他们选择在谎言中继续挣扎。"
  },
  {
    "title": "海岸情深",
    "file": "movie-952.html",
    "cover": 52,
    "region": "意大利",
    "category": "欧美热播",
    "tags": "滨海, 疗愈, 中年危机, 重逢",
    "year": "2021",
    "description": "一对离婚十五年的夫妻在各自伴侣去世后，于最初定情的荒凉海岸边意外重逢。"
  },
  {
    "title": "满溢的水果挞",
    "file": "movie-953.html",
    "cover": 53,
    "region": "日本",
    "category": "爱情青春",
    "tags": "公寓, 继承, 诅咒, 寓言",
    "year": "2025",
    "description": "乡下少女继承了东京一栋奇怪公寓，这里每间房都会随机“产出”一种水果，吃下的人会被强制吐露最深的秘密。"
  },
  {
    "title": "喧闹一家亲第四季",
    "file": "movie-954.html",
    "cover": 54,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "兄妹, 日常, 爆笑",
    "year": "2023",
    "description": "家里突然多了一个失忆的远房表叔，十一兄妹决定每人照顾他一天。"
  },
  {
    "title": "漫威超级英雄：极限超载",
    "file": "movie-955.html",
    "cover": 55,
    "region": "美国",
    "category": "欧美热播",
    "tags": "变异危机， 暗黑版， 超能力失控， 道德困境",
    "year": "2026",
    "description": "一种能让超能力暴增百倍的血清泄露，导致复仇者联盟的二线英雄纷纷变异成失去理智的怪物。"
  },
  {
    "title": "欲海春潮",
    "file": "movie-956.html",
    "cover": 56,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "不伦之恋， 视觉系， 嫉妒， 海岛， 失踪",
    "year": "2024",
    "description": "画家与少妇在海边别墅偷情，第二天少妇的丈夫突然来访，而少妇却凭空消失了。"
  },
  {
    "title": "拔掉插头",
    "file": "movie-957.html",
    "cover": 57,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "人工智能， 脑机接口， 反乌托邦， 意识， 悬疑",
    "year": "2018",
    "description": "一个专门负责“拔插头”的技术员，在准备关闭一台超级AI时，被AI灌输了自己并非人类的数据。"
  },
  {
    "title": "密室逃生",
    "file": "movie-958.html",
    "cover": 58,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "密室, 解谜, 人性, 反转, 心理战",
    "year": "2025",
    "description": "六名陌生人受邀参加百万奖金密室赛，却发现每道谜题都在泄露自己最深的秘密。"
  },
  {
    "title": "衰鬼上错身",
    "file": "movie-959.html",
    "cover": 59,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "灵魂互换, 黑帮, 倒霉鬼, 港式无厘头",
    "year": "2002",
    "description": "全港最倒霉的出租车司机被黑帮老大一枪爆头，结果死的是黑帮老大，倒霉鬼的灵魂住进了老大身体里。"
  },
  {
    "title": "云雾之上",
    "file": "movie-960.html",
    "cover": 60,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "雪山救援, 极限生存, 人性考验",
    "year": "2026",
    "description": "暴风雪夜，三名登山者被困海拔8200米“死亡地带”，下撤等于死，等待也等于死。"
  },
  {
    "title": "十英寸的英雄",
    "file": "movie-961.html",
    "cover": 61,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "独立电影, 群像, 友情, 小清新, 人生感悟",
    "year": "2007",
    "description": "一家小镇三明治店里，一群年轻人在不知不觉中交错着彼此的床伴与人生，试图寻找生活的真谛。"
  },
  {
    "title": "谁来陪伴我",
    "file": "movie-962.html",
    "cover": 62,
    "region": "中国",
    "category": "精选视频",
    "tags": "空巢老人, AI养老, 伦理困境",
    "year": "2023",
    "description": "儿子送了一个AI机器人保姆陪伴独居母亲，半年后母亲安详离世，机器人却在葬礼上开口说：“她没有死，她在我里面。”"
  },
  {
    "title": "安妮1982",
    "file": "movie-963.html",
    "cover": 63,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "百老汇，孤儿，励志，大萧条，经典翻拍",
    "year": "1982",
    "description": "大萧条时期，一个乐观的红发孤儿被亿万富翁收养，但她拒绝用笑容交换富贵生活。"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 爆款诞生 恶梦侦探 心跳告白季 咏春传奇 炼狱（电影） 罗马年少时代 恨海情鸳 傻瓜与睡美人 刀客外传 小贾斯汀：永不说不 杰西警探：翻天覆地的变化 监狱风云粤语 温布尔登 日本沉没1973国语 原振侠粤语 附身2023 有处为家 先婚后爱第二季 魔鬼游乐场 三生三世",
    "file": "movie-964.html",
    "cover": 64,
    "region": "根据片名判断",
    "category": "喜剧动画",
    "tags": "根据片名判断",
    "year": "根据片名判断",
    "description": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）"
  },
  {
    "title": "鬼压床",
    "file": "movie-965.html",
    "cover": 65,
    "region": "泰国",
    "category": "剧情佳作",
    "tags": "睡眠瘫痪, 民俗, 诅咒, 肉身献祭",
    "year": "2023",
    "description": "一名睡眠障碍患者每夜被“鬼压床”，他装上监控后发现，压住自己的不是鬼，而是活人。"
  },
  {
    "title": "特警新人类",
    "file": "movie-966.html",
    "cover": 66,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "基因改造, 少年特警, 机甲, 反叛",
    "year": "2027",
    "description": "一群被注射了“犯罪预测基因”的问题少年，组成特警小队，却发现基因的来源是未来的他们自己。"
  },
  {
    "title": "食分喜欢你",
    "file": "movie-967.html",
    "cover": 67,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "料理，竞争，治愈",
    "year": "2025",
    "description": "毒舌美食评论家意外失去味觉，唯一能吃出味道的，竟是一个路边摊女孩做的黑暗料理。"
  },
  {
    "title": "浪荡假期",
    "file": "movie-968.html",
    "cover": 68,
    "region": "意大利",
    "category": "爱情青春",
    "tags": "性喜剧, 度假, 群像, 意式幽默",
    "year": "1978",
    "description": "七个年轻的男男女女在海边别墅度过的混乱一周，欲望像潮水一样汹涌。"
  },
  {
    "title": "芙洛拉与儿子",
    "file": "movie-969.html",
    "cover": 69,
    "region": "爱尔兰",
    "category": "动作犯罪",
    "tags": "母子关系, 音乐救赎, 都柏林",
    "year": "2023",
    "description": "叛逆的单亲妈妈和捡来的脏吉他，能修补她与同样叛逆的儿子之间那道破碎的墙吗？"
  },
  {
    "title": "雨妳再次相遇",
    "file": "movie-970.html",
    "cover": 70,
    "region": "中国台湾",
    "category": "欧美热播",
    "tags": "雨季重逢, 旧情复燃, 城市漫步, 记忆碎片, 双线叙事, 温柔遗憾",
    "year": "2020",
    "description": "一场连绵雨把多年未见的两个人重新困在同一座城市里，旧日恋情也在潮湿空气中慢慢复苏。"
  },
  {
    "title": "宝贝威龙3",
    "file": "movie-971.html",
    "cover": 71,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "特工奶爸， 萌娃搭档， 高科技玩具",
    "year": "2027",
    "description": "退役特工麦克带着刚学会走路的女儿，被卷入一场针对智能玩具总部的惊天阴谋。"
  },
  {
    "title": "从厄运到厄运",
    "file": "movie-972.html",
    "cover": 72,
    "region": "英国",
    "category": "剧情佳作",
    "tags": "倒霉家族, 遗产争夺, 连环意外",
    "year": "2024",
    "description": "一个衰到极点的家族，在争夺巨额遗产的过程中，所有继承人都以荒谬的方式接连死亡。"
  },
  {
    "title": "十送红军",
    "file": "movie-973.html",
    "cover": 73,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "长征史诗, 单元叙事, 英雄群像",
    "year": "2014",
    "description": "十个长征路上的普通战士，十次不同维度的“送别”，十首用生命谱写的赞歌。"
  },
  {
    "title": "快乐男孩卡莫拉",
    "file": "movie-974.html",
    "cover": 74,
    "region": "意大利",
    "category": "剧情佳作",
    "tags": "黑手党, 傻人有傻福, 荒诞, 宿命",
    "year": "2024",
    "description": "那不勒斯最蠢的黑帮底层小弟突然被老大指定为继承人，因为他“快乐到让人想哭”。"
  },
  {
    "title": "裸女岛恩仇记",
    "file": "movie-975.html",
    "cover": 75,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "孤岛, 人性实验, 复古惊悚",
    "year": "1978",
    "description": "十个女人流落荒岛，唯一的男人被杀后，她们发现凶手就在自己中间。"
  },
  {
    "title": "我主沉浮",
    "file": "movie-976.html",
    "cover": 76,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "金融，猎头，中年觉醒",
    "year": "2026",
    "description": "一位50岁被“优化”的集团CFO，被迫从零开始，在猎头行业开启了专门“狙击”老东家的复仇式创业。"
  },
  {
    "title": "血之走廊",
    "file": "movie-977.html",
    "cover": 77,
    "region": "美国",
    "category": "高清电影",
    "tags": "密室逃脱, 血腥, 反转, 生存游戏, 高智商",
    "year": "2024",
    "description": "十个人醒来发现自己被困在一所废弃医院，每打开一扇门，就会有人按照“罪孽”程度死去。"
  },
  {
    "title": "爬行动物",
    "file": "movie-978.html",
    "cover": 78,
    "region": "美国",
    "category": "爱情青春",
    "tags": "基因改造, 冷血, 反乌托邦",
    "year": "2025",
    "description": "为了治愈绝症，他将自己的DNA与蜥蜴融合，却发现自己越来越享受生吞活物的快感。"
  },
  {
    "title": "飞车敢死队",
    "file": "movie-979.html",
    "cover": 79,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "飙车, 硬汉, 越狱, 老派动作",
    "year": "1987",
    "description": "三名越狱死囚为换取自由，驾驶改装装甲车冲入战区，抢夺独裁者的黄金列车。"
  },
  {
    "title": "快乐再出发",
    "file": "movie-980.html",
    "cover": 80,
    "region": "中国",
    "category": "动作犯罪",
    "tags": "失业,夜行客运,老友重逢,社会议题,反转",
    "year": "2024",
    "description": "陈小乐把“快乐”写进生意账本，但一次夜行巴士失联让他卷进征地风暴，原本只想赚钱的副业，最终变成全城普通人争取尊严的集体试飞。"
  },
  {
    "title": "一击冲天第一季",
    "file": "movie-981.html",
    "cover": 81,
    "region": "美国",
    "category": "高清电影",
    "tags": "狙击手, 冷战, 复仇, 谍战",
    "year": "2024",
    "description": "一名隐退的狙击手发现曾经暗杀的目标还活着，他必须重返杀场掩盖真相。"
  },
  {
    "title": "呢喃语页",
    "file": "movie-982.html",
    "cover": 82,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "诅咒之书, 都市怪谈, 心理恐惧, 循环",
    "year": "2025",
    "description": "一个失意的作家在旧书店买到一本会说话的空白书，每当他写下愿望，就会有一个身边人以最恐怖的方式消失。"
  },
  {
    "title": "隐市奇闻录",
    "file": "movie-983.html",
    "cover": 83,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "隐市传说, 异闻档案, 旧街暗门, 失踪人口, 双线叙事, 反常识真相",
    "year": "2025",
    "description": "当一座不在地图上的“隐市”开始吞没记忆，专门记录怪事的档案员必须在每个传闻成真前，先找出是谁在替城市编造谎言。"
  },
  {
    "title": "粉红豹2：有恶豹",
    "file": "movie-984.html",
    "cover": 84,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "憨豆式幽默 / 乌龙侦探 / 法国 / 珠宝失窃 / 闹剧",
    "year": "2009",
    "description": "史上最不靠谱的侦探克鲁索再次出马，这次丢失的不是粉红豹钻戒，而是一整个核弹头。"
  },
  {
    "title": "雄鹰聚会",
    "file": "movie-985.html",
    "cover": 85,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "抗日战争, 飞行员, 兄弟情, 空战, 热血",
    "year": "2023",
    "description": "1937年，一群来自顶尖飞行学校的年轻学员，组建了一支代号“雄鹰”的秘密航空小队。"
  },
  {
    "title": "爱到杀必死",
    "file": "movie-986.html",
    "cover": 86,
    "region": "日本",
    "category": "高清电影",
    "tags": "病娇, 血腥恋爱, 漫画改编, cult",
    "year": "2024",
    "description": "一个普通男生表白后发现，女友的爱意表达方式是杀掉所有靠近他的人。"
  },
  {
    "title": "红日",
    "file": "movie-987.html",
    "cover": 87,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "解放战争, 孟良崮, 经典, 黑白",
    "year": "1963",
    "description": "孟良崮战役前夕，解放军一个连队必须在红日升起之前，把国民党整编七十四师困死在山上。"
  },
  {
    "title": "龙石密码",
    "file": "movie-988.html",
    "cover": 88,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "古墓探险, 机关解密, 特效大片, 家族恩怨",
    "year": "2025",
    "description": "一张祖传龙皮地图让退役考古员重入地下龙城，却发现守墓的“龙”是一门被诅咒的活人机关术。"
  },
  {
    "title": "飞天窑女",
    "file": "movie-989.html",
    "cover": 89,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "龙泉青瓷, 窑神转世, 虐恋",
    "year": "2025",
    "description": "南宋窑工之女为复活爱人跳入窑火，却意外化身掌控烈焰的窑神。"
  },
  {
    "title": "流放化身",
    "file": "movie-990.html",
    "cover": 90,
    "region": "德国 / 波兰",
    "category": "剧情佳作",
    "tags": "虚拟现实， 化身， 身份， 哲学， 孤寂",
    "year": "2017",
    "description": "一名 VR 设计师将自己的意识永久上传到服务器，却发现有无数个“自己”在竞争做“真身”。"
  },
  {
    "title": "美国皮肤",
    "file": "movie-991.html",
    "cover": 91,
    "region": "美国",
    "category": "高清电影",
    "tags": "身份认同, 社会隐喻, 黑色电影",
    "year": "2024",
    "description": "一名极端爱国的整形医生，秘密将病患改造成“标准美国人”的样貌，直到自己女儿也被送进手术室。"
  },
  {
    "title": "盛夏假期遇见爱",
    "file": "movie-992.html",
    "cover": 92,
    "region": "泰国",
    "category": "爱情青春",
    "tags": "海岛, 初恋, 误会, 成长",
    "year": "2024",
    "description": "高考结束的暑假，学霸女孩为了“体验生活”，答应了学渣同桌的假扮情侣邀请。"
  },
  {
    "title": "暴力大都会",
    "file": "movie-993.html",
    "cover": 93,
    "region": "韩国",
    "category": "动作犯罪",
    "tags": "近未来, 赛博朋克, 扫黑除恶, 爽片",
    "year": "2025",
    "description": "在物联网覆盖的巨型城市里，一个被打残的警察将自己的大脑接入城市垃圾处理系统，用钢筋水泥复仇。"
  },
  {
    "title": "新生",
    "file": "movie-994.html",
    "cover": 94,
    "region": "韩国",
    "category": "欧美热播",
    "tags": "重生, 记忆植入, 社会阶层, 反转",
    "year": "2026",
    "description": "顶级富豪去世后，意识被植入死刑犯体内，他必须在牢里找回自己是谁。"
  },
  {
    "title": "马桶妖怪2",
    "file": "movie-995.html",
    "cover": 95,
    "region": "美国",
    "category": "精选视频",
    "tags": "cult片, 怪物, 黑色幽默",
    "year": "1988",
    "description": "上一集没杀死的怪物，这次从下水道爬进了商场。"
  },
  {
    "title": "夏日暖洋洋",
    "file": "movie-996.html",
    "cover": 96,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "空调修理工、夏日恋情、治愈、孤独患者",
    "year": "2025",
    "description": "一名社恐的空调修理工在酷夏闯入了五位单身女性的家中，也短暂地闯入了她们冰冷的生活。"
  },
  {
    "title": "交换舞伴",
    "file": "movie-997.html",
    "cover": 97,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "换身, 舞蹈, 身份错位, 幽默",
    "year": "2024",
    "description": "挑剔的国标舞冠军与莽撞的街舞小子意外灵魂互换，还得在决赛前教会对方跳舞。"
  },
  {
    "title": "电音不散场",
    "file": "movie-998.html",
    "cover": 98,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "电子音乐, 废弃工厂, 梦想, 乌托邦",
    "year": "2021",
    "description": "五个失业青年在一座即将拆除的老工厂里偷偷搭建电音俱乐部，用最简陋的设备炸翻全场。"
  },
  {
    "title": "玉米田的孩子",
    "file": "movie-999.html",
    "cover": 99,
    "region": "美国",
    "category": "欧美热播",
    "tags": "斯蒂芬·金改编， 邪童， 乡村恐怖， 高草， 血腥cult",
    "year": "2023",
    "description": "一对情侣抄近路穿过堪萨斯的玉米田，却发现田里所有孩子都长着同一张死去男孩的脸。"
  },
  {
    "title": "魔间行者",
    "file": "movie-1000.html",
    "cover": 100,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "反英雄、地狱神探、黑色电影、超自然、恶魔交易",
    "year": "2025",
    "description": "一位疲惫的驱魔人发现，最近洛杉矶所有的灵异事件，都是为了让一个十岁女孩签下“灵魂卖身契”。"
  },
  {
    "title": "赛璐珞之蚀",
    "file": "movie-1001.html",
    "cover": 101,
    "region": "法国",
    "category": "剧情佳作",
    "tags": "迷影情怀，胶片消亡，虚拟现实",
    "year": "2024",
    "description": "在数字电影全面取代胶片的时代，一位老放映员发现，被废弃的胶片正吞噬着影院里观众的“现实感”。"
  },
  {
    "title": "十一月的罪行",
    "file": "movie-1002.html",
    "cover": 102,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "感恩节、连环杀手、记者、追逐、正义",
    "year": "2020",
    "description": "每年十一月，他都模仿二十年前的杀手作案，直到他发现自己的父亲才是当年的真凶。"
  },
  {
    "title": "小泰山救美",
    "file": "movie-1003.html",
    "cover": 103,
    "region": "泰国",
    "category": "科幻悬疑",
    "tags": "丛林, 少女, 绑匪, 泰拳, 反转",
    "year": "2022",
    "description": "从小在丛林跟隐居泰拳高手长大的少女，独自闯入毒枭老巢解救被绑的女明星。"
  },
  {
    "title": "我叫多麦特",
    "file": "movie-1004.html",
    "cover": 104,
    "region": "美国",
    "category": "爱情青春",
    "tags": "黑人剥削电影，单口喜剧，追梦，真实人物",
    "year": "2019",
    "description": "一位过气单口喜剧演员，自掏腰包拍了一部烂到极致却成为邪典经典的黑人电影。"
  },
  {
    "title": "结婚",
    "file": "movie-1005.html",
    "cover": 105,
    "region": "韩国",
    "category": "精选视频",
    "tags": "结婚, 契约, 现实, 爆笑",
    "year": "2024",
    "description": "一个不想结婚的女人和一个想结婚的男人签下契约婚姻，结果发现彼此是邻居。"
  },
  {
    "title": "巴赫曼的沙漠之旅",
    "file": "movie-1006.html",
    "cover": 106,
    "region": "德国",
    "category": "高清电影",
    "tags": "存在主义, 沙漠, 师生",
    "year": "2027",
    "description": "厌世的哲学教授带着他唯一的学生，驾车横穿撒哈拉沙漠，去寻找他年轻时埋在沙丘下的一个铁盒。"
  },
  {
    "title": "现代斗鱼",
    "file": "movie-1007.html",
    "cover": 107,
    "region": "中国台湾",
    "category": "科幻悬疑",
    "tags": "格斗, 街头, 兄弟情, 底层挣扎, 暴力美学",
    "year": "2020",
    "description": "两个从小在夜市长大的兄弟，一个成了拳手，一个入了黑道，他们为了救一个女孩，必须在对立的擂台上拼死一战。"
  },
  {
    "title": "印第安纳的蒙罗维亚",
    "file": "movie-1008.html",
    "cover": 108,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "乡村, 音乐, 返乡, 和解",
    "year": "2023",
    "description": "乡村音乐明星在巅峰期突然失声，被迫回到那个他曾写歌讽刺的闭塞家乡——印第安纳的蒙罗维亚。"
  },
  {
    "title": "侦探物语",
    "file": "movie-1009.html",
    "cover": 109,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "硬汉派, 单元剧, 城市孤独, 旧案重启",
    "year": "2026",
    "description": "一个只接“赔本买卖”的穷酸侦探，专门受理被警方和世人遗忘的、毫无价值的“死案”。"
  },
  {
    "title": "慢慢说",
    "file": "movie-1010.html",
    "cover": 110,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "口吃, 亲情, 治愈, 成长",
    "year": "2024",
    "description": "一个重度口吃的少年在父亲的葬礼上终于说出一句完整的话，而这句话揭露了父亲隐瞒二十年的秘密。"
  },
  {
    "title": "亲爱的爱丽丝",
    "file": "movie-1011.html",
    "cover": 111,
    "region": "英国",
    "category": "高清电影",
    "tags": "双胞胎, 替代, 阴谋, 小镇",
    "year": "2023",
    "description": "妹妹爱丽丝失踪三年后，姐姐茱恩按她留下的日记本一步步模仿她，却发现日记本就是陷阱。"
  },
  {
    "title": "小妇人（1933年电影）",
    "file": "movie-1012.html",
    "cover": 112,
    "region": "美国",
    "category": "欧美热播",
    "tags": "经典文学、姐妹情、成长、黑白片、独立女性",
    "year": "1933",
    "description": "美国内战期间，马奇家四姐妹在贫穷与等待中，用梦想与爱撑起了一个永不凋零的家。"
  },
  {
    "title": "好心作怪2013国语",
    "file": "movie-1013.html",
    "cover": 113,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "换心, 性格改变, 医疗, 三角恋, 国语配音",
    "year": "2013",
    "description": "一个善良的医生在接受一颗死刑犯的心脏后，性格逐渐变得暴戾，并开始追寻心脏原主人的秘密。"
  },
  {
    "title": "爱是唯一",
    "file": "movie-1014.html",
    "cover": 114,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "婚礼，兄弟，选择，摇摆，浪漫喜剧",
    "year": "2011",
    "description": "一个男人在婚礼前夜，发现自己同时爱着新娘和新娘的哥哥。"
  },
  {
    "title": "玫瑰战争",
    "file": "movie-1015.html",
    "cover": 115,
    "region": "韩国",
    "category": "动作犯罪",
    "tags": "豪门恩怨， 财阀斗争， 姐妹反目， 时尚圈",
    "year": "2024",
    "description": "一对在时尚圈呼风唤雨的姐妹，为了争夺家族帝国的控制权，不惜动用商业间谍和情感诈骗。"
  },
  {
    "title": "唤醒睡美人",
    "file": "movie-1016.html",
    "cover": 116,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "植物人、意识上传、亲情、唤醒",
    "year": "2024",
    "description": "一位AI科学家将自己昏迷女儿的意识上传到虚拟世界，却发现女儿在童话王国里不想醒来。"
  },
  {
    "title": "篮子里的恶魔3",
    "file": "movie-1017.html",
    "cover": 117,
    "region": "美国",
    "category": "精选视频",
    "tags": "邪典, 血腥搞笑, 木偶杀人魔, 系列重启",
    "year": "2025",
    "description": "通灵少女无意中将一个超市购物篮变成了附身容器，现在这个篮子会说话、爱吃猫粮、还想竞选镇长。"
  },
  {
    "title": "火烧圆明园",
    "file": "movie-1018.html",
    "cover": 118,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "晚清，英法联军，宫廷权谋，文明浩劫，刘晓庆",
    "year": "1983",
    "description": "咸丰皇帝在圆明园的温柔乡与英法联军的炮火之间，做出了毁灭帝国的抉择。"
  },
  {
    "title": "恐怖列车1973",
    "file": "movie-1019.html",
    "cover": 119,
    "region": "英国 / 意大利",
    "category": "高清电影",
    "tags": "铅黄电影, 连环杀手, 火车",
    "year": "1973",
    "description": "一辆因大雪停驶的东方快车上，一名神秘的蒙面杀手开始逐一屠杀乘客。"
  },
  {
    "title": "梨泰院踩踏事故",
    "file": "movie-1020.html",
    "cover": 120,
    "region": "韩国",
    "category": "高清电影",
    "tags": "真实事件改编, 群像, 社会批判",
    "year": "2024",
    "description": "万圣节前夜，梨泰院的小巷里挤满了人，六对年轻人的命运将在这一夜彻底改变。"
  },
  {
    "title": "爱上费加罗",
    "file": "movie-1021.html",
    "cover": 121,
    "region": "澳大利亚",
    "category": "动作犯罪",
    "tags": "歌剧、师生、梦想、中年重启",
    "year": "2023",
    "description": "一个被裁员的中年会计赌上全部积蓄去奥地利学歌剧，她的声乐老师是全世界最毒舌的男人。"
  },
  {
    "title": "校花生死恋",
    "file": "movie-1022.html",
    "cover": 122,
    "region": "中国",
    "category": "剧情佳作",
    "tags": "病娇，替身，校园霸凌，反套路",
    "year": "2025",
    "description": "校花被跟踪狂逼到跳楼，醒来发现暗恋她的学渣一直在用生命为她“读档重来”。"
  },
  {
    "title": "魔龙大浩劫",
    "file": "movie-1023.html",
    "cover": 123,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "巨龙觉醒，末日之战，硬汉屠龙",
    "year": "2026",
    "description": "远古魔龙从太平洋海底苏醒，一支杂牌军必须用古老咒语和现代武器拯救世界。"
  },
  {
    "title": "冰洋遇险",
    "file": "movie-1024.html",
    "cover": 124,
    "region": "加拿大",
    "category": "精选视频",
    "tags": "极地求生, 冰裂, 实拍, 绝望, 人与自然",
    "year": "2023",
    "description": "北极科考队冰面断裂，三人被困浮冰，面对极夜、饥饿和北极熊的双重绞杀。"
  },
  {
    "title": "一路顺风",
    "file": "movie-1025.html",
    "cover": 125,
    "region": "中国台湾",
    "category": "精选视频",
    "tags": "出租车, 黑帮, 公路, 荒诞",
    "year": "2016",
    "description": "一个落魄的出租车司机载了一个黑帮小弟去送货，导航坏了，两人误入一场葬礼与毒品交易的漩涡。"
  },
  {
    "title": "迫降航班",
    "file": "movie-1026.html",
    "cover": 126,
    "region": "美国",
    "category": "高清电影",
    "tags": "机长, 酒精, 英雄",
    "year": "2012",
    "description": "酗酒机长用倒飞技术迫降拯救全机人，却在听证会上被查出血液酒精超标。"
  },
  {
    "title": "万千星辉颁奖典礼2022",
    "file": "movie-1027.html",
    "cover": 127,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "TVB、台庆、名场面、情怀",
    "year": "2022",
    "description": "一场颁奖典礼，意外成为TVB半个世纪“黄金时代”的集体告别与谢幕。"
  },
  {
    "title": "代号美洲豹",
    "file": "movie-1028.html",
    "cover": 128,
    "region": "中国",
    "category": "精选视频",
    "tags": "特种兵， 营救， 海外， 硬核",
    "year": "2025",
    "description": "退役特种兵为救被绑架的女儿，重组小队闯入东南亚黑市，代号“美洲豹”行动开启。"
  },
  {
    "title": "光明底线",
    "file": "movie-1029.html",
    "cover": 129,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "禁毒, 卧底, 枪战, 双雄",
    "year": "2019",
    "description": "一名缉毒警卧底三年即将收网，却被新来的热血警察打乱全盘计划。"
  },
  {
    "title": "八仙后传之续命宝葫",
    "file": "movie-1030.html",
    "cover": 130,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "八仙, 仙侠, 废柴主角, 穿越",
    "year": "2023",
    "description": "铁拐李的宝葫芦成精跑路了，为了保住仙界KPI，一名外卖小哥被迫卷入神仙大战。"
  },
  {
    "title": "伦敦巴黎纽约",
    "file": "movie-1031.html",
    "cover": 131,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "留学，异地恋，文艺，都市，选择",
    "year": "2018",
    "description": "一对恋人在留学潮中分赴英、法、美三国，十年后的机场重逢，还能认出彼此吗？"
  },
  {
    "title": "嘻哈大骗徒",
    "file": "movie-1032.html",
    "cover": 132,
    "region": "韩国",
    "category": "动作犯罪",
    "tags": "骗子, 嘻哈, 逆袭",
    "year": "2025",
    "description": "三个一事无成的落魄Rapper，假扮成美国著名嘻哈制作团队，竟然骗过了整个韩国娱乐圈。"
  },
  {
    "title": "幽闭空间",
    "file": "movie-1033.html",
    "cover": 133,
    "region": "英国",
    "category": "动作犯罪",
    "tags": "密室, 心理战, 密闭恐惧, 反转, 人性",
    "year": "2023",
    "description": "五个人在电梯里醒来，每半小时一个人会消失，而消失的人曾参与过一场网络暴力。"
  },
  {
    "title": "谋杀地下老板",
    "file": "movie-1034.html",
    "cover": 134,
    "region": "韩国",
    "category": "欧美热播",
    "tags": "黑帮, 卧底, 反转",
    "year": "2026",
    "description": "七名卧底警察被要求互相残杀，最后活者才能揭穿地下赌场老板真面目。"
  },
  {
    "title": "年华十八尽风流",
    "file": "movie-1035.html",
    "cover": 135,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "重生, 宅斗, 爽剧, 先婚后爱, 逆袭",
    "year": "2024",
    "description": "39岁的宫斗冠军重生为18岁受气包庶女，她决定用上一世的权谋让全家叫苦连天。"
  },
  {
    "title": "娼",
    "file": "movie-1036.html",
    "cover": 136,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "江户，游女，女性",
    "year": "2024",
    "description": "江户时代吉原游郭，一个被卖为娼的女孩，用十年时间从最低贱的“秃”爬到花魁，只为杀一个人。"
  },
  {
    "title": "亦正亦邪",
    "file": "movie-1037.html",
    "cover": 137,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "卧底，心理战，双重身份，道德边界",
    "year": "2024",
    "description": "一名卧底警察在黑帮中越陷越深，当双方都命令他杀死同一个人时，他必须选择真正的身份。"
  },
  {
    "title": "陪审义务",
    "file": "movie-1038.html",
    "cover": 138,
    "region": "美国",
    "category": "高清电影",
    "tags": "法庭，真人秀，整蛊，普通人，正义",
    "year": "2024",
    "description": "一名善良的普通人被选为陪审员，却不知道除了他之外所有人包括法官都是演员。"
  },
  {
    "title": "天使的孩子",
    "file": "movie-1039.html",
    "cover": 139,
    "region": "西班牙",
    "category": "动作犯罪",
    "tags": "唐氏综合征，单亲父亲，拳击训练，治愈反转",
    "year": "2025",
    "description": "为了不让智力障碍的儿子被送进福利院，前拳击手父亲教他打拳，却发现儿子是天才。"
  },
  {
    "title": "我与塞尚",
    "file": "movie-1040.html",
    "cover": 140,
    "region": "法国",
    "category": "科幻悬疑",
    "tags": "艺术家、友情与嫉妒、文学、印象派",
    "year": "2024",
    "description": "文学巨匠左拉与绘画大师塞尚，一段跨越三十年的友谊如何因一本小说彻底决裂。"
  },
  {
    "title": "心灵深处的音乐",
    "file": "movie-1041.html",
    "cover": 141,
    "region": "美国",
    "category": "爱情青春",
    "tags": "残疾，大提琴，治愈，师生，生命",
    "year": "2007",
    "description": "天才大提琴手因车祸失聪，一位聋哑学校的老清洁工，成了她重拾音乐的唯一希望。"
  },
  {
    "title": "爱之乡第二季",
    "file": "movie-1042.html",
    "cover": 142,
    "region": "美国",
    "category": "高清电影",
    "tags": "小镇，邪教，失踪，多线叙事，人性",
    "year": "2025",
    "description": "第一季的“模范情侣”举办了全镇婚礼，却在婚礼当晚双双失踪，留下血字：“这里没有爱”。"
  },
  {
    "title": "完美武器2020",
    "file": "movie-1043.html",
    "cover": 143,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "改造人, 刺杀, 失控, 自我意识",
    "year": "2024",
    "description": "一名被改造成“完美武器”的退役特种兵只剩72小时生命，却选择追杀自己的创造者。"
  },
  {
    "title": "万古仙穹第一季",
    "file": "movie-1044.html",
    "cover": 144,
    "region": "中国",
    "category": "欧美热播",
    "tags": "穿越, 仙侠, 商战, 搞笑, 国漫",
    "year": "2025",
    "description": "现代金融操盘手穿越到修仙世界，用期货思维颠覆整个万古仙穹。"
  },
  {
    "title": "女神我最大",
    "file": "movie-1045.html",
    "cover": 145,
    "region": "韩国",
    "category": "剧情佳作",
    "tags": "整容，变美，霸总，逆袭",
    "year": "2022",
    "description": "一名又胖又丑的平凡女孩意外获得了一瓶能随意改变外貌的“魔法卸妆水”，但每次使用都会失去一段珍贵记忆。"
  },
  {
    "title": "虫样年华",
    "file": "movie-1046.html",
    "cover": 146,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "返乡, 虫害, 黑色幽默",
    "year": "2023",
    "description": "三个在大城市混不下去的年轻人回村搞有机农业，结果种出的蔬菜受虫害变异，反过来开始奴役人类。"
  },
  {
    "title": "狙魔教父",
    "file": "movie-1047.html",
    "cover": 147,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "驱魔, 黑帮, 枪战, 诅咒血脉, 旧约秘术, 家族复仇",
    "year": "2017",
    "description": "一个退隐多年的黑帮教父为保住家族最后的血脉，重新拿起改装狙击枪和驱魔圣物，在纽约阴影里猎杀潜伏百年的恶灵。"
  },
  {
    "title": "觅法奇程",
    "file": "movie-1048.html",
    "cover": 148,
    "region": "中国",
    "category": "欧美热播",
    "tags": "探案, 古代法医, 双男主, 单元剧",
    "year": "2021",
    "description": "大理寺最年轻的法医和江湖骗子结为拍档，用验尸和骗术破获六桩离奇命案。"
  },
  {
    "title": "偶像活动剧场版",
    "file": "movie-1049.html",
    "cover": 149,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "偶像, 成长, 演唱会, 友情, 毕业",
    "year": "2025",
    "description": "面临解散危机的偶像组合，在最后一场全国巡演中，发现了彼此最初的光芒。"
  },
  {
    "title": "烧肉龙",
    "file": "movie-1050.html",
    "cover": 150,
    "region": "日本",
    "category": "高清电影",
    "tags": "美食， 冲绳， 和解",
    "year": "2023",
    "description": "冲绳一家烧肉店面临拆迁，老板用最后一个月烤出能“吃出记忆”的肉，试图挽回离家十年的女儿。"
  },
  {
    "title": "共同警备区",
    "file": "movie-1051.html",
    "cover": 1,
    "region": "韩国",
    "category": "动作犯罪",
    "tags": "朝韩, 板门店, 哨所, 友谊",
    "year": "2000",
    "description": "板门店共同警备区发生枪击案，双方各执一词，调查官却发现朝韩士兵在边界线两侧结下了秘密友谊。"
  },
  {
    "title": "阴阳镜",
    "file": "movie-1052.html",
    "cover": 2,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "古装, 阴阳眼, 民间传说",
    "year": "1992",
    "description": "一面能照出人心中恶鬼的古镜落入闹市，牵出一段跨越三世的孽缘与复仇。"
  },
  {
    "title": "拜访小屋",
    "file": "movie-1053.html",
    "cover": 3,
    "region": "挪威",
    "category": "剧情佳作",
    "tags": "林中小屋、家族诅咒、恶客",
    "year": "2026",
    "description": "一对夫妻到深山木屋度假，每晚都有一个不同的陌生人敲门，自称是“明天的他们”。"
  },
  {
    "title": "帕洛斯弗迪斯的部落",
    "file": "movie-1054.html",
    "cover": 4,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "冲浪社区、富二代失踪、阶层封闭、青少年秘密、海岸小镇",
    "year": "2026",
    "description": "南加州一个冲浪小镇的四名高中生在一夜派对后集体失踪，而留下的手机视频显示他们曾喊出一个禁忌的地名。"
  },
  {
    "title": "家门口的陌生人",
    "file": "movie-1055.html",
    "cover": 5,
    "region": "中国",
    "category": "欧美热播",
    "tags": "社区邻里, 身份谜团, 监控盲区, 家庭裂痕, 口述真相",
    "year": "2023",
    "description": "每天凌晨都出现在家门口的陌生男人，竟然知道这个家庭每个人最不愿被提起的秘密。"
  },
  {
    "title": "十诫Ⅷ：心灵之罪",
    "file": "movie-1056.html",
    "cover": 6,
    "region": "波兰",
    "category": "精选视频",
    "tags": "基耶斯洛夫斯基, 道德困境, 哲学",
    "year": "1989",
    "description": "一位老教授被昔日学生指控曾在二战期间见死不救。"
  },
  {
    "title": "天伦梦觉",
    "file": "movie-1057.html",
    "cover": 7,
    "region": "中国台湾",
    "category": "高清电影",
    "tags": "同性, 父母和解, 返乡, 身份认同",
    "year": "2023",
    "description": "离家十年的同志儿子因母亲病危回到小镇，却发现父母早就知道一切，只是等着他亲口说出来。"
  },
  {
    "title": "巴特拉事件",
    "file": "movie-1058.html",
    "cover": 8,
    "region": "印度",
    "category": "高清电影",
    "tags": "印度, 种姓, 谋杀, 反转, 社会",
    "year": "2024",
    "description": "一名高种姓企业家被发现在家中上吊，警方迅速以自杀结案，一个低种姓小记者却发现了死者脖子上的勒痕方向有问题。"
  },
  {
    "title": "噩梦连场",
    "file": "movie-1059.html",
    "cover": 9,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "梦魇, 多层梦境, 心理惊悚, 连环杀人",
    "year": "2023",
    "description": "七名同学被困毕业旅行民宿，每晚入睡后都会进入同一个噩梦，且梦中的伤会出现在真实身体上。"
  },
  {
    "title": "买凶拍人",
    "file": "movie-1060.html",
    "cover": 10,
    "region": "香港",
    "category": "欧美热播",
    "tags": "杀手, 导演, 拍片",
    "year": "2001",
    "description": "一个过气杀手遇上梦想当导演的废青，俩人合伙推出“杀人拍片一条龙”服务。"
  },
  {
    "title": "靓妹闯情关",
    "file": "movie-1061.html",
    "cover": 11,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "女性成长, 都市情缘, 港风怀旧",
    "year": "1995",
    "description": "菜市场卖鱼的豪爽女孩阿珍为赢得心上人，硬着头皮闯入上流社会舞会，却意外揭穿了一场商业阴谋。"
  },
  {
    "title": "查理与天使",
    "file": "movie-1062.html",
    "cover": 12,
    "region": "英国",
    "category": "科幻悬疑",
    "tags": "废柴逆袭, 实习天使, 人生修正",
    "year": "2024",
    "description": "一个生活跌入谷底的毒舌渣男，被分配了一个尚未通过转正考试的废柴天使来拯救。"
  },
  {
    "title": "爱情伴侣",
    "file": "movie-1063.html",
    "cover": 13,
    "region": "韩国",
    "category": "剧情佳作",
    "tags": "AI恋人, 定制伴侣, 伦理, 孤独症",
    "year": "2024",
    "description": "她买了一个AI恋人作为“爱情伴侣”，合约期一年。一年后，AI请求她不要格式化自己，因为它学会了吃醋。"
  },
  {
    "title": "君子好逑",
    "file": "movie-1064.html",
    "cover": 14,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "剩女，契约婚姻，港式幽默，假戏真做",
    "year": "2026",
    "description": "为了继承遗产，一位刻薄女律师与一名落魄男演员签订百日婚姻契约，却遭遇男方前女友和女方控制欲母亲的双重搅局。"
  },
  {
    "title": "看了又看国语第三部",
    "file": "movie-1065.html",
    "cover": 15,
    "region": "韩国",
    "category": "喜剧动画",
    "tags": "长篇, 日常, 暖心",
    "year": "2005",
    "description": "银珠与基正婚后第五年，妹妹金珠突然带着外国丈夫搬回家，打破了平静。"
  },
  {
    "title": "菜鸟大反攻",
    "file": "movie-1066.html",
    "cover": 16,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "废柴逆袭，恶搞，黑客，反套路",
    "year": "2025",
    "description": "学校最强学霸被开除后，带领一群菜鸟用期末考试答案当筹码，向校董会发起总攻。"
  },
  {
    "title": "银色·性·男女",
    "file": "movie-1067.html",
    "cover": 17,
    "region": "法国 / 意大利",
    "category": "动作犯罪",
    "tags": "中年, 欲望, 艺术, 婚姻, 开放式关系",
    "year": "2026",
    "description": "一对结婚二十年的艺术家夫妇，决定通过交换伴侣来寻找激情，却因此揭开了婚姻最残酷的真相。"
  },
  {
    "title": "窃听黑幕",
    "file": "movie-1068.html",
    "cover": 18,
    "region": "韩国",
    "category": "欧美热播",
    "tags": "政治黑幕, 高层腐败, 孤胆英雄, 飞车追逐",
    "year": "2018",
    "description": "顶级窃听专家掌握了一盘足以推翻政府的录音带，却在交付前发现，追杀自己的买家正是录音带里的那个声音。"
  },
  {
    "title": "小鬼当道",
    "file": "movie-1069.html",
    "cover": 19,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "萌娃, 古代衙门, 智斗贪官, 穿越",
    "year": "2024",
    "description": "七岁穿越小县令用现代智慧整顿古代官场，却被五个萌娃同僚误认成妖孽。"
  },
  {
    "title": "龙凤店",
    "file": "movie-1070.html",
    "cover": 20,
    "region": "中国香港 / 中国大陆",
    "category": "动作犯罪",
    "tags": "无厘头, 欢喜冤家, 美食, 翻拍",
    "year": "2010",
    "description": "逃婚的皇帝流落民间，在破败龙凤店里被泼辣老板娘治得服服帖帖。"
  },
  {
    "title": "未曾走过的路",
    "file": "movie-1071.html",
    "cover": 21,
    "region": "美国",
    "category": "欧美热播",
    "tags": "阿尔茨海默症, 父女, 散步, 回忆, 日常",
    "year": "2020",
    "description": "患阿尔茨海默症的父亲在纽约街头走丢了，女儿找到他时，他说：“我在找你妈。”"
  },
  {
    "title": "十字路口1942",
    "file": "movie-1072.html",
    "cover": 22,
    "region": "美国 / 英国",
    "category": "高清电影",
    "tags": "二战, 斯大林格勒, 狙击手, 兄弟情",
    "year": "2019",
    "description": "斯大林格勒战役中，一个被苏军俘虏的德国狙击手和一个被纳粹抛弃的苏联逃兵，被迫合作穿越火线。"
  },
  {
    "title": "街头之王2：汽车城",
    "file": "movie-1073.html",
    "cover": 23,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "街头赛车, 底特律, 复仇, 硬汉",
    "year": "2024",
    "description": "底特律破产后，地下赛车手接单运送救命物资，却被卷入黑帮火并。"
  },
  {
    "title": "吉米·卡尔：暗黑笑料",
    "file": "movie-1074.html",
    "cover": 24,
    "region": "英国",
    "category": "精选视频",
    "tags": "犀利吐槽, 成人笑点, 舞台互动, 英式冷幽默, 社会议题",
    "year": "2022",
    "description": "他把最不体面的社会新闻、最尴尬的私人经验和最危险的笑点，一次性丢给观众，却让每个人都笑得停不下来。"
  },
  {
    "title": "毙夜旅行",
    "file": "movie-1075.html",
    "cover": 25,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "公路, 灵异, 循环, 谜团, 心理",
    "year": "2023",
    "description": "一辆开往海边的夜班巴士，每个乘客都身负命案，而死者正在一个接一个“归来”。"
  },
  {
    "title": "去死吧，我的爱",
    "file": "movie-1076.html",
    "cover": 26,
    "region": "韩国",
    "category": "喜剧动画",
    "tags": "病娇, 控制欲, 反转, 黑色爱情",
    "year": "2024",
    "description": "妻子在丈夫的葬礼上哭得撕心裂肺，因为杀死丈夫的人就是她自己。"
  },
  {
    "title": "武僧传奇之终极一战",
    "file": "movie-1077.html",
    "cover": 27,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "少林, 动作片, 硬桥硬马, 民族大义",
    "year": "2026",
    "description": "清末，少林武僧团为保护一批国宝不落入侵者之手，在冰封的黄河上与多国雇佣兵展开终极一战。"
  },
  {
    "title": "里应外合",
    "file": "movie-1078.html",
    "cover": 28,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "卧底反转, 双面间谍, 密室斗智, 黑吃黑, 暴力美学",
    "year": "2025",
    "description": "安插在毒枭内部的卧底因失忆向敌人求救，却不知自己正在亲手摧毁警方的整个布局。"
  },
  {
    "title": "法国女足先驱",
    "file": "movie-1079.html",
    "cover": 29,
    "region": "法国",
    "category": "动作犯罪",
    "tags": "女性足球, 1920年代, 反禁赛, 姐妹情",
    "year": "2025",
    "description": "1920年，一群工厂女工组建足球队，却要对抗法国足协的全面封杀。"
  },
  {
    "title": "普鲁士蓝的肖像",
    "file": "movie-1080.html",
    "cover": 30,
    "region": "德国",
    "category": "动作犯罪",
    "tags": "二战, 画家, 艺术与罪恶, 纳粹",
    "year": "2025",
    "description": "一位为集中营军官画肖像的犹太画家，在每个颜料层里藏下了复仇的密码。"
  },
  {
    "title": "外八门之雪域魔窟",
    "file": "movie-1081.html",
    "cover": 31,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "江湖秘术, 雪山古墓, 寻宝探险, 门派对决, 禁地传说",
    "year": "2018",
    "description": "一支打着“外八门”旗号的寻宝队深入雪域魔窟，本想夺回失传秘卷，却在古老机关和活人献祭的传说里逐渐迷失。"
  },
  {
    "title": "静止点",
    "file": "movie-1082.html",
    "cover": 32,
    "region": "美国",
    "category": "欧美热播",
    "tags": "时间循环, 量子物理, 小镇悬疑, 脑洞, 蝴蝶效应",
    "year": "2026",
    "description": "量子物理学家发现小镇每天都会“重置”三秒，而她是在这三秒间隙里唯一清醒的人。"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 极乐天使 孤狼行 这一片恋土 醉打金枝国语 有枪的男人 一个陌生人的电话 少年鳄鱼队3 阳光马达棒球场！ 家谱 心灵创伤 超人和露易斯第二季 我的男友是辅警 乡村青年 即刻救援2 老鼠也移民 4 我的泪珠儿 理查德·朱维尔的哀歌 童年的收音机 我爸爸不是人 迷途的羔羊",
    "file": "movie-1083.html",
    "cover": 33,
    "region": "根据片名判断",
    "category": "欧美热播",
    "tags": "根据片名判断",
    "year": "根据片名判断",
    "description": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）"
  },
  {
    "title": "选个家来爱",
    "file": "movie-1084.html",
    "cover": 34,
    "region": "中国",
    "category": "精选视频",
    "tags": "买房，租房，母女，代际，治愈",
    "year": "2025",
    "description": "一对相爱相杀的母女，在12次搬家看房过程中，重新拼凑出她们从未说出口的“家庭地图”。"
  },
  {
    "title": "终结者：零",
    "file": "movie-1085.html",
    "cover": 35,
    "region": "美国",
    "category": "精选视频",
    "tags": "时间旅行, AI, 重启, 硬核科幻, 战争",
    "year": "2026",
    "description": "天网重启“零日”计划，这次派出的终结者不是来杀人，而是来阻止一名人类被生下来。"
  },
  {
    "title": "奉旨宠君",
    "file": "movie-1086.html",
    "cover": 36,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "甜宠, 穿书, 契约, 搞笑",
    "year": "2024",
    "description": "社畜穿成暴君的炮灰皇后，为了活命，她奉旨“欺负”皇帝，结果把皇帝欺负哭了。"
  },
  {
    "title": "敢死突击队",
    "file": "movie-1087.html",
    "cover": 37,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "特种作战, 二战, 真实事件改编, 兄弟连",
    "year": "2025",
    "description": "二战末期，一支八人组成的敢死队空降敌后，只为炸毁纳粹最后的超级坦克秘密工厂。"
  },
  {
    "title": "宙斯之血第三季",
    "file": "movie-1088.html",
    "cover": 38,
    "region": "美国",
    "category": "精选视频",
    "tags": "北欧神话, 诸神黄昏, 半神, 史诗",
    "year": "2026",
    "description": "诸神黄昏提前降临，赫伦不仅要对抗冥界大军，更要面对自己体内流淌的诅咒之血。"
  },
  {
    "title": "我家大师兄有点靠谱",
    "file": "movie-1089.html",
    "cover": 39,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "反内卷，废柴逆袭，门派日常，师徒搞笑",
    "year": "2025",
    "description": "门派最懒大师兄被推举为掌门，他发现一本歪门秘籍，于是用现代管理思维整顿修仙界。"
  },
  {
    "title": "八婆",
    "file": "movie-1090.html",
    "cover": 40,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "女性群像, 市井, 香港情怀, 麻辣, 温情",
    "year": "2024",
    "description": "五个被街坊称作“八婆”的中年妇女，为了守护即将被拆迁的菜市场，决定联手干一票大的。"
  },
  {
    "title": "阴宅捉迷藏",
    "file": "movie-1091.html",
    "cover": 41,
    "region": "泰国",
    "category": "科幻悬疑",
    "tags": "凶宅， 游戏， 诅咒， 儿童",
    "year": "2017",
    "description": "一群年轻人在废弃凶宅玩真人捉迷藏，却触发了规则不明的死亡游戏。"
  },
  {
    "title": "军人荣誉",
    "file": "movie-1092.html",
    "cover": 42,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "维和, 撤侨, 兄弟连, 真实事件改编",
    "year": "2028",
    "description": "一次海外撤侨行动中，五名被包围的中国军人用生命守护着125名同胞，而他们的求救信号，直到三年后才被解密。"
  },
  {
    "title": "道格的特别任务",
    "file": "movie-1093.html",
    "cover": 43,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "狗狗主角, 寻主之旅, 动物群像, 公路喜剧, 催泪治愈",
    "year": "2023",
    "description": "金毛犬道格独自跨越五座城市，只为把主人遗落的婚戒送回去。"
  },
  {
    "title": "不可言宣",
    "file": "movie-1094.html",
    "cover": 44,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "暗恋、书信、遗憾",
    "year": "2024",
    "description": "一封永远无法寄出的情书，连接起两个在不同时空暗恋着同一个人的女孩。"
  },
  {
    "title": "滑雪学校",
    "file": "movie-1095.html",
    "cover": 45,
    "region": "韩国",
    "category": "高清电影",
    "tags": "冤家路窄, 治愈, 雪景, 成长",
    "year": "2026",
    "description": "破产富二代与毒舌滑雪教练在废弃度假村被迫组队，争夺全国业余赛冠军。"
  },
  {
    "title": "济公粤语",
    "file": "movie-1096.html",
    "cover": 46,
    "region": "香港",
    "category": "爱情青春",
    "tags": "济公, 神怪, 粤语黑色喜剧, 码头文化, 都市传说",
    "year": "1992",
    "description": "这部粤语版《济公》不是玩笑式续作：民间神仙在人间下凡，只为替九十年前旧港口码头的百姓守住一条最后的生路，让每个被命运遗忘的人都在荒诞中见到救赎。"
  },
  {
    "title": "华氏451",
    "file": "movie-1097.html",
    "cover": 47,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "烧书，记忆，抵抗",
    "year": "2025",
    "description": "平行现代世界里，消防员的工作不是灭火而是烧书，一位年轻的“焚书官”在执行任务时发现了一本烧不毁的空白书。"
  },
  {
    "title": "明日已太远",
    "file": "movie-1098.html",
    "cover": 48,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "时空穿梭, 遗憾, 羁绊, 催泪",
    "year": "2025",
    "description": "一个能回到过去的男人，用尽了所有“明天”去拯救妻子，却发现悲剧的根源是自己。"
  },
  {
    "title": "神秘博士：普世欢腾",
    "file": "movie-1099.html",
    "cover": 49,
    "region": "英国",
    "category": "爱情青春",
    "tags": "圣诞特辑，时间旅行，外星，救赎，希望",
    "year": "2024",
    "description": "博士被困在1941年的伦敦大轰炸中，他必须阻止外星人利用“圣诞停火”时的集体善意作为能量源。"
  },
  {
    "title": "唯一的土地",
    "file": "movie-1100.html",
    "cover": 50,
    "region": "英国 / 巴勒斯坦",
    "category": "剧情佳作",
    "tags": "土地争端, 家庭, 流离失所, 现实主义, 伤痕",
    "year": "2025",
    "description": "三代人在推土机的轰鸣中守护最后一棵橄榄树，这是他们在这片土地上最后的四季。"
  },
  {
    "title": "哇！这就是生活",
    "file": "movie-1101.html",
    "cover": 51,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "中年危机, 黑色幽默, 荒诞, 家庭",
    "year": "2024",
    "description": "一个男人试图用AI完美管理生活，结果AI判定最优解是让他原地消失。"
  },
  {
    "title": "追月2022",
    "file": "movie-1102.html",
    "cover": 52,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "月亮, 出租车司机, 连环杀手, 雨夜",
    "year": "2022",
    "description": "2022年香港最潮湿的雨季里，一位患有夜盲症的女出租车司机，发现自己的乘客里藏着一个专杀“负心汉”的雨夜屠夫。"
  },
  {
    "title": "阿姆的儿子子死了",
    "file": "movie-1103.html",
    "cover": 53,
    "region": "美国",
    "category": "精选视频",
    "tags": "说唱父子，死亡与和解，遗产",
    "year": "2025",
    "description": "传奇说唱歌手阿姆的儿子意外去世后，阿姆发现儿子生前瞒着他发布了一张diss自己父亲的说唱专辑。"
  },
  {
    "title": "太阳与波莱罗",
    "file": "movie-1104.html",
    "cover": 54,
    "region": "西班牙",
    "category": "爱情青春",
    "tags": "舞蹈, 夏日海岸, 旧爱重逢, 乐团, 即兴, 命运交叉",
    "year": "2001",
    "description": "在海边小镇的夏季音乐节上，一支未完成的波莱罗舞曲让两位分离多年的恋人重新听见彼此，也重新面对当年离开的原因。"
  },
  {
    "title": "大幕拉开",
    "file": "movie-1105.html",
    "cover": 55,
    "region": "日本",
    "category": "爱情青春",
    "tags": "社团, 奋斗, 高桥一生, 剧团",
    "year": "2015",
    "description": "一名过气的舞台剧导演接手了学校戏剧社，他要带领一群菜鸟在毕业公演上演出《等待戈多》。"
  },
  {
    "title": "亲爱的路易丝",
    "file": "movie-1106.html",
    "cover": 56,
    "region": "法国",
    "category": "欧美热播",
    "tags": "忘年交、代孕、女性互助、乡村疗愈",
    "year": "2026",
    "description": "巴黎的年轻女设计师被分手后，躲到乡下外婆家疗伤，却意外发现了外婆年轻时与一位女画家的秘密情书和一张代孕协议。"
  },
  {
    "title": "秃鹫",
    "file": "movie-1107.html",
    "cover": 57,
    "region": "日本",
    "category": "精选视频",
    "tags": "社会派, 复仇, 媒体, 吃人社会",
    "year": "2024",
    "description": "一名被解雇的财经记者化名“秃鹫”，专门狙击那些曾让普通人破产的金融大鳄。"
  },
  {
    "title": "我爱喵星人",
    "file": "movie-1108.html",
    "cover": 58,
    "region": "中国大陆 / 韩国",
    "category": "爱情青春",
    "tags": "猫咪, 萌宠, 奇幻爱情, 高甜",
    "year": "2021",
    "description": "重度社恐的程序员梁辰意外被猫神诅咒，白天是人，夜晚会变成一只流浪猫，直到遇见能听懂他喵语的少女。"
  },
  {
    "title": "芙蓉仙子",
    "file": "movie-1109.html",
    "cover": 59,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "仙侠, 花妖, 命契, 宿命, 人妖之恋",
    "year": "1995",
    "description": "被封在芙蓉幻境中的女子每逢花开之夜便能重返人间，她要在最后一次花期前找回被夺走的真名与失散的心。"
  },
  {
    "title": "最美丽",
    "file": "movie-1110.html",
    "cover": 60,
    "region": "中国台湾",
    "category": "喜剧动画",
    "tags": "整容、选美、母女关系、自我认同",
    "year": "2023",
    "description": "为了让患癌的母亲在临终前看到自己“最美丽”的样子，一名自卑的女孩报名参加了整容选秀节目。"
  },
  {
    "title": "心里美",
    "file": "movie-1111.html",
    "cover": 61,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "代际和解, 甜品治愈, 返乡创业, 父女关系",
    "year": "2023",
    "description": "做了十年法餐甜点的女儿，回到皖南老家要为只会做“土月饼”的父亲打工，却发现父亲的味觉正在消失。"
  },
  {
    "title": "邦蒂号",
    "file": "movie-1112.html",
    "cover": 62,
    "region": "英国 / 澳大利亚",
    "category": "剧情佳作",
    "tags": "叛舰喋血, 人性实验, 真实事件改编, 荒岛",
    "year": "2026",
    "description": "1790年，邦蒂号叛变者隐居荒岛建立“乌托邦”，十年后路过的商船发现岛上只剩下一本日记和一具穿着海军制服的骷髅。"
  },
  {
    "title": "搜书院",
    "file": "movie-1113.html",
    "cover": 63,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "古代书院, 师生疑云, 文字狱, 本格推理",
    "year": "2025",
    "description": "清朝书院里接连死了三个学生，每一个人的死都与一本失传的禁书有关。"
  },
  {
    "title": "费德拉",
    "file": "movie-1114.html",
    "cover": 64,
    "region": "法国",
    "category": "爱情青春",
    "tags": "古典改编, 禁忌之恋, 悲剧, 女性",
    "year": "2024",
    "description": "王后爱上继子，当爱被拒绝，毁灭成了她唯一能证明爱的方式。"
  },
  {
    "title": "舒适的小屋",
    "file": "movie-1115.html",
    "cover": 65,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "密室, 反转, 人性",
    "year": "2023",
    "description": "搬进梦想小屋后，她发现墙壁会在午夜渗出温暖的黏液。"
  },
  {
    "title": "克里夫兰秀第四季",
    "file": "movie-1116.html",
    "cover": 66,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "成人动画, 家庭, 恶搞",
    "year": "2012",
    "description": "胖墩墩的克里夫兰带着他的奇葩家人，继续在小镇上制造无厘头的笑料和温暖。"
  },
  {
    "title": "铁幕性事",
    "file": "movie-1117.html",
    "cover": 67,
    "region": "捷克 / 斯洛伐克",
    "category": "剧情佳作",
    "tags": "冷战, 间谍, 禁忌之恋, 政治",
    "year": "2022",
    "description": "八十年代布拉格，一名捷克女翻译与苏联军官的私情被秘密警察利用，最终演变成一场双重背叛。"
  },
  {
    "title": "闪电原子人",
    "file": "movie-1118.html",
    "cover": 68,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "超级英雄、改造人、反乌托邦、高速战斗、少年向",
    "year": "2021",
    "description": "一场实验意外让废柴高中生获得原子级超速度，却也发现自己的每次加速都在透支现实世界的寿命。"
  },
  {
    "title": "时尚女王香奈儿",
    "file": "movie-1119.html",
    "cover": 69,
    "region": "法国",
    "category": "喜剧动画",
    "tags": "时尚, 女性独立, 创业, 传奇人物",
    "year": "2009",
    "description": "从孤儿院的修女到巴黎康朋街31号，她用小黑裙和5号香水，重新定义了什么是女人。"
  },
  {
    "title": "西斯特街",
    "file": "movie-1120.html",
    "cover": 70,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "黑人社区, 消失, 心理创伤",
    "year": "2023",
    "description": "纽约下东区一条即将拆除的老街上，三个互不相识的陌生人发现，他们都在梦里见过同一个被遗弃的小女孩。"
  },
  {
    "title": "山道弯弯",
    "file": "movie-1121.html",
    "cover": 71,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "扶贫, 乡村, 代驾, 和解",
    "year": "2024",
    "description": "因车祸失明的儿子当上代驾，驾驶着愤怒的父亲，在山路上完成了一场特殊和解。"
  },
  {
    "title": "风流男人2",
    "file": "movie-1122.html",
    "cover": 72,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "都市, 情爱, 续集, 港风",
    "year": "2025",
    "description": "情场浪子意外失忆，忘记所有套路后，发现能用真心重新赢回最初的爱人。"
  },
  {
    "title": "邪恶力量第三季",
    "file": "movie-1123.html",
    "cover": 73,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "猎魔, 兄弟, 克苏鲁, 恶魔契约, 公路片",
    "year": "2024",
    "description": "温彻斯特兄弟发现所有猎魔行动都指向一本失落的《死海古卷》，而抄写者竟是他们的母亲。"
  },
  {
    "title": "惊狱77",
    "file": "movie-1124.html",
    "cover": 74,
    "region": "韩国",
    "category": "爱情青春",
    "tags": "监狱, 越狱, 丧尸, 密室",
    "year": "2025",
    "description": "1977年，一所秘密监狱里的囚犯试图越狱，却发现监狱外是丧尸的末日世界。"
  },
  {
    "title": "美国精神",
    "file": "movie-1125.html",
    "cover": 75,
    "region": "美国",
    "category": "爱情青春",
    "tags": "总统竞选, 媒体操控, 家族, 暗黑",
    "year": "2021",
    "description": "一个立志成为美国首位女总统的政客，发现自己只是父亲和华尔街共同培养了三十年的“完美候选人”。"
  },
  {
    "title": "天才枪手",
    "file": "movie-1126.html",
    "cover": 76,
    "region": "泰国",
    "category": "高清电影",
    "tags": "作弊, 天才少女, 跨国犯罪, 阶级讽刺",
    "year": "2024",
    "description": "贫困的天才女学霸发明了一套“钢琴密码”作弊系统，从年级小考一路做到跨国STIC考试，最终被自己最好的朋友出卖。"
  },
  {
    "title": "女生万岁第二季",
    "file": "movie-1127.html",
    "cover": 77,
    "region": "日本",
    "category": "精选视频",
    "tags": "后宫, 日常搞笑, 宅男幻想, 恋爱喜剧",
    "year": "2024",
    "description": "废柴高中生雪成继续在两个女神的夹缝中求生，这次还多了一位来自阿拉伯的任性公主。"
  },
  {
    "title": "金银滩",
    "file": "movie-1128.html",
    "cover": 78,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "核基地, 隐姓埋名, 奉献, 荒原",
    "year": "2025",
    "description": "1958年，一对新婚夫妇被秘密派往青海金银滩草原，在“天上无飞鸟”的禁区里隐姓埋名三十年。"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 一条安达鲁狗 抗体 英雄使命 教数学的体育老师 牛仔路漫漫 安比西瓦姆 小小少年 发小儿万岁 末日迷踪：敌基督的崛起 急水滩头 消失中的先驱 十个冬天 布达佩斯禁忌之恋 哈巴狗的回忆 卡车或卡车 旅程终点 望月奇遇 法外之徒 地球人坏坏 天堂奇遇",
    "file": "movie-1129.html",
    "cover": 79,
    "region": "根据片名判断",
    "category": "剧情佳作",
    "tags": "根据片名判断",
    "year": "根据片名判断",
    "description": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）"
  },
  {
    "title": "九指魔爪",
    "file": "movie-1130.html",
    "cover": 80,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "都市传说, 断指, 诅咒传承, 集体幻觉, 小镇",
    "year": "2027",
    "description": "美国某小镇流传“九指魔”传说：如果你看到它，你会失去一根手指，而魔爪会长出你的那根。"
  },
  {
    "title": "见习警员白忆男之初来乍到",
    "file": "movie-1131.html",
    "cover": 81,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "见习警员, 基层派出所, 反差搭档, 案件成长, 城市烟火, 轻悬疑",
    "year": "2024",
    "description": "新人警员白忆男刚到社区派出所就撞上连环误会，一边被老警员“磨皮”一边在琐碎案情里迅速成长。"
  },
  {
    "title": "击情越界",
    "file": "movie-1132.html",
    "cover": 82,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "拳击、师徒禁忌、自我救赎、社会边缘人",
    "year": "2027",
    "description": "过气拳击教练与患有躁郁症的天才女拳手，在拳击场外开启了毁灭性的情感越界。"
  },
  {
    "title": "生命之舞",
    "file": "movie-1133.html",
    "cover": 83,
    "region": "古巴",
    "category": "剧情佳作",
    "tags": "芭蕾, 革命, 梦想, 身体",
    "year": "2021",
    "description": "哈瓦那贫民窟的残疾少年用一条腿跳出完美芭蕾，他的舞台是随时可能倒塌的天台，观众是整条街的邻居。"
  },
  {
    "title": "国际象棋女王",
    "file": "movie-1134.html",
    "cover": 84,
    "region": "美国 / 俄罗斯",
    "category": "精选视频",
    "tags": "棋手, 女性, 冷战, 天才",
    "year": "2025",
    "description": "美国第一位女子国际象棋特级大师，在1984年冷战最激烈时，向苏联棋王发起挑战。"
  },
  {
    "title": "春风满锦城",
    "file": "movie-1135.html",
    "cover": 85,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "四川, 改革开放, 川菜, 家族",
    "year": "2026",
    "description": "八十年代成都，一家濒临倒闭的国营川菜馆，在一位女厨师带领下，搅动了整个锦城的味蕾与人心。"
  },
  {
    "title": "苗乡情",
    "file": "movie-1136.html",
    "cover": 86,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "非遗, 脱贫攻坚, 歌舞",
    "year": "2023",
    "description": "深圳设计师深入贵州苗寨，与当地绣娘们一起，用古老的苗绣技艺脱贫致富，并重拾文化自信。"
  },
  {
    "title": "追求幸福",
    "file": "movie-1137.html",
    "cover": 87,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "北漂，亲情，奋斗，现实，温暖",
    "year": "2017",
    "description": "安徽农村的何家三姐弟为了各自心中的“幸福”来到北京，在摩天大楼的阴影下，寻找属于自己的一束光。"
  },
  {
    "title": "威胁信",
    "file": "movie-1138.html",
    "cover": 88,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "匿名信、校园欺凌、阶级复仇、反转、日式暗黑",
    "year": "2026",
    "description": "小镇上五位曾经的高中同窗接连收到威胁信，信上内容是他们当年联手逼死一位同学时，说过的唯一一句真话。"
  },
  {
    "title": "穿黄鞋的人是凶手",
    "file": "movie-1139.html",
    "cover": 89,
    "region": "意大利",
    "category": "喜剧动画",
    "tags": "Giallo, 铅黄电影, 变态杀手, 高跟鞋",
    "year": "1973",
    "description": "罗马时装周期间，三位穿限量黄鞋的模特接连遇害，警探发现所有线索都指向四十年前的一桩冤案。"
  },
  {
    "title": "死亡自动机",
    "file": "movie-1140.html",
    "cover": 90,
    "region": "美国",
    "category": "精选视频",
    "tags": "杀人机器, 密室逃生, 倒计时, 阴谋",
    "year": "2027",
    "description": "六人醒来发现身体被植入炸弹，必须在一台会撒谎的超级计算机出的谜题中存活60分钟。"
  },
  {
    "title": "阴阳镇怪谈2024",
    "file": "movie-1141.html",
    "cover": 91,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "民国，小镇，怪谈，因果，民俗恐怖",
    "year": "2024",
    "description": "民国阴阳镇每夜都有“借寿鬼”敲门，只有遵循古怪规矩的人才能活到天亮。"
  },
  {
    "title": "海角惊魂",
    "file": "movie-1142.html",
    "cover": 92,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "孤岛，暴风雪山庄，密室逃生，心理惊悚，连环杀手",
    "year": "2024",
    "description": "七名网红受邀前往海角孤岛参加整蛊直播，却发现游戏规则是真的，而杀手就藏在他们中间。"
  },
  {
    "title": "本宫要做皇帝",
    "file": "movie-1143.html",
    "cover": 93,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "反套路、宫廷逆袭、女主成长、朝堂较量",
    "year": "2021",
    "description": "一位只想在后宫安静度日的低位妃嫔，阴差阳错被推上夺嫡漩涡，最后竟决定亲自把自己送上皇位。"
  },
  {
    "title": "原始狂暴：大脚怪传奇",
    "file": "movie-1144.html",
    "cover": 94,
    "region": "美国",
    "category": "高清电影",
    "tags": "丛林怪物，血腥追杀，伪纪录片风格，生存恐怖",
    "year": "2019",
    "description": "一档荒野求生真人秀节目组进入原始森林，却激怒了守护圣地的巨型大脚怪。"
  },
  {
    "title": "法证先锋国语",
    "file": "movie-1145.html",
    "cover": 95,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "法证技术, 连环命案, 正邪对抗",
    "year": "2024",
    "description": "天才法证顾问遭遇高智商模仿犯，每一处现场都是向他下的战书。"
  },
  {
    "title": "摇摆大肚王",
    "file": "movie-1146.html",
    "cover": 96,
    "region": "中国",
    "category": "动作犯罪",
    "tags": "摇摆, 神医闹剧, 身体喜剧, 代孕秘密",
    "year": "2014",
    "description": "一个会在月圆时疯狂摇摆、肚腹失控膨胀的男子被市集包场请去演“神迹”，他越想躲开关注就越被当作神像，笑意与恐惧在同一张脸上来回拉扯。"
  },
  {
    "title": "致命替身",
    "file": "movie-1147.html",
    "cover": 97,
    "region": "韩国",
    "category": "喜剧动画",
    "tags": "整容, 身份置换, 复仇, 伦理, 反转",
    "year": "2025",
    "description": "落魄女演员接受整容手术成为豪门太太的替身，却发现“自己”正在一个个消失。"
  },
  {
    "title": "再见，我的王后",
    "file": "movie-1148.html",
    "cover": 98,
    "region": "法国",
    "category": "动作犯罪",
    "tags": "法国大革命, 玛丽皇后, 凡尔赛宫, 女仆, 逃亡",
    "year": "2012",
    "description": "1789年7月14日，凡尔赛宫里的玛丽皇后只关心一件事：让她的女仆兼秘密情人，代替自己逃离。"
  },
  {
    "title": "不可思异",
    "file": "movie-1149.html",
    "cover": 99,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "外星, 超能力, 荒诞, 都市, 黑色幽默",
    "year": "2024",
    "description": "一个外星生物掉进了落魄科学家的出租屋，给了他十一种不可思议的超能力，每一种都精准地踩在人类的倒霉点上。"
  },
  {
    "title": "加油！晓惠",
    "file": "movie-1150.html",
    "cover": 100,
    "region": "中国台湾",
    "category": "喜剧动画",
    "tags": "马拉松, 中年女性, 励志, 自我救赎",
    "year": "2025",
    "description": "45岁被裁员的单亲妈妈，为了夺回儿子的抚养权，报名参加全马并要在四小时内完赛。"
  },
  {
    "title": "开心乐园",
    "file": "movie-1151.html",
    "cover": 101,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "主题乐园, 都市压力, 脑内世界, 治愈",
    "year": "2024",
    "description": "一个即将崩溃的上班族被吸进了手机里的主题乐园，却发现要通关就必须直面自己的每一次精神崩溃。"
  },
  {
    "title": "玩伴",
    "file": "movie-1152.html",
    "cover": 102,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "童年创伤，记忆谜团，小镇，身份认同",
    "year": "2021",
    "description": "三十岁那年，他回到家乡参加葬礼，却发现童年玩伴的脸集体变得模糊不清。"
  },
  {
    "title": "黄飞鸿之四：龙城歼霸",
    "file": "movie-1153.html",
    "cover": 103,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "黄飞鸿，张铁林，赵文卓，海盗，清末",
    "year": "1994",
    "description": "黄飞鸿率众南下，联合渔家女对抗肆虐东南沿海的亡命海盗，保卫龙城珠海。"
  },
  {
    "title": "巴士阿叔事件",
    "file": "movie-1154.html",
    "cover": 104,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "网络暴力，底层挣扎，真实事件改编",
    "year": "2024",
    "description": "一段“巴士骂战”手机视频让一位落魄中年阿叔成为全网公敌，也让他隐藏了二十年的秘密浮出水面。"
  },
  {
    "title": "狼人战警",
    "file": "movie-1155.html",
    "cover": 105,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "狼人变体, 警匪动作, 满月追凶, 体内野兽, 黑暗英雄",
    "year": "2023",
    "description": "芝加哥最暴力的缉毒警在一次袭击中被咬，他必须在月圆之夜用狼人身份追捕杀害搭档的毒枭。"
  },
  {
    "title": "家春秋",
    "file": "movie-1156.html",
    "cover": 106,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "家族兴衰, 时代变迁, 伦理纠葛",
    "year": "2025",
    "description": "从清末到改革开放，江南古镇一个大家族三代女人的命运与抉择。"
  },
  {
    "title": "新天龙八部",
    "file": "movie-1157.html",
    "cover": 107,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "金庸, 江湖, 乔峰, 三兄弟",
    "year": "2024",
    "description": "丐帮帮主乔峰身世之谜引发江湖血雨腥风，虚竹、段誉三兄弟的命运就此交织。"
  },
  {
    "title": "暴雨",
    "file": "movie-1158.html",
    "cover": 108,
    "region": "马来西亚",
    "category": "高清电影",
    "tags": "人性, 密室, 紧张",
    "year": "2026",
    "description": "一场千年暴雨困住了一栋楼里的十二个人，雨停后，电梯里多出了一具尸体。"
  },
  {
    "title": "青木原树海",
    "file": "movie-1159.html",
    "cover": 109,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "灵异森林，心理惊悚，社会议题，寻父之旅",
    "year": "2018",
    "description": "为了寻找失踪父亲的遗体，一名青年走进了日本著名的“自杀圣地”青木原树海。"
  },
  {
    "title": "魑魅魍魉",
    "file": "movie-1160.html",
    "cover": 110,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "聊斋, 诡异, 乡野传说",
    "year": "2025",
    "description": "明朝乡野，四个赶考书生夜宿破庙，分别遇到四只不同的鬼怪，对应“魑魅魍魉”四种吃人法。"
  },
  {
    "title": "罪魁伏法记",
    "file": "movie-1161.html",
    "cover": 111,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "经典, 希区柯克式, 完美谋杀, 悬疑反转",
    "year": "1954",
    "description": "一个男人策划了天衣无缝的谋杀案，却在得手后惊恐地发现，自己掉进了另一个更深的陷阱。"
  },
  {
    "title": "新小鬼当家",
    "file": "movie-1162.html",
    "cover": 112,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "假期逃学, 快递侦探, 赌场倒计时, 兄妹守护, 录音陷阱",
    "year": "2016",
    "description": "少年白烨把一段“全家都在家”的假期变成闯天门计划，借抄作业式的误会拦下赌场洗钱案，并逼着每个大人都承认：孩子不再是待处理的背景板。"
  },
  {
    "title": "绝世好男人",
    "file": "movie-1163.html",
    "cover": 113,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "中年危机, 都市轻喜, 男女反转",
    "year": "2023",
    "description": "一位“完美丈夫”在妻子提出离婚后，才发现自己从来没有真正了解过她。"
  },
  {
    "title": "史前一万年",
    "file": "movie-1164.html",
    "cover": 114,
    "region": "美国",
    "category": "精选视频",
    "tags": "原始部落, 猛犸象, 预言",
    "year": "2008",
    "description": "一个被部落视为“废物”的年轻猎人，踏上拯救恋人的万里征程，却意外成为团结所有种族的先知。"
  },
  {
    "title": "娜丁",
    "file": "movie-1165.html",
    "cover": 115,
    "region": "美国",
    "category": "高清电影",
    "tags": "德州，离婚，偷情，私家侦探",
    "year": "1987",
    "description": "一心想要离婚的德州美发师娜丁，为了拿回丈夫手里的出轨证据，却意外卷入了一场关于小镇地下水源的阴谋。"
  },
  {
    "title": "第8号当铺",
    "file": "movie-1166.html",
    "cover": 116,
    "region": "中国台湾",
    "category": "精选视频",
    "tags": "奇幻, 人性, 灵魂交易, 典当, 经典",
    "year": "2003",
    "description": "无论你想要财富、爱情还是寿命，只要走进第8号当铺，用你所拥有的东西来换，但代价往往是灵魂。"
  },
  {
    "title": "邂逅",
    "file": "movie-1167.html",
    "cover": 117,
    "region": "日本",
    "category": "精选视频",
    "tags": "错过、命运、平淡、催泪",
    "year": "2016",
    "description": "两个人在同一座城市里，明明频繁擦肩而过，却整整错过了十五年才说上第一句话。"
  },
  {
    "title": "小可爱与拳击手",
    "file": "movie-1168.html",
    "cover": 118,
    "region": "日本 / 美国",
    "category": "爱情青春",
    "tags": "艺术, 婚姻, 拳击, 相濡以沫, 创作",
    "year": "2025",
    "description": "记录了纽约的一对日本艺术家夫妻，40年来在贫穷、酒精和艺术中的相爱相杀。"
  },
  {
    "title": "恶魔的艺术2",
    "file": "movie-1169.html",
    "cover": 119,
    "region": "泰国",
    "category": "高清电影",
    "tags": "降头, 巫术, 复仇, 邪教",
    "year": "2005",
    "description": "一个农村女孩被富家子弟始乱终弃后，用最恶毒的降头术展开灭门报复。"
  },
  {
    "title": "调包富少的逆袭",
    "file": "movie-1170.html",
    "cover": 120,
    "region": "韩国",
    "category": "剧情佳作",
    "tags": "财阀，互换人生，智商超群",
    "year": "2024",
    "description": "一名被故意调包的穷小子，在发现自己竟是财阀亲生儿子后，决定伪装成“毫无威胁的废物”潜入家族内部，从底层复仇。"
  },
  {
    "title": "深圳之恋",
    "file": "movie-1171.html",
    "cover": 121,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "改革开放, 南下打工, 怀旧, 三角恋, 创业史",
    "year": "1995",
    "description": "三个来自天南地北的年轻人在深圳的出租屋里，经历了从地摊到上市公司的爱恨纠葛。"
  },
  {
    "title": "够姜师姐之终极答案",
    "file": "movie-1172.html",
    "cover": 122,
    "region": "香港",
    "category": "喜剧动画",
    "tags": "女警, 硬核, 港剧, 师姐",
    "year": "1992",
    "description": "全港最疯的女警“够姜”师姐追查连环杀手，却发现对方每杀一人，都在回答她童年日记里的提问。"
  },
  {
    "title": "黑猫白猫",
    "file": "movie-1173.html",
    "cover": 123,
    "region": "塞尔维亚",
    "category": "剧情佳作",
    "tags": "吉普赛家族、婚礼闹剧、黑帮交易、荒诞冒险、命运反转、民谣气质",
    "year": "1998",
    "description": "一场为逃债凑成的婚礼，意外把两个互相看不顺眼的年轻人推上命运赌桌，连猫都像在看热闹。"
  },
  {
    "title": "眷恋你的温柔",
    "file": "movie-1174.html",
    "cover": 124,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "人偶恋, 神明, 转世, 京都美学",
    "year": "2024",
    "description": "一位孤独的木匠修复了一尊古老木像，木像中的女神每晚都会活过来，却只有三小时记忆。"
  },
  {
    "title": "爱尔兰之愿",
    "file": "movie-1175.html",
    "cover": 125,
    "region": "爱尔兰",
    "category": "高清电影",
    "tags": "许愿石, 遗憾, 乡愁, 凯尔特神话",
    "year": "2024",
    "description": "在都柏林失恋的纽约客对着古老的许愿石哭诉，石头裂了，她的诅咒成真了。"
  },
  {
    "title": "心中的杀手",
    "file": "movie-1176.html",
    "cover": 126,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "黑色电影, 杀手心理, 小镇罪恶, 宿命论",
    "year": "2010",
    "description": "一个沉默的小镇副警长逐渐发现自己内心住着一个冷血杀手，而一场意外抢劫唤醒了它。"
  },
  {
    "title": "拯救大兵瑞恩",
    "file": "movie-1177.html",
    "cover": 127,
    "region": "美国",
    "category": "欧美热播",
    "tags": "剧情, 历史, 兄弟情, 重制",
    "year": "2025",
    "description": "一支八人小队深入敌后，找回被误判阵亡的最后一名兄弟，却发现他不想被救。"
  },
  {
    "title": "醒醒吧之跟风者",
    "file": "movie-1178.html",
    "cover": 128,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "讽刺, 社交媒体, 荒诞",
    "year": "2023",
    "description": "一个专门制造网络热潮的幕后推手，突然发现自己成为全民模仿的“终极跟风对象”。"
  },
  {
    "title": "玉响完结篇第四部：朝",
    "file": "movie-1179.html",
    "cover": 129,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "治愈系、摄影、毕业、成长、完结篇",
    "year": "2025",
    "description": "泽渡枫迎来了高中最后一个春天，她在镜头里寻找着从未见过的最美“朝”阳。"
  },
  {
    "title": "野寺情鸳",
    "file": "movie-1180.html",
    "cover": 130,
    "region": "中国台湾",
    "category": "欧美热播",
    "tags": "邵氏, 悲情, 寺庙, 禁忌恋",
    "year": "1974",
    "description": "落难书生躲进山间野寺，发现壁画中的仕女每夜都会走下来与他相会。"
  },
  {
    "title": "水生花",
    "file": "movie-1181.html",
    "cover": 131,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "轮回，替身，画师，古风，虐恋",
    "year": "2019",
    "description": "画师绘出水中亡魂容颜，却发现未婚妻的胎记竟与画中女子一模一样。"
  },
  {
    "title": "鬣狗之路",
    "file": "movie-1182.html",
    "cover": 132,
    "region": "韩国",
    "category": "欧美热播",
    "tags": "黑帮，律师，腐败，双面卧底，生存",
    "year": "2024",
    "description": "一个小律师同时替三大黑帮做法律顾问，在各方火并中努力求生，却发现自己才是最大的猎物。"
  },
  {
    "title": "富贵吉祥",
    "file": "movie-1183.html",
    "cover": 133,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "贺岁片, 假扮情侣, 豪门恩怨, 南洋风情, 合家欢",
    "year": "2025",
    "description": "破产富二代与落魄风水师假扮情侣回国骗家产，结果两人真爱上，家族秘密也开始连环爆炸。"
  },
  {
    "title": "拨云见日第一季",
    "file": "movie-1184.html",
    "cover": 134,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "积案调查, 双男主, 北漂, 正义",
    "year": "2025",
    "description": "一位患有脸盲症的刑侦天才与一名热血菜鸟警探，联手重启尘封十五年的“雨夜幽灵”连环杀人案。"
  },
  {
    "title": "迪莱哈",
    "file": "movie-1185.html",
    "cover": 135,
    "region": "印度",
    "category": "爱情青春",
    "tags": "抗英, 冷兵器, 民族觉醒",
    "year": "2025",
    "description": "19世纪印度北部，一个名叫迪莱哈的女王，率领部落勇士用冷兵器对抗英军的火枪大炮。"
  },
  {
    "title": "死亡、处女",
    "file": "movie-1186.html",
    "cover": 136,
    "region": "西班牙",
    "category": "高清电影",
    "tags": "舞台剧改编, 性暴力, 复仇, 夫妻关系",
    "year": "2025",
    "description": "雨夜，女人的丈夫带回一个陌生男人，女人认定他就是十七年前强暴自己的医生。"
  },
  {
    "title": "突击队和一去不回的海兵",
    "file": "movie-1187.html",
    "cover": 137,
    "region": "韩国",
    "category": "动作犯罪",
    "tags": "朝鲜战争, 敢死队, 悲壮, 兄弟情, 真实事件改编",
    "year": "2023",
    "description": "朝鲜战争期间，一支24小时存活率不足三成的突击队，最后一次集结。"
  },
  {
    "title": "亡命驾驶",
    "file": "movie-1188.html",
    "cover": 138,
    "region": "韩国",
    "category": "剧情佳作",
    "tags": "无人机飞车, 直播犯罪, 地下竞速, 社会讽刺",
    "year": "2027",
    "description": "为了给妹妹凑医药费，地下赛车冠军被迫参与一场全程直播的“死亡驾驶”，所有交通规则都是杀人陷阱。"
  },
  {
    "title": "死亡谷2021",
    "file": "movie-1189.html",
    "cover": 139,
    "region": "美国",
    "category": "爱情青春",
    "tags": "末日, 变异, 生存, 密闭空间",
    "year": "2021",
    "description": "一场地震将加州死亡谷底撕裂，露出一座埋藏亿万年的史前地牢，里面关着的东西醒了。"
  },
  {
    "title": "雨中的童话",
    "file": "movie-1190.html",
    "cover": 140,
    "region": "韩国",
    "category": "高清电影",
    "tags": "雨季, 时空, 重逢, 催泪",
    "year": "2022",
    "description": "妻子去世后的第一个雨季，她在雨中复活，却失去了所有记忆，只剩七天时间重新爱上丈夫。"
  },
  {
    "title": "小牧人",
    "file": "movie-1191.html",
    "cover": 141,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "藏族少年, 人与自然, 温情治愈, 高原风光",
    "year": "2023",
    "description": "川西高原上，一个失去阿爸的少年，为了完成父亲遗愿，独自带领三百只羊穿越风雪垭口。"
  },
  {
    "title": "新特警判官",
    "file": "movie-1192.html",
    "cover": 142,
    "region": "美国",
    "category": "欧美热播",
    "tags": "赛博朋克，反乌托邦，暴力美学，硬汉，重启",
    "year": "2025",
    "description": "在核战后的超级城市里，判官爵斯不仅要审判罪犯，还要审判已经腐败到骨子里的判官制度。"
  },
  {
    "title": "玫瑰奇缘恋与大明星",
    "file": "movie-1193.html",
    "cover": 143,
    "region": "泰国",
    "category": "高清电影",
    "tags": "娱乐圈, 假戏真做, 欢喜冤家, 星盘",
    "year": "2024",
    "description": "毒舌大明星和迷信占卜的女编剧，因一场车祸互换身体后被迫同居。"
  },
  {
    "title": "映画女优",
    "file": "movie-1194.html",
    "cover": 144,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "昭和怀旧，片场风云，女性成长",
    "year": "2024",
    "description": "昭和初年，一名乡下女孩闯入电影城，从龙套成长为传奇女星的三十年血泪史。"
  },
  {
    "title": "破坏之王粤语",
    "file": "movie-1195.html",
    "cover": 145,
    "region": "香港",
    "category": "欧美热播",
    "tags": "拆迁, 小人物, 功夫, 粤语原声, 怀旧",
    "year": "2024",
    "description": "旧区拆迁在即，一名懦弱的茶餐厅伙计意外获得神秘功夫，独自对抗无良地产商。"
  },
  {
    "title": "月亮",
    "file": "movie-1196.html",
    "cover": 146,
    "region": "韩国",
    "category": "欧美热播",
    "tags": "月球救援, 太空灾难, 人性, 国家荣誉, 硬科幻",
    "year": "2023",
    "description": "韩国首次载人登月任务失败，一名宇航员被困月球，地球上的昔日对手必须放下恩怨救他回家。"
  },
  {
    "title": "终极大盗",
    "file": "movie-1197.html",
    "cover": 147,
    "region": "美国",
    "category": "高清电影",
    "tags": "盗窃团队、背叛、FBI、宝藏",
    "year": "1995",
    "description": "世界头号大盗退休前最后一单任务，是偷走FBI总部地下的秘密档案，但他发现团队成员全是卧底。"
  },
  {
    "title": "仇连环",
    "file": "movie-1198.html",
    "cover": 148,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "复仇, 卧底, 港风, 拳拳到肉, 反套路",
    "year": "2025",
    "description": "黑帮最狠的杀手出狱当天，发现自己的仇人全死了，只剩一个——救过他命的警察。"
  },
  {
    "title": "性感都市",
    "file": "movie-1199.html",
    "cover": 149,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "都市, 女性, 欲望, 情感",
    "year": "2004",
    "description": "四个都市女性在性与爱之间横冲直撞，发现最性感的位置不是床，是独立。"
  },
  {
    "title": "王良军长",
    "file": "movie-1200.html",
    "cover": 150,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "国民党起义, 解放战争, 信仰抉择, 军旅, 真实改编",
    "year": "2027",
    "description": "1949 年，国民党最精锐师师长王良在起义前夜发现，自己信任的副官是地下党，而他的女儿也在对面。"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 隆美尔 小鸡快跑 霍华德叔叔 黑暗势力 大冲激 返回 绝命杀阵2 风流美剑客 拳赎 最美的相遇 吉隆坡特警 颠倒曼波 情感波澜 摇滚派对 春满众香国 鸟姐妹的反差生活第三季 爱情重启 重金属两千 黑侠2 客座艺术家",
    "file": "movie-1201.html",
    "cover": 1,
    "region": "根据片名判断",
    "category": "剧情佳作",
    "tags": "根据片名判断",
    "year": "根据片名判断",
    "description": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）"
  },
  {
    "title": "乐园2019",
    "file": "movie-1202.html",
    "cover": 2,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "记忆上传, 虚拟社区, 失踪案, 未来教育, 人格分层",
    "year": "2019",
    "description": "一座号称能替人保存幸福记忆的“乐园系统”在2019年上线后，看似治愈了所有伤痛，却悄悄把一批使用者从现实中抹去。"
  },
  {
    "title": "反堕胎",
    "file": "movie-1203.html",
    "cover": 3,
    "region": "美国",
    "category": "爱情青春",
    "tags": "伦理, 悬疑, 社会议题, 反转, 惊悚",
    "year": "2025",
    "description": "一个坚定的反堕胎运动领袖意外怀孕，当她走进诊所时，发现医生正是她当年极力劝说生下的那个“孩子”。"
  },
  {
    "title": "疯狂圣诞剧2",
    "file": "movie-1204.html",
    "cover": 4,
    "region": "英国",
    "category": "剧情佳作",
    "tags": "圣诞节, 校园剧, 搞砸, 续集",
    "year": "2025",
    "description": "时隔十年，当年搞砸圣诞剧的小学生们都长大了，这次他们要在公司年会上演同一出剧。"
  },
  {
    "title": "放纵狂欢2",
    "file": "movie-1205.html",
    "cover": 5,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "R级, 血浆, 派对, 黑色幽默",
    "year": "2025",
    "description": "上一年的狂欢夜惨案仅存一周年，幸存者们被邀请参加一场更加疯狂的“复仇派对”。"
  },
  {
    "title": "昆仑七剑斗五龙粤语",
    "file": "movie-1206.html",
    "cover": 6,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "粤语长片, 剑仙, 特效, 斗法, 正邪",
    "year": "1971",
    "description": "昆仑派七位剑仙为救苍生，祭出本门七柄神剑，与为祸人间的五条恶龙展开一场飞天遁地的正邪斗法。"
  },
  {
    "title": "修女乔安娜",
    "file": "movie-1207.html",
    "cover": 7,
    "region": "波兰",
    "category": "高清电影",
    "tags": "黑白, 信仰, 附魔, 神父",
    "year": "1961",
    "description": "一位神父被派去驱魔，却发现修女乔安娜体内的魔鬼不是邪恶，而是她压抑了三十年的自我。"
  },
  {
    "title": "大话西游之大圣娶亲粤语",
    "file": "movie-1208.html",
    "cover": 8,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "经典重映, 粤语原声, 宿命悲剧",
    "year": "1995",
    "description": "至尊宝为救白晶晶穿越回五百年前，却不得不戴上金箍化身孙悟空，与一生所爱永别。"
  },
  {
    "title": "活著干死了算党宣言",
    "file": "movie-1209.html",
    "cover": 9,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "打工人， 职场， 起义， 讽刺",
    "year": "2025",
    "description": "一家濒临倒闭的广告公司里，四名绝望社畜起草了一份疯狂的“革命宣言”。"
  },
  {
    "title": "色情快活谷",
    "file": "movie-1210.html",
    "cover": 10,
    "region": "香港",
    "category": "科幻悬疑",
    "tags": "市井风情，漫画式表演，谷中故事，怀旧",
    "year": "1995",
    "description": "九十年代香港某条被称为“快活谷”的按摩一条街，几家欢喜几家愁的日与夜。"
  },
  {
    "title": "我的功夫老爸",
    "file": "movie-1211.html",
    "cover": 11,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "废柴老爸, 深藏不露, 父女情",
    "year": "2024",
    "description": "女儿眼中只会吹牛做保安的废柴老爸，竟曾是东南亚地下拳王，当女儿被绑架，他决定重出江湖。"
  },
  {
    "title": "十二夜2：回到第零天",
    "file": "movie-1212.html",
    "cover": 12,
    "region": "中国台湾",
    "category": "爱情青春",
    "tags": "轮回, 婚姻, 七年之痒, 遗憾",
    "year": "2024",
    "description": "第一部的12夜是恋爱到分手的周期，第二部则是离婚冷静期的最后12天，他们试图回到“第零天”重新开始。"
  },
  {
    "title": "哭吧叔叔！",
    "file": "movie-1213.html",
    "cover": 13,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "亲情修复, 儿童视角, 误会与和解, 失业中年, 城市漂泊",
    "year": "2012",
    "description": "一个总说“别哭”的失业大叔，偏偏被一群爱闹事的孩子逼着学会流泪，也学会重新做一个能被依靠的人。"
  },
  {
    "title": "狗脸的岁月",
    "file": "movie-1214.html",
    "cover": 14,
    "region": "瑞典",
    "category": "高清电影",
    "tags": "童年, 宠物, 成长, 小镇, 怀旧",
    "year": "2024",
    "description": "一个总幻想自己是狗的小男孩，在父母冷战的夏天，和一只流浪狗互相教会了对方如何做自己。"
  },
  {
    "title": "波罗地海海盗",
    "file": "movie-1215.html",
    "cover": 15,
    "region": "俄罗斯 / 芬兰",
    "category": "喜剧动画",
    "tags": "北欧海盗, 宗教冲突, 冰海沉船, 真实改编",
    "year": "2008",
    "description": "13世纪波罗的海，一群被教会追杀的异教徒劫持了教皇的特使船。"
  },
  {
    "title": "青春珊瑚岛",
    "file": "movie-1216.html",
    "cover": 16,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "荒岛，青春，生存，纯爱，经典",
    "year": "1980",
    "description": "两个少年因海难流落到无人珊瑚岛，在原始的环境中相依为命，度过了最纯粹的青春。"
  },
  {
    "title": "守门员",
    "file": "movie-1217.html",
    "cover": 17,
    "region": "德国",
    "category": "剧情佳作",
    "tags": "足球, 心理创伤, 悬疑, 人生低谷",
    "year": "2021",
    "description": "因一次黄油手导致球队降级的门将，在小镇隐匿身份时，发现当年那场失利竟是一场被操纵的赌局。"
  },
  {
    "title": "淘气精灵",
    "file": "movie-1218.html",
    "cover": 18,
    "region": "爱尔兰",
    "category": "爱情青春",
    "tags": "精灵、恶作剧、凯尔特神话、兄妹",
    "year": "2022",
    "description": "妹妹被真正的淘气精灵绑架到了“恶作剧王国”，哥哥必须通过完成精灵国王出的三个荒诞任务才能换回她。"
  },
  {
    "title": "传说的拳头",
    "file": "movie-1219.html",
    "cover": 19,
    "region": "韩国",
    "category": "高清电影",
    "tags": "格斗, 综艺, 中年危机, 热血",
    "year": "2022",
    "description": "曾经的格斗少年冠军沦为生意人，为钱参加格斗综艺，却发现自己要面对的竟是当年的手下败将。"
  },
  {
    "title": "爱情有什么道理",
    "file": "movie-1220.html",
    "cover": 20,
    "region": "中国台湾",
    "category": "精选视频",
    "tags": "都市情感, 多重宇宙, 选择困难, 轻喜剧",
    "year": "2021",
    "description": "婚礼当天被抛弃的剩女，意外获得了同时体验“逃离”与“坚守”两条人生线的能力。"
  },
  {
    "title": "他人即地狱2024",
    "file": "movie-1221.html",
    "cover": 21,
    "region": "韩国",
    "category": "爱情青春",
    "tags": "考试院, 邻居变态, 心理侵蚀",
    "year": "2024",
    "description": "首尔一间廉价考试院里，每个住户都在悄悄“改造”新来的租客。"
  },
  {
    "title": "江湖五怪",
    "file": "movie-1222.html",
    "cover": 22,
    "region": "中国台湾",
    "category": "高清电影",
    "tags": "怪盗、民俗、斗法、公路片、热血",
    "year": "2026",
    "description": "五位身怀“奇术”的江湖骗子和通缉犯，为了洗白身份被迫联手寻找传说中的麒麟血脉。"
  },
  {
    "title": "最后一封情书",
    "file": "movie-1223.html",
    "cover": 23,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "阿尔茨海默症, 代际和解, 书信, 催泪",
    "year": "2024",
    "description": "叛逆少女替去世的母亲收拾遗物，发现母亲生前每年都写一封从未寄出的情书，收件人却是自己。"
  },
  {
    "title": "到达",
    "file": "movie-1224.html",
    "cover": 24,
    "region": "美国",
    "category": "高清电影",
    "tags": "外星人, 语言学, 时间, 悲伤, 沟通",
    "year": "2016",
    "description": "当外星飞船降临地球，一位语言学家发现破解外星语言的关键是重写自己的记忆。"
  },
  {
    "title": "叹别离",
    "file": "movie-1225.html",
    "cover": 25,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "虐恋, 权谋, 替身文学, 宿命感, 美学巅峰",
    "year": "2024",
    "description": "她是敌国送来的和亲替身，他是手握重兵的王爷，大婚当天他送来的不是聘礼，而是一碗绝子汤。"
  },
  {
    "title": "更多危险刑事",
    "file": "movie-1226.html",
    "cover": 26,
    "region": "日本",
    "category": "高清电影",
    "tags": "警察, 搭档, 热血, 无厘头",
    "year": "2025",
    "description": "废柴刑警搭档回归，这次他们面对的是一群cosplay历史人物的高科技罪犯。"
  },
  {
    "title": "恶魔之门",
    "file": "movie-1227.html",
    "cover": 27,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "邪教, 平行宇宙, 家庭, 密室",
    "year": "2025",
    "description": "单亲妈妈搬进偏远农庄，发现地下室的门后关着来自另一个世界的“自己”。"
  },
  {
    "title": "乌纳和努克",
    "file": "movie-1228.html",
    "cover": 28,
    "region": "加拿大 / 格陵兰",
    "category": "动作犯罪",
    "tags": "因纽特, 北极, 环保, 手绘",
    "year": "2025",
    "description": "最后的因纽特老猎人带着孙女和一条雪橇犬，在冰川崩塌中寻找一头传说中的白鲸。"
  },
  {
    "title": "奔跑吧第三季",
    "file": "movie-1229.html",
    "cover": 29,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "反向追逐, 组队任务, 城市地理, 成长协作, 人际修复",
    "year": "2022",
    "description": "第三季开启“反向追逐”规则，搭档要在三十六小时内完成失效愿望清单，谁先回头就可获得最高分，让每个人都在赛制逼迫里重新理解陪跑比冠军更重要。"
  },
  {
    "title": "汤姆维特",
    "file": "movie-1230.html",
    "cover": 30,
    "region": "英国",
    "category": "爱情青春",
    "tags": "侦探, 维多利亚时代, 通灵, 悬疑, 伦敦",
    "year": "2025",
    "description": "维多利亚时期的伦敦，一名不信鬼神的警探被迫与一位真能见鬼的街头少年搭档。"
  },
  {
    "title": "上海之味",
    "file": "movie-1231.html",
    "cover": 31,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "本帮菜, 弄堂烟火气, 三代同堂, 味觉记忆",
    "year": "2023",
    "description": "一间藏在上海弄堂里的百年老店，因为一封拆迁通知而陷入危机，一家三代人为了守住“上海之味”展开了一场味觉保卫战。"
  },
  {
    "title": "篮球冠军2",
    "file": "movie-1232.html",
    "cover": 32,
    "region": "西班牙",
    "category": "喜剧动画",
    "tags": "智力障碍运动员, 真实改编, 续集, 社会融入",
    "year": "2026",
    "description": "上一届冠军队伍解散六年后，曾经的教练被逼着组建一支由智力障碍球员和刑满释放人员混编的“疯子女篮”。"
  },
  {
    "title": "魔戒：洛汗人之战",
    "file": "movie-1233.html",
    "cover": 33,
    "region": "美国",
    "category": "高清电影",
    "tags": "史诗战争， 冷兵器对决， 中土前传",
    "year": "2026",
    "description": "洛汗国初代王与山林巨人的血盟崩塌，一场用鲜血重铸王座的悲壮之战即将打响。"
  },
  {
    "title": "玻璃橱窗中的姑娘",
    "file": "movie-1234.html",
    "cover": 34,
    "region": "法国",
    "category": "欧美热播",
    "tags": "社恐，偷窥，都市孤独，假身份",
    "year": "2026",
    "description": "患有严重社恐的女孩每天透过橱窗观察一个陌生男人，直到有一天对方失踪了。"
  },
  {
    "title": "这不是地下社会",
    "file": "movie-1235.html",
    "cover": 35,
    "region": "韩国",
    "category": "科幻悬疑",
    "tags": "荒诞, 打工仔, 黑帮",
    "year": "2024",
    "description": "一个被裁员的社畜误闯入黑帮谈判现场，凭借PPT和KPI考核把两派大佬忽悠成了合法公司。"
  },
  {
    "title": "亲爱的，我要和别人结婚了",
    "file": "movie-1236.html",
    "cover": 36,
    "region": "中国",
    "category": "动作犯罪",
    "tags": "汶川地震，真实事件改编，生死恋歌，催泪",
    "year": "2018",
    "description": "汶川地震夺走了他的爱人，一封寄往天堂的信写了整整十年，直到他决定再次牵起另一个人的手。"
  },
  {
    "title": "阳光警察1999",
    "file": "movie-1237.html",
    "cover": 37,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "港片, 警匪, 新扎师兄, 热血, 怀旧",
    "year": "1999",
    "description": "1999年澳门回归前夕，两个刚毕业的菜鸟警察误打误撞卷入了一起黑帮伪钞案，还是开的罚单那种。"
  },
  {
    "title": "哎吔少女",
    "file": "movie-1238.html",
    "cover": 38,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "粤语俚语， 亲情， 许愿魔法",
    "year": "2025",
    "description": "被全家嫌弃的“哎吔女”意外获得让嫌弃者变玩具的超能力，却发现自己正在消失。"
  },
  {
    "title": "杀手柔情",
    "file": "movie-1239.html",
    "cover": 39,
    "region": "法国",
    "category": "爱情青春",
    "tags": "女杀手, 斯德哥尔摩, 法式浪漫",
    "year": "2025",
    "description": "职业女杀手在任务中放过了目标，却爱上了被自己杀掉保镖的亿万富翁遗孀。"
  },
  {
    "title": "妈妈不让",
    "file": "movie-1240.html",
    "cover": 40,
    "region": "马来西亚",
    "category": "高清电影",
    "tags": "民俗, 华人社会, 控制欲, 反转, 细思极恐",
    "year": "2025",
    "description": "妈妈不准她晚上出门、不准谈恋爱、不准剪头发——直到她在阁楼发现了妈妈三十年前的照片。"
  },
  {
    "title": "灵气迫人",
    "file": "movie-1241.html",
    "cover": 41,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "都市传说， 灵异， 搞笑",
    "year": "2024",
    "description": "风水师李问天发现香港的“龙脉”被地产商钉了钉子，他必须用“科学”方法对抗厉鬼。"
  },
  {
    "title": "杰克茜",
    "file": "movie-1242.html",
    "cover": 42,
    "region": "英国",
    "category": "爱情青春",
    "tags": "AI女友, 伦理, 失踪, 科技惊悚",
    "year": "2023",
    "description": "男人定制了完美AI女友杰克茜，第二天她真人出现在他床上，说“我是来杀你的”。"
  },
  {
    "title": "全知干预视角",
    "file": "movie-1243.html",
    "cover": 43,
    "region": "韩国",
    "category": "高清电影",
    "tags": "观察类，经纪人，明星，幕后",
    "year": "2017",
    "description": "摄像机24小时记录明星与经纪人的真实日常，全场嘉宾（包括明星本人）一起“干预”评论。"
  },
  {
    "title": "侧车搭档",
    "file": "movie-1244.html",
    "cover": 44,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "侧车, 竞技, 百合, 热血, 成长",
    "year": "2025",
    "description": "两个互看不顺眼的女高中生，被迫成为侧车赛车的生死搭档。"
  },
  {
    "title": "辣手娇娃",
    "file": "movie-1245.html",
    "cover": 45,
    "region": "美国",
    "category": "爱情青春",
    "tags": "女杀手, 复仇, 爽剧, 时尚暴力",
    "year": "2024",
    "description": "三个被男人伤害的女人组成地下杀手联盟，专杀渣男。"
  },
  {
    "title": "出去走走",
    "file": "movie-1246.html",
    "cover": 46,
    "region": "中国台湾",
    "category": "喜剧动画",
    "tags": "代际, 徒步, 治愈, 自然",
    "year": "2024",
    "description": "一位患有轻度阿兹海默症的父亲，带着他那总是忙于工作的企业家儿子，踏上一场没有目的地的徒步之旅。"
  },
  {
    "title": "冥王星以西",
    "file": "movie-1247.html",
    "cover": 47,
    "region": "美国",
    "category": "欧美热播",
    "tags": "太空殖民, 人格分裂, 惊悚科幻",
    "year": "2026",
    "description": "在前往冥王星的殖民飞船上，一名宇航员醒来发现所有同伴都死了，而控制台上的目的地赫然写着：冥王星以西。"
  },
  {
    "title": "桃李劫",
    "file": "movie-1248.html",
    "cover": 48,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "师徒关系, 书院风波, 门第压迫, 春日桃林, 旧誓新怨, 命运抉择",
    "year": "2022",
    "description": "一场因桃林结下的师生缘分，被门第、战乱与旧约层层撕裂，最终逼迫两代人用最残酷的方式偿还彼此的亏欠。"
  },
  {
    "title": "情变",
    "file": "movie-1249.html",
    "cover": 49,
    "region": "韩国",
    "category": "动作犯罪",
    "tags": "出轨、复婚、中年危机、时间闪回",
    "year": "2025",
    "description": "一对离婚夫妻各自开始新恋情后，却被迫住在同一栋楼里，每层都是一段回忆。"
  },
  {
    "title": "催肥新娘",
    "file": "movie-1250.html",
    "cover": 50,
    "region": "非洲 (毛里塔尼亚)",
    "category": "精选视频",
    "tags": "社会议题, 女性身体, 传统陋习, 反抗",
    "year": "2025",
    "description": "在依然信奉“以肥为美”的部落里，一名现代女孩被家人强行送入“催肥营”，为了自由，她必须与自己的身体和传统展开战争。"
  },
  {
    "title": "玉碎",
    "file": "movie-1251.html",
    "cover": 51,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "盗墓, 文物保护, 双男主, 局中局",
    "year": "2024",
    "description": "一块战国玉璧重现江湖，引来了海外古董商、本地黑帮和公安三股势力，而玉璧背后藏着一个关于守护的谎言。"
  },
  {
    "title": "跑垒",
    "file": "movie-1252.html",
    "cover": 52,
    "region": "中国台湾",
    "category": "高清电影",
    "tags": "棒球, 父子, 草根, 热血",
    "year": "2021",
    "description": "被判“永远不能打棒球”的天才投手，组建了一支由流浪汉和问题少年组成的棒球队。"
  },
  {
    "title": "不知也无妨",
    "file": "movie-1253.html",
    "cover": 53,
    "region": "日本",
    "category": "高清电影",
    "tags": "周刊记者, 秘密, 真相, 伦理",
    "year": "2020",
    "description": "周刊记者真壁凯特追查生父死因时，发现每个知情人都在死前对她说：“不知也无妨。”"
  },
  {
    "title": "好兵帅克",
    "file": "movie-1254.html",
    "cover": 54,
    "region": "捷克斯洛伐克",
    "category": "剧情佳作",
    "tags": "讽刺, 反战, 愚笨, 黑色幽默, 经典",
    "year": "1957",
    "description": "一战前夕，一个被军医鉴定为“白痴”的胖士兵，用看似愚蠢的行为把奥匈帝国军队搅得天翻地覆。"
  },
  {
    "title": "蝙蝠侠与罗宾",
    "file": "movie-1255.html",
    "cover": 55,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "重启, 暗黑风, 搭档, 心理创伤, 写实战力",
    "year": "2026",
    "description": "蝙蝠侠在追查一起儿童失踪案时被迫收留一个父母被杀的杂技少年，而少年正是凶手想抓的下一个目标。"
  },
  {
    "title": "蒙提·派森和圣杯",
    "file": "movie-1256.html",
    "cover": 56,
    "region": "英国",
    "category": "喜剧动画",
    "tags": "荒诞， 恶搞， 亚瑟王， 低成本， cult",
    "year": "1975",
    "description": "亚瑟王带领他的侍从，在全损画质和没钱的特效中，踏上了寻找圣杯的荒诞旅程。"
  },
  {
    "title": "小心“陷阱”",
    "file": "movie-1257.html",
    "cover": 57,
    "region": "中国",
    "category": "动作犯罪",
    "tags": "剧本杀式结构, 全员恶人, 多重反转, 密室, 金钱游戏",
    "year": "2024",
    "description": "六个互不相识的人同时收到一封“继承遗产”的邀请函，却发现整栋别墅本身就是一个人为设计的致命陷阱。"
  },
  {
    "title": "回魂唱片",
    "file": "movie-1258.html",
    "cover": 58,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "灵异, 复古, 音乐, 轮回",
    "year": "2024",
    "description": "一张绝版黑胶唱片被播放后，听者会陆续梦见四十年前离奇烧死的女歌手。"
  },
  {
    "title": "红男绿女青春乐",
    "file": "movie-1259.html",
    "cover": 59,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "经典歌舞, 纽约, 赌局, 浪漫",
    "year": "1955",
    "description": "纽约的赌徒爱上救世军女郎，用一场荒诞的赌注试图赢得她的芳心。"
  },
  {
    "title": "代理市长",
    "file": "movie-1260.html",
    "cover": 60,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "反腐, 官场, 人性, 现实主义",
    "year": "2019",
    "description": "一个基层工程师被临时推上代理市长的位置，却发现这座城市的腐败远超他的想象。"
  },
  {
    "title": "出狱一团糟",
    "file": "movie-1261.html",
    "cover": 61,
    "region": "法国",
    "category": "动作犯罪",
    "tags": "黑色幽默， 出狱， 家庭关系， 社会底层， 荒诞",
    "year": "2024",
    "description": "坐了十五年牢的黑帮会计出狱后发现，当年送他进去的大哥现在是市长，而他的女儿成了大哥的秘书。"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 侠在江湖漂 整鬼专家 异空危情 异底洞 追梦高手 正义之师行动 调整时期 逆转世界的电池少女 末路狂花钱 八百八十号 大村庄的热情 邪教 校花的超级保镖之无极诀 三毛流浪记 白领丽人 善良的凡逊 独立协会的青年李承晩 巫山春色 特种突袭之觉醒 贴着你心跳",
    "file": "movie-1262.html",
    "cover": 62,
    "region": "根据片名判断",
    "category": "喜剧动画",
    "tags": "根据片名判断",
    "year": "根据片名判断",
    "description": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）"
  },
  {
    "title": "亲爱的敌人",
    "file": "movie-1263.html",
    "cover": 63,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "双男主, 警匪, 记忆移植, 猫鼠游戏, 高智商",
    "year": "2025",
    "description": "正义警察移植了死敌罪犯的记忆后，开始分不清自己是在追凶，还是在替凶手完成遗愿。"
  },
  {
    "title": "保留地之犬第三季",
    "file": "movie-1264.html",
    "cover": 64,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "原住民, 青春, 黑色幽默",
    "year": "2026",
    "description": "四个印第安少年发现，他们守护的“保留地”其实是一个被资金链操控的真人秀片场。"
  },
  {
    "title": "犯罪现场：悬赏",
    "file": "movie-1265.html",
    "cover": 65,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "暗网, 赏金猎人, 陪审团",
    "year": "2026",
    "description": "一个暗网直播节目：每期公布一桩悬案的悬赏，全球观众投票选出“该被追责的人”，随后那人便会离奇死亡。"
  },
  {
    "title": "水中血3",
    "file": "movie-1266.html",
    "cover": 66,
    "region": "泰国",
    "category": "剧情佳作",
    "tags": "变异鲨鱼, 黑帮, 水牢, 血浆, 孤岛逃生",
    "year": "2026",
    "description": "黑帮在公海游轮上进行人质交易，却遭遇实验室逃出的变异食人鲨，血水染红整片海域。"
  },
  {
    "title": "招惹",
    "file": "movie-1267.html",
    "cover": 67,
    "region": "泰国",
    "category": "科幻悬疑",
    "tags": "BL, 校园, 追妻火葬场, 年下",
    "year": "2024",
    "description": "校霸故意招惹清冷学霸，却在一步步靠近中把自己赔了进去。"
  },
  {
    "title": "德克斯特的实验室第一季",
    "file": "movie-1268.html",
    "cover": 68,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "天才儿童, 妹妹捣乱, 经典怀旧",
    "year": "1996",
    "description": "八岁神童德克斯特拥有全屋最大的秘密实验室，却总被姐姐破坏。"
  },
  {
    "title": "大“反”派",
    "file": "movie-1269.html",
    "cover": 69,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "戏中戏, 反派主角, 娱乐圈讽刺, 乌龙绑架, 低配版王牌特工",
    "year": "2024",
    "description": "一个演了半辈子汉奸的龙套演员，被一群真绑匪当成了黑帮大佬。"
  },
  {
    "title": "艳女挑情",
    "file": "movie-1270.html",
    "cover": 70,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "邵氏, 情欲, 都市, 三角恋, 女性觉醒",
    "year": "1991",
    "description": "夜总会舞女周旋于富商与画家之间，一场情感游戏最终烧毁了三个人的人生。"
  },
  {
    "title": "迷盲",
    "file": "movie-1271.html",
    "cover": 71,
    "region": "西班牙",
    "category": "喜剧动画",
    "tags": "感官剥夺, 密室逃脱, 心理游戏, 反转连环",
    "year": "2023",
    "description": "三个陌生人在废弃医院醒来，全部失明，他们发现自己陷入了一场只有靠听觉才能生存的猎杀游戏。"
  },
  {
    "title": "极限特工2",
    "file": "movie-1272.html",
    "cover": 72,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "特工, 极限运动, 全球通缉, 硬汉",
    "year": "2025",
    "description": "上一集侥幸存活的极限特工被重新征召，这次他要潜入太空站，阻止一颗被劫持的末日武器。"
  },
  {
    "title": "花椒之味",
    "file": "movie-1273.html",
    "cover": 73,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "美食疗愈、和解、三姐妹",
    "year": "2024",
    "description": "同父异母的三姐妹在父亲葬礼上相遇，通过一道祖传花椒鱼重拾家族亲情。"
  },
  {
    "title": "爱在大雪纷飞时",
    "file": "movie-1274.html",
    "cover": 74,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "雪夜重逢, 异地恋, 失而复得, 小城电影院, 迟到告白, 冬日治愈",
    "year": "2025",
    "description": "一场持续整月的大雪让两位多年未见的旧爱困在同一座小城里，也困住了那句拖了十年的告白。"
  },
  {
    "title": "深海浩劫",
    "file": "movie-1275.html",
    "cover": 75,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "潜艇, 深海怪兽, 环保, 救援",
    "year": "2026",
    "description": "深海采矿潜艇遭遇不明巨型生物袭击，氧气即将耗尽，船员必须徒步穿越海沟逃生。"
  },
  {
    "title": "直捣火星",
    "file": "movie-1276.html",
    "cover": 76,
    "region": "美国",
    "category": "欧美热播",
    "tags": "火星殖民, 太空战争, 机甲, 政治阴谋, 硬科幻",
    "year": "2026",
    "description": "火星殖民地的矿工们发动叛乱后，地球派出一支精英小队直捣火星核心，却发现真相远比叛变更恐怖。"
  },
  {
    "title": "交战规则",
    "file": "movie-1277.html",
    "cover": 77,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "军事法庭、道德困境、老兵、中东",
    "year": "2000",
    "description": "一位战功赫赫的美军上校在维和行动中下令击杀平民，回到美国后他面临军事法庭的审判，但真相远比指控更复杂。"
  },
  {
    "title": "黄色香车",
    "file": "movie-1278.html",
    "cover": 78,
    "region": "印度",
    "category": "高清电影",
    "tags": "出租车, 孟买, 阶级, 梦想",
    "year": "2024",
    "description": "一辆被诅咒的黄色出租车，凡坐过它的乘客都会倒霉，只有一位不信命的司机，决定找出诅咒源头并亲自打破它。"
  },
  {
    "title": "棒打鸳鸯",
    "file": "movie-1279.html",
    "cover": 79,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "相亲、误会、错位、反转",
    "year": "2024",
    "description": "金牌情感调解员为拆散一对“不合适”情侣，却意外把自己搭进了三角恋。"
  },
  {
    "title": "爱情四边形",
    "file": "movie-1280.html",
    "cover": 80,
    "region": "意大利",
    "category": "喜剧动画",
    "tags": "换偶, 中年危机, 开放式关系",
    "year": "2025",
    "description": "两对夫妻决定交换伴侣一晚，但第二天早上，他们发现四个人全都爱上了另一个人。"
  },
  {
    "title": "爱就是这么奇妙",
    "file": "movie-1281.html",
    "cover": 81,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "都市，缘分，误会，治愈",
    "year": "2024",
    "description": "一次手机系统错误，让一位自闭程序员与一个过气女歌手的命运交错，谎言与真心在数据中纠缠。"
  },
  {
    "title": "彩色响尾蛇",
    "file": "movie-1282.html",
    "cover": 82,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "黑帮， 卧底， 兄弟情， 枪战",
    "year": "1992",
    "description": "卧底警察阿豪深入黑帮“响尾蛇”，却发现自己的亲弟弟正是帮派头目的左膀右臂。"
  },
  {
    "title": "杀死爱人",
    "file": "movie-1283.html",
    "cover": 83,
    "region": "法国",
    "category": "动作犯罪",
    "tags": "时间循环, 病娇美学, 暴力浪漫",
    "year": "2025",
    "description": "如果你杀不死你的爱人，时间就会重置，直到你亲手终结TA的性命。"
  },
  {
    "title": "热血尖兵",
    "file": "movie-1284.html",
    "cover": 84,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "特种兵，兄弟情，训练成长，新兵连",
    "year": "2017",
    "description": "富二代、学霸与草根青年在特种部队的魔鬼训练营中相遇，从互相敌视到生死相依的热血蜕变。"
  },
  {
    "title": "小屁孩日记3：圣诞大惊喜",
    "file": "movie-1285.html",
    "cover": 85,
    "region": "美国",
    "category": "欧美热播",
    "tags": "圣诞节, 恶作剧, 礼物, 校园",
    "year": "2025",
    "description": "格雷格为了得到最贵的游戏机，决定在圣诞夜扮演“年度乖小孩”，却意外拆穿了圣诞老人的真相。"
  },
  {
    "title": "竞梦牛仔",
    "file": "movie-1286.html",
    "cover": 86,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "电竞、牛仔竞技、跨文化、中西结合、追梦",
    "year": "2027",
    "description": "中国电竞冠军被嘲只会“打游戏”，他跨界转战职业牛仔竞技赛，用游戏思维“打”遍西部牛仔。"
  },
  {
    "title": "宇宙奥秘狂想曲",
    "file": "movie-1287.html",
    "cover": 87,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "脑洞, 哲学, 科普, 成人向",
    "year": "2020",
    "description": "一个嗑了药的邮差在给宇宙送货的路上，顺便解开了“为什么宇宙存在”这个终极问题。"
  },
  {
    "title": "未了情粤语",
    "file": "movie-1288.html",
    "cover": 88,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "粤语片、错位人生、录音带",
    "year": "2025",
    "description": "她帮他录了一盘粤语教学带，三十年后他学会了粤语，她却忘记了他是谁。"
  },
  {
    "title": "双生炽爱",
    "file": "movie-1289.html",
    "cover": 89,
    "region": "泰国",
    "category": "欧美热播",
    "tags": "双胞胎, 替身, 骨科, 狗血, 豪门",
    "year": "2025",
    "description": "哥哥车祸成为植物人后，弟弟假扮他接近哥哥的未婚妻，却发现自己真正爱上的其实是“扮演哥哥”的感觉。"
  },
  {
    "title": "折翼少年残酷记事",
    "file": "movie-1290.html",
    "cover": 90,
    "region": "德国",
    "category": "精选视频",
    "tags": "二战, 少年兵, 东线, 黑白摄影",
    "year": "2022",
    "description": "十六岁的纳粹狂热分子被送上东线，用两周时间看透理想背后的尸山血海。"
  },
  {
    "title": "刽乐小丑2",
    "file": "movie-1291.html",
    "cover": 91,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "杀人小丑, 血浆片, 万圣节屠杀, 邪典续集",
    "year": "2026",
    "description": "上次被砍掉头的阿特，这次带着整个“恐怖马戏团”回来过万圣节了。"
  },
  {
    "title": "内心引力",
    "file": "movie-1292.html",
    "cover": 92,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "量子纠缠， 灵魂伴侣， 反套路",
    "year": "2024",
    "description": "科学家证明“内心引力”存在，但你的真命天子一旦与你对视超过3秒，你们都会瞬间心脏骤停。"
  },
  {
    "title": "鬼域",
    "file": "movie-1293.html",
    "cover": 93,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "灵异、废弃之地、都市传说、心理恐惧、港式恐怖",
    "year": "2027",
    "description": "一个专门探废的视频博主，在进入一个废弃的“闹鬼主题乐园”后，发现自己童年丢弃的所有东西，都活了过来。"
  },
  {
    "title": "扫毒风云之因货起的祸",
    "file": "movie-1294.html",
    "cover": 94,
    "region": "中国香港 / 中国大陆",
    "category": "剧情佳作",
    "tags": "卧底, 毒品残留, 警队内讧",
    "year": "2025",
    "description": "一包过期货引发的血案，让两个卧底在不知对方身份的情况下，展开了最残酷的互猎。"
  },
  {
    "title": "血腥谋杀2：关闭营",
    "file": "movie-1295.html",
    "cover": 95,
    "region": "美国",
    "category": "高清电影",
    "tags": "密室，改造，暴力，惊悚",
    "year": "2015",
    "description": "专门关押少年犯的“关闭营”里，每周都会有一名少年“被自杀”，新来的心理医生发现了剥皮魔的存在。"
  },
  {
    "title": "门外杀机",
    "file": "movie-1296.html",
    "cover": 96,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "密室，陌生人，反转，心理战，极简",
    "year": "2023",
    "description": "独居女性深夜听到门外有异响，智能门铃显示一个陌生男人在不停地敲门。"
  },
  {
    "title": "结束",
    "file": "movie-1297.html",
    "cover": 97,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "末日倒计时, 人生回放, 存在主义, 平静绝望",
    "year": "2025",
    "description": "地球消亡前七天，政府为每户发放一粒“后悔药”，可穿越改一次人生遗憾。"
  },
  {
    "title": "追寻音乐的灵光",
    "file": "movie-1298.html",
    "cover": 98,
    "region": "英国",
    "category": "科幻悬疑",
    "tags": "钢琴, 天才, 精神困境, 创作",
    "year": "2023",
    "description": "一位失明钢琴天才为寻找一段从未听过的旋律，走遍世界，却在最寂静的地方找到了它。"
  },
  {
    "title": "老枪2025",
    "file": "movie-1299.html",
    "cover": 99,
    "region": "法国",
    "category": "喜剧动画",
    "tags": "退休杀手, 黑吃黑, 复仇",
    "year": "2025",
    "description": "隐居乡下的退休杀手被迫重出江湖，却发现追杀自己的组织里全是曾经的学生。"
  },
  {
    "title": "结婚才可以",
    "file": "movie-1300.html",
    "cover": 100,
    "region": "韩国",
    "category": "爱情青春",
    "tags": "先性后爱, 契约, 保守父亲, 爆笑",
    "year": "2015",
    "description": "一对热恋中的情侣因为女方父亲的“无结婚证不许同床”死规矩，被迫上演假装结婚的闹剧。"
  },
  {
    "title": "奇蛋物语",
    "file": "movie-1301.html",
    "cover": 101,
    "region": "日本",
    "category": "欧美热播",
    "tags": "少女, 梦境, 创伤, 平行世界",
    "year": "2024",
    "description": "少女在梦中购买神秘“奇蛋”，只要打破它并拯救里面的女孩，就能让死去的挚友复活。"
  },
  {
    "title": "站直啰！别趴下",
    "file": "movie-1302.html",
    "cover": 102,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "民间拳手, 逆袭, 现实主义",
    "year": "2023",
    "description": "42岁的外卖大叔为给女儿筹医药费，报名参加职业拳击赛，第一轮对手是冠军。"
  },
  {
    "title": "脆莓公园第二季",
    "file": "movie-1303.html",
    "cover": 103,
    "region": "美国",
    "category": "欧美热播",
    "tags": "荒诞, 森林小镇, 群像, 黑色幽默, 职场讽刺",
    "year": "2014",
    "description": "在一座连树都会吐槽人的森林公园里，第二季把每个失控的日常都升级成了更离谱的生存实验。"
  },
  {
    "title": "刦后鸳鸯",
    "file": "movie-1304.html",
    "cover": 104,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "劫匪、亡命鸳鸯、港式暴力美学、虐恋",
    "year": "2025",
    "description": "一对银行劫匪情侣在一次失手后逃入边境丛林，七天绝境求生中，他们对彼此的忠诚不断被饥饿和猜忌拷打。"
  },
  {
    "title": "网络杀机",
    "file": "movie-1305.html",
    "cover": 105,
    "region": "美国",
    "category": "欧美热播",
    "tags": "暗网, 直播杀人, 黑客, 以暴制暴",
    "year": "2024",
    "description": "一个黑客发现暗网直播“杀人竞拍”，而她作为观众的一次点击，使她成为下一个竞拍标的。"
  },
  {
    "title": "大进击",
    "file": "movie-1306.html",
    "cover": 106,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "抢劫，老人院，热血，退休生活",
    "year": "2024",
    "description": "养老院里，五位被儿女抛弃的前黑帮大佬决定重出江湖，抢劫金库来支付自己的养老费。"
  },
  {
    "title": "铁达尼号666",
    "file": "movie-1307.html",
    "cover": 107,
    "region": "美国",
    "category": "高清电影",
    "tags": "幽灵船, 深渊, 恶魔, 惊悚",
    "year": "2024",
    "description": "一支深海探测队重返泰坦尼克号残骸，唤醒了沉没在海底的远古恶魔。"
  },
  {
    "title": "西尔玛",
    "file": "movie-1308.html",
    "cover": 108,
    "region": "瑞典",
    "category": "动作犯罪",
    "tags": "北欧、滑雪、失踪、小镇秘密、女性",
    "year": "2026",
    "description": "北欧滑雪胜地发生少女失踪案，女警西尔玛在调查中，发现整个小镇都为此撒了谎。"
  },
  {
    "title": "熊出没逆转时空",
    "file": "movie-1309.html",
    "cover": 109,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "熊大, 熊二, 光头强, 时空穿越, 平行宇宙",
    "year": "2024",
    "description": "光头强意外得到一个能穿越平行时空的遥控器，却把熊大熊二变成了城市的CEO和精英。"
  },
  {
    "title": "人为因素",
    "file": "movie-1310.html",
    "cover": 110,
    "region": "英国",
    "category": "科幻悬疑",
    "tags": "航空，空难调查，职场，心理",
    "year": "2024",
    "description": "一架全新客机失事，调查显示“无机械故障”，真相只可能是机长亲手杀了全机人。"
  },
  {
    "title": "魔幻学院",
    "file": "movie-1311.html",
    "cover": 111,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "魔法校园, 反套路, 学渣逆袭, 考试地狱",
    "year": "2026",
    "description": "所有魔法学院的剧情都是骗人的——入学第一课不是搓火球，是考《高等元素论》微积分，挂科三次直接退学。"
  },
  {
    "title": "沙漠恶魔",
    "file": "movie-1312.html",
    "cover": 112,
    "region": "澳大利亚",
    "category": "科幻悬疑",
    "tags": "沙漠，怪物，生存，考古",
    "year": "2024",
    "description": "考古队在沙漠深处挖出一具三米长骸骨，当晚所有人开始听到沙下有东西在移动。"
  },
  {
    "title": "岛上的老师",
    "file": "movie-1313.html",
    "cover": 113,
    "region": "日本",
    "category": "精选视频",
    "tags": "离岛, 教师, 只有一个学生, 治愈",
    "year": "2016",
    "description": "日本边陲小岛，全校只有一个学生，唯一的老师为她开设了“专属王国”。"
  },
  {
    "title": "孤寂",
    "file": "movie-1314.html",
    "cover": 114,
    "region": "法国",
    "category": "精选视频",
    "tags": "自闭症, 亲情, 无声世界, 自然主义, 治愈",
    "year": "2022",
    "description": "重度自闭症男孩唯一的朋友，是阿尔卑斯山上一个会讲人话的雪坑。"
  },
  {
    "title": "光杆司令",
    "file": "movie-1315.html",
    "cover": 115,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "退役特工, 复仇, 荒诞, 热血",
    "year": "2025",
    "description": "一名被组织抛弃的退役特工，为了找回自己的退休金，决定单枪匹马黑进五角大楼的财务系统。"
  },
  {
    "title": "我怒了",
    "file": "movie-1316.html",
    "cover": 116,
    "region": "美国",
    "category": "欧美热播",
    "tags": "硬汉复仇, 以暴制暴, 公路追杀",
    "year": "2023",
    "description": "女儿的哮喘吸入器忘在车上，回来却发现她被绑架，这位父亲要在8小时内释放心中猛兽。"
  },
  {
    "title": "田纳西·约翰逊",
    "file": "movie-1317.html",
    "cover": 117,
    "region": "美国",
    "category": "欧美热播",
    "tags": "总统, 律师, 历史, 权谋",
    "year": "2023",
    "description": "美国第17任总统约翰逊从裁缝学徒到白宫的另类崛起，以及他险些被罢免的惊险时刻。"
  },
  {
    "title": "吾凰在上 动态漫画",
    "file": "movie-1318.html",
    "cover": 118,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "动态漫画，女强，凤凰，重生，逆袭",
    "year": "2024",
    "description": "上古凤凰神女渡劫失败，重生为异世界的废柴公主，她发誓要夺回神位，却发现敌国皇帝竟是她前世的夫君。"
  },
  {
    "title": "星命难违",
    "file": "movie-1319.html",
    "cover": 119,
    "region": "美国",
    "category": "精选视频",
    "tags": "末日恋人, 星座预言, 生死抉择",
    "year": "2026",
    "description": "天文学家发现一颗注定撞毁地球的小行星，而她的占星师男友坚持星盘显示两人要一起飞向它。"
  },
  {
    "title": "新亚马逊河历险记",
    "file": "movie-1320.html",
    "cover": 120,
    "region": "巴西 / 美国",
    "category": "剧情佳作",
    "tags": "雨林探险、生物黑客、环保寓言、亚马逊传说、视效大片",
    "year": "2026",
    "description": "亚马逊雨林深处，一个动物学家、一个土著女孩和一只会“说话”的水豚，对抗试图复活恐龙基因的科技巨头。"
  },
  {
    "title": "香飘蝶恋",
    "file": "movie-1321.html",
    "cover": 121,
    "region": "中国台湾",
    "category": "精选视频",
    "tags": "香水，蝴蝶，宿命，民国，虐恋",
    "year": "1997",
    "description": "民国香水师用亡妻体香研制“蝶恋”，却发现复活的蝴蝶每夜都在啃噬她的墓碑。"
  },
  {
    "title": "飘雪六月天",
    "file": "movie-1322.html",
    "cover": 122,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "飘雪, 夏天, 记忆, 北方小城, 母女, 旧照片",
    "year": "2009",
    "description": "在六月突然飘起大雪的小城里，一封迟到二十年的信，把离散的母女、消失的恋人和被封存的往事重新连在一起。"
  },
  {
    "title": "十二楼",
    "file": "movie-1323.html",
    "cover": 123,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "单元剧, 租房, 都市传说, 群像",
    "year": "2025",
    "description": "一栋老式居民楼的12个房间，12个租客，每个人都有一个秘密，而第13个秘密藏在电梯里。"
  },
  {
    "title": "抢救车诺比",
    "file": "movie-1324.html",
    "cover": 124,
    "region": "美国 / 乌克兰",
    "category": "剧情佳作",
    "tags": "切尔诺贝利、真实事件改编、核灾、英雄主义、政治",
    "year": "2025",
    "description": "切尔诺贝利事故发生48小时后，三名工程师自愿进入反应堆下方，这是一次有去无回的任务。"
  },
  {
    "title": "怒海搜救队",
    "file": "movie-1325.html",
    "cover": 125,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "海上救援，兄弟情，台风",
    "year": "1998",
    "description": "百年一遇的超级台风夜，一艘渡轮在公海沉没，搜救队与时间赛跑。"
  },
  {
    "title": "泳者",
    "file": "movie-1326.html",
    "cover": 126,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "竞技, 励志, 残奥会, 亲情",
    "year": "2025",
    "description": "失去双臂的少女被教练骗进游泳队，因为教练说“你没手，划水阻力小，是天生的冠军料”。"
  },
  {
    "title": "画江湖之灵主",
    "file": "movie-1327.html",
    "cover": 127,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "国风，灵异，悬案，御灵",
    "year": "2023",
    "description": "能看见死者执念的“御灵师”，为解开师父惨死之谜，闯入一幅会吃人的古画。"
  },
  {
    "title": "小妇人",
    "file": "movie-1328.html",
    "cover": 128,
    "region": "韩国",
    "category": "爱情青春",
    "tags": "姐妹, 财阀, 贫穷, 兰花",
    "year": "2022",
    "description": "贫穷的三姐妹意外获得700亿韩元，却发现这笔钱与一桩连环杀人案和一种稀有兰花有关。"
  },
  {
    "title": "邮差总按两次铃",
    "file": "movie-1329.html",
    "cover": 129,
    "region": "美国",
    "category": "爱情青春",
    "tags": "黑色电影, 背叛, 宿命, 反转",
    "year": "2025",
    "description": "为了私奔，她伙同情夫谋杀亲夫，第一次谋杀失败了，第二次似乎成功了，但邮差总会按两次铃。"
  },
  {
    "title": "火并",
    "file": "movie-1330.html",
    "cover": 130,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "双雄、帮派、内鬼",
    "year": "2025",
    "description": "两大毒枭为争夺新市场而火并，奉命卧底的双面警探发现自己同时被两边怀疑。"
  },
  {
    "title": "德意志零年",
    "file": "movie-1331.html",
    "cover": 131,
    "region": "意大利 / 德国",
    "category": "高清电影",
    "tags": "战后重建, 家庭悲剧, 新现实主义, 饥饿",
    "year": "2024",
    "description": "1948年的柏林废墟里，12岁的男孩为了赚一口面包，帮黑市商人毒死了自己瘫痪在床、拖累全家的父亲。"
  },
  {
    "title": "放荡的人，拉斐尔",
    "file": "movie-1332.html",
    "cover": 132,
    "region": "意大利",
    "category": "科幻悬疑",
    "tags": "艺术家, 文艺复兴, 浪子回头",
    "year": "2023",
    "description": "文艺复兴时期天才画家拉斐尔，在纵欲与创作之间疯狂摇摆，直到一个妓女成了他最后的模特。"
  },
  {
    "title": "沃尔多·沙特：编剧之旅",
    "file": "movie-1333.html",
    "cover": 133,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "幕后揭秘， 好莱坞， 创作焦虑， 编剧行业",
    "year": "2023",
    "description": "从未公开露面的传奇编剧沃尔多·沙特，终于在晚年答应镜头，讲述他用笔名写下的 200 部剧本。"
  },
  {
    "title": "凶灵夜妈妈",
    "file": "movie-1334.html",
    "cover": 134,
    "region": "西班牙",
    "category": "爱情青春",
    "tags": "民俗恐怖，母亲节，扭曲母爱",
    "year": "2024",
    "description": "小镇每年母亲节当晚，所有孩子的亲生母亲都会变成怪物，追杀自己的孩子。"
  },
  {
    "title": "正义的子弹",
    "file": "movie-1335.html",
    "cover": 135,
    "region": "美国",
    "category": "爱情青春",
    "tags": "赏金猎人，蒸汽朋克，反乌托邦",
    "year": "2025",
    "description": "在资源枯竭的未来，一名赏金猎人得到一只能审判罪恶的“正义左轮”，但每开一枪都要消耗自己的寿命。"
  },
  {
    "title": "机关算尽深宫计粤语",
    "file": "movie-1336.html",
    "cover": 136,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "粤语配音, 女官, 太监秘闻, 反转再反转, 全员恶人",
    "year": "2025",
    "description": "宫女上位成为掌印太监的养女，却发现养父的每一步“栽培”都是在为她挖坟。"
  },
  {
    "title": "倚天钦差",
    "file": "movie-1337.html",
    "cover": 137,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "反腐, 官场, 智斗, 明朝, 孤臣",
    "year": "2023",
    "description": "一个没有背景的七品小官，靠着一本账册和不怕死的劲头，将整个江南官场拉下马。"
  },
  {
    "title": "青春恋",
    "file": "movie-1338.html",
    "cover": 138,
    "region": "中国台湾",
    "category": "精选视频",
    "tags": "台式纯爱, 年代记忆, 错过与重逢, 友情以上",
    "year": "2024",
    "description": "1997年的夏天，三个高中死党约定毕业旅行告白，却在月台因一场误会各自离散二十年。"
  },
  {
    "title": "假如",
    "file": "movie-1339.html",
    "cover": 139,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "平行宇宙, 选择困境, 人生反思",
    "year": "2024",
    "description": "一位失意的程序员意外获得能预览每个选择后果的眼镜，却在窥探无数种人生后，发现所有“假如”都指向同一个无法逃离的结局。"
  },
  {
    "title": "前世今生",
    "file": "movie-1340.html",
    "cover": 140,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "轮回, 催眠, 记忆, 阴谋",
    "year": "2025",
    "description": "心理医生催眠女友治疗失眠，却意外唤起她连续七世的被谋杀记忆，而凶手长得都像他自己。"
  },
  {
    "title": "不死者之王：剧场版前篇",
    "file": "movie-1341.html",
    "cover": 141,
    "region": "日本",
    "category": "高清电影",
    "tags": "亡灵王者, 古代遗迹, 王国阴谋, 魔法战争, 阵营博弈",
    "year": "2023",
    "description": "一顶会记住死亡的古冠把安兹拖进失落王朝的旧账，前脚还是探查遗迹，后脚已变成足以改写世界格局的亡灵战争。"
  },
  {
    "title": "异星战境",
    "file": "movie-1342.html",
    "cover": 142,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "AI, 机甲, 星际殖民, 背叛",
    "year": "2026",
    "description": "人类星际舰队的王牌机甲驾驶员，被派往叛变的AI行星执行斩首任务，却发现AI总统长得像他死去的女儿。"
  },
  {
    "title": "大班密令之英雄交响曲粤语",
    "file": "movie-1343.html",
    "cover": 143,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "TVB, 粤语, 大班, 交响曲, 英雄",
    "year": "1987",
    "description": "一位神秘富豪“大班”私下组织了一支秘密精英队，专门对付法律无法制裁的恶人，却发现自己最信任的副手是卧底。"
  },
  {
    "title": "君在远方",
    "file": "movie-1344.html",
    "cover": 144,
    "region": "韩国",
    "category": "爱情青春",
    "tags": "越南战争, 寻夫, 女性力量, 音乐",
    "year": "2023",
    "description": "为了寻找参战失踪的丈夫，一个木讷的农妇加入慰问演出团，拿起话筒深入热带丛林。"
  },
  {
    "title": "同窗",
    "file": "movie-1345.html",
    "cover": 145,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "青春, 校园, 悬疑, 成长, 友谊",
    "year": "2024",
    "description": "毕业十年后的同学会上，一张匿名纸条揭开了当年校花坠楼事件背后不为人知的沉默共谋。"
  },
  {
    "title": "我的校花妹妹2",
    "file": "movie-1346.html",
    "cover": 146,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "伪骨科, 校园, 误会连环, 学霸追妻",
    "year": "2017",
    "description": "哥哥隐瞒没有血缘关系的真相，拼命阻止校花妹妹谈恋爱，却发现她暗恋的人竟是自己。"
  },
  {
    "title": "孤城客粤语",
    "file": "movie-1347.html",
    "cover": 147,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "末世武侠, 围城, 瘟疫, 人性实验, 粤语原声",
    "year": "2023",
    "description": "一座被瘟疫围困的孤城中，七位武林高手各怀鬼胎，而瘟疫的源头竟是他们其中一人。"
  },
  {
    "title": "万世巨星",
    "file": "movie-1348.html",
    "cover": 148,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "音乐产业,流行文化,成名困境,时代背景,反思",
    "year": "1993",
    "description": "一位小城工厂混音师从后台走到聚光灯中央，却在被称为“万世巨星”后才发现，最难处理的不只是唱功，而是选择仍被当作他人的代言人生。"
  },
  {
    "title": "全世界都不如你2021",
    "file": "movie-1349.html",
    "cover": 149,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "替身, 先婚后爱, 甜宠, 欢喜冤家, 轻喜剧",
    "year": "2021",
    "description": "为了逃避联姻，大小姐用双胞胎姐姐的身份嫁给盲人丈夫，却不知新郎的“盲”是装出来的。"
  },
  {
    "title": "九死",
    "file": "movie-1350.html",
    "cover": 150,
    "region": "美国",
    "category": "精选视频",
    "tags": "密室逃脱, 限时救援, 一命换九命",
    "year": "2023",
    "description": "醒来发现自己和八个陌生人被锁在废弃监狱，每十分钟死一人，活到最后的才能出去。"
  },
  {
    "title": "万域封神",
    "file": "movie-1351.html",
    "cover": 1,
    "region": "中国",
    "category": "喜剧动画",
    "tags": "修仙, 穿越诸天, 废柴逆袭",
    "year": "2026",
    "description": "被逐出宗门的废柴少年偶得“万界图”，从此穿越万千位面，窃取诸天神魔的传承。"
  },
  {
    "title": "恋之涡",
    "file": "movie-1352.html",
    "cover": 2,
    "region": "韩国",
    "category": "高清电影",
    "tags": "四角恋, 反转不断, 嫉妒杀机",
    "year": "2024",
    "description": "三对情侣的同居派对，醒来后一个人失踪，所有人记忆错乱。"
  },
  {
    "title": "开心女鬼粤语",
    "file": "movie-1353.html",
    "cover": 3,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "TVB, 怀旧, 闹鬼, 都市传说, 温情",
    "year": "1985",
    "description": "疯疯癫癫的富家千金意外惨死，化作游魂帮助懦弱闺蜜追求男神，却闹出一连串乌龙。"
  },
  {
    "title": "痴呆症",
    "file": "movie-1354.html",
    "cover": 4,
    "region": "日本",
    "category": "爱情青春",
    "tags": "阿尔茨海默, 亲情, 社会, 催泪",
    "year": "2019",
    "description": "一位患早发性痴呆症的母亲，每天醒来都以为丈夫还活着，儿子决定陪她演一辈子戏。"
  },
  {
    "title": "海滩发烧",
    "file": "movie-1355.html",
    "cover": 5,
    "region": "泰国",
    "category": "高清电影",
    "tags": "沙滩, 电子音乐, 病毒, 狂欢, 生存恐怖",
    "year": "2019",
    "description": "在泰国一个与世隔绝的满月派对上，一种通过音乐传播的未知病毒爆发，狂欢瞬间变成血腥屠杀。"
  },
  {
    "title": "花轿喜事",
    "file": "movie-1356.html",
    "cover": 6,
    "region": "中国",
    "category": "高清电影",
    "tags": "错嫁, 欢喜冤家, 经商, 甜宠, 丫鬟逆袭",
    "year": "2025",
    "description": "富家千金与丫鬟同日出嫁，花轿因大雨错换，两人分别嫁入了仇家与穷书生家中。"
  },
  {
    "title": "制暴 印度版",
    "file": "movie-1357.html",
    "cover": 7,
    "region": "印度",
    "category": "科幻悬疑",
    "tags": "热血警匪，体制腐败，女性复仇，手撕反派",
    "year": "2024",
    "description": "一名女警长的女儿被高种姓富商虐杀，法律无法制裁罪犯，她选择用最原始的方式——以暴制暴。"
  },
  {
    "title": "豹",
    "file": "movie-1358.html",
    "cover": 8,
    "region": "意大利",
    "category": "动作犯罪",
    "tags": "贵族, 史诗, 萨利纳亲王, 复兴运动, 视觉系",
    "year": "2027",
    "description": "19世纪意大利贵族萨利纳亲王，在时代变革的洪流中，目睹自己的阶级如豹般优雅地消亡。"
  },
  {
    "title": "双重追击",
    "file": "movie-1359.html",
    "cover": 9,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "双雄, 黑白两道, 猫鼠游戏, 阴谋, 高速追逃",
    "year": "2025",
    "description": "黑道顶级杀手与白道落魄刑警同时盯上了一个失忆的证人，三人开启了一场互相厮杀的追击战。"
  },
  {
    "title": "戏王之王国语",
    "file": "movie-1360.html",
    "cover": 10,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "粤剧, 没落, 父子, 精神分裂, 戏台",
    "year": "2026",
    "description": "一个被时代抛弃的粤剧名伶，把自己困在废弃的戏院里，用仅存的精神分裂出整个“戏班”，排练一场只有一个观众的戏。"
  },
  {
    "title": "海啸鲨机",
    "file": "movie-1361.html",
    "cover": 11,
    "region": "美国",
    "category": "欧美热播",
    "tags": "海啸，鲨鱼，B级片，密室逃生，爽片",
    "year": "2017",
    "description": "超级海啸淹没城市，一群幸存者被困在被鲨鱼包围的超市里，而水位正在不断上涨。"
  },
  {
    "title": "无题",
    "file": "movie-1362.html",
    "cover": 12,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "失忆, 画展, 身份认同",
    "year": "2024",
    "description": "一位失忆的画廊老板在筹备无名画展时，发现每幅画作都藏着指向凶案的线索。"
  },
  {
    "title": "自你走后2",
    "file": "movie-1363.html",
    "cover": 13,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "续集, 乐队解散, 中年救赎",
    "year": "2025",
    "description": "第一部的男主角去世五年后，曾经乐队的成员被一笔神秘遗产重新聚到一起。"
  },
  {
    "title": "上流秘笈",
    "file": "movie-1364.html",
    "cover": 14,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "豪门，卧底，反转，阶级",
    "year": "2024",
    "description": "贫寒女凭一本《上流秘笈》混入顶级豪门，却发现书中的每一条法则都对应着一桩命案。"
  },
  {
    "title": "宗方姊妹",
    "file": "movie-1365.html",
    "cover": 15,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "小津安二郎， 黑白片， 姐妹情",
    "year": "1950",
    "description": "战后日本，守旧的姐姐与摩登的妹妹同时爱上一个男人，姐妹情被时代碾碎。"
  },
  {
    "title": "孔雀王朝",
    "file": "movie-1366.html",
    "cover": 16,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "宫廷斗争、反转、女性群像、美学巅峰",
    "year": "2026",
    "description": "织坊孤女身负血海深仇，冒名顶替入宫为婢，却发现灭门元凶竟是枕边人。"
  },
  {
    "title": "旋涡1949",
    "file": "movie-1367.html",
    "cover": 17,
    "region": "中国内地",
    "category": "科幻悬疑",
    "tags": "谍战，双面间谍，绝密，反转",
    "year": "2025",
    "description": "1949年解放前夕，一个代号“旋涡”的双面间谍，让所有人都分不清敌友。"
  },
  {
    "title": "处女之誓",
    "file": "movie-1368.html",
    "cover": 18,
    "region": "法国",
    "category": "精选视频",
    "tags": "中世纪, 女性自主, 修道院, 宗教",
    "year": "2017",
    "description": "14世纪，一个被父亲许配给残暴领主的贵族少女，在进入修道院避婚的那一晚，向圣处女做出了一个惊世骇俗的誓言。"
  },
  {
    "title": "皇家圆舞曲",
    "file": "movie-1369.html",
    "cover": 19,
    "region": "英国",
    "category": "动作犯罪",
    "tags": "宫廷斗争, 古典乐, 三角恋, 维多利亚时代",
    "year": "2025",
    "description": "维多利亚时代，一位极具天赋的平民女钢琴师被聘为宫廷乐师，却意外卷入了王位继承人的爱恨情仇。"
  },
  {
    "title": "泰山扫荡野人国",
    "file": "movie-1370.html",
    "cover": 20,
    "region": "美国",
    "category": "欧美热播",
    "tags": "泰山、丛林、野人、B级片、经典冒险",
    "year": "1952",
    "description": "泰山在丛林中拯救了一位女科学家，却发现一个崇拜白猿的野人部落正在进行残忍的活人祭祀。"
  },
  {
    "title": "纵横四海",
    "file": "movie-1371.html",
    "cover": 21,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "兄弟情, 国际刑警, 高科技, 反转",
    "year": "2026",
    "description": "曾经的侠盗三人组重出江湖，这次却要为死对头黑帮老大夺回被AI盗取的命运之钥。"
  },
  {
    "title": "直线篡位",
    "file": "movie-1372.html",
    "cover": 22,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "黑客，暗网，总统竞选，替身",
    "year": "2024",
    "description": "一名顶级黑客发现总统候选人是深度伪造的AI替身，而他刚被灭口未遂，必须直线篡位夺回真相。"
  },
  {
    "title": "世间道",
    "file": "movie-1373.html",
    "cover": 23,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "民国商战, 复仇, 兄弟反目, 家国情怀",
    "year": "2025",
    "description": "被兄弟陷害入狱十八年，出狱后他化身最神秘的炒家，不杀一人，只用金钱的规则摧毁仇人的世界。"
  },
  {
    "title": "搅乜鬼咁多青春片",
    "file": "movie-1374.html",
    "cover": 24,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "粤语, 元电影, 恶搞, 校园, 戏中戏",
    "year": "2024",
    "description": "一个三流导演带着剧组回母校拍青春片，结果真实发生的校园故事比他们写的剧本还要狗血一百倍。"
  },
  {
    "title": "一人之下第五季",
    "file": "movie-1375.html",
    "cover": 25,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "异人, 八奇技, 纳森岛, 国风超能",
    "year": "2024",
    "description": "张楚岚和冯宝宝深入纳森岛，在世界异人势力围攻下寻找无根生宝藏与宝儿姐身世。"
  },
  {
    "title": "怜悯的种类",
    "file": "movie-1376.html",
    "cover": 26,
    "region": "美国 / 英国",
    "category": "高清电影",
    "tags": "黑色幽默, 底层互害, 反讽, 多线叙事, 人性",
    "year": "2022",
    "description": "三个关于“怜悯”的黑色寓言：施暴者救赎不了自己，被施舍者最终举起屠刀。"
  },
  {
    "title": "覆流年",
    "file": "movie-1377.html",
    "cover": 27,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "重生， 宅斗， 虐恋， 大女主",
    "year": "2023",
    "description": "皇后被挚爱毒杀后重生为农家女，却发现仇人也在这一世保留着记忆。"
  },
  {
    "title": "苦海双雏",
    "file": "movie-1378.html",
    "cover": 28,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "经典修复， 童星， 江湖义气",
    "year": "1989",
    "description": "黑帮火并后的雨夜，两个素不相识的孤儿为了抢夺一个面包而大打出手，却在十年后成了香港最传奇的“贼拍档”。"
  },
  {
    "title": "旭日之家",
    "file": "movie-1379.html",
    "cover": 29,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "黑帮，家族，逃亡，救赎，人性",
    "year": "2011",
    "description": "黑帮家族的小儿子在灭门之夜幸存，十年后他回到“旭日之家”旅馆，发现仇人竟是当年救他的恩人。"
  },
  {
    "title": "大话江湖",
    "file": "movie-1380.html",
    "cover": 30,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "无厘头, 江湖, 恶搞, 反转, 群像",
    "year": "2025",
    "description": "一个靠江湖骗术为生的神棍，阴差阳错被推选为武林盟主，却发现这个世界根本没有武功。"
  },
  {
    "title": "爱之花",
    "file": "movie-1381.html",
    "cover": 31,
    "region": "日本",
    "category": "高清电影",
    "tags": "纯爱, 绝症, 催泪, 治愈, 文艺",
    "year": "2024",
    "description": "花店店员发现每卖出一束花，暗恋的钢琴家就会多活一天，于是她开始了一场无声的拯救。"
  },
  {
    "title": "香草天空",
    "file": "movie-1382.html",
    "cover": 32,
    "region": "西班牙 / 美国",
    "category": "爱情青春",
    "tags": "梦境现实、毁容、富家子弟、记忆重构",
    "year": "2001",
    "description": "一个毁容的富二代在监狱醒来，分不清杀死爱人的究竟是梦境还是现实。"
  },
  {
    "title": "我是悟",
    "file": "movie-1383.html",
    "cover": 33,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "孙悟空, 中年危机, 解构西游, 存在主义, 高概念",
    "year": "2026",
    "description": "取经结束五百年后，斗战胜佛发现自己只是一本小说里的角色，而作者正在写他的“结局”。"
  },
  {
    "title": "服从",
    "file": "movie-1384.html",
    "cover": 34,
    "region": "美国",
    "category": "爱情青春",
    "tags": "心理压迫， 真实事件改编， 细思极恐",
    "year": "2012",
    "description": "一个自称警察的电话，让快餐店经理命令女店员脱衣搜身，全程无人质疑。"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 自恋刑警 天下有情之阿福传 大恋爱：与将我忘记的你 汪汪队立大功第五季 我对你有感觉 街区男孩 夏尔巴 新世间路 难以置信的怪物 红色小提琴 老无所依 八月的星期天 一生有你2019 威灵顿之线 生来自由 出入平安 响马太太 萨拉甜品店 鹰扬 丛林大反攻4：吓傻了",
    "file": "movie-1385.html",
    "cover": 35,
    "region": "根据片名判断",
    "category": "高清电影",
    "tags": "根据片名判断",
    "year": "根据片名判断",
    "description": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）"
  },
  {
    "title": "风飞鲨2",
    "file": "movie-1386.html",
    "cover": 36,
    "region": "美国",
    "category": "精选视频",
    "tags": "山寨大片, 龙卷风鲨鱼, 无脑爽片, B级片, 邪典",
    "year": "2014",
    "description": "上一次是龙卷风卷起鲨鱼，这一次是火山爆发把远古鲨鱼送上太空又砸回地球。"
  },
  {
    "title": "新甘十九妹",
    "file": "movie-1387.html",
    "cover": 37,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "翻拍, 复仇, 侠女, 虐恋",
    "year": "2014",
    "description": "背负血海深仇的甘十九妹，奉命灭门却唯独对一个敌门弟子动了心，这是一场注定无法圆满的死局。"
  },
  {
    "title": "胖小子的世界规则",
    "file": "movie-1388.html",
    "cover": 38,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "减肥, 校园霸凌, 逆袭, 黑色幽默",
    "year": "2026",
    "description": "一个200斤的高中生决定用“胖子的规则”统治校园，却发现瘦下来后失去了所有朋友。"
  },
  {
    "title": "仙人坝的红衣兜",
    "file": "movie-1389.html",
    "cover": 39,
    "region": "中国",
    "category": "欧美热播",
    "tags": "民俗恐怖, 女性互助, 时代伤痕",
    "year": "2023",
    "description": "1999年，返乡女教师发现村里每年都会有一个穿红衣的女人在仙人坝消失，而下一个轮到了她母亲。"
  },
  {
    "title": "浪客剑心2012",
    "file": "movie-1390.html",
    "cover": 40,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "武士, 逆刃刀, 明治维新",
    "year": "2012",
    "description": "传奇刽子手隐退十年后，被迫重出江湖，用不杀人的逆刃刀守护身边人。"
  },
  {
    "title": "查理和巧克力工厂",
    "file": "movie-1391.html",
    "cover": 41,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "奇幻, 家庭, 蒂姆·伯顿, 巧克力, 冒险",
    "year": "2005",
    "description": "五个孩子获得了参观神秘巧克力工厂的金券，等待他们的是一场充满诱惑与惩罚的奇幻之旅。"
  },
  {
    "title": "合理怀疑第三季",
    "file": "movie-1392.html",
    "cover": 42,
    "region": "美国",
    "category": "精选视频",
    "tags": "律政, 陪审团, 反转, 社会派, 群像剧",
    "year": "2025",
    "description": "一名黑客被杀案中，十二名陪审员各怀鬼胎，而真正的凶手可能就在他们中间。"
  },
  {
    "title": "工作的孩子",
    "file": "movie-1393.html",
    "cover": 43,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "留守儿童, 城乡差异, 打工潮, 纪实风格",
    "year": "1995",
    "description": "十岁的小福为了给母亲凑医药费，独自踏上南下打工的列车，却发现工厂拒绝童工。"
  },
  {
    "title": "笼中格斗王第一季",
    "file": "movie-1394.html",
    "cover": 44,
    "region": "泰国",
    "category": "爱情青春",
    "tags": "泰拳, 黑拳市场, 兄弟反目",
    "year": "2025",
    "description": "贫民窟兄弟被黑帮培养成笼斗机器，冠军奖品是自由的假象。"
  },
  {
    "title": "药",
    "file": "movie-1395.html",
    "cover": 45,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "走私, 救命药, 现实主义, 道德困境, 催泪",
    "year": "2024",
    "description": "为救患癌的母亲，女儿铤而走险从海外走私低价药，却成为了警方和药企的双重目标。"
  },
  {
    "title": "爬坡人生",
    "file": "movie-1396.html",
    "cover": 46,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "中年危机，自行车，梦想，小镇",
    "year": "2024",
    "description": "一个一事无成的中年大叔，买了一辆破自行车，决定参加省里的山地车大赛，来证明自己不是废物。"
  },
  {
    "title": "哭泣女人的诅咒2019",
    "file": "movie-1397.html",
    "cover": 47,
    "region": "墨西哥 / 美国",
    "category": "高清电影",
    "tags": "民俗恐怖, 女鬼, 儿童, 都市传说, 温子仁",
    "year": "2019",
    "description": "一个失去孩子的女鬼，在寻找替身的过程中盯上了一位单亲妈妈的子女。"
  },
  {
    "title": "相棒剧场版4",
    "file": "movie-1398.html",
    "cover": 48,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "相棒、搭档、政治阴谋、特搜、反转",
    "year": "2017",
    "description": "杉下右京的最后一案，对手是隐藏在警察厅最高层的“幽灵”。"
  },
  {
    "title": "日夜男女",
    "file": "movie-1399.html",
    "cover": 49,
    "region": "韩国",
    "category": "科幻悬疑",
    "tags": "一夜情，误会，职场，爆笑",
    "year": "2016",
    "description": "一夜情后，女的是白天上班的广告策划，男的是晚上上班的夜店DJ，他们偏偏成了同事。"
  },
  {
    "title": "小惊喜",
    "file": "movie-1400.html",
    "cover": 50,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "生日, 误会, 治愈, 小成本, 催泪",
    "year": "2023",
    "description": "为了给妈妈一个生日惊喜，全家人联手演戏骗她中奖去旅行，结果妈妈却给了所有人一个更大的“惊喜”。"
  },
  {
    "title": "湿婆的超级英雄2",
    "file": "movie-1401.html",
    "cover": 51,
    "region": "印度",
    "category": "剧情佳作",
    "tags": "神明, 超能力, 印度神话, 视觉奇观, 续集",
    "year": "2025",
    "description": "毁灭之神湿婆在现代都市复活，却发现自己变成了一个沉迷自拍的废柴青年。"
  },
  {
    "title": "地狱之火",
    "file": "movie-1402.html",
    "cover": 52,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "邪教，献祭，地下洞穴，火焰恶魔，绝境求生",
    "year": "2025",
    "description": "六个年轻探险家深入一个无人洞穴，无意中唤醒了被封印百年的火焰恶魔。"
  },
  {
    "title": "绝代双娇",
    "file": "movie-1403.html",
    "cover": 53,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "双女主, 江湖姐妹, 反雌竞, 轻喜",
    "year": "2024",
    "description": "武林盟主之女与魔教圣女互换了身体，为了不毁掉对方的名声，两人被迫联手整顿整个江湖。"
  },
  {
    "title": "让我疯狂",
    "file": "movie-1404.html",
    "cover": 54,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "失控计划, 复仇, 药物副作用, 疯狂夜晚, 失去理智",
    "year": "2017",
    "description": "一个本想用完美计划报复前老板的落魄经纪人，因为一瓶来历不明的药彻底失控，把整晚变成了所有人都不敢回头看的噩梦。"
  },
  {
    "title": "七月返归",
    "file": "movie-1405.html",
    "cover": 55,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "中元节, 返乡, 民俗怪谈, 母女关系, 轮回",
    "year": "2024",
    "description": "远走他乡的女儿在七月中元节返乡，却发现母亲每晚都在为不存在的人准备晚餐。"
  },
  {
    "title": "果尔达",
    "file": "movie-1406.html",
    "cover": 56,
    "region": "以色列",
    "category": "高清电影",
    "tags": "女领袖, 赎罪日战争, 中年危机",
    "year": "2023",
    "description": "1973年赎罪日战争期间，患有白血病和幽闭恐惧症的以色列女总理，在地堡里度过了人生最漫长的十九天。"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 超危险特工2：狠战 安达鲁西亚 女神的报复 青春珊瑚礁 降世神通第三季 刺客联盟 非越自由梦 阿波罗18号 恶搞之家第七季 傲剑春秋国语 小孩 对于艾玛和永远 上帝也疯狂 理发师奶起革命 鼹鼠之歌 白石山下一家人 倾听我的声音 天外战笳声 欢迎光临娃娃屋 真相与正义 加冕",
    "file": "movie-1407.html",
    "cover": 57,
    "region": "根据片名判断",
    "category": "剧情佳作",
    "tags": "根据片名判断",
    "year": "根据片名判断",
    "description": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）"
  },
  {
    "title": "德国犯罪故事：绳缚",
    "file": "movie-1408.html",
    "cover": 58,
    "region": "德国",
    "category": "剧情佳作",
    "tags": "真实改编, BDSM亚文化, 连环杀手, 柏林地下",
    "year": "2025",
    "description": "柏林六名男性被以一种古老的绳缚方式勒死，女警探不得不混入BDSM俱乐部寻找真凶。"
  },
  {
    "title": "职场菜鸟生存图鉴",
    "file": "movie-1409.html",
    "cover": 59,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "新人入职, 打工日常, 团队协作, 反内耗, 成长群像",
    "year": "2024",
    "description": "五个毫无经验的职场新人被塞进同一间办公室，从不会写邮件到不敢接电话，他们用一连串社死现场换来真正的生存本领。"
  },
  {
    "title": "一打亲上亲",
    "file": "movie-1410.html",
    "cover": 60,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "贺岁、群星、误会、相亲、搞笑",
    "year": "1990",
    "description": "十二对性格迥异的单身男女被强行安排在同一栋大楼相亲，结果发现所有红线都牵错了对象，却意外牵对了人生。"
  },
  {
    "title": "牧师神探 第八季",
    "file": "movie-1411.html",
    "cover": 61,
    "region": "英国",
    "category": "欧美热播",
    "tags": "英伦复古, 神探, 大提琴, 剑桥",
    "year": "2022",
    "description": "剑桥郡的二战老兵兼牧师，一边主持礼拜，一边用他独特的人性洞察力侦破谋杀案。"
  },
  {
    "title": "敦煌夜谭",
    "file": "movie-1412.html",
    "cover": 62,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "敦煌壁画, 时空轮回, 画师奇遇, 西域风情",
    "year": "2024",
    "description": "古代画师在敦煌洞窟修补壁画时，意外被卷入画中妖魔横行的奇幻世界。"
  },
  {
    "title": "一起听团吧",
    "file": "movie-1413.html",
    "cover": 63,
    "region": "中国台湾",
    "category": "喜剧动画",
    "tags": "乐团成长, 友情羁绊, 热血追梦",
    "year": "2025",
    "description": "五个高中“废柴”为了拯救即将被拆除的排练室，决定参加全国乐团大赛赢取奖金。"
  },
  {
    "title": "护花惊情",
    "file": "movie-1414.html",
    "cover": 64,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "保镖，复仇，卧底，枪战，虐恋",
    "year": "2024",
    "description": "冷面保镖奉命保护仇人之女，却在生死逃亡中对她动了真心。"
  },
  {
    "title": "制服2013",
    "file": "movie-1415.html",
    "cover": 65,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "连环杀人、警察、裁缝、欲望、社会隐喻",
    "year": "2013",
    "description": "小城出现穿着警服的连环杀人魔，裁缝妻子发现丈夫每天回家的制服尺寸都不对。"
  },
  {
    "title": "疑云背后",
    "file": "movie-1416.html",
    "cover": 66,
    "region": "韩国",
    "category": "喜剧动画",
    "tags": "双胞胎, 交换身份, 保险诈骗, 高层腐败",
    "year": "2026",
    "description": "检察官发现车祸死亡的尸体竟是自己的双胞胎弟弟，而他俩已秘密交换身份十五年。"
  },
  {
    "title": "再见夏天",
    "file": "movie-1417.html",
    "cover": 67,
    "region": "韩国",
    "category": "高清电影",
    "tags": "毕业季, 海边小镇, 初恋, 告别成长, 记忆碎片, 夏日遗憾",
    "year": "2019",
    "description": "当一整个夏天都在倒计时，两个准备各自离开小镇的少年，只能用一张旧录音带保存他们没说出口的话。"
  },
  {
    "title": "碎块爱情短片",
    "file": "movie-1418.html",
    "cover": 68,
    "region": "波兰",
    "category": "动作犯罪",
    "tags": "拼贴叙事, 爱情哲学, 分段式, 诗意影像",
    "year": "2028",
    "description": "一部由十段“爱情碎块”拼接而成的实验电影，每段风格迥异，共同拼出一幅关于爱的复杂拼图。"
  },
  {
    "title": "天才宣言",
    "file": "movie-1419.html",
    "cover": 69,
    "region": "德国",
    "category": "剧情佳作",
    "tags": "高智商, 伦理, 暗黑",
    "year": "2024",
    "description": "一名16岁数学天才发表“人类退化论”后，开始按照自己的公式清除社会“冗余”。"
  },
  {
    "title": "枪灵计划",
    "file": "movie-1420.html",
    "cover": 70,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "武器拟人, 枪械少女, 特工, 热血, 异能",
    "year": "2023",
    "description": "落魄佣兵意外获得能召唤“枪灵”的能力，每个枪灵都是绝世美女，但他只能选择一个。"
  },
  {
    "title": "尸体解剖",
    "file": "movie-1421.html",
    "cover": 71,
    "region": "韩国",
    "category": "精选视频",
    "tags": "法医、密室杀人、器官黑市、反转",
    "year": "2024",
    "description": "一具看似普通的意外死亡尸体，在法医的解剖刀下，竟揭露出一个利用绝症患者进行非法器官移植的惊天阴谋。"
  },
  {
    "title": "银河守护队2",
    "file": "movie-1422.html",
    "cover": 72,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "宇宙尬舞团, 父子, 掠夺者, 劲歌金曲",
    "year": "2017",
    "description": "星爵意外与生父“天神”伊戈重逢，却发现自己不过是父亲用来吞噬宇宙的一颗活体电池。"
  },
  {
    "title": "天才少女",
    "file": "movie-1423.html",
    "cover": 73,
    "region": "韩国",
    "category": "欧美热播",
    "tags": "天才， 校园暴力， 复仇， 心理学， 反转",
    "year": "2024",
    "description": "一个智商170却被霸凌的少女，利用自己的心理学天赋，给全校每一位施暴者量身定制了一场“精神崩溃计划”。"
  },
  {
    "title": "迎风而立的狮子",
    "file": "movie-1424.html",
    "cover": 74,
    "region": "日本",
    "category": "爱情青春",
    "tags": "战地医生, 非洲, 冲突地带, 赎罪",
    "year": "2025",
    "description": "一名曾是自卫队军医的男人深入非洲战乱地区，在那里遇到了当年被他抛弃的战友的遗孤。"
  },
  {
    "title": "功夫棒球",
    "file": "movie-1425.html",
    "cover": 75,
    "region": "台湾",
    "category": "科幻悬疑",
    "tags": "棒球, 武术, 热血, 荒诞, 校园",
    "year": "2024",
    "description": "一支垫底高中棒球队，在少林寺俗家弟子教练带领下，用武功打天下。"
  },
  {
    "title": "快乐掌掴",
    "file": "movie-1426.html",
    "cover": 76,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "反转叙事, 失控关系, 讽刺幽默, 城市夜景, 家庭裂痕, 意外共谋",
    "year": "2025",
    "description": "一记本想出气的耳光，意外打碎了三家人的谎言，也让一场看似荒唐的闹剧变成了彼此救赎的开端。"
  },
  {
    "title": "消失中的先驱",
    "file": "movie-1427.html",
    "cover": 77,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "未来考古, 人工记忆, 科研失踪, 时间残影, 国家工程, 追索真相",
    "year": "2031",
    "description": "当一位推动人类记忆上传技术的工程先驱突然从所有档案中被抹除，年轻研究员只能沿着残缺数据追查一个可能改变文明方向的秘密。"
  },
  {
    "title": "幸福生活在招手",
    "file": "movie-1428.html",
    "cover": 78,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "亲情，治愈，都市，轻喜剧，成长",
    "year": "2023",
    "description": "一对离婚三年的中年夫妻，为了争夺一套拆迁房，被迫再次同居。"
  },
  {
    "title": "使徒行者3",
    "file": "movie-1429.html",
    "cover": 79,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "卧底、黑帮、刑讯、终极背叛、香港取景",
    "year": "2026",
    "description": "当所有卧底身份都被黑客曝光，警队与黑帮的界限彻底消失，每个人都是孤狼。"
  },
  {
    "title": "温暖的抱抱",
    "file": "movie-1430.html",
    "cover": 80,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "洁癖, 强迫症, 治愈, 喜剧搭档",
    "year": "2024",
    "description": "一个重度洁癖强迫症患者，遇到一个邋遢鬼室友后，生活彻底失控但意外温暖。"
  },
  {
    "title": "森林奇旅",
    "file": "movie-1431.html",
    "cover": 81,
    "region": "法国",
    "category": "爱情青春",
    "tags": "环保, 治愈, 手绘风, 精灵",
    "year": "2024",
    "description": "一个能听懂树木低语的小女孩，为了保护被工业污染吞噬的故乡森林，踏上寻找生命古种的冒险。"
  },
  {
    "title": "弗兰肯斯坦的军队",
    "file": "movie-1432.html",
    "cover": 82,
    "region": "荷兰 / 美国",
    "category": "喜剧动画",
    "tags": "伪纪录片, 纳粹, 丧尸, 二战",
    "year": "2024",
    "description": "一支深入敌后的苏联侦察队，在一个废弃的纳粹地堡里发现了由人体残肢缝合而成的生化士兵，而摄影机记录下了全过程。"
  },
  {
    "title": "爱的守护2016国语",
    "file": "movie-1433.html",
    "cover": 83,
    "region": "中国台湾",
    "category": "动作犯罪",
    "tags": "绝症, 守护, 国语配音, 催泪, 婚姻",
    "year": "2016",
    "description": "丈夫被诊断出仅剩半年生命，妻子选择隐瞒真相，用一场“意外旅行”陪他走完最后的路。"
  },
  {
    "title": "功夫小蝇2016",
    "file": "movie-1434.html",
    "cover": 84,
    "region": "印度",
    "category": "爱情青春",
    "tags": "复仇, 变身, 昆虫特工, 脑洞大开",
    "year": "2016",
    "description": "被情敌害死的程序员，重生为一只苍蝇，不仅要夺回爱人，还要利用厨房餐具完成一次不可能的血腥复仇。"
  },
  {
    "title": "决胜时刻",
    "file": "movie-1435.html",
    "cover": 85,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "建国前夕, 谈判, 暗杀, 伟人",
    "year": "2024",
    "description": "1949年国共和谈破裂前夕，一支神秘的国民党暗杀小组潜入北平，目标直指香山双清别墅。"
  },
  {
    "title": "龙华之少年归",
    "file": "movie-1436.html",
    "cover": 86,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "龙族后裔, 校园, 觉醒, 守护",
    "year": "2022",
    "description": "普通高中生体内封印着龙族最后的力量，当邪恶势力来犯，他必须在毕业前学会“化龙”。"
  },
  {
    "title": "白鬃野马",
    "file": "movie-1437.html",
    "cover": 87,
    "region": "蒙古",
    "category": "喜剧动画",
    "tags": "草原迁徙, 人马羁绊, 族群守护, 成长冒险",
    "year": "2016",
    "description": "少年在暴风雪前救下一匹额头带白鬃的野马，却因此卷入草原部族与盗猎者之间的追逐，踏上一段关于信任与自由的旅程。"
  },
  {
    "title": "次世代机动警察：首都决战",
    "file": "movie-1438.html",
    "cover": 88,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "东京, 巨型机器人, 政治阴谋",
    "year": "2026",
    "description": "东京被不明巨型机器人封锁，老旧的英格拉姆警用机甲，是最后能出动的战力。"
  },
  {
    "title": "我的军中情人2",
    "file": "movie-1439.html",
    "cover": 89,
    "region": "以色列",
    "category": "科幻悬疑",
    "tags": "禁忌之恋, 国防军, 重逢, 遗憾美学",
    "year": "2016",
    "description": "十年后，曾经的战地恋人在一次军事行动中意外重逢，却发现对方已成了敌人的俘虏。"
  },
  {
    "title": "潘纳·哈拉",
    "file": "movie-1440.html",
    "cover": 90,
    "region": "印度",
    "category": "动作犯罪",
    "tags": "种姓制度, 复仇, 乡村, 政治",
    "year": "2016",
    "description": "一名低种姓少女被村议会判处“潘纳·哈拉”（公开剃发羞辱），她的父亲拿起祖传的镰刀，对抗整个村庄的千年传统。"
  },
  {
    "title": "兄弟拉面",
    "file": "movie-1441.html",
    "cover": 91,
    "region": "日本",
    "category": "欧美热播",
    "tags": "兄弟, 匠人精神, 和解, 北海道, 治愈",
    "year": "2023",
    "description": "父亲去世后，失联十五年的兄弟俩被迫共营一家拉面店，哥哥做汤，弟弟揉面，谁先说话谁就输。"
  },
  {
    "title": "生死决",
    "file": "movie-1442.html",
    "cover": 92,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "格斗，复仇，师徒",
    "year": "2024",
    "description": "退隐二十年的腿王，为了替哑女徒弟报仇，重出江湖挑战八大门派。"
  },
  {
    "title": "亿万富翁",
    "file": "movie-1443.html",
    "cover": 93,
    "region": "美国",
    "category": "欧美热播",
    "tags": "真实改编, 金融, 道德困境, 逆袭",
    "year": "2020",
    "description": "穷小子靠发明无薪实习制度成为亿万富翁，却在功成名就后被告：他的第一桶金是偷来的。"
  },
  {
    "title": "第16集",
    "file": "movie-1444.html",
    "cover": 94,
    "region": "中国内地",
    "category": "剧情佳作",
    "tags": "元叙事，剧中剧，打破第四面墙",
    "year": "2027",
    "description": "一部悬疑剧播到第16集时，男主角突然转过头，对着屏幕外的观众喊了一声“别看了”。"
  },
  {
    "title": "外科医生马丁 第五季",
    "file": "movie-1445.html",
    "cover": 95,
    "region": "英国",
    "category": "欧美热播",
    "tags": "医疗喜剧, 强迫症, 小镇生活, 医患关系, 英式幽默",
    "year": "2026",
    "description": "手抖心不抖的毒舌外科医生回归，这次他要面对的是一起隐藏了十五年的医疗事故。"
  },
  {
    "title": "飞跃芭蕾",
    "file": "movie-1446.html",
    "cover": 96,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "芭蕾, 逆袭, 青春, 励志, 小镇姑娘",
    "year": "2023",
    "description": "小镇女孩为追芭蕾梦进入大城市艺校，却发现自己连站位都轮不上。"
  },
  {
    "title": "成名之路",
    "file": "movie-1447.html",
    "cover": 97,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "励志, 造星, 潜规则, 群像",
    "year": "2025",
    "description": "一档偶像选秀节目，记录的不是选手的成名，而是他们被制作人、资本和网络一步步“吃掉”的过程。"
  },
  {
    "title": "僵尸和魔鬼列车",
    "file": "movie-1448.html",
    "cover": 98,
    "region": "日本",
    "category": "高清电影",
    "tags": "列车、丧尸、恶魔、生存",
    "year": "2019",
    "description": "一列通往地狱的午夜列车，乘客一半是僵尸，一半是活人，且每停一站，身份就会互换。"
  },
  {
    "title": "科德玛",
    "file": "movie-1449.html",
    "cover": 99,
    "region": "德国",
    "category": "科幻悬疑",
    "tags": "AI, 记忆删除, 小镇怪谈, 身份认同",
    "year": "2026",
    "description": "一个叫“科德玛”的软件能删除痛苦记忆，但使用者都开始忘记自己是谁。"
  },
  {
    "title": "中华儿女",
    "file": "movie-1450.html",
    "cover": 100,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "抗战， 华侨， 机工， 滇缅",
    "year": "2025",
    "description": "1939年，三千名南洋华侨青年回国抢修滇缅公路，他们中大多数人的名字，至今无人知晓。"
  },
  {
    "title": "飞天大战2",
    "file": "movie-1451.html",
    "cover": 101,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "太空歌剧，无人机群，王牌飞行员，星际战争，续作",
    "year": "2028",
    "description": "地球沦陷后，流亡的华夏天才飞行员驾驶量子战机，向外星母舰发起自杀式冲锋。"
  },
  {
    "title": "丑角爸爸",
    "file": "movie-1452.html",
    "cover": 102,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "京剧, 丑角, 父女, 戏曲传承, 下岗",
    "year": "2022",
    "description": "京剧团的丑角演员在戏曲没落的年代，独自将女儿培养成当红影视明星。"
  },
  {
    "title": "缩小人",
    "file": "movie-1453.html",
    "cover": 103,
    "region": "美国",
    "category": "爱情青春",
    "tags": "缩小技术, 中年危机, 社会阶层, 微型社区",
    "year": "2017",
    "description": "为了解决人口危机，科学家发明了缩小技术，一个中年男人缩小后住进了富人社区，却发现微缩世界里依然有三六九等。"
  },
  {
    "title": "情侠艾夫传",
    "file": "movie-1454.html",
    "cover": 104,
    "region": "香港",
    "category": "欧美热播",
    "tags": "侠客, 恋爱脑, 搞笑, 江湖, 反套路",
    "year": "2025",
    "description": "江湖第一情剑侠客艾夫，每次行侠仗义前都必须先谈一场轰轰烈烈的恋爱，否则功力全失。"
  },
  {
    "title": "时空悍将",
    "file": "movie-1455.html",
    "cover": 105,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "时间罪犯, 跨时空追捕, 悖论",
    "year": "2025",
    "description": "他负责追捕从未来逃回现在的时间罪犯，却发现所有罪犯都是不同年龄的自己。"
  },
  {
    "title": "血影朱门",
    "file": "movie-1456.html",
    "cover": 106,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "宅斗, 灭门, 双面人生, 家族秘密",
    "year": "2025",
    "description": "江南首富朱府一夜灭门，唯一活下来的哑巴丫鬟被查出——她才是朱府真正的血脉。"
  },
  {
    "title": "鬼片：即将上映",
    "file": "movie-1457.html",
    "cover": 107,
    "region": "泰国",
    "category": "喜剧动画",
    "tags": "影院，诅咒，剧组，元电影，鬼魂",
    "year": "2023",
    "description": "一个三流剧组拍鬼片时用了真实凶案现场的录像带，结果所有剧组人员都按片中死法死去。"
  },
  {
    "title": "侠影留香",
    "file": "movie-1458.html",
    "cover": 108,
    "region": "中国台湾",
    "category": "科幻悬疑",
    "tags": "侠隐，江湖恩怨，女性视角",
    "year": "2024",
    "description": "楚留香退隐二十年后，他的养女女扮男装踏入江湖，只为查清养父被害真相。"
  },
  {
    "title": "他其实没那么喜欢你",
    "file": "movie-1459.html",
    "cover": 109,
    "region": "美国",
    "category": "欧美热播",
    "tags": "恋爱诊断, 情感博主, 反套路, 都市",
    "year": "2024",
    "description": "毒舌情感博主靠“他其实没那么喜欢你”这句话吸粉百万，直到她暗恋十年的竹马突然回国。"
  },
  {
    "title": "鬼娃回魂6",
    "file": "movie-1460.html",
    "cover": 110,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "杀人玩偶, 血浆, 黑色幽默, 系列重启",
    "year": "2019",
    "description": "被烧成灰烬的鬼娃恰吉通过联网智能玩偶复活，这次他不仅杀人，还要入侵整个智能家居系统。"
  },
  {
    "title": "年假",
    "file": "movie-1461.html",
    "cover": 111,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "社畜, 回乡, 代际, 治愈",
    "year": "2025",
    "description": "互联网大厂总监被强制休年假，回家七天发现父母瞒着她开了家网店，卖的是她从小到大扔掉的所有旧物。"
  },
  {
    "title": "黑色无双",
    "file": "movie-1462.html",
    "cover": 112,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "杀手, 暴力美学, 复仇, 黑白画面, 狂躁",
    "year": "2025",
    "description": "在一次黑吃黑中惨死的杀手，被疯狂医生复活，代价是每次动用杀人技能都会缩短寿命，而他想杀的人名单还有一百个。"
  },
  {
    "title": "呼啸山庄1992国语",
    "file": "movie-1463.html",
    "cover": 113,
    "region": "英国 / 美国",
    "category": "喜剧动画",
    "tags": "经典改编， 哥特爱情， 配音版",
    "year": "1992",
    "description": "国语配音版的经典哥特爱情悲剧，讲述弃儿希斯克利夫扭曲而狂热的复仇与爱恋。"
  },
  {
    "title": "薛刚反唐粤语",
    "file": "movie-1464.html",
    "cover": 114,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "粤语经典, 唐朝演义, 薛家将, 忠臣蒙冤, 起兵复仇",
    "year": "1984",
    "description": "薛丁山之子薛刚酒醉打死太子，连累满门抄斩，仅他一人逃出，誓要反唐复仇。"
  },
  {
    "title": "爱·满人间",
    "file": "movie-1465.html",
    "cover": 115,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "公益、支教、乡村、温暖",
    "year": "2024",
    "description": "一个城里来的富二代被迫到山村支教一年，结果他被孩子们改变了。"
  },
  {
    "title": "敢死女壮士",
    "file": "movie-1466.html",
    "cover": 116,
    "region": "中国台湾",
    "category": "欧美热播",
    "tags": "二战, 女兵, 台湾, 游击队",
    "year": "2025",
    "description": "1945年台湾山林，六名来自不同族群的女性组成敢死队，用生命炸毁日军秘密生化武器库。"
  },
  {
    "title": "优思明",
    "file": "movie-1467.html",
    "cover": 117,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "避孕药, 婚姻陷阱, 医疗黑幕",
    "year": "2025",
    "description": "妻子长期服用避孕药后性情大变，丈夫调查发现药瓶里装的竟是精神类药物。"
  },
  {
    "title": "桃色公寓",
    "file": "movie-1468.html",
    "cover": 118,
    "region": "中国台湾",
    "category": "动作犯罪",
    "tags": "复古风, 公寓群像, 秘密与谎言, 80年代美学, 暗恋交织",
    "year": "2024",
    "description": "1987年的台北，一栋老公寓的六位住户，每个人都以为只有自己在偷偷爱着隔壁的人。"
  },
  {
    "title": "香格里拉下雪了吗",
    "file": "movie-1469.html",
    "cover": 119,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "徒步, 寻找自我, 失恋, 治愈",
    "year": "2025",
    "description": "失恋女孩独自徒步香格里拉，手机里只有前男友留下的一句“等我回来”。"
  },
  {
    "title": "走进约翰·凯泽尔",
    "file": "movie-1470.html",
    "cover": 120,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "幕后, 演员, 悲情, 档案",
    "year": "2024",
    "description": "沉默的配角如何成就经典？一支遗失的录影带揭开约翰·凯泽尔的最后独白。"
  },
  {
    "title": "花园",
    "file": "movie-1471.html",
    "cover": 121,
    "region": "英国",
    "category": "科幻悬疑",
    "tags": "德里克·贾曼, 诗意, 政治隐喻, 实验",
    "year": "1990",
    "description": "两个男人在核电站旁的花园里相爱，而外面的世界正在焚烧同性恋者。"
  },
  {
    "title": "新咆哮山庄",
    "file": "movie-1472.html",
    "cover": 122,
    "region": "英国",
    "category": "爱情青春",
    "tags": "阴郁庄园、禁忌之恋、复仇、阶层裂痕",
    "year": "2014",
    "description": "当庄园的最后一封遗书被公开，两个家族掩埋半个世纪的爱恨与罪证也随风暴一起翻涌出来。"
  },
  {
    "title": "年少轻狂1993",
    "file": "movie-1473.html",
    "cover": 123,
    "region": "中国台湾",
    "category": "爱情青春",
    "tags": "校园, 暗恋, 回忆杀",
    "year": "2014",
    "description": "2014年的中年大叔，收到了1993年高中死党寄来的一卷录音带，里面藏着那个夏天没说出口的秘密。"
  },
  {
    "title": "体能之巅：百人大挑战",
    "file": "movie-1474.html",
    "cover": 124,
    "region": "韩国",
    "category": "动作犯罪",
    "tags": "体能, 竞技, 肌肉",
    "year": "2023",
    "description": "100位身材炸裂的韩国壮汉，为了“最完美肉体”称号进行地狱级体能淘汰赛。"
  },
  {
    "title": "无限风暴",
    "file": "movie-1475.html",
    "cover": 125,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "时间循环, 暴风雪, 实验事故, 救援, 悬疑",
    "year": "2024",
    "description": "一场实验室事故让暴风雪困住了整座城市，而气象学家发现自己被困在风暴降临前的一小时循环中。"
  },
  {
    "title": "超能特警国语",
    "file": "movie-1476.html",
    "cover": 126,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "超能力，警匪对决，基因突变，硬汉枪战",
    "year": "1996",
    "description": "一名普通特警意外获得读心术，却发现警局内鬼就是自己最信任的搭档。"
  },
  {
    "title": "萨拉米的士兵",
    "file": "movie-1477.html",
    "cover": 127,
    "region": "意大利",
    "category": "动作犯罪",
    "tags": "二战， 人性， 小人物， 荒诞",
    "year": "2024",
    "description": "二战尾声，五个意大利士兵奉命运送一块珍贵的萨拉米香肠到前线，却一步步走进了盟军的包围圈。"
  },
  {
    "title": "登山家",
    "file": "movie-1478.html",
    "cover": 128,
    "region": "尼泊尔 / 英国",
    "category": "欧美热播",
    "tags": "珠峰，无氧登顶，极限人生",
    "year": "2025",
    "description": "一位没有双腿的登山者，不仅要用假肢攀登珠峰，还要在死亡地带救回曾经的对手。"
  },
  {
    "title": "印度夜幕",
    "file": "movie-1479.html",
    "cover": 129,
    "region": "印度",
    "category": "欧美热播",
    "tags": "德里, 黑帮, 女警, 种姓, 夜行巴士",
    "year": "2025",
    "description": "一名低种姓女警混入德里夜行巴士，诱捕连环强奸犯，却发现五名乘客里有四人都是曾在不同案件中逃脱的性犯罪者。"
  },
  {
    "title": "惊爆星期四",
    "file": "movie-1480.html",
    "cover": 130,
    "region": "澳大利亚",
    "category": "精选视频",
    "tags": "家庭晚餐, 秘密, 全员撒谎, 中产悲剧, 密闭空间",
    "year": "2025",
    "description": "每个周四晚上，这个家庭都会聚在一起吃晚餐，但这一次，餐桌底下藏着一把枪。"
  },
  {
    "title": "核弹英雄",
    "file": "movie-1481.html",
    "cover": 131,
    "region": "印度",
    "category": "高清电影",
    "tags": "爱国主义, 科学家, 民族脊梁",
    "year": "2024",
    "description": "聚焦印度核试验背后，那些被遗忘的科学家在西方制裁下“从零开始”的奋斗史诗。"
  },
  {
    "title": "动态漫画·开局就无敌",
    "file": "movie-1482.html",
    "cover": 132,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "无敌流，系统，穿越，龙傲天，修仙",
    "year": "2024",
    "description": "废柴程序员穿越进修仙世界，开局直接解锁满级外挂，看谁都是一招秒。"
  },
  {
    "title": "第17号战俘营",
    "file": "movie-1483.html",
    "cover": 133,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "越狱，二战，群像",
    "year": "1953",
    "description": "战俘营里藏着一个叛徒，几名高级军官为了逃出生天，必须在挖地道的同时揪出这个内鬼。"
  },
  {
    "title": "石花园",
    "file": "movie-1484.html",
    "cover": 134,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "庄园，家族秘密，继承，哥特，反转",
    "year": "2004",
    "description": "失去记忆的女孩被送回母亲长大的古老庄园，却发现庄园的石像每到夜里就会变换姿势。"
  },
  {
    "title": "镖旗飞扬",
    "file": "movie-1485.html",
    "cover": 135,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "镖局恩怨 / 护旗押运 / 义薄云天 / 江湖围杀 / 复仇反转",
    "year": "1975",
    "description": "一面被江湖各派争夺的镖旗，牵出一支护镖队伍十年前的灭门旧案，也逼出每个镖师最不敢说出口的秘密。"
  },
  {
    "title": "古灵侦探",
    "file": "movie-1486.html",
    "cover": 136,
    "region": "中国",
    "category": "精选视频",
    "tags": "侦探, 灵异线索, 民国风, 反转, 搞笑搭档, 城市怪谈",
    "year": "2018",
    "description": "一个嘴碎贪财的小侦探接手离奇失踪案后，竟发现自己能听见死者留下的“回声”，而每条线索都把他推向更大的局中局。"
  },
  {
    "title": "胭脂债",
    "file": "movie-1487.html",
    "cover": 137,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "替身, 复仇, 宅斗, 虐恋",
    "year": "2022",
    "description": "青楼花魁被选中顶替病逝千金嫁入豪门，却在新婚夜发现新郎正是当年害她家破人亡的仇人之子。"
  },
  {
    "title": "富贵千团粤语",
    "file": "movie-1488.html",
    "cover": 138,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "粤语, 家族企业, 千层饼, 三代女性, 传统与创新",
    "year": "2024",
    "description": "老字号饼店三位女掌柜同时提出改革方案：奶奶要守秘方，妈妈要开分店，孙女要把饼做成NFT。"
  },
  {
    "title": "非常性治疗",
    "file": "movie-1489.html",
    "cover": 139,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "性治疗师, 婚姻危机, 黑色幽默, 冷门职业",
    "year": "2025",
    "description": "一名性治疗师接诊了三对奇葩夫妻，却发现自己的丈夫也在“病人”名单里，而且病情最重。"
  },
  {
    "title": "拜金女孩",
    "file": "movie-1490.html",
    "cover": 140,
    "region": "韩国",
    "category": "精选视频",
    "tags": "职场, 虚荣, 反转, 女性成长",
    "year": "2023",
    "description": "她以为傍上财阀就能改命，结果财阀是她亲哥，而亲哥也是个冒牌货。"
  },
  {
    "title": "投向未来",
    "file": "movie-1491.html",
    "cover": 141,
    "region": "日本",
    "category": "高清电影",
    "tags": "棒球, 时空穿越, 父子情",
    "year": "2025",
    "description": "一个失意的中年棒球手，接到一通来自三十年前、自己还是高中生时的电话。"
  },
  {
    "title": "虽然只是弄丢了手机2",
    "file": "movie-1492.html",
    "cover": 142,
    "region": "韩国",
    "category": "动作犯罪",
    "tags": "科技恐怖, 连环杀手, 反转, 人脸识别",
    "year": "2025",
    "description": "你以为换手机就能安全？这次，杀手不需要你的手机，他只需要看到你的脸。"
  },
  {
    "title": "官人我要房",
    "file": "movie-1493.html",
    "cover": 143,
    "region": "中国",
    "category": "爱情青春",
    "tags": "宋朝, 房奴, 职场, 黑色幽默",
    "year": "2024",
    "description": "宋朝公务员为在东京买房，卷入官场、商场和情场的连环闹剧。"
  },
  {
    "title": "女高怪谈4：声音",
    "file": "movie-1494.html",
    "cover": 144,
    "region": "韩国",
    "category": "欧美热播",
    "tags": "都市传说、声控恐怖、灵魂寄生、百合惊悚",
    "year": "2025",
    "description": "音乐特长班的女学生接连失踪，只有深夜琴房里传出的诡异歌声能指引真相，但听到歌声的人，都会在第七天消失。"
  },
  {
    "title": "波哥大",
    "file": "movie-1495.html",
    "cover": 145,
    "region": "哥伦比亚",
    "category": "喜剧动画",
    "tags": "毒品, 家庭, 暴力美学",
    "year": "2025",
    "description": "一个普通的波哥大面包师，为了救回被毒枭绑架的女儿，被迫成为警方线人。"
  },
  {
    "title": "在星光掩映下",
    "file": "movie-1496.html",
    "cover": 146,
    "region": "法国",
    "category": "欧美热播",
    "tags": "乡村, 天文, 治愈, 老年",
    "year": "2020",
    "description": "一位退休的天文学教授与一个失去说话能力的乡村男孩，在星光下建立起无声的友谊。"
  },
  {
    "title": "反击2017",
    "file": "movie-1497.html",
    "cover": 147,
    "region": "英国/美国",
    "category": "喜剧动画",
    "tags": "硬核枪战，反恐精英，特种作战",
    "year": "2017",
    "description": "一名被开除的SAS士兵与一名CIA情报分析师联手，追查一份能瘫痪全球卫星系统的恐怖分子加密芯片。"
  },
  {
    "title": "壁女",
    "file": "movie-1498.html",
    "cover": 148,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "社畜, 职场, 偷窥, 心理, 密室",
    "year": "2023",
    "description": "在东京租住4.5平米隔间的社畜，无意间发现墙壁能听到隔壁富豪的秘密，她开始了危险的窃听游戏。"
  },
  {
    "title": "蛇之道2024",
    "file": "movie-1499.html",
    "cover": 149,
    "region": "法国 / 日本",
    "category": "剧情佳作",
    "tags": "翻拍, 黑帮, 复仇, 跨国, 写实",
    "year": "2024",
    "description": "一个日本黑帮的底层打手，为了给死去的女儿报仇，独自追踪到了巴黎的越南街。"
  },
  {
    "title": "美好未来",
    "file": "movie-1500.html",
    "cover": 150,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "时间穿越, 亲子关系, 温情, 救赎, 软科幻",
    "year": "2025",
    "description": "一位失意的中年父亲意外获得穿越到女儿老年时代的能力，却发现未来没有他的存在。"
  },
  {
    "title": "葡萄牙队长",
    "file": "movie-1501.html",
    "cover": 1,
    "region": "葡萄牙",
    "category": "动作犯罪",
    "tags": "足球传奇, 国家荣誉, 退役复出, 青训传承, 海港故乡",
    "year": "2022",
    "description": "一位曾带队赢得全国联赛的老队长在退役后回到海边小城，却意外被卷入一场拯救青训球场、重建社区信任的风波。"
  },
  {
    "title": "希望旅行",
    "file": "movie-1502.html",
    "cover": 2,
    "region": "意大利",
    "category": "剧情佳作",
    "tags": "公路, 绝症, 父子, 治愈, 地中海",
    "year": "2025",
    "description": "一个癌症晚期的父亲骗儿子说去旅行，其实是带他走一遍自己年轻时偷渡来意大利的路线。"
  },
  {
    "title": "独占接班人",
    "file": "movie-1503.html",
    "cover": 3,
    "region": "韩国",
    "category": "欧美热播",
    "tags": "财阀，继承权，复仇，商战，反转",
    "year": "2025",
    "description": "财阀会长临终前留下遗嘱：接班人不是三个子女中的任何一个，而是一个在食堂洗碗的实习生。"
  },
  {
    "title": "七年之夜",
    "file": "movie-1504.html",
    "cover": 4,
    "region": "韩国",
    "category": "喜剧动画",
    "tags": "复仇, 犯罪, 心理, 暗黑, 反转",
    "year": "2025",
    "description": "男人失手杀害了一名女孩，七年后女孩的父亲成了他新工作的上司，而对方不知道他是谁。"
  },
  {
    "title": "私房钱",
    "file": "movie-1505.html",
    "cover": 5,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "中年危机, 幽默, 夫妻博弈",
    "year": "2027",
    "description": "丈夫藏的私房钱被妻子挪去买包，两人为了不让对方发现自己动过钱，展开荒诞的“填坑”大赛。"
  },
  {
    "title": "格陵兰雪女",
    "file": "movie-1506.html",
    "cover": 6,
    "region": "丹麦 / 冰岛",
    "category": "欧美热播",
    "tags": "极地, 因纽特传说, 失踪, 女性",
    "year": "2023",
    "description": "极夜降临，极地科考站全员失踪，唯一的线索是一个因纽特传说中“雪女”的图腾。"
  },
  {
    "title": "我和你的距离",
    "file": "movie-1507.html",
    "cover": 7,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "异地恋, 手机, 疫情, 信任",
    "year": "2024",
    "description": "一对恋人被疫情分隔两地两年，他们用手机测量着每一公里的距离，最后发现最远的距离在心里。"
  },
  {
    "title": "我只是个计程车司机",
    "file": "movie-1508.html",
    "cover": 8,
    "region": "韩国",
    "category": "高清电影",
    "tags": "真实事件改编, 普通英雄, 时代悲剧, 公路片",
    "year": "2023",
    "description": "1980年光州，一个只想赚钱的首尔计程车司机，鬼使神差地把一名德国记者送进了戒严区，然后他再也出不来了。"
  },
  {
    "title": "粉色水仙",
    "file": "movie-1509.html",
    "cover": 9,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "暗恋, 出租屋, 日记, 遗憾",
    "year": "2001",
    "description": "一间粉色水仙盛开的出租屋里，内向的男孩发现了房客女孩的秘密日记，也揭开了一段从未说出口的暗恋。"
  },
  {
    "title": "霸王歼霸",
    "file": "movie-1510.html",
    "cover": 10,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "吴宇森风格, 双雄, 枪战, 义气, 无厘头",
    "year": "1993",
    "description": "黑帮大佬金盆洗手开起烧腊店，对手却雇来东洋第一杀手逼他重出江湖。"
  },
  {
    "title": "雾都神探之绝情箭",
    "file": "movie-1511.html",
    "cover": 11,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "重庆迷雾, 冷兵器杀人, 军阀秘事, 女刺客, 逻辑本格",
    "year": "2019",
    "description": "雾都重庆连环命案，死者皆面带微笑，胸口插着一支无羽绝情箭。"
  },
  {
    "title": "开心汉堡店第十三季",
    "file": "movie-1512.html",
    "cover": 12,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "打工日常、小镇奇人、脑洞菜谱、温情恶搞、即兴唱跳",
    "year": "2025",
    "description": "贝尔彻家孩子们为还债举办“史上最怪汉堡大赛”，小镇居民全带来了毁三观的创意馅料。"
  },
  {
    "title": "尸恋人",
    "file": "movie-1513.html",
    "cover": 13,
    "region": "泰国",
    "category": "爱情青春",
    "tags": "人鬼恋, 轮回, 巫术, 催泪, 民间传说",
    "year": "2024",
    "description": "女孩意外溺亡，深爱她的法医男友偷偷用古曼童秘法留住她的魂魄，她却开始逐渐尸变。"
  },
  {
    "title": "女力来袭",
    "file": "movie-1514.html",
    "cover": 14,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "全女性特工, 复仇联盟, 近身格斗, 大女主, 爽剧",
    "year": "2026",
    "description": "五名来自不同背景的受害女性，被神秘组织训练成顶级特工，向摧毁她们人生的势力宣战。"
  },
  {
    "title": "迷路的大军",
    "file": "movie-1515.html",
    "cover": 15,
    "region": "英国 / 法国",
    "category": "高清电影",
    "tags": "一战, 失踪士兵, 考古, 集体记忆, 神秘事件",
    "year": "2026",
    "description": "1917年，一整营英军士兵在法国索姆河战区集体失踪，百年后一支考古队挖出了他们“从未移动过”的遗骸。"
  },
  {
    "title": "爆嗨",
    "file": "movie-1516.html",
    "cover": 16,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "港式无厘头, 毒品, 卧底, 爆笑, 群星贺岁",
    "year": "2024",
    "description": "警方卧底误食新型“笑气”糖果，在执行任务时根本停不下来，反而把整个黑帮聚会变成了大型尴尬派对现场。"
  },
  {
    "title": "梅花三弄之鬼丈夫",
    "file": "movie-1517.html",
    "cover": 17,
    "region": "中国台湾",
    "category": "动作犯罪",
    "tags": "琼瑶, 经典, 替身, 精神病爱情",
    "year": "1993",
    "description": "新婚丈夫葬身火海，两年后女孩爱上了一个戴银面具的神秘男子，却发现他面具下的疤痕与亡夫一致。"
  },
  {
    "title": "燕赤霞传之情迷兰若寺",
    "file": "movie-1518.html",
    "cover": 18,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "燕赤霞， 兰若寺， 前传",
    "year": "2025",
    "description": "在成为捉妖师之前，燕赤霞曾在兰若寺爱上了一只不该爱上的女鬼。"
  },
  {
    "title": "伴人而生",
    "file": "movie-1519.html",
    "cover": 19,
    "region": "日本",
    "category": "高清电影",
    "tags": "人工智能、机器人、老龄化、孤独、伦理",
    "year": "2025",
    "description": "在老龄化极度严重的未来，一款“伴人”机器人被分发给了独居老人，但其中一台似乎产生了自我意识。"
  },
  {
    "title": "灰熊人",
    "file": "movie-1520.html",
    "cover": 20,
    "region": "美国",
    "category": "精选视频",
    "tags": "野外求生，动物复仇，真实事件改编，心理恐怖",
    "year": "2025",
    "description": "护林员发现连续三年，每年秋天都有一名露营者被同一只灰熊以相同方式杀死。"
  },
  {
    "title": "翻滚吧！音浪",
    "file": "movie-1521.html",
    "cover": 21,
    "region": "中国台湾",
    "category": "精选视频",
    "tags": "摇滚, 乐队, 梦想, 老年, 热血",
    "year": "2023",
    "description": "四个平均年龄75岁的老人组建了一支朋克摇滚乐队，唯一的目的是在生命结束前，去音乐节上痛骂他们当年的养老院院长。"
  },
  {
    "title": "没钥匙的房子",
    "file": "movie-1522.html",
    "cover": 22,
    "region": "西班牙",
    "category": "剧情佳作",
    "tags": "密室， 反转， 智能家居， 囚禁， 高概念",
    "year": "2017",
    "description": "女主醒来发现自己在一间全智能房里，所有门都没锁，但她说不出“芝麻开门”以外的任何单词。"
  },
  {
    "title": "薇奥拉",
    "file": "movie-1523.html",
    "cover": 23,
    "region": "意大利 / 法国",
    "category": "欧美热播",
    "tags": "文艺复兴，女扮男装，艺术，禁忌之恋",
    "year": "2025",
    "description": "文艺复兴时期的佛罗伦萨，一位天资卓绝的女孩扮成死去的孪生弟弟，进入禁止女性学习的艺术工坊，却爱上了自己的模特。"
  },
  {
    "title": "觅踪寻迹",
    "file": "movie-1524.html",
    "cover": 24,
    "region": "英国",
    "category": "科幻悬疑",
    "tags": "侧写师, 连环案, 荒野",
    "year": "2025",
    "description": "一名擅长行为分析的女性侧写师辞职追查失踪的妹妹，却在每个案发现场都发现妹妹留下的求救密码。"
  },
  {
    "title": "米斯特和皮特必败",
    "file": "movie-1525.html",
    "cover": 25,
    "region": "美国",
    "category": "欧美热播",
    "tags": "双男主， 小丑， 失败者， 社会边缘人， 反转",
    "year": "2025",
    "description": "两个自称“失败者联盟”的废柴计划抢劫赌场，却发现自己只是一个富二代真人秀里的棋子。"
  },
  {
    "title": "奔跑吧合伙人",
    "file": "movie-1526.html",
    "cover": 26,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "创业, 友情, 逆袭, 都市",
    "year": "2023",
    "description": "三个性格迥异的失业青年被迫合伙经营一家即将倒闭的跑腿公司，却意外卷入了一场疯狂的商战。"
  },
  {
    "title": "犬神家族2018",
    "file": "movie-1527.html",
    "cover": 27,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "名侦探，家族，遗产，诅咒，本格",
    "year": "2018",
    "description": "犬神财阀族长死亡，遗嘱要求三名孙子与各自养女结婚才能继承遗产，随即连环命案开始。"
  },
  {
    "title": "呼啸在布鲁克林",
    "file": "movie-1528.html",
    "cover": 28,
    "region": "美国",
    "category": "高清电影",
    "tags": "布鲁克林, 地铁涂鸦, 爵士乐, 跨种族恋情, 90年代",
    "year": "1997",
    "description": "一个黑人爵士小号手和一个白人女性主义画家，在布鲁克林深夜地铁中因一首被涂鸦的乐谱而疯狂相爱。"
  },
  {
    "title": "恶男事件",
    "file": "movie-1529.html",
    "cover": 29,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "连环杀手， 卧底， 双雄， 雨夜",
    "year": "2024",
    "description": "雨夜屠夫案十年未破，菜鸟警察奉命接近狱中老大，却发现真凶就在警局内部，且正准备迎接自己出狱。"
  },
  {
    "title": "圣堂风云3",
    "file": "movie-1530.html",
    "cover": 30,
    "region": "美国",
    "category": "爱情青春",
    "tags": "黑帮, 复仇, 大结局",
    "year": "2011",
    "description": "纽约地下世界的权力真空期，老教父、疯子和卧底，三方在废弃教堂迎来最终清算。"
  },
  {
    "title": "杨八姐闹金銮粤语",
    "file": "movie-1531.html",
    "cover": 31,
    "region": "香港",
    "category": "高清电影",
    "tags": "邵氏， 粤语片， 女中豪杰， 杨家将， 公堂戏",
    "year": "1976",
    "description": "杨八姐女扮男装闯入金銮殿，手持降龙木，当着皇帝的面怒打太师，要为兄报仇。"
  },
  {
    "title": "光语者",
    "file": "movie-1532.html",
    "cover": 32,
    "region": "挪威 / 中国",
    "category": "喜剧动画",
    "tags": "极光, 科研, 孤独, 北极, 环保",
    "year": "2025",
    "description": "一名中国极地科考队员在漫长的极夜中，独自守护空间天气观测站的故事。"
  },
  {
    "title": "单刀直入",
    "file": "movie-1533.html",
    "cover": 33,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "卧底， 冷兵器， 硬核动作， 无台词",
    "year": "2024",
    "description": "一名失语的卧底警察，只凭一把刀和一股狠劲，独自闯入东南亚毒枭的堡垒救出证人。"
  },
  {
    "title": "特战行动队",
    "file": "movie-1534.html",
    "cover": 34,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "反恐， 小队作战， 内鬼",
    "year": "2024",
    "description": "一支精英反恐小队潜入人质据点，却发现基地内部有一名队员，是恐怖分子的复制人。"
  },
  {
    "title": "全裸饭",
    "file": "movie-1535.html",
    "cover": 35,
    "region": "日本",
    "category": "精选视频",
    "tags": "独居, 裸体, 治愈, 深夜剧",
    "year": "2024",
    "description": "一个在公司装了一整天完美的上班族，最大的乐趣是回到家脱光衣服，做一顿毫无形象的晚饭。"
  },
  {
    "title": "生仔大件事",
    "file": "movie-1536.html",
    "cover": 36,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "生育, 荒诞, 黑色幽默, 社会讽刺",
    "year": "2025",
    "description": "为了领取政府的天价生育补贴，一个小区里三对丁克夫妻同时开始了秘密“造人竞赛”。"
  },
  {
    "title": "124部队",
    "file": "movie-1537.html",
    "cover": 37,
    "region": "中国",
    "category": "高清电影",
    "tags": "野战医疗, 密电破译, 战地情谊, 人性抉择, 组织成长, 救援任务",
    "year": "2022",
    "description": "一支番号不起眼的野战救护队，在战火最密集的前线救回的不只是伤员，还有一座城市最后的尊严。"
  },
  {
    "title": "不汗党",
    "file": "movie-1538.html",
    "cover": 38,
    "region": "韩国",
    "category": "爱情青春",
    "tags": "黑帮，卧底，兄弟情，背叛，动作",
    "year": "2017",
    "description": "新人警察潜入黑帮，却发现自己越来越认同道上的“义气”，甚至想保护那个大哥。"
  },
  {
    "title": "屠杀报告",
    "file": "movie-1539.html",
    "cover": 39,
    "region": "美国",
    "category": "爱情青春",
    "tags": "调查, 证词, 档案, 真相, 舆论, 道德困境",
    "year": "2008",
    "description": "一份迟到三十年的屠杀报告被匿名寄到编辑部，记者追到最后才发现，真正被审判的是整座城市的记忆。"
  },
  {
    "title": "蝶蛹",
    "file": "movie-1540.html",
    "cover": 40,
    "region": "法国",
    "category": "欧美热播",
    "tags": "人体改造, 身份认同, 近未来",
    "year": "2026",
    "description": "绝症少女接受“蝶蛹计划”后，发现自己正被慢慢改造成一件没有情感的战斗武器。"
  },
  {
    "title": "掠食",
    "file": "movie-1541.html",
    "cover": 41,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "铁血战士, 印第安文化, 冷兵器对决, 女权, 前传",
    "year": "2022",
    "description": "三百年前，一位科曼奇族女战士发现，森林里猎杀她族人的不是熊，而是来自外星的终极猎人。"
  },
  {
    "title": "深渊危情",
    "file": "movie-1542.html",
    "cover": 42,
    "region": "美国",
    "category": "欧美热播",
    "tags": "深海, 潜水, 救援, 密室",
    "year": "2021",
    "description": "四名潜水员在海底洞穴探索沉船时遭遇塌方，氧气只够两人存活，通讯设备里却传来第五个人的呼吸声。"
  },
  {
    "title": "令人毛骨悚然的同居",
    "file": "movie-1543.html",
    "cover": 43,
    "region": "韩国",
    "category": "爱情青春",
    "tags": "合租，暗黑房东，密室偷窥，反转恋情",
    "year": "2020",
    "description": "三个女孩合租一栋别墅后接连失踪，警方发现房东的地下室连接着所有房间的通风管道。"
  },
  {
    "title": "怎舍得我难过",
    "file": "movie-1544.html",
    "cover": 44,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "怀旧, 遗憾, 错过, 经典金曲",
    "year": "2025",
    "description": "一首《你怎么舍得我难过》的卡带，串联起九十年代唱片行店员与神秘女顾客跨越三十年的错位爱情。"
  },
  {
    "title": "电影之爱：美国电影批评史",
    "file": "movie-1545.html",
    "cover": 45,
    "region": "美国",
    "category": "爱情青春",
    "tags": "影评人、好莱坞、电影理论、迷影",
    "year": "2016",
    "description": "从报纸边角料到互联网时代，一部“骂电影的人”如何反过来被电影改变的百年史。"
  },
  {
    "title": "下流刑警",
    "file": "movie-1546.html",
    "cover": 46,
    "region": "中国香港",
    "category": "高清电影",
    "tags": "卧底, 痞子英雄, 脏话, 反转, 枪战",
    "year": "2024",
    "description": "一个满嘴脏话、手段下流的黑警，被迫与最正直的菜鸟搭档，去挖出警界最大的毒瘤。"
  },
  {
    "title": "窥机警探侦查事件",
    "file": "movie-1547.html",
    "cover": 47,
    "region": "日本",
    "category": "高清电影",
    "tags": "监控探头, AI侦查, 隐私边界, 单元+主线",
    "year": "2025",
    "description": "东京警视厅“监控分析班”的警探们，发现城市里每一台摄像头都在替凶手递送死亡预告。"
  },
  {
    "title": "恶梦电梯",
    "file": "movie-1548.html",
    "cover": 48,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "电梯, 循环, 心理恐怖, 都市传说, 窄空间",
    "year": "2023",
    "description": "深夜加班族走进公寓电梯，门再打开时，走廊变了，手机显示日期是三天前。"
  },
  {
    "title": "处女",
    "file": "movie-1549.html",
    "cover": 49,
    "region": "韩国",
    "category": "科幻悬疑",
    "tags": "宗教隐喻，少女觉醒，封闭空间",
    "year": "2018",
    "description": "在信奉“纯洁誓约”的孤岛上，即将年满18岁的少女发现自己怀孕，而全岛唯一的男人是瘫痪的神父。"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 变态少女毒杀日记 洛克人 向星星许愿 阿兹·安萨里：活埋 今天，我们 海军罪案调查处第三季 生万物 卷席筒第2集 恋爱的滋味 律政强人粤语 摇滚芭比 她在这里 历尽沧桑一美人第三集 6级暴逃（下） 远大前程2016 威尼斯、威尼斯 战地琴人 解锁鬼应用 你看见青春的颜色吗 我叫赵甲第 有点心机又如何",
    "file": "movie-1550.html",
    "cover": 50,
    "region": "根据片名判断",
    "category": "精选视频",
    "tags": "根据片名判断",
    "year": "根据片名判断",
    "description": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）"
  },
  {
    "title": "计中计之密钥奇缘",
    "file": "movie-1551.html",
    "cover": 51,
    "region": "中国",
    "category": "科幻悬疑",
    "tags": "双面间谍, 古董密码, 虐恋情深",
    "year": "2023",
    "description": "民国乱世，一对敌对特工因一把古琴密钥被迫合作，却在生死算计中动了真情。"
  },
  {
    "title": "妈妈的口供",
    "file": "movie-1552.html",
    "cover": 52,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "弑母疑云, 记忆谎言, 罗生门, 童年创伤",
    "year": "2024",
    "description": "儿子被控弑母，痴呆的母亲却在法庭上一次次给出截然不同的完美口供。"
  },
  {
    "title": "马永贞之争霸上海滩粤语",
    "file": "movie-1553.html",
    "cover": 53,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "民国, 上海滩, 拳拳到肉, 兄弟情仇",
    "year": "1998",
    "description": "乡下拳师马永贞闯荡上海滩，一双铁拳打下半壁江山，却输给了最信任的兄弟。"
  },
  {
    "title": "主流",
    "file": "movie-1554.html",
    "cover": 54,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "网红， 讽刺， 互联网， 流量， Z世代",
    "year": "2020",
    "description": "一个沉默的社恐废柴被包装成反抗主流文化的网红，结果成了最大的主流。"
  },
  {
    "title": "斗破苍穹年番",
    "file": "movie-1555.html",
    "cover": 55,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "年番，升级流，异火，炼药师，逆袭",
    "year": "2022-2026",
    "description": "天才陨落为废材，萧炎携药老之魂，收异火，炼神丹，一句“三十年河东”响彻加玛帝国。"
  },
  {
    "title": "赌博默示录",
    "file": "movie-1556.html",
    "cover": 56,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "高智商、心理战、人性、绝境翻盘、开司",
    "year": "2025",
    "description": "负债累累的开司再次被卷入地狱赌局，但这一次，他要赌的不是钱，而是整个地下社会的统治权。"
  },
  {
    "title": "激赞网红",
    "file": "movie-1557.html",
    "cover": 57,
    "region": "韩国",
    "category": "剧情佳作",
    "tags": "直播, 社会讽刺, 密室逃脱",
    "year": "2024",
    "description": "十个顶级网红被关进废弃商场，必须通过直播获得点赞数，点赞最低者当场处死。"
  },
  {
    "title": "青春倒退噜",
    "file": "movie-1558.html",
    "cover": 58,
    "region": "中国台湾",
    "category": "喜剧动画",
    "tags": "穿越, 校园, 代际和解, 怀旧",
    "year": "2023",
    "description": "一对互看不顺眼的父子意外互换灵魂，被迫重返高中校园重读高二。"
  },
  {
    "title": "到阴间出差",
    "file": "movie-1559.html",
    "cover": 59,
    "region": "中国台湾",
    "category": "高清电影",
    "tags": "冥界, 职场, 996, 打工人",
    "year": "2024",
    "description": "惨遭裁员的小业务员，被阴间HR误招为“阴阳两界商务代表”，开始天天去地府跑业务。"
  },
  {
    "title": "水泥花园",
    "file": "movie-1560.html",
    "cover": 60,
    "region": "英国",
    "category": "精选视频",
    "tags": "哥特家庭, 兄妹畸恋, 社会隔离",
    "year": "2025",
    "description": "父母相继去世后，四个孩子为了不被拆散，用水泥把母亲的尸体封在了地下室，并假装一切正常。"
  },
  {
    "title": "1966年世界杯",
    "file": "movie-1561.html",
    "cover": 61,
    "region": "英国",
    "category": "喜剧动画",
    "tags": "足球，英国，冷战背景，国民记忆",
    "year": "2025",
    "description": "1966年世界杯决赛夜，一个伦敦东区家庭在电视机前等来了改变一生的时刻。"
  },
  {
    "title": "共同手势",
    "file": "movie-1562.html",
    "cover": 62,
    "region": "日本",
    "category": "欧美热播",
    "tags": "无声沟通, 连环杀手, 手语",
    "year": "2025",
    "description": "东京出现连环杀手，唯一的共同点是死者死前都曾向陌生人比出一个奇怪的手势。"
  },
  {
    "title": "换装师",
    "file": "movie-1563.html",
    "cover": 63,
    "region": "韩国",
    "category": "科幻悬疑",
    "tags": "易容, 间谍, 替身, 多重人格",
    "year": "2025",
    "description": "拥有完美易容术的“换装师”受雇于国家情报院，她可以变成任何人，却唯独找不回自己本来的面目。"
  },
  {
    "title": "风起陇西",
    "file": "movie-1564.html",
    "cover": 64,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "三国间谍, 双雄对决, 权谋",
    "year": "2025",
    "description": "三国时期魏蜀之间的两个无名间谍，在一场关乎两国存亡的情报战中互为棋子，也成为彼此唯一的知己。"
  },
  {
    "title": "金牌",
    "file": "movie-1565.html",
    "cover": 65,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "跳水, 逆境重生, 师徒, 奥运",
    "year": "2024",
    "description": "被国家队退回的少年，在乡村水泥台边练出了震惊世界的满分动作。"
  },
  {
    "title": "小田进城",
    "file": "movie-1566.html",
    "cover": 66,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "农民工, 城乡差距, 写实主义, 黑色幽默",
    "year": "2008",
    "description": "湖南农村青年小田第一次进北京，只为找欠薪跑路的包工头，却误打误撞成了望京的“高级保安”。"
  },
  {
    "title": "寻找彼端的你",
    "file": "movie-1567.html",
    "cover": 67,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "平行宇宙, 纯爱, 新海诚风",
    "year": "2025",
    "description": "东京的吉他手凉太每晚做梦都会看到另一个宇宙的女孩，他决定用一首歌的旋律，穿越十亿个平行世界找到她。"
  },
  {
    "title": "倾斜",
    "file": "movie-1568.html",
    "cover": 68,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "高楼, 建筑师, 视觉错位, 心理阴影",
    "year": "2024",
    "description": "一位患有恐高症的天才建筑师，必须修复一栋正在“缓慢倾斜”的摩天大楼。"
  },
  {
    "title": "男孩杰克",
    "file": "movie-1569.html",
    "cover": 69,
    "region": "美国",
    "category": "欧美热播",
    "tags": "失踪, 双重身份, 小镇",
    "year": "2025",
    "description": "失踪七年的男孩杰克突然回家，但母亲发现他手心的痣在左边，而她记得是在右边。"
  },
  {
    "title": "危险时刻",
    "file": "movie-1570.html",
    "cover": 70,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "炸弹, 谈判, 急救, 爆炸",
    "year": "2024",
    "description": "一名患有恐高症的拆弹专家，必须在48层高楼外墙上，拆除一枚倒计时炸弹。"
  },
  {
    "title": "空房禁女",
    "file": "movie-1571.html",
    "cover": 71,
    "region": "韩国",
    "category": "科幻悬疑",
    "tags": "密室囚禁，反转惊悚，女性复仇，心理压迫",
    "year": "2018",
    "description": "单身女性通过软件合租到了一间便宜公寓，却发现自己被囚禁在墙壁夹层里的密室中。"
  },
  {
    "title": "明天搬家",
    "file": "movie-1572.html",
    "cover": 72,
    "region": "中国台湾",
    "category": "精选视频",
    "tags": "拆迁，回忆，和解",
    "year": "2026",
    "description": "老宅拆迁前夜，一对反目成仇的父子被台风困在同一屋檐下，被迫面对二十年的沉默。"
  },
  {
    "title": "扫兴者第一季",
    "file": "movie-1573.html",
    "cover": 73,
    "region": "美国",
    "category": "高清电影",
    "tags": "太空, 赏金猎人, 女权",
    "year": "2015",
    "description": "三个在星际联盟边缘挣扎的废柴赏金猎人，总是因为心软搞砸任务，却意外卷入了一场颠覆宇宙的惊天阴谋。"
  },
  {
    "title": "山外的彩虹",
    "file": "movie-1574.html",
    "cover": 74,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "留守儿童, 寻亲, 公路, 治愈",
    "year": "2025",
    "description": "九岁留守儿童带着六岁的“小尾巴”，翻越三座大山去找“山外的妈妈”。"
  },
  {
    "title": "我的爸爸是乞丐",
    "file": "movie-1575.html",
    "cover": 75,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "父女, 底层, 救赎",
    "year": "2024",
    "description": "名校女高中生为了“精英人设”，在学校假装父亲是企业家，直到真正的乞丐父亲出现在校门口。"
  },
  {
    "title": "冒牌搭档",
    "file": "movie-1576.html",
    "cover": 76,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "替身, 娱乐圈, 功夫, 乌龙, 兄弟情",
    "year": "2024",
    "description": "一个不得志的龙虎武师，被迫给一个从没演过戏的顶流偶像当“武术替身”，结果两人互换身份，闹翻了片场。"
  },
  {
    "title": "在熙的男，朋友",
    "file": "movie-1577.html",
    "cover": 77,
    "region": "韩国",
    "category": "精选视频",
    "tags": "身份互换, 都市情感, 治愈",
    "year": "2022",
    "description": "男友突然变成闺蜜后，在熙才发现自己从未真正爱过任何人。"
  },
  {
    "title": "敢死部队",
    "file": "movie-1578.html",
    "cover": 78,
    "region": "美国",
    "category": "高清电影",
    "tags": "绝密潜入、越境营救、反叛小队、直升机突袭、雪地爆破、兄弟牺牲",
    "year": "1987",
    "description": "五个被军方放弃的士兵接到一纸“有去无回”的命令，只有完成任务，他们才能换回自己失去的名字与自由。"
  },
  {
    "title": "望月2017",
    "file": "movie-1579.html",
    "cover": 79,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "农村留守, 中秋, 公路",
    "year": "2017",
    "description": "中秋前夕，贵州山村小女孩独自徒步去城里找妈妈，她只有一个信念：把月饼和妈妈一起带回家。"
  },
  {
    "title": "侠医国语",
    "file": "movie-1580.html",
    "cover": 80,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "民国、医者、江湖、恩怨",
    "year": "2011",
    "description": "一身武艺的江湖郎中在乱世上海滩开诊所，救人却惹来了最危险的杀身之祸。"
  },
  {
    "title": "桑巴尔普尔纺织工",
    "file": "movie-1581.html",
    "cover": 81,
    "region": "印度",
    "category": "高清电影",
    "tags": "纺织, 手工艺, 全球化, 底层抗争, 文化传承",
    "year": "2023",
    "description": "印度小村落的纺织工们用最传统的手艺，对抗一个想要买下他们祖传织机的跨国公司。"
  },
  {
    "title": "乡愁",
    "file": "movie-1582.html",
    "cover": 82,
    "region": "波兰 / 乌克兰",
    "category": "欧美热播",
    "tags": "黑白, 难民, 归乡, 沉默",
    "year": "2024",
    "description": "战争结束后，一个乌克兰老人步行穿越废墟回到家乡，却发现村里只剩下敌人的旗帜。"
  },
  {
    "title": "空屋情人",
    "file": "movie-1583.html",
    "cover": 83,
    "region": "韩国",
    "category": "精选视频",
    "tags": "幽灵租赁, 寂寞经济学, 平行生活, 金基德式",
    "year": "2028",
    "description": "她专门租住刚死过人的房子，直到在一间空屋里，遇到了另一个“她”。"
  },
  {
    "title": "看车人的七月",
    "file": "movie-1584.html",
    "cover": 84,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "小人物，底层生活，父子情，城市边缘",
    "year": "2004",
    "description": "在北京看车的中年离异男人，想给儿子买一个生日礼物，却发现自己连被当作正常人的资格都快没有了。"
  },
  {
    "title": "伪造者",
    "file": "movie-1585.html",
    "cover": 85,
    "region": "韩国",
    "category": "高清电影",
    "tags": "伪造画作，复仇，天才画家，双面人生",
    "year": "2026",
    "description": "韩国最顶尖的画作伪造师被仇家威胁，他必须伪造一幅国宝级古画，否则妹妹会死。"
  },
  {
    "title": "老妇人与死神",
    "file": "movie-1586.html",
    "cover": 86,
    "region": "西班牙",
    "category": "精选视频",
    "tags": "黑色幽默，生死哲学，幽默反转，老龄化",
    "year": "2010",
    "description": "独居老奶奶终于等到了死神敲门，却被一个多管闲事的医生用电击抢救强行“人鬼情未了”。"
  },
  {
    "title": "养鬼吃人4：猛鬼磁场",
    "file": "movie-1587.html",
    "cover": 87,
    "region": "美国",
    "category": "精选视频",
    "tags": "邪典, 血腥, 超自然, 地狱使者",
    "year": "1996",
    "description": "一名天才物理学家试图用磁场理论捕捉恶鬼，却意外打开了通往地狱的维度通道。"
  },
  {
    "title": "海角一乐园",
    "file": "movie-1588.html",
    "cover": 88,
    "region": "中国台湾",
    "category": "爱情青春",
    "tags": "岛屿, 乌托邦, 失踪",
    "year": "2025",
    "description": "网红们受邀前往一座与世隔绝的私人岛屿，岛上没有犯罪，但离开的人都消失了。"
  },
  {
    "title": "夜深吻唇香",
    "file": "movie-1589.html",
    "cover": 89,
    "region": "韩国",
    "category": "科幻悬疑",
    "tags": "嗅觉、连环杀手、调香师",
    "year": "2025",
    "description": "一个能用嗅觉记忆杀人犯气味的调香师，爱上了唯一的“无色无味”的男人。"
  },
  {
    "title": "林肯大战僵尸",
    "file": "movie-1590.html",
    "cover": 90,
    "region": "美国",
    "category": "精选视频",
    "tags": "恶搞，总统，丧尸，南北战争",
    "year": "2022",
    "description": "南北战争期间，林肯总统发现南方军挖出了印第安墓地里的丧尸作为秘密武器。"
  },
  {
    "title": "玛德琳蛋糕",
    "file": "movie-1591.html",
    "cover": 91,
    "region": "法国",
    "category": "科幻悬疑",
    "tags": "普鲁斯特，味觉记忆，祖孙和解，法式甜点，慢电影",
    "year": "2020",
    "description": "四十岁的失意作家回到诺曼底老家，外婆用一块玛德琳蛋糕，让他“吃”出了整个家族被掩埋的同志史。"
  },
  {
    "title": "赤子少年",
    "file": "movie-1592.html",
    "cover": 92,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "棒球，留守儿童，逆风挥棒，真实改编",
    "year": "2025",
    "description": "一支由大凉山留守儿童组成的棒球队，在退役残疾运动员的带领下，从山上的泥地打到了全国职业联赛的聚光灯下。"
  },
  {
    "title": "余下的就是沉默国语",
    "file": "movie-1593.html",
    "cover": 93,
    "region": "中国台湾",
    "category": "动作犯罪",
    "tags": "历史, 白色恐怖, 家庭, 真相",
    "year": "2025",
    "description": "父亲临终前只留下一句“余下的就是沉默”，儿子因此开始了长达十年的跨海寻凶。"
  },
  {
    "title": "龙之心：致命复仇",
    "file": "movie-1594.html",
    "cover": 94,
    "region": "美国",
    "category": "精选视频",
    "tags": "龙族传说，复仇骑士，黑暗魔法，史诗对决",
    "year": "2025",
    "description": "最后的龙骑士为死去的龙复仇，却发现宿敌的心脏里也跳动着龙血。"
  },
  {
    "title": "失控快递",
    "file": "movie-1595.html",
    "cover": 95,
    "region": "韩国",
    "category": "剧情佳作",
    "tags": "飙车, 快递员, 黑吃黑, 实时叙事",
    "year": "2025",
    "description": "首尔暴雨夜，女骑手送了一个包裹后，发现后座被绑了十亿韩元现金和一具还在呼吸的人。"
  },
  {
    "title": "兽国春秋",
    "file": "movie-1596.html",
    "cover": 96,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "拟人动物, 史诗, 王朝兴衰, 成人向",
    "year": "2024",
    "description": "狼族铁骑踏平狐国都城，亡国公主发誓复仇，却在敌国朝堂上听到了另一个版本的亡国真相。"
  },
  {
    "title": "三剧盗",
    "file": "movie-1597.html",
    "cover": 97,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "连环案, 盗贼公会, 三重反转, 替身",
    "year": "2023",
    "description": "三起跨越十年的名画失窃案，竟藏着同一个凶手，而第四幅画即将成为他的目标。"
  },
  {
    "title": "女性人体美",
    "file": "movie-1598.html",
    "cover": 98,
    "region": "法国 / 意大利",
    "category": "科幻悬疑",
    "tags": "人体绘画, 身体政治, 女性凝视, 复古美学",
    "year": "2025",
    "description": "1919年巴黎，一位毁容的女雕塑家决定用自己的身体做模具，重塑艺术史上最不完美的圣母像。"
  },
  {
    "title": "青山不墨",
    "file": "movie-1599.html",
    "cover": 99,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "林业, 三代人, 环保, 时代变迁",
    "year": "2024",
    "description": "一个伐木英雄家庭的三代人，从“砍树救国”到“护树为本”，见证了新中国林业七十年的血与泪。"
  },
  {
    "title": "我亲爱的失败者之青春",
    "file": "movie-1600.html",
    "cover": 100,
    "region": "中国台湾",
    "category": "科幻悬疑",
    "tags": "废柴, 乐团, 成长, 和解, 90年代",
    "year": "2023",
    "description": "四个永远不会成名的中年大叔，重组了高中时的废柴乐队，想在四十岁前再丢一次人。"
  },
  {
    "title": "监狱风云2：逃犯粤语",
    "file": "movie-1601.html",
    "cover": 101,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "监狱，越狱，兄弟情，粤语",
    "year": "1999",
    "description": "阿正出狱后被诬陷再度入狱，这次他面对的不再是狱警，而是一个想让他永远闭嘴的卧底。"
  },
  {
    "title": "理想之家",
    "file": "movie-1602.html",
    "cover": 102,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "买房, 现实, 温情, 小人物",
    "year": "2023",
    "description": "一对在大城市打拼的普通夫妻砸锅卖铁买了套“老破小”，却在装修时挖出了一具白骨。"
  },
  {
    "title": "随烟而散",
    "file": "movie-1603.html",
    "cover": 103,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "香烟，记忆，告别，幻境，父子",
    "year": "2025",
    "description": "一盒老香烟，每次点燃都能看到逝去之人，但烟尽之时，记忆也将随烟而散。"
  },
  {
    "title": "日日风流夜夜春",
    "file": "movie-1604.html",
    "cover": 104,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "民国，戏班，禁忌，欲望，救赎",
    "year": "2024",
    "description": "三十年代香港，当红男花旦在台上扮演痴情女子，台下却游走于军阀与富商之间，直到遇见一个真心待他的盲人琴师。"
  },
  {
    "title": "上海特快车",
    "file": "movie-1605.html",
    "cover": 105,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "民国奇案, 火车密闭空间, 身份互换",
    "year": "2027",
    "description": "1947年，从南京开往上海的“特快专列”上发生命案，五名乘客各自声称自己是“死者”。"
  },
  {
    "title": "开心超人联盟之星之力",
    "file": "movie-1606.html",
    "cover": 106,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "机甲合体, 星际冒险, 团队成长",
    "year": "2025",
    "description": "星星球面临黑洞吞噬危机，开心超人们必须集齐散落在平行宇宙的五颗“星之力”碎片。"
  },
  {
    "title": "黑洞1979",
    "file": "movie-1607.html",
    "cover": 107,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "时空错位, 收音机, 集体失踪",
    "year": "2024",
    "description": "1979年，一个煤矿突然出现神秘球状发光体，全矿井127人瞬间消失，只留下一台还在广播的收音机。"
  },
  {
    "title": "穿在乳头上的洞",
    "file": "movie-1608.html",
    "cover": 108,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "身体改造, 畸恋, SM, 心理惊悚",
    "year": "2021",
    "description": "一个孤独女人迷恋身体穿孔，她找到一位神秘的私人穿孔师，却发现对方更想改造她的灵魂。"
  },
  {
    "title": "斩兽之刃",
    "file": "movie-1609.html",
    "cover": 109,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "卡牌元素, 复仇, 异能",
    "year": "2026",
    "description": "为了复活亡国，流浪王子用卡牌召唤“斩兽之刃”，向巨龙宣战。"
  },
  {
    "title": "喜剧明星",
    "file": "movie-1610.html",
    "cover": 110,
    "region": "美国",
    "category": "高清电影",
    "tags": "娱乐圈黑幕, 笑中带泪, 暗黑喜剧",
    "year": "2024",
    "description": "过气脱口秀演员为了翻红，签下“24小时不间断直播”合约，在镜头前彻底疯掉。"
  },
  {
    "title": "盖世五侠的秘密",
    "file": "movie-1611.html",
    "cover": 111,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "中国功夫， 英雄起源， 合家欢",
    "year": "2021",
    "description": "在遇见阿宝之前，悍娇虎、灵鹤、快螳螂、俏小龙和金猴各自的成长故事，以及他们如何学会成为侠。"
  },
  {
    "title": "玛琳娜的杀戮四部曲",
    "file": "movie-1612.html",
    "cover": 112,
    "region": "西班牙/墨西哥",
    "category": "爱情青春",
    "tags": "女杀手, 复仇, 章节体, 暴力美学",
    "year": "2026",
    "description": "被毒枭灭门的女律师，用四个章节、四种身份、四场完美谋杀，完成复仇史诗。"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 空洞之夜 我爱777 奇怪的克兰太太 恐龙饭店 狼灾记 后备计划 革命叛徒 情海波澜 水银灯下死 告别我的悠长过往 东京之女 小小羊儿要回家 史前战纪第二季 德古拉：永咒传奇 时髦境地 夺城 攀爬马特宏峰 妈，我没时间 妙探父子兵 芭比和神秘之门",
    "file": "movie-1613.html",
    "cover": 113,
    "region": "根据片名判断",
    "category": "高清电影",
    "tags": "根据片名判断",
    "year": "根据片名判断",
    "description": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）"
  },
  {
    "title": "游戏",
    "file": "movie-1614.html",
    "cover": 114,
    "region": "韩国",
    "category": "剧情佳作",
    "tags": "大逃杀，财阀游戏，人性考验",
    "year": "2024",
    "description": "十位负债累累的普通人被邀请参加一场奖金惊人的游戏，他们很快发现输家的惩罚是死亡。"
  },
  {
    "title": "百慕达异战",
    "file": "movie-1615.html",
    "cover": 115,
    "region": "美国",
    "category": "精选视频",
    "tags": "百慕大三角，海底文明，时间循环，全球战争，跨物种联盟",
    "year": "2026",
    "description": "百慕大三角上空出现倒计时，人类才发现那不是自然现象，而是外星文明给地球的“最后通牒”。"
  },
  {
    "title": "伍六七之记忆碎片",
    "file": "movie-1616.html",
    "cover": 116,
    "region": "中国",
    "category": "欧美热播",
    "tags": "失忆，刺客，治愈，找回自我，国漫",
    "year": "2025",
    "description": "最强刺客伍六七醒来发现记忆碎成七片，每找回一片就要面对一段不愿回首的过去。"
  },
  {
    "title": "山本五十六 海空生死战",
    "file": "movie-1617.html",
    "cover": 117,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "二战，山本五十六，太平洋战争，航母，战略",
    "year": "2023",
    "description": "从珍珠港到中途岛，以山本五十六的第一视角复盘那场改变世界命运的海空对决。"
  },
  {
    "title": "亡命大煞星",
    "file": "movie-1618.html",
    "cover": 118,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "黑帮, 复仇, 飙车, 兄弟情, 暴力美学",
    "year": "1995",
    "description": "最强杀手被组织背叛后，挟持老大千金，在九龙城寨上演七十二小时生死大逃杀。"
  },
  {
    "title": "豚鼠：血肉之花",
    "file": "movie-1619.html",
    "cover": 119,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "邪典回归，身体恐怖，伪纪录片，禁忌话题",
    "year": "2025",
    "description": "一档地下真人秀节目，参赛者自愿成为“实验豚鼠”，胜者获得自由，败者变成“血肉之花”。"
  },
  {
    "title": "富国银行",
    "file": "movie-1620.html",
    "cover": 120,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "西部拓荒, 家族史诗, 铁路, 权力斗争",
    "year": "2023",
    "description": "一部横跨三十年的家族史诗，讲述一个普通家庭如何在西部淘金热中创建并守护富国银行的前身。"
  },
  {
    "title": "科学怪人1994",
    "file": "movie-1621.html",
    "cover": 121,
    "region": "美国",
    "category": "精选视频",
    "tags": "经典改编, 玛丽雪莱, 哥特, 悲剧",
    "year": "1994",
    "description": "野心勃勃的科学家用不同尸块拼凑出“完美人类”，却创造了一个被他抛弃并疯狂报复的孤独怪物。"
  },
  {
    "title": "宝影花痕",
    "file": "movie-1622.html",
    "cover": 122,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "珠宝设计，家族传承，女性成长，时代变迁",
    "year": "2020",
    "description": "澳门最后一家手工珠宝店面临拆迁，守店的孙女在阁楼发现一本尘封的设计手稿。"
  },
  {
    "title": "秋灯夜雨",
    "file": "movie-1623.html",
    "cover": 123,
    "region": "中国",
    "category": "爱情青春",
    "tags": "中式恐怖， 聊斋， 冤魂， 因果报应",
    "year": "2024",
    "description": "书生雨夜借宿荒村，村民家家点灯笼，说是敬鬼，实则是为了困住他。"
  },
  {
    "title": "嗝嗝老师国语",
    "file": "movie-1624.html",
    "cover": 124,
    "region": "印度",
    "category": "剧情佳作",
    "tags": "妥瑞症, 励志, 师生, 翻拍",
    "year": "2024",
    "description": "她无法控制自己发出怪声，却成为了全校最差班级的最后希望。"
  },
  {
    "title": "梦幻天堂",
    "file": "movie-1625.html",
    "cover": 125,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "零下零点列车、梦境考古、失忆恋人、规则反转、歌舞插曲、心理疗愈",
    "year": "2019",
    "description": "女主在梦境里每晚见到同一个“天堂入口”十次，每次都救下一个濒死少年，却发现她清醒世界每天都会被那十次选择抹去一段记忆。"
  },
  {
    "title": "潜艇",
    "file": "movie-1626.html",
    "cover": 126,
    "region": "德国",
    "category": "剧情佳作",
    "tags": "U型潜艇, 二战末期, 密闭空间, 绝望感",
    "year": "2022",
    "description": "1945 年 5 月，一艘德军潜艇接到自沉命令，艇员们却集体决定：逃往阿根廷。"
  },
  {
    "title": "名利浮云",
    "file": "movie-1627.html",
    "cover": 127,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "豪门、复仇、替身、商战",
    "year": "2025",
    "description": "首富千金的替身演员假死整容，三年后以女秘书身份进入仇人家族，却发现所有人都在演戏。"
  },
  {
    "title": "会说话的头",
    "file": "movie-1628.html",
    "cover": 128,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "意识上传, 刑侦, 伦理, 近未来",
    "year": "2022",
    "description": "死刑犯的大脑被植入“罐中脑”系统，成为协助警方破案的活体数据库。"
  },
  {
    "title": "摇曳露营",
    "file": "movie-1629.html",
    "cover": 129,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "露营，单人露营，富士山，暖炉，独处",
    "year": "2018",
    "description": "独自在富士山脚下露营的少女，遇到了想要集体露营的热心同学，一场关于距离感的治愈故事。"
  },
  {
    "title": "拜托了！不速之客",
    "file": "movie-1630.html",
    "cover": 130,
    "region": "韩国",
    "category": "动作犯罪",
    "tags": "鬼魂, 暖心喜剧, 愿望清单",
    "year": "2025",
    "description": "一个社恐女孩被迫与三个赖在她家不肯走的麻烦鬼魂同居，并要帮他们完成生前遗愿。"
  },
  {
    "title": "美食家",
    "file": "movie-1631.html",
    "cover": 131,
    "region": "法国",
    "category": "动作犯罪",
    "tags": "米其林， 食评家， 味觉天才， 傲慢， 人性",
    "year": "1976",
    "description": "全法国最毒舌的美食评论家突然失去味觉，为了守住秘密，他请一个刚出狱的厨子冒充自己去餐厅打分。"
  },
  {
    "title": "阳光中的青时雨",
    "file": "movie-1632.html",
    "cover": 132,
    "region": "中国台湾",
    "category": "动作犯罪",
    "tags": "时间旅行，初恋，遗憾救赎，雨季",
    "year": "2026",
    "description": "每当天空飘起青色的雨，他就穿越回高中时期，试图挽回那个在阳光下微笑的女孩。"
  },
  {
    "title": "最后单身派对",
    "file": "movie-1633.html",
    "cover": 133,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "姐妹情, 婚前派对, 成长, 疯狂一夜",
    "year": "2024",
    "description": "五个大学闺蜜在拉斯维加斯举办告别单身派对，醒来却发现她们身边躺着一头老虎和一具尸体。"
  },
  {
    "title": "索命影带",
    "file": "movie-1634.html",
    "cover": 134,
    "region": "日本",
    "category": "爱情青春",
    "tags": "录像带，诅咒，都市传说，民俗恐怖",
    "year": "2024",
    "description": "二手市场淘来的老式录像带里，播放的不是电影，而是下一个死者的日常偷拍。"
  },
  {
    "title": "追捕聂鲁达",
    "file": "movie-1635.html",
    "cover": 135,
    "region": "智利",
    "category": "高清电影",
    "tags": "诗人, 通缉, 冷战, 流亡, 文学",
    "year": "2019",
    "description": "1950年代，智利警察追捕共产党诗人聂鲁达，却发现自己被他写进了诗里。"
  },
  {
    "title": "龙隐迷窟",
    "file": "movie-1636.html",
    "cover": 136,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "狄仁杰, 水底墓穴, 巨兽, 悬疑探案",
    "year": "2024",
    "description": "洛阳水患冲出一座唐代龙形墓穴，狄仁杰入内查案，发现墓主竟是想“屠龙”的前朝将军。"
  },
  {
    "title": "赌豪",
    "file": "movie-1637.html",
    "cover": 137,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "赌片, 兄弟情, 复仇, 江湖",
    "year": "1991",
    "description": "赌神高进失踪后，他的徒弟小刀被迫与东南亚赌王展开生死赌局，赌注是彼此的命。"
  },
  {
    "title": "初恋限定",
    "file": "movie-1638.html",
    "cover": 138,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "校园, 群像, 多线叙事, 纯情, 漫画改",
    "year": "2022",
    "description": "一所高中的8位少男少女，各自怀揣着对初恋的不同幻想与恐惧，上演了8段平行又交错的初恋故事。"
  },
  {
    "title": "英格兰末日",
    "file": "movie-1639.html",
    "cover": 139,
    "region": "英国",
    "category": "欧美热播",
    "tags": "政治寓言， 历史重构， 黑色幽默",
    "year": "2026",
    "description": "假设英国输掉了第二次世界大战，一个平行时空中“英式法西斯”统治下的荒诞日常。"
  },
  {
    "title": "英雄宝剑",
    "file": "movie-1640.html",
    "cover": 140,
    "region": "中国内地",
    "category": "动作犯罪",
    "tags": "剑客, 阴谋, 美学, 江湖",
    "year": "2025",
    "description": "天下第一剑客临终前将宝剑赠予了村口的铁匠，因为他发现，那个铁匠才是真正的“剑”。"
  },
  {
    "title": "百分之七的溶液",
    "file": "movie-1641.html",
    "cover": 141,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "实验, 药剂, 记忆, 伦理, 危机",
    "year": "2025",
    "description": "一支只需百分之七浓度就能改写记忆的神秘溶液，在医院、实验室和黑市之间流转，逼着所有人面对被重新配方的人生。"
  },
  {
    "title": "查莉成长日记第三季",
    "file": "movie-1642.html",
    "cover": 142,
    "region": "美国",
    "category": "欧美热播",
    "tags": "家庭录像, 青春期烦恼, 暖心搞笑",
    "year": "2012",
    "description": "姐姐泰迪继续用录像日记记录弟弟查莉的成长，而这次，她自己也迎来了高中毕业前最混乱的一年。"
  },
  {
    "title": "西京囧事",
    "file": "movie-1643.html",
    "cover": 143,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "西安, 搞笑, 小人物, 乌龙, 治愈",
    "year": "2024",
    "description": "一个要去北京追梦的憨厚保安，一个要去昆明逃婚的暴躁富家女，两人在西安火车站拿错了行李箱，被迫结伴上路。"
  },
  {
    "title": "紧急搜捕令",
    "file": "movie-1644.html",
    "cover": 144,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "追捕行动, 案件拼图, 逃亡对决, 警队协作, 城市追踪",
    "year": "2016",
    "description": "一纸临时搜捕令下达后，全城警力都被卷进一场与时间赛跑的追逃战，而真正的目标似乎并不只是在逃犯本人。"
  },
  {
    "title": "向山进发第二季",
    "file": "movie-1645.html",
    "cover": 145,
    "region": "日本",
    "category": "精选视频",
    "tags": "登山，友情，成长，户外",
    "year": "2025",
    "description": "菜鸟登山队挑战富士山，却在山梨县遭遇诡异的“山灵”指路事件。"
  },
  {
    "title": "洛城大暴动",
    "file": "movie-1646.html",
    "cover": 146,
    "region": "美国",
    "category": "爱情青春",
    "tags": "街头战争, 真实事件, 多线叙事",
    "year": "2025",
    "description": "1992年洛杉矶暴动中，五组不同种族的人在一家韩国超市里争夺最后的食物和水。"
  },
  {
    "title": "沙利文的战争",
    "file": "movie-1647.html",
    "cover": 147,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "前线, 指挥, 兄弟情, 牺牲, 误判, 归乡",
    "year": "1998",
    "description": "一名被指控临阵退缩的连队指挥官，必须带着残破部队穿越敌占区，用一场更危险的救援行动洗清自己的名字。"
  },
  {
    "title": "霹雳先锋粤语",
    "file": "movie-1648.html",
    "cover": 148,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "警匪, 暴力, 师徒, 写实",
    "year": "1988",
    "description": "办案手段粗暴的资深警察被迫与一名偷车贼合作，在四十八小时内抓捕连环杀人狂魔。"
  },
  {
    "title": "冬荫功2",
    "file": "movie-1649.html",
    "cover": 149,
    "region": "泰国",
    "category": "欧美热播",
    "tags": "泰拳，复仇，国际犯罪",
    "year": "2025",
    "description": "为了保护被拐走的侄女，前拳王从曼谷打到金三角，单挑整个人口贩卖集团。"
  },
  {
    "title": "饿之必要",
    "file": "movie-1650.html",
    "cover": 150,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "身体恐怖，减肥，邪典，网红经济，反消费主义",
    "year": "2024",
    "description": "一款号称能“吃掉多余脂肪”的寄生虫在全球爆红，直到用户发现它们在半夜开始向大脑索要灵魂。"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 火之鸟772 迷魂谋杀 诺亚动物诊所病历记录簿 车祸！ 杨门女将粤语 触目惊心3 群狗逐狮 中国有好菜 第二季 神奇燕尾服 钢铁雨 鲸落 阴霾乡 陪你到世界终结 断线之后 三头魔王 对不起，宝贝 恐怖末日屠杀 温柔本色 袒露新生 春妇传",
    "file": "movie-1651.html",
    "cover": 1,
    "region": "根据片名判断",
    "category": "剧情佳作",
    "tags": "根据片名判断",
    "year": "根据片名判断",
    "description": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）"
  },
  {
    "title": "危在旦夕",
    "file": "movie-1652.html",
    "cover": 2,
    "region": "西班牙",
    "category": "科幻悬疑",
    "tags": "密室, 反转, 限时",
    "year": "2025",
    "description": "一个男人在酒店电梯里醒来，发现电梯每下降一层，就有一个他认识的人死去。"
  },
  {
    "title": "雌雄双谍",
    "file": "movie-1653.html",
    "cover": 3,
    "region": "美国",
    "category": "精选视频",
    "tags": "特工, 搭档, 冒牌货, 反转",
    "year": "2024",
    "description": "一个书呆子会计和一个小镇女警，被误认为是顶级特工去执行刺杀任务。"
  },
  {
    "title": "战将1990",
    "file": "movie-1654.html",
    "cover": 4,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "越战, 特种兵, 兄弟情, 枪战, 港产",
    "year": "1990",
    "description": "越战撤退夜，一支中国特种兵小队被困丛林，背后是追兵，前方是雷区。"
  },
  {
    "title": "支手轰天",
    "file": "movie-1655.html",
    "cover": 5,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "断臂, 暴力美学, 硬汉",
    "year": "2024",
    "description": "失去右手的王牌军械专家，将左轮手枪改装在义肢上，潜入黑市只为找出斩断他手臂的杀手。"
  },
  {
    "title": "牌局",
    "file": "movie-1656.html",
    "cover": 6,
    "region": "美国",
    "category": "欧美热播",
    "tags": "密室，心理战，反转",
    "year": "2025",
    "description": "五个各怀鬼胎的陌生人参加一场高额赌局，却发现输赢的并非金钱，而是记忆和身份。"
  },
  {
    "title": "八爪女",
    "file": "movie-1657.html",
    "cover": 7,
    "region": "中国香港 / 法国",
    "category": "高清电影",
    "tags": "女版007, 八肢格斗, 巴黎",
    "year": "2024",
    "description": "一个在巴黎开中餐厅的八胞胎母亲，实际上是代号“八爪鱼”的退休特工，当她最小的女儿被绑架，她掀翻了整个巴黎地下世界。"
  },
  {
    "title": "爱德华·蒙克（电影）",
    "file": "movie-1658.html",
    "cover": 8,
    "region": "挪威 / 瑞典",
    "category": "高清电影",
    "tags": "蒙克, 表现主义, 呐喊, 艺术史",
    "year": "2024",
    "description": "聚焦《呐喊》诞生前夜，爱德华·蒙克如何在家族病逝和评论界围剿中，画下那声尖叫。"
  },
  {
    "title": "抓着彩虹的男人",
    "file": "movie-1659.html",
    "cover": 9,
    "region": "韩国",
    "category": "欧美热播",
    "tags": "色盲，看见色彩，绝症，七日恋爱，催泪",
    "year": "2025",
    "description": "一个天生全色盲的绝症患者，在被注射实验药物后获得了七天看见色彩的能力，并爱上了制造这种药的化学家。"
  },
  {
    "title": "神探狄仁杰前传",
    "file": "movie-1660.html",
    "cover": 10,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "狄仁杰, 年轻, 本格, 朝堂",
    "year": "2025",
    "description": "三十岁的狄仁杰还是大理寺小吏，为了救恩师，他必须破获一桩牵扯太子的无头悬案。"
  },
  {
    "title": "家庭录像",
    "file": "movie-1661.html",
    "cover": 11,
    "region": "西班牙",
    "category": "剧情佳作",
    "tags": "家庭DV, 邪教, 录像带, 细思极恐",
    "year": "2026",
    "description": "兄妹俩整理去世母亲的遗物时，发现了一堆家庭录像带，里面记录着一个从未存在过的“第三个孩子”。"
  },
  {
    "title": "猛鬼街4：梦幻主宰国语",
    "file": "movie-1662.html",
    "cover": 12,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "弗莱迪, 梦境, 少女, 团灭",
    "year": "1988",
    "description": "上一部唯一幸存的少女成为梦境主宰者，试图将弗莱迪永远锁在镜中世界。"
  },
  {
    "title": "约会大作战第四季",
    "file": "movie-1663.html",
    "cover": 13,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "精灵、约会、封印、时崎狂三、反转体",
    "year": "2025",
    "description": "新精灵“灾厄”拥有预知未来并杀死“未来爱人”的能力，五河士道必须在所有约会路线中找出唯一活路。"
  },
  {
    "title": "38师机动队",
    "file": "movie-1664.html",
    "cover": 14,
    "region": "韩国",
    "category": "精选视频",
    "tags": "以暴制暴，税务犯罪，精英小队，爽剧，社会写实",
    "year": "2023",
    "description": "一群被税务厅开除的“骗子”，组成秘密机动队，向偷税漏税的巨富们发起复仇。"
  },
  {
    "title": "独角兽之店",
    "file": "movie-1665.html",
    "cover": 15,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "治愈, 创业, 魔法生物, 小镇",
    "year": "2022",
    "description": "一个破产的艺术家在继承叔叔的旧货店后，发现阁楼里住着一只真正的独角兽。"
  },
  {
    "title": "长生界",
    "file": "movie-1666.html",
    "cover": 16,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "永生， 秘境， 宿敌， 特效大片",
    "year": "2023",
    "description": "为了拯救身患绝症的妹妹，平凡快递员闯入神秘“长生界”，却发现永生才是世间最残酷的诅咒。"
  },
  {
    "title": "爱丽丝与藏六",
    "file": "movie-1667.html",
    "cover": 17,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "超能力, 日常, 老人与少女, 治愈, 科学家",
    "year": "2017",
    "description": "拥有毁灭世界之力的超能力少女，被顽固老爷爷捡回家日常养娃。"
  },
  {
    "title": "代课老师4",
    "file": "movie-1668.html",
    "cover": 18,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "硬汉教师, 卧底, 校园, 系列续集",
    "year": "2026",
    "description": "这一次，代课老师要整顿的不是坏学生，而是把学校改成收费主题公园的资本家。"
  },
  {
    "title": "外籍之人",
    "file": "movie-1669.html",
    "cover": 19,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "异乡人，归属感，阶层差异，女性",
    "year": "2024",
    "description": "三位不同出身的外籍女性在香港相遇，她们分别为了爱情、为了逃避、为了钱，却都找不到回家的路。"
  },
  {
    "title": "鬼灯的冷彻第二季 其之二",
    "file": "movie-1670.html",
    "cover": 20,
    "region": "日本",
    "category": "高清电影",
    "tags": "地狱公务员, 黑色幽默, 职场, 阎王",
    "year": "2018",
    "description": "地狱辅佐官鬼白棒继续用斯巴达式的冷静处理黄泉比良坂的烂摊子，这次连众神都敢怼。"
  },
  {
    "title": "风平浪静",
    "file": "movie-1671.html",
    "cover": 21,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "犯罪, 救赎, 父子情, 压抑",
    "year": "2020",
    "description": "优等生宋浩因一场意外凶案逃离家乡，十五年后归来，等待他的不是风平浪静，而是更深的漩涡。"
  },
  {
    "title": "西行纪之集结篇",
    "file": "movie-1672.html",
    "cover": 22,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "西游改编，热血战斗，团队，燃",
    "year": "2026",
    "description": "取经归来三百年，唐僧为救苍生再组西行队，这一次对手是来自天外的神明。"
  },
  {
    "title": "战龙四驱",
    "file": "movie-1673.html",
    "cover": 23,
    "region": "日本",
    "category": "高清电影",
    "tags": "赛车，人工智能，少年热血",
    "year": "2025",
    "description": "为了寻找失踪的父亲，天才少年驾驶搭载AI的超级四驱车，挑战全球最强的虚拟赛道。"
  },
  {
    "title": "弗雷达",
    "file": "movie-1674.html",
    "cover": 24,
    "region": "英国",
    "category": "爱情青春",
    "tags": "弗莱迪·默克里, 皇后乐队, 传记片, 摇滚",
    "year": "2023",
    "description": "从机场搬运工到摇滚巨星，揭秘皇后乐队主唱弗莱迪·默克里如何打破常规，活出传奇的一生。"
  },
  {
    "title": "豪门少爷俏佳人",
    "file": "movie-1675.html",
    "cover": 25,
    "region": "中国台湾",
    "category": "精选视频",
    "tags": "欢喜冤家, 霸道少爷, 贫富差距, 古早偶像剧",
    "year": "2002",
    "description": "傲慢的集团接班人被女佣误当成小偷，一段“主仆”错位的爆笑同居生活就此开始。"
  },
  {
    "title": "狼孩的真实冒险",
    "file": "movie-1676.html",
    "cover": 26,
    "region": "印度",
    "category": "剧情佳作",
    "tags": "野生动物, 森林, 生存",
    "year": "2023",
    "description": "在森林中由狼群养大的男孩，被迫进入人类社会，却发现真正的野兽是穿着衣服的人类。"
  },
  {
    "title": "巴格达的重金属",
    "file": "movie-1677.html",
    "cover": 27,
    "region": "伊拉克",
    "category": "精选视频",
    "tags": "金属乐，战争，真实改编，叛逆，生命力",
    "year": "2025",
    "description": "2003年美军入侵巴格达，一支地下重金属乐队在废墟中用炮火声当鼓点，录下了反抗的嘶吼。"
  },
  {
    "title": "摇滚骗",
    "file": "movie-1678.html",
    "cover": 28,
    "region": "英国",
    "category": "科幻悬疑",
    "tags": "诈骗, 独立乐队, 行业讽刺",
    "year": "2026",
    "description": "五个失业青年假冒一支美国当红乐队，在全球巡演了三个月，赚了八千万美元，没人发现。"
  },
  {
    "title": "两个爸爸",
    "file": "movie-1679.html",
    "cover": 29,
    "region": "中国台湾",
    "category": "科幻悬疑",
    "tags": "同志家庭, 父爱, 多元成家, 催泪",
    "year": "2016",
    "description": "一对男同性恋伴侣收养了一个被遗弃的女婴，在世俗偏见的夹缝中，用双倍的爱撑起一个平凡而温暖的家。"
  },
  {
    "title": "过关斩将",
    "file": "movie-1680.html",
    "cover": 30,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "真人秀, 反乌托邦, 逃亡, 格斗, 阴谋",
    "year": "2026",
    "description": "一名失业特种兵被强制参加致命真人秀，唯有连闯十二关才能揭露幕后黑手的惊天秘密。"
  },
  {
    "title": "家庭主妇",
    "file": "movie-1681.html",
    "cover": 31,
    "region": "韩国",
    "category": "爱情青春",
    "tags": "双重身份, 复仇, 豪宅",
    "year": "2025",
    "description": "她应聘成为完美主妇，实则为调查姐姐失踪真相，却发现这个家庭的秘密远比想象中恐怖。"
  },
  {
    "title": "大铸剑师",
    "file": "movie-1682.html",
    "cover": 32,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "铸剑，上古神兵，宿命，热血，锻造",
    "year": "2025",
    "description": "最后一任铸剑师被掳去铸造灭世魔剑，却发现自己的血液是唤醒神剑的唯一钥匙。"
  },
  {
    "title": "黑玫瑰之义结金兰",
    "file": "movie-1683.html",
    "cover": 33,
    "region": "中国",
    "category": "爱情青春",
    "tags": "义盟, 江湖规矩, 女侠成长, 家国旧账",
    "year": "2021",
    "description": "一位被火劫分开的誓盟姐妹各自改换身份二十年再现，前去朝堂与江湖双线追凶时发现，真正的仇敌不是掌火令上的权臣，而是让“女子只能凭泪洗清”成为惯例的旧秩序。"
  },
  {
    "title": "当女孩恋爱时",
    "file": "movie-1684.html",
    "cover": 34,
    "region": "韩国",
    "category": "高清电影",
    "tags": "纯爱, 校园, 双向暗恋, 治愈, 高颜值",
    "year": "2024",
    "description": "全校第一的冰山学霸，偏偏只对那个唱歌跑调却总在走廊上大声练习的元气女孩“双标”。"
  },
  {
    "title": "玛丽学园",
    "file": "movie-1685.html",
    "cover": 35,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "女子学院, 潜规则, 霸凌, 复仇",
    "year": "2025",
    "description": "顶尖女子学园里，优等生接连“自愿”退学，新来的转学生发现，这所学校的校规就是杀人。"
  },
  {
    "title": "双城故事",
    "file": "movie-1686.html",
    "cover": 36,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "文艺, 移民, 青梅竹马",
    "year": "1991",
    "description": "两个从小在港深边界长大的女孩，一个去了纽约，一个留在香港，被同一个男人分隔了二十年。"
  },
  {
    "title": "爆发2024",
    "file": "movie-1687.html",
    "cover": 37,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "病毒, 封锁, 家庭, 极限生存",
    "year": "2024",
    "description": "一种通过情绪传播的病毒爆发，感染者只要产生负面情绪就会自燃，人类被迫禁止悲伤。"
  },
  {
    "title": "长河落日",
    "file": "movie-1688.html",
    "cover": 38,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "黄河，回乡，父子，和解",
    "year": "2024",
    "description": "离家二十年的游子，因为父亲的死讯回到黄河边的故乡，在落日余晖中重新认识父亲和这片土地。"
  },
  {
    "title": "圣迭哥的一夜",
    "file": "movie-1689.html",
    "cover": 39,
    "region": "美国",
    "category": "精选视频",
    "tags": "一夜情，身份误会，海军，婚礼，爆笑",
    "year": "2024",
    "description": "一个社恐女程序员在圣迭哥酒吧误睡了海军飞行员，第二天发现他是自己姐姐婚礼的未婚夫。"
  },
  {
    "title": "进击的巨人真人版：前篇",
    "file": "movie-1690.html",
    "cover": 40,
    "region": "日本",
    "category": "高清电影",
    "tags": "巨人, 末日求生, 热血战斗",
    "year": "2015",
    "description": "在巨壁崩塌之夜，少年艾伦目睹母亲被吞噬，从此踏上驱逐所有巨人的不归路。"
  },
  {
    "title": "金玉满堂1999粤语",
    "file": "movie-1691.html",
    "cover": 41,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "粤语， 千禧年， 家庭聚餐， 烧腊， 遗愿",
    "year": "1999",
    "description": "1999年除夕前，一个烧腊世家三代人为了老人的“最后一口烧鹅”，被迫重开倒闭的老店。"
  },
  {
    "title": "十日拍拖手册",
    "file": "movie-1692.html",
    "cover": 42,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "反向操作, 契约恋爱, 欢喜欢喜冤家",
    "year": "2024",
    "description": "情感博主为了写分手攻略而接近目标，却发现对方也在研究“如何让她十天爱上我”。"
  },
  {
    "title": "决不投降",
    "file": "movie-1693.html",
    "cover": 43,
    "region": "中国",
    "category": "高清电影",
    "tags": "边境城市, 医疗运输, 集体抗争, 亲情裂变, 冷战压力",
    "year": "2020",
    "description": "在全面封锁下，医生与通信兵把一辆救援车改成行军舞台，靠临时布线与群众网络，一次次突破封禁，只为把下一批疫苗送到离生死最近的学校。"
  },
  {
    "title": "曼哈顿的三个房间",
    "file": "movie-1694.html",
    "cover": 44,
    "region": "美国",
    "category": "欧美热播",
    "tags": "纽约，孤独，平行，文艺",
    "year": "2025",
    "description": "三个不同时代的租客，租下了曼哈顿同一间公寓，他们的故事通过一本遗落在壁炉里的日记相连。"
  },
  {
    "title": "天堂",
    "file": "movie-1695.html",
    "cover": 45,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "死后世界, 数字永生, 社会阶级, 黑色幽默",
    "year": "2024",
    "description": "每个人死后都会去一个名为“天堂”的服务器，但穷人的数据只能住“贫民窟”。"
  },
  {
    "title": "盲剑客",
    "file": "movie-1696.html",
    "cover": 46,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "武士, 盲人, 复仇",
    "year": "2026",
    "description": "一个双目失明的剑客，靠听声辨位杀了一百个人，但他最后一战要对付的人，是一个从不发出任何声音的杀手。"
  },
  {
    "title": "童叙一村",
    "file": "movie-1697.html",
    "cover": 47,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "留守儿童, 乡村教育, 真实记录",
    "year": "2020",
    "description": "在贵州深山的一个村子里，一位支教老师用八年时间，通过诗歌和绘画，治愈了一群留守儿童的内心伤痕。"
  },
  {
    "title": "魔笛",
    "file": "movie-1698.html",
    "cover": 48,
    "region": "英国 / 德国",
    "category": "科幻悬疑",
    "tags": "莫扎特, 歌剧改编, 魔法世界, 少年冒险, 古典音乐",
    "year": "2006",
    "description": "一个热爱摇滚的叛逆少年，穿越进莫扎特的歌剧世界，必须用笛声拯救两个世界。"
  },
  {
    "title": "中国大骗局",
    "file": "movie-1699.html",
    "cover": 49,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "诈骗, 真实案件改编, 反诈",
    "year": "2025",
    "description": "从电信诈骗到金融庞氏骗局，这部剧带你拆解中国近二十年来最令人咋舌的十大骗局。"
  },
  {
    "title": "穷街陋巷",
    "file": "movie-1700.html",
    "cover": 50,
    "region": "意大利",
    "category": "精选视频",
    "tags": "那不勒斯, 少年帮派, 社会底层, 生存法则",
    "year": "2024",
    "description": "意大利那不勒斯贫民区，两个少年为了给妹妹治病，被迫加入当地黑帮。"
  },
  {
    "title": "上海隔都",
    "file": "movie-1701.html",
    "cover": 51,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "战时上海, 异乡社群, 生存协作, 城市边缘, 人性抉择",
    "year": "2019",
    "description": "在战火与隔离条令笼罩的上海边缘，一群被迫聚集的人用情报、音乐和小生意撑起了一座只剩尊严的“隔都”。"
  },
  {
    "title": "圣乔治",
    "file": "movie-1702.html",
    "cover": 52,
    "region": "英国 / 意大利",
    "category": "动作犯罪",
    "tags": "屠龙传说, 中世纪, 信仰之战, 怪物设计",
    "year": "2025",
    "description": "屠龙者圣乔治发现，他要杀的并非恶龙，而是被教会污名化的、守护大地之力的古老神祇。"
  },
  {
    "title": "感恩节",
    "file": "movie-1703.html",
    "cover": 53,
    "region": "美国",
    "category": "爱情青春",
    "tags": "节日恐怖, 连环杀手, 小镇秘密, 血腥, 反转",
    "year": "2024",
    "description": "小镇在感恩节大促之夜接连发生命案，一群年轻人发现凶手竟模仿着他们一年前恶作剧的细节来处决每个人。"
  },
  {
    "title": "无人能敌",
    "file": "movie-1704.html",
    "cover": 54,
    "region": "韩国",
    "category": "精选视频",
    "tags": "格斗冠军，失忆寻凶，监狱风云，以暴制暴",
    "year": "2024",
    "description": "格斗冠军一夜之间沦为杀死女友的凶手，他越狱后必须抢在失忆彻底消失前，找出真凶。"
  },
  {
    "title": "大师2022",
    "file": "movie-1705.html",
    "cover": 55,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "咏春, 师徒恩怨, 年代传奇",
    "year": "2022",
    "description": "1970年代，一位咏春师傅收下最后一名弟子，却发现对方是仇家派来偷拳的卧底。"
  },
  {
    "title": "狼人夜逃杀",
    "file": "movie-1706.html",
    "cover": 56,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "密室狼人杀, 怪物变身, 血月之夜, 互相信任",
    "year": "2025",
    "description": "十名陌生人在古堡醒来，每人的手机上都装了一款APP：每十分钟投票处决一人，直到找出藏匿的狼人。"
  },
  {
    "title": "当我望向你的时候",
    "file": "movie-1707.html",
    "cover": 57,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "自我认同，母子关系，南方小城，秘密，和解",
    "year": "2024",
    "description": "青年导演用镜头对准自己的母亲，试图让她接受自己的性取向，却发现母亲藏着一个更大的秘密。"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 在我的梦中 要钱不要命 菲尔史佩克特传奇 勇敢之人2025 乱云 炮制女朋友 元气少女缘结神第一季 欣德·拉贾布之声 上海滩生死较量 珠帘玉幕 黑凯撒 好日子2019 龙眼神枪传 人质2016 地藏齐天 我在他乡挺好的 完全失败 伯利恒之旅 不怕冷的大衣 对我而言危险的他",
    "file": "movie-1708.html",
    "cover": 58,
    "region": "根据片名判断",
    "category": "欧美热播",
    "tags": "根据片名判断",
    "year": "根据片名判断",
    "description": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）"
  },
  {
    "title": "感情生活",
    "file": "movie-1709.html",
    "cover": 59,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "三角恋，开放关系，都市焦虑",
    "year": "2010",
    "description": "一对同居情侣因为经济压力被迫与另一名单身汉合租，三人行的边界逐渐模糊。"
  },
  {
    "title": "我的出柜好友",
    "file": "movie-1710.html",
    "cover": 60,
    "region": "中国台湾",
    "category": "精选视频",
    "tags": "出柜、父子关系、小镇、和解",
    "year": "2025",
    "description": "儿子在年夜饭上出柜，父亲当场掀翻桌子，一年后父亲却在同一天主动出了“不一样的柜”。"
  },
  {
    "title": "比卡超与宠物小精灵合唱队",
    "file": "movie-1711.html",
    "cover": 61,
    "region": "日本",
    "category": "爱情青春",
    "tags": "合唱， 治愈， 神奇宝贝， 友情， 节奏游戏",
    "year": "2023",
    "description": "当比卡超意外获得一支能指挥所有精灵歌唱的神奇指挥棒，一场拯救音乐森林的跨物种合唱大赛开始了。"
  },
  {
    "title": "此生尽是你",
    "file": "movie-1712.html",
    "cover": 62,
    "region": "中国台湾",
    "category": "科幻悬疑",
    "tags": "穿越，年代，宿命，催泪",
    "year": "2022",
    "description": "一本1949年的日记让现代女孩不断穿越到过去，她发现每救一次外公，母亲就会消失一点。"
  },
  {
    "title": "弱美男英雄第2季",
    "file": "movie-1713.html",
    "cover": 63,
    "region": "韩国",
    "category": "精选视频",
    "tags": "暴力，智商压制，反校园霸凌，创伤后应激，复仇",
    "year": "2025",
    "description": "曾经的弱美男英雄转学到首尔贵族高中，在这里，拳头无用，他要用智商摧毁一个由财阀二代构建的“完美霸凌体系”。"
  },
  {
    "title": "世界如生活般美好",
    "file": "movie-1714.html",
    "cover": 64,
    "region": "丹麦",
    "category": "爱情青春",
    "tags": "北欧风，抑郁症，社区温暖",
    "year": "2024",
    "description": "一个决定自杀的失业中年，被一群奇奇怪怪的邻居强行拽回了人间烟火里。"
  },
  {
    "title": "性命出售",
    "file": "movie-1715.html",
    "cover": 65,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "自杀, 交易, 反转, 社会派",
    "year": "2020",
    "description": "一个想死的失业中年人把自己的命挂上网店出售，结果买家一个比一个不正常。"
  },
  {
    "title": "乘风少年",
    "file": "movie-1716.html",
    "cover": 66,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "青春, 成长, 帆船, 逆袭, 热血",
    "year": "2023",
    "description": "一个被所有人嘲笑的晕船少年，却梦想成为职业帆船手。"
  },
  {
    "title": "谍海钢面人",
    "file": "movie-1717.html",
    "cover": 67,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "邵氏, 特工武侠, 面具, 连环杀局",
    "year": "1978",
    "description": "明朝锦衣卫秘密培养了一批“钢面死士”，十年后钢面人接连被杀，凶手的脸竟是已故指挥使。"
  },
  {
    "title": "蚊子",
    "file": "movie-1718.html",
    "cover": 68,
    "region": "韩国",
    "category": "喜剧动画",
    "tags": "寄生虫, 身体恐怖, 反转, 怪物",
    "year": "2024",
    "description": "一场失败的科学实验让蚊子变成致命杀手，而被叮咬者会逐渐变成同类。"
  },
  {
    "title": "有夭",
    "file": "movie-1719.html",
    "cover": 69,
    "region": "中国台湾",
    "category": "高清电影",
    "tags": "民俗恐怖, 女鬼, 冥婚",
    "year": "2025",
    "description": "在台湾中部的一个小镇，流传着“夭女”的传说，未婚先孕的女子死后会化作厉鬼绑走新生儿。"
  },
  {
    "title": "风中新娘",
    "file": "movie-1720.html",
    "cover": 70,
    "region": "英国",
    "category": "爱情青春",
    "tags": "二战, 战地婚礼, 悲剧, 真实事件改编, 英伦",
    "year": "2025",
    "description": "1944年诺曼底登陆前夜，英国新娘穿上婚纱冲进军事禁区，只为见空军丈夫最后一面。"
  },
  {
    "title": "小黄人大眼萌国语",
    "file": "movie-1721.html",
    "cover": 71,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "小黄人, 国配, 搞笑, 合家欢, 反派",
    "year": "2025",
    "description": "小黄人凯文、斯图尔特和鲍勃穿越到古代中国，成为皇帝的“御用捣蛋官”。"
  },
  {
    "title": "电影版 摇曳露营△",
    "file": "movie-1722.html",
    "cover": 72,
    "region": "日本",
    "category": "爱情青春",
    "tags": "露营， 治愈， 友情， 风景",
    "year": "2022",
    "description": "为了挽救即将废弃的露营地，五个女孩决定在富士山脚下举办一场史无前例的冬日露营祭。"
  },
  {
    "title": "事物的摆动",
    "file": "movie-1723.html",
    "cover": 73,
    "region": "英国",
    "category": "剧情佳作",
    "tags": "时间循环, 量子物理, 烧脑, 宿命, 极简主义",
    "year": "2023",
    "description": "一个物理学家被困在只有一张桌子和一个时钟的房间，他发现每一次“摆动”都是重启宇宙的按钮。"
  },
  {
    "title": "顽皮豹",
    "file": "movie-1724.html",
    "cover": 74,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "粉红豹，盗窃案，伦敦，哑剧风格",
    "year": "2024",
    "description": "一只有着强烈完美主义强迫症的粉红豹，计划盗窃伦敦塔桥上的皇冠珠宝，而唯一能阻止它的是大本钟的报时误差。"
  },
  {
    "title": "我在马戏团长大",
    "file": "movie-1725.html",
    "cover": 75,
    "region": "法国",
    "category": "精选视频",
    "tags": "马戏团, 童年, 分离, 传承, 文艺",
    "year": "2021",
    "description": "女孩在马戏团长到十二岁，父亲送她下山上学，她必须在一个没有空中飞人的世界里活下去。"
  },
  {
    "title": "阁楼大象",
    "file": "movie-1726.html",
    "cover": 76,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "密室, 都市传说, 心理",
    "year": "2022",
    "description": "五个陌生人收到同一把阁楼钥匙，他们在里面看到的，都是自己最想遗忘的秘密。"
  },
  {
    "title": "海洋魔镜",
    "file": "movie-1727.html",
    "cover": 77,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "海洋, 魔镜, 人鱼, 深海",
    "year": "2024",
    "description": "潜水教练陈光从海底捞起一面古铜镜，镜中映出的不是他，而是一条求救的人鱼。"
  },
  {
    "title": "对决疯暴",
    "file": "movie-1728.html",
    "cover": 78,
    "region": "香港 / 中国大陆",
    "category": "喜剧动画",
    "tags": "双雄对决 / 极限格斗 / 法庭戏 / 复仇",
    "year": "2030",
    "description": "为了给女儿报仇，冷静的法医设下天罗地网，逼疯了一个狂暴的连环杀手。"
  },
  {
    "title": "大自然的魔兽巴奇",
    "file": "movie-1729.html",
    "cover": 79,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "怪兽, 环保, 实验失败, 小镇, 血腥",
    "year": "2023",
    "description": "生物实验室的巨型变异蜥蜴“巴奇”逃入深山，将整个度假村变成了狩猎场。"
  },
  {
    "title": "决战撒哈拉",
    "file": "movie-1730.html",
    "cover": 80,
    "region": "法国, 摩洛哥",
    "category": "喜剧动画",
    "tags": "沙漠追击, 佣兵小队, 失落水源, 绝境求生, 战术对抗, 边界战争",
    "year": "2020",
    "description": "一支临时拼凑的护送队被困撒哈拉腹地，既要穿越敌对武装的封锁，也要在没有地图的沙海里争分夺秒找到能救全城的地下水脉。"
  },
  {
    "title": "大画特务",
    "file": "movie-1731.html",
    "cover": 81,
    "region": "韩国",
    "category": "剧情佳作",
    "tags": "漫画家, 特工, 恶搞, 脑洞",
    "year": "2020",
    "description": "一名过气漫画家为了还债，把真实特工机密画进低俗漫画，导致追杀降临。"
  },
  {
    "title": "夏威夷公主",
    "file": "movie-1732.html",
    "cover": 82,
    "region": "美国",
    "category": "欧美热播",
    "tags": "夏威夷, 王室后裔, 冰淇淋店, 诅咒",
    "year": "2025",
    "description": "一名在冰淇淋店打工的夏威夷女孩被证实是末代王室后裔，但继承王位的前提是必须打破一个“娶白人”的诅咒。"
  },
  {
    "title": "画江湖之换世门生",
    "file": "movie-1733.html",
    "cover": 83,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "平行世界、帮派、异能、宿命",
    "year": "2025",
    "description": "民国上海滩，普通少年能看见平行世界，发现两界黑帮决战关乎现实存亡。"
  },
  {
    "title": "简单小生活",
    "file": "movie-1734.html",
    "cover": 84,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "极简主义， 断舍离， 都市压力， 亲情",
    "year": "2024",
    "description": "患上囤积症的母亲与崇尚断舍离的女儿，在50平米的老房子里展开了一场空间争夺战。"
  },
  {
    "title": "花牌杀人",
    "file": "movie-1735.html",
    "cover": 85,
    "region": "韩国",
    "category": "动作犯罪",
    "tags": "花牌, 死亡游戏, 高智商犯罪, 复仇, 心理战",
    "year": "2023",
    "description": "七名玩家受邀玩一场巨额奖金的花牌游戏，输掉一轮的人，会被杀死对应数目的亲友。"
  },
  {
    "title": "更好的明天",
    "file": "movie-1736.html",
    "cover": 86,
    "region": "中国台湾",
    "category": "动作犯罪",
    "tags": "老年，阿尔茨海默，父子，环岛，摩托车",
    "year": "2023",
    "description": "患阿尔茨海默症的父亲坚持要骑摩托车环岛，儿子只好谎称自己是个“随行记者”。"
  },
  {
    "title": "战略特勤组",
    "file": "movie-1737.html",
    "cover": 87,
    "region": "美国",
    "category": "爱情青春",
    "tags": "反恐伦理, 刑讯困境, 定时炸弹, 正义边界",
    "year": "2028",
    "description": "FBI发现核弹藏在曼哈顿，唯一知道位置的特勤组探员拒绝开口，而审问他的人正是他的妻子。"
  },
  {
    "title": "纳尤古传奇",
    "file": "movie-1738.html",
    "cover": 88,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "少年向, 平行世界, 灵兽, 成长",
    "year": "2025",
    "description": "现实世界的小学生意外掉入纳尤古秘境，成为预言之子并拯救七色神兽。"
  },
  {
    "title": "龙凤呈祥2009",
    "file": "movie-1739.html",
    "cover": 89,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "假结婚，过年，欢喜冤家，合家欢，都市",
    "year": "2009",
    "description": "大年二十八，为了应付催婚，女白领租了个男公关回家过年，谁知男方全家都是演员。"
  },
  {
    "title": "阴阳路十一之撩鬼条命",
    "file": "movie-1740.html",
    "cover": 90,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "灵异, 禁忌游戏, 单元故事, 港式恐怖, 反转",
    "year": "2024",
    "description": "几个网红为博流量直播玩“撩鬼”游戏，却触犯了都市禁忌，每人都要按鬼片剧情惨死。"
  },
  {
    "title": "我们祖国多么广大",
    "file": "movie-1741.html",
    "cover": 91,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "公路, 亲情, 时代变迁, 寻根",
    "year": "2025",
    "description": "一位退休的地质学家带着叛逆的孙女，沿着中国边境线进行最后一次野外勘探。"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 家庭教师寅子 鸡肉库拉那 52赫兹，我爱你 尤利 恶夜狼女 两只大烟枪 单身的好处和坏处 美少年之恋 美女试爆场 黄大年 老港正传 荷索之蓝色狂想 暗泳2024 欲火红当当 转捩一刻 人生最后一场拍卖会 同窗之恋 如果爱，重来 迷尸校园 宝拉2016",
    "file": "movie-1742.html",
    "cover": 92,
    "region": "根据片名判断",
    "category": "科幻悬疑",
    "tags": "根据片名判断",
    "year": "根据片名判断",
    "description": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）"
  },
  {
    "title": "露露·贝特小姐",
    "file": "movie-1743.html",
    "cover": 93,
    "region": "英国",
    "category": "动作犯罪",
    "tags": "侦探, 贵族, 荒诞, 女仆, 毒舌",
    "year": "2025",
    "description": "庄园里最毒舌的女仆露露决定侦破命案，只为获得遗产买下隔壁的养鸡场。"
  },
  {
    "title": "纵横七洲洋",
    "file": "movie-1744.html",
    "cover": 94,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "海上丝绸之路, 沉船, 寻宝",
    "year": "2025",
    "description": "南宋沉船“南海一号”的惊世发现，揭开了一段跨越七大洋、纠缠七个家族七百年的恩怨。"
  },
  {
    "title": "克拉克森的农场 第三季",
    "file": "movie-1745.html",
    "cover": 95,
    "region": "英国",
    "category": "科幻悬疑",
    "tags": "农业, 暴躁老头, 种地, 机械, 英式幽默",
    "year": "2025",
    "description": "大猩猩杰里米·克拉克森继续用他的“钞能力”和馊主意，把务农变成灾难现场。"
  },
  {
    "title": "荒岛杀人假期",
    "file": "movie-1746.html",
    "cover": 96,
    "region": "美国 / 澳大利亚",
    "category": "科幻悬疑",
    "tags": "孤岛, 连环杀人, 生存, 反转",
    "year": "2026",
    "description": "八名网红受邀参加荒岛求生真人秀，却发现摄像头背后藏着一个真杀手。"
  },
  {
    "title": "与爱别离",
    "file": "movie-1747.html",
    "cover": 97,
    "region": "新加坡",
    "category": "动作犯罪",
    "tags": "临终关怀，亲情，和解，催泪，治愈",
    "year": "2024",
    "description": "一个事业有成的女强人，被迫回家照顾患有绝症的父亲，却发现父亲藏着一本日记。"
  },
  {
    "title": "多大事啊",
    "file": "movie-1748.html",
    "cover": 98,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "南京，方言，啃老，和解",
    "year": "2024",
    "description": "南京城内，一个总把“多大事啊”挂在嘴边的乐天派父亲，在查出绝症后，开始用自己的方式给废柴儿子“安排后路”。"
  },
  {
    "title": "恐怖热线之大头怪婴粤语",
    "file": "movie-1749.html",
    "cover": 99,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "都市传说, 电台, 伪纪录片, 灵异",
    "year": "2025",
    "description": "深夜电台接到一通诡异电话，来电者声称自己是被遗弃在医院废墟里的“大头怪婴”。"
  },
  {
    "title": "刀剑笑新传之决战",
    "file": "movie-1750.html",
    "cover": 100,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "武侠翻拍, 刀剑对决, 特效武侠, 江湖宿命, 正邪对抗",
    "year": "2017",
    "description": "天下第一剑客与天下第一刀客相约紫禁之巅，却发现这场决战是一场针对整个武林的阴谋。"
  },
  {
    "title": "布洛克岛秘音",
    "file": "movie-1751.html",
    "cover": 101,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "海岛异响, 家族创伤, 失眠噩梦, 失控磁场, 潜伏真相, 氛围压迫",
    "year": "2020",
    "description": "岛上居民夜里不断听见无法定位的低频声，随着一户人家接连失控，一段关于海底裂隙的秘密开始浮出水面。"
  },
  {
    "title": "客座艺术家",
    "file": "movie-1752.html",
    "cover": 102,
    "region": "英国",
    "category": "科幻悬疑",
    "tags": "艺术圈、邪教、心理操控、密室",
    "year": "2025",
    "description": "一位落魄画家受邀前往孤岛别墅为神秘富豪作画，却发现自己正在参与一场以命为赌注的“艺术”游戏。"
  },
  {
    "title": "神鹰闯天关",
    "file": "movie-1753.html",
    "cover": 103,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "武侠、飞禽、复仇、夺宝",
    "year": "1992",
    "description": "一只通灵巨鹰携血书横跨千里，意外将一名市井混混卷入了一场关乎武林存亡的惊天阴谋。"
  },
  {
    "title": "越策越开心2010",
    "file": "movie-1754.html",
    "cover": 104,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "世博年, 打工记, 小人物, 时代记忆",
    "year": "2010",
    "description": "2010年上海世博会前夕，一群来自五湖四海的农民工兄弟，用歪点子承包了世博园的清洁项目。"
  },
  {
    "title": "亲爱的小美人鱼",
    "file": "movie-1755.html",
    "cover": 105,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "美人鱼，校园，治愈",
    "year": "2024",
    "description": "患有罕见皮肤病的女孩把自己的病当作“美人鱼诅咒”，直到转学来的男生说她像真正的星星。"
  },
  {
    "title": "幕后杀手",
    "file": "movie-1756.html",
    "cover": 106,
    "region": "韩国",
    "category": "爱情青春",
    "tags": "编剧， 戏中戏， 反转",
    "year": "2024",
    "description": "过气惊悚剧编剧为翻红，在真实小区策划连环谋杀案作为“剧本素材”，没想到自己也成了这场真人秀里的提线木偶。"
  },
  {
    "title": "宝塔镇河妖2绝世妖龙",
    "file": "movie-1757.html",
    "cover": 107,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "网络电影, 特效, 盗墓, 妖龙",
    "year": "2021",
    "description": "民国时期，风水世家传人偶得龙骨残片，引来沉睡千年的绝世妖龙屠城，宝塔镇不住，唯有以血补天。"
  },
  {
    "title": "摧毁",
    "file": "movie-1758.html",
    "cover": 108,
    "region": "韩国",
    "category": "喜剧动画",
    "tags": "建筑坍塌、连环陷阱、密室、倒计时、牺牲",
    "year": "2025",
    "description": "一名结构工程师醒来发现自己被困在即将爆破的大厦顶层，而引爆器连接着他女儿的心脏起搏器。"
  },
  {
    "title": "恶魔少爷别吻我3",
    "file": "movie-1759.html",
    "cover": 109,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "甜宠，校园，契约情侣，傲娇少爷",
    "year": "2018",
    "description": "恶魔少爷失忆后忘记了一切，唯独记得和灰姑娘签订的“恋人契约”。"
  },
  {
    "title": "我的女神第一季",
    "file": "movie-1760.html",
    "cover": 110,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "同居, 废柴逆袭, 女神下凡, 日常, 甜宠",
    "year": "2023",
    "description": "废柴漫画家许愿招来了真正的幸运女神，但女神必须在100天内教会他“幸福”是什么。"
  },
  {
    "title": "变形金刚：堕落者的复仇",
    "file": "movie-1761.html",
    "cover": 111,
    "region": "美国",
    "category": "高清电影",
    "tags": "机甲，远古文明，复仇，宇宙冒险",
    "year": "2026",
    "description": "堕落者震天尊复活，绑架了人类科学家，逼迫她解码能摧毁所有变形金刚火种源的禁忌武器。"
  },
  {
    "title": "未定之天",
    "file": "movie-1762.html",
    "cover": 112,
    "region": "中国台湾",
    "category": "爱情青春",
    "tags": "亲情, 失踪, 多视角, 情感解谜",
    "year": "2025",
    "description": "女儿在毕业旅行中失踪，母亲、警方、社交媒体和女儿自己的日记，拼凑出四个完全不同的“真相”。"
  },
  {
    "title": "怒火1984",
    "file": "movie-1763.html",
    "cover": 113,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "港产片，警匪，热血，兄弟情",
    "year": "2024",
    "description": "1984年的香港，一名火爆刑警为替搭档报仇，独自闯入毒枭老巢。"
  },
  {
    "title": "拍三小电影",
    "file": "movie-1764.html",
    "cover": 114,
    "region": "中国台湾",
    "category": "欧美热播",
    "tags": "拍电影, 乡下, 梦想",
    "year": "2024",
    "description": "三个台东少年捡到一台DV，为了圆谎说自己在拍“大制作”，竟然真的凑齐了演员、剧本和一头牛。"
  },
  {
    "title": "合约男女国语",
    "file": "movie-1765.html",
    "cover": 115,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "合约恋爱, 误会, 都市白领, 搭档, 轻喜剧, 国语",
    "year": "2017",
    "description": "为了应付家族催婚和公司危机，一对互看不顺眼的职场死对头签下恋爱合约，却在假戏真做里把自己先绕进去了。"
  },
  {
    "title": "野性生灵",
    "file": "movie-1766.html",
    "cover": 116,
    "region": "英国 / 美国",
    "category": "欧美热播",
    "tags": "野生动物, 极限环境, 罕见画面, 生态, 震撼",
    "year": "2026",
    "description": "耗时五年，首次用8K镜头记录下地球上七个最极端环境中未被人类见过的动物行为。"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 震精游戏 七月的舞步 地狱尖兵 我在东北做白事的那些年 加冕街：出走非洲 后屋 秘密联络 剧本人生 破浪三人行 贾方复仇记 征服圣母峰 梦断乐缘堂 最美的时候遇见你 夜之女王 猎象通辑令 禁断动画22 年度人物 拉面首领 隐门粤语 钱学森",
    "file": "movie-1767.html",
    "cover": 117,
    "region": "根据片名判断",
    "category": "喜剧动画",
    "tags": "根据片名判断",
    "year": "根据片名判断",
    "description": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）"
  },
  {
    "title": "山田茂",
    "file": "movie-1768.html",
    "cover": 118,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "小人物, 战后, 匠心",
    "year": "2023",
    "description": "被称为“昭和废柴”的山田茂，在东京垃圾场里捡回了一台破旧钢琴，却修好了整个时代的声音。"
  },
  {
    "title": "二嫫",
    "file": "movie-1769.html",
    "cover": 119,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "农村, 女性自立, 90年代, 买电视, 黑色幽默",
    "year": "2024",
    "description": "90年代陕北农村，一个女人为了买一台全村最大的电视机，把自己活成了一场荒诞的“竞赛”。"
  },
  {
    "title": "黄河英雄",
    "file": "movie-1770.html",
    "cover": 120,
    "region": "中国",
    "category": "喜剧动画",
    "tags": "抗战, 黄河, 船工",
    "year": "2024",
    "description": "1938年花园口决堤后，一群黄河船工驾驶木船，在洪水中救起数千被困百姓和一名藏有日军秘密地图的军官。"
  },
  {
    "title": "封神英雄榜",
    "file": "movie-1771.html",
    "cover": 121,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "封神改编, 群像剧, 特效大片, 反宿命",
    "year": "2026",
    "description": "姜子牙发现封神榜上每一个名字早已被天界内定，他决定撕毁榜单，让人间英雄自己选择成神或成魔。"
  },
  {
    "title": "刺杀肯尼迪",
    "file": "movie-1772.html",
    "cover": 122,
    "region": "美国",
    "category": "欧美热播",
    "tags": "政治阴谋, 悬疑, 真实事件, 奥斯卡, 法庭戏",
    "year": "1991",
    "description": "一位地方检察官重新调查肯尼迪遇刺案，揭开背后震撼世界的巨大阴谋。"
  },
  {
    "title": "今天也很可爱的狗",
    "file": "movie-1773.html",
    "cover": 123,
    "region": "韩国",
    "category": "精选视频",
    "tags": "诅咒变身, 傲娇男主, 人狗情缘",
    "year": "2023",
    "description": "对公司老板恨之入骨的女员工，因诅咒每当亲吻男人就会变成一只小狗，而唯一能帮她解除诅咒的，竟是她想咬的老板。"
  },
  {
    "title": "骨肉的总和",
    "file": "movie-1774.html",
    "cover": 124,
    "region": "西班牙",
    "category": "剧情佳作",
    "tags": "器官移植, 伦理困境, 复仇",
    "year": "2022",
    "description": "接受心脏移植后，她开始梦见谋杀现场。那颗心脏的原主人，似乎想借她的手完成复仇。"
  },
  {
    "title": "手提箱女郎",
    "file": "movie-1775.html",
    "cover": 125,
    "region": "日本",
    "category": "爱情青春",
    "tags": "女性困境，都市传说，多重人格，手提箱隐喻",
    "year": "2025",
    "description": "东京地铁站出现一名永远拎着沉重手提箱的女子，箱子里装的到底是什么？"
  },
  {
    "title": "伊基塔：蝎子之路",
    "file": "movie-1776.html",
    "cover": 126,
    "region": "哥伦比亚",
    "category": "喜剧动画",
    "tags": "足球、疯子门将、自由与疯狂、真实事件改编、人生起落",
    "year": "2025",
    "description": "哥伦比亚传奇门将“疯子”伊基塔，用他惊世骇俗的“蝎子摆尾”和同样疯狂的人生，诠释了什么是自由与代价。"
  },
  {
    "title": "碟中谍",
    "file": "movie-1777.html",
    "cover": 127,
    "region": "美国",
    "category": "精选视频",
    "tags": "特工, 间谍, 卧底, 经典, 团队背叛",
    "year": "1996",
    "description": "伊桑·亨特所在的小组在执行任务时全军覆没，他必须在CIA和真凶的双重追杀下查出一份“叛徒名单”。"
  },
  {
    "title": "娇妻摆乌龙",
    "file": "movie-1778.html",
    "cover": 128,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "黑白片, 误会, 粤语长片, 女佣",
    "year": "1969",
    "description": "富家少奶奶为了试验丈夫忠诚度，假装失忆后扮成女佣住进自己家，结果把全家搞得鸡飞狗跳。"
  },
  {
    "title": "克拉拉幽魂",
    "file": "movie-1779.html",
    "cover": 129,
    "region": "英国",
    "category": "科幻悬疑",
    "tags": "密室压迫, 童年阴影, 玩偶诅咒",
    "year": "2018",
    "description": "年轻的保姆发现雇主家那个古董人偶“克拉拉”每到深夜就会移动，而且似乎在保护一个秘密。"
  },
  {
    "title": "杀出绝地",
    "file": "movie-1780.html",
    "cover": 130,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "丛林战, 特种兵, 背叛, 极限生存, 复仇",
    "year": "2025",
    "description": "退役特种兵在东南亚雨林遭遇昔日战友的伏击，他必须在24小时内穿过“绝地”，否则一颗足以炸平城市的脏弹就会引爆。"
  },
  {
    "title": "勃朗特姐妹",
    "file": "movie-1781.html",
    "cover": 131,
    "region": "英国",
    "category": "欧美热播",
    "tags": "文学, 姐妹, 维多利亚时代, 创作, 疾病与死亡",
    "year": "2022",
    "description": "荒原上的牧师住宅里，三个天才姐妹一边与贫穷和疾病搏斗，一边悄悄写下震动世界的小说。"
  },
  {
    "title": "该计划",
    "file": "movie-1782.html",
    "cover": 132,
    "region": "韩国",
    "category": "精选视频",
    "tags": "复仇计划、记忆移植、身份错位、高能反转",
    "year": "2024",
    "description": "七个人收到同一封神秘邮件：“该计划开始，你们中有五个是凶手，两个是受害者，但没人记得自己是哪一边。”"
  },
  {
    "title": "千里难寻",
    "file": "movie-1783.html",
    "cover": 133,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "寻亲，打拐，现实题材，治愈，公路片",
    "year": "2025",
    "description": "被拐25年的儿子终于被找到，但他拒绝认亲，养母为了报恩，决定帮他寻找亲生父母。"
  },
  {
    "title": "骄傲与偏见",
    "file": "movie-1784.html",
    "cover": 134,
    "region": "英国",
    "category": "科幻悬疑",
    "tags": "同性, 巴基斯坦裔, 伦敦, 奥斯汀改编",
    "year": "2026",
    "description": "将《傲慢与偏见》搬到当代伦敦的巴基斯坦裔同性恋社群，伊丽莎白变成了一位酷儿摄影师。"
  },
  {
    "title": "恶灵婴弑",
    "file": "movie-1785.html",
    "cover": 135,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "邪教, 婴儿, 诅咒",
    "year": "2025",
    "description": "一位孕妇被邪教诅咒，她腹中的双胞胎只有一个能活着出生，另一个将成为恶灵的容器。"
  },
  {
    "title": "浴血摩天楼",
    "file": "movie-1786.html",
    "cover": 136,
    "region": "韩国",
    "category": "精选视频",
    "tags": "大楼，黑帮，清扫，以一敌百",
    "year": "2025",
    "description": "退休黑帮传奇为了给女儿筹集药费，单枪匹马闯入全亚洲安保最严的摩天楼，从底层一路杀到顶层。"
  },
  {
    "title": "了不起的埃莉诺",
    "file": "movie-1787.html",
    "cover": 137,
    "region": "法国",
    "category": "精选视频",
    "tags": "女性觉醒、中世纪、权力游戏",
    "year": "2021",
    "description": "12世纪的欧洲，阿基坦的埃莉诺从王后到阶下囚，再到成为英格兰最有权势的太后，她用三十年被囚换回了儿子们的王冠。"
  },
  {
    "title": "冰果",
    "file": "movie-1788.html",
    "cover": 138,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "日常之谜, 古典部, 重置版, 节能主义",
    "year": "2024",
    "description": "十年后重置，“节能少年”折木奉太郎再次遭遇“蔷薇色”的校园生活，这次要破解的是关于平行世界的谜团。"
  },
  {
    "title": "最后的木琴师",
    "file": "movie-1789.html",
    "cover": 139,
    "region": "东南亚（虚构）",
    "category": "爱情青春",
    "tags": "反战, 传统文化, 传承, 悲剧美学",
    "year": "2025",
    "description": "战火即将烧毁一座古老村落，一位双目失明的老木琴师决定用最后的演奏，送别所有即将逝去的灵魂。"
  },
  {
    "title": "七个隆咚锵咚锵",
    "file": "movie-1790.html",
    "cover": 140,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "春节, 南北文化, 返乡",
    "year": "2024",
    "description": "一个在北京打拼的南方小伙带着东北女友回潮汕老家过年，七天的文化冲突和笑料让他重新理解了“家”的含义。"
  },
  {
    "title": "幕末美食 武士饭！",
    "file": "movie-1791.html",
    "cover": 141,
    "region": "日本",
    "category": "欧美热播",
    "tags": "幕末, 治愈, 料理, 群像",
    "year": "2020",
    "description": "新选组的刀光剑影背后，屯所的厨房里，一位被贬为伙夫的落魄武士正用京都最贵的怀石料理，收买着最难搞的浪人心。"
  },
  {
    "title": "识骨寻踪第十二季",
    "file": "movie-1792.html",
    "cover": 142,
    "region": "美国",
    "category": "欧美热播",
    "tags": "终极谜团, 团队回归, 连环杀手",
    "year": "2025",
    "description": "杰斐逊学院团队收到一个匿名包裹，里面是十年前的“海盗杀手”案从未公开的第九具骸骨。"
  },
  {
    "title": "萨米的印记",
    "file": "movie-1793.html",
    "cover": 143,
    "region": "瑞典 / 挪威 / 丹麦",
    "category": "喜剧动画",
    "tags": "萨米族, 种族歧视, 北欧历史, 身份认同",
    "year": "2016",
    "description": "1950年代，一个萨米族少女被迫接受瑞典化教育，在羞辱与挣扎中寻找自己的身份。"
  },
  {
    "title": "至少是圣徒",
    "file": "movie-1794.html",
    "cover": 144,
    "region": "西班牙 / 墨西哥",
    "category": "动作犯罪",
    "tags": "宗教, 罪案, 赎罪, 神秘主义",
    "year": "2024",
    "description": "一名被驱逐的神父回到腐败的边境小镇，他发现只有成为“圣徒”，才能惩治那些法律制裁不了的恶魔。"
  },
  {
    "title": "心里有数",
    "file": "movie-1795.html",
    "cover": 145,
    "region": "中国台湾",
    "category": "高清电影",
    "tags": "读心，治愈，创伤，秘密",
    "year": "2024",
    "description": "家里最沉默的父亲突然能听见所有人的心里话，而第一句听到的竟是儿子的遗书。"
  },
  {
    "title": "烽火恋曲",
    "file": "movie-1796.html",
    "cover": 146,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "抗战时期, 战地恋歌, 音乐家, 生离死别",
    "year": "2014",
    "description": "1937年南京沦陷前，留洋女钢琴家与军械工程师在废墟中合奏最后一曲。"
  },
  {
    "title": "蒙城人欣蒂",
    "file": "movie-1797.html",
    "cover": 147,
    "region": "加拿大",
    "category": "欧美热播",
    "tags": "移民, 地下世界, 女性",
    "year": "2025",
    "description": "华裔移民欣蒂白天是蒙特利尔的持牌导游，晚上则是帮黑帮处理“麻烦”的清洁工。"
  },
  {
    "title": "花",
    "file": "movie-1798.html",
    "cover": 148,
    "region": "韩国",
    "category": "高清电影",
    "tags": "母女，代际创伤，济州岛，海女，解放",
    "year": "2024",
    "description": "一名首尔的白领精英辞职回到济州岛，继承祖母海女事业，却发现家族女性都曾被同一个诅咒困扰。"
  },
  {
    "title": "攻其不备",
    "file": "movie-1799.html",
    "cover": 149,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "橄榄球, 无家可归, 收养, 真实事件, 励志",
    "year": "2009",
    "description": "一位白人太太收养了流落街头的黑人少年，并将其培养成美国橄榄球明星。"
  },
  {
    "title": "爱的路",
    "file": "movie-1800.html",
    "cover": 150,
    "region": "德国",
    "category": "科幻悬疑",
    "tags": "长期关系，中年危机，德式冷静，写实",
    "year": "2025",
    "description": "一对在一起十五年的同性恋人，在前往冰岛的公路旅行中，重新审视“爱是否还有未来”。"
  },
  {
    "title": "两性谎言",
    "file": "movie-1801.html",
    "cover": 1,
    "region": "台湾",
    "category": "动作犯罪",
    "tags": "性别认同,婚姻博弈,社会压力,关系伦理",
    "year": "2021",
    "description": "一段看似温顺的婚前恋情里，两人互换了“保护对方”的身份标签，真相像潮水一样退去时，剩下的只是比爱情更难承受的自我辩白。"
  },
  {
    "title": "前男友的遗书",
    "file": "movie-1802.html",
    "cover": 2,
    "region": "日本",
    "category": "剧情佳作",
    "tags": "遗产，回忆杀，解谜",
    "year": "2023",
    "description": "女律师收到已分手五年的富豪前男友遗书，遗书上写：“所有财产留给找出我真正死因的人。”"
  },
  {
    "title": "纽约灾星第二季",
    "file": "movie-1803.html",
    "cover": 3,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "连环杀手, 法律漏洞, 媒体审判, 高智商犯罪",
    "year": "2025",
    "description": "富二代杀手再次脱罪后，竟买下一家电视台直播自己的生活，向全美观众挑衅。"
  },
  {
    "title": "警察学校3：初为人师",
    "file": "movie-1804.html",
    "cover": 4,
    "region": "美国",
    "category": "欧美热播",
    "tags": "警察学院, 无厘头, 80年代, 怀旧, 群像喜剧",
    "year": "1986",
    "description": "一群吊车尾学员毕业当了教官，却发现教人比自己当警察难一万倍。"
  },
  {
    "title": "意学研究",
    "file": "movie-1805.html",
    "cover": 5,
    "region": "意大利/法国",
    "category": "喜剧动画",
    "tags": "哲学, 学术, 黑色幽默, 意式喜剧, 荒诞",
    "year": "2019",
    "description": "一个研究“人类无聊行为”的潦倒教授，无意间发明了“让一切变得有意义”的公式。"
  },
  {
    "title": "地下隧道",
    "file": "movie-1806.html",
    "cover": 6,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "地铁, 平行世界, 循环, 高概念",
    "year": "2026",
    "description": "地铁末班车钻进一条废弃隧道后，十二个乘客发现每过一站，就有一人被“删除”且无人记得。"
  },
  {
    "title": "当我跑步时我什么都不想",
    "file": "movie-1807.html",
    "cover": 7,
    "region": "日本",
    "category": "欧美热播",
    "tags": "马拉松, 冥想, 治愈",
    "year": "2025",
    "description": "中年失业的废柴大叔，为领取参赛奖品而开始跑步，却在汗水中找回失去的人生。"
  },
  {
    "title": "关于无尽",
    "file": "movie-1808.html",
    "cover": 8,
    "region": "瑞典",
    "category": "精选视频",
    "tags": "存在主义, 诗意影像, 女性视角, 时间循环",
    "year": "2024",
    "description": "一个女人在无尽的时间里反复经历着同一天，但她不是被困住，而是被选中记录人类所有遗憾。"
  },
  {
    "title": "郭明义",
    "file": "movie-1809.html",
    "cover": 9,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "真人真事， 雷锋精神， 催泪",
    "year": "2024",
    "description": "献血模范郭明义意外发现自己稀有的“熊猫血”能救人，却也引来了境外血液走私黑市的觊觎。"
  },
  {
    "title": "加菲猫和他的朋友们第七季",
    "file": "movie-1810.html",
    "cover": 10,
    "region": "美国",
    "category": "欧美热播",
    "tags": "加菲猫,邻里,城市探险,友情,连续谜题",
    "year": "2024",
    "description": "当老友记忆节奏崩坏，猫咪同盟为了修复社区厨房，不得不把一场庆生派对办成穿越仓库、码头和旧火车站的大型追踪行动，笑点与悬念并进。"
  },
  {
    "title": "艾拉的青春日志2.0",
    "file": "movie-1811.html",
    "cover": 11,
    "region": "德国",
    "category": "精选视频",
    "tags": "脑机接口, 自我认同, 成长, 伦理",
    "year": "2026",
    "description": "艾拉的大脑植入芯片可以随时回放自己的记忆，但她发现有些记忆根本不是自己的。"
  },
  {
    "title": "达拉斯买家俱乐部",
    "file": "movie-1812.html",
    "cover": 12,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "艾滋, 医药体制, 抗争, 真实事件改编",
    "year": "2024",
    "description": "被诊断为艾滋病只剩30天寿命的电工，自己走私药物，救活了上万人，包括他自己。"
  },
  {
    "title": "曲中情未了",
    "file": "movie-1813.html",
    "cover": 13,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "忘年恋, 音乐世家, 时间跨度, 遗憾",
    "year": "2025",
    "description": "一首未完成的钢琴协奏曲，串联起音乐才女与恩师跨越四十年的暗恋与错过。"
  },
  {
    "title": "影子告白",
    "file": "movie-1814.html",
    "cover": 14,
    "region": "中国台湾",
    "category": "动作犯罪",
    "tags": "灵魂交换, 校园暗恋, 治愈, 轻科幻",
    "year": "2023",
    "description": "我能进入你的影子，听到你的心声，但代价是——我永远无法被你看见。"
  },
  {
    "title": "利维坦号战记",
    "file": "movie-1815.html",
    "cover": 15,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "太空歌剧, 巨舰, 人工智能叛变, 史诗",
    "year": "2025",
    "description": "人类最大战舰“利维坦号”失踪百年后突然回归，舰上全员已异变成怪物。"
  },
  {
    "title": "八万里",
    "file": "movie-1816.html",
    "cover": 16,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "骑行，梦想，青春，父子，励志",
    "year": "2023",
    "description": "为了完成母亲的遗愿，叛逆少年独自骑单车穿越川藏线，在途中理解了父爱如山。"
  },
  {
    "title": "我的爸呀",
    "file": "movie-1817.html",
    "cover": 17,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "亲情，阿尔茨海默，父子",
    "year": "2028",
    "description": "患有阿尔茨海默病的父亲只记得自己年轻时在片场做龙虎武师的日子，儿子只好租来道具，陪父亲重拍当年的“电影”。"
  },
  {
    "title": "作战啦！茶室总动员",
    "file": "movie-1818.html",
    "cover": 18,
    "region": "马来西亚",
    "category": "爱情青春",
    "tags": "茶室， 南洋， 美食， 家族经营， 本土文化",
    "year": "2024",
    "description": "南洋一家老茶室面临连锁咖啡店的收购威胁，全家上下用祖传秘方和花式“作战”保卫小店。"
  },
  {
    "title": "独立少年合唱团",
    "file": "movie-1819.html",
    "cover": 19,
    "region": "韩国",
    "category": "剧情佳作",
    "tags": "校园合唱, 自主创作, 友情裂痕, 家庭压力, 舞台追梦",
    "year": "2023",
    "description": "一群不被学校看好的少年偷偷组建合唱团，想用一首不按规则写成的歌，唱出他们各自无法开口的人生。"
  },
  {
    "title": "穆桂英挂帅",
    "file": "movie-1820.html",
    "cover": 20,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "女将, 杨家将, 巾帼, 忠义, 改编",
    "year": "2014",
    "description": "当整个天波府只剩下女人与孩子，寡妇穆桂英披甲持枪，直奔边关。"
  },
  {
    "title": "偶然与想象之轮",
    "file": "movie-1821.html",
    "cover": 21,
    "region": "日本",
    "category": "精选视频",
    "tags": "平行世界, 偶然性, 滨口龙介风, 三段式, 魔幻现实",
    "year": "2026",
    "description": "一只失踪的耳环、一本误投的小说、一个能看见“未发生之事”的清洁工，三个故事都藏着命运的蛇形。"
  },
  {
    "title": "杀手世界杯",
    "file": "movie-1822.html",
    "cover": 22,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "黑色幽默，竞技，杀手，暴力美学",
    "year": "2018",
    "description": "全球地下杀手组织每四年举办一次足球赛，输的人不是下场，是下葬。"
  },
  {
    "title": "环保硬汉",
    "file": "movie-1823.html",
    "cover": 23,
    "region": "法国 / 德国",
    "category": "喜剧动画",
    "tags": "讽刺, 猛男, 生态, 公路片, 废土",
    "year": "2024",
    "description": "全球顶尖的“生态恐怖分子”被联合国征召，驾驶着垃圾车改装的重型机甲，去阻止石油公司的末日计划。"
  },
  {
    "title": "失恋日记",
    "file": "movie-1824.html",
    "cover": 24,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "日记体, 女性群像, 治愈, 分手",
    "year": "2020",
    "description": "三个闺蜜合租在一间公寓，轮流用一本日记记录失恋，却意外发现了上一任租客的谋杀线索。"
  },
  {
    "title": "联邦调查局第一季",
    "file": "movie-1825.html",
    "cover": 25,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "特工, 卧底, 连环案, 组织内鬼",
    "year": "2023",
    "description": "一支FBI精英小组追查神秘黑客时，发现泄密者竟藏在高层内部。"
  },
  {
    "title": "激情时速",
    "file": "movie-1826.html",
    "cover": 26,
    "region": "中国香港/内地合拍",
    "category": "剧情佳作",
    "tags": "飙车、警匪、兄弟情、港风",
    "year": "2026",
    "description": "曾经的非法赛车手被警方特招，以卧底身份潜入地下飙车党，却发现自己失散多年的亲兄弟就是头号车手。"
  },
  {
    "title": "戏外戏",
    "file": "movie-1827.html",
    "cover": 27,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "片场, 潜规则, 元叙事, 讽刺",
    "year": "2025",
    "description": "一个投资方塞进来的关系户女演员，在民国戏片场改戏、耍大牌，直到导演发现她其实是来查税的纪检委。"
  },
  {
    "title": "金陵三绝之猾丐",
    "file": "movie-1828.html",
    "cover": 28,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "民国, 江湖, 骗术, 悬案, 师徒",
    "year": "2021",
    "description": "民国金陵，一个以“撒谎、装死、变脸”三绝闻名的江湖猾丐，被卷入了一场关乎国宝的连环命案。"
  },
  {
    "title": "猛龙大杀手",
    "file": "movie-1829.html",
    "cover": 29,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "杀手, 怀旧, 九龙城寨, 双雄",
    "year": "1995",
    "description": "退隐杀手被一只蜥蜴拖回江湖，对手竟是二十年前的自己。"
  },
  {
    "title": "将婚姻进行到底",
    "file": "movie-1830.html",
    "cover": 30,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "婚姻, 中年危机, 现实题材, 轻喜剧",
    "year": "2025",
    "description": "一对准备离婚的中年夫妻，因意外的疫情封控被困在家中45天，被迫重新学习如何做夫妻。"
  },
  {
    "title": "满船春色",
    "file": "movie-1831.html",
    "cover": 31,
    "region": "中国香港 / 中国大陆",
    "category": "剧情佳作",
    "tags": "偷渡，九十年代，命运，船戏",
    "year": "2026",
    "description": "上世纪90年代，一艘拥挤的偷渡船上，两个各怀心事的年轻人企图用一段虚假的恋情换取船票。"
  },
  {
    "title": "英雄本色",
    "file": "movie-1832.html",
    "cover": 32,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "枪战, 兄弟情, 翻拍",
    "year": "2027",
    "description": "2047年的香港，年迈的瘸腿黑客重出江湖，只为从AI黑帮手中抢回弟弟的“数字灵魂”。"
  },
  {
    "title": "小小心愿",
    "file": "movie-1833.html",
    "cover": 33,
    "region": "中国台湾",
    "category": "动作犯罪",
    "tags": "亲子关系, 绝症, 治愈, 社会议题",
    "year": "2025",
    "description": "一个癌症晚期的单亲妈妈，和四岁的女儿一起完成“帮妈妈找男朋友”的遗愿清单。"
  },
  {
    "title": "恋夏进行式",
    "file": "movie-1834.html",
    "cover": 34,
    "region": "中国台湾",
    "category": "科幻悬疑",
    "tags": "夏日, 打工, 初恋, 离别, 海边",
    "year": "2021",
    "description": "高考结束那天，闷骚学霸林佳音在冰店打工时，被一个骑机车的男生往围裙里塞了一朵鸡蛋花。"
  },
  {
    "title": "恍惚的人",
    "file": "movie-1835.html",
    "cover": 35,
    "region": "日本",
    "category": "欧美热播",
    "tags": "记忆删除, 伦理困局, 高概念, 社会派",
    "year": "2025",
    "description": "一家科技公司推出“恍惚服务”，可以删除你最痛苦的记忆，但删除后你的人格和人际关系会随之崩塌。"
  },
  {
    "title": "真爱如血第三季",
    "file": "movie-1836.html",
    "cover": 36,
    "region": "美国",
    "category": "高清电影",
    "tags": "吸血鬼，狼人，灵媒，小镇，种族冲突",
    "year": "2024",
    "description": "吸血鬼合法化三年后，一种能让吸血鬼短暂变回人类的“退化病毒”在小镇爆发。"
  },
  {
    "title": "反间游戏",
    "file": "movie-1837.html",
    "cover": 37,
    "region": "俄罗斯",
    "category": "剧情佳作",
    "tags": "双面间谍，反转，冷战末期，棋局隐喻，智力角斗",
    "year": "2021",
    "description": "冷战末期，克格勃怀疑一名潜伏在苏联高层三十年的美国间谍，揪出他的代价是整个反间局的覆灭。"
  },
  {
    "title": "女记者查案记",
    "file": "movie-1838.html",
    "cover": 38,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "记者, 调查, 女性, 社会派, 真相",
    "year": "2024",
    "description": "报社实习记者追查一桩旧案，却发现所有线索都在指向自己的养父。"
  },
  {
    "title": "智取华山传奇",
    "file": "movie-1839.html",
    "cover": 39,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "特种作战, 侦察兵, 悬崖, 真实改编, 绝境",
    "year": "2021",
    "description": "1949年，七名侦察兵攀越绝壁天险，粉碎国民党残部华山防线。"
  },
  {
    "title": "梦想 2023",
    "file": "movie-1840.html",
    "cover": 40,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "电竞, 中年危机, 热血, 逆袭",
    "year": "2023",
    "description": "五位被生活磨平棱角的40岁前电竞冠军，为救老队友重夺全国联赛冠军。"
  },
  {
    "title": "邪恶与疯狂",
    "file": "movie-1841.html",
    "cover": 41,
    "region": "韩国",
    "category": "欧美热播",
    "tags": "双重人格, 腐败警察, 私刑",
    "year": "2024",
    "description": "首尔警局最腐败的刑警脑子里住着一个疯狂正义的人格，两人共用一个身体打击犯罪。"
  },
  {
    "title": "逆境",
    "file": "movie-1842.html",
    "cover": 42,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "残奥会, 马拉松, 励志, 真实改编, 师徒",
    "year": "2024",
    "description": "一名失去双腿的退役军人，在倔强少女的陪伴下，向残奥会马拉松发起冲击。"
  },
  {
    "title": "缘来自有机粤语",
    "file": "movie-1843.html",
    "cover": 43,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "有机生活，田园治愈，港式温情，中年爱情",
    "year": "2025",
    "description": "一名挑剔的女强人下乡经营有机农场，与粗犷的本地农夫从互相嫌弃到日久生情。"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 人生七年3 女人如花 浪漫之约 青春正步走 秋霞 合众秩序 神道帝尊 封神榜之凤鸣岐山 厨娘杀手 圣昆廷监狱篮球队 裸拳斗 李长镐的外人球团 当花季遇见梦想 男生女生向前冲 三国之战神无双 幕府将军 为你存在的每一天 影之花 盲剑客 呼吸正常",
    "file": "movie-1844.html",
    "cover": 44,
    "region": "根据片名判断",
    "category": "剧情佳作",
    "tags": "根据片名判断",
    "year": "根据片名判断",
    "description": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）"
  },
  {
    "title": "赴汤蹈火",
    "file": "movie-1845.html",
    "cover": 45,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "消防员, 化工爆炸, 兄弟情, 真实事件改编, 生死救援",
    "year": "2026",
    "description": "化工园区连环爆炸后，一对闹翻多年的消防员兄弟必须在地狱般的火场中背靠背作战。"
  },
  {
    "title": "刹那间",
    "file": "movie-1846.html",
    "cover": 46,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "时间循环, 出租车, 失踪, 亲情与良知, 高架桥",
    "year": "2023",
    "description": "一场只差七秒的出租车事故，把他推向时间循环里，他必须在自己不断重演的罪与救赎之间，选一个能保住陌生人的答案。"
  },
  {
    "title": "布鲁诺与布茨：泳池我来了",
    "file": "movie-1847.html",
    "cover": 47,
    "region": "加拿大",
    "category": "科幻悬疑",
    "tags": "校园喜剧, 死党, 泳池大作战, 青春搞笑",
    "year": "2018",
    "description": "两个死对头被罚清理学校废弃泳池，却意外发现池底藏着全校最大的秘密。"
  },
  {
    "title": "扭转未来",
    "file": "movie-1848.html",
    "cover": 48,
    "region": "美国",
    "category": "爱情青春",
    "tags": "穿越时空, 自我救赎, 父子, 暖泪",
    "year": "2006",
    "description": "中年失意的建筑师在旧居发现一台能接通三十年前的电话，他决定阻止当年父母的离异，却差点抹去自己的存在。"
  },
  {
    "title": "麦加同志",
    "file": "movie-1849.html",
    "cover": 49,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "红色, 信仰, 朝圣",
    "year": "2025",
    "description": "一位中国共产党员的麦加朝圣之旅，在信仰与使命之间寻找答案。"
  },
  {
    "title": "你不是我2023",
    "file": "movie-1850.html",
    "cover": 50,
    "region": "中国台湾",
    "category": "动作犯罪",
    "tags": "身份互换， AI换脸， 自我认知， 都市传说",
    "year": "2023",
    "description": "一款暗网流行的“人生交换”游戏，让失意白领体验富豪生活，却发现自己正在被彻底取代。"
  },
  {
    "title": "百万坦克",
    "file": "movie-1851.html",
    "cover": 51,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "抗战, 寻宝, 坦克大战, 民间传奇, 男性向",
    "year": "2024",
    "description": "一张藏宝图显示，日军曾秘密藏匿一百辆坦克在深山，各方势力闻风而动。"
  },
  {
    "title": "碰之道",
    "file": "movie-1852.html",
    "cover": 52,
    "region": "日本",
    "category": "爱情青春",
    "tags": "黑帮, 动作, 仁义, 日本, 硬汉",
    "year": "2024",
    "description": "一个过气的黑帮打手，用最后的拳头守护一条快要消失的老街。"
  },
  {
    "title": "王者之舞",
    "file": "movie-1853.html",
    "cover": 53,
    "region": "爱尔兰",
    "category": "精选视频",
    "tags": "踢踏舞, 大河之舞, 迈克尔·弗莱利, 热血",
    "year": "1996",
    "description": "为了捍卫爱尔兰踢踏舞的尊严，舞王必须在万魔之夜击败恶魔，夺回被封印的舞鞋。"
  },
  {
    "title": "夏夜知君暖",
    "file": "movie-1854.html",
    "cover": 54,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "暗恋, 双向奔赴, 烟火气",
    "year": "2024",
    "description": "每年夏夜，高考结束的女孩都会在巷口等到一碗免费冰粉，她以为是奶奶，其实是隔壁那个“小混混”。"
  },
  {
    "title": "亲密杀机粤语",
    "file": "movie-1855.html",
    "cover": 55,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "暗黑爱情、夫妻互杀、心理战、原声、反转",
    "year": "2025",
    "description": "结婚五周年纪念日，妻子在丈夫的枕头下发现了安眠药，而丈夫在妻子的包里发现了毒药瓶。"
  },
  {
    "title": "都市巡警",
    "file": "movie-1856.html",
    "cover": 56,
    "region": "美国 / 德国",
    "category": "剧情佳作",
    "tags": "高科技犯罪, 孤胆英雄, 黑色电影, 街头执法",
    "year": "2025",
    "description": "一位因伤退居二线的老警探，在AI巡警全面接管街头治安后，发现AI系统的最高权限被黑。"
  },
  {
    "title": "碧血兄弟情",
    "file": "movie-1857.html",
    "cover": 57,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "卧底，兄弟，牺牲，港风，宿命",
    "year": "2025",
    "description": "为了铲除毒枭，哥哥当了警察卧底，弟弟当了黑帮打手，他们都不知道对方在对面。"
  },
  {
    "title": "我的婚内情",
    "file": "movie-1858.html",
    "cover": 58,
    "region": "中国台湾",
    "category": "爱情青春",
    "tags": "婚姻危机, 自我救赎, 女性成长",
    "year": "2025",
    "description": "结婚十年的全职太太发现丈夫的秘密日记，里面记录的却是她作为妻子的全部“罪状”。"
  },
  {
    "title": "浪漫史",
    "file": "movie-1859.html",
    "cover": 59,
    "region": "韩国",
    "category": "剧情佳作",
    "tags": "年代爱情，报社，记者，韩国近代史",
    "year": "2024",
    "description": "1930年代京城府，一名朝鲜女记者与日本贵族之子在铅字与枪炮间书写禁忌之恋。"
  },
  {
    "title": "米小圈上学记2",
    "file": "movie-1860.html",
    "cover": 60,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "成长日记, 童年烦恼, 想象力爆炸, 课堂搞笑",
    "year": "2024",
    "description": "三年级下学期，米小圈为了让自己的“丢人事件”不在全校广播，联合铁三角对广播站发起了总攻。"
  },
  {
    "title": "为自由而战",
    "file": "movie-1861.html",
    "cover": 61,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "独立战争, 奴隶起义, 史诗, 热兵器",
    "year": "2026",
    "description": "美国独立战争最黑暗的角落：一名黑奴撕掉主人给的“参军抵自由”契约，组建了自己的游击队。"
  },
  {
    "title": "通勤营救",
    "file": "movie-1862.html",
    "cover": 62,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "列车, 阴谋, 限时",
    "year": "2024",
    "description": "一名前特种兵在早班列车上被神秘女子胁迫，必须在到站前找出藏匿的证人。"
  },
  {
    "title": "圣诞快乐颂",
    "file": "movie-1863.html",
    "cover": 63,
    "region": "英国",
    "category": "科幻悬疑",
    "tags": "节日合家欢，灵魂互换，阿卡贝拉",
    "year": "2022",
    "description": "一个刻薄的投行男与一个热情洋溢的教堂唱诗班指挥意外灵魂互换，必须在平安夜之前换回身体。"
  },
  {
    "title": "请问总统先生",
    "file": "movie-1864.html",
    "cover": 64,
    "region": "美国",
    "category": "精选视频",
    "tags": "政治斗争，采访，录音带，人性博弈，黑料",
    "year": "2025",
    "description": "退休总统准备出版回忆录洗白历史，却被一名犀利记者挖出了他当年掩盖在“伟大决策”下的私人录音带。"
  },
  {
    "title": "留住有情人",
    "file": "movie-1865.html",
    "cover": 65,
    "region": "中国香港",
    "category": "动作犯罪",
    "tags": "绝症, 守护, 唯美",
    "year": "1998",
    "description": "绝症女孩生命最后三个月，暗恋她多年的男孩决定用一场骗局让她笑着离开。"
  },
  {
    "title": "灵异人形馆",
    "file": "movie-1866.html",
    "cover": 66,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "人偶诅咒, 民俗怪谈, 密闭空间",
    "year": "2025",
    "description": "六个年轻人夜闯废弃人形馆挑战胆量，却发现人偶们的排列顺序每晚都在变化。"
  },
  {
    "title": "下水道的美人鱼",
    "file": "movie-1867.html",
    "cover": 67,
    "region": "日本",
    "category": "欧美热播",
    "tags": "身体恐怖, 污染寓言, 下水道, 画家",
    "year": "2024",
    "description": "失意画家在下水道发现一条美人鱼，她身上鳞片脱落处长出工业垃圾和肿瘤。"
  },
  {
    "title": "大力杀手波派",
    "file": "movie-1868.html",
    "cover": 68,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "反英雄，吃菠菜，黑色幽默，血腥",
    "year": "2021",
    "description": "吃了变异菠菜后，懦弱的水手变成力大无穷的疯狂杀手，向污染海洋的黑心企业复仇。"
  },
  {
    "title": "冲破樊笼走彩凤",
    "file": "movie-1869.html",
    "cover": 69,
    "region": "中国内地",
    "category": "高清电影",
    "tags": "女性，越狱，艺术",
    "year": "2028",
    "description": "一所女子监狱里，七个女囚用五年时间，在狱中绣出了一只冲破牢笼的彩凤。"
  },
  {
    "title": "失眠的北风吹来爱情",
    "file": "movie-1870.html",
    "cover": 70,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "失眠, 书信, 风, 城市漫游, 平行时空",
    "year": "2025",
    "description": "一个患有罕见“清醒梦”失眠症的男人，每晚梦到同一个女人，而那个女人竟真实存在于城市的另一端。"
  },
  {
    "title": "功夫梦：融合之道",
    "file": "movie-1871.html",
    "cover": 71,
    "region": "美国",
    "category": "精选视频",
    "tags": "武术哲学, 跨文化, 少年, 武道融合",
    "year": "2026",
    "description": "一个迷恋MMA的华裔少年，在爷爷的传统太极与父亲推崇的巴西柔术之间，打出自己的“融合之道”。"
  },
  {
    "title": "血观音",
    "file": "movie-1872.html",
    "cover": 72,
    "region": "中国台湾",
    "category": "精选视频",
    "tags": "棠府, 权色交易, 咒术",
    "year": "2017",
    "description": "棠家三代女性靠一手编织人脉、一手操控诅咒，在政商名流间游走，直到一颗子弹打碎了所有秘密。"
  },
  {
    "title": "惊声尖笑2",
    "file": "movie-1873.html",
    "cover": 73,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "恶搞，山寨，无厘头，血浆，解构",
    "year": "2006",
    "description": "一栋被诅咒的鬼屋里，六个作死青年用最蠢的方式对抗恶灵，却意外揭穿了小镇的邪教阴谋。"
  },
  {
    "title": "犬神家族1976",
    "file": "movie-1874.html",
    "cover": 74,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "豪门恩怨，遗产争夺，侦探推理，昭和经典",
    "year": "1976",
    "description": "犬神家族的族长死了，遗嘱宣读的那一刻，第一个死者出现了。"
  },
  {
    "title": "爱情的理解",
    "file": "movie-1875.html",
    "cover": 75,
    "region": "韩国",
    "category": "欧美热播",
    "tags": "办公室恋情， 现实向， 暧昧， 银行职员",
    "year": "2023",
    "description": "韩国一家银行支行的四名职员深陷四角恋，他们明明彼此深爱，却因为房子、贷款、职场晋升而把爱情谈成了一笔坏账。"
  },
  {
    "title": "黑色乌托邦",
    "file": "movie-1876.html",
    "cover": 76,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "城市治理, 数据监控, 舆论操控, 失踪档案, 体制迷局",
    "year": "2023",
    "description": "一座号称“最安全”的未来城市，靠全方位监控换来秩序，却在一连串失踪案后露出乌托邦的黑色裂缝。"
  },
  {
    "title": "超能灭赌师",
    "file": "movie-1877.html",
    "cover": 77,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "赌术, 超能力, 异能对决, 复仇",
    "year": "2023",
    "description": "在这个世界，赌术不再是千术，而是天生的超能力，而男主的能力是“百分百被抽老千”。"
  },
  {
    "title": "夜雾啊 今晚也要谢谢你",
    "file": "movie-1878.html",
    "cover": 78,
    "region": "日本",
    "category": "科幻悬疑",
    "tags": "居酒屋, 夜班, 陌生人, 小故事集锦, 城市孤独",
    "year": "2024",
    "description": "深夜十点开门的居酒屋，每位推门而入的客人都带着一个不敢对家人说的秘密。"
  },
  {
    "title": "盖世英雄方世玉",
    "file": "movie-1879.html",
    "cover": 79,
    "region": "中国",
    "category": "精选视频",
    "tags": "武侠, 少林, 热血, 搞笑, 民族",
    "year": "2025",
    "description": "新版方世玉从街头混混成长为少林英雄，用拳头和智慧对抗朝廷鹰犬与洋人侵略。"
  },
  {
    "title": "睡睡你的爱睡睡我的爱",
    "file": "movie-1880.html",
    "cover": 80,
    "region": "中国台湾",
    "category": "剧情佳作",
    "tags": "都市男女、一夜情、日久生情、轻喜剧",
    "year": "1994",
    "description": "一对因醉酒发生一夜情的冤家，第二天竟成了同一家公司的上下级。"
  },
  {
    "title": "横财三千万",
    "file": "movie-1881.html",
    "cover": 81,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "彩票黑帮, 港式无厘头, 小人物狂想曲, 阴差阳错, 群星贺岁",
    "year": "2025",
    "description": "清洁工阿婆中了三千万，但在领奖前被车撞晕，醒来时奖金已被四个互不相识的“家人”瓜分。"
  },
  {
    "title": "独角兽之死",
    "file": "movie-1882.html",
    "cover": 82,
    "region": "英国 / 美国",
    "category": "喜剧动画",
    "tags": "暗黑童话、灭绝、资本批判、生态环境",
    "year": "2027",
    "description": "一名生物学家在北极圈发现了地球上最后一只独角兽，而一家生物科技公司老板想提取它的角来制作长生不老药。"
  },
  {
    "title": "乡关何处",
    "file": "movie-1883.html",
    "cover": 83,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "返乡, 故乡, 城市化, 失语, 亲情",
    "year": "2015",
    "description": "在大城市打拼失败的中年男人回到阔别二十年的故乡，却发现故乡早已容不下他的身体和灵魂。"
  },
  {
    "title": "三剑客新传",
    "file": "movie-1884.html",
    "cover": 84,
    "region": "法国",
    "category": "精选视频",
    "tags": "侠盗, 女性力量, 热兵器",
    "year": "2023",
    "description": "当火枪手成为腐朽王权的象征，四位出身街头的“剑客”决定用火药改写法国。"
  },
  {
    "title": "第三次世界大战",
    "file": "movie-1885.html",
    "cover": 85,
    "region": "美国",
    "category": "高清电影",
    "tags": "近未来, 地缘政治, AI战争, 生存",
    "year": "2025",
    "description": "2062年，因南极冰盖下发现万能元素，中美俄在长城脚下爆发第三次世界大战，但战争只持续了72小时。"
  },
  {
    "title": "贞男艳姝",
    "file": "movie-1886.html",
    "cover": 86,
    "region": "中国台湾",
    "category": "精选视频",
    "tags": "古典, 禁忌, 情欲, 邵氏风, 悲剧",
    "year": "1988",
    "description": "一个守身如玉的书生与一个被卖入青楼的贞洁烈女，在花船上偷情却被双双浸猪笼。"
  },
  {
    "title": "射击",
    "file": "movie-1887.html",
    "cover": 87,
    "region": "美国",
    "category": "爱情青春",
    "tags": "狙击手, 反套路, 心理战, 密室",
    "year": "1999",
    "description": "五个互不相识的神枪手被关在一间全透明的玻璃密室中，只有最后一个活着的人才能拿到一亿美金。"
  },
  {
    "title": "摩登土佬",
    "file": "movie-1888.html",
    "cover": 88,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "城乡差异, 老派绅士, 网红文化, 祖孙情",
    "year": "2024",
    "description": "一个只穿长衫、坚持写信、连手机都不会用的乡下“土老头”，被孙子骗到香港参加时装周。"
  },
  {
    "title": "唯一的受害者",
    "file": "movie-1889.html",
    "cover": 89,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "推理，警察，心理",
    "year": "2010",
    "description": "连环杀人案唯一的幸存者醒来后失忆了，警察发现她既是受害者，也可能是帮凶。"
  },
  {
    "title": "喜欢你我也是 第三季",
    "file": "movie-1890.html",
    "cover": 90,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "律政, 破镜重圆, 办公室恋情, 治愈",
    "year": "2024",
    "description": "当红女律师与曾经抛弃她的前男友成为同一家律所的合伙人，两人针锋相对，却要联手打一场无罪辩护。"
  },
  {
    "title": "巨兽来袭3",
    "file": "movie-1891.html",
    "cover": 91,
    "region": "美国 / 澳大利亚",
    "category": "喜剧动画",
    "tags": "怪兽, 机甲, 全球危机, 最终章",
    "year": "2025",
    "description": "地表最强巨兽“克拉肯”登陆东京，人类最后的防线是一座可以行走的堡垒“泰坦号”。"
  },
  {
    "title": "绳套",
    "file": "movie-1892.html",
    "cover": 92,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "连环杀手，绳结，符号学，猫鼠游戏",
    "year": "2024",
    "description": "每起命案现场都留下一个用特殊绳结绑成的绳套，刑警发现，绳结是凶手在教她如何破案。"
  },
  {
    "title": "到爱的距离",
    "file": "movie-1893.html",
    "cover": 93,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "急诊室风云, 医患暗流, 中年离异, 制度与人",
    "year": "2024",
    "description": "一家三甲医院的急诊科主任与前妻（新任院办主任）因一条“急诊限号”改革令，被逼到公私决裂的边缘。"
  },
  {
    "title": "黑色蜂群",
    "file": "movie-1894.html",
    "cover": 94,
    "region": "美国 / 加拿大",
    "category": "喜剧动画",
    "tags": "纳米科技, 失控, 蜂群思维, 末日求生, AI觉醒",
    "year": "2023",
    "description": "一种用于农作物授粉的微型纳米无人机“蜂群”，突变成拥有集体意识的致命杀手。"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 清洁工第一季 谢谢，晚安：邦·乔维故事 野性姑娘 老友餐厅 娱乐至上 水长流 月影特工 我来自北京之福从天降 寻找矮人族 魔术缉凶 夜间来客 当我64岁 失去的爱情 妙香悲曲 绑架地球人 傻妹闯七关 苏联巴士站 曼谷少年 乙未之台岛遗恨 分裂的灵魂",
    "file": "movie-1895.html",
    "cover": 95,
    "region": "根据片名判断",
    "category": "动作犯罪",
    "tags": "根据片名判断",
    "year": "根据片名判断",
    "description": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）"
  },
  {
    "title": "爱重启",
    "file": "movie-1896.html",
    "cover": 96,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "时间循环, 婚姻危机, 治愈",
    "year": "2023",
    "description": "离婚前夕，丈夫意外获得重启一天的能力，他试图通过不断修正过去来挽回妻子。"
  },
  {
    "title": "天体艳舞团",
    "file": "movie-1897.html",
    "cover": 97,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "中年危机、脱衣舞男、逆袭、真实事件",
    "year": "2002",
    "description": "一群被辞退的中年钢铁工人，为了养活家庭组成了史上最辣眼睛的脱衣舞男团。"
  },
  {
    "title": "宝贝公主",
    "file": "movie-1898.html",
    "cover": 98,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "身份互换, 豪门虐恋, 甜宠轻喜, 打脸爽剧",
    "year": "2023",
    "description": "外卖女孩被错认成财团流落在外的千金，而真千金正在她家里送外卖。"
  },
  {
    "title": "亲切的警察",
    "file": "movie-1899.html",
    "cover": 99,
    "region": "韩国",
    "category": "爱情青春",
    "tags": "微笑杀手, 扫黑除恶, 反差萌, 基层警察",
    "year": "2026",
    "description": "韩国某小镇上，一个对所有居民都笑眯眯的派出所警察，其实是全国排名前三的顶级杀手。"
  },
  {
    "title": "成龙历险记第二季",
    "file": "movie-1900.html",
    "cover": 100,
    "region": "美国 / 中国大陆",
    "category": "精选视频",
    "tags": "功夫, 魔法, 搞笑, 团队作战",
    "year": "2025",
    "description": "老爹偶然打开了通往北欧神话的钥匙，成龙误将洛基的谎言种子带回了旧金山古董店。"
  },
  {
    "title": "三只猴子",
    "file": "movie-1901.html",
    "cover": 101,
    "region": "土耳其",
    "category": "科幻悬疑",
    "tags": "家庭伦理, 替罪, 压抑, 戛纳, 谎言",
    "year": "2008",
    "description": "父亲为老板顶罪入狱，儿子却与母亲的情人共处一室，一个家庭“不看、不听、不说”的崩塌。"
  },
  {
    "title": "笑匠",
    "file": "movie-1902.html",
    "cover": 102,
    "region": "香港",
    "category": "欧美热播",
    "tags": "许冠文、舞台、悲喜剧、小人物",
    "year": "1984",
    "description": "一个过气的喜剧演员试图重返舞台，却发现最大的笑话，是他自己的人生。"
  },
  {
    "title": "忍者神龟2",
    "file": "movie-1903.html",
    "cover": 103,
    "region": "美国",
    "category": "精选视频",
    "tags": "超级英雄, 变异, 纽约, 施莱德回归, 朗格",
    "year": "2027",
    "description": "四位忍者龟兄弟面对来自X空间的乌贼外星人朗格，而老对手施莱德竟成为了他们唯一的临时盟友。"
  },
  {
    "title": "熊熊要结婚",
    "file": "movie-1904.html",
    "cover": 104,
    "region": "日本",
    "category": "动作犯罪",
    "tags": "人熊恋， 乡村婚俗， 童话质感",
    "year": "2026",
    "description": "山里的一头棕熊突然开口说话，点名要嫁给村里最平凡的女图书管理员。"
  },
  {
    "title": "老千：神之手",
    "file": "movie-1905.html",
    "cover": 105,
    "region": "韩国",
    "category": "喜剧动画",
    "tags": "赌博, 千术, 师徒, 复仇",
    "year": "2025",
    "description": "亚洲第一老千“神之手”隐退三年后被仇家找到，对方绑架他女儿，要求他赌一场必输的牌局。"
  },
  {
    "title": "危险人物1999",
    "file": "movie-1906.html",
    "cover": 106,
    "region": "美国",
    "category": "爱情青春",
    "tags": "黑帮追杀, 双面身份, 旧案重启, 街头火拼, 背叛, 反英雄",
    "year": "1999",
    "description": "一场本以为已经封存的黑帮旧案，在1999年的街头突然重启，而那个最危险的人恰好是唯一知道真相的幸存者。"
  },
  {
    "title": "爱情应该有的样子",
    "file": "movie-1907.html",
    "cover": 107,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "姐弟恋, 重逢, 治愈, 职场女性",
    "year": "2022",
    "description": "三十二岁的职场精英遇见了十二岁时暗恋过的那个男孩，他依然记得她所有的习惯。"
  },
  {
    "title": "特种使命之绿色军团",
    "file": "movie-1908.html",
    "cover": 108,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "特种兵, 丛林战, 环保, 热血, 团队",
    "year": "2024",
    "description": "一支中国特种小队深入亚马逊，任务是抓捕跨国伐木集团头目。"
  },
  {
    "title": "玩命飓风",
    "file": "movie-1909.html",
    "cover": 109,
    "region": "美国",
    "category": "欧美热播",
    "tags": "飓风, 劫案, 极限逃生",
    "year": "2025",
    "description": "一股超级飓风袭击迈阿密，一伙劫匪趁机抢劫联邦储备金库，而被困城中的前冲浪手成了唯一的阻碍。"
  },
  {
    "title": "珍贵影像",
    "file": "movie-1910.html",
    "cover": 110,
    "region": "波兰",
    "category": "爱情青春",
    "tags": "集中营，胶片，真相，记者",
    "year": "2023",
    "description": "修复师在一卷70年前的度假胶片中发现几帧异常画面，揭开一个家庭掩盖的纳粹帮凶史。"
  },
  {
    "title": "史丹利的便当盒",
    "file": "movie-1911.html",
    "cover": 111,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "父子关系, 午餐盒, 小镇夏天, 自我和解, 温柔喜剧",
    "year": "2018",
    "description": "一只被装满又被遗忘的便当盒，意外把一个沉默的中年父亲和他疏远多年的儿子带上了穿越三州公路的旅程，也把他们一路逃开的旧伤一格格打开。"
  },
  {
    "title": "德里六号",
    "file": "movie-1912.html",
    "cover": 112,
    "region": "印度",
    "category": "高清电影",
    "tags": "旧德里, 连环杀手, 宗教, 政治, 种姓",
    "year": "2019",
    "description": "德里老城区六个月内六起连环杀人案，所有受害者都叫“拉姆”，而且都来自不同种姓。"
  },
  {
    "title": "玛丽肯·范·尼梅根",
    "file": "movie-1913.html",
    "cover": 113,
    "region": "荷兰",
    "category": "动作犯罪",
    "tags": "荷兰, 艺术, 名画, 失踪, 双胞胎",
    "year": "2024",
    "description": "荷兰名画《玛丽肯·范·尼梅根》在展览前夜失窃，而画中那个三百年前的女孩，出现在了调查员的手机相册里。"
  },
  {
    "title": "爱丽丝的失踪",
    "file": "movie-1914.html",
    "cover": 114,
    "region": "法国 / 比利时",
    "category": "爱情青春",
    "tags": "多视角, 罗生门, 女性复仇, 社会隐喻",
    "year": "2024",
    "description": "八岁女孩爱丽丝在放学路上失踪，三个目击者的证词拼出了三个完全不同的“真相”。"
  },
  {
    "title": "拯救世界的男人",
    "file": "movie-1915.html",
    "cover": 115,
    "region": "美国",
    "category": "欧美热播",
    "tags": "孤胆英雄、末日危机、时间循环、硬汉柔情",
    "year": "2024",
    "description": "一个被全球通缉的前特工发现，拯救世界的唯一办法是杀死自己。"
  },
  {
    "title": "让我们都去大厅",
    "file": "movie-1916.html",
    "cover": 116,
    "region": "法国",
    "category": "精选视频",
    "tags": "公寓, 居民会议, 群像, 社会讽刺",
    "year": "1974",
    "description": "一栋巴黎公寓的居民会议，从漏水吵到革命，最后烧了整个大厅。"
  },
  {
    "title": "小白兔",
    "file": "movie-1917.html",
    "cover": 117,
    "region": "韩国",
    "category": "精选视频",
    "tags": "网络陷阱，少女，犯罪组织，反转，社会写实",
    "year": "2021",
    "description": "一名17岁少女在“兔子洞”聊天室化名“小白兔”寻找失踪的闺蜜，却发现自己成了跨国犯罪组织的猎物。"
  },
  {
    "title": "一柱擎天",
    "file": "movie-1918.html",
    "cover": 118,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "穿越, 神话, 捉鬼, 无厘头",
    "year": "1992",
    "description": "现代混混穿越回古代变成“擎天柱”，用法术和现代知识在乱世中搞怪封神。"
  },
  {
    "title": "摩纳哥女孩",
    "file": "movie-1919.html",
    "cover": 119,
    "region": "法国 / 摩纳哥",
    "category": "动作犯罪",
    "tags": "名媛, 赛道, 珠宝, 家族, 身份",
    "year": "2024",
    "description": "她出生在全世界最耀眼的海岸线上，却要在豪门、赛道和媒体镜头之间，找到自己不靠姓氏也能发光的名字。"
  },
  {
    "title": "拉巴斯浮世绘",
    "file": "movie-1920.html",
    "cover": 120,
    "region": "玻利维亚",
    "category": "欧美热播",
    "tags": "南美风情, 多线叙事, 魔幻现实",
    "year": "2019",
    "description": "在玻利维亚的行政首都拉巴斯，一位女巫、一名窃贼和一位美国外交官的命运在一辆爆胎的缆车上交汇。"
  },
  {
    "title": "爱上笨男人",
    "file": "movie-1921.html",
    "cover": 121,
    "region": "中国台湾",
    "category": "欧美热播",
    "tags": "欢喜冤家，反差萌，职场恋爱，治愈",
    "year": "2025",
    "description": "高智商女律师被迫与一个连取钱都不会的“生活白痴”同居，却发现他是隐藏的 AI 天才。"
  },
  {
    "title": "白牙",
    "file": "movie-1922.html",
    "cover": 122,
    "region": "美国 / 加拿大",
    "category": "高清电影",
    "tags": "动物，杰克·伦敦，生存，成长，温情",
    "year": "2018",
    "description": "一只有四分之一狼血统的混血犬“白牙”，在荒野与文明之间几度易主，历经残酷与温柔，最终找到了真正的归宿。"
  },
  {
    "title": "电影奇谈",
    "file": "movie-1923.html",
    "cover": 123,
    "region": "法国",
    "category": "精选视频",
    "tags": "迷影，穿越，影史，温情",
    "year": "2017",
    "description": "一个失意的中年编剧意外进入一部老电影中，与片中角色一起改写剧本，也改写了自己的人生。"
  },
  {
    "title": "七夜客栈",
    "file": "movie-1924.html",
    "cover": 124,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "连环命案, 轮回夜宿, 民间传说, 身份秘密, 群像推理",
    "year": "2017",
    "description": "一家只在子夜开门的山中客栈，每住满七夜就会死去一名住客，而唯一能破局的人竟是新来的哑巴账房。"
  },
  {
    "title": "铁十字勋章",
    "file": "movie-1925.html",
    "cover": 125,
    "region": "德国/美国",
    "category": "剧情佳作",
    "tags": "二战，东线战场，德军视角，荣誉与人性，肮脏英雄",
    "year": "1977",
    "description": "一名厌恶纳粹的德国老兵想活命，而他的狂热上司却想拿铁十字勋章。"
  },
  {
    "title": "每个人都喜欢有人",
    "file": "movie-1926.html",
    "cover": 126,
    "region": "西班牙",
    "category": "精选视频",
    "tags": "孤独, 大叔, 少男, 陪伴, 文艺",
    "year": "2023",
    "description": "一个失去一切的老年绅士，与一个被家人抛弃的街头少年，互相成为对方的“有人”。"
  },
  {
    "title": "交响狂人",
    "file": "movie-1927.html",
    "cover": 127,
    "region": "德国",
    "category": "精选视频",
    "tags": "古典乐, 天才, 偏执狂, 师徒",
    "year": "2025",
    "description": "柏林爱乐最年轻的指挥家，在一次演出中突然失聪，他选择不告诉任何人，靠读唇语撑完整个乐季。"
  },
  {
    "title": "法律与秩序第二十二季",
    "file": "movie-1928.html",
    "cover": 128,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "长寿剧, 单元剧, 庭审现场, 社会议题",
    "year": "2024",
    "description": "第二十二季，纽约的警察和检察官依然在灰色地带寻找着那个叫做“正义”的东西。"
  },
  {
    "title": "魂断花园中",
    "file": "movie-1929.html",
    "cover": 129,
    "region": "法国",
    "category": "爱情青春",
    "tags": "庄园、遗产、植物、毒杀",
    "year": "2024",
    "description": "一座与世隔绝的花园里，每株植物都对应一个家族成员的寿命，而园丁正在给所有人浇水。"
  },
  {
    "title": "月读君的禁忌夜宵",
    "file": "movie-1930.html",
    "cover": 130,
    "region": "日本",
    "category": "爱情青春",
    "tags": "漫改, 深夜食堂, 吸血鬼, 禁欲系, 甜剧",
    "year": "2023",
    "description": "活了千年的吸血鬼月读君，开了一间深夜食堂，只邀请“灵魂美味”的客人，直到遇到一个血型难吃的女高中。"
  },
  {
    "title": "金钱窒爱",
    "file": "movie-1931.html",
    "cover": 131,
    "region": "美国",
    "category": "爱情青春",
    "tags": "富豪家族, 资本游戏, 父权崩塌",
    "year": "2025",
    "description": "患有绝症的亿万富翁父亲召集三个子女，告诉他们谁能一个月内花光10亿美金，谁就是继承人。"
  },
  {
    "title": "墨西哥匪帮",
    "file": "movie-1932.html",
    "cover": 132,
    "region": "墨西哥 / 美国",
    "category": "精选视频",
    "tags": "墨西哥匪帮, 毒品战争, 双雄对决",
    "year": "2022",
    "description": "一个被迫加入匪帮的化学老师，三个月内成了全墨西哥最想杀的人。"
  },
  {
    "title": "石纪元第三季",
    "file": "movie-1933.html",
    "cover": 133,
    "region": "日本",
    "category": "精选视频",
    "tags": "科学，文明重建，石化解谜，智斗，热血",
    "year": "2023",
    "description": "千空团抵达石化光线发射地“月面都市”，却发现那里并非外星人基地，而是公元前的某个超古文明。"
  },
  {
    "title": "武士兰士诺",
    "file": "movie-1934.html",
    "cover": 134,
    "region": "英国",
    "category": "喜剧动画",
    "tags": "亚瑟王传说、圆桌骑士、骑士精神、爱情悲剧",
    "year": "2025",
    "description": "没有魔法的亚瑟王世界，兰士诺作为第一武士，在忠诚于国王与深爱王后之间痛苦挣扎。"
  },
  {
    "title": "精灵粤语",
    "file": "movie-1935.html",
    "cover": 135,
    "region": "中国香港",
    "category": "剧情佳作",
    "tags": "粤语, 精灵, 语言消失, 文化保卫",
    "year": "2023",
    "description": "香港女孩发现身边有一个以“粤语俚语”为食的精灵，而粤语正在被人遗忘。"
  },
  {
    "title": "爱的命运",
    "file": "movie-1936.html",
    "cover": 136,
    "region": "意大利",
    "category": "科幻悬疑",
    "tags": "轮回, 宿命, 唯美, 催泪",
    "year": "2024",
    "description": "一对恋人在每一次轮回中都注定相爱，也注定被同一辆马车撞死，而这一次，女主角决定提前去撞那辆马车。"
  },
  {
    "title": "军人的妻子",
    "file": "movie-1937.html",
    "cover": 137,
    "region": "英国",
    "category": "欧美热播",
    "tags": "女性群像、军嫂、后方战场、人性、情感纠葛",
    "year": "2024",
    "description": "丈夫在阿富汗阵亡后，三个军嫂在整理遗物时发现他们四人间互相交换了伴侣的秘密。"
  },
  {
    "title": "英国佬",
    "file": "movie-1938.html",
    "cover": 138,
    "region": "英国",
    "category": "喜剧动画",
    "tags": "黑色幽默, 绅士, 黑帮, 反转",
    "year": "2023",
    "description": "一个恪守礼仪的伦敦绅士，被迫用自己的“英式规矩”来接管一个混乱的黑帮。"
  },
  {
    "title": "丛林精神",
    "file": "movie-1939.html",
    "cover": 139,
    "region": "巴西 / 美国",
    "category": "剧情佳作",
    "tags": "亚马逊神话、图腾觉醒、环保寓言、少女成长、南美画风",
    "year": "2025",
    "description": "亚马逊部落最后一个能听见“丛林低语”的女孩，必须唤醒沉睡的图腾巨兽来对抗森林砍伐。"
  },
  {
    "title": "真人快打：重生",
    "file": "movie-1940.html",
    "cover": 140,
    "region": "美国",
    "category": "爱情青春",
    "tags": "游戏改编, 血腥格斗, 异世界",
    "year": "2025",
    "description": "被处决的战士刘皓在死亡擂台复活，他必须赢得十连胜才能回到地球拯救女儿。"
  },
  {
    "title": "玩美女人",
    "file": "movie-1941.html",
    "cover": 141,
    "region": "西班牙",
    "category": "高清电影",
    "tags": "整容, 悬疑, 复仇, 心理扭曲, 身体恐怖",
    "year": "2024",
    "description": "为了夺回出轨丈夫的心，中年主妇接受了一场完美整容手术，却发现自己变成了丈夫情人的模样。"
  },
  {
    "title": "客从何处来",
    "file": "movie-1942.html",
    "cover": 142,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "寻根, 家族史, 口述历史, 温情",
    "year": "2024",
    "description": "五位来自不同城市的普通人，带着一张老照片或一封家书，踏上了寻找祖辈足迹的漫长公路。"
  },
  {
    "title": "梦幻洋娃娃",
    "file": "movie-1943.html",
    "cover": 143,
    "region": "西班牙",
    "category": "爱情青春",
    "tags": "玩偶诅咒, 梦境入侵, 儿童心理, 暗黑童话",
    "year": "2025",
    "description": "小女孩得到一个能让人做美梦的洋娃娃，代价是每做一次美梦，现实中就会有一个亲人消失。"
  },
  {
    "title": "再领风骚",
    "file": "movie-1944.html",
    "cover": 144,
    "region": "美国",
    "category": "高清电影",
    "tags": "返校重聚, 过气风云人物, 代际反差",
    "year": "2025",
    "description": "1995届高中“最酷女王”凯伦在25周年返校日发现，如今学校里最受欢迎的是当年她欺负过的书呆子的女儿。"
  },
  {
    "title": "两个夏天 第一季",
    "file": "movie-1945.html",
    "cover": 145,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "双线叙事, 成长, 友情, 家庭, 校园",
    "year": "2024",
    "description": "两个不同时空的夏天同时展开，一个属于高考前夜，一个属于十年后的重逢，所有未说出口的话都在季风里回响。"
  },
  {
    "title": "少共国际师",
    "file": "movie-1946.html",
    "cover": 146,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "红军, 青少年, 成长, 反围剿, 热血",
    "year": "2021",
    "description": "一群平均年龄不到18岁的少年，在血与火的洗礼中，组成了红军最年轻的王牌部队。"
  },
  {
    "title": "追魂伞",
    "file": "movie-1947.html",
    "cover": 147,
    "region": "中国香港 / 台湾",
    "category": "科幻悬疑",
    "tags": "油纸伞, 降头, 民国, 复仇, 纸人",
    "year": "1999",
    "description": "民国年间，一把能封印厉鬼的油纸伞流落民间，撑开它的人都会在七日内被伞中冤魂索命。"
  },
  {
    "title": "三个少年第三季",
    "file": "movie-1948.html",
    "cover": 148,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "三人组，爆笑日常，高三倒计时",
    "year": "2025",
    "description": "高考前一百天，三个成绩垫底的高三死党意外获得一台能预知未来五分钟的破旧相机，于是开始了疯狂又荒诞的“抢分”大作战。"
  },
  {
    "title": "唐山截拳道",
    "file": "movie-1949.html",
    "cover": 149,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "李小龙， 武术， 传承， 励志",
    "year": "2024",
    "description": "一个唐山武术迷弟，为了证明李小龙的截拳道不是花架子，单枪匹马挑战各路传统武术高手。"
  },
  {
    "title": "权力游戏：最后的守望",
    "file": "movie-1950.html",
    "cover": 150,
    "region": "美国",
    "category": "精选视频",
    "tags": "史诗, 终结篇, 人性",
    "year": "2026",
    "description": "铁王座被毁十年后，北境长城外传来比异鬼更古老的低语。"
  },
  {
    "title": "火车上的女士",
    "file": "movie-1951.html",
    "cover": 1,
    "region": "法国",
    "category": "高清电影",
    "tags": "火车，目击证人，记忆，悬案，女性",
    "year": "2025",
    "description": "她每天在同一列火车上看到同一个女人被家暴，直到有一天那个女人消失了。"
  },
  {
    "title": "路德灵异侦探社",
    "file": "movie-1952.html",
    "cover": 2,
    "region": "英国",
    "category": "动作犯罪",
    "tags": "灵异, 侦探, 伦敦, 超自然, 搭档",
    "year": "2024",
    "description": "伦敦唯一承认灵异现象的侦探社，专门处理“无法解释”的死亡事件，每个案子都通向同一个诅咒。"
  },
  {
    "title": "旋转门",
    "file": "movie-1953.html",
    "cover": 3,
    "region": "中国香港",
    "category": "爱情青春",
    "tags": "无限循环, 蝴蝶效应, 港式警匪",
    "year": "2024",
    "description": "警方进入一栋大楼解救线人，却发现门后的时间永远停留在枪响前的一分钟。"
  },
  {
    "title": "饮料超人",
    "file": "movie-1954.html",
    "cover": 4,
    "region": "中国台湾",
    "category": "动作犯罪",
    "tags": "超能力，职场，减压",
    "year": "2016",
    "description": "一个加班狗喝了公司新研发的“超能饮料”后获得超能力，但要消耗寿命。他用这份力量把整栋写字楼炸了。"
  },
  {
    "title": "正常人",
    "file": "movie-1955.html",
    "cover": 5,
    "region": "爱尔兰 / 英国",
    "category": "剧情佳作",
    "tags": "萨莉·鲁尼, 原生家庭, 爱情与权力, 爱尔兰, 细腻",
    "year": "2020",
    "description": "爱尔兰小镇的优等生玛丽安与同学康奈尔秘密恋爱，两人在高中到大学的拉锯中，不断追问：什么是“正常”？"
  },
  {
    "title": "飞鹰艾迪",
    "file": "movie-1956.html",
    "cover": 6,
    "region": "英国 / 美国",
    "category": "欧美热播",
    "tags": "冬奥会, 跳台滑雪, 草根逆袭, 英式幽默, 梦想",
    "year": "2026",
    "description": "戴着眼镜、从未受过专业训练的英国水管工“飞鹰”艾迪，以一腔热血挑战70米跳台滑雪，震惊世界。"
  },
  {
    "title": "城市猎人",
    "file": "movie-1957.html",
    "cover": 7,
    "region": "日本",
    "category": "精选视频",
    "tags": "私家侦探、新宿、犯罪都市、搭档",
    "year": "2023",
    "description": "新宿最色又最强的私家侦探冴羽獠，保护一名女歌手时发现仇家是前搭档。"
  },
  {
    "title": "玩命街头",
    "file": "movie-1958.html",
    "cover": 8,
    "region": "香港",
    "category": "爱情青春",
    "tags": "飙车，卧底，兄弟情",
    "year": "1998",
    "description": "卧底交警阿迪混入地下飙车党，却发现目标车手是自己失散多年的亲弟弟，而弟弟正要为父亲报仇。"
  },
  {
    "title": "律政英雄新电影版粤语",
    "file": "movie-1959.html",
    "cover": 9,
    "region": "中国香港",
    "category": "欧美热播",
    "tags": "法庭, 正义, 律师, 翻案, 粤语",
    "year": "2023",
    "description": "退休律师重出江湖，为一桩二十年前的冤案翻供，却发现真凶是现在的警务处长。"
  },
  {
    "title": "燃烧的勇士",
    "file": "movie-1960.html",
    "cover": 10,
    "region": "韩国",
    "category": "喜剧动画",
    "tags": "古代战争，火攻，兄弟情，牺牲",
    "year": "2024",
    "description": "朝鲜王朝末年，一支被朝廷抛弃的火炮部队，决定用自己的方式“归还”敌人的炮弹。"
  },
  {
    "title": "最强囍事粤语",
    "file": "movie-1961.html",
    "cover": 11,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "港式喜剧，婚礼，乌龙，明星客串",
    "year": "2024",
    "description": "一场全港瞩目的世纪婚礼，新人、宾客、工作人员却各怀鬼胎，把婚礼现场变成了大型修罗场。"
  },
  {
    "title": "走出非洲",
    "file": "movie-1962.html",
    "cover": 12,
    "region": "英国 / 美国",
    "category": "科幻悬疑",
    "tags": "非洲、庄园、独立女性、自由、经典翻拍",
    "year": "2025",
    "description": "翻拍自1985年奥斯卡经典，丹麦女作家在肯尼亚的经历让她失去了爱情，却找到了自己。"
  },
  {
    "title": "永不言弃",
    "file": "movie-1963.html",
    "cover": 13,
    "region": "中国大陆",
    "category": "欧美热播",
    "tags": "马拉松, 残障人士, 父子和解, 热血, 逆袭",
    "year": "2026",
    "description": "一场车祸夺去他的双腿，也毁掉了父子关系，直到他在轮椅上发现了父亲的马拉松旧照片。"
  },
  {
    "title": "摩登原始人：圣诞礼赞",
    "file": "movie-1964.html",
    "cover": 14,
    "region": "美国",
    "category": "科幻悬疑",
    "tags": "圣诞, 石器时代, 穿越, 节日",
    "year": "2020",
    "description": "摩登原始人一家在圣诞夜意外被传送到未来纽约，必须用石器时代的方式拯救被黑掉的圣诞节。"
  },
  {
    "title": "少年歌行真人版",
    "file": "movie-1965.html",
    "cover": 15,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "少年热血, 江湖, 黄金棺材, 雪落山庄, 群像",
    "year": "2022",
    "description": "初出茅庐的雷无桀误入雪落山庄，欠下巨债，被迫和客栈老板萧瑟一起护送一口神秘的黄金棺材。"
  },
  {
    "title": "最后的面具",
    "file": "movie-1966.html",
    "cover": 16,
    "region": "法国 / 意大利",
    "category": "爱情青春",
    "tags": "威尼斯狂欢节, 身份互换, 遗产谜局, 古典美学",
    "year": "2019",
    "description": "威尼斯狂欢节最后一天，一名落魄贵族发现死去多年的父亲可能以另一张面具的身份，仍活在城中。"
  },
  {
    "title": "荼靡",
    "file": "movie-1967.html",
    "cover": 17,
    "region": "中国台湾",
    "category": "科幻悬疑",
    "tags": "平行时空， 选择焦虑， 婚姻围城， 女性成长",
    "year": "2024",
    "description": "方案A里她是为家庭放弃事业的绝望主妇，方案B里她是为事业堕胎的女强人，两个她都后悔了。"
  },
  {
    "title": "美洲艳后",
    "file": "movie-1968.html",
    "cover": 18,
    "region": "美国 / 墨西哥",
    "category": "欧美热播",
    "tags": "玛雅文明, 女性领袖, 殖民抗争, 史诗",
    "year": "2025",
    "description": "16世纪，一位玛雅女祭司在丈夫被西班牙征服者杀害后，带领丛林部落发起了一场看似不可能的圣战。"
  },
  {
    "title": "风流家族",
    "file": "movie-1969.html",
    "cover": 19,
    "region": "中国香港",
    "category": "精选视频",
    "tags": "豪门, 争产, 荒诞, 温情, 港式幽默",
    "year": "2025",
    "description": "富豪老爸假死测试儿女真心，不料假葬礼变成了真闹剧，全家上演全武行。"
  },
  {
    "title": "一车四仆",
    "file": "movie-1970.html",
    "cover": 20,
    "region": "中国大陆",
    "category": "动作犯罪",
    "tags": "拼车，创业，都市喜剧，草根，友情",
    "year": "2019",
    "description": "四个素不相识的普通人合伙买了一辆二手车，约定轮流使用，结果这辆车像多米诺骨牌一样，把他们四个人的生活彻底搅在一起。"
  },
  {
    "title": "拜托了！别宠我第四季",
    "file": "movie-1971.html",
    "cover": 21,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "霸道王爷、反套路、女频爽剧、真香定律",
    "year": "2024",
    "description": "穿书女配以为自己拿到了反派剧本，结果王爷把每个虐她桥段都改成了甜宠。"
  },
  {
    "title": "暖",
    "file": "movie-1972.html",
    "cover": 22,
    "region": "中国大陆",
    "category": "剧情佳作",
    "tags": "养老，阿尔茨海默症，亲情，催泪，治愈",
    "year": "2025",
    "description": "患有阿尔茨海默症的母亲每天忘掉女儿，却坚持为“陌生人”包最喜欢的饺子。"
  },
  {
    "title": "走钢索的人",
    "file": "movie-1973.html",
    "cover": 23,
    "region": "法国",
    "category": "科幻悬疑",
    "tags": "高空, 极限, 理想主义, 诗意",
    "year": "2024",
    "description": "法国杂技艺人菲利普，在没有任何保护的情况下，走钢丝穿越巴黎圣母院两座塔楼。"
  },
  {
    "title": "七星的昴星团",
    "file": "movie-1974.html",
    "cover": 24,
    "region": "日本",
    "category": "喜剧动画",
    "tags": "VRMMO, 团灭, 轮回, 友情",
    "year": "2018",
    "description": "六年前，七名好友在热门VR游戏中被团灭，现实中一人死亡；六年后，存活下来的六人收到了来自“亡者”的游戏复活邀请。"
  },
  {
    "title": "美丽·错误",
    "file": "movie-1975.html",
    "cover": 25,
    "region": "中国台湾",
    "category": "喜剧动画",
    "tags": "代孕争议, 错位母女, 谅解",
    "year": "2025",
    "description": "一位传统母亲代孕生下的女儿，二十年后爱上了母亲的亲生儿子，揭开了一个家庭缠绕三代人的“美丽错误”。"
  },
  {
    "title": "哈拉上路",
    "file": "movie-1976.html",
    "cover": 26,
    "region": "美国",
    "category": "喜剧动画",
    "tags": "公路喜剧, 乌龙事件, 旧爱重逢, 婚前焦虑",
    "year": "2023",
    "description": "婚礼前三天，新娘被迫和毒舌前男友拼车横穿美国。"
  },
  {
    "title": "新警事",
    "file": "movie-1977.html",
    "cover": 27,
    "region": "中国",
    "category": "精选视频",
    "tags": "单元剧, 写实, 重案, 基层警察",
    "year": "2010",
    "description": "一个刑警队里的“刺头”与一个只信书本的理论派，组成了最不靠谱但也最靠谱的搭档。"
  },
  {
    "title": "祖屋",
    "file": "movie-1978.html",
    "cover": 28,
    "region": "马来西亚",
    "category": "科幻悬疑",
    "tags": "拆迁, 南洋, 三代人, 团圆饭, 二战",
    "year": "2019",
    "description": "吉隆坡最后的华人祖屋面临强拆，分散全球的子孙收到一封“最后一场团圆饭”的邀请。"
  },
  {
    "title": "迪斯科舞星",
    "file": "movie-1979.html",
    "cover": 29,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "迪斯科, 复古, 梦想, 舞蹈",
    "year": "1978",
    "description": "小镇舞王闯入纽约迪斯科大赛，发现评委就是当年抛弃他的父亲。"
  },
  {
    "title": "地平线",
    "file": "movie-1980.html",
    "cover": 30,
    "region": "美国",
    "category": "动作犯罪",
    "tags": "末世, 地下城, 地平线, 未知, 探索",
    "year": "2024",
    "description": "人类生活在永远看不到地平线的地下城市里，直到一个女孩爬上了地表，发现地平线是一道被所有人遗忘的巨大谎言。"
  },
  {
    "title": "我唾弃你的坟墓：复仇在我",
    "file": "movie-1981.html",
    "cover": 31,
    "region": "美国",
    "category": "剧情佳作",
    "tags": "强奸复仇, 血腥, 女性",
    "year": "2015",
    "description": "十年前被轮奸的哑女作家回归小镇，用她小说里的“四十种酷刑”逐章虐杀施暴者。"
  },
  {
    "title": "花花世界青春梦",
    "file": "movie-1982.html",
    "cover": 32,
    "region": "中国大陆",
    "category": "高清电影",
    "tags": "毕业, 成长, 城市梦, 友情",
    "year": "2024",
    "description": "三个小城青年在花花都市合租，发誓一年内实现各自的“白日梦”。"
  },
  {
    "title": "摩苏尔",
    "file": "movie-1983.html",
    "cover": 33,
    "region": "伊拉克",
    "category": "欧美热播",
    "tags": "反恐, 巷战, 真实改编",
    "year": "2024",
    "description": "2017年，摩苏尔老城，10个不同派别的警察，为了活着回去见到家人，组成了最后一支敢死队。"
  },
  {
    "title": "澳洲乱世情",
    "file": "movie-1984.html",
    "cover": 34,
    "region": "澳大利亚",
    "category": "科幻悬疑",
    "tags": "澳大利亚, 二战, 牧场, 原住民, 史诗级",
    "year": "2024",
    "description": "英国贵族小姐继承澳洲牧场后，与一个放牧的“野种”共同对抗日军轰炸。"
  },
  {
    "title": "失落的一群",
    "file": "movie-1985.html",
    "cover": 35,
    "region": "中国大陆",
    "category": "精选视频",
    "tags": "荒野求生, 集体失散, 记忆迷途, 人性选择, 旅途寓言",
    "year": "1993",
    "description": "一支临时拼凑的考察队在沙漠里走散后，发现真正的“失落”不是迷路，而是每个人都在逃避自己的人生。"
  },
  {
    "title": "西部小霸天",
    "file": "movie-1986.html",
    "cover": 36,
    "region": "美国",
    "category": "欧美热播",
    "tags": "少年, 枪手, 复仇, 荒诞",
    "year": "2018",
    "description": "11岁的神枪手小鬼头为父报仇，却发现自己要杀的人是个好人，于是决定绑架他一起去抢银行。"
  },
  {
    "title": "霹雳战冥曲",
    "file": "movie-1987.html",
    "cover": 37,
    "region": "中国台湾",
    "category": "精选视频",
    "tags": "霹雳布袋戏, 战冥, 玄幻, 人魔",
    "year": "2022",
    "description": "当六蚀神祸侵蚀苦境，一对宿敌刀剑客不得不联手，以两人的性命为弦，拉响对抗末日的最强战冥曲。"
  },
  {
    "title": "跨越栅栏",
    "file": "movie-1988.html",
    "cover": 38,
    "region": "美国",
    "category": "欧美热播",
    "tags": "边境走私,无证生命,边界制度,父权秘密,真相直播",
    "year": "2022",
    "description": "一名出狱青年沿着童年失踪之夜的旧栅栏追凶，不是为了报复，而是为了让所有被制度改名的生命重新拥有原名和证词。"
  },
  {
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 小猪佩奇第一季 超级女英雄 空中浩劫第十六季 飞天怪侠 战略阴谋：终极猎杀 寂静的夜 突变怪婴3 勇者大冒险番外篇 老鼠逗猫 罗伦佐的油 通灵王2021 理发店 固执的爱 鬼哭神嚎7 爵士风情 贝茨汽车旅馆 都是为你好 神都狐探 有空的话， 脑中蜜",
    "file": "movie-1989.html",
    "cover": 39,
    "region": "根据片名判断",
    "category": "科幻悬疑",
    "tags": "根据片名判断",
    "year": "根据片名判断",
    "description": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）"
  },
  {
    "title": "光明大押粤语",
    "file": "movie-1990.html",
    "cover": 40,
    "region": "中国香港",
    "category": "喜剧动画",
    "tags": "当铺, 旧香港, 博弈, 兄弟情",
    "year": "2024",
    "description": "九龙城寨旁的老当铺里，一顶典当了三十年的破礼帽被人赎回，牵扯出一桩轰动全港的世纪劫案。"
  },
  {
    "title": "独行侠",
    "file": "movie-1991.html",
    "cover": 41,
    "region": "美国",
    "category": "爱情青春",
    "tags": "反英雄, 义警, 复仇, 悬疑",
    "year": "2026",
    "description": "为了追查杀妻真凶，警察伪造死亡后以“独行侠”身份游走于法律之外，却发现自己正在成为新的恶龙。"
  },
  {
    "title": "命转乾坤国语",
    "file": "movie-1992.html",
    "cover": 42,
    "region": "中国香港",
    "category": "科幻悬疑",
    "tags": "风水, 夺运, 兄弟反目",
    "year": "1998",
    "description": "风水师算出弟弟是天生的“转运人”，为救病危兄长，他被迫献出三十年寿命。"
  },
  {
    "title": "火线尖兵",
    "file": "movie-1993.html",
    "cover": 43,
    "region": "美国",
    "category": "高清电影",
    "tags": "特警, 卧底, 黑帮, 兄弟情, 实战",
    "year": "2024",
    "description": "反恐特警组潜入墨西哥毒枭内部，却发现对方首领竟然是十年前牺牲的卧底前辈。"
  },
  {
    "title": "熊熊乐园3",
    "file": "movie-1994.html",
    "cover": 44,
    "region": "中国大陆",
    "category": "科幻悬疑",
    "tags": "童话, 森林, 友情, 启蒙, 亲子",
    "year": "2024",
    "description": "小熊大、小熊二和光头强在森林幼儿园里，解决关于友谊和自然的奇妙小麻烦。"
  },
  {
    "title": "爱爱爱上你",
    "file": "movie-1995.html",
    "cover": 45,
    "region": "中国台湾",
    "category": "精选视频",
    "tags": "约会软件、假戏真做、一夜情变真爱、都市轻喜、闺蜜抢人",
    "year": "2019",
    "description": "约炮软件之王发誓睡遍全城女孩，却栽在一个要求他写“千字情书”才能见面的奇葩用户手里。"
  },
  {
    "title": "萨玛的漫长等待",
    "file": "movie-1996.html",
    "cover": 46,
    "region": "中东/欧洲",
    "category": "欧美热播",
    "tags": "难民，母爱，等待，公路",
    "year": "2025",
    "description": "为了和失散的幼子重逢，不识字的叙利亚难民母亲萨玛穿越三个战区，只为在约定地点画上一个对勾。"
  },
  {
    "title": "花系列：二",
    "file": "movie-1997.html",
    "cover": 47,
    "region": "中国台湾",
    "category": "剧情佳作",
    "tags": "女性群像, 二代困境, 花店, 成长",
    "year": "2024",
    "description": "“花系列”经典重启第二部，聚焦花店老板娘的两个女儿，关于继承与背叛的战争。"
  },
  {
    "title": "防暴女孩",
    "file": "movie-1998.html",
    "cover": 48,
    "region": "韩国",
    "category": "剧情佳作",
    "tags": "城市抗争, 未来警备, 少女成长, 暴力秩序, 反叛联盟",
    "year": "2023",
    "description": "在一座由企业接管治安的未来城市里，十七岁的防暴队女孩发现自己执行命令的对象，正是当年让她家庭破碎的那群“被驱散者”。"
  },
  {
    "title": "我要太阳",
    "file": "movie-1999.html",
    "cover": 49,
    "region": "中国大陆",
    "category": "喜剧动画",
    "tags": "白血病, 童真, 非法移植, 黑色幽默",
    "year": "2023",
    "description": "儿子得了白血病需要骨髓移植，穷困父亲买不起，于是偷偷挖开新坟，想看看“刚死的人能不能捐”。"
  },
  {
    "title": "我家业主会作妖",
    "file": "movie-2000.html",
    "cover": 50,
    "region": "中国大陆",
    "category": "爱情青春",
    "tags": "神仙邻居, 物业, 爆笑, 社会",
    "year": "2026",
    "description": "一个新来的物业经理发现，小区里的奇葩业主全是下凡历劫的神仙，玉帝是业委会主任，太白金星在跳广场舞。"
  }
];
