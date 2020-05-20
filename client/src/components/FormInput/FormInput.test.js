import React from "react";

// component
import FormInput from "./FormInput";

// utils
import { setShallow, findByTestAttr, checkProps } from "../../tests/testUtils";

describe("<FormInput />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<FormInput />);
    // console.log(wrapper.debug());
  });

  it("renders without an error", () => {});

  it("renders label when prop is passed", () => {});

  it("recieves expected props", () => {});

  it("matches snapshot", () => {});
});
