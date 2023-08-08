import { FiLogOut, FiSettings, FiUser } from 'react-icons/fi';
import ListItem from './MenuItem';
import useAuth from '../hooks/useAuth';

function DropDown({ isActive }: DropDown) {
  const { logoutUser } = useAuth();

  return (
    <>
      {isActive && (
        <div className="absolute right-0 top-11 bg-white w-56 py-2 gap-3 flex flex-col rounded-md border border-slate-300 drop-shadow-md">
          <ul className="px-6 py-1 gap-3 flex flex-col">
            <ListItem
              icon={<FiUser className="h-4 w-4" />}
              text="My profile"
              to="/user/profile"
              customClass="text-sm gap-2"
            />
          </ul>
          <ul className="px-6 py-3 gap-3 flex flex-col border-t">
            <ListItem
              icon={<FiSettings className="h-4 w-4" />}
              text="Account settings"
              to="/user/account"
              customClass="text-sm gap-2"
            />
            <button type="button" className="" onClick={logoutUser}>
              <div className={`flex items-center text-sm gap-2`}>
                <FiLogOut className="h-4 w-4" />
                <p>Logout</p>
              </div>
            </button>
          </ul>
        </div>
      )}
    </>
  );
}

export default DropDown;
