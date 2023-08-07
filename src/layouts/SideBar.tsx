import Menu from '../components/Menu';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

function SideBar({ isSelected }: SideBar) {
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
        <Menu isSelected={isSelected} />
      </div>
    </div>
  );
}

export default SideBar;
