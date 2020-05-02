import React from "react";

// component
import ResumePage from "./ResumePage";

// utils
import { findByTestAttr, setShallow, checkProps } from "../../tests/testUtils";

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

  it("recieves correct props", () => {
    const expectedProps = { success: true };
    const err = checkProps(ResumePage, expectedProps, "success");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const resumePage = findByTestAttr(wrapper, "resume-page");
    expect(resumePage).toMatchSnapshot();
  });
});
