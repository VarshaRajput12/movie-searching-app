import React, { useContext } from "react";
import { AppContext } from "./context";
import "./search.css";

const Search = () => {
  const { search, setSearch, error } = useContext(AppContext);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="form">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          className="input"
        />
      </form>
      <div>
        <p>{error.show && error.msg}</p>
      </div>
    </>
  );
};

export default Search;
