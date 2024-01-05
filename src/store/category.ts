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
      grade: "",
      subject: "",
      title: "",
      textSize: 160,
    } as ConfigType,
    currentQuestion: {} as SubQuestionType,
  }),
  getters: {
    questionList(state): QuestionDataType[] {
      if (state.config.grade && state.config.subject) {
        // @ts-ignore
        return questionData[state.config.grade][state.config.subject];
      }
      return [];
    },
  },
  actions: {
    randQuestion(changeTextSize = false): SubQuestionType {
      // @ts-ignore
      const question: QuestionDataType = questionData[this.config.grade][
        this.config.subject
      ].find((item: QuestionDataType) => {
        return item.title === this.config.title;
      });
      const randomIndex = Math.floor(Math.random() * question.data.length);
      this.currentQuestion = question.data[randomIndex];
      if (changeTextSize && this.currentQuestion?.textSize) {
        this.config.textSize = this.currentQuestion.textSize;
      }
      return this.currentQuestion;
    },
    resetConfig() {
      this.config = {
        grade: "",
        subject: "",
        title: "",
        textSize: 160,
      };
    },
  },
  persist: true,
});
