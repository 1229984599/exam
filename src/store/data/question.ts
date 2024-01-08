type propsType = "text" | "image";

export interface SubQuestionType {
  subTitle?: string;
  questionType?: propsType;
  textSize?: number; // 字体大小
  questionList: string[]; // 子题目类型（不选图片可使用html）不能为列表
  otherDesc: string; // 其它描述（可使用html）不能为列表
}

export interface QuestionDataType {
  title: string;
  data: SubQuestionType[];
}

export const questionData = {
  one: {
    yuwen: [
      {
        title: "“字”得其乐",
        data: [
          {
            questionList: [
              "你我",
              "耳目",
              "日月",
              "爸妈",
              "数学",
              "马路",
              "星星",
              "春天",
              "开关",
              "书包",
            ],
          },
          {
            questionList: [
              "雨点",
              "金色",
              "笑着",
              "娃娃",
              "男女",
              "夏天",
              "树叶",
              "东西",
              "地方",
              "乌鸦",
            ],
          },
          {
            questionList: [
              "雨点",
              "金色",
              "笑着",
              "娃娃",
              "男女",
              "夏天",
              "树叶",
              "东西",
              "地方",
              "乌鸦",
            ],
          },
          {
            questionList: [
              "桌子",
              "画画",
              "下棋",
              "绿草",
              "青蛙",
              "国旗",
              "大海",
              "尾巴",
              "没有",
              "自己",
            ],
          },
          {
            questionList: [
              "哥哥",
              "快活",
              "放进",
              "长短",
              "朋友",
              "作业",
              "课本",
              "黄牛",
              "来去",
              "秋天",
            ],
          },
          {
            questionList: [
              "雪花",
              "蓝天",
              "公鸡",
              "他们",
              "晚上",
              "美丽",
              "森林",
              "明天",
              "苹果",
              "正反",
            ],
          },
          {
            questionList: [
              "冬天",
              "两头",
              "采莲",
              "彩色",
              "时候",
              "月牙",
              "山洞",
              "工厂",
              "医院",
              "中午",
            ],
          },
          {
            questionList: [
              "办法",
              "全对",
              "影子",
              "小船",
              "开会",
              "姐弟",
              "旁边",
              "一群",
              "雨伞",
              "站立",
            ],
          },
        ],
      },
      {
        title: "触目成诵",
        data: [
          {
            subTitle: "背诵《对韵歌》并朗诵以下文段。",
            questionType: "image",
            questionList: "/data/one/yuwen/触目成诵/1.png",
          },
          {
            subTitle: "背诵《咏鹅》并朗诵以下文段。",
            questionType: "image",
            questionList: "/data/one/yuwen/触目成诵/2.png",
          },
          {
            subTitle: "背诵《小小的船》并朗诵以下文段。",
            questionType: "image",
            questionList: "/data/one/yuwen/触目成诵/3.png",
          },
          {
            subTitle: "背诵《江南》并朗诵以下文段。",
            questionType: "image",
            questionList: "/data/one/yuwen/触目成诵/4.png",
          },
          {
            subTitle: "背诵《画》并朗诵以下文段。",
            questionType: "image",
            questionList: "/data/one/yuwen/触目成诵/5.png",
          },
          {
            subTitle: "背诵《悯农》并朗诵以下文段。",
            questionType: "image",
            questionList: "/data/one/yuwen/触目成诵/6.png",
          },
          {
            subTitle: "背诵《古朗月行》并朗诵以下文段。",
            questionType: "image",
            questionList: "/data/one/yuwen/触目成诵/7.png",
          },
          {
            subTitle: "背诵《风》并朗诵以下文段。",
            questionType: "image",
            questionList: "/data/one/yuwen/触目成诵/8.png",
          },
        ],
      },
      {
        title: "能说会道",
        data: [
          {
            subTitle: "请仔细观察画面，说几句通顺的话。",
            questionType: "image",
            questionList: "/data/one/yuwen/能说会道/1.png",
          },
          {
            subTitle:
              "仔细看图，什么时候谁在哪里干什么？心情怎样？用一两句话说出来。",
            questionType: "image",
            questionList: "/data/one/yuwen/能说会道/2.png",
          },
          {
            subTitle:
              "仔细看图，图中的小朋友在什么地方干什么呢？他们的心情怎么样？用几句话说一说。",
            questionType: "image",
            questionList: "/data/one/yuwen/能说会道/3.png",
          },
          {
            subTitle:
              "仔细看图，什么时候他们在哪里干什么？心情怎样？用一两句话说出来。",
            questionType: "image",
            questionList: "/data/one/yuwen/能说会道/4.png",
          },
          {
            subTitle:
              "仔细看图，什么时候他们在哪里干什么？心情怎样？用一两句话说出来。",
            questionType: "image",
            questionList: "/data/one/yuwen/能说会道/5.png",
          },
          {
            subTitle:
              "仔细观察图画，看图都有谁？他们在哪？在做什么？把你看到的、想到的，用几句通顺、连贯的话说出来。",
            questionType: "image",
            questionList: "/data/one/yuwen/能说会道/6.png",
          },
          {
            subTitle:
              "仔细观察图画，这是什么季节？看图都有谁？他们在哪？在做什么？把你看到的、想到的，用一段通顺、连贯的说出来。",
            questionType: "image",
            questionList: "/data/one/yuwen/能说会道/7.png",
          },
          {
            subTitle:
              "仔细看图，什么时候他们在哪里干什么？最后怎样？用一两句话说出来。",
            questionType: "image",
            questionList: "/data/one/yuwen/能说会道/8.png",
          },
        ],
      },
    ] as QuestionDataType[],
    math: [
      {
        title: "神机妙算",
        data: [
          {
            textSize: 95,
            questionList: [
              "6+2=",
              "5+8=",
              "19-4=",
              "9-4=",
              "10+8=",
              "12-7=",
              "3+6-1=",
              "10-8+6=",
            ],
          },
          {
            textSize: 95,
            questionList: [
              "4+3=",
              "8+7=",
              "15-2=",
              "7-2=",
              "10+5=",
              "13-7=",
              "4+4-2=",
              "10-9+5=",
            ],
          },
          {
            textSize: 95,
            questionList: [
              "3+6=",
              "6+8=",
              "16-5=",
              "7-4=",
              "10+3=",
              "11-7=",
              "1+6-3=",
              "10-7+2=",
            ],
          },
          {
            textSize: 95,
            questionList: [
              "6+3=",
              "9+4=",
              "15-4=",
              "8-5=",
              "10+6=",
              "15-7=",
              "4+3-5=",
              "10-8+7=",
            ],
          },
          {
            textSize: 95,
            questionList: [
              "2+7=",
              "5+9=",
              "13-2=",
              "8-6=",
              "10+4=",
              "14-7=",
              "3+5-6=",
              "10-9+4=",
            ],
          },
          {
            textSize: 95,
            questionList: [
              "1+8=",
              "6+9=",
              "16-5=",
              "7-3=",
              "10+7=",
              "16-7=",
              "5+4-6=",
              "10-8+5=",
            ],
          },
        ],
      },
      {
        title: "言之有理",
        data: [
          {
            textSize: 150,
            subTitle: "请你说说下面算式“凑十法”的方法。",
            questionList: "8+6=",
          },
          {
            textSize: 150,
            subTitle: "请你说说下面算式“凑十法”的方法。",
            questionList: "9+4=",
          },
          {
            textSize: 150,
            subTitle: "请你说说下面算式“凑十法”的方法。",
            questionList: "5+8=",
          },
          {
            textSize: 150,
            subTitle: "请你说说下面算式“凑十法”的方法。",
            questionList: "8+7=",
          },
          {
            textSize: 150,
            subTitle: "请你说说下面算式“凑十法”的方法。",
            questionList: "7+5=",
          },
          {
            textSize: 150,
            subTitle: "请你说说下面算式“凑十法”的方法。",
            questionList: "8+8=",
          },
        ],
      },
      {
        title: "慧思智拨",
        data: [
          {
            textSize: 45,
            questionList:
              "<p>请你在计数器上拨出12，并说说它的组成。</p></br><p>请你在钟面上拨出3:00</p>",
          },
          {
            textSize: 45,
            questionList:
              "<p>请你在计数器上拨出18，并说说它的组成。</p></br><p>请你在钟面上拨出6:00</p>",
          },
          {
            textSize: 45,
            questionList:
              "<p>请你在计数器上拨出17，并说说它的组成。</p></br><p>请你在钟面上拨出9:00</p>",
          },
          {
            textSize: 45,
            questionList:
              "<p>请你在计数器上拨出15，并说说它的组成。</p></br><p>请你在钟面上拨出12:00</p>",
          },
          {
            textSize: 45,
            questionList:
              "<p>请你在计数器上拨出16，并说说它的组成。</p></br><p>请你在钟面上拨出8:00</p>",
          },
          {
            textSize: 45,
            questionList:
              "<p>请你在计数器上拨出14，并说说它的组成。</p></br><p>请你在钟面上拨出4:00</p>",
          },
        ],
      },
    ] as QuestionDataType[],
  },
  two: {
    yuwen: [
      {
        title: "“字”得其乐",
        data: [
          {
            questionList: [
              "花园",
              "杨树",
              "金桂",
              "船身",
              "房屋",
              "灾害",
              "到底",
              "植物",
              "如果",
              "事情",
            ],
          },
          {
            questionList: [
              "海洋",
              "坏事",
              "淹没",
              "冲毁",
              "房屋",
              "灾害",
              "猜测",
              "植物",
              "如果",
              "旅行",
            ],
          },
          {
            questionList: [
              "劝告",
              "趁早",
              "将来",
              "难过",
              "狂吼",
              "重复",
              "哀号",
              "井沿",
              "回答",
              "口渴",
            ],
          },
          {
            questionList: [
              "曹冲",
              "官员",
              "议论",
              "重量",
              "画线",
              "停止",
              "玲玲",
              "详细",
              "一幅",
              "催促",
            ],
          },
          {
            questionList: [
              "扁担",
              "祝福",
              "健康",
              "货轮",
              "感谢",
              "蚜虫",
              "下铺",
              "泼水",
              "腊月",
              "灭火",
            ],
          },
          {
            questionList: [
              "脑袋",
              "阿姨",
              "淹没",
              "旅行",
              "帐篷",
              "世界",
              "辛苦",
              "议论",
              "结束",
              "弹钢琴",
            ],
          },
          {
            questionList: [
              "整齐",
              "打仗",
              "照料",
              "民族",
              "温度",
              "龙舟",
              "行驶",
              "容易",
              "踩水",
              "盛饭",
            ],
          },
          {
            questionList: [
              "桦树",
              "耐心",
              "桂花",
              "秋裤",
              "指南针",
              "守护",
              "化石",
              "帮助",
              "抽水",
              "登山鞋",
            ],
          },
        ],
      },
      {
        title: "触目成诵",
        data: [
          {
            subTitle: "背诵《梅花》并朗诵以下文段。",
            questionType: "image",
            questionList: "/data/two/yuwen/触目成诵/1.png",
          },
          {
            subTitle: "背诵《小儿垂钓》并朗诵以下文段。",
            questionType: "image",
            questionList: "/data/two/yuwen/触目成诵/2.png",
          },
          {
            subTitle: "背诵《登鹳雀楼》并朗诵以下文段。",
            questionType: "image",
            questionList: "/data/two/yuwen/触目成诵/3.png",
          },
          {
            subTitle: "背诵《望庐山瀑布》并朗诵以下文段。",
            questionType: "image",
            questionList: "/data/two/yuwen/触目成诵/4.png",
          },
          {
            subTitle: "背诵《夜宿山寺》并朗诵以下文段。",
            questionType: "image",
            questionList: "/data/two/yuwen/触目成诵/5.png",
          },
          {
            subTitle: "背诵《数九歌》并朗诵以下文段。",
            questionType: "image",
            questionList: "/data/two/yuwen/触目成诵/6.png",
          },
          {
            subTitle: "背诵《敕勒歌》并朗诵以下文段。",
            questionType: "image",
            questionList: "/data/two/yuwen/触目成诵/7.png",
          },
          {
            subTitle: "背诵《江雪》并朗诵以下文段。",
            questionType: "image",
            questionList: "/data/two/yuwen/触目成诵/8.png",
          },
        ],
      },
      {
        title: "能说会道",
        data: [
          {
            subTitle: "认真看图，想一想图中讲了谁在干什么，说一段通顺的话。",
            questionType: "image",
            questionList: "/data/two/yuwen/能说会道/1.png",
          },
          {
            subTitle: "认真看图，想一想图中讲了谁在干什么，说一段通顺的话。",
            questionType: "image",
            questionList: "/data/two/yuwen/能说会道/2.png",
          },
          {
            subTitle: "认真看图，想一想图中讲了谁在干什么，说一段通顺的话。",
            questionType: "image",
            questionList: "/data/two/yuwen/能说会道/3.png",
          },
          {
            subTitle: "认真看图，想一想图中讲了谁在干什么，说一段通顺的话。",
            questionType: "image",
            questionList: "/data/two/yuwen/能说会道/4.png",
          },
          {
            subTitle: "认真看图，想一想图中讲了谁在干什么，说一段通顺的话。",
            questionType: "image",
            questionList: "/data/two/yuwen/能说会道/5.png",
          },
          {
            subTitle: "认真看图，想一想图中讲了谁在干什么，说一段通顺的话。",
            questionType: "image",
            questionList: "/data/two/yuwen/能说会道/6.png",
          },
        ],
      },
    ] as QuestionDataType[],
    math: [
      {
        title: "神机妙算",
        data: [
          {
            questionList: [
              "10+17=",
              "43+7=",
              "9×5=",
              "8×6=",
              "50-7=",
              "73-20=",
              "6×7=",
              "4×2=",
            ],
          },
          {
            questionList: [
              "82+10=",
              "35+5=",
              "6×9=",
              "3×8=",
              "40-9=",
              "63-20=",
              "9×6=",
              "2×5=",
            ],
          },
          {
            questionList: [
              "20+13=",
              "32+4=",
              "7×8=",
              "2×6=",
              "40-3=",
              "93-40=",
              "8×2=",
              "4×5=",
            ],
          },
          {
            questionList: [
              "40+36=",
              "54+6=",
              "3×9=",
              "5×7=",
              "80-3=",
              "63-30=",
              "8×4=",
              "7×2=",
            ],
          },
          {
            questionList: [
              "30+27=",
              "52+8=",
              "7×4=",
              "5×6=",
              "70-7=",
              "93-40=",
              "8×5=",
              "6×2=",
            ],
          },
          {
            questionList: [
              "34+60=",
              "43+7=",
              "3×4=",
              "3×6=",
              "50-7=",
              "76-50=",
              "4×5=",
              "9×2=",
            ],
          },
        ],
      },
      {
        title: "言之有理",
        data: [
          {
            subTitle: "请你说说下面算式的算理。",
            questionList: "72-27=",
            textSize: 105,
          },
          {
            subTitle: "请你说说下面算式的算理。",
            questionList: "33-18=",
            textSize: 105,
          },
          {
            subTitle: "请你说说下面算式的算理。",
            questionList: "65-18=",
            textSize: 105,
          },
          {
            subTitle: "请你说说下面算式的算理。",
            questionList: "51-39=",
            textSize: 105,
          },
          {
            subTitle: "请你说说下面算式的算理。",
            questionList: "65-37=",
            textSize: 105,
          },
          {
            subTitle: "请你说说下面算式的算理。",
            questionList: "50-24=",
            textSize: 105,
          },
        ],
      },
      {
        title: "慧思智拨",
        data: [
          {
            subTitle: "请你用三角尺判断下面的角是直角、锐角还是钝角？",
            questionType: "image",
            questionList: "/data/two/math/慧思智拨/1.png",
            otherDesc: "<p class='font-600'>请你在钟面上拨出3:15</p>",
            textSize: 40,
          },
          {
            subTitle: "请你用三角尺判断下面的角是直角、锐角还是钝角？",
            questionType: "image",
            questionList: "/data/two/math/慧思智拨/2.png",
            otherDesc: "<p class='font-600'>请你在钟面上拨出8:20</p>",
            textSize: 40,
          },
          {
            subTitle: "请你用三角尺判断下面的角是直角、锐角还是钝角？",
            questionType: "image",
            questionList: "/data/two/math/慧思智拨/3.png",
            otherDesc: "<p class='font-600'>请你在钟面上拨出5:40</p>",
            textSize: 40,
          },
          {
            subTitle: "请你用三角尺判断下面的角是直角、锐角还是钝角？",
            questionType: "image",
            questionList: "/data/two/math/慧思智拨/4.png",
            otherDesc: "<p class='font-600'>请你在钟面上拨出8:50</p>",
            textSize: 40,
          },
          {
            subTitle: "请你用三角尺判断下面的角是直角、锐角还是钝角？",
            questionType: "image",
            questionList: "/data/two/math/慧思智拨/5.png",
            otherDesc: "<p class='font-600'>请你在钟面上拨出1:35</p>",
            textSize: 40,
          },
          {
            subTitle: "请你用三角尺判断下面的角是直角、锐角还是钝角？",
            questionType: "image",
            questionList: "/data/two/math/慧思智拨/6.png",
            otherDesc: "<p class='font-600'>请你在钟面上拨出7:45</p>",
            textSize: 40,
          },
        ],
      },
    ] as QuestionDataType[],
  },
};
