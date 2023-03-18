import React from "react";
import Movies from "./Movies";
import Search from "./Search";
import "./home.css"


const Home = () => {
  
  return (
    <div>
    <header className="header">

      <h1>home</h1> 
    </header>
      <Search/>
      <Movies/>
    </div>
  );
};

export default Home;
