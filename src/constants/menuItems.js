const menuItems = [
  {
    isSelected: 'dashboard',
    icon: 'FiHome',
    text: 'Dashboard',
    to: '/dashboard',
    customClass: 'text-md gap-8 px-5 py-3 hover:bg-purple-700',
  },
  {
    isSelected: 'post',
    icon: 'FiFileText',
    text: 'Posts',
    customClass: 'text-md gap-8 px-5 py-3 hover:bg-purple-700',
    subMenuItems: [
      {
        text: 'All posts',
        to: '/dashboard/posts',
        customClass: 'px-11 py-2 text-sm gap-8 hover:bg-purple-700',
      },
      {
        text: 'New post',
        to: '/dashboard/new-post',
        customClass: 'px-11 py-2 text-sm gap-8 hover:bg-purple-700',
      },
    ],
  },
  {
    isSelected: 'categories',
    icon: 'FiFolder',
    text: 'Categories',
    to: '/categories',
    customClass: 'text-md gap-8 px-5 py-3 hover:bg-purple-700',
    subMenuItems: [
      {
        text: 'List all posts',
        to: '/posts',
        customClass: 'text-sm gap-8',
      },
      {
        text: 'New category',
        to: '/posts',
        customClass: 'text-sm gap-8',
      },
      {
        text: 'New tag',
        to: '/posts',
        customClass: 'text-sm gap-8',
      },
    ],
  },
  {
    isSelected: 'tags',
    icon: 'FiTag',
    text: 'Tags',
    to: '/tags',
    customClass: 'text-md gap-8 px-5 py-3 hover:bg-purple-700',
    subMenuItems: [
      {
        text: 'New post',
        to: '/posts',
        customClass: 'text-sm gap-8',
      },
      {
        text: 'New category',
        to: '/posts',
        customClass: 'text-sm gap-8',
      },
      {
        text: 'New tag',
        to: '/posts',
        customClass: 'text-sm gap-8',
      },
    ],
  },
  {
    isSelected: 'users',
    icon: 'FiUsers',
    text: 'Users',
    to: '/users',
    customClass: 'text-md gap-8 px-5 py-3 hover:bg-purple-700',
    subMenuItems: [
      {
        text: 'New post',
        to: '/posts',
        customClass: 'text-sm gap-8',
      },
      {
        text: 'New category',
        to: '/posts',
        customClass: 'text-sm gap-8',
      },
      {
        text: 'New tag',
        to: '/posts',
        customClass: 'text-sm gap-8',
      },
    ],
  },
];

export default menuItems;
