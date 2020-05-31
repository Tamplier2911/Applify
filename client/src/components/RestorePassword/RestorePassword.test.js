import React from "react";
import toJson from "enzyme-to-json";

// component
import RestorePassword from "./RestorePassword";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<RestorePassword />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<RestorePassword store={store} />);
  });

  it("renders without an error", () => {
    const restorePassword = findByTestAttr(wrapper, "restore-password");
    expect(restorePassword).toHaveLength(1);
  });

  it("renders children - form holder", () => {
    const restorePasswordFormHolder = findByTestAttr(
      wrapper,
      "restore-password-form-holder"
    );
    expect(restorePasswordFormHolder).toHaveLength(1);
  });

  it("renders children - form", () => {
    const restorePasswordForm = findByTestAttr(
      wrapper,
      "restore-password-form"
    );
    expect(restorePasswordForm).toHaveLength(1);
  });

  it("matches snapshot", () => {
    const restorePassword = findByTestAttr(wrapper, "restore-password");
    expect(toJson(restorePassword)).toMatchSnapshot();
  });
});
