import React from "react";
import toJson from "enzyme-to-json";

// component
import SignUp from "./SignUp";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<SignUp />", () => {
  const initialState = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialState);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<SignUp store={store} />);
  });

  it("renders without an error", () => {
    const signUp = findByTestAttr(wrapper, "sign-up");
    expect(signUp).toHaveLength(1);
  });

  it("renders children - form holder", () => {
    const signUpFormHolder = findByTestAttr(wrapper, "sign-up-form-holder");
    expect(signUpFormHolder).toHaveLength(1);
  });

  it("renders children - form element", () => {
    const signUpFormElement = findByTestAttr(wrapper, "sign-up-form-element");
    expect(signUpFormElement).toHaveLength(1);
  });

  it("renders without an error", () => {
    const signUp = findByTestAttr(wrapper, "signUp");
    expect(toJson(signUp)).toMatchSnapshot();
  });
});
