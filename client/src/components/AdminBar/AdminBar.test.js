import React from "react";

// component
import AdminBar from "./AdminBar";

// utils
import { setShallow, findByTestAttr } from "../../tests/testUtils";

describe("<AdminBar />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<AdminBar />);
  });

  it("renders without error", () => {
    const adminBar = findByTestAttr(wrapper, "admin-bar");
    expect(adminBar.length).toBe(1);
  });

  it("renders children link - users", () => {
    const adminBarUsersLink = findByTestAttr(wrapper, "admin-bar-users");
    expect(adminBarUsersLink.length).toBe(1);
  });

  it("renders children link - messages", () => {
    const adminBarMessagesLink = findByTestAttr(wrapper, "admin-bar-messages");
    expect(adminBarMessagesLink.length).toBe(1);
  });

  it("renders children link - blogs", () => {
    const adminBarMessagesLink = findByTestAttr(wrapper, "admin-bar-blogs");
    expect(adminBarMessagesLink.length).toBe(1);
  });

  it("renders children link - feeds", () => {
    const adminBarBlogsLink = findByTestAttr(wrapper, "admin-bar-feeds");
    expect(adminBarBlogsLink.length).toBe(1);
  });

  it("matches snapshot", () => {
    const adminBar = findByTestAttr(wrapper, "admin-bar");
    expect(adminBar).toMatchSnapshot();
  });
});
