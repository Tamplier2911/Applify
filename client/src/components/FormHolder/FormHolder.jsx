// import "./FormHolder.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";

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
  FormHolderFormWrap,
} from "./FormHolderStyles";

/**
 * @JSXComponent - Requires children as a form JSX Component
 * @param {Component} children - form holder is a wrapper that require form itself
 * @param {string} type - type required for different images to be rendered
 * @param {string} title - title required to display some guideline about current form
 */

const FormHolder = ({ children, type, title }) => {
  return (
    <FormHolderContainer data-test="form-holder">
      <FormHolderTitle>{title}</FormHolderTitle>
      <FormHolderComp data-test="form-holder-composition">
        <FormHolderLeft animateIn={"bounceInRight"} animateOnce={true}>
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
        <FormHolderRight animateIn={"bounceInLeft"} animateOnce={true}>
          <FormHolderFormWrap data-test="form-holder-formwrap">
            {children ? children : null}
          </FormHolderFormWrap>
        </FormHolderRight>
      </FormHolderComp>
    </FormHolderContainer>
  );
};

FormHolder.propTypes = {
  children: PropTypes.object,
  type: PropTypes.string,
  title: PropTypes.string,
};

export default FormHolder;
