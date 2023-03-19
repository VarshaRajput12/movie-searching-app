import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {API} from "./context"

const SingleMovie = () => {
  const {id} = useParams();

  console.log(id)

   const [movie, setMovie] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState({ show: false, msg: "" });

   const getMovies = async (url) => {
     setIsLoading(true);
     try {
       const res = await fetch(url);
       const data = await res.json();
       console.log(data);
       if (data.Response === "True") {
         setIsLoading(false);
         setMovie(data.Search || data);
         setError({ show: false, msg: "" });
       }else{
        setError({show: true, msg : data.Error})
       }
     } catch (error) {
       console.log(error);
     }
   };

   useEffect(() => {
     let interval = setTimeout(() => {
       getMovies(`${API}&is=${id}`);
     }, 1000);
     return () => clearTimeout(interval);
   }, [id]);
   
   if(isLoading){
    return(
      <div>Loading....</div>
    )
   }
   const {Title,imdbRating,Genre, Language, Poster, Released} = movie;
  return (
    <div>
      <figure>
        <img src={Poster} alt="poster" />
      </figure>
      <p>{Title}</p>
      <p>{Language}</p>
      <p>{imdbRating}</p>
      <p>{Genre}</p>
      <p>{Released}</p>
      <NavLink to="/">back</NavLink>
    </div>
  );
}

export default SingleMovie