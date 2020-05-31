import React from "react";
import toJson from "enzyme-to-json";

// component
import FeedbackView from "./FeedbackView";

// utils
import { setShallow, findByTestAttr, checkProps } from "../../tests/testUtils";

describe("<FeedbackView />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<FeedbackView user={{}} rating={"2"} />);
  });

  it("renders without an error", () => {
    const feedbackView = findByTestAttr(wrapper, "feedback-view");
    expect(feedbackView.length).toBe(1);
  });

  it("renders children - left", () => {
    const feedbackViewLeft = findByTestAttr(wrapper, "feedback-view-left");
    expect(feedbackViewLeft.length).toBe(1);
  });

  it("renders children - right", () => {
    const feedbackViewRight = findByTestAttr(wrapper, "feedback-view-right");
    expect(feedbackViewRight.length).toBe(1);
  });

  it("recieves expected props", () => {
    const expectedProps = {
      count: 2,
      rating: "5",
      feedback: "Good!",
      color: "#333",
      user: {},
    };
    const err = checkProps(FeedbackView, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const feedbackView = findByTestAttr(wrapper, "feedback-view");
    expect(toJson(feedbackView)).toMatchSnapshot();
  });
});
