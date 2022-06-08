import type { RouteRecordRaw } from "vue-router";

import { LAYOUT } from "../../constant";
const MODULE_BASE_URL = "demo2";
const route: RouteRecordRaw = {
  path: `/${MODULE_BASE_URL}`,
  name: MODULE_BASE_URL,
  meta: { title: "测试", category: true },
  component: LAYOUT,

  children: [
    {
      path: "test3",
      name: "test3",
      meta: {
        title: "test3",
      },
      component: () => import("@/pages/page3.vue"),
    },
  ],
};

export default route;
