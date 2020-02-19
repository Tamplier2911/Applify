import "./PortfolioPage.scss";
import React from "react";

// components
import Projects from "../../components/Projects/Projects";
import ProjectsGallery from "../../components/ProjectsGallery/ProjectsGallery";

// JS Rendering CSS
import {} from "./PortfolioPageStyles";

const PortfolioPage = () => {
  return (
    <div className="portfolioPage">
      <Projects />
      <ProjectsGallery />
    </div>
  );
};

export default PortfolioPage;
