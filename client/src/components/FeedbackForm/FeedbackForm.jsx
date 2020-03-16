// import "./FeedbackForm.scss";
import React, { useState } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import TextInput from "../TextInput/TextInput";
import SelectInput from "../SelectInput/SelectInput";
import Button from "../Button/Button";

// JS Rendering CSS
import {
  FeedbackFormContainer,
  FeedbackFormTitle,
  FeedbackFormParagraph,
  FeedbackFormElement,
  FeedbackFormRatingSVG,
  FeedbackFormLength
} from "./FeedbackFormStyles";

// component constants
import feedbackFormData from "../../utils/ComponentFeedbackFormConstants/componentFeedbackFormConstants";

export const FeedbackForm = ({ lang }) => {
  const [feedback, setFeedback] = useState({
    feedbackMessage: "",
    feedbackRating: "5"
  });
  const { feedbackMessage, feedbackRating } = feedback;

  const onInputChange = e => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    // validate input
    console.log(feedback);
  };

  const labels = Array.from(new Array(Number(feedbackRating)), (n, i) => i + 1);

  const {
    feedbackFormTitle,
    feedbackFormFeedback,
    feedbackFormSubmit,
    feedbackFormOptions,
    feedbackFormLength
  } = feedbackFormData[lang];

  return (
    <FeedbackFormContainer>
      <FeedbackFormTitle lang={lang}>
        <FeedbackFormParagraph>{feedbackFormTitle[0]}</FeedbackFormParagraph>
        <FeedbackFormParagraph>{feedbackFormTitle[1]}</FeedbackFormParagraph>
      </FeedbackFormTitle>
      <FeedbackFormElement autoComplete="off" onSubmit={e => onSubmit(e)}>
        <TextInput
          rows="6"
          onInputChange={e => onInputChange(e)}
          label={feedbackFormFeedback}
          name="feedbackMessage"
          value={feedbackMessage}
          max="500"
          //   placeholder="Please, leave me a feedback!"
          required
        />
        <SelectInput
          label={labels.map(label => (
            <FeedbackFormRatingSVG key={label} />
          ))}
          name={"feedbackRating"}
          onInputChange={e => onInputChange(e)}
          defaultValue={"5"}
          options={feedbackFormOptions}
          required
        />
        <Button type="submit" value={feedbackFormSubmit} />
      </FeedbackFormElement>
      <FeedbackFormLength>
        {feedbackFormLength + " "}
        {500 - feedbackMessage.length}
      </FeedbackFormLength>
    </FeedbackFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps)(FeedbackForm);
