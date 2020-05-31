import React from "react";
import toJson from "enzyme-to-json";

// component
import FeedbackPage from "./FeedbackPage";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<FeedbackPage />", () => {
  const initialStore = {
    feedbacks: {
      allFeedbacks: [],
      currentlyLoaded: [],
      totalLoaded: 0,
      isLoading: false,
      errorMessage: null,
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<FeedbackPage store={store} />);
  });

  it("renders without error", () => {
    const feedbackPage = findByTestAttr(wrapper, "feedback-page");
    expect(feedbackPage.length).toBe(1);
  });

  it("renders children - feedback-page-with-spinner", () => {
    const feedbackPageWithSpinner = findByTestAttr(
      wrapper,
      "feedback-page-with-spinner"
    );
    expect(feedbackPageWithSpinner.length).toBe(1);
  });

  it("matches snapshot", () => {
    const feedbackPage = findByTestAttr(wrapper, "feedback-page");
    expect(toJson(feedbackPage)).toMatchSnapshot();
  });
});
