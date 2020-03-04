// import "./ProjectsGallery.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentImage } from "../../redux/projects/projects.selectors";
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

const ProjectsGallery = ({
  currentImage,
  setCurrentImageNext,
  setCurrentImagePrev
}) => {
  // const { image, id } = currentImage;
  const { image } = currentImage;
  return (
    <ProjectsGalleryContainer>
      <ProjectsGalleryTitle>Projects gallery:</ProjectsGalleryTitle>
      <ProjectsGalleryComposition>
        <ProjectsGalleryArrow onClick={setCurrentImagePrev}>
          <ProjectsGalleryArrowLeftSVG />
        </ProjectsGalleryArrow>

        <ProjectsGalleryImageContainer style={{ animation: "2s imageFadein" }}>
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
  currentImage: selectCurrentImage
});

export default connect(mapStateToProps, {
  setCurrentImageNext,
  setCurrentImagePrev
})(ProjectsGallery);
