import avatar from '../assets/images/avatar.png';
import DropDown from './DropDown';
import { useState } from 'react';

function UserMenu() {
  const [isActive, setActive] = useState(false);

  const handleDropDown = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="relative" onClick={handleDropDown}>
      <div className="flex items-center gap-2 bg-indigo-200 rounded-full p-1 cursor-pointer w-28">
        <div className="rounded-full w-8 h-8">
          <img
            src={avatar}
            alt="user avatar"
            className="border border-indigo-500 rounded-full"
          />
        </div>
        <p className="text-indigo-800 font-semibold text-xs">Victoria</p>
      </div>
      <DropDown isActive={isActive} />
    </div>
  );
}

export default UserMenu;
