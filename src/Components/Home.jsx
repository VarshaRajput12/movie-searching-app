import React, { useContext } from "react";
import Movies from "./Movies";
import Search from "./Search";


const Home = () => {
  
  return (
    <div>
      <h1>home</h1>
      <Search/>
      <Movies/>
    </div>
  );
};

export default Home;
