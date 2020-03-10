// import "./FeedbackPage.scss";
import React from "react";

// components
import FeedbacksCollection from "../../components/FeedbacksCollection/FeedbacksCollection";
import FeedbackCreate from "../../components/FeedbackCreate/FeedbackCreate";

// JS Rendering CSS
import { FeedbackPageContainer } from "./FeedbackPageStyles";

const FeedbackPage = () => {
  return (
    <FeedbackPageContainer>
      <FeedbacksCollection />
      <FeedbackCreate />
    </FeedbackPageContainer>
  );
};

export default FeedbackPage;
