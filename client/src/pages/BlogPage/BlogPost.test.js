import React from "react";

// component
import BlogPage from "./BlogPage";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<BlogPage />", () => {
  const initialStore = {
    blogs: {
      allBlogposts: [],
      allSets: {},
      currentSet: [],
      currentSlot: 0,
      allSlots: 0,
      isLoading: false,
      errorMessage: null,
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<BlogPage store={store} match={{ path: "/" }} />);
  });

  it("renders without error", () => {
    const blogPage = findByTestAttr(wrapper, "blog-page");
    expect(blogPage.length).toBe(1);
  });

  it("renders children blog-page-route-cl", () => {
    const blogPageRouteCl = findByTestAttr(wrapper, "blog-page-route-cl");
    expect(blogPageRouteCl.length).toBe(1);
  });

  it("renders children blog-page-route-id", () => {
    const blogPageRouteId = findByTestAttr(wrapper, "blog-page-route-id");
    expect(blogPageRouteId.length).toBe(1);
  });

  it("renders children blog-page-placeholder", () => {
    const blogPagePlaceholder = findByTestAttr(
      wrapper,
      "blog-page-placeholder"
    );
    expect(blogPagePlaceholder.length).toBe(1);
  });

  it("matches snapshot", () => {
    const blogPage = findByTestAttr(wrapper, "blog-page");
    expect(blogPage).toMatchSnapshot();
  });
});
