import React from "react";
import toJson from "enzyme-to-json";

// component
import ProfilePortrait from "./ProfilePortrait";

// utils
import { setShallow, findByTestAttr, checkProps } from "../../tests/testUtils";

describe("<ProfilePortrait />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<ProfilePortrait photo="user.jpg" userRole="user" />);
  });

  it("renders without an error", () => {
    const profilePortrait = findByTestAttr(wrapper, "profile-portrait");
    expect(profilePortrait).toHaveLength(1);
  });

  it("renders children - user portrait", () => {
    const profilePortraitPhoto = findByTestAttr(
      wrapper,
      "profile-portrait-photo"
    );
    expect(profilePortraitPhoto).toHaveLength(1);
  });

  it("renders children - admin bar if userRole is admin or owner", () => {
    wrapper = setShallow(<ProfilePortrait photo="user.jpg" userRole="admin" />);
    const profilePortraitAdminBar = findByTestAttr(
      wrapper,
      "profile-portrait-adminbar"
    );
    expect(profilePortraitAdminBar).toHaveLength(1);
  });

  it("recieves expected props", () => {
    const expectedProps = { photo: "user.jpg", userRole: "user" };
    const err = checkProps(ProfilePortrait, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const profilePortrait = findByTestAttr(wrapper, "profile-portrait");
    expect(toJson(profilePortrait)).toMatchSnapshot();
  });
});
