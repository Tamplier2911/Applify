// import "./Button.scss";
import React from "react";

// JS Rendering CSS
import { ButtonContainer, ButtonBody } from "./ButtonStyles";

const Button = ({ type, value, click }) => {
  return (
    <ButtonContainer>
      <ButtonBody type={type} {...(click ? { onClick: () => click() } : {})}>
        {value}
      </ButtonBody>
    </ButtonContainer>
  );
};

export default Button;
