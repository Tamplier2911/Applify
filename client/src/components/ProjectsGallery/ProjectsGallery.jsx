// import "./ProjectsGallery.scss";
import React, { useState, useEffect } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentImage } from "../../redux/projects/projects.selectors";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import {
  setCurrentImageNext,
  setCurrentImagePrev,
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
  ProjectsGalleryImage,
} from "./ProjectsGalleryStyles";

// component constants
import galleryData from "./ProjectsGalleryConstants";

// get window dimensions
import getWindowDimensions from "../../utils/WindowCaptions/getWindowDimensions";
// get device value
import getDeviceValue from "../../utils/WindowCaptions/getDeviceValue";
// debouncer
import { debounce } from "../../utils/Debounce/debounce";

const ProjectsGallery = ({
  currentImage,
  setCurrentImageNext,
  setCurrentImagePrev,
  lang,
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
    const debounced = debounce(
      () => setWindowDimensions(getWindowDimensions()),
      250
    );
    window.addEventListener("resize", debounced);

    // const handleResize = () => setWindowDimensions(getWindowDimensions());
    // window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", debounced);
  }, [currentImage]);

  const { projectsGalleryHeader } = galleryData[lang];
  const { image } = currentImage;

  // define image path
  const projectPortrait = getImageRelativePath(image || "");
  // get divice value
  const device = getDeviceValue(width);

  return (
    <ProjectsGalleryContainer animateIn={"bounceInLeft"} animateOnce={true}>
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
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps, {
  setCurrentImageNext,
  setCurrentImagePrev,
})(ProjectsGallery);
