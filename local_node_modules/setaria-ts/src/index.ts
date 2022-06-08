import { createApp } from "vue";
// import { setupUI } from "./ui/";
import { setupRouter } from "./router/";
import { setupStore } from "./store/";
import { setupHttp } from "./http/";
import { setupGloablErrorHandle } from "./error/";

import type { App } from "vue";
import type { ViteEnv, FrameworkConfig } from "./types/"


export class Setaria {

  config: FrameworkConfig;
  app: App<Element>

  constructor(config: FrameworkConfig, envParmas: ViteEnv) {
    // console.log("init Framework start");
    const app = createApp(config.render)

    setupStore(app);

    setupHttp(config);

    setupRouter(app, config, envParmas);

    // setupUI(app);

    setupGloablErrorHandle(app, config);


    this.config = config;
    this.app = app;

  }

  mount() {
    this.app.mount(this.config.el);
  }
}


export { http } from "./http/";
export { store } from "./store/";
export { router } from "./router/";
export { ServiceError } from "./error/ServiceError";
export { ApplicationError } from "./error/ApplicationError";
export type { ViteEnv, FrameworkConfig, HttpConfig, InterceptorRaw } from "./types/";


