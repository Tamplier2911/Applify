import React from "react";
import toJson from "enzyme-to-json";

// component
import BlogsCollection from "./BlogsCollection";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
  checkProps,
} from "../../tests/testUtils";

describe("<BlogsCollection />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };

  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<BlogsCollection store={store} />);
  });

  it("renders without an error", () => {
    const blogsCollection = findByTestAttr(wrapper, "blogs-collection");
    expect(blogsCollection.length).toBe(1);
  });

  it("renders children blogposts", () => {
    const blogsCollectionBlogs = findByTestAttr(
      wrapper,
      "blog-collection-blogs"
    );
    expect(blogsCollectionBlogs.length).toBe(1);
  });

  it("recieves expected props", () => {
    const expectedProps = {
      blogsData: {
        allDataSets: { 1: [], 2: [], 3: [] },
        allDataSlots: 3,
        currentDataSet: [{}, {}, {}, {}, {}, {}],
        currentDataSlot: 1,
      },
    };
    const err = checkProps(BlogsCollection, expectedProps, "prop");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const blogsCollection = findByTestAttr(wrapper, "blogs-collection");
    expect(toJson(blogsCollection)).toMatchSnapshot();
  });
});
