import React from "react";
import toJson from "enzyme-to-json";

// component
import CreateUpdateUser from "./CreateUpdateUser";

// utils
import {
  setShallowC,
  findByTestAttr,
  checkProps,
  storeFactory,
} from "../../tests/testUtils";

describe("<CreateUpdateUser />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<CreateUpdateUser store={store} />);
  });

  it("renders without an error", () => {
    const createUpdateUser = findByTestAttr(wrapper, "create-update-user");
    expect(createUpdateUser.length).toBe(1);
  });

  it("renders children - form holder", () => {
    const createUpdateUserFormHolder = findByTestAttr(
      wrapper,
      "create-update-user-form-holder"
    );
    expect(createUpdateUserFormHolder.length).toBe(1);
  });

  it("renders children - form", () => {
    const createUpdateUserForm = findByTestAttr(
      wrapper,
      "create-update-user-form"
    );
    expect(createUpdateUserForm.length).toBe(1);
  });

  it("recieves expected props", () => {
    const expectedProps = { method: "POST", updateData: {} };
    const err = checkProps(CreateUpdateUser, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const createUpdateUser = findByTestAttr(wrapper, "create-update-user");
    expect(toJson(createUpdateUser)).toMatchSnapshot();
  });
});
