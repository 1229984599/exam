<script setup lang="ts">
import { useQuestionStore } from "~/store";

const questionStore = useQuestionStore();

function handleClick() {
  ElMessage({
    message: "点我会刷新题目哦",
    type: "warning",
  });
}
</script>

<template>
  <el-backtop :right="10" :bottom="50">
    <div class="i-mdi:rocket" text-red></div>
  </el-backtop>
  <p
    @click="handleClick"
    class="divider font-600 cursor-pointer"
    text="center 50px #095aa9"
    p="t-10"
  >
    语文测试
  </p>
  <div
    p="2"
    md="grid-cols-2 gap-5"
    lg="grid-cols-3 gap-10"
    class="grid text-center font-600 text-[330px]"
  >
    <div v-for="question in questionStore.questionList">{{ question }}</div>
  </div>
</template>

<style scoped></style>
