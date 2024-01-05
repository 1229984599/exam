const home = [
  {
    path: "/",
    name: "Home",
    component: () => import("~/pages/index.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/question",
    name: "Question",
    component: () => import("~/pages/question/index.vue"),
    meta: {
      title: "Question",
    },
  },
];

export default home;
