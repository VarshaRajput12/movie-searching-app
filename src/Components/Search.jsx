import React, { useContext } from 'react'
import { AppContext } from "./context";

const Search = () => {
  const { search, setSearch, error } = useContext(AppContext);
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div>
        <p>{error.show && error.msg}</p>
      </div>
    </>
  );
}

export default Search