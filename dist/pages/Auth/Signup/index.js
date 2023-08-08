"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Header_1 = __importDefault(require("../../../components/Header"));
const Signup_1 = __importDefault(require("../../../components/Signup"));
const react_1 = require("react");
const UserContext_1 = require("../../../contexts/UserContext");
function SignupPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { user } = (0, react_1.useContext)(UserContext_1.UserContext);
    (0, react_1.useEffect)(() => {
        if (user)
            navigate('/dashboard/posts');
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: "bg-login flex items-center justify-center w-full", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col bg-white px-20 pt-10 pb-20 mt-10 rounded-xl drop-shadow-md", children: [(0, jsx_runtime_1.jsx)(Header_1.default, { heading: "Signup", paragraph: "Already have an account? ", linkName: "Login", linkUrl: "/" }), (0, jsx_runtime_1.jsx)(Signup_1.default, {})] }) }));
}
exports.default = SignupPage;
