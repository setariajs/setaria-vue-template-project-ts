import type { RouteRecordRaw } from "vue-router";
import HelloWould from "@/components/HelloWorld.vue";
console.log(HelloWould);

import { LAYOUT } from "../../constant";
const MODULE_BASE_URL = "demo1";
const route: RouteRecordRaw = {
  path: `/${MODULE_BASE_URL}`,
  name: MODULE_BASE_URL,
  meta: { title: "测试", category: true },
  component: LAYOUT,

  children: [
    {
      path: "test1",
      name: "test1",
      meta: {
        title: "test1",
      },
      component: () => import("@/pages/page1.vue"),
    },
    {
      path: "test2",
      name: "test2",
      meta: {
        title: "test2",
      },
      component: () => import("@/pages/page2.vue"),
    },
  ],
};

export default route;
