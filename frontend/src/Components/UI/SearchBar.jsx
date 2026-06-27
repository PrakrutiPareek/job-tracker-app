import { FaSearch } from "react-icons/fa";
import Button from "./Button";
//SearchBar component provides input fields for users to enter job search keywords and location, along with a search button to trigger the search action.
const SearchBar = ({keyword, location, setKeyword, setLocation, onSearch}) => {
  return (
    <div className="bg-(--navy-blue) rounded-2xl flex items-center p-4">
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search by Role"
        className="bg-transparent flex-1 outline-none"
      />

      <div className="w-px h-8 bg-(--white) mx-4"></div>
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Search jobs in UK only"
        className="bg-transparent flex-1 outline-none"
      />
      <Button variant="primary" 
        className="hover:text-(--white)"
        onClick={onSearch}
        aria-label="Search Jobs"
      >
        <FaSearch size={24} />
      </Button>
    </div>
  );
};

export default SearchBar;
