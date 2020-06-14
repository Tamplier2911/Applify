import React from "react";
import toJson from "enzyme-to-json";

// component
import UserUpdate from "./UserUpdate";

// utils
import {
  setShallowWRC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<UserUpdate />", () => {
  const initialState = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
    users: {
      allUsers: [
        {
          about: "Wonderful!",
          email: "sussy@gmail.com",
          likedBlogposts: [],
          name: "Suss",
          photo: "",
          role: "user",
          _id: "testObjSdk",
        },
      ],
      isLoading: false,
      errorMessage: null,
    },
  };
  const store = storeFactory(initialState);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowWRC(
      <UserUpdate store={store} testObjId="testObjSdk" />
    );
    console.log(wrapper.debug());
  });

  it("renders without an error", () => {
    // const userUpdate = findByTestAttr(wrapper, "user-update");
    // expect(userUpdate).toHaveLength(1);
  });

  it("renders children - user update info", () => {
    // const userUpdateInfo = findByTestAttr(wrapper, "user-update-info");
    // expect(userUpdateInfo).toHaveLength(0);
  });

  it("renders children - user update create/update", () => {
    // const userUpdateCu = findByTestAttr(wrapper, "user-update-cu");
    // expect(userUpdateCu).toHaveLength(0);
  });

  it("renders fallback when user object is not found", () => {
    // const userUpdate = findByTestAttr(wrapper, "user-update");
    // expect(userUpdate).toHaveLength(0);
  });

  it("renders without an error", () => {
    // const userUpdate = findByTestAttr(wrapper, "user-update");
    //     expect(toJson(userUpdate)).toMatchSnapshot();
  });
});
