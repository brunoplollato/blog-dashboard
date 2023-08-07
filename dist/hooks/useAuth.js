"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const react_1 = require("react");
const axios_1 = require("../utils/axios");
const UserContext_1 = require("../contexts/UserContext");
const react_toastify_1 = require("react-toastify");
function useAuth() {
    const [error, setError] = (0, react_1.useState)(null);
    const { setUser, setLoading } = (0, react_1.useContext)(UserContext_1.UserDispatchContext);
    //login user
    const loginUser = async (data) => {
        setLoading(true);
        const { email, password } = data;
        const endpoint = 'auth/login';
        return axios_1.axiosInstance
            .post(endpoint, {
            email,
            password,
        })
            .then(async ({ data }) => {
            const { payload } = (0, jwt_decode_1.default)(data.data.accessToken);
            setUser(payload);
            localStorage.setItem('tokens', JSON.stringify({
                access_token: data.data.accessToken,
                refresh_token: data.data.refreshToken,
            }));
            setLoading(false);
        })
            .catch((err) => {
            setError(err.response.data);
            setLoading(false);
        });
    };
    //login user using google or github
    const loginUserProvider = async (provider) => {
        setLoading(true);
        const endpoint = `auth/${provider}`;
        return axios_1.axiosInstance
            .get(endpoint)
            .then(async ({ data }) => {
            setUser(data.data);
            setLoading(false);
        })
            .catch((err) => {
            setError(err.response.data);
            setLoading(false);
        });
    };
    //register user
    const registerUser = async (data) => {
        setLoading(true);
        const { name, email, password, confirmPassword } = data;
        const endpoint = 'auth/register';
        return axios_1.axiosInstance
            .post(endpoint, {
            name,
            email,
            password,
            confirmPassword,
        })
            .then(async ({ data }) => {
            setUser(data.data);
            localStorage.setItem('tokens', JSON.stringify({
                access_token: data.data.accessToken,
                refresh_token: data.data.refreshToken,
            }));
            react_toastify_1.toast.info('A verification email has been sent');
            setLoading(false);
        })
            .catch((err) => {
            react_toastify_1.toast.error(err.response.data.message);
            setError(err.response.data);
            setLoading(false);
        });
    };
    const verifyUser = async (token) => {
        setLoading(true);
        const endpoint = `auth/verify-email?token=${token}`;
        return await axios_1.axiosInstance
            .get(endpoint)
            .then(({ data }) => {
            setUser(data.data);
            localStorage.setItem('tokens', JSON.stringify({
                access_token: data.data.accessToken,
                refresh_token: data.data.refreshToken,
            }));
            react_toastify_1.toast.success('Email verified');
            setLoading(false);
        })
            .catch((err) => {
            react_toastify_1.toast.error(err.response.data.message);
            setError(err.response.data);
            setLoading(false);
        });
    };
    const logoutUser = () => {
        setUser(null);
        localStorage.setItem('tokens', JSON.stringify({
            access_token: '',
            refresh_token: '',
        }));
    };
    return {
        loginUser,
        loginUserProvider,
        verifyUser,
        logoutUser,
        registerUser,
        error,
    };
}
exports.default = useAuth;
