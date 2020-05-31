import React from "react";
import toJson from "enzyme-to-json";

// component
import FeedbackCard from "./FeedbackCard";

// utils
import {
  setShallowC,
  findByTestAttr,
  checkProps,
  storeFactory,
} from "../../tests/testUtils";

describe("<FeedbackCard />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialStore);
  const data = {
    color: "#fff",
    createdAt: "2020",
    feedback: "good",
    rating: "5",
    user: {},
  };

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<FeedbackCard store={store} data={data} />);
  });

  it("renders without an error", () => {
    const feedbackCard = findByTestAttr(wrapper, "feedback-card");
    expect(feedbackCard.length).toBe(1);
  });

  it("renders child - card body", () => {
    const feedbackCardBody = findByTestAttr(wrapper, "feedback-card-body");
    expect(feedbackCardBody.length).toBe(1);
  });

  it("renders child - card controlls", () => {
    const feedbackCardControlls = findByTestAttr(
      wrapper,
      "feedback-card-controlls"
    );
    expect(feedbackCardControlls.length).toBe(1);
  });

  it("recieves expected props", () => {
    const expectedProps = {
      color: "#fff",
      createdAt: "2020",
      feedback: "good",
      rating: "5",
      user: {},
    };
    const err = checkProps(FeedbackCard, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const feedbackCard = findByTestAttr(wrapper, "feedback-card");
    expect(toJson(feedbackCard)).toMatchSnapshot();
  });
});
