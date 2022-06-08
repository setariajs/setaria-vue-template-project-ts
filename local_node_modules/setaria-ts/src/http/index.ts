import { injectInterceptors } from "./interceptors";
import axios from "axios";
import type { Recordable,HttpConfig,FrameworkConfig } from "../types"



export const http: Recordable<any> = {};

function initInstances(httpConfig: HttpConfig[]) {
  httpConfig.forEach((instConfig: HttpConfig) => {
    // 创建axios实例

    const instance = axios.create(instConfig);

    injectInterceptors(instance, instConfig);
    http[instConfig.instanceName as string] = instance;
  });
}

export const setupHttp = function (config: FrameworkConfig) {
  initInstances(config.http);
  // console.log(http);
  // initInterceptors();
};
