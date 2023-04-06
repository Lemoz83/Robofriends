import React from "react";

const SearchBox = ({ onSearchBox }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={onSearchBox}
      ></input>
    </div>
  );
};

export default SearchBox;
