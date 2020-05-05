import React from "react";

// component
import ResumePage from "./ResumePage";

// utils
import { findByTestAttr, setShallow } from "../../tests/testUtils";

describe("<ResumePage />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<ResumePage />);
  });

  it("renders without error", () => {
    const resumePage = findByTestAttr(wrapper, "resume-page");
    expect(resumePage.length).toBe(1);
  });

  it("renders children", () => {
    const resumePageChild = findByTestAttr(wrapper, "resume-page-child");
    expect(resumePageChild.length).toBe(1);
  });

  it("matches snapshot", () => {
    const resumePage = findByTestAttr(wrapper, "resume-page");
    expect(resumePage).toMatchSnapshot();
  });
});
