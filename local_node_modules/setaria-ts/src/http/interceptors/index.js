"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectInterceptors = void 0;
const tslib_1 = require("tslib");
const errorHandler_1 = tslib_1.__importDefault(require("./response/errorHandler"));
const fileDownload_1 = tslib_1.__importDefault(require("./response/fileDownload"));
function getInnerInterceptors() {
    const baseIn = {
        requestInterceptor: [],
        responseInterceptor: [
            {
                onFulfilled: fileDownload_1.default,
                onRejected: errorHandler_1.default,
            },
        ],
    };
    return baseIn;
}
const injectInterceptors = (instance, instConfig) => {
    const innerInterceptors = getInnerInterceptors();
    const requestInterceptors = innerInterceptors.requestInterceptor?.concat(instConfig.requestInterceptor || []);
    const responseInterceptors = innerInterceptors.responseInterceptor?.concat(instConfig.responseInterceptor || []);
    const request = instance.interceptors.request;
    const response = instance.interceptors.response;
    requestInterceptors.forEach((interceptor) => {
        request.use.apply(request, [interceptor.onFulfilled, interceptor.onRejected]);
    });
    responseInterceptors.forEach((interceptor) => {
        response.use.apply(response, [interceptor.onFulfilled, interceptor.onRejected]);
    });
};
exports.injectInterceptors = injectInterceptors;
//# sourceMappingURL=index.js.map