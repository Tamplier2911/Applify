// import "./ProjectsGallery.scss";
import React, { useState, useEffect } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentImage } from "../../redux/projects/projects.selectors";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import {
  setCurrentImageNext,
  setCurrentImagePrev
} from "../../redux/projects/projects.actions";

// JS Rendering CSS
import {
  ProjectsGalleryContainer,
  ProjectsGalleryTitle,
  ProjectsGalleryComposition,
  ProjectsGalleryArrow,
  ProjectsGalleryArrowLeftSVG,
  ProjectsGalleryArrowRightSVG,
  ProjectsGalleryImageContainer,
  ProjectsGalleryImage
} from "./ProjectsGalleryStyles";

// component constants
import galleryData from "../../utils/ComponentProjectsGalleryConstants/componentProjectsGalleryConstants";

const ProjectsGallery = ({
  currentImage,
  setCurrentImageNext,
  setCurrentImagePrev,
  lang
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 400);
  }, [currentImage]);

  const currentData = galleryData[lang];
  const { projectsGalleryHeader } = currentData;
  const { image } = currentImage;
  return (
    <ProjectsGalleryContainer>
      <ProjectsGalleryTitle>{projectsGalleryHeader}</ProjectsGalleryTitle>
      <ProjectsGalleryComposition>
        <ProjectsGalleryArrow onClick={setCurrentImagePrev}>
          <ProjectsGalleryArrowLeftSVG />
        </ProjectsGalleryArrow>

        <ProjectsGalleryImageContainer load={isLoaded}>
          <ProjectsGalleryImage
            src={image}
            alt="project gallery overview"
          ></ProjectsGalleryImage>
        </ProjectsGalleryImageContainer>

        <ProjectsGalleryArrow onClick={setCurrentImageNext}>
          <ProjectsGalleryArrowRightSVG />
        </ProjectsGalleryArrow>
      </ProjectsGalleryComposition>
    </ProjectsGalleryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentImage: selectCurrentImage,
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps, {
  setCurrentImageNext,
  setCurrentImagePrev
})(ProjectsGallery);
