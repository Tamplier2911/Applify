// import './TextInput.scss'
import React from "react";

// JS Rendering CSS
import {
  TextInputContainer,
  TextInputArea,
  TextInputAreaLabel,
  FormInputFillingBar
} from "./TextInputStyles";

const TextInput = ({ onInputChange, value, max, label, ...otherProps }) => {
  return (
    <TextInputContainer>
      <TextInputArea
        onChange={onInputChange}
        {...otherProps}
        // defaultValue={value}
        value={value}
        maxLength={max}
      />
      <FormInputFillingBar />
      {label ? (
        <TextInputAreaLabel inputlength={value}>{label}</TextInputAreaLabel>
      ) : null}
    </TextInputContainer>
  );
};

export default TextInput;
