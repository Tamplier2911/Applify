import React from "react";

// component
import ProfilePasswordForm from "./ProfilePasswordForm";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<ProfilePasswordForm />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<ProfilePasswordForm store={store} />);
  });

  it("renders without an error", () => {
    const profilePasswordForm = findByTestAttr(
      wrapper,
      "profile-password-form"
    );
    expect(profilePasswordForm.length).toBe(1);
  });

  it("renders - children profile info form element", () => {
    const profilePasswordFormElement = findByTestAttr(
      wrapper,
      "profile-password-form-element"
    );
    expect(profilePasswordFormElement.length).toBe(1);
  });

  it("matches snapshot", () => {
    const profilePasswordForm = findByTestAttr(
      wrapper,
      "profile-password-form"
    );
    expect(profilePasswordForm).toMatchSnapshot();
  });
});
