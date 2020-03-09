import "./FeedbackCreate.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import FormHolder from "../FormHolder/FormHolder";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

// component constants
import feedbackCreateData from "../../utils/ComponentFeedbackCreateConstants/componentFeedbackCreateConstants";

const loggedIn = true;

const FeedbackCreate = ({ lang }) => {
  const { feedbackCreateTitle } = feedbackCreateData[lang];
  return (
    <div className="feedback-create">
      <FormHolder type="feedback" title={feedbackCreateTitle}>
        {loggedIn ? (
          <FeedbackForm />
        ) : (
          <div className="feedback-create__not-authorized">
            You have to authorize, in order to post review.
          </div>
        )}
      </FormHolder>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps)(FeedbackCreate);
