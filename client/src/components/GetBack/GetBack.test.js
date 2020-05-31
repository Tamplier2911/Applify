import React from "react";
import toJson from "enzyme-to-json";

// component
import GetBack from "./GetBack";

// utils
import { setShallowR, findByTestAttr } from "../../tests/testUtils";

describe("<GetBack />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallowR(<GetBack />);
  });

  it("renders without an error", () => {
    const getBack = findByTestAttr(wrapper, "get-back");
    expect(getBack.length).toBe(1);
  });

  it("triggers onClick handler", () => {
    // define mock function
    let mockFn = jest.fn();
    // render initial component with router
    wrapper = setShallowR(<GetBack />);
    // rewrite history object with mock
    wrapper.setProps({ history: { push: mockFn } });
    // find desired object to initiate click
    const getBack = findByTestAttr(wrapper, "get-back");
    // initiate click
    getBack.simulate("click");
    // get calls length from mock
    const getClickCount = mockFn.mock.calls.length;
    // assert calls length to be 1
    expect(getClickCount).toBe(1);
  });

  it("renders children - SVG", () => {
    const getBackSvg = findByTestAttr(wrapper, "get-back-svg");
    expect(getBackSvg.length).toBe(1);
  });

  it("matches snapshot", () => {
    const getBack = findByTestAttr(wrapper, "get-back");
    expect(toJson(getBack)).toMatchSnapshot();
  });
});
