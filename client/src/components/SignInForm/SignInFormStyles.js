import styled from "styled-components";

import { Link } from "react-router-dom";

const getFont = props => {
  const { lang } = props;
  if (lang === "eng") {
    return `font-family: var(--font-title);`;
  } else if (lang === "rus" || lang === "ukr") {
    return `font-family: var(--font-cyrillic);`;
  }
  return `font-family: var(--font-title);`;
};

export const SignInFormContainer = styled.div`
  display: grid;
  grid-row-gap: 4rem;
  grid-auto-rows: min-content;
`;

export const SignInFormTitle = styled.h3`
  ${getFont}
  font-weight: 400;
  font-size: 1.7rem;

  margin-top: 2rem;
  @media only screen and (max-width: 425px) {
    margin-top: 5rem;
  }
`;

export const SignInFormElement = styled.form`
  display: grid;
  grid-row-gap: 2rem;
`;

export const SignInFormPasForgot = styled(Link)`
  &:link,
  &:visited {
    justify-self: start;
    font-size: 1.6rem;
    font-family: var(--font-title);
    text-decoration: none;
    color: var(--cl-font);
    transition: color 0.3s;
  }

  &:hover,
  &:active {
    color: var(--cl-primary);
  }
`;
