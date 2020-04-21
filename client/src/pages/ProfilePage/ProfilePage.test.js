import React from "react";
import { Provider } from "react-redux";

// component
import ProfilePage from "./ProfilePage";

// utils
import { setShallow, createStore, checkProps } from "../../tests/testUtils";

describe("<ProfilePage />", () => {
  const initialStore = {
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
  };
  const store = createStore(initialStore);
  it("renders without error", () => {
    const wrapper = setShallow(
      <Provider store={store}>
        <ProfilePage />
      </Provider>
    );
    const profilePage = wrapper.find(ProfilePage);
    expect(profilePage.length).toBe(1);
  });

  it("recieves correct props", () => {
    const expectedLogin = { isLogged: false };
    const logginErr = checkProps(ProfilePage, expectedLogin, "isLogged");
    expect(logginErr).toBeUndefined();

    const expectedUser = { userObject: {} };
    const userErr = checkProps(ProfilePage, expectedUser, "userObject");
    expect(userErr).toBeUndefined();
  });

  it("matches snapshot", () => {
    const wrapper = setShallow(
      <Provider store={store}>
        <ProfilePage />
      </Provider>
    );
    const profilePage = wrapper.find(ProfilePage);
    expect(profilePage).toMatchSnapshot();
  });
});
