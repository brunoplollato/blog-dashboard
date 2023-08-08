"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const axios_1 = require("../utils/axios");
function useCategory() {
    const [error, setError] = (0, react_1.useState)(null);
    const createCategory = async (data) => {
        const { name } = data;
        const endpoint = 'api/categories';
        return await axios_1.axiosPrivate
            .post(endpoint, {
            name,
        })
            .catch((err) => {
            setError(err.response.data);
        });
    };
    const getCategories = async () => {
        const endpoint = 'api/categories';
        return await axios_1.axiosPrivate.get(endpoint).catch((err) => {
            setError(err.response.data);
        });
    };
    return {
        createCategory,
        getCategories,
        error,
    };
}
exports.default = useCategory;
