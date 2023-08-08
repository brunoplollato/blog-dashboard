"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const axios_1 = require("../utils/axios");
function useTag() {
    const [error, setError] = (0, react_1.useState)(null);
    const createTag = async (data) => {
        const { name } = data;
        const endpoint = 'api/tags';
        return await axios_1.axiosPrivate
            .post(endpoint, {
            name,
        })
            .catch((err) => {
            setError(err.response.data);
        });
    };
    const getTags = async () => {
        const endpoint = 'api/tags';
        return await axios_1.axiosPrivate.get(endpoint).catch((err) => {
            setError(err.response.data);
        });
    };
    return {
        createTag,
        getTags,
        error,
    };
}
exports.default = useTag;
