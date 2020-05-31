import React from "react";
import toJson from "enzyme-to-json";

// component
import Button from "./Button";

// utils
import { setShallow, findByTestAttr, checkProps } from "../../tests/testUtils";

describe("<Button />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<Button />);
  });

  it("renders without an error", () => {
    const button = findByTestAttr(wrapper, "button");
    expect(button.length).toBe(1);
  });

  it("renders children - button body", () => {
    const buttonBody = findByTestAttr(wrapper, "button-body");
    expect(buttonBody.length).toBe(1);
  });

  it("recieves expected props", () => {
    const expectedProps = { type: "submit", value: "Submit", click: () => {} };
    const err = checkProps(Button, expectedProps, "prop");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const button = findByTestAttr(wrapper, "button");
    expect(toJson(button)).toMatchSnapshot();
  });
});
