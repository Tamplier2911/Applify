import React from "react";
import toJson from "enzyme-to-json";

// component
import SignIn from "./SignIn";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<SignIn />", () => {
  const initialState = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialState);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<SignIn store={store} />);
  });

  it("renders without an error", () => {
    const signIn = findByTestAttr(wrapper, "sign-in");
    expect(signIn).toHaveLength(1);
  });

  it("renders children - form holder", () => {
    const signInFormHolder = findByTestAttr(wrapper, "sign-in-form-holder");
    expect(signInFormHolder).toHaveLength(1);
  });

  it("renders children - form element", () => {
    const signInFormElement = findByTestAttr(wrapper, "sign-in-form-element");
    expect(signInFormElement).toHaveLength(1);
  });

  it("matches snapshot", () => {
    const signIn = findByTestAttr(wrapper, "sign-in");
    expect(toJson(signIn)).toMatchSnapshot();
  });
});
