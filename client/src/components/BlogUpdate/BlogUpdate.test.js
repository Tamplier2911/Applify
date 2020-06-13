import React from "react";
import toJson from "enzyme-to-json";

// component
import BlogUpdate from "./BlogUpdate";

// utils
import {
  setShallowWRC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<BlogUpdate />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
    blogs: {
      allBlogposts: [
        {
          id: "",
          _id: "testObj",
          image: "",
          likes: 1,
          createdAt: "2020-03-31T19:07:26.908Z",
          title: "",
          theme: "",
          content: "",
          author: "",
        },
      ],
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
    wrapper = setShallowWRC(<BlogUpdate store={store} testObjId={"testObj"} />);
  });

  it("renders without an error", () => {
    const blogUpdate = findByTestAttr(wrapper, "blog-update");
    expect(blogUpdate.length).toBe(1);
  });

  it("renders child - blog update data", () => {
    const blogUpdateData = findByTestAttr(wrapper, "blog-update-data");
    expect(blogUpdateData.length).toBe(1);
  });

  it("renders child - blog update not found, if no blog with that id provided in state", () => {
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
    const wrapper = setShallowWRC(<BlogUpdate store={store} />);
    const blogUpdateNotFound = findByTestAttr(wrapper, "blog-update-not-found");
    expect(blogUpdateNotFound.length).toBe(1);
  });

  it("matches snapshot", () => {
    const blogUpdate = findByTestAttr(wrapper, "blog-update");
    expect(toJson(blogUpdate)).toMatchSnapshot();
  });
});
