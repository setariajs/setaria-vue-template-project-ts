import controllRepeatByRequest from "./interceptors/request/controllRepeatByRequest";

import compensateError from "./interceptors/response/compensateError";
import sessionInvalid from "./interceptors/response/sessionInvalid";
import controllRepeatByResponse from "./interceptors/response/controllRepeatByResponse";

import type { InterceptorRaw, HttpConfig } from '@setaria/setaria-ts'

const requestInterceptor: InterceptorRaw[] = [controllRepeatByRequest];

const responseInterceptor: InterceptorRaw[] = [
  controllRepeatByResponse,
  compensateError,
  sessionInvalid,
];

export const http: HttpConfig[] = [
  // 基础
  {
    instanceName: "base",
    baseURL: "/api",
  },
  // 报账单服务
  {
    instanceName: "claim",
    baseURL: "/api/claim",
    requestInterceptor,
    responseInterceptor,
  },
  // 系统配置模块
  {
    instanceName: "admin",
    baseURL: "/api/admin",
    requestInterceptor,
    responseInterceptor,
  },
];
