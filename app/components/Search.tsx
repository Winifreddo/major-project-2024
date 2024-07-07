import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Search = () => {
  return (
    <div className="flex justify-between border outline outline-offset-1 rounded-md p-1 opacity-75">
      <form action="">
        <input
          type="text"
          placeholder="Search"
          className="bg-bgColor px-1 w-52"
        />
        <button>
          <SearchOutlinedIcon />
        </button>
      </form>
    </div>
  );
};

export default Search;
