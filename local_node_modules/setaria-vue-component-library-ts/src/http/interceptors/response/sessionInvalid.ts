import { ServiceError } from "@setaria/setaria-ts";
import { removeCookie, getCookie, } from "@/utils/";

import { getEnvParams } from "@/utils/envParams";

function gotoLoginPage() {
  const envParams = getEnvParams();
  if (getCookie("login_from") === "inner") {
    window.location.replace(`${envParams.VITE_APP_SSO_BASE_URL}`);
  } else {
    window.location.replace(`/${envParams.VITE_APP_SITE_ID}/#/login`);
  }
}

export default {
  onRejected: (res) => {
    const { errorMessage, errorCode } = res;

    if (errorCode === 999) {
      // 异常登录 token 过期处理
      removeCookie("gid");
      gotoLoginPage();

      throw new ServiceError(errorCode, errorMessage);
    } else if (errorCode) {
      throw new ServiceError(errorCode, errorMessage || "未知错误");
    }
    return res;
  },
};
