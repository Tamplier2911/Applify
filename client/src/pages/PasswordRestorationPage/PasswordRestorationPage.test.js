import React from "react";

// component
import PasswordRestorationPage from "./PasswordRestorationPage";

// utils
import {
  storeFactory,
  setShallowWRC,
  findByTestAttr,
} from "../../tests/testUtils";

describe("<ProfilePage />", () => {
  const initialStore = {
    user: {
      isLogged: false,
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowWRC(<PasswordRestorationPage store={store} />);
  });

  it("renders without error", () => {
    const passwordRestorationPage = findByTestAttr(
      wrapper,
      "password-restoration-page"
    );
    expect(passwordRestorationPage.length).toBe(1);
  });

  it("renders children - route forgot", () => {
    const passwordRestorationPageCildren = findByTestAttr(
      wrapper,
      "password-restoration-page-forgot"
    );
    expect(passwordRestorationPageCildren.length).toBe(1);
  });

  it("renders children - route restore", () => {
    const passwordRestorationPageCildren = findByTestAttr(
      wrapper,
      "password-restoration-page-restore"
    );
    expect(passwordRestorationPageCildren.length).toBe(1);
  });

  it("matches snapshot", () => {
    const passwordRestorationPage = findByTestAttr(
      wrapper,
      "password-restoration-page"
    );
    expect(passwordRestorationPage).toMatchSnapshot();
  });
});
