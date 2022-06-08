import errorHandler from "./response/errorHandler";
import fileDownload from "./response/fileDownload";
import type { AxiosInstance } from "axios";

import type { HttpConfig,InterceptorRaw } from "../../types"



function getInnerInterceptors(): HttpConfig {
  const baseIn: HttpConfig = {
    requestInterceptor: [],
    responseInterceptor: [
      {
        onFulfilled: fileDownload,
        onRejected: errorHandler,
      },
    ],
  };
  return baseIn;
}

export const injectInterceptors = (instance: AxiosInstance, instConfig: HttpConfig) => {
  const innerInterceptors: HttpConfig = getInnerInterceptors();

  // const requestInterceptors: InterceptorRaw[] = [
  //   ...innerInterceptors.requestInterceptor,
  //   ...(instConfig.requestInterceptor || []),
  // ];

  // const responseInterceptors: InterceptorRaw[] = [
  //   ...innerInterceptors.responseInterceptor,
  //   ...(instConfig.responseInterceptor || []),
  // ];

  const requestInterceptors: InterceptorRaw[] = innerInterceptors.requestInterceptor?.concat(
    instConfig.requestInterceptor || [],
  ) as InterceptorRaw[];

  const responseInterceptors: InterceptorRaw[] = innerInterceptors.responseInterceptor?.concat(
    instConfig.responseInterceptor || [],
  ) as InterceptorRaw[];

  const request = instance.interceptors.request;
  const response = instance.interceptors.response;

  requestInterceptors.forEach((interceptor) => {
    request.use.apply(request, [interceptor.onFulfilled as any, interceptor.onRejected as any]);
  });

  responseInterceptors.forEach((interceptor) => {
    response.use.apply(response, [interceptor.onFulfilled  as any, interceptor.onRejected as any]);
  });
};
