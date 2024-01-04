import { defineStore } from "pinia";
import {
  questionData,
  QuestionDataType,
  SubQuestionType,
} from "~/store/data/question";

interface ConfigType {
  grade: string;
  subject: string;
  title: string;
  textSize: number;
}

export const useCategoryStore = defineStore("category", {
  state: () => ({
    config: {
      grade: "one",
      subject: "yuwen",
      title: "“字”得其乐",
      textSize: 160,
    } as ConfigType,
    currentQuestion: {} as SubQuestionType,
  }),
  getters: {
    questionList(state): QuestionDataType[] {
      // @ts-ignore
      return questionData[state.config.grade][state.config.subject];
    },
  },
  actions: {
    randQuestion(): SubQuestionType {
      // @ts-ignore
      const question: QuestionDataType = questionData[this.config.grade][
        this.config.subject
      ].find((item: QuestionDataType) => {
        return item.title === this.config.title;
      });
      const randomIndex = Math.floor(Math.random() * question.data.length);
      this.currentQuestion = question.data[randomIndex];
      // 如果data中配置了字体大小，默认使用data中字体大小
      if (this.currentQuestion?.textSize) {
        this.config.textSize = this.currentQuestion.textSize;
      }
      return this.currentQuestion;
    },
  },
  // persist: true,
});
