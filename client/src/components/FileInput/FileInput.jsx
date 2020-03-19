// import "./FileInput.scss";
import React from "react";

// JS Rendering CSS
import {
  FileInputContainer,
  FileInputLabel,
  FileInputSign,
  FileInputElement
} from "./FileInputStyles";

const FileInput = ({ onInputChange, label, id, image, ...otherProps }) => {
  return (
    <FileInputContainer>
      {label ? <FileInputLabel htmlFor={id}>{label}</FileInputLabel> : null}
      {image ? (
        <FileInputSign image={image}>&#10004;</FileInputSign>
      ) : (
        <FileInputSign image={image}>&#10006;</FileInputSign>
      )}
      <FileInputElement onChange={onInputChange} id={id} {...otherProps} />
    </FileInputContainer>
  );
};

export default FileInput;
