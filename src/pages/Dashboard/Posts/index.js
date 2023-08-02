import { useEffect, useMemo, useState } from 'react';
import usePost from '../../../hooks/usePost';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { FiCheck, FiEdit, FiSend, FiTrash2, FiX } from 'react-icons/fi';

function Posts() {
  const { getPosts } = usePost();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getPosts();
        setPosts(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const data = posts.map((post) => ({
    title: post.title,
    categories: post.categories.map((category) => (
      <span className="bg-blue-500 text-white rounded-full px-2 py-1/2">
        {category}
      </span>
    )),
    tags: post.tags.map((tag) => (
      <span className="bg-yellow-500 text-white rounded-full px-2 py-1/2">
        {tag}
      </span>
    )),
    author: post.author.name,
    published: post.published ? (
      <FiCheck className="bg-green-500 h-6 w-6 p-1 rounded-full text-white" />
    ) : (
      <FiX className="bg-red-500 h-6 w-6 p-1 rounded-full text-white" />
    ),
  }));

  const handleEdit = (post) => {
    console.log('🚀 ~ file: index.js:43 ~ handleEdit ~ post:', post);
  };

  const handleDelete = (post) => {
    console.log('🚀 ~ file: index.js:48 ~ handleDelete ~ post:', post);
  };

  const handlePublish = (post) => {
    console.log('🚀 ~ file: index.js:53 ~ handlePublish ~ post:', post);
  };

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('title', {
      Header: 'Title',
      Cell: (info) => info.row.original.title,
      Footer: 'Title Footer',
    }),
    columnHelper.accessor('author', {
      Header: 'Author',
      Cell: (info) => info.row.original.author,
      Footer: 'Author Footer',
    }),
    columnHelper.accessor('categories', {
      Header: 'Categories',
      cell: (info) => info.row.original.categories,
      Footer: 'Categories Footer',
    }),
    columnHelper.accessor('tags', {
      Header: 'Tags',
      cell: (info) => info.row.original.tags,
      Footer: 'Tags Footer',
    }),
    columnHelper.accessor('published', {
      Header: 'Published',
      cell: (info) => info.row.original.published,
      Footer: 'Published Footer',
    }),
    columnHelper.accessor('actions', {
      Header: '',
      cell: () => (
        <div className="flex gap-5">
          <button
            type="button"
            className=""
            onClick={(e) => handleEdit}
            title="Edit"
          >
            <FiEdit className="h-4 w-4" />
          </button>
          <button
            type="button"
            className=""
            onClick={(e) => handleDelete}
            title="Delete"
          >
            <FiTrash2 className="h-4 w-4" />
          </button>
          <button
            type="button"
            className=""
            onClick={(e) => handlePublish}
            title="Publish"
          >
            <FiSend className="h-4 w-4" />
          </button>
        </div>
      ),
      Footer: '',
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full flex flex-col p-5 bg-gray-300">
      <h2 className="text-xl font-bold mb-5">Posts</h2>
      <div className="flex gap-5">
        <div className="flex flex-col gap-5 w-full">
          <div className="bg-white border rounded-md p-4 border-slate-300 drop-shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        scope="col"
                        className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        <div className="flex items-center justify-center">
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
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
              <tfoot className="bg-white divide-y divide-gray-200">
                {table.getFooterGroups().map((footerGroup) => (
                  <tr key={footerGroup.id}>
                    {footerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-6 py-4 whitespace-nowrap"
                        role="col"
                      >
                        <div className="text-sm text-gray-700">
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.footer,
                                header.getContext()
                              )}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
