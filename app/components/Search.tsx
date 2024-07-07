import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Search = () => {
  return (
    <div className="flex justify-between border outline outline-offset-1 rounded-md p-1 opacity-75">
      <form action="">
        <input
          type="text"
          placeholder="Search"
          className="md:bg-bgColor bg-white px-1 md:w-52 w-36"
        />
        <button>
          <SearchOutlinedIcon />
        </button>
      </form>
    </div>
  );
};

export default Search;
