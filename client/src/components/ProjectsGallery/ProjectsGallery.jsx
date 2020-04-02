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

// data transformations
import getImageRelativePath from "../../utils/PathTransformations/getImageRelativePath";

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
import galleryData from "./ProjectsGalleryConstants";

// get window dimensions
const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

const ProjectsGallery = ({
  currentImage,
  setCurrentImageNext,
  setCurrentImagePrev,
  lang
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const { width } = windowDimensions;

  useEffect(() => {
    setIsLoaded(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 600);
    // 400

    // handle resize
    const handleResize = () => setWindowDimensions(getWindowDimensions());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentImage]);

  const { projectsGalleryHeader } = galleryData[lang];
  const { image } = currentImage;

  // define image path
  const projectPortrait = getImageRelativePath(image || "");
  // get divice value
  const device =
    width <= 425
      ? "phone"
      : width >= 426 && width <= 720
      ? "tablet"
      : width >= 721
      ? "desktop"
      : "desktop";

  return (
    <ProjectsGalleryContainer>
      <ProjectsGalleryTitle>{projectsGalleryHeader}</ProjectsGalleryTitle>
      <ProjectsGalleryComposition>
        <ProjectsGalleryArrow onClick={() => setCurrentImagePrev(device)}>
          <ProjectsGalleryArrowLeftSVG />
        </ProjectsGalleryArrow>

        <ProjectsGalleryImageContainer load={isLoaded}>
          <ProjectsGalleryImage
            src={projectPortrait}
            alt="project gallery overview"
          ></ProjectsGalleryImage>
        </ProjectsGalleryImageContainer>

        <ProjectsGalleryArrow onClick={() => setCurrentImageNext(device)}>
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
