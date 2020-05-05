import React from "react";

// component
import BlogCard from "./BlogCard";

// utils
import {
  setShallowC,
  findByTestAttr,
  checkProps,
  storeFactory,
} from "../../tests/testUtils";

describe("<BlogCard />", () => {
  const initialStore = {
    lang: { languagePanelHidden: true, currentLanguage: "eng" },
  };

  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<BlogCard store={store} />);
  });

  it("renders without an error", () => {
    const blogCard = findByTestAttr(wrapper, "blog-card");
    expect(blogCard.length).toBe(1);
  });

  it("renders children - header", () => {
    const blogCardHeader = findByTestAttr(wrapper, "blog-card-header");
    expect(blogCardHeader.length).toBe(1);
  });

  it("renders children - body", () => {
    const blogCardBody = findByTestAttr(wrapper, "blog-card-body");
    expect(blogCardBody.length).toBe(1);
  });

  it("renders children - controlls", () => {
    const blogCardControls = findByTestAttr(wrapper, "blog-card-controls");
    expect(blogCardControls.length).toBe(1);
  });

  it("renders children - button", () => {
    const blogCardButton = findByTestAttr(wrapper, "blog-card-button");
    expect(blogCardButton.length).toBe(1);
  });

  it("renders children - link", () => {
    const blogCardLink = findByTestAttr(wrapper, "blog-card-link");
    expect(blogCardLink.length).toBe(1);
  });

  it("recieves expected prop types", () => {
    const expectedProps = {
      author: {},
      content: "str",
      createdAt: "str",
      image: "str",
      likes: 0,
      theme: "str",
      title: "str",
      _id: "str",
    };
    const err = checkProps(BlogCard, expectedProps, "data");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const blogCard = findByTestAttr(wrapper, "blog-card");
    expect(blogCard).toMatchSnapshot();
  });
});
