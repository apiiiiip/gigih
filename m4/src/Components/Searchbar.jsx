import { changeSearch } from "../redux/Searchslice";
import { useDispatch } from "react-redux";
import React from "react";

// eslint-disable-next-line react/prop-types
function Searchbar({ handleSearch }) {
  const dispatch = useDispatch();
  return (
    <div data-testid="search-bar">
      <form onSubmit={handleSearch}>
        <input onChange={(e) => dispatch(changeSearch(e.target.value))} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Searchbar;
