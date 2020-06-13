import React from "react";
import toJson from "enzyme-to-json";

// component
import UserCard from "./UserCard";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
  checkProps,
} from "../../tests/testUtils";

describe("<UserCard />", () => {
  const initialState = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialState);

  const userData = {
    about: "",
    email: "",
    likedBlogposts: [],
    name: "",
    passwordChangedAt: "",
    role: "",
    photo: "",
    _id: "",
  };

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<UserCard store={store} data={userData} />);
  });

  it("renders without an error", () => {
    const userCard = findByTestAttr(wrapper, "user-card");
    expect(userCard).toHaveLength(1);
  });

  it("renders children - header", () => {
    const userCardHeader = findByTestAttr(wrapper, "user-card-header");
    expect(userCardHeader).toHaveLength(1);
  });

  it("renders children - body", () => {
    const userCardBody = findByTestAttr(wrapper, "user-card-body");
    expect(userCardBody).toHaveLength(1);
  });

  it("renders children - controls", () => {
    const userCardControls = findByTestAttr(wrapper, "user-card-controls");
    expect(userCardControls).toHaveLength(1);
  });

  it("recieves expected props", () => {
    const expectedProps = {
      data: {
        about: "",
        email: "",
        likedBlogposts: [],
        name: "",
        passwordChangedAt: "",
        role: "",
        photo: "",
        _id: "",
      },
    };
    const err = checkProps(UserCard, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const userCard = findByTestAttr(wrapper, "user-card");
    expect(toJson(userCard)).toMatchSnapshot();
  });
});
