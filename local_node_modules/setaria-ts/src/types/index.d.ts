import type { RouteRecordRaw } from "vue-router";
import type { AxiosRequestConfig } from "axios";


export interface ViteEnv {
  VITE_PORT: number;
  VITE_PUBLIC_PATH: string;
  VITE_LEGACY: boolean;
  VITE_ROUTER_HISTORY: string;
  VITE_APP_SSO_BASE_URL: string;
  VITE_APP_SITE_ID: string;
}


// 框架初始化配置信息
export interface FrameworkConfig {
  el: string;
  render: any;
  routes: Nullable<RouteRecordRaw[]>;
  http: HttpConfig[];
  errorHandler: Function;
}


export interface HttpConfig extends AxiosRequestConfig {
  instanceName?: string;
  requestInterceptor?: Array<InterceptorRaw>;
  responseInterceptor?: Array<InterceptorRaw>;
}

export interface InterceptorRaw {
  onFulfilled?: Function;
  onRejected?: Function;
}


export type Nullable<T> = T | null;
// type NonNullable<T> = T extends null | undefined ? never : T;
export type Recordable<T = any> = Record<string, T>;
export type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T;
};
export type Indexable<T = any> = {
  [key: string]: T;
};
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};