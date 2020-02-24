// import "./HomePage.scss";
import React from "react";

// components
import Hero from "../../components/Hero/Hero";
import HomeCards from "../../components/HomeCards/HomeCards";

// JS Rendering CSS
import { HomePageContainer, HomePagePlaceholder } from "./HomePageStyles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Hero />
      <HomeCards />
      <HomePagePlaceholder />
    </HomePageContainer>
  );
};

export default HomePage;
