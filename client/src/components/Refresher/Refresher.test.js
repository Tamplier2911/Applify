import React from "react";
import toJson from "enzyme-to-json";

// component
import Refresher from "./Refresher";

// utils
import { setShallow, findByTestAttr, checkProps } from "../../tests/testUtils";

describe("<Refresher />", () => {
  const mockFn = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<Refresher click={mockFn} />);
  });

  it("renders without an error", () => {
    const refresher = findByTestAttr(wrapper, "refresher");
    expect(refresher).toHaveLength(1);
  });

  it("renders svg", () => {
    const refresherIcon = findByTestAttr(wrapper, "refresher-icon");
    expect(refresherIcon).toHaveLength(1);
  });

  it("perform action on click", () => {
    const refresherIcon = findByTestAttr(wrapper, "refresher-icon");
    // assert mock to have not been triggered
    expect(mockFn).not.toHaveBeenCalled();
    // simulate click
    refresherIcon.simulate("click");
    // assert mock to be triggered
    expect(mockFn).toHaveBeenCalled();
  });

  it("recieves expected props", () => {
    const expectedProps = { click: () => {} };
    const err = checkProps(Refresher, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const refresher = findByTestAttr(wrapper, "refresher");
    expect(toJson(refresher)).toMatchSnapshot();
  });
});
