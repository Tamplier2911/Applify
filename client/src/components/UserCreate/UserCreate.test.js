import React from "react";
import toJson from "enzyme-to-json";

// component
import UserCreate from "./UserCreate";

// utils
import { setShallow, findByTestAttr } from "../../tests/testUtils";

describe("<UserCreate />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<UserCreate />);
  });

  it("renders without an error", () => {
    const userCreate = findByTestAttr(wrapper, "user-create");
    expect(userCreate).toHaveLength(1);
  });

  it("renders children - create update user", () => {
    const userCreateUpdate = findByTestAttr(wrapper, "user-create-update");
    expect(userCreateUpdate).toHaveLength(1);
  });

  it("matches snapshot", () => {
    const userCreate = findByTestAttr(wrapper, "user-create");
    expect(toJson(userCreate)).toMatchSnapshot();
  });
});
