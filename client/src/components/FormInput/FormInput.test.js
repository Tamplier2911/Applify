import React from "react";
import toJson from "enzyme-to-json";

// component
import FormInput from "./FormInput";

// utils
import { setShallow, findByTestAttr, checkProps } from "../../tests/testUtils";

describe("<FormInput />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<FormInput />);
  });

  it("renders without an error", () => {
    const formInput = findByTestAttr(wrapper, "form-input");
    expect(formInput.length).toBe(1);
  });

  it("renders label when prop is passed", () => {
    wrapper = setShallow(<FormInput label="Labelicious" value="some length" />);
    const formInputLabel = findByTestAttr(wrapper, "form-input-label");
    expect(formInputLabel.length).toBe(1);
  });

  it("recieves expected props", () => {
    const expectedProps = {
      onInputChange: () => {},
      label: "Labelicious",
      otherProps: {},
    };
    const err = checkProps(FormInput, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const formInput = findByTestAttr(wrapper, "form-input");
    expect(toJson(formInput)).toMatchSnapshot();
  });
});
