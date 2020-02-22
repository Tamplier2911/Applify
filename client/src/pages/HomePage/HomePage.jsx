import "./HomePage.scss";
import React from "react";

// components
import Hero from "../../components/Hero/Hero";
import HomeCards from "../../components/HomeCards/HomeCards";

const HomePage = () => {
  return (
    <div className="homePage">
      <Hero />
      <HomeCards />
      <div></div>
    </div>
  );
};

export default HomePage;
