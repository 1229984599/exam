<script setup lang="ts">
import ThemeChange from "./components/ThemeChange/index.vue";

defineOptions({
  name: "Navbar",
});
</script>

<template>
  <div
    class="sticky top-0 z-30 h-16 w-full flex justify-center text-base-content opacity-90 backdrop-blur transition-all duration-100"
  >
    <nav class="w-full navbar">
      <div class="flex flex-1 lg:gap-2 md:gap-1">
        <RouterLink
          to="/"
          aria-current="page"
          aria-label="Homepage"
          class="px-2 btn btn-ghost"
        >
          <div class="avatar">
            <div class="w-8 rounded-full">
              <img src="/title.ico" />
            </div>
          </div>
          <div
            class="inline-flex text-xl text-primary transition-all duration-200 md:text-3xl"
          >
            <span class="text-accent">红旗小学无纸化测试</span>
          </div>
        </RouterLink>
      </div>
      <div>
        <ThemeChange data-theme="emerald" />
      </div>
    </nav>
  </div>
</template>
