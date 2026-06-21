import { FaSearch } from "react-icons/fa";

const SearchBar =
  ({ keyword, location, setKeyword, setLocation, onSearch }) => {
    console.log("keyword", keyword);
    return (
      <div className="bg-(--navy-blue) rounded-2xl flex items-center p-4">
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Seach by Role"
          className="bg-transparent flex-1 outline-none"
        />

        <div className="w-px h-8 bg-(--white) mx-4"></div>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search by Location"
          className="bg-transparent flex-1 outline-none"
        />
        <button onClick={onSearch}>
          <FaSearch size={24} />
        </button>
      </div>
    );
  };

export default SearchBar;
