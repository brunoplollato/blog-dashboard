"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosPrivate = exports.axiosInstance = void 0;
const axios_1 = __importDefault(require("axios"));
const environments_1 = require("../environments");
const react_router_dom_1 = require("react-router-dom");
exports.axiosInstance = axios_1.default.create({
    baseURL: environments_1.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
exports.axiosPrivate = axios_1.default.create({
    baseURL: environments_1.BASE_URL,
});
exports.axiosPrivate.interceptors.request.use(async (config) => {
    const { access_token } = JSON.parse(localStorage.getItem('tokens'));
    config.headers = {
        Authorization: `Bearer ${access_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };
    return config;
}, (error) => {
    Promise.reject(error);
});
exports.axiosPrivate.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const { refresh_token } = JSON.parse(localStorage.getItem('tokens'));
        const { data } = await exports.axiosInstance.post(`${environments_1.BASE_URL}/auth/refresh-token`, {
            data: {
                refreshToken: refresh_token,
            },
        });
        axios_1.default.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
        localStorage.setItem('tokens', JSON.stringify({
            access_token: data.data.accessToken,
            refresh_token: data.data.refreshToken,
        }));
        return (0, exports.axiosPrivate)(originalRequest);
    }
    if (error.response.status !== 200 && error.response.status !== 401)
        return Promise.reject(error.response.data);
    const navigate = (0, react_router_dom_1.useNavigate)();
    navigate('/');
    return Promise.reject(error.response.data.message);
});
