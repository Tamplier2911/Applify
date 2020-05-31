import React from "react";
import toJson from "enzyme-to-json";

// component
import ContactsPage from "./ContactsPage";

// utils
import { setShallow, findByTestAttr } from "../../tests/testUtils";

describe("<ContactsPage />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<ContactsPage />);
  });

  it("renders without error", () => {
    const contactsPage = findByTestAttr(wrapper, "contacts-page");
    expect(contactsPage.length).toEqual(1);
  });

  it("renders children", () => {
    const contacts = findByTestAttr(wrapper, "contacts-page-cp");
    expect(contacts.length).toEqual(1);
  });

  it("matches snapshot", () => {
    const contactsPage = findByTestAttr(wrapper, "contacts-page");
    expect(toJson(contactsPage)).toMatchSnapshot();
  });
});
