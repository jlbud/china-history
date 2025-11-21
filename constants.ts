
import { Era, EraId, HistoryCardData } from './types';

export const ERAS: Era[] = [
  {
    id: EraId.SHANG,
    name: '商朝',
    hanzi: '商',
    period: '约前1600年 – 前1046年',
    startYear: -1600,
    endYear: -1046,
    description: '中国历史上第一个有直接文字记载的王朝，以精美的青铜器和甲骨文闻名于世。',
    color: '#78716c' // stone-500
  },
  {
    id: EraId.ZHOU,
    name: '周朝',
    hanzi: '周',
    period: '前1046年 – 前256年',
    startYear: -1046,
    endYear: -256,
    description: '中国历史上存在时间最长的朝代；儒家、道家思想及“天命”观念诞生于此。',
    color: '#a8a29e' // stone-400
  },
  {
    id: EraId.QIN,
    name: '秦朝',
    hanzi: '秦',
    period: '前221年 – 前206年',
    startYear: -221,
    endYear: -206,
    description: '中国历史上第一个统一的封建王朝；始皇帝修建了长城和兵马俑，统一了度量衡。',
    color: '#ef4444' // red-500
  },
  {
    id: EraId.HAN,
    name: '汉朝',
    hanzi: '汉',
    period: '前202年 – 220年',
    startYear: -202,
    endYear: 220,
    description: '中国历史上的黄金时代，国家强盛，丝绸之路的开辟促进了东西方文明的交流。',
    color: '#b91c1c' // red-700
  },
  {
    id: EraId.TANG,
    name: '唐朝',
    hanzi: '唐',
    period: '618年 – 907年',
    startYear: 618,
    endYear: 907,
    description: '中国封建社会的鼎盛时期，以其开放包容的国际化风貌及辉煌灿烂的诗歌艺术著称。',
    color: '#8b5cf6' // violet-500
  },
  {
    id: EraId.SONG,
    name: '宋朝',
    hanzi: '宋',
    period: '960年 – 1279年',
    startYear: 960,
    endYear: 1279,
    description: '经济文化高度繁荣的时代，火药、指南针和活字印刷术等发明得到广泛应用。',
    color: '#10b981' // emerald-500
  },
  {
    id: EraId.MING,
    name: '明朝',
    hanzi: '明',
    period: '1368年 – 1644年',
    startYear: 1368,
    endYear: 1644,
    description: '汉族统治的复兴，修建了宏伟的紫禁城，郑和下西洋展示了强大的航海实力。',
    color: '#f59e0b' // amber-500
  },
  {
    id: EraId.QING,
    name: '清朝',
    hanzi: '清',
    period: '1644年 – 1912年',
    startYear: 1644,
    endYear: 1912,
    description: '中国最后一个封建王朝，由满族统治；疆域辽阔，康乾盛世后逐渐走向衰落。',
    color: '#3b82f6' // blue-500
  }
];

