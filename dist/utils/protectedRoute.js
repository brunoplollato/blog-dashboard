"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const UserContext_1 = require("../contexts/UserContext");
function ProtectedRoute({ children }) {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { user } = (0, react_1.useContext)(UserContext_1.UserContext);
    if (!user) {
        return navigate('/');
    }
    return children;
}
exports.default = ProtectedRoute;
