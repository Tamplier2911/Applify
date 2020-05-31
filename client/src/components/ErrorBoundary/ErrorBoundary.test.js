import React from "react";
import toJson from "enzyme-to-json";

// component
import ErrorBoundary from "./ErrorBoundary";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<ErrorBoundary />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<ErrorBoundary store={store} />);
    wrapper.setState({ hasErrored: true });
  });

  it("renders without an error", () => {
    const errorBoundary = findByTestAttr(wrapper, "error-boundary");
    expect(errorBoundary.length).toBe(1);
  });

  it("renders boundary content", () => {
    const errorBoundaryContent = findByTestAttr(wrapper, "error-boundary-text");
    expect(errorBoundaryContent.length).toBe(1);
  });

  it("matches snapshot", () => {
    const errorBoundary = findByTestAttr(wrapper, "error-boundary");
    expect(toJson(errorBoundary)).toMatchSnapshot();
  });
});
