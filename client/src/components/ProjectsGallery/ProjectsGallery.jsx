import "./ProjectsGallery.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentImage } from "../../redux/projects/projects.selectors";
import {
  setCurrentImageNext,
  setCurrentImagePrev
} from "../../redux/projects/projects.actions";

import { ReactComponent as ChevronLeftSVG } from "../../assets/svg/chevron-left.svg";
import { ReactComponent as ChevronRightSVG } from "../../assets/svg/chevron-right.svg";

const ProjectsGallery = ({
  currentImage,
  setCurrentImageNext,
  setCurrentImagePrev
}) => {
  const { image } = currentImage;
  return (
    <div className="projectsGallery">
      <div className="projectsGallery__header">Projects gallery:</div>
      <div className="projectsGallery__gallery">
        <div
          className="projectsGallery__arrow-left"
          onClick={setCurrentImagePrev}
        >
          <ChevronLeftSVG className="projectsGallery__arrow-svg" />
        </div>
        <div className="projectsGallery__imgContainer">
          <img
            className="projectsGallery__img"
            src={image}
            alt="project overview"
          ></img>
        </div>
        <div
          className="projectsGallery__arrow-right"
          onClick={setCurrentImageNext}
        >
          <ChevronRightSVG className="projectsGallery__arrow-svg" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentImage: selectCurrentImage
});

export default connect(mapStateToProps, {
  setCurrentImageNext,
  setCurrentImagePrev
})(ProjectsGallery);
