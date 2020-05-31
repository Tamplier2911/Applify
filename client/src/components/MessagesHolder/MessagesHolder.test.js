import React from "react";
import toJson from "enzyme-to-json";

// components
import MessagesHolder from "./MessagesHolder";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<MessagesHolder />", () => {
  const initialStore = {
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
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<MessagesHolder store={store} />);
  });

  it("renders without an error", () => {
    const messagesHolder = findByTestAttr(wrapper, "messages-holder");
    expect(messagesHolder.length).toBe(1);
  });

  it("renders children - search bar", () => {
    const messagesHolderSearch = findByTestAttr(
      wrapper,
      "messages-holder-search"
    );
    expect(messagesHolderSearch.length).toBe(1);
  });

  it("renders children - collection holder", () => {
    const messagesHolderColHolder = findByTestAttr(
      wrapper,
      "messages-holder-collection-holder"
    );
    expect(messagesHolderColHolder.length).toBe(1);
  });

  it("renders children - collection", () => {
    const messagesHolderCollection = findByTestAttr(
      wrapper,
      "messages-holder-collection"
    );
    expect(messagesHolderCollection.length).toBe(1);
  });

  it("matches snapshot", () => {
    const messagesHolder = findByTestAttr(wrapper, "messages-holder");
    expect(toJson(messagesHolder)).toMatchSnapshot();
  });
});
