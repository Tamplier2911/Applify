import React from "react";
import toJson from "enzyme-to-json";

// component
import FeedbackUpdate from "./FeedbackUpdate";

// utils
import {
  setShallowWRC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<FeedbackUpdate />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
    feedbacks: {
      allFeedbacks: [{ id: 1 }],
      currentlyLoaded: [],
      totalLoaded: 0,
      isLoading: false,
      errorMessage: null,
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowWRC(
      <FeedbackUpdate store={store} match={{ params: { id: 1 } }} />
    );
  });

  it("renders without an error", () => {
    const feedbackUpdate = findByTestAttr(wrapper, "feedback-update");
    expect(feedbackUpdate.length).toBe(1);
  });

  it("renders child - feedback update form", () => {
    const feedbackUpdateForm = findByTestAttr(wrapper, "feedback-update-form");
    expect(feedbackUpdateForm.length).toBe(1);
  });

  it("renders fallback if no object was found", () => {
    const initialStore = {
      lang: {
        languagePanelHidden: true,
        currentLanguage: "eng",
      },
      feedbacks: {
        allFeedbacks: [],
        currentlyLoaded: [],
        totalLoaded: 0,
        isLoading: false,
        errorMessage: null,
      },
    };
    const store = storeFactory(initialStore);
    wrapper = setShallowWRC(<FeedbackUpdate store={store} />);
    const feedbackUpdateFallback = findByTestAttr(
      wrapper,
      "feedback-update-fallback"
    );
    expect(feedbackUpdateFallback.length).toBe(1);
  });

  it("matches snapshot", () => {
    const feedbackUpdate = findByTestAttr(wrapper, "feedback-update");
    expect(toJson(feedbackUpdate)).toMatchSnapshot();
  });
});
