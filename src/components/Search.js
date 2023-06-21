import React from "react";

function Search({ handleSearchChange, searchQuery }) {





  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleSearchChange} value={searchQuery} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
