import { App } from "vue";

import { ERROR_THROW_TYPES } from "../enums";

import { ServiceError } from "./ServiceError";

import { ApplicationError } from "./ApplicationError";

import type { Nullable, FrameworkConfig } from "../types"


let globalConfig: Nullable<FrameworkConfig> = null;

function parseApplicationError(error: string | Object | Error | PromiseRejectionEvent) {
  let ret: Nullable<ApplicationError> = null;
  if (error === undefined || error === null) {
    ret = new ApplicationError("SYSMSG-CLIENT-UNKNOWN-ERROR");
  } else if (error instanceof ServiceError || error instanceof ApplicationError) {
    ret = error;
  } else if (error instanceof Error) {
    const code = "";
    let message = error.message;
    // 删除浏览器添加的错误信息前缀
    // firefox
    if (message.indexOf("Error: ") === 0) {
      message = message.replace("Error: ", "");
      // chrome, safari
    } else if (message.indexOf("Uncaught Error: ") === 0) {
      message = message.replace("Uncaught Error: ", "");
      // chrome
    } else if (message.indexOf("Uncaught TypeError: ") === 0) {
      message = message.replace("Uncaught TypeError: ", "");
    }

    ret = new ApplicationError(code, message);
  } else {
    ret = new ApplicationError("SYSMSG-CLIENT-UNKNOWN-ERROR");
  }

  return ret;
}

function processHandleError(type: number, error: string | Object | Error | PromiseRejectionEvent) {
  console.error(error);

  // if (type === ERROR_THROW_TYPES.VUE_ERROR) {
  //   const realError: Error = error as Error;
  //   console.log(realError.message);

  //   realError.message;
  // }

  if (globalConfig?.errorHandler) {
    globalConfig.errorHandler(type, parseApplicationError(error));
  }
}

function vueErrorHandler(err: any): void {
  processHandleError(ERROR_THROW_TYPES.VUE_ERROR, err);
}

function scriptErrorHandler(event: Event | string) {
  processHandleError(ERROR_THROW_TYPES.NORMAL_ERROR, event);
}

function registerPromiseErrorHandler() {
  window.addEventListener(
    "unhandledrejection",
    function (err) {
      processHandleError(ERROR_THROW_TYPES.PROMISE_UNREJECT_ERROR, err);
    },
    true,
  );
}

export const setupGloablErrorHandle = (app: App, config: FrameworkConfig) => {
  globalConfig = config;

  app.config.errorHandler = vueErrorHandler;

  window.onerror = scriptErrorHandler;

  registerPromiseErrorHandler();

  // window.addEventListener(
  //   "error",
  //   function (event: Event) {
  //     processHandleError(ERROR_THROW_TYPES.NORMAL_ERROR, event);
  //   },
  //   true,
  // );
};
