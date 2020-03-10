// import "./FeedbackCreate.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import FormHolder from "../FormHolder/FormHolder";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

// JS Rendering CSS
import {
  FeedbackCreateContainer,
  FeedbackCreateUnauthorized
} from "./FeedbackCreateStyles";

// component constants
import feedbackCreateData from "../../utils/ComponentFeedbackCreateConstants/componentFeedbackCreateConstants";

const loggedIn = true;

const FeedbackCreate = ({ lang }) => {
  const {
    feedbackCreateTitle,
    feedbackCreateNotAuthorized
  } = feedbackCreateData[lang];
  return (
    <FeedbackCreateContainer>
      <FormHolder type="feedback" title={feedbackCreateTitle}>
        {loggedIn ? (
          <FeedbackForm />
        ) : (
          <FeedbackCreateUnauthorized>
            {feedbackCreateNotAuthorized}
          </FeedbackCreateUnauthorized>
        )}
      </FormHolder>
    </FeedbackCreateContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps)(FeedbackCreate);
