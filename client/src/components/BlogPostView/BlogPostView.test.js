import React from "react";
import toJson from "enzyme-to-json";

// component
import BlogPostView from "./BlogPostView";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
  checkProps,
} from "../../tests/testUtils";

describe("<BlogPostView />", () => {
  const initialStore = {
    user: {
      userObject: {
        id: "",
        name: "",
        email: "",
        photo: "",
        about: "",
        likedBlogposts: [],
      },
      errorMessage: null,
      isLogged: false,
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<BlogPostView store={store} />);
  });

  it("renders without an error", () => {
    const blogPostView = findByTestAttr(wrapper, "blog-post-view");
    expect(blogPostView.length).toBe(1);
  });

  it("renders children with content content", () => {
    const blogPostViewContent = findByTestAttr(
      wrapper,
      "blog-post-view-content"
    );
    expect(blogPostViewContent.length).toBe(1);
  });

  it("recieves expected props", () => {
    const expectedProps = {
      blog: {
        author: { photo: "str", _id: "str", name: "str" },
        content: "str",
        createdAt: "str",
        image: "str",
        likes: 0,
        theme: "str",
        title: "str",
      },
      pos: 0,
      slot: 0,
      index: 0,
    };
    const err = checkProps(BlogPostView, expectedProps, "prop");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const blogPostView = findByTestAttr(wrapper, "blog-post-view");
    expect(toJson(blogPostView)).toMatchSnapshot();
  });
});
