import React from "react";
import toJson from "enzyme-to-json";

// component
import FormHolder from "./FormHolder";

// utils
import { setShallow, findByTestAttr, checkProps } from "../../tests/testUtils";

describe("<FormHolder />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<FormHolder />);
  });

  it("renders without an error", () => {
    const formHolder = findByTestAttr(wrapper, "form-holder");
    expect(formHolder.length).toBe(1);
  });

  it("renders children - form holder composition", () => {
    const formHolderComposition = findByTestAttr(
      wrapper,
      "form-holder-composition"
    );
    expect(formHolderComposition.length).toBe(1);
  });

  it("renders children - form holder formwrap", () => {
    const formHolderFormWrap = findByTestAttr(wrapper, "form-holder-formwrap");
    expect(formHolderFormWrap.length).toBe(1);
  });

  it("recieves expected props", () => {
    const expectedProps = {
      type: "signIn",
      title: "Enter your email and password.",
      children: React.createElement("div", null),
    };
    const err = checkProps(FormHolder, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const formHolder = findByTestAttr(wrapper, "form-holder");
    expect(toJson(formHolder)).toMatchSnapshot();
  });
});
