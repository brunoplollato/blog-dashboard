import { FiSearch } from 'react-icons/fi';

function Searchbar() {
  return (
    <div className="relative">
      <FiSearch className="h-5 w-5 text-white absolute inset-y-1/4 left-4" />
      <input
        className="bg-transparent border border-slate-400 rounded-3xl border-radius-10 h-10 w-96 px-10"
        type="search"
        placeholder="Search"
        name="search"
      />
    </div>
  );
}

export default Searchbar;
