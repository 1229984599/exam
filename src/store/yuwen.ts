import { defineStore } from "pinia";

export const useQuestionStore = defineStore("main", {
  state: () => ({
    question: "",
    questionList: ["大", "小", "我", "们", "人", "国", "大", "小", "我", "们"],
  }),
  actions: {},
});
