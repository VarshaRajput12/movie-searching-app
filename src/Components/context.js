import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const API = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY2}`;

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [search, setSearch] = useState("titanic");

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
        setError({
          show: false,
          msg: "",
        });
      } else {
        setError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let interval = setTimeout(() => {
      getMovies(`${API}&s=${search}`);
    }, 1000);
    return () => clearTimeout(interval);
  }, [search]);
  return (
    <AppContext.Provider value={{ movie, isLoading, error, search, setSearch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
