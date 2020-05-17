import React from "react";

// component
import CreateUpdateUserForm from "./CreateUpdateUserForm";

// utils
import {
  setShallowC,
  findByTestAttr,
  checkProps,
  storeFactory,
} from "../../tests/testUtils";

describe("<CreateUpdateUserForm />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<CreateUpdateUserForm store={store} method="POST" />);
  });

  it("renders without an error", () => {
    const createUpdateUserForm = findByTestAttr(
      wrapper,
      "create-update-user-form"
    );
    expect(createUpdateUserForm.length).toBe(1);
  });

  it("renders children - form element", () => {
    const createUpdateUserFormElem = findByTestAttr(
      wrapper,
      "create-update-user-form-element"
    );
    expect(createUpdateUserFormElem.length).toBe(1);
  });

  it("renders childrens - input elements", () => {
    const createUpdateUserFormInput = findByTestAttr(
      wrapper,
      "create-update-user-form-input"
    );
    expect(createUpdateUserFormInput.length).toBe(3);
  });

  it("recieves expected props", () => {
    const expectedProps = { method: "GET", updateData: {} };
    const err = checkProps(CreateUpdateUserForm, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const createUpdateUserForm = findByTestAttr(
      wrapper,
      "create-update-user-form"
    );
    expect(createUpdateUserForm).toMatchSnapshot();
  });
});
