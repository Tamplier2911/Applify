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
    // console.log(wrapper.debug());
  });

  it("renders without an error", () => {});
});
