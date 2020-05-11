import React from "react";

// component
import ContactsForm from "./ContactsForm";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<ContactsForm />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<ContactsForm store={store} />);
  });

  it("renders without an error", () => {
    const contactsForm = findByTestAttr(wrapper, "contacts-form");
    expect(contactsForm.length).toBe(1);
  });

  it("renders children - contacts form", () => {
    const contactsFormElement = findByTestAttr(
      wrapper,
      "contacts-form-element"
    );
    expect(contactsFormElement.length).toBe(1);
  });

  it("renders children - contacts form inputs", () => {
    const contactsFormInput = findByTestAttr(wrapper, "contacts-form-input");
    expect(contactsFormInput.length).toBe(3);
  });

  it("renders children - contacts form submit", () => {
    const contactsFormSubmit = findByTestAttr(wrapper, "contacts-form-submit");
    expect(contactsFormSubmit.length).toBe(1);
  });

  it("matches snapshot", () => {
    const contactsForm = findByTestAttr(wrapper, "contacts-form");
    expect(contactsForm).toMatchSnapshot();
  });
});
