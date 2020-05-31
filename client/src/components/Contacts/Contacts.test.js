import React from "react";
import toJson from "enzyme-to-json";

// component
import Contacts from "./Contacts";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<Contacts />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<Contacts store={store} />);
  });

  it("renders without an error", () => {
    const contacts = findByTestAttr(wrapper, "contacts");
    expect(contacts.length).toBe(1);
  });

  it("renders children - form holder", () => {
    const contactsFormHolder = findByTestAttr(wrapper, "contacts-form-holder");
    expect(contactsFormHolder.length).toBe(1);
  });

  it("matches snapshot", () => {
    const contacts = findByTestAttr(wrapper, "contacts");
    expect(toJson(contacts)).toMatchSnapshot();
  });
});
