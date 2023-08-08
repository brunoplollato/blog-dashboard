import {
  FiFileText,
  FiFolder,
  FiHome,
  FiMenu,
  FiTag,
  FiUsers,
} from 'react-icons/fi';

const menuItems = [
  {
    isSelected: 'dashboard',
    icon: <FiHome className="h-5 w-5 text-indigo-800" />,
    text: 'Dashboard',
    to: '/dashboard',
    customClass: `text-md gap-8 px-5 py-3 hover:bg-indigo-50 cursor-pointer`,
  },
  {
    isSelected: 'posts',
    icon: <FiFileText className="h-5 w-5 text-indigo-800" />,
    text: 'Posts',
    customClass: `text-md gap-8 px-5 py-3 hover:bg-indigo-50 cursor-pointer`,
    subMenu: [
      {
        text: 'All posts',
        to: '/dashboard/posts',
        customClass: `text-sm gap-8`,
      },
      {
        text: 'New post',
        to: '/dashboard/posts/new',
        customClass: `text-sm gap-8`,
      },
      {
        text: 'Categories',
        to: '/dashboard/posts/categories',
        customClass: `text-sm gap-8`,
      },
      {
        text: 'Tags',
        to: '/dashboard/posts/tags',
        customClass: `text-sm gap-8`,
      },
    ],
  },
  {
    isSelected: 'users',
    icon: <FiUsers className="h-5 w-5 text-indigo-800" />,
    text: 'Users',
    to: '/users',
    customClass: 'text-md gap-8 px-5 py-3 hover:bg-indigo-50 cursor-pointer',
    subMenu: [
      {
        text: 'All users',
        to: '/users',
        customClass: 'text-sm gap-8',
      },
      {
        text: 'User roles',
        to: '/users/roles',
        customClass: 'text-sm gap-8',
      },
    ],
  },
];

export default menuItems;
