// export const ERROR_MSG_SPLICER = "_$:$_";

export const ERROR_PREFIX = "Setaria Error";

export enum ERROR_THROW_TYPES {
  // 非Vue组件的常规错误
  NORMAL_ERROR = 0,
  // Promise回调函数中的错误
  PROMISE_UNREJECT_ERROR = 1,
  // Vue错误
  VUE_ERROR = 2,
}
