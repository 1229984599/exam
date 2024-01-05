<script setup lang="ts">
import { useCategoryStore } from "~/store";
import MQuestionItem from "~/components/QuestionItem.vue";

defineOptions({
  name: "Home",
});
const categoryStore = useCategoryStore();
categoryStore.randQuestion();

// 监听题目是否发生变化
watch(
  () => [categoryStore.config.title],
  () => {
    categoryStore.randQuestion(true);
    // 不放在randQuestion改变字体，防止刷新时字体又被设置为默认值
  },
);
</script>

<template>
  <m-question-item
    :title="categoryStore.config.title"
    :text-size="categoryStore.config.textSize"
    :question-list="categoryStore.currentQuestion.questionList"
    :sub-title="categoryStore.currentQuestion.subTitle"
    :question-type="categoryStore.currentQuestion.questionType"
    :other-desc="categoryStore.currentQuestion.otherDesc"
  />
</template>

<style scoped></style>
