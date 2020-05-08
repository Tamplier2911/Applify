import React from "react";

// component
import BlogsHolder from "./BlogsHolder";

// utils
import {
  setShallowWRC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<BlogsHolder />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
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
    wrapper = setShallowWRC(<BlogsHolder store={store} />);
  });

  it("renders without an error", () => {
    const blogsHolder = findByTestAttr(wrapper, "blogs-holder");
    expect(blogsHolder.length).toBe(1);
  });

  it("renders child - blogs holder search", () => {
    const blogsHolderSearch = findByTestAttr(wrapper, "blogs-holder-search");
    expect(blogsHolderSearch.length).toBe(1);
  });

  it("renders child - blogs holder collection", () => {
    const blogsHolderCollection = findByTestAttr(
      wrapper,
      "blogs-holder-collection"
    );
    expect(blogsHolderCollection.length).toBe(1);
  });

  it("matches snapshot ", () => {
    const blogsHolder = findByTestAttr(wrapper, "blogs-holder");
    expect(blogsHolder.length).toMatchSnapshot();
  });
});
