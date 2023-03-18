import React, { useEffect, useState } from "react";
import { createContext } from "react";
// import { json } from "react-router-dom";

const API = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = createContext();

const AppProvider = ({children}) => {

    const [movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState({show: false, msg : "" })
    const [search, setSearch] = useState("spider")

    const getMovies = async(url) =>{
        try {
            const res = await fetch(url);
            const data = await res.json()
            console.log(data)
            setIsLoading(false)
            setMovie(data.Search);
            
        } catch (error) {
            // console.log(error)
            setError({
                show: true,
                msg: error 
            })
        }
    }

    useEffect(() => {
      getMovies(`${API}&s=${search}`);
    }, [search]);
    return (
      <AppContext.Provider
        value={{ movie, isLoading, error, search, setSearch }}
      >
        {children}
      </AppContext.Provider>
    );
};

export {AppProvider, AppContext};