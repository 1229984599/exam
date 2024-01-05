<script setup lang="ts">
import Navbar from "./Navbar/index.vue";

defineOptions({
  name: "Layout",
});

const categoryStore = useCategoryStore();
const route = useRoute();
const isShowRefresh = computed(() => {
  return route.name !== "Home" && categoryStore.questionList.length > 0;
});

function refreshQuestion() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  if (categoryStore.questionList.length === 0) {
    ElMessage.error("请先配置信息");
    return;
  }
  categoryStore.randQuestion();
  ElMessage.success("题目已刷新");
}
</script>

<template>
  <div class="font-chinese antialiased">
    <div class="min-h-screen">
      <Navbar />
      <RouterView />
      <el-backtop :right="20" :bottom="50">
        <div class="i-mdi:rocket" text-red></div>
      </el-backtop>
      <div
        v-if="isShowRefresh"
        @click="refreshQuestion"
        md="right-5"
        hover="bg-white shadow-xl"
        class="fixed right-2 bottom-28 cursor-pointer p-2 rounded-full"
      >
        <div class="i-tabler:refresh w-[50px] h-[50px]" text-red></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
