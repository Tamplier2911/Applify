import React from "react";
import toJson from "enzyme-to-json";

// component
import HomeCards from "./HomeCards";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<HomeCards />", () => {
  const initialStore = {
    theme: {
      currentTheme: "light",
    },
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<HomeCards store={store} />);
  });

  it("renders without an error", () => {
    const homeCards = findByTestAttr(wrapper, "home-cards");
    expect(homeCards.length).toBe(1);
  });

  it("matches snapshot", () => {
    const homeCards = findByTestAttr(wrapper, "home-cards");
    expect(toJson(homeCards)).toMatchSnapshot();
  });
});
