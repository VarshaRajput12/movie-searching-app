import React, { useState, useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
    "X-RapidAPI-Host": `${process.env.REACT_APP_X_RapidAPI_Host}`,
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
        `https://netflix54.p.rapidapi.com/search/?query=friends&=0&limit_titles=50&limit_suggestions=20&lang=en`,
        options
      );
      const data = await res.json();
      setMovie(data.titles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="container">
      {movie.map((ele, i) => {
        return (
          <div key={i}>
            <img src={ele.jawSummary.backgroundImage.url} alt="poster" />
            <h2>{ele.jawSummary.title}</h2>
            {/* {console.log(
          ele.jawSummary.creators.map((name) => console.log(name.name))
        )} */}
          </div>
        );
      })}
    </div>
  );
};

export default Demo;
