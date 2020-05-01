import React from "react";

// component
import ProfilePage from "./ProfilePage";

// utils
import {
  storeFactory,
  setShallowWRC,
  findByTestAttr,
} from "../../tests/testUtils";

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
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowWRC(<ProfilePage store={store} />);
  });

  it("renders without error", () => {
    const profilePage = findByTestAttr(wrapper, "profile-page");
    expect(profilePage.length).toBe(1);
  });

  it("renders children - profile-page-exact", () => {
    const profilePageExact = findByTestAttr(wrapper, "profile-page-exact");
    expect(profilePageExact.length).toBe(1);
  });

  it("renders children - profile-page-users", () => {
    const profilePageUsers = findByTestAttr(wrapper, "profile-page-users");
    expect(profilePageUsers.length).toBe(1);
  });

  it("renders children - profile-page-users-create", () => {
    const profilePageUsersCreate = findByTestAttr(
      wrapper,
      "profile-page-users-create"
    );
    expect(profilePageUsersCreate.length).toBe(1);
  });

  it("renders children - profile-page-users-id", () => {
    const profilePageUsersId = findByTestAttr(wrapper, "profile-page-users-id");
    expect(profilePageUsersId.length).toBe(1);
  });

  it("renders children - profile-page-messages", () => {
    const profilePageMessages = findByTestAttr(
      wrapper,
      "profile-page-messages"
    );
    expect(profilePageMessages.length).toBe(1);
  });

  it("renders children - profile-page-messages-id", () => {
    const profilePageMessagesId = findByTestAttr(
      wrapper,
      "profile-page-messages-id"
    );
    expect(profilePageMessagesId.length).toBe(1);
  });

  it("renders children - profile-page-blogs", () => {
    const profilePageBlogs = findByTestAttr(wrapper, "profile-page-blogs");
    expect(profilePageBlogs.length).toBe(1);
  });

  it("renders children - profile-page-blogs-create", () => {
    const profilePageBlogsCreate = findByTestAttr(
      wrapper,
      "profile-page-blogs-create"
    );
    expect(profilePageBlogsCreate.length).toBe(1);
  });

  it("renders children - profile-page-blogs-id", () => {
    const profilePageBlogsId = findByTestAttr(wrapper, "profile-page-blogs-id");
    expect(profilePageBlogsId.length).toBe(1);
  });

  it("renders children - profile-page-feeds", () => {
    const profilePageFeeds = findByTestAttr(wrapper, "profile-page-feeds");
    expect(profilePageFeeds.length).toBe(1);
  });

  it("renders children - profile-page-feeds-create", () => {
    const profilePageFeedsCreate = findByTestAttr(
      wrapper,
      "profile-page-feeds-create"
    );
    expect(profilePageFeedsCreate.length).toBe(1);
  });

  it("renders children - profile-page-feeds-id", () => {
    const profilePageFeedsId = findByTestAttr(wrapper, "profile-page-feeds-id");
    expect(profilePageFeedsId.length).toBe(1);
  });

  it("matches snapshot", () => {
    const profilePage = findByTestAttr(wrapper, "profile-page");
    expect(profilePage).toMatchSnapshot();
  });
});
