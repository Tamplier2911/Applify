import React from "react";

// component
import BlogPlaceholder from "./BlogPlaceholder";

// utils
import { setShallow, findByTestAttr, checkProps } from "../../tests/testUtils";

describe("<BlogPlaceholder />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<BlogPlaceholder />);
  });

  it("renders without an error", () => {
    const blogPlaceholder = findByTestAttr(wrapper, "blog-placeholder");
    expect(blogPlaceholder.length).toBe(1);
  });

  it("renders wrapper children", () => {
    const blogPlaceholderWrap = findByTestAttr(
      wrapper,
      "blog-placeholder-wrap"
    );
    expect(blogPlaceholderWrap.length).toBe(1);
  });

  it("recieves correct props", () => {
    const expectedProps = { pos: 1 };
    const err = checkProps(BlogPlaceholder, expectedProps, "pos");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const blogPlaceholder = findByTestAttr(wrapper, "blog-placeholder");
    expect(blogPlaceholder).toMatchSnapshot();
  });
});
