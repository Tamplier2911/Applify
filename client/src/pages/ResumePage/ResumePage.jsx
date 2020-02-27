// import "./ResumePage.scss";
import React from "react";

// components
import Resume from "../../components/Resume/Resume";

// JS Rendering CSS
import { ResumePageContainer } from "./ResumePageStyles";

const ResumePage = () => {
  return (
    <ResumePageContainer>
      <Resume />
    </ResumePageContainer>
  );
};

export default ResumePage;
