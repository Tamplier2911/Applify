// import "./Button.scss";
import React from "react";
import PropTypes from "prop-types";

// JS Rendering CSS
import { ButtonContainer, ButtonBody } from "./ButtonStyles";

const Button = ({ type, value, click }) => {
  return (
    <ButtonContainer data-test="button">
      <ButtonBody
        data-test="button-body"
        type={type}
        {...(click ? { onClick: () => click() } : {})}
      >
        {value}
      </ButtonBody>
    </ButtonContainer>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  click: PropTypes.func,
};

export default Button;
