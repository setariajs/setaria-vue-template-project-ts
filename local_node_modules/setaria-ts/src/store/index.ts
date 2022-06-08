import type { App } from "vue";
import { createPinia } from "pinia";
import type { Pinia } from "pinia";

export const store: Pinia = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}
