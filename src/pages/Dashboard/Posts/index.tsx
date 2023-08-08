import { useMemo, useState } from 'react';
import usePost from '../../../hooks/usePost';
import {
  CellContext,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { FiCheck, FiEdit, FiSave, FiSend, FiTrash2, FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import {
  FaAngleLeft,
  FaAngleRight,
  FaSortDown,
  FaSortUp,
} from 'react-icons/fa';
import { RankingInfo, rankItem } from '@tanstack/match-sorter-utils';
import DebouncedInput from '../../../components/DebounceInput';
import IndeterminateCheckbox from '../../../components/IndeterminateCheckbox';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumb';
import ConfirmationModal from '../../../components/ConfirmationModal';

function Posts() {
  const navigate = useNavigate();
  const { getPosts, publishPost, deletePost } = usePost();
  const [sorting, setSorting] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState('');
  const [modal, setModal] = useState<Modal>({
    text: '',
    error: false,
    show: false,
  });
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const fetchDataOptions = {
    pageIndex,
    pageSize,
  };

  const dataQuery = useQuery(
    ['data', fetchDataOptions],
    () => getPosts(fetchDataOptions),
    { keepPreviousData: true }
  );

  const handlePublish = (id: string) => {
    const onConfirm = async () => {
      const res = await publishPost(id);
      dataQuery.refetch();
      setModal({
        text: '',
        show: false,
        error: false,
      });
      return res.status ? toast.success(res.message) : toast.error(res.message);
    };
    setModal({
      text: `Are you sure you want to publish this item?`,
      show: true,
      onConfirm: onConfirm,
    });
  };

  const handleDelete = (id: string) => {
    const onConfirm = async () => {
      const res = await deletePost(id);
      dataQuery.refetch();
      setModal({
        text: '',
        show: false,
      });
      return res.status ? toast.success(res.message) : toast.error(res.message);
    };
    setModal({
      text: `Are you sure you want to delete this item?`,
      error: true,
      show: true,
      onConfirm: onConfirm,
    });
  };

  const defaultData = useMemo(() => [], []);

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const columnHelper = createColumnHelper();

  const columns = useMemo(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      columnHelper.accessor('title' as any, {
        header: 'Title',
        cell: (info: any) => info?.row.original.title,
      }),
      columnHelper.accessor('author' as any, {
        header: 'Author',
        cell: (info: any) => (
          <div className="flex items-center justify-center gap-2">
            {info.row.original.author.avatar ? (
              <img
                src={info.row.original.author.avatar}
                alt={info.row.original.author.name}
                className="rounded-full h-8 w-8"
              />
            ) : (
              <p className="h-8 w-8 bg-indigo-400 text-white rounded-full flex items-center justify-center">
                {info.row.original.author.name.split('')[0]}
              </p>
            )}
            <p>{info.row.original.author.name}</p>
          </div>
        ),
      }),
      columnHelper.accessor('categories' as any, {
        header: 'Categories',
        cell: (info: any) =>
          info.row.original.categories.map((category: string, i: number) => (
            <span
              className="bg-blue-500 text-white rounded-full px-2 py-1/2"
              key={i}
            >
              {category}
            </span>
          )),
      }),
      columnHelper.accessor('tags' as any, {
        header: 'Tags',
        cell: (info: any) =>
          info.row.original.tags.map((tag: string, i: number) => (
            <span
              className="bg-yellow-500 text-white rounded-full px-2 py-1/2"
              key={i}
            >
              {tag}
            </span>
          )),
      }),
      columnHelper.accessor('created_at' as any, {
        header: 'Created At',
        cell: (info: any) => {
          const createdAt = new Date(info.row.original.created_at);
          const formattedDate = createdAt.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          return formattedDate;
        },
      }),
      columnHelper.accessor('published' as any, {
        header: 'Published',
        cell: (info: any) => {
          if (info.row.original.published) {
            return (
              <FiCheck className="bg-green-500 h-6 w-6 p-1 rounded-full text-white" />
            );
          } else {
            return (
              <FiX className="bg-red-500 h-6 w-6 p-1 rounded-full text-white" />
            );
          }
        },
      }),
      columnHelper.accessor('actions' as any, {
        header: '',
        cell: (info: any) => (
          <div className="flex gap-5">
            <button
              type="button"
              className=""
              onClick={() =>
                navigate(`/dashboard/posts/edit/${info.row.original.id}`)
              }
              title="Edit"
            >
              <FiEdit className="h-4 w-4" />
            </button>
            <button
              type="button"
              className=""
              onClick={() => handleDelete(info.row.original.id)}
              title="Delete"
            >
              <FiTrash2 className="h-4 w-4" />
            </button>
            {!info.row.original.published && (
              <button
                type="button"
                className=""
                onClick={() => handlePublish(info.row.original.id)}
                title="Publish"
              >
                <FiSend className="h-4 w-4" />
              </button>
            )}
          </div>
        ),
      }),
    ],
    []
  );

  const fuzzyFilter = (
    row: { getValue: (arg0: any) => { (): any; new (): any; name: any } },
    columnId: string,
    value: string,
    addMeta: (arg0: { itemRank: RankingInfo }) => void
  ) => {
    // Rank the item
    const itemRank =
      columnId === 'author'
        ? rankItem(row.getValue(columnId).name, value)
        : rankItem(row.getValue(columnId), value);

    // Store the itemRank info
    addMeta({
      itemRank,
    });

    // Return if the item should be filtered in/out
    return itemRank.passed;
  };

  const table = useReactTable({
    data: dataQuery.data?.data ?? defaultData,
    columns,
    pageCount: dataQuery.data?.pageInfo.totalPages ?? -1,
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
    onSortingChange: setSorting as any,
    onRowSelectionChange: setRowSelection,
    globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    manualPagination: true,
    debugTable: false,
  });

  return (
    <div className="w-full flex flex-col p-5 bg-gray-300">
      <Breadcrumb
        items={[
          { text: 'home', link: '/dashboard' },
          { text: 'posts', link: '/dashboard/posts' },
          { text: 'all posts', link: '' },
        ]}
      />
      <h2 className="text-xl font-bold mb-5">Posts</h2>
      <div className="flex gap-5 h-full">
        <div className="flex flex-col gap-5 w-full">
          <div className="bg-white border rounded-md p-4 border-slate-300 drop-shadow-sm h-full">
            <div className="flex justify-between gap-5">
              <DebouncedInput
                value={globalFilter ?? ''}
                onChange={(value) => setGlobalFilter(String(value))}
                placeholder="Search all columns..."
                customClass="w-96 mt-4"
              />
              <Link
                to="/dashboard/posts/new"
                className="group relative h-10 flex items-center justify-center px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-700 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-5 w-32"
              >
                <FiSave className="h-4 w-4 text-white mr-2" />
                New Post
              </Link>
            </div>
            <table className="min-w-full divide-y divide-gray-200 border border-x-0 border-t-0 border-slate-300 mb-2">
              <thead className="bg-gray-50">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        scope="col"
                        colSpan={header.colSpan}
                        className="group px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none flex items-center justify-center'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                          {{
                            asc: <FaSortDown />,
                            desc: <FaSortUp />,
                          }[header.column.getIsSorted() as string] ?? (
                            <span className="w-3"></span>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-6 py-4 whitespace-nowrap"
                        role="cell"
                      >
                        <div className="text-sm text-gray-700 flex justify-center gap-1">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <p className="text-xs">
                  Showing{' '}
                  <strong>
                    <input
                      type="number"
                      step={5}
                      defaultValue={table.getState().pagination.pageSize}
                      onChange={(e) => {
                        const page = e.target.value
                          ? Number(e.target.value)
                          : 0;
                        table.setPageSize(page);
                      }}
                      className="font-bold text-center"
                    />
                  </strong>{' '}
                  of <strong>{dataQuery?.data?.pageInfo.totalPosts}</strong>{' '}
                  entries
                </p>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <button
                  className={`text-sm font-bold ${
                    !table.getCanPreviousPage()
                      ? 'text-gray-500'
                      : 'text-indigo-700'
                  }`}
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                >
                  <FaAngleLeft className="" />
                </button>
                <button
                  className={`text-sm font-bold ${
                    !table.getCanPreviousPage()
                      ? 'text-gray-500'
                      : 'text-indigo-700'
                  }`}
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  prev
                </button>
                {Array.from({ length: table.getPageCount() }, (_, index) => (
                  <button
                    key={index}
                    className={`text-md font-bold ${
                      index === table.getState().pagination.pageIndex
                        ? 'text-indigo-700'
                        : ''
                    }`}
                    onClick={() => table.setPageIndex(index)}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  className={`text-sm font-bold ${
                    !table.getCanNextPage()
                      ? 'text-gray-500'
                      : 'text-indigo-700'
                  }`}
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  next
                </button>
                <button
                  className={`text-sm font-bold ${
                    !table.getCanNextPage()
                      ? 'text-gray-500'
                      : 'text-indigo-700'
                  }`}
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                >
                  <FaAngleRight className="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {modal.show && (
          <ConfirmationModal
            text={modal.text}
            error={modal.error}
            onClose={() =>
              setModal({
                text: '',
                show: false,
              })
            }
            onConfirm={modal.onConfirm}
          />
        )}
      </div>
    </div>
  );
}

export default Posts;
