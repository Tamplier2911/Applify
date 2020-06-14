import React from "react";
import toJson from "enzyme-to-json";

// component
import UsersHolder from "./UsersHolder";

// utils
import {
  setShallowWRC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<UsersHolder />", () => {
  const initialState = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
    users: {
      allUsers: [],
      isLoading: false,
      errorMessage: null,
    },
  };
  const store = storeFactory(initialState);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowWRC(<UsersHolder store={store} />);
  });

  it("renders without an error", () => {
    const usersHolder = findByTestAttr(wrapper, "users-holder");
    expect(usersHolder).toHaveLength(1);
  });

  it("renders children - ", () => {
    const usersHolderSearch = findByTestAttr(wrapper, "users-holder-search");
    expect(usersHolderSearch).toHaveLength(1);
  });

  it("renders children - ", () => {
    const usersHolderColHolder = findByTestAttr(
      wrapper,
      "users-holder-col-holder"
    );
    expect(usersHolderColHolder).toHaveLength(1);
  });

  it("renders children - ", () => {
    const usersHolderColForHolderSp = findByTestAttr(
      wrapper,
      "users-holder-col-for-holder-sp"
    );
    expect(usersHolderColForHolderSp).toHaveLength(1);
  });

  it("matches snapshot", () => {
    const usersHolder = findByTestAttr(wrapper, "users-holder");
    expect(toJson(usersHolder)).toMatchSnapshot();
  });
});
