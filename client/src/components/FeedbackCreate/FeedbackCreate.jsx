// import "./FeedbackCreate.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { selectIsLogged } from "../../redux/auth/auth.selectors";

// components
import FormHolder from "../FormHolder/FormHolder";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

// JS Rendering CSS
import {
  FeedbackCreateContainer,
  FeedbackCreateUnauthorized,
  FeedbackCreateLink
} from "./FeedbackCreateStyles";

// component constants
import feedbackCreateData from "./FeedbackCreateConstants";

const FeedbackCreate = ({ lang, isLogged, method, updateData }) => {
  const {
    feedbackCreateTitle,
    feedbackUpdateTitle,
    feedbackCreateNotAuthorized
  } = feedbackCreateData[lang];

  return (
    <FeedbackCreateContainer>
      <FormHolder
        type="feedback"
        title={method === "POST" ? feedbackCreateTitle : feedbackUpdateTitle}
      >
        {isLogged ? (
          <FeedbackForm method={method} updateData={updateData} />
        ) : (
          <FeedbackCreateUnauthorized>
            {feedbackCreateNotAuthorized[0]}
            <FeedbackCreateLink to="/authorization">
              {feedbackCreateNotAuthorized[1]}
            </FeedbackCreateLink>
            {feedbackCreateNotAuthorized[2]}
          </FeedbackCreateUnauthorized>
        )}
      </FormHolder>
    </FeedbackCreateContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
  isLogged: selectIsLogged
});

export default connect(mapStateToProps)(FeedbackCreate);
