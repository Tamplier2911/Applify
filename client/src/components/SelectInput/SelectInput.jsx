// import "./SelectInput.scss";
import React from "react";

// JS Rendering CSS
import {
  SelectInputContainer,
  SelectInputLabel,
  SelectInputElement,
  SelectInputOptions
} from "./SelectInputStyles";

export const SelectInput = ({
  onInputChange,
  label,
  options,
  ...otherProps
}) => {
  return (
    <SelectInputContainer>
      {label ? (
        <SelectInputLabel columns={label.length}>{label}</SelectInputLabel>
      ) : null}
      <SelectInputElement {...otherProps} onChange={onInputChange}>
        {options.map((option, i) => {
          const { name, value } = option;
          return (
            <SelectInputOptions value={value} key={i}>
              {name}
            </SelectInputOptions>
          );
        })}
      </SelectInputElement>
    </SelectInputContainer>
  );
};

export default SelectInput;
