import React from "react";
import toJson from "enzyme-to-json";

// component
import WithSpinnerHOC from "./WithSpinnerHOC";

// utils
import { setShallow, findByTestAttr, checkProps } from "../../tests/testUtils";

describe("<WithSpinnerHOC />", () => {
  let wrapper;
  const TestComponent = () => <div>Hello, World!</div>;
  const TestComponentWithSpinner = WithSpinnerHOC(TestComponent);
  beforeEach(() => {
    wrapper = setShallow(<TestComponentWithSpinner />);
  });

  it("renders without an error", () => {
    const withSpinnerHoc = findByTestAttr(wrapper, "content-is-loaded");
    expect(withSpinnerHoc).toHaveLength(1);
  });

  it("renders loading fallback if isLoading is true", () => {
    wrapper = setShallow(<TestComponentWithSpinner isLoading={true} />);
    const spinnerFallback = findByTestAttr(wrapper, "content-is-loading");
    expect(spinnerFallback).toHaveLength(1);
  });

  it("renders wrapped component if isLoading is false", () => {
    const wrappedComponent = findByTestAttr(wrapper, "content-is-loaded");
    expect(wrappedComponent).toHaveLength(1);
  });

  it("recieves expected props", () => {
    const expectedProps = { isLoading: false, otherProps: {} };
    const err = checkProps(TestComponentWithSpinner, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const withSpinnerHoc = findByTestAttr(wrapper, "content-is-loaded");
    expect(toJson(withSpinnerHoc)).toMatchSnapshot();
  });
});
