import type { RouteRecordRaw } from "vue-router";

const modules = import.meta.globEager("./modules/**/*.ts");

export const routes: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routes.push(...modList);
});
