// import "./FeedbackForm.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import {
  sendFeedbackStart,
  updateFeedbackStart,
} from "../../redux/feedbacks/feedbacks.actions";
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
  FeedbackFormLength,
} from "./FeedbackFormStyles";

// component constants
import feedbackFormData from "./FeebackFormConstants";

export const FeedbackForm = ({
  lang,
  openModal,
  sendFeedbackStart,
  updateFeedbackStart,
  method,
  updateData,
}) => {
  const [feedback, setFeedback] = useState({
    feedbackMessage: method === "POST" ? "" : updateData.feedback,
    feedbackRating: method === "POST" ? "5" : updateData.rating,
    feedbackId: method === "POST" ? undefined : updateData._id,
  });

  const { feedbackMessage, feedbackRating } = feedback;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (feedbackMessage.length > 500)
      return openModal({
        header: "Attention!",
        content: "Feedback must not consist of more than 500 characters.",
      });
    if (feedbackRating.length > 1 || typeof feedbackRating !== "string")
      return openModal({
        header: "Attention!",
        content:
          "Rating must be defined as a string, rating must not consist of more than one character.",
      });
    if (!feedbackMessage.length || !feedbackRating.length)
      return openModal({
        header: "Attention!",
        content:
          "Please, enter your feedback. Use select bar to choose rating.",
      });
    method === "POST"
      ? sendFeedbackStart(feedback) &&
        setFeedback({ feedbackMessage: "", feedbackRating: "5" })
      : updateFeedbackStart(feedback);
  };

  const labels = Array.from(new Array(Number(feedbackRating)), (n, i) => i + 1);

  const {
    feedbackFormTitle,
    feedbackFormFeedback,
    feedbackFormSubmit,
    feedbackFormOptions,
    feedbackFormLength,
  } = feedbackFormData[lang];

  return (
    <FeedbackFormContainer>
      <FeedbackFormTitle lang={lang}>
        <FeedbackFormParagraph>{feedbackFormTitle[0]}</FeedbackFormParagraph>
        <FeedbackFormParagraph>{feedbackFormTitle[1]}</FeedbackFormParagraph>
      </FeedbackFormTitle>
      <FeedbackFormElement autoComplete="off" onSubmit={(e) => onSubmit(e)}>
        <TextInput
          onInputChange={(e) => onInputChange(e)}
          value={feedbackMessage}
          name="feedbackMessage"
          label={feedbackFormFeedback}
          rows="6"
          max="500"
          //   placeholder="Please, leave me a feedback!"
          required
        />
        <SelectInput
          onInputChange={(e) => onInputChange(e)}
          defaultValue={method === "POST" ? "5" : feedbackRating}
          name={"feedbackRating"}
          label={labels.map((label) => (
            <FeedbackFormRatingSVG key={label} />
          ))}
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
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps, {
  sendFeedbackStart,
  updateFeedbackStart,
  openModal,
})(FeedbackForm);
