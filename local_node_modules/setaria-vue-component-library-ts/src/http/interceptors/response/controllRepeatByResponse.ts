import { responseControllRepeat, errorControllRepeat } from "../controllRepeat";
import axios from "axios";

export default {
  onFulfilled: (res) => {
    responseControllRepeat(res);
    return res;
  },
  onRejected: (res) => {
    return new Promise((_resolve, reject) => {
      if (res.detail instanceof axios.Cancel) {
        errorControllRepeat(res, reject);
        return;
      }
      // return res;
      reject(res);
    });
  },
};
