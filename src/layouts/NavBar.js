import Logo from '../components/Logo';
import Notifications from '../components/Notifications';
import SearchBar from '../components/SearchBar';
import UserMenu from '../components/UserMenu';

function NavBar() {
  return (
    <div className="flex items-center justify-between bg-purple-900 w-full px-5 h-16 border-b border-purple-700">
      <Logo />
      <SearchBar />
      <div className="flex items-center gap-4">
        <Notifications />
        <UserMenu />
      </div>
    </div>
  );
}

export default NavBar;
