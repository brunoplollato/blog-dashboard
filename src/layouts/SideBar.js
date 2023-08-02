import {
  FiFileText,
  FiFolder,
  FiHome,
  FiMenu,
  FiTag,
  FiUsers,
} from 'react-icons/fi';
import ListItem from '../components/ListItem';
import { useState } from 'react';

function SideBar({ isSelected }) {
  const [isActive, setActive] = useState(true);

  const path = window.location.pathname.split('/').reverse()[0];
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div
      className={`bg-purple-900 flex flex-col h-full py-4 static transition-all ${
        !isActive ? 'compact w-16 border-r border-purple-700' : 'w-72'
      }`}
    >
      <div className="flex items-center justify-between border-b border-purple-700 pb-3 px-5">
        <p className={`h1 text-white font-bold ${!isActive && 'hidden'}`}>
          Navigation
        </p>
        <div
          className="h-8 w-8 hover:bg-purple-700 flex items-center justify-center rounded-full cursor-pointer"
          onClick={handleClick}
        >
          <FiMenu className="h-5 w-5 text-white" />
        </div>
      </div>
      <div className="flex items-center">
        <ul className="py-7 text-white flex flex-col w-full">
          <ListItem
            isSelected={isSelected === 'dashboard'}
            icon={<FiHome className="h-5 w-5 text-white" />}
            text="Dashboard"
            to="/dashboard"
            customClass="text-md gap-8 px-5 py-3 hover:bg-purple-700"
          />
          <ListItem
            isSelected={isSelected === 'post'}
            icon={<FiFileText className="h-5 w-5 text-white" />}
            text="Posts"
            customClass="text-md gap-8 px-5 py-3 hover:bg-purple-700"
          >
            <ul className="flex flex-col">
              <ListItem
                text="All posts"
                to="/dashboard/posts"
                customClass="px-11 py-2 text-sm gap-8 hover:bg-purple-700"
              />
              <ListItem
                text="New post"
                to="/dashboard/new-post"
                customClass="px-11 py-2 text-sm gap-8 hover:bg-purple-700"
              />
            </ul>
          </ListItem>
          <ListItem
            isSelected={isSelected === 'categories'}
            icon={<FiFolder className="h-5 w-5 text-white" />}
            text="Categories"
            to="/categories"
            customClass="text-md gap-8 px-5 py-3 hover:bg-purple-700"
          >
            <ul className="px-11 py-1 flex flex-col gap-4">
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
            icon={<FiTag className="h-5 w-5 text-white" />}
            text="Tags"
            to="/tags"
            customClass="text-md gap-8 px-5 py-3 hover:bg-purple-700"
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
            icon={<FiUsers className="h-5 w-5 text-white" />}
            text="Users"
            to="/users"
            customClass="text-md gap-8 px-5 py-3 hover:bg-purple-700"
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
