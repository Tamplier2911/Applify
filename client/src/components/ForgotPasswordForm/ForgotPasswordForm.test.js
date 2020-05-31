import React from "react";
import toJson from "enzyme-to-json";

// component
import ForgotPasswordForm from "./ForgotPasswordForm";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<ForgotPasswordForm />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<ForgotPasswordForm store={store} />);
  });

  it("renders without an error", () => {
    const forgotPasswordForm = findByTestAttr(wrapper, "forgot-password-form");
    expect(forgotPasswordForm.length).toBe(1);
  });

  it("renders children - forgot password form element", () => {
    const forgotPasswordFormElement = findByTestAttr(
      wrapper,
      "forgot-password-form-element"
    );
    expect(forgotPasswordFormElement.length).toBe(1);
  });

  it("matches snapshot", () => {
    const forgotPasswordForm = findByTestAttr(wrapper, "forgot-password-form");
    expect(toJson(forgotPasswordForm)).toMatchSnapshot();
  });
});
