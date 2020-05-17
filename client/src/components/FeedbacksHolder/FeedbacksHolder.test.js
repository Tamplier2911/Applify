import React from "react";

// component
import FeedbacksHolder from "./FeedbacksHolder";

// utils
import {
  setShallowWRC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<CollectionHolder />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowWRC(<FeedbacksHolder store={store} />);
  });

  it("renders without an error", () => {
    const feedbacksHolder = findByTestAttr(wrapper, "feedbacks-holder");
    expect(feedbacksHolder.length).toBe(1);
  });

  it("renders children - holder search bar", () => {
    const feedbacksHolderSearchbar = findByTestAttr(
      wrapper,
      "feedbacks-holder-search"
    );
    expect(feedbacksHolderSearchbar.length).toBe(1);
  });

  it("renders children - holder component", () => {
    const feedbacksHolderComponent = findByTestAttr(
      wrapper,
      "feedbacks-holder-component"
    );
    expect(feedbacksHolderComponent.length).toBe(1);
  });

  it("renders children - holder collection", () => {
    const feedbacksHolderCollection = findByTestAttr(
      wrapper,
      "feedbacks-holder-collection"
    );
    expect(feedbacksHolderCollection.length).toBe(1);
  });

  it("matches snapshot", () => {
    const feedbacksHolder = findByTestAttr(wrapper, "feedbacks-holder");
    expect(feedbacksHolder).toMatchSnapshot();
  });
});
