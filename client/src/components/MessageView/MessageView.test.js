import React from "react";

// component
import MessageView from "./MessageView";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
  checkProps,
} from "../../tests/testUtils";

describe("<MessageView />", () => {
  const initialState = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialState);

  const message = {
    createdAt: "10-05-2020",
    _id: "sdk321",
    name: "Breadberry",
    email: "ex@mple.com",
    message: "Well, hello!",
    form: {},
  };

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<MessageView store={store} {...message} />);
  });

  it("renders without an error", () => {
    const messageView = findByTestAttr(wrapper, "message-view");
    expect(messageView.length).toBe(1);
  });

  it("renders children - message content", () => {
    const messageViewContent = findByTestAttr(wrapper, "message-view-content");
    expect(messageViewContent.length).toBe(1);
  });

  it("renders children - message controls", () => {
    const messageViewControls = findByTestAttr(
      wrapper,
      "message-view-controls"
    );
    expect(messageViewControls.length).toBe(1);
  });

  it("recieves expected props", () => {
    const expectedProps = {
      createdAt: "10-05-2020",
      _id: "sdk321",
      name: "Breadberry",
      email: "ex@mple.com",
      message: "Well, hello!",
      form: {},
    };
    const err = checkProps(MessageView, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const messageView = findByTestAttr(wrapper, "message-view-content");
    expect(messageView).toMatchSnapshot();
  });
});
