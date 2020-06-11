import React from "react";
import toJson from "enzyme-to-json";

// component
import SignInForm from "./SignInForm";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<SignInForm />", () => {
  const initialState = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialState);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<SignInForm store={store} />);
  });

  it("renders without an error", () => {
    const signInForm = findByTestAttr(wrapper, "signin-form");
    expect(signInForm).toHaveLength(1);
  });

  it("renders children - form element", () => {
    const signInFormElement = findByTestAttr(wrapper, "signin-form-element");
    expect(signInFormElement).toHaveLength(1);
  });

  it("renders childrens - form inputs", () => {
    const signInFormInput = findByTestAttr(wrapper, "signin-form-input");
    expect(signInFormInput).toHaveLength(2);
  });

  it("to match snapshot", () => {
    const signInForm = findByTestAttr(wrapper, "signin-form");
    expect(toJson(signInForm)).toMatchSnapshot();
  });
});
