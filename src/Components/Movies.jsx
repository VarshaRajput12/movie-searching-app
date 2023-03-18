import React, { useContext } from "react";
import "./movie.css"
import { NavLink } from "react-router-dom";

import { AppContext } from "./context";

const Movies = () => {
  const { movie } = useContext(AppContext);
  return (
    <div className="container">
      {movie.map((currMovie) => {
        return (
          <div key={currMovie.imdbID} className="single-movie">
            <NavLink to={`movie/${currMovie.imdbID}`} className="NavLink">
              <h2>{currMovie.Title}</h2>
              <img src={currMovie.Poster} alt="Poster" />
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
