import React from "react";

// component
import BlogCreate from "./BlogCreate";

// utils
import { setShallow, findByTestAttr } from "../../tests/testUtils";

describe("<BlogCreate />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<BlogCreate />);
  });

  it("renders without error", () => {
    const blogCreate = findByTestAttr(wrapper, "blog-create");
    expect(blogCreate.length).toBe(1);
  });

  it("renders children - rules", () => {
    const blogCreateRules = findByTestAttr(wrapper, "blog-create-rules");
    expect(blogCreateRules.length).toBe(1);
  });

  it("renders children - cub", () => {
    const blogCreateCUB = findByTestAttr(wrapper, "blog-create-cub");
    expect(blogCreateCUB.length).toBe(1);
  });

  it("matches snapshot", () => {
    const blogCreate = findByTestAttr(wrapper, "blog-create");
    expect(blogCreate).toMatchSnapshot();
  });
});
