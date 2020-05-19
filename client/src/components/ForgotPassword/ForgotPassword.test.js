import React from "react";

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
    console.log(wrapper.debug());
  });

  it("renders without an error", () => {
    const forgotPassword = findByTestAttr(wrapper, "forgot-password");
    expect(forgotPassword.length).toBe(1);
  });
});
