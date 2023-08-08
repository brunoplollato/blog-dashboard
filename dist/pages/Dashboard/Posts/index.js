"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const usePost_1 = __importDefault(require("../../../hooks/usePost"));
const react_table_1 = require("@tanstack/react-table");
const fi_1 = require("react-icons/fi");
const react_toastify_1 = require("react-toastify");
const react_query_1 = require("@tanstack/react-query");
const fa_1 = require("react-icons/fa");
const match_sorter_utils_1 = require("@tanstack/match-sorter-utils");
const DebounceInput_1 = __importDefault(require("../../../components/DebounceInput"));
const IndeterminateCheckbox_1 = __importDefault(require("../../../components/IndeterminateCheckbox"));
const react_router_dom_1 = require("react-router-dom");
const Breadcrumb_1 = __importDefault(require("../../../components/Breadcrumb"));
const ConfirmationModal_1 = __importDefault(require("../../../components/ConfirmationModal"));
function Posts() {
    var _a, _b, _c, _d, _e;
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { getPosts, publishPost, deletePost } = (0, usePost_1.default)();
    const [sorting, setSorting] = (0, react_1.useState)([]);
    const [rowSelection, setRowSelection] = (0, react_1.useState)({});
    const [globalFilter, setGlobalFilter] = (0, react_1.useState)('');
    const [modal, setModal] = (0, react_1.useState)({
        text: '',
        error: false,
        show: false,
    });
    const [{ pageIndex, pageSize }, setPagination] = (0, react_1.useState)({
        pageIndex: 0,
        pageSize: 10,
    });
    const fetchDataOptions = {
        pageIndex,
        pageSize,
    };
    const dataQuery = (0, react_query_1.useQuery)(['data', fetchDataOptions], () => getPosts(fetchDataOptions), { keepPreviousData: true });
    const handlePublish = (id) => {
        const onConfirm = async () => {
            const res = await publishPost(id);
            dataQuery.refetch();
            setModal({
                text: '',
                show: false,
                error: false,
            });
            return res.status ? react_toastify_1.toast.success(res.message) : react_toastify_1.toast.error(res.message);
        };
        setModal({
            text: `Are you sure you want to publish this item?`,
            show: true,
            onConfirm: onConfirm,
        });
    };
    const handleDelete = (id) => {
        const onConfirm = async () => {
            const res = await deletePost(id);
            dataQuery.refetch();
            setModal({
                text: '',
                show: false,
            });
            return res.status ? react_toastify_1.toast.success(res.message) : react_toastify_1.toast.error(res.message);
        };
        setModal({
            text: `Are you sure you want to delete this item?`,
            error: true,
            show: true,
            onConfirm: onConfirm,
        });
    };
    const defaultData = (0, react_1.useMemo)(() => [], []);
    const pagination = (0, react_1.useMemo)(() => ({
        pageIndex,
        pageSize,
    }), [pageIndex, pageSize]);
    const columnHelper = (0, react_table_1.createColumnHelper)();
    const columns = (0, react_1.useMemo)(() => [
        {
            id: 'select',
            header: ({ table }) => ((0, jsx_runtime_1.jsx)(IndeterminateCheckbox_1.default, { checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: table.getToggleAllRowsSelectedHandler() })),
            cell: ({ row }) => ((0, jsx_runtime_1.jsx)("div", { className: "px-1", children: (0, jsx_runtime_1.jsx)(IndeterminateCheckbox_1.default, { checked: row.getIsSelected(),
                    disabled: !row.getCanSelect(),
                    indeterminate: row.getIsSomeSelected(),
                    onChange: row.getToggleSelectedHandler() }) })),
        },
        columnHelper.accessor('title', {
            header: 'Title',
            cell: (info) => info === null || info === void 0 ? void 0 : info.row.original.title,
        }),
        columnHelper.accessor('author', {
            header: 'Author',
            cell: (info) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-center gap-2", children: [info.row.original.author.avatar ? ((0, jsx_runtime_1.jsx)("img", { src: info.row.original.author.avatar, alt: info.row.original.author.name, className: "rounded-full h-8 w-8" })) : ((0, jsx_runtime_1.jsx)("p", { className: "h-8 w-8 bg-indigo-400 text-white rounded-full flex items-center justify-center", children: info.row.original.author.name.split('')[0] })), (0, jsx_runtime_1.jsx)("p", { children: info.row.original.author.name })] })),
        }),
        columnHelper.accessor('categories', {
            header: 'Categories',
            cell: (info) => info.row.original.categories.map((category, i) => ((0, jsx_runtime_1.jsx)("span", { className: "bg-blue-500 text-white rounded-full px-2 py-1/2", children: category }, i))),
        }),
        columnHelper.accessor('tags', {
            header: 'Tags',
            cell: (info) => info.row.original.tags.map((tag, i) => ((0, jsx_runtime_1.jsx)("span", { className: "bg-yellow-500 text-white rounded-full px-2 py-1/2", children: tag }, i))),
        }),
        columnHelper.accessor('created_at', {
            header: 'Created At',
            cell: (info) => {
                const createdAt = new Date(info.row.original.created_at);
                const formattedDate = createdAt.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                });
                return formattedDate;
            },
        }),
        columnHelper.accessor('published', {
            header: 'Published',
            cell: (info) => {
                if (info.row.original.published) {
                    return ((0, jsx_runtime_1.jsx)(fi_1.FiCheck, { className: "bg-green-500 h-6 w-6 p-1 rounded-full text-white" }));
                }
                else {
                    return ((0, jsx_runtime_1.jsx)(fi_1.FiX, { className: "bg-red-500 h-6 w-6 p-1 rounded-full text-white" }));
                }
            },
        }),
        columnHelper.accessor('actions', {
            header: '',
            cell: (info) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex gap-5", children: [(0, jsx_runtime_1.jsx)("button", { type: "button", className: "", onClick: () => navigate(`/dashboard/posts/edit/${info.row.original.id}`), title: "Edit", children: (0, jsx_runtime_1.jsx)(fi_1.FiEdit, { className: "h-4 w-4" }) }), (0, jsx_runtime_1.jsx)("button", { type: "button", className: "", onClick: () => handleDelete(info.row.original.id), title: "Delete", children: (0, jsx_runtime_1.jsx)(fi_1.FiTrash2, { className: "h-4 w-4" }) }), !info.row.original.published && ((0, jsx_runtime_1.jsx)("button", { type: "button", className: "", onClick: () => handlePublish(info.row.original.id), title: "Publish", children: (0, jsx_runtime_1.jsx)(fi_1.FiSend, { className: "h-4 w-4" }) }))] })),
        }),
    ], []);
    const fuzzyFilter = (row, columnId, value, addMeta) => {
        // Rank the item
        const itemRank = columnId === 'author'
            ? (0, match_sorter_utils_1.rankItem)(row.getValue(columnId).name, value)
            : (0, match_sorter_utils_1.rankItem)(row.getValue(columnId), value);
        // Store the itemRank info
        addMeta({
            itemRank,
        });
        // Return if the item should be filtered in/out
        return itemRank.passed;
    };
    const table = (0, react_table_1.useReactTable)({
        data: (_b = (_a = dataQuery.data) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : defaultData,
        columns,
        pageCount: (_d = (_c = dataQuery.data) === null || _c === void 0 ? void 0 : _c.pageInfo.totalPages) !== null && _d !== void 0 ? _d : -1,
        filterFns: {
            fuzzy: fuzzyFilter,
        },
        state: {
            sorting,
            pagination,
            globalFilter,
            rowSelection,
        },
        enableRowSelection: true,
        onPaginationChange: setPagination,
        onSortingChange: setSorting,
        onRowSelectionChange: setRowSelection,
        globalFilterFn: fuzzyFilter,
        getFilteredRowModel: (0, react_table_1.getFilteredRowModel)(),
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)(),
        getFacetedRowModel: (0, react_table_1.getFacetedRowModel)(),
        getFacetedUniqueValues: (0, react_table_1.getFacetedUniqueValues)(),
        getFacetedMinMaxValues: (0, react_table_1.getFacetedMinMaxValues)(),
        manualPagination: true,
        debugTable: false,
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full flex flex-col p-5 bg-gray-300", children: [(0, jsx_runtime_1.jsx)(Breadcrumb_1.default, { items: [
                    { text: 'home', link: '/dashboard' },
                    { text: 'posts', link: '/dashboard/posts' },
                    { text: 'all posts', link: '' },
                ] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-xl font-bold mb-5", children: "Posts" }), (0, jsx_runtime_1.jsx)("div", { className: "flex gap-5 h-full", children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-5 w-full", children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-white border rounded-md p-4 border-slate-300 drop-shadow-sm h-full", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between gap-5", children: [(0, jsx_runtime_1.jsx)(DebounceInput_1.default, { value: globalFilter !== null && globalFilter !== void 0 ? globalFilter : '', onChange: (value) => setGlobalFilter(String(value)), placeholder: "Search all columns...", customClass: "w-96 mt-4" }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/dashboard/posts/new", className: "group relative h-10 flex items-center justify-center px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-700 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-5 w-32", children: [(0, jsx_runtime_1.jsx)(fi_1.FiSave, { className: "h-4 w-4 text-white mr-2" }), "New Post"] })] }), (0, jsx_runtime_1.jsxs)("table", { className: "min-w-full divide-y divide-gray-200 border border-x-0 border-t-0 border-slate-300 mb-2", children: [(0, jsx_runtime_1.jsx)("thead", { className: "bg-gray-50", children: table.getHeaderGroups().map((headerGroup) => ((0, jsx_runtime_1.jsx)("tr", { children: headerGroup.headers.map((header) => {
                                                var _a;
                                                return ((0, jsx_runtime_1.jsx)("th", { scope: "col", colSpan: header.colSpan, className: "group px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider", children: (0, jsx_runtime_1.jsxs)("div", { className: header.column.getCanSort()
                                                            ? 'cursor-pointer select-none flex items-center justify-center'
                                                            : '',
                                                        onClick: header.column.getToggleSortingHandler(), children: [header.isPlaceholder
                                                                ? null
                                                                : (0, react_table_1.flexRender)(header.column.columnDef.header, header.getContext()), (_a = {
                                                                asc: (0, jsx_runtime_1.jsx)(fa_1.FaSortDown, {}),
                                                                desc: (0, jsx_runtime_1.jsx)(fa_1.FaSortUp, {}),
                                                            }[header.column.getIsSorted()]) !== null && _a !== void 0 ? _a : ((0, jsx_runtime_1.jsx)("span", { className: "w-3" }))] }) }, header.id));
                                            }) }, headerGroup.id))) }), (0, jsx_runtime_1.jsx)("tbody", { className: "bg-white divide-y divide-gray-200", children: table.getRowModel().rows.map((row) => ((0, jsx_runtime_1.jsx)("tr", { children: row.getVisibleCells().map((cell) => ((0, jsx_runtime_1.jsx)("td", { className: "px-6 py-4 whitespace-nowrap", role: "cell", children: (0, jsx_runtime_1.jsx)("div", { className: "text-sm text-gray-700 flex justify-center gap-1", children: (0, react_table_1.flexRender)(cell.column.columnDef.cell, cell.getContext()) }) }, cell.id))) }, row.id))) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex items-center", children: (0, jsx_runtime_1.jsxs)("p", { className: "text-xs", children: ["Showing", ' ', (0, jsx_runtime_1.jsx)("strong", { children: (0, jsx_runtime_1.jsx)("input", { type: "number", step: 5, defaultValue: table.getState().pagination.pageSize, onChange: (e) => {
                                                            const page = e.target.value
                                                                ? Number(e.target.value)
                                                                : 0;
                                                            table.setPageSize(page);
                                                        }, className: "font-bold text-center" }) }), ' ', "of ", (0, jsx_runtime_1.jsx)("strong", { children: (_e = dataQuery === null || dataQuery === void 0 ? void 0 : dataQuery.data) === null || _e === void 0 ? void 0 : _e.pageInfo.totalPosts }), ' ', "entries"] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2 mt-1", children: [(0, jsx_runtime_1.jsx)("button", { className: `text-sm font-bold ${!table.getCanPreviousPage()
                                                    ? 'text-gray-500'
                                                    : 'text-indigo-700'}`, onClick: () => table.setPageIndex(0), disabled: !table.getCanPreviousPage(), children: (0, jsx_runtime_1.jsx)(fa_1.FaAngleLeft, { className: "" }) }), (0, jsx_runtime_1.jsx)("button", { className: `text-sm font-bold ${!table.getCanPreviousPage()
                                                    ? 'text-gray-500'
                                                    : 'text-indigo-700'}`, onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage(), children: "prev" }), Array.from({ length: table.getPageCount() }, (_, index) => ((0, jsx_runtime_1.jsx)("button", { className: `text-md font-bold ${index === table.getState().pagination.pageIndex
                                                    ? 'text-indigo-700'
                                                    : ''}`, onClick: () => table.setPageIndex(index), children: index + 1 }, index))), (0, jsx_runtime_1.jsx)("button", { className: `text-sm font-bold ${!table.getCanNextPage()
                                                    ? 'text-gray-500'
                                                    : 'text-indigo-700'}`, onClick: () => table.nextPage(), disabled: !table.getCanNextPage(), children: "next" }), (0, jsx_runtime_1.jsx)("button", { className: `text-sm font-bold ${!table.getCanNextPage()
                                                    ? 'text-gray-500'
                                                    : 'text-indigo-700'}`, onClick: () => table.setPageIndex(table.getPageCount() - 1), disabled: !table.getCanNextPage(), children: (0, jsx_runtime_1.jsx)(fa_1.FaAngleRight, { className: "" }) })] })] })] }) }) }), (0, jsx_runtime_1.jsx)("div", { children: modal.show && ((0, jsx_runtime_1.jsx)(ConfirmationModal_1.default, { text: modal.text, error: modal.error, onClose: () => setModal({
                        text: '',
                        show: false,
                    }), onConfirm: modal.onConfirm })) })] }));
}
exports.default = Posts;
