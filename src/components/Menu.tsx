import MenuItem from './MenuItem';
import {
  FiFileText,
  FiFolder,
  FiHome,
  FiMenu,
  FiTag,
  FiUsers,
} from 'react-icons/fi';

const Menu = ({ isSelected }: Menu) => {
  return (
    <ul className="py-7 text-indigo-900 flex flex-col w-full">
      <MenuItem
        isSelected={isSelected === 'dashboard'}
        icon={<FiHome className="h-5 w-5 text-indigo-800" />}
        text="Dashboard"
        to="/dashboard"
        customClass={`text-md gap-8 px-5 py-3 hover:bg-indigo-50 cursor-pointer ${
          isSelected === 'dashboard' && 'bg-indigo-50'
        }`}
      />
      <MenuItem
        isSelected={isSelected === 'posts'}
        icon={<FiFileText className="h-5 w-5 text-indigo-800" />}
        text="Posts"
        customClass={`text-md gap-8 px-5 py-3 hover:bg-indigo-50 cursor-pointer ${
          isSelected === 'posts' && 'bg-indigo-100'
        }`}
      >
        <ul className="flex flex-col">
          <MenuItem
            text="All posts"
            to="/dashboard/posts"
            customClass={`px-11 py-2 text-sm gap-8 hover:bg-indigo-50 ${
              isSelected === 'posts' && 'bg-indigo-50'
            }`}
          />
          <MenuItem
            text="New post"
            to="/dashboard/posts/new"
            customClass={`px-11 py-2 text-sm gap-8 hover:bg-indigo-50 ${
              isSelected === 'posts' && 'bg-indigo-50'
            }`}
          />
          <MenuItem
            text="Categories"
            to="/dashboard/posts/new"
            customClass={`px-11 py-2 text-sm gap-8 hover:bg-indigo-50 ${
              isSelected === 'posts' && 'bg-indigo-50'
            }`}
          />
          <MenuItem
            text="Tags"
            to="/dashboard/posts/new"
            customClass={`px-11 py-2 text-sm gap-8 hover:bg-indigo-50 ${
              isSelected === 'posts' && 'bg-indigo-50'
            }`}
          />
        </ul>
      </MenuItem>
      <MenuItem
        isSelected={isSelected === 'users'}
        icon={<FiUsers className="h-5 w-5 text-indigo-800" />}
        text="Users"
        to="/users"
        customClass="text-md gap-8 px-5 py-3 hover:bg-indigo-50 cursor-pointer"
      >
        <ul className="px-11 py-1 flex flex-col gap-4">
          <MenuItem text="New post" to="/posts" customClass="text-sm gap-8" />
          <MenuItem
            text="New category"
            to="/posts"
            customClass="text-sm gap-8"
          />
          <MenuItem text="New tag" to="/posts" customClass="text-sm gap-8" />
        </ul>
      </MenuItem>
    </ul>
  );
};

export default Menu;
