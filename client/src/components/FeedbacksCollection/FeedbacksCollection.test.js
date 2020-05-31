import React from "react";
import toJson from "enzyme-to-json";

// component
import FeedbacksCollection from "./FeedbacksCollection";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
  checkProps,
} from "../../tests/testUtils";

describe("<FeedbacksCollection />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<FeedbacksCollection store={store} feedbacks={[]} />);
  });

  it("renders without an error", () => {
    const feedbacksCollection = findByTestAttr(wrapper, "feedbacks-collection");
    expect(feedbacksCollection.length).toBe(1);
  });

  it("renders children - controlls", () => {
    const feedbacksCollectionControlls = findByTestAttr(
      wrapper,
      "feedbacks-collection-controlls"
    );
    expect(feedbacksCollectionControlls.length).toBe(1);
  });

  it("renders recieves expected props", () => {
    const expectedProps = { feedbacks: [] };
    const err = checkProps(FeedbacksCollection, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const feedbacksCollection = findByTestAttr(wrapper, "feedbacks-collection");
    expect(toJson(feedbacksCollection)).toMatchSnapshot();
  });
});
