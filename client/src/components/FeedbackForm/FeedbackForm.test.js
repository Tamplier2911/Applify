import React from "react";
import toJson from "enzyme-to-json";

// component
import FeedbackForm from "./FeedbackForm";

// utils
import {
  setShallowC,
  findByTestAttr,
  checkProps,
  storeFactory,
} from "../../tests/testUtils";

describe("<FeedbackForm />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };

  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<FeedbackForm store={store} method="POST" />);
  });

  it("renders without an error", () => {
    const feedbackForm = findByTestAttr(wrapper, "feedback-form");
    expect(feedbackForm.length).toBe(1);
  });

  it("renders children - feedback form", () => {
    const feedbackFormElement = findByTestAttr(
      wrapper,
      "feedback-form-element"
    );
    expect(feedbackFormElement.length).toBe(1);
  });

  it("renders children - feedback inputs", () => {
    const feedbackFormInputs = findByTestAttr(wrapper, "feedback-form-input");
    expect(feedbackFormInputs.length).toBe(2);
  });

  it("recieves expeted props", () => {
    const expectedProps = {
      method: "POST",
      updateData: { feedback: "feed", rating: "5", _id: "123213" },
    };
    const err = checkProps(FeedbackForm, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const feedbackForm = findByTestAttr(wrapper, "feedback-form");
    expect(toJson(feedbackForm)).toMatchSnapshot();
  });
});
