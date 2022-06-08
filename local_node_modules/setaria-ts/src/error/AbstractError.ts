import { ERROR_PREFIX } from "../enums";
function encodeErrorMessage(prefix: any, code: any, message: any) {
  return `${prefix}[${code}]:${message}`;
}

import type { Nullable } from "../types"

export default class AbstractError extends Error {
  _name: string;
  type: string;
  errorCode: String;
  errorMessage?: Nullable<string>;
  // error display type： 0 silent; 1 message.warn; 2 message.error; 4 notification; 9 page
  // showType: number;
  constructor(errorCode = "", errorMessage: Nullable<string> = "", className = "") {
    const encodeMessage = encodeErrorMessage(ERROR_PREFIX, errorCode, errorMessage);

    super(encodeMessage);
    this._name = className || "AbstractError";
    this.type = "error";
    // this.showType = showType;
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
  }
}
