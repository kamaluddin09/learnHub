import {Search} from "lucide-react"

const SearchBar = () => {
  return (
      <div className="hidden md:flex items-center flex-1 max-w-lg mx-8 bg-gradient-to-r from-gray-50 to-gray-100 px-5 py-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-blue-400 focus-within:border-blue-300 transition-all duration-200">
        <Search className="text-gray-500 text-lg" />
        <input
          type="text"
          placeholder="Search for courses, topics, or instructors..."
          className="ml-3 w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
        />
      </div>
  );
};

export default SearchBar;
