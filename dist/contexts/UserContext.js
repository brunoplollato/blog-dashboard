"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDispatchContext = exports.UserContext = exports.UserProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const UserContext = (0, react_1.createContext)(undefined);
exports.UserContext = UserContext;
const UserDispatchContext = (0, react_1.createContext)(undefined);
exports.UserDispatchContext = UserDispatchContext;
function UserProvider({ children }) {
    const [user, setUser] = (0, react_1.useState)(null);
    const [isLoading, setLoading] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        setLoading(true);
        const { access_token } = JSON.parse(localStorage.getItem('tokens') || '');
        if (!!(access_token === null || access_token === void 0 ? void 0 : access_token.length)) {
            const { user } = (0, jwt_decode_1.default)(access_token);
            setUser(user);
            setLoading(false);
        }
    }, []);
    return ((0, jsx_runtime_1.jsx)(UserContext.Provider, { value: { user, isLoading }, children: (0, jsx_runtime_1.jsx)(UserDispatchContext.Provider, { value: { setUser, setLoading }, children: children }) }));
}
exports.UserProvider = UserProvider;
