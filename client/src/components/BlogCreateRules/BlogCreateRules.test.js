import React from "react";
import toJson from "enzyme-to-json";

// component
import BlogCreateRules from "./BlogCreateRules";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<BlogCreateRules />", () => {
  const initialStore = {
    lang: { languagePanelHidden: true, currentLanguage: "eng" },
  };

  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<BlogCreateRules store={store} />);
  });

  it("renders without error", () => {
    const blogCreateRules = findByTestAttr(wrapper, "blog-create-rules");
    expect(blogCreateRules.length).toBe(1);
  });

  it("matches snapshot", () => {
    const blogCreateRules = findByTestAttr(wrapper, "blog-create-rules");
    expect(toJson(blogCreateRules)).toMatchSnapshot();
  });
});
