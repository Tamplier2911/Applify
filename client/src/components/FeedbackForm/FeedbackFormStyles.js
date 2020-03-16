import styled from "styled-components";

// svg
import { ReactComponent as RatingSVG } from "../../assets/svg/star.svg";

const getFont = props => {
  const { lang } = props;
  if (lang === "eng") {
    return `font-family: var(--font-title);`;
  } else if (lang === "rus" || lang === "ukr") {
    return `font-family: var(--font-cyrillic);`;
  }
  return `font-family: var(--font-title);`;
};

export const FeedbackFormContainer = styled.div`
  display: grid;
  grid-row-gap: 4rem;
  grid-auto-rows: min-content;
`;

export const FeedbackFormTitle = styled.h3`
  ${getFont}
  font-weight: 400;
  font-size: 1.7rem;
`;

export const FeedbackFormParagraph = styled.p``;

export const FeedbackFormElement = styled.form`
  display: grid;
  grid-row-gap: 2rem;
`;

export const FeedbackFormRatingSVG = styled(RatingSVG)`
  width: 3rem;
  height: 3rem;

  @media only screen and (max-width: 310px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const FeedbackFormLength = styled.p``;
