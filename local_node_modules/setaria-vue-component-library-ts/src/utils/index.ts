// import type { ViteEnv } from '@setaria/setaria-ts'

// 环境变量
// export const getEnvParams = (): ViteEnv => {
//   return import.meta.env;
// };

/**
 * @public
 * @function
 * @todo 获取Cookie
 * @memberof Cain
 * @param {String} name Cookie key
 */
export function getCookie(name) {
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  const arr = document.cookie.match(reg);
  if (arr) return unescape(arr[2]);
  return null;
}

/**
 * @public
 * @function
 * @todo 设置Cookie
 * @memberof Cain
 * @param name cookie的名称
 * @param value cookie的值
 * @param day cookie的过期时间
 */
export function setCookie(name, value, day) {
  if (day !== 0) {
    // 当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
    const expires = day * 24 * 60 * 60 * 1000;
    const date = new Date(+new Date() + expires);

    document.cookie = `${name}=${escape(value)};expires=${date.toUTCString()}`;
  } else {
    document.cookie = `${name}=${escape(value)}`;
  }
}
/**
 * @public
 * @function
 * @todo 获取Cookie
 * @memberof Cain
 * @param name cookie的名称
 */
export function removeCookie(name) {
  document.cookie = `${name}=` + ";path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT";
}

/**
 * @function getUUID
 * @memberof Cain
 * @public
 * @todo 生成UUID
 */
export function getUUID() {
  const random4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };

  return `${
    random4() + random4()
  }-${random4()}-${random4()}-${random4()}-${random4()}${random4()}${random4()}`;
}
