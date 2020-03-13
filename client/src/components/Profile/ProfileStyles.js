import styled, { css } from "styled-components";

const ProfileFadeIn = css`
  @keyframes profileFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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

export const ProfileContainer = styled.div`
  ${ProfileFadeIn}
  animation: 1s profileFadeIn
`;

export const ProfileTitle = styled.h2`
  ${getFont}
  font-size: 4rem;
  font-weight: 300;
  padding: 1rem;

  @media only screen and (max-width: 768px) {
    line-height: 1;
  }
`;

export const ProfileContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 5rem;
  grid-column-gap: 5rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;
  }
`;
