import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Search = () => {
  return (
    <div className="border outline p-1">
      <form action="">
        <input type="text" placeholder="Search" />
        <button>
          <SearchOutlinedIcon />
        </button>
      </form>
    </div>
  );
};

export default Search;
