// import "./ResumePage.scss";
import React from "react";

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

export default ResumePage;
