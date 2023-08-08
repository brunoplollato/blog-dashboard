import { useContext, useRef, useState } from 'react';
import useOutsideClick from '../hooks/useOutsideClick';
import DropDown from './DropDown';
import { UserContext } from '../../src/contexts/UserContext';

function UserMenu() {
  const [isActive, setActive] = useState(false);
  const { user } = useContext(UserContext);
  const menuEl = useRef(null);

  const handleDropDown = () => {
    setActive((prev) => !prev);
  };

  useOutsideClick(menuEl, () => {
    if (isActive) setActive(false);
  });

  return (
    <div className="relative" onClick={handleDropDown} ref={menuEl}>
      <div
        className={`flex items-center gap-2 border border-indigo-100 hover:bg-indigo-200 rounded-full p-1 cursor-pointer w-28 ${
          isActive && 'bg-indigo-200'
        }`}
      >
        <div className="rounded-full w-8 h-8 flex items-center justify-center overflow-hidden">
          {user?.avatar ? (
            <img src={user?.avatar} alt="user avatar" className="" />
          ) : (
            <span className="text-center text-indigo-100 bg-indigo-400 w-full h-full flex items-center justify-center">
              {user?.name.split('')[0]}
            </span>
          )}
        </div>
        <p className="text-indigo-800 font-semibold text-xs">
          {user?.name.split(' ')[0]}
        </p>
      </div>
      <DropDown isActive={isActive} />
    </div>
  );
}

export default UserMenu;
