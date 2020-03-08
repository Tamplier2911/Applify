import "./FeedbackPage.scss";
import React from "react";

// components
import FeedbacksCollection from "../../components/FeedbacksCollection/FeedbacksCollection";
import FeedbackCreate from "../../components/FeedbackCreate/FeedbackCreate";

const FeedbackPage = () => {
  return (
    <div className="feedback-page">
      <FeedbacksCollection />
      <FeedbackCreate />
    </div>
  );
};

export default FeedbackPage;
