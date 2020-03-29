// import "./FormHolder.scss";
import React from "react";

// JS Rendering CSS
import {
  FormHolderContainer,
  FormHolderTitle,
  FormHolderComp,
  FormHolderLeft,
  FormHolderRight,
  FormHolderSignInSVG,
  FormHolderSignUpSVG,
  FormHolderFeedbacksSVG,
  FormHolderContactsSVG,
  FormHolderForgotSVG,
  FormHolderRestoreSVG,
  FormHolderFormWrap
} from "./FormHolderStyles";

// Form Holder component expects FORM as a child
// Expects type of a form  as props - signIn / signUp / contact / feedback etc..
// Expects title as a props to be displayed
const FormHolder = ({ children, type, title }) => {
  return (
    <FormHolderContainer>
      <FormHolderTitle>{title}</FormHolderTitle>
      <FormHolderComp>
        <FormHolderLeft>
          {type === "signIn" ? (
            <FormHolderSignInSVG />
          ) : type === "signUp" ? (
            <FormHolderSignUpSVG />
          ) : type === "contact" ? (
            <FormHolderContactsSVG />
          ) : type === "feedback" ? (
            <FormHolderFeedbacksSVG />
          ) : type === "forgot" ? (
            <FormHolderForgotSVG />
          ) : type === "restore" ? (
            <FormHolderRestoreSVG />
          ) : (
            <FormHolderForgotSVG />
          )}
        </FormHolderLeft>
        <FormHolderRight>
          <FormHolderFormWrap>{children ? children : null}</FormHolderFormWrap>
        </FormHolderRight>
      </FormHolderComp>
    </FormHolderContainer>
  );
};

export default FormHolder;
