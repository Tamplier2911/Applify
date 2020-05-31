import React from "react";
import toJson from "enzyme-to-json";

// component
import AuthorizationPage from "./AuthorizationPage";

// utils
import { setShallow, findByTestAttr } from "../../tests/testUtils";

describe("<AuthorizationPage />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<AuthorizationPage />);
  });

  it("renders without error", () => {
    const authPage = findByTestAttr(wrapper, "auth-page");
    expect(authPage.length).toBe(1);
  });

  it("renders childrens", () => {
    const signIn = findByTestAttr(wrapper, "auth-page-signin");
    expect(signIn.length).toBe(1);

    const signUp = findByTestAttr(wrapper, "auth-page-signup");
    expect(signUp.length).toBe(1);
  });

  it("matching snapshot", () => {
    const authPage = findByTestAttr(wrapper, "auth-page");
    expect(toJson(authPage)).toMatchSnapshot();
  });
});
