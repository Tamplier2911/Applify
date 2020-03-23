// import "./FeedbackForm.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { sendFeedbackStart } from "../../redux/feedbacks/feedbacks.actions";
import { openModal } from "../../redux/modal/modal.actions";

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

export const FeedbackForm = ({ lang, openModal, sendFeedbackStart }) => {
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
    if (feedbackMessage.length > 500)
      return openModal({
        header: "Attention!",
        content: "Feedback must not consist of more than 500 characters."
      });
    if (feedbackRating.length > 1 || typeof feedbackRating !== "string")
      return openModal({
        header: "Attention!",
        content:
          "Rating must be defined as a string, rating must not consist of more than one character."
      });
    if (!feedbackMessage.length || !feedbackRating.length)
      return openModal({
        header: "Attention!",
        content: "Please, enter your feedback. Use select bar to choose rating."
      });
    sendFeedbackStart(feedback);
    setFeedback({ feedbackMessage: "", feedbackRating: "5" });
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

export default connect(mapStateToProps, { sendFeedbackStart, openModal })(
  FeedbackForm
);
