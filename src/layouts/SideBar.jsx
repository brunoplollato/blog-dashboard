import {
  FiFileText,
  FiFolder,
  FiHome,
  FiMenu,
  FiTag,
  FiUsers,
} from 'react-icons/fi';
import ListItem from '../components/MenuItem';
import { useState } from 'react';

function SideBar({ isSelected }) {
  const [isActive, setActive] = useState(true);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div
      className={`bg-white flex flex-col h-full py-4 static transition-all drop-shadow-md ${
        !isActive ? 'compact w-16 border-r border-gray-50' : 'w-72'
      }`}
    >
      <div className="flex items-center justify-between border-b border-indigo-100 pb-3 px-5">
        <p className={`h1 text-indigo-800 font-bold ${!isActive && 'hidden'}`}>
          Navigation
        </p>
        <div
          className="h-8 w-8 hover:bg-indigo-50 flex items-center justify-center rounded-full cursor-pointer"
          onClick={handleClick}
        >
          <FiMenu className="h-5 w-5 text-indigo-700" />
        </div>
      </div>
      <div className="flex items-center">
        <ul className="py-7 text-indigo-900 flex flex-col w-full">
          <ListItem
            isSelected={isSelected === 'dashboard'}
            icon={<FiHome className="h-5 w-5 text-indigo-800" />}
            text="Dashboard"
            to="/dashboard"
            customClass={`text-md gap-8 px-5 py-3 hover:bg-indigo-50 cursor-pointer ${
              isSelected === 'dashboard' && 'bg-indigo-50'
            }`}
          />
          <ListItem
            isSelected={isSelected === 'posts'}
            icon={<FiFileText className="h-5 w-5 text-indigo-800" />}
            text="Posts"
            customClass={`text-md gap-8 px-5 py-3 hover:bg-indigo-50 cursor-pointer ${
              isSelected === 'posts' && 'bg-indigo-100'
            }`}
          >
            <ul className="flex flex-col">
              <ListItem
                text="All posts"
                to="/dashboard/posts"
                customClass={`px-11 py-2 text-sm gap-8 hover:bg-indigo-50 ${
                  isSelected === 'posts' && 'bg-indigo-50'
                }`}
              />
              <ListItem
                text="New post"
                to="/dashboard/posts/new"
                customClass={`px-11 py-2 text-sm gap-8 hover:bg-indigo-50 ${
                  isSelected === 'posts' && 'bg-indigo-50'
                }`}
              />
            </ul>
          </ListItem>
          <ListItem
            isSelected={isSelected === 'categories'}
            icon={<FiFolder className="h-5 w-5 text-indigo-800" />}
            text="Categories"
            to="/categories"
            customClass={`text-md gap-8 px-5 py-3 hover:bg-indigo-50 cursor-pointer ${
              isSelected === 'categories' && 'bg-indigo-50'
            }`}
          >
            <ul className="px-11 py-1 flex flex-col gap-4 bg-indigo-100">
              <ListItem
                text="List all posts"
                to="/posts"
                customClass="text-sm gap-8"
              />
              <ListItem
                text="New category"
                to="/posts"
                customClass="text-sm gap-8"
              />
              <ListItem
                text="New tag"
                to="/posts"
                customClass="text-sm gap-8"
              />
            </ul>
          </ListItem>
          <ListItem
            isSelected={isSelected === 'tags'}
            icon={<FiTag className="h-5 w-5 text-indigo-800" />}
            text="Tags"
            to="/tags"
            customClass="text-md gap-8 px-5 py-3 hover:bg-indigo-50 cursor-pointer"
          >
            <ul className="px-11 py-1 flex flex-col gap-4">
              <ListItem
                text="New post"
                to="/posts"
                customClass="text-sm gap-8"
              />
              <ListItem
                text="New category"
                to="/posts"
                customClass="text-sm gap-8"
              />
              <ListItem
                text="New tag"
                to="/posts"
                customClass="text-sm gap-8"
              />
            </ul>
          </ListItem>
          <ListItem
            isSelected={isSelected === 'users'}
            icon={<FiUsers className="h-5 w-5 text-indigo-800" />}
            text="Users"
            to="/users"
            customClass="text-md gap-8 px-5 py-3 hover:bg-indigo-50 cursor-pointer"
          >
            <ul className="px-11 py-1 flex flex-col gap-4">
              <ListItem
                text="New post"
                to="/posts"
                customClass="text-sm gap-8"
              />
              <ListItem
                text="New category"
                to="/posts"
                customClass="text-sm gap-8"
              />
              <ListItem
                text="New tag"
                to="/posts"
                customClass="text-sm gap-8"
              />
            </ul>
          </ListItem>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
