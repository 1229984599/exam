import type { RouteLocationNormalized, RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import { basicRoutes } from "./routes";
import NProgress from "~/config/nprogress";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  // When switching pages, scroll to the top
  // 当切换页面，滚动到最顶部
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// Injection Progress
router.beforeEach((to: RouteLocationNormalized, _from, next) => {
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
  const categoryStore = useCategoryStore();
  const { title, subject, grade } = categoryStore.config;
  // debugger;
  if (title && subject && grade) {
    if (to.name === "Home") {
      next({ name: "Question" });
      return;
    }
    next();
  } else {
    if (to.name === "Home") {
      next();
      return;
    }
    ElMessage.error("请先配置信息");
    next({ name: "Home" });
  }
});

router.afterEach(() => {
  NProgress.done();
});
