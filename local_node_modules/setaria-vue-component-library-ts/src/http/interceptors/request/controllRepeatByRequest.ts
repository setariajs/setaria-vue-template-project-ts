import { requestControllRepeat } from "../controllRepeat";

export default {
  onFulfilled: (config) => {
    requestControllRepeat(config);
    return config;
  },
};
