import React from "react";
import toJson from "enzyme-to-json";

// component
import Sidenav from "./Sidenav";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<Sidenav />", () => {
  const initialState = {
    theme: {
      currentTheme: "light",
    },
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
    user: {
      userObject: {
        id: "",
        name: "",
        email: "",
        photo: "",
        about: "",
        likedBlogposts: [],
      },
      errorMessage: null,
      isLogged: false,
    },
    sidenav: {
      sidenavHidden: false,
    },
  };
  const store = storeFactory(initialState);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<Sidenav store={store} test={true} />);
  });

  it("renders without an error", () => {
    const sidenav = findByTestAttr(wrapper, "sidenav");
    expect(sidenav).toHaveLength(1);
  });

  it("renders content without an error", () => {
    const sidenavContent = findByTestAttr(wrapper, "sidenav-content");
    expect(sidenavContent).toHaveLength(1);
  });

  it("changes theme if theme button in is clicked", () => {
    const sidenavThemeButton = findByTestAttr(wrapper, "sidenav-theme-btn");
    expect(sidenavThemeButton).toHaveLength(1);

    const oldState = store.getState();
    expect(oldState.theme.currentTheme).toBe("light");

    sidenavThemeButton.simulate("click");

    const newState = store.getState();
    expect(newState.theme.currentTheme).toBe("dark");
  });

  it("renders on background click dismiss sidenav", () => {
    const sidenav = findByTestAttr(wrapper, "sidenav");
    expect(sidenav).toHaveLength(1);

    const oldState = store.getState();
    expect(oldState.sidenav.sidenavHidden).toBe(false);

    sidenav.simulate("click");

    const newState = store.getState();
    expect(newState.sidenav.sidenavHidden).toBe(true);
  });

  it("renders authorization link data if user is logged out", () => {
    const store = storeFactory({
      sidenav: {
        sidenavHidden: false,
      },
      user: {
        userObject: {},
        errorMessage: null,
        isLogged: false,
      },
    });
    wrapper = setShallowC(<Sidenav store={store} test={true} />);
    const sideNavUserData = findByTestAttr(wrapper, "sidenav-logout");
    expect(sideNavUserData).toHaveLength(1);
  });

  it("renders user data if user is logged on", () => {
    const store = storeFactory({
      sidenav: {
        sidenavHidden: false,
      },
      user: {
        userObject: {},
        errorMessage: null,
        isLogged: true,
      },
    });
    wrapper = setShallowC(<Sidenav store={store} test={true} />);
    const sideNavUserData = findByTestAttr(wrapper, "sidenav-user-data");
    expect(sideNavUserData).toHaveLength(1);
  });

  it("matches snapshot", () => {
    const sidenav = findByTestAttr(wrapper, "sidenav");
    expect(sidenav).toMatchSnapshot();
  });
});
