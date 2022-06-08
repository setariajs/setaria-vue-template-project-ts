import {
  Router,
  createRouter as createGlobalRouter,
  createWebHistory,
  createWebHashHistory,
  RouterHistory,
} from "vue-router";
import type { ViteEnv, FrameworkConfig } from "../types"

import type { App } from "vue";

// 获取路由历史模式 https://next.router.vuejs.org/zh/guide/essentials/history-mode.html
function getHistoryMode(envParmas: ViteEnv): RouterHistory {
  const routerHistory = envParmas?.VITE_ROUTER_HISTORY || "hash";
  // .VITE_ROUTER_HISTORY
  // if (routerHistory === "hash") {
  //   return createWebHashHistory("");
  // } else
  if (routerHistory === "h5") {
    return createWebHistory("");
  }
  return createWebHashHistory("");
}

// 创建路由实例
export let router: Router;

function createRouter(config: FrameworkConfig, envParmas: ViteEnv) {
  router = createGlobalRouter({
    history: getHistoryMode(envParmas),
    routes: config?.routes || [],
    strict: true,
    scrollBehavior(_to, _from, savedPosition) {
      return new Promise((resolve) => {
        if (savedPosition) {
          resolve(savedPosition);
        } else {
          resolve({ left: 0, top: 0 });
        }
      });
    },
  });
}

export const setupRouter = function (app: App, config: FrameworkConfig, envParmas: ViteEnv) {
  createRouter(config, envParmas);
  app.use(router);
  return router.isReady();
};
