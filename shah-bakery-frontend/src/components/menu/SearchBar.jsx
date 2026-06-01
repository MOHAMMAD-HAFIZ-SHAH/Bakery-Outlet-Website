import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="bg-white rounded-full px-7 py-5 flex items-center gap-4 shadow-lg">

      <FiSearch className="text-2xl text-[var(--warmBrown)]" />

      <input
        type="text"
        placeholder="Search menu..."
        className="w-full outline-none bg-transparent"
      />

    </div>
  );
};

export default SearchBar;