import React, { useState, useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "68d16905e4msh7755e13402f176ep1f5f18jsn99ccb3d82956",
    "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
  },
};

// fetch(
//   "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en",
//   options
// );

// const API = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;
const Demo = () => {
  const [movie, setMovie] = useState([]);
//   console.log(movie);
  const getMovies = async () => {
    try {
      const res = await fetch(
        "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en",
        options
      );
      const data = await res.json();
        setMovie(data.titles);
        // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div className="container">
  {movie.map((ele)=> {
    return (
      <div>
      
        <img src={ele.jawSummary.backgroundImage.url} alt="poster" />
      </div>
    );
  })}
  
  </div>;
};

export default Demo;
