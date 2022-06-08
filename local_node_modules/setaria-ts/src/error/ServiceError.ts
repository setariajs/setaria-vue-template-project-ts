/* @flow */
// import { isFirefox } from "../util/dom";
// import { isEmpty, pathOr } from "../util/lang";
import AbstractError from "./AbstractError";
import Message from "./Message";

import { isEmpty } from "lodash-es";

import type { Nullable } from "../types"

export class ServiceError extends AbstractError {
  // Convenient for back-end Troubleshooting: unique request ID
  detail?: Object;
  constructor(errorCode?: string, errorMessage?: Nullable<string>, extendsData?: Object) {
    let msg = errorMessage;
    // 系统自定义消息
    if (
      errorCode &&
      typeof errorCode === "string" &&
      isEmpty(errorMessage) &&
      errorCode.indexOf("SYSMSG") === 0
    ) {
      msg = new Message(errorCode).getMessage();
      if (isEmpty(msg)) {
        errorCode = "";
        msg = new Message("SYSMSG-SERVICE-UNKNOWN-ERROR").getMessage();
      }
    }
    super(errorCode, msg, "ServiceError");
    this.detail = extendsData;
    // this.traceId = traceId;
    // this.oddNumber = oddNumber;
    // // 在Firefox下只要不是已经明确设置不显示异常，否则抛出'unhandledrejection'事件
    // if (isFirefox() && pathOr(true, ["config", "isShowError"], reason) !== false) {
    //   dispatchUnHandlerRejectEvent(this);
    // }
  }
}
