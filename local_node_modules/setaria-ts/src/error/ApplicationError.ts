import { isEmpty } from "lodash-es";
import AbstractError from "./AbstractError";
import Message from "./Message";

export const ERROR_PREFIX = "Setaria Error";
export const ERROR_MSG_SPLICER = ":";

export  class ApplicationError extends AbstractError {
  // 前端定义消息messageCode
  messageCode?: string;
  // message中的占位数据
  // params: Array<string | number>;
  detail?: Object;
  constructor(messageCode = "", message = "", extendsData?: Object) {
    let msg: string = message;
    if (!isEmpty(messageCode) && isEmpty(msg)) {
      msg =
        new Message(messageCode, [], msg).getMessage() ||
        new Message("SYSMSG-CLIENT-UNKNOWN-ERROR").getMessage();
    }
    // 从window.onerror只能取得字符串类型的错误信息
    super(messageCode, msg, "ApplicationError");
    this.messageCode = messageCode;
    this.detail = extendsData;
    // this.params = params;
  }
}
