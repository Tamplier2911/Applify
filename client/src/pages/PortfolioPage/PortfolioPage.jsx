// import "./PortfolioPage.scss";
import React from "react";

// components
import Projects from "../../components/Projects/Projects";
import ProjectsGallery from "../../components/ProjectsGallery/ProjectsGallery";

// JS Rendering CSS
import {
  PortfolioPageContainer,
  PortfolioPagePlaceholder,
} from "./PortfolioPageStyles";

const PortfolioPage = () => {
  return (
    <PortfolioPageContainer data-test="portfolio-page">
      <Projects data-test="portfolio-page-projects" />
      <ProjectsGallery data-test="portfolio-page-gallery" />
      <PortfolioPagePlaceholder />
    </PortfolioPageContainer>
  );
};

export default PortfolioPage;
