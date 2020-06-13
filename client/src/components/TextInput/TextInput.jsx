// import './TextInput.scss'
import React from "react";
import PropTypes from "prop-types";

// JS Rendering CSS
import {
  TextInputContainer,
  TextInputArea,
  TextInputAreaLabel,
  FormInputFillingBar,
} from "./TextInputStyles";

const TextInput = ({ onInputChange, value, max, label, ...otherProps }) => {
  return (
    <TextInputContainer data-test="text-input">
      <TextInputArea
        onChange={onInputChange}
        {...otherProps}
        // defaultValue={value}
        value={value}
        maxLength={max}
      />
      <FormInputFillingBar />
      {label ? (
        <TextInputAreaLabel data-test="text-input-label" inputlength={value}>
          {label}
        </TextInputAreaLabel>
      ) : null}
    </TextInputContainer>
  );
};

TextInput.propTypes = {
  onInputChange: PropTypes.func,
  value: PropTypes.string,
  max: PropTypes.string,
  label: PropTypes.string,
  otherProps: PropTypes.object,
};

export default TextInput;
