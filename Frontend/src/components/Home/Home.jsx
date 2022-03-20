import React from "react";
import "./style.css";

const Home = () => {
  return (
    <>
      <div className="centered">
        <h1>Home page</h1>
          <h2><a href="/register">Sign up!!</a></h2>
        
          <h2><a href="/login">Login</a></h2>
      </div>
    </>
  );
};

export default Home;
