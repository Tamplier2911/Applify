import styled, { css } from "styled-components";

// svg
import { ReactComponent as ContactsSVG } from "../../assets/svg/web_developer.svg";
import { ReactComponent as SignUpSVG } from "../../assets/svg/rocket_boy.svg";
import { ReactComponent as SignInSVG } from "../../assets/svg/personal_data.svg";
import { ReactComponent as FeedbackSVG } from "../../assets/svg/conversation.svg";

const SVGStyles = css`
  height: 40rem;

  @media only screen and (max-width: 1000px) {
    height: 30rem;
  }

  @media only screen and (max-width: 650px) {
    height: 20rem;
  }

  @media only screen and (max-width: 245px) {
    height: 10rem;
  }
`;

const getFont = props => {
  const { lang } = props;
  if (lang === "eng") {
    return `font-family: var(--font-title);`;
  } else if (lang === "rus" || lang === "ukr") {
    return `font-family: var(--font-cyrillic);`;
  }
  return `font-family: var(--font-title);`;
};

const fadeContactsIn = css`
  @keyframes fadeContactsIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const FormHolderContainer = styled.div`
  ${fadeContactsIn}
  animation: 1s fadeContactsIn;
`;

export const FormHolderTitle = styled.h2`
  ${getFont}
  font-size: 4rem;
  font-weight: 300;
  padding: 1rem;

  @media only screen and (max-width: 768px) {
    line-height: 1;
  }
`;

export const FormHolderComp = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  padding: 4rem;

  @media only screen and (max-width: 650px) {
    padding: 2rem;
  }

  @media only screen and (max-width: 450px) {
    padding: 0rem;
  }
`;

export const FormHolderLeft = styled.div`
  position: relative;
  grid-area: 2 / 1 / 10 / 5;
  z-index: 5;

  @media only screen and (max-width: 1000px) {
    grid-area: 1 / 4 / 6 / 8;
  }

  @media only screen and (max-width: 900px) {
    grid-area: 1 / 3 / 6 / 8;
  }

  @media only screen and (max-width: 650px) {
    grid-area: 1 / 4 / 6 / 8;
  }

  @media only screen and (max-width: 550px) {
    grid-area: 1 / 3 / 6 / 8;
  }

  @media only screen and (max-width: 425px) {
    grid-area: 1 / 3 / 6 / -1;
  }

  @media only screen and (max-width: 360px) {
    grid-area: 1 / 2 / 6 / -1;
  }

  // @media only screen and (max-width: 310px) {
  // grid-area: 1 / 1 / 4 / -1;
  // }

  @media only screen and (max-width: 245px) {
    grid-area: 1 / 1 / 4 / -1;
  }
`;

export const FormHolderContactsSVG = styled(ContactsSVG)`
  ${SVGStyles}
`;

export const FormHolderFeedbacksSVG = styled(FeedbackSVG)`
  ${SVGStyles}
`;

export const FormHolderSignUpSVG = styled(SignUpSVG)`
  ${SVGStyles}
`;

export const FormHolderSignInSVG = styled(SignInSVG)`
  ${SVGStyles}
`;

export const FormHolderRight = styled.div`
  grid-area: 1 / 2 / -1 / -1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  background-color: var(--cl-contacts-bg);
  box-shadow: 0 0.2rem 0.5rem var(--cl-square-shadow);

  align-content: center;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 8rem;
    grid-area: 2 / 1 / -1 / -1;
  }

  @media only screen and (max-width: 650px) {
    grid-row-gap: 2rem;
  }

  @media only screen and (max-width: 650px) {
    grid-template-rows: repeat(10, 1fr);
  }

  @media only screen and (max-width: 425px) {
    grid-template-rows: repeat(5, 1fr);
    grid-row-gap: 10rem;
  }

  @media only screen and (max-width: 245px) {
    grid-template-rows: repeat(10, 1fr);
    grid-row-gap: 0rem;
  }
`;

export const FormHolderFormWrap = styled.div`
  grid-column: 2 / -1;
  display: grid;
  padding: 2rem;

  @media only screen and (max-width: 1000px) {
    grid-column: 1 / -1;
    grid-row: 2 / -1;
  }

  @media only screen and (max-width: 650px) {
    grid-row: 4 / -1;
  }

  @media only screen and (max-width: 425px) {
    grid-row: 2 / -1;
  }
`;
