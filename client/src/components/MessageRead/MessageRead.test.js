import React from "react";

// component
import MessageRead from "./MessageRead";

// utils
import {
  setShallowWRC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<MessageRead />", () => {
  const initialState = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
    messages: {
      allMessages: {
        sdk123: {
          _id: "sdk123",
          from: {},
          createdAt: Date.now(),
          name: "Test Message",
          email: "test@email.com",
          message: "To be tested!",
        },
      },
      isLoading: false,
      errorMessage: null,
    },
  };
  const store = storeFactory(initialState);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowWRC(
      <MessageRead store={store} testMessageId={"sdk123"} />
    );
  });

  it("renders without an error", () => {
    const messageRead = findByTestAttr(wrapper, "message-read");
    expect(messageRead.length).toBe(1);
  });

  it("renders children - message body", () => {
    const messageReadBody = findByTestAttr(wrapper, "message-read-body");
    expect(messageReadBody.length).toBe(1);
  });

  it("renders children - message controls", () => {
    const messageReadControlls = findByTestAttr(
      wrapper,
      "message-read-controlls"
    );
    expect(messageReadControlls.length).toBe(1);
  });

  it("renders fallback when message with that ID is not found", () => {
    const initialState = {
      lang: {
        languagePanelHidden: true,
        currentLanguage: "eng",
      },
      messages: {
        allMessages: {},
        isLoading: false,
        errorMessage: null,
      },
    };
    const store = storeFactory(initialState);
    wrapper = setShallowWRC(<MessageRead store={store} />);

    const messageReadFallback = findByTestAttr(
      wrapper,
      "message-read-fallback"
    );
    expect(messageReadFallback.length).toBe(1);
  });

  it("matches snapshot", () => {
    const messageRead = findByTestAttr(wrapper, "message-read");
    expect(messageRead).toMatchSnapshot();
  });
});
