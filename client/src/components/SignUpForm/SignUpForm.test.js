import React from "react";
import toJson from "enzyme-to-json";

// component
import SignUpForm from "./SignUpForm";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<SignUpForm />", () => {
  const initialState = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialState);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<SignUpForm store={store} />);
  });

  it("renders without an error", () => {
    const signUpForm = findByTestAttr(wrapper, "signup-form");
    expect(signUpForm).toHaveLength(1);
  });

  it("renders children - form element", () => {
    const signUpFormElement = findByTestAttr(wrapper, "signup-form-element");
    expect(signUpFormElement).toHaveLength(1);
  });

  it("renders childrens - form input", () => {
    const signUpFormInput = findByTestAttr(wrapper, "signup-form-input");
    expect(signUpFormInput).toHaveLength(4);
  });

  it("matches snapshot", () => {
    const signUpForm = findByTestAttr(wrapper, "signup-form");
    expect(toJson(signUpForm)).toMatchSnapshot();
  });
});
