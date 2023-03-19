import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleMovie = () => {
  const {id} = useParams();

  //  const [movie, setMovie] = useState([]);
  //  const [isLoading, setIsLoading] = useState(true);

  //  const getMovies = async (url) => {
  //    setIsLoading(true);
  //    try {
  //      const res = await fetch(url);
  //      const data = await res.json();
  //      console.log(data);
  //      if (data.Response === "True") {
  //        setIsLoading(false);
  //        setMovie(data.Search);
  //        setError({
  //          show: false,
  //          msg: "",
  //        });
  //      } else {
  //        setError({
  //          show: true,
  //          msg: data.Error,
  //        });
  //      }
  //    } catch (error) {
  //      console.log(error);
  //    }
  //  };

  //  useEffect(() => {
  //    let interval = setTimeout(() => {
  //      getMovies(`${API}&s=${search}`);
  //    }, 1000);
  //    return () => clearTimeout(interval);
  //  }, [search]);
  return (
    <div>SingleMovie {id}</div>
  )
}

export default SingleMovie