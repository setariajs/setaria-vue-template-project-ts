
// import type { AxiosRequestConfig, AxiosResponse } from "axios";


export type Nullable<T> = T | null;
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


// export interface CustomAxiosRequestConfig extends AxiosRequestConfig {

//   isControllRepeat: Boolean

// }


// export interface CustomAxiosResponse extends AxiosResponse {
//   config: CustomAxiosRequestConfig
// }