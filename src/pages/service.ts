import { http } from "@setaria/setaria-ts";

export const getDataList = (p) => {
  return http.admin.post("sys-user/pageByCondition", p);
};

export const getDataListMany = (p) => {
  return http.admin.post("sys-user/pageByCondition", p, {
    isControllRepeat: true,
  });
};

export const testDownload = () => {
  return http.admin.post(
    "/sys-user/exportSysUser",
    {},
    {
      // reponseType: 'blob',
      responseType: "arraybuffer",
    },
  );
};

export const test404ErrorData = () => {
  return http.admin.post(
    "/sys-billing-info2/save?compId=7&coSegCode=E7&customerName=%E5%BB%B6%E5%90%89%E5%B8%82%E8%BF%9B%E5%8F%A3%E5%AE%B6%E7%94%B5%E7%BB%B4%E4%BF%AE%E4%B8%AD%E5%BF%83&taxNum=1&address=2&phone=3&accountName=4&accountNum=5&status=1&compName=%E6%9D%BE%E4%B8%8B%E5%AE%B6%E7%94%B5%EF%BC%88%E4%B8%AD%E5%9B%BD%EF%BC%89%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&coSeg=%E4%B8%8A%E6%B5%B7%E5%AE%B6%E7%94%B5&sob=3021&customerNo=77985338",
  );
  // return http.claim.post("/myClaim/findHomeDataCnt222");
};

export const test500ErrorData = () => {
  return http.admin.post(
    "/sys-billing-info/save?compId=7&coSegCode=E7&customerName=%E5%BB%B6%E5%90%89%E5%B8%82%E8%BF%9B%E5%8F%A3%E5%AE%B6%E7%94%B5%E7%BB%B4%E4%BF%AE%E4%B8%AD%E5%BF%83&taxNum=1&address=2&phone=3&accountName=4&accountNum=5&status=1&compName=%E6%9D%BE%E4%B8%8B%E5%AE%B6%E7%94%B5%EF%BC%88%E4%B8%AD%E5%9B%BD%EF%BC%89%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&coSeg=%E4%B8%8A%E6%B5%B7%E5%AE%B6%E7%94%B5&sob=3021&customerNo=77985338",
  );
};
