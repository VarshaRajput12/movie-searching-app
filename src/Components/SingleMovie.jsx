import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {API} from "./context"

const SingleMovie = () => {
  const {id} = useParams();

   const [movie, setMovie] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const getMovies = async (url) => {
     setIsLoading(true);
     try {
       const res = await fetch(url);
       const data = await res.json();
       console.log(res);
       if (data.Response === "True") {
         setIsLoading(false);
         setMovie(data);
         
       }else{
        setError({
          show: true,
          msg: data.error
        })
       }
     } catch (error) {
       console.log(error);
     }
   };

   useEffect(() => {
     let interval = setTimeout(() => {
       getMovies(`${API}&i=${id}`);
     }, 1000);
     return () => clearTimeout(interval);
   }, [id]);
  return (
    <div>SingleMovie {id}</div>
  )
}

export default SingleMovie