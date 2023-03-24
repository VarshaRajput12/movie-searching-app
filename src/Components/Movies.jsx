import React, { useContext } from "react";
import "./movie.css";
import { NavLink } from "react-router-dom";
import { AppContext } from "./context";

const Movies = () => {
  const { movie, isLoading } = useContext(AppContext);
  if (isLoading) {
    <div>Loading...</div>;
  }
  return (
    <div className="container">
      {movie.map((currMovie) => {
        const { Title, imdbID, Poster } = currMovie;
        const newTitle = Title.substring(0, 15);
        return (
          <div key={imdbID} className="single-movie">
            <NavLink to={`movie/${imdbID}`} className="NavLink">
              <h2>{newTitle.length >= 15 ? `${newTitle}...` : Title}</h2>
              <img src={Poster} alt="Poster" className="poster" />
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
