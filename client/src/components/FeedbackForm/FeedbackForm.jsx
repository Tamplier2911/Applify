import "./FeedbackForm.scss";
import React from "react";

// components
import FormInput from "../FormInput/FormInput";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

// JS Rendering CSS
import {} from "./FeedbackFormStyles";

export const FeedbackForm = () => {
  return (
    <div className="feedback-form">
      <div className="feedback-form__title">Testing Title</div>
      <form
        className="feedback-form__form"
        autoComplete="off"
        onSubmit={e => e => console.log(e.target)}
      >
        <FormInput
          onInputChange={e => () => console.log(e.target)}
          value={""}
          label={"Testing Purposes"}
          // name="test"
          type="text"
          required
        />
        <TextInput
          rows="6"
          onInputChange={e => () => console.log(e.target)}
          label={"Feedback"}
          // name="feedback"
          // value={message}
          max="1000"
          //   placeholder="Don't be shy, share your ideas with me!"
          required
        />
        <Button type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default FeedbackForm;
