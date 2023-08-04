import Logo from '../components/Logo';
import Notifications from '../components/Notifications';
import UserMenu from '../components/UserMenu';

function NavBar() {
  return (
    <div className="flex items-center justify-between bg-white z-50 w-full px-5 min-h-[60px] drop-shadow-md">
      <Logo />
      <div className="flex items-center gap-4">
        <Notifications />
        <UserMenu />
      </div>
    </div>
  );
}

export default NavBar;
