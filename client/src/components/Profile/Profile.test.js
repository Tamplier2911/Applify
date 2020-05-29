import React from "react";

// component
import Profile from "./Profile";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<Profile />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
    user: {
      userObject: {
        id: "sdk897652",
        name: "Thomas White",
        email: "ex@mple.com",
        photo: "profilePhoto.jpg",
        about: "I love unicorns.",
        likedBlogposts: [],
      },
      errorMessage: null,
      isLogged: false,
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<Profile store={store} />);
  });

  it("renders without an error", () => {
    const profile = findByTestAttr(wrapper, "profile");
    expect(profile.length).toBe(1);
  });

  it("renders - children profile content", () => {
    const profileContent = findByTestAttr(wrapper, "profile-content");
    expect(profileContent.length).toBe(1);
  });

  it("matches snapshot", () => {
    const profile = findByTestAttr(wrapper, "profile");
    expect(profile).toMatchSnapshot();
  });
});
