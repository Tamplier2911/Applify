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
  FeedbackCreateUnauthorized
} from "./FeedbackCreateStyles";

// component constants
import feedbackCreateData from "../../utils/ComponentFeedbackCreateConstants/componentFeedbackCreateConstants";

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
            {feedbackCreateNotAuthorized}
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
