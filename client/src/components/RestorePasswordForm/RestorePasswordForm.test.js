import React from "react";
import toJson from "enzyme-to-json";

// component
import RestorePasswordForm from "./RestorePasswordForm";

// utils
import {
  setShallowWRC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<RestorePasswordForm />", () => {
  const initialState = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialState);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowWRC(<RestorePasswordForm store={store} />);
  });

  it("renders without an error", () => {
    const restorePasswordForm = findByTestAttr(
      wrapper,
      "restore-password-form"
    );
    expect(restorePasswordForm).toHaveLength(1);
  });

  it("renders children - form element", () => {
    const restorePasswordFormElement = findByTestAttr(
      wrapper,
      "restore-password-form-element"
    );
    expect(restorePasswordFormElement).toHaveLength(1);
  });

  it("renders children - form input", () => {
    const restorePasswordFormInput = findByTestAttr(
      wrapper,
      "restore-password-form-input"
    );
    expect(restorePasswordFormInput).toHaveLength(2);
  });

  it("renders children - form submit", () => {
    const restorePasswordFormSubmit = findByTestAttr(
      wrapper,
      "restore-password-form-submit"
    );
    expect(restorePasswordFormSubmit).toHaveLength(1);
  });

  it("to match snapshot", () => {
    const restorePasswordForm = findByTestAttr(
      wrapper,
      "restore-password-form"
    );
    expect(toJson(restorePasswordForm)).toMatchSnapshot();
  });
});
