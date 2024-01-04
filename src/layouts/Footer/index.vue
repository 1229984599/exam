<script setup lang="ts">
import Avatar from "~/assets/avatar.jpg";

defineOptions({
  name: "LayoutFooter",
});
</script>

<template>
  <footer
    class="sticky bottom-0 border-t border-base-100 bg-base-200 px-4 py-2 text-base-content footer footer-center"
  >
    <el-backtop :right="10" :bottom="50">
      <div class="i-mdi:rocket" text-red></div>
    </el-backtop>
    <div class="max-w-6xl w-full flex flex-row items-center gap-x-10">
      <div text="red lg" font-bold cursor-pointer>
        <router-link>语文</router-link>
      </div>
      <div text="blue-4 lg" font-bold cursor-pointer>数学</div>
    </div>
  </footer>
</template>
