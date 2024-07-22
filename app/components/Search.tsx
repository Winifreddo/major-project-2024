import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Search = () => {
  return (
    <div className="flex justify-between border outline rounded-md md:p-1 md:mt-2 opacity-75">
      <form action="">
        <input
          type="text"
          placeholder="Search"
          className="bg-white p-1 md:w-52 w-40 text-xs md:text-sm"
        />
        <button>
          <SearchOutlinedIcon className="md:w-7 md:h-7 w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export default Search;
