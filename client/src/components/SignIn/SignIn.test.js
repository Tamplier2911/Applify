import React from "react";

// component
import SignIn from "./SignIn";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<SignIn />", () => {
  const initialState = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialState);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<SignIn store={store} />);
    // console.log(wrapper.debug());
  });

  it("renders without an error", () => {});
});
