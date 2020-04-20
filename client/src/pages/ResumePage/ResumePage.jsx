// import "./ResumePage.scss";
import React from "react";
import PropTypes from "prop-types";

// components
import Resume from "../../components/Resume/Resume";

// JS Rendering CSS
import { ResumePageContainer } from "./ResumePageStyles";

const ResumePage = () => {
  return (
    <ResumePageContainer data-test="resume-page">
      <Resume data-test="resume-page-child" />
    </ResumePageContainer>
  );
};

ResumePage.propTypes = {
  success: PropTypes.bool,
  // success: PropTypes.bool.isRequired,
};

export default ResumePage;
