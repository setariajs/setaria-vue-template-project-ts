/* @flow */
import { isEmpty } from "lodash-es";

import type { Recordable } from "../types"

const tipMessage:Recordable<string> = {
  "SYSMSG-CLIENT-UNKNOWN-ERROR": "客户端出现错误，请重试或联系管理员。",
  "SYSMSG-NOT-SUPPORT-STORAGE": "当前浏览器设置不允许访问本地存储空间。",
  "SYSMSG-VALIDATION-REQUIRED": "{0}不能为空。",
  "SYSMSG-SERVICE-STATUS-400": "无效的请求。",
  "SYSMSG-SERVICE-STATUS-401": "当前请求需要用户验证。",
  "SYSMSG-SERVICE-STATUS-403": "远程服务拒绝执行。",
  "SYSMSG-SERVICE-STATUS-404": "后台服务不存在。",
  "SYSMSG-SERVICE-STATUS-405": "方法不支持。",
  "SYSMSG-SERVICE-STATUS-502": "后台服务网关错误(Bad Gateway)。",
  "SYSMSG-SERVICE-STATUS-503": "后台服务暂时无法接受请求(Service Unavailable)。",
  "SYSMSG-SERVICE-STATUS-504": "服务执行超时(Gateway Timeout)。",
  "SYSMSG-SERVICE-UNKNOWN-ERROR": "服务器内部错误，请联系管理员。",
  "SYSMSG-SERVICE-NETWORK-ERROR": "远程服务器无法连接，请联系管理员或稍后重试。",
  "SYSMSG-SERVICE-TIMEOUT": "服务未在预定时间（{0}秒）内返回结果，请联系管理员或稍后重试。",
  "SYSMSG-ROUTE-NOT-EXIST": "无法找到指定页面。",
};

export default class Message {
  id: string;
  params: Array<string | number>;
  type: string;
  message: string;
  constructor(id = "", params: Array<string | number> = [], message = "") {
    this.id = id;
    this.type = getMessageType(id);
    this.params = params;
    this.message = formatMessage(this.id, this.params);
    if (isEmpty(this.message) && !isEmpty(message)) {
      this.message = message;
    }
  }

  /**
   * 取得消息内容
   */
  getMessage(): string {
    return this.message;
  }

  toString(): string {
    return this.message;
  }
}

/**
 * 根据消息ID取得对应的消息
 */
function getMessageById(id: string): string {
  return tipMessage[id];
}

/**
 * 格式化指定消息
 */
function formatMessage(id = "", params: Array<string | number> = []) {
  const message: string = getMessageById(id);
  let ret: string = message === null || message === undefined ? "" : message;
  if (!isEmpty(ret) && !isEmpty(params)) {
    params.forEach((item: string | number, index: number) => {
      const replaceString = `{${index}}`;
      // 存在要替换的字符串的场合
      if (ret.indexOf(replaceString) !== -1) {
        const str = typeof item === "number" ? item.toString() : item;
        ret = ret.split(replaceString).join(str);
      }
    });
  }
  return ret;
}

/**
 * 根据消息ID取得对应的消息类型
 */
function getMessageType(id: string): string {
  let ret = "";
  const type = id.charAt(id.length - 1);
  switch (type) {
    case "E":
      ret = "error";
      break;
    case "W":
      ret = "warning";
      break;
    case "I":
      ret = "info";
      break;
    case "S":
      ret = "success";
      break;
    default:
      ret = "info";
  }
  return ret;
}
