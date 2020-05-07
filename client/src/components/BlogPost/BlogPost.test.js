import React from "react";

// component
import BlogPost from "./BlogPost";

// utils
import {
  setShallowWRC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<BlogPost />", () => {
  const initialStore = {
    theme: {
      currentTheme: "light",
    },
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
    wrapper = setShallowWRC(<BlogPost store={store} />);
  });

  it("renders without error", () => {
    const blogPost = findByTestAttr(wrapper, "blog-post");
    expect(blogPost.length).toBe(1);
  });

  it("renders blogpost content", () => {
    const blogPostContent = findByTestAttr(wrapper, "blog-post-content");
    expect(blogPostContent.length).toBe(1);
  });

  it("matches snapshot", () => {
    const blogPost = findByTestAttr(wrapper, "blog-post");
    expect(blogPost).toMatchSnapshot();
  });
});
