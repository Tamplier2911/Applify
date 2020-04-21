import React from "react";
// import { Provider } from "react-redux";

// component
import ResumePage from "./ResumePage";

// utils
import {
  findByTestAttr,
  setShallow,
  // setRender,
  // setMount,
  checkProps,
  // createStore,
} from "../../tests/testUtils";

describe("<ResumePage />", () => {
  it("renders without error", () => {
    const wrapper = setShallow(<ResumePage />);
    const resumePage = findByTestAttr(wrapper, "resume-page");
    expect(resumePage.length).toBe(1);
  });

  it("renders children", () => {
    const wrapper = setShallow(<ResumePage />);
    const resumePageChild = findByTestAttr(wrapper, "resume-page-child");
    expect(resumePageChild.length).toBe(1);
  });

  it("recieves correct props", () => {
    const expectedProps = { success: true };
    const err = checkProps(ResumePage, expectedProps, "success");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const wrapper = setShallow(<ResumePage />);
    const resumePage = findByTestAttr(wrapper, "resume-page");
    expect(resumePage).toMatchSnapshot();
  });
});
