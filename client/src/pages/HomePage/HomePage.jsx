// import "./HomePage.scss";
import React from "react";

// components
import Hero from "../../components/Hero/Hero";
import HomeCards from "../../components/HomeCards/HomeCards";

// JS Rendering CSS
import { HomePageContainer, HomePagePlaceholder } from "./HomePageStyles";

const HomePage = () => {
  // throw Error;
  return (
    <HomePageContainer data-test="home-page">
      <Hero data-test="home-page-hero" />
      <HomeCards data-test="home-page-cards" />
      <HomePagePlaceholder />
    </HomePageContainer>
  );
};

export default HomePage;
