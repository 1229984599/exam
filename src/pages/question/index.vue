<script setup lang="ts">
import { useCategoryStore } from "~/store";
import MQuestionItem from "~/components/QuestionItem.vue";

defineOptions({
  name: "Home",
});
const categoryStore = useCategoryStore();
categoryStore.randQuestion();
// const textSize = computed(() => {
//   return (
//     categoryStore.currentQuestion.textSize || categoryStore.config.textSize
//   );
// });
// 监听题目是否发生变化
watch(
  () => categoryStore.config.title,
  () => {
    categoryStore.randQuestion();
  },
);
</script>

<template>
  <m-question-item
    :title="categoryStore.config.title"
    :question-list="categoryStore.currentQuestion.questionList"
    :sub-title="categoryStore.currentQuestion.subTitle"
    :question-type="categoryStore.currentQuestion.questionType"
    :text-size="categoryStore.config.textSize"
  />
</template>

<style scoped></style>
