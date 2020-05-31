import React from "react";
import toJson from "enzyme-to-json";

// component
import LazzySpinner from "./LazzySpinner";

// utils
import { setShallow, findByTestAttr } from "../../tests/testUtils";

describe("<LazzySpinner />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<LazzySpinner />);
  });

  it("renders without an error", () => {
    const lazzySpinner = findByTestAttr(wrapper, "lazzy-spinner");
    expect(lazzySpinner.length).toBe(1);
  });

  it("renders children - loading square", () => {
    const lazzySpinnerSquare = findByTestAttr(wrapper, "lazzy-spinner-square");
    expect(lazzySpinnerSquare.length).toBe(1);
  });

  it("matches snapshot", () => {
    const lazzySpinner = findByTestAttr(wrapper, "lazzy-spinner");
    expect(toJson(lazzySpinner)).toMatchSnapshot();
  });
});
