import React from "react";
import toJson from "enzyme-to-json";

// component
import ForgotPassword from "./ForgotPassword";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<ForgotPassword />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<ForgotPassword store={store} />);
  });

  it("renders without an error", () => {
    const forgotPassword = findByTestAttr(wrapper, "forgot-password");
    expect(forgotPassword.length).toBe(1);
  });

  it("renders children - forgot password holder", () => {
    const forgotPasswordHolder = findByTestAttr(
      wrapper,
      "forgot-password-holder"
    );
    expect(forgotPasswordHolder.length).toBe(1);
  });

  it("renders children - forgot password form", () => {
    const forgotPasswordForm = findByTestAttr(wrapper, "forgot-password-form");
    expect(forgotPasswordForm.length).toBe(1);
  });

  it("matches snapshot", () => {
    const forgotPassword = findByTestAttr(wrapper, "forgot-password");
    expect(toJson(forgotPassword)).toMatchSnapshot();
  });
});