export const INITIAL_CARDS: HistoryCardData[] = [
  // SHANG
  {
    id: 's1',
    eraId: EraId.SHANG,
    title: '甲骨文',
    hanzi: '甲骨',
    type: 'artifact',
    year: '约前1200年',
    shortDescription: '刻在牛肩胛骨或龟甲上的文字，主要用于占卜，是中国已知最早的成熟文字系统。',
    imageSeed: 89,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Oracle_Shell03.jpg/640px-Oracle_Shell03.jpg',
    tags: ['文字', '仪式', '考古']
  },
  {
    id: 's2',
    eraId: EraId.SHANG,
    title: '后母戊鼎',
    hanzi: '后母戊鼎',
    type: 'artifact',
    year: '约前1300年',
    shortDescription: '中国现存最重的青铜器，造型宏伟，纹饰精美，代表了商代青铜铸造技术的最高水平。',
    imageSeed: 12,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Houmuwu_Ding_2018.jpg/640px-Houmuwu_Ding_2018.jpg',
    tags: ['青铜器', '礼器', '艺术']
  },
  {
    id: 's3',
    eraId: EraId.SHANG,
    title: '妇好',
    hanzi: '妇好',
    type: 'figure',
    year: '约前1200年',
    shortDescription: '商王武丁的王后，也是中国历史上第一位有据可查的女性军事统帅，多次率军征战。',
    imageSeed: 45,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Statue_of_Fu_Hao_at_Yinxu.jpg/640px-Statue_of_Fu_Hao_at_Yinxu.jpg',
    tags: ['军事', '女性', '皇室']
  },

  // ZHOU
  {
    id: 'z1',
    eraId: EraId.ZHOU,
    title: '孔子',
    hanzi: '孔子',
    type: 'figure',
    year: '前551年 – 前479年',
    shortDescription: '中国古代伟大的思想家、教育家，儒家学派创始人，其思想对中国及东亚文化产生了深远影响。',
    imageSeed: 210,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Confucius_Tang_Dynasty.jpg/640px-Confucius_Tang_Dynasty.jpg',
    tags: ['哲学', '教育', '儒家']
  },
  {
    id: 'z2',
    eraId: EraId.ZHOU,
    title: '孙子兵法',
    hanzi: '孙子',
    type: 'culture',
    year: '约前500年',
    shortDescription: '世界上最早的军事著作，由孙武所著，其战略思想至今仍被广泛应用于军事和商业领域。',
    imageSeed: 233,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Enoki_Sun_Tzu.jpg/640px-Enoki_Sun_Tzu.jpg',
    tags: ['军事', '哲学', '文学']
  },
  {
    id: 'z3',
    eraId: EraId.ZHOU,
    title: '曾侯乙编钟',
    hanzi: '编钟',
    type: 'artifact',
    year: '前433年',
    shortDescription: '战国早期的大型礼乐重器，音域宽广，音色优美，改写了世界音乐史。',
    imageSeed: 267,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bianzhong_of_Marquis_Yi_of_Zeng_03.jpg/800px-Bianzhong_of_Marquis_Yi_of_Zeng_03.jpg',
    tags: ['音乐', '青铜器', '艺术']
  },
  {
    id: 'z4',
    eraId: EraId.ZHOU,
    title: '百家争鸣',
    hanzi: '诸子百家',
    type: 'event',
    year: '前770年 – 前221年',
    shortDescription: '春秋战国时期知识分子中不同学派的涌现及各流派争芳斗艳的局面，是中国思想文化的黄金时代。',
    imageSeed: 299,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Confucius_disciples.jpg/640px-Confucius_disciples.jpg',
    tags: ['哲学', '思想', '历史']
  },

  // QIN
  {
    id: 'q1',
    eraId: EraId.QIN,
    title: '兵马俑',
    hanzi: '兵马俑',
    type: 'artifact',
    year: '前210年',
    shortDescription: '秦始皇陵的陪葬坑中出土的陶制兵马模型，数量庞大，形态各异，展示了秦军的威武之师。',
    imageSeed: 315,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Terracotta_Army_Pit_1_2015.jpg/800px-Terracotta_Army_Pit_1_2015.jpg',
    tags: ['艺术', '军事', '考古']
  },
  {
    id: 'q2',
    eraId: EraId.QIN,
    title: '秦始皇',
    hanzi: '始皇帝',
    type: 'figure',
    year: '前259年 – 前210年',
    shortDescription: '中国历史上第一位皇帝，统一了六国、文字、度量衡，建立了中央集权制度。',
    imageSeed: 342,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Qin_Shi_Huang_di.jpg/640px-Qin_Shi_Huang_di.jpg',
    tags: ['皇帝', '政治', '改革']
  },
  {
    id: 'q3',
    eraId: EraId.QIN,
    title: '万里长城',
    hanzi: '长城',
    type: 'culture',
    year: '前214年',
    shortDescription: '秦始皇连接并修缮战国长城，形成了西起临洮、东至辽东的万里长城，用以抵御北方游牧民族。',
    imageSeed: 388,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/800px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg',
    tags: ['建筑', '军事', '奇迹']
  },

  // HAN
  {
    id: 'h1',
    eraId: EraId.HAN,
    title: '丝绸之路',
    hanzi: '丝绸之路',
    type: 'event',
    year: '约前130年',
    shortDescription: '连接中国与西方的古代陆上商业贸易路线，是东西方经济、文化交流的重要桥梁。',
    imageSeed: 422,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Silk_route.jpg/800px-Silk_route.jpg',
    tags: ['贸易', '探索', '外交']
  },
  {
    id: 'h2',
    eraId: EraId.HAN,
    title: '司马迁',
    hanzi: '司马迁',
    type: 'figure',
    year: '前145年 – 约前86年',
    shortDescription: '西汉史学家，撰写了中国第一部纪传体通史《史记》，被鲁迅誉为“史家之绝唱，无韵之离骚”。',
    imageSeed: 456,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Sima_Qian.jpg/640px-Sima_Qian.jpg',
    tags: ['历史', '文学', '史记']
  },
  {
    id: 'h3',
    eraId: EraId.HAN,
    title: '蔡伦造纸',
    hanzi: '造纸术',
    type: 'culture',
    year: '105年',
    shortDescription: '东汉宦官蔡伦改进了造纸术，使纸张成为普遍的书写材料，对世界文明传播作出了巨大贡献。',
    imageSeed: 489,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Cailun.jpg/640px-Cailun.jpg',
    tags: ['科技', '发明', '文化']
  },
  {
    id: 'h4',
    eraId: EraId.HAN,
    title: '金缕玉衣',
    hanzi: '金缕玉衣',
    type: 'artifact',
    year: '前113年',
    shortDescription: '汉代皇帝和高级贵族死后穿着的殓服，由数千片玉片用金丝编缀而成，极尽奢华。',
    imageSeed: 499,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Han_Jade_Burial_Suit_1.jpg/800px-Han_Jade_Burial_Suit_1.jpg',
    tags: ['文物', '皇室', '工艺']
  },

  // TANG
  {
    id: 't1',
    eraId: EraId.TANG,
    title: '李白',
    hanzi: '李白',
    type: 'figure',
    year: '701年 – 762年',
    shortDescription: '唐代伟大的浪漫主义诗人，被后人誉为“诗仙”，其诗作豪迈奔放，想象丰富。',
    imageSeed: 530,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Li_Bai_depiction.jpg/640px-Li_Bai_depiction.jpg',
    tags: ['诗歌', '文学', '浪漫']
  },
  {
    id: 't2',
    eraId: EraId.TANG,
    title: '武则天',
    hanzi: '武则天',
    type: 'figure',
    year: '624年 – 705年',
    shortDescription: '中国历史上唯一的正统女皇帝，在位期间打击门阀，发展科举，奖励农桑，有“贞观遗风”。',
    imageSeed: 567,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Empress_Wu_Zetian.jpg/640px-Empress_Wu_Zetian.jpg',
    tags: ['皇帝', '女性', '政治']
  },
  {
    id: 't3',
    eraId: EraId.TANG,
    title: '唐三彩',
    hanzi: '唐三彩',
    type: 'artifact',
    year: '7世纪',
    shortDescription: '盛行于唐代的低温铅釉陶器，以黄、绿、白三色为主，造型生动，色彩艳丽。',
    imageSeed: 588,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Tang_Dynasty_Ceramic_Camel.jpg/640px-Tang_Dynasty_Ceramic_Camel.jpg',
    tags: ['艺术', '陶瓷', '工艺']
  },
  {
    id: 't4',
    eraId: EraId.TANG,
    title: '玄奘西行',
    hanzi: '玄奘',
    type: 'event',
    year: '627年 – 645年',
    shortDescription: '唐代高僧玄奘前往天竺（印度）取经，带回大量佛经并翻译，促进了佛教在中国的传播。',
    imageSeed: 595,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Xuanzang_Da_Tang_Xi_Yu_Ji.jpg/640px-Xuanzang_Da_Tang_Xi_Yu_Ji.jpg',
    tags: ['宗教', '探索', '翻译']
  },

  // SONG
  {
    id: 'so1',
    eraId: EraId.SONG,
    title: '活字印刷术',
    hanzi: '活字印刷',
    type: 'culture',
    year: '约1040年',
    shortDescription: '北宋毕昇发明的泥活字印刷术，标志着活字印刷技术的诞生，极大地促进了文化的传播。',
    imageSeed: 601,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Wood_movable_type_printing.jpg/800px-Wood_movable_type_printing.jpg',
    tags: ['科技', '发明', '传播']
  },
  {
    id: 'so2',
    eraId: EraId.SONG,
    title: '苏轼',
    hanzi: '苏轼',
    type: 'figure',
    year: '1037年 – 1101年',
    shortDescription: '北宋文学家、书画家，唐宋八大家之一，豪放派词人代表，在诗、词、散文、书、画等方面均有极高成就。',
    imageSeed: 645,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Su_Shi.jpg/640px-Su_Shi.jpg',
    tags: ['文学', '艺术', '美食']
  },
  {
    id: 'so3',
    eraId: EraId.SONG,
    title: '清明上河图',
    hanzi: '清明上河',
    type: 'artifact',
    year: '12世纪初',
    shortDescription: '北宋画家张择端所作，生动记录了北宋都城东京（今开封）的城市面貌和当时社会各阶层人民的生活状况。',
    imageSeed: 678,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Along_the_River_During_the_Qingming_Festival_%28Qing_Court_Version%29.jpg/1280px-Along_the_River_During_the_Qingming_Festival_%28Qing_Court_Version%29.jpg',
    tags: ['绘画', '艺术', '风俗']
  },
  {
    id: 'so4',
    eraId: EraId.SONG,
    title: '指南针',
    hanzi: '指南针',
    type: 'culture',
    year: '11世纪',
    shortDescription: '宋代开始将磁针用于航海，大大提高了航海技术，为后来的地理大发现提供了技术支持。',
    imageSeed: 699,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Model_Si_Nan_of_Han_Dynasty.jpg/640px-Model_Si_Nan_of_Han_Dynasty.jpg',
    tags: ['科技', '航海', '发明']
  },

  // MING
  {
    id: 'm1',
    eraId: EraId.MING,
    title: '紫禁城',
    hanzi: '紫禁城',
    type: 'culture',
    year: '1420年',
    shortDescription: '明清两代的皇家宫殿，是世界上现存规模最大、保存最为完整的木质结构古建筑之一。',
    imageSeed: 745,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Forbidden_City_Beijing_Shenwu_Gate_20191013.jpg/800px-Forbidden_City_Beijing_Shenwu_Gate_20191013.jpg',
    tags: ['建筑', '皇室', '世界遗产']
  },
  {
    id: 'm2',
    eraId: EraId.MING,
    title: '郑和下西洋',
    hanzi: '郑和',
    type: 'figure',
    year: '1371年 – 1433年',
    shortDescription: '明代杰出的航海家、外交家郑和七次率领庞大船队远航西洋，最远到达非洲东海岸。',
    imageSeed: 882,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Zheng_He.jpg/640px-Zheng_He.jpg',
    tags: ['探索', '航海', '外交']
  },
  {
    id: 'm3',
    eraId: EraId.MING,
    title: '本草纲目',
    hanzi: '本草纲目',
    type: 'culture',
    year: '1578年',
    shortDescription: '李时珍历时27年编写的医药学巨著，集中国16世纪以前药学之大成，被誉为“东方医学巨典”。',
    imageSeed: 777,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Bencao_Gangmu_page.jpg/640px-Bencao_Gangmu_page.jpg',
    tags: ['医学', '科学', '书籍']
  },
  {
    id: 'm4',
    eraId: EraId.MING,
    title: '王阳明',
    hanzi: '王阳明',
    type: 'figure',
    year: '1472年 – 1529年',
    shortDescription: '明代著名的思想家、军事家，心学集大成者，提出“致良知”和“知行合一”的学说。',
    imageSeed: 799,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Wang_Yangming_portrait.jpg/640px-Wang_Yangming_portrait.jpg',
    tags: ['哲学', '心学', '教育']
  },

  // QING
  {
    id: 'qi1',
    eraId: EraId.QING,
    title: '乾隆皇帝',
    hanzi: '乾隆',
    type: 'figure',
    year: '1711年 – 1799年',
    shortDescription: '清朝第六位皇帝，在位期间中国疆域达到最大，不仅文治武功卓著，也极度热爱艺术收藏。',
    imageSeed: 810,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/The_Qianlong_Emperor_in_Court_Dress.jpg/640px-The_Qianlong_Emperor_in_Court_Dress.jpg',
    tags: ['皇帝', '政治', '艺术']
  },
  {
    id: 'qi2',
    eraId: EraId.QING,
    title: '红楼梦',
    hanzi: '红楼梦',
    type: 'culture',
    year: '18世纪中叶',
    shortDescription: '曹雪芹所著，中国古典小说的巅峰之作，通过四大家族的兴衰描写了封建社会的方方面面。',
    imageSeed: 845,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Dream_of_the_Red_Chamber_Qing_Dynasty.jpg/640px-Dream_of_the_Red_Chamber_Qing_Dynasty.jpg',
    tags: ['文学', '小说', '经典']
  },
  {
    id: 'qi3',
    eraId: EraId.QING,
    title: '京剧',
    hanzi: '京剧',
    type: 'culture',
    year: '1790年',
    shortDescription: '中国影响最大的戏曲剧种，融合了徽剧、汉剧等多种地方戏曲的优点，被誉为中国的“国粹”。',
    imageSeed: 888,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Peking_Opera_Masks.jpg/800px-Peking_Opera_Masks.jpg',
    tags: ['戏曲', '艺术', '文化']
  },
  {
    id: 'qi4',
    eraId: EraId.QING,
    title: '圆明园',
    hanzi: '圆明园',
    type: 'culture',
    year: '1707年始建',
    shortDescription: '清代大型皇家园林，汇集了江南园林的精华和西方建筑风格，曾被称为“万园之园”。',
    imageSeed: 910,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Ruins_of_the_Old_Summer_Palace.jpg/800px-Ruins_of_the_Old_Summer_Palace.jpg',
    tags: ['建筑', '园林', '历史']
  }
];
