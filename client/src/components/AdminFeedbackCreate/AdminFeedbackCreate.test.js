import React from "react";

// component
import AdminFeedbackCreate from "./AdminFeedbackCreate";

// utils
import { setShallow, findByTestAttr } from "../../tests/testUtils";

describe("<AdminFeedbackCreate />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<AdminFeedbackCreate />);
  });

  it("renders without error", () => {
    const adminFBCreate = findByTestAttr(wrapper, "admin-fb-create");
    expect(adminFBCreate.length).toBe(1);
  });

  it("renders children", () => {
    const adminFBChild = findByTestAttr(wrapper, "admin-fb-create-child");
    expect(adminFBChild.length).toBe(1);
  });

  it("matches snapshot", () => {
    const adminFBCreate = findByTestAttr(wrapper, "admin-fb-create");
    expect(adminFBCreate).toMatchSnapshot();
  });
});
