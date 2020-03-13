// import "./FileInput.scss";
import React from "react";

// JS Rendering CSS
import {
  FileInputContainer,
  FileInputLabel,
  FileInputElement
} from "./FileInputStyles";

const FileInput = ({ onInputChange, label, id, ...otherProps }) => {
  return (
    <FileInputContainer>
      {label ? <FileInputLabel htmlFor={id}>{label}</FileInputLabel> : null}
      <FileInputElement onChange={onInputChange} id={id} {...otherProps} />
    </FileInputContainer>
  );
};

export default FileInput;
