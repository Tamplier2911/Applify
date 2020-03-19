import styled, { css } from "styled-components";

const shrink = css`
  top: -1rem;
  font-size: 1.35rem;
  color: var(--cl-font);
`;

const ShrinkOnInput = props => {
  return props.inputlength ? shrink : null;
};

export const FormInputFillingBar = styled.div`
  position: relative;
  width: 100%;
  height: 0.2rem;
  background-color: var(--cl-font);

  &::after {
    content: "";
    display: inline-block;
    width: 0%;
    height: 0.2rem;
    background-color: var(--cl-primary);

    position: absolute;
    top: 0;
    left: 0;

    transition: width 0.5s;
  }
`;

export const FormInputContainer = styled.div`
  position: relative;
`;

export const FormInputBar = styled.input`
  position: relative;
  z-index: 2;
  color: var(--cl-primary);
  font-family: var(--font-title);
  font-size: 1.7rem;
  letter-spacing: 0.1rem;

  width: 100%;
  padding: 1rem 1rem 1rem 0rem;
  // background-color: var(--white);
  background-color: transparent !important;
  border: none;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px transparent inset !important;
    -webkit-text-fill-color: var(--cl-primary) !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  &::-moz-focus-inner {
    border: 0;
    outline: none;
  }

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputFillingBar}::after {
    width: 100%;
  }

  &:focus ~ label {
    ${shrink}
  }

  &:invalid {
    box-shadow: none;
  }
`;

export const FormInputLabel = styled.label`
  position: absolute;
  z-index: 1;
  font-family: var(--font-title);
  color: var(--cl-font);
  font-size: 1.7rem;
  top: 1.2rem;
  left: 0;

  transition: font-size 0.3s, top 0.3s;
  ${ShrinkOnInput}
`;
