"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("../utils/axios");
function useRefreshToken() {
    const refresh = async () => {
        const res = await axios_1.axiosPrivate.post('/auth/refresh-token', {
            body: {},
        });
        return res;
    };
    return refresh;
}
exports.default = useRefreshToken;
