import "./PortfolioPage.scss";
import React from "react";

// components
import Projects from "../../components/Projects/Projects";
import ProjectsGallery from "../../components/ProjectsGallery/ProjectsGallery";

// JS Rendering CSS
import { PortfolioPageContainer } from "./PortfolioPageStyles";

const PortfolioPage = () => {
  return (
    <PortfolioPageContainer>
      <Projects />
      <ProjectsGallery />
    </PortfolioPageContainer>
  );
};

export default PortfolioPage;
