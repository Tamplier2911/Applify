// import "./Button.scss";
import React from "react";

// JS Rendering CSS
import { ButtonContainer, ButtonBody } from "./ButtonStyles";

const Button = ({ type, value }) => {
  return (
    <ButtonContainer>
      <ButtonBody type={type}>{value}</ButtonBody>
    </ButtonContainer>
  );
};

export default Button;
