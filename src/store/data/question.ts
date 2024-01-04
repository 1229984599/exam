type propsType = "text" | "image";

export interface SubQuestionType {
  subTitle?: string;
  questionType?: propsType;
  textSize?: number; // 字体大小
  questionList: string[]; // 子题目类型
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
            subTitle: "背诵《对韵歌》并朗诵以下文段",
            questionType: "image",
            questionList: "/data/one/yuwen/我的家乡.png",
          },
          {
            subTitle: "背诵《咏鹅》并朗诵以下文段",
            questionType: "image",
            questionList: "/data/one/yuwen/秋天笑了.png",
          },
          {
            subTitle: "背诵《小小的船》并朗诵以下文段",
            questionType: "image",
            questionList: "/data/one/yuwen/救小猴.png",
          },
          {
            subTitle: "背诵《江南》并朗诵以下文段",
            questionType: "image",
            questionList: "/data/one/yuwen/江南.png",
          },
          {
            subTitle: "背诵《画》并朗诵以下文段",
            questionType: "image",
            questionList: "/data/one/yuwen/祖国我爱你.png",
          },
          {
            subTitle: "背诵《悯农》并朗诵以下文段",
            questionType: "image",
            questionList: "/data/one/yuwen/小熊砍树.png",
          },
          {
            subTitle: "背诵《古朗月行》并朗诵以下文段",
            questionType: "image",
            questionList: "/data/one/yuwen/粗心的小画家.png",
          },
          {
            subTitle: "背诵《风》并朗诵以下文段",
            questionType: "image",
            questionList: "/data/one/yuwen/剪窗花.png",
          },
        ],
      },
      {
        title: "能说会道",
        data: [
          {
            subTitle: "请仔细观察画面，说几句通顺的话",
            questionType: "image",
            questionList: "/data/one/yuwen/能说会道/1.png",
          },
          {
            subTitle:
              "仔细看图，什么时候谁在哪里干什么？心情怎样？用一两句话说出来",
            questionType: "image",
            questionList: "/data/one/yuwen/能说会道/2.png",
          },
          {
            subTitle:
              "仔细看图，图中的小朋友在什么地方干什么呢？他们的心情怎么样？用几句话说一说",
            questionType: "image",
            questionList: "/data/one/yuwen/能说会道/3.png",
          },
          {
            subTitle:
              "仔细看图，什么时候他们在哪里干什么？心情怎样？用一两句话说出来",
            questionType: "image",
            questionList: "/data/one/yuwen/能说会道/4.png",
          },
          {
            subTitle:
              "仔细看图，什么时候他们在哪里干什么？心情怎样？用一两句话说出来",
            questionType: "image",
            questionList: "/data/one/yuwen/能说会道/5.png",
          },
          {
            subTitle:
              "仔细观察图画，看图都有谁？他们在哪？在做什么？把你看到的、想到的，用几句通顺、连贯的话说出来",
            questionType: "image",
            questionList: "/data/one/yuwen/能说会道/6.png",
          },
          {
            subTitle:
              "仔细观察图画，这是什么季节？看图都有谁？他们在哪？在做什么？把你看到的、想到的，用一段通顺、连贯的说出来",
            questionType: "image",
            questionList: "/data/one/yuwen/能说会道/7.png",
          },
          {
            subTitle:
              "仔细看图，什么时候他们在哪里干什么？最后怎样？用一两句话说出来",
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
            subTitle: "你说说下面算式“凑十法”的方法",
            questionList: "8+6=",
          },
          {
            subTitle: "你说说下面算式“凑十法”的方法",
            questionList: "9+4=",
          },
          {
            subTitle: "你说说下面算式“凑十法”的方法",
            questionList: "5+8=",
          },
          {
            subTitle: "你说说下面算式“凑十法”的方法",
            questionList: "8+7=",
          },
          {
            subTitle: "你说说下面算式“凑十法”的方法",
            questionList: "7+5=",
          },
          {
            subTitle: "你说说下面算式“凑十法”的方法",
            questionList: "8+8=",
          },
        ],
      },
      {
        title: "慧思智拨",
        data: [
          {
            questionType: "image",
            questionList: "/data/one/math/慧思智拨/1.png",
          },
          {
            questionType: "image",
            questionList: "/data/one/math/慧思智拨/2.png",
          },
          {
            questionType: "image",
            questionList: "/data/one/math/慧思智拨/3.png",
          },
          {
            questionType: "image",
            questionList: "/data/one/math/慧思智拨/4.png",
          },
          {
            questionType: "image",
            questionList: "/data/one/math/慧思智拨/5.png",
          },
          {
            questionType: "image",
            questionList: "/data/one/math/慧思智拨/6.png",
          },
        ],
      },
    ] as QuestionDataType[],
  },
};
