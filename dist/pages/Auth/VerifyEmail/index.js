"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Header_1 = __importDefault(require("../../../components/Header"));
const EmailVerified_1 = __importDefault(require("../../../components/EmailVerified"));
const react_1 = require("react");
const useAuth_1 = __importDefault(require("../../../hooks/useAuth"));
function EmailVerify() {
    const { id } = (0, react_router_dom_1.useParams)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { verifyUser } = (0, useAuth_1.default)();
    (0, react_1.useEffect)(() => {
        const sendVerification = async () => {
            await verifyUser(id);
            navigate('/dashboard');
        };
        sendVerification();
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { className: "bg-login flex items-center justify-center w-full", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col bg-white px-20 pt-10 pb-20 mt-10 rounded-xl drop-shadow-md", children: [(0, jsx_runtime_1.jsx)(Header_1.default, { heading: "Email Verified", paragraph: "You can now enjoy ", linkName: "full access!", linkUrl: "/" }), (0, jsx_runtime_1.jsx)(EmailVerified_1.default, {})] }) }));
}
exports.default = EmailVerify;
