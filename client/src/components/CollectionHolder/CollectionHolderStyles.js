import styled, { css } from "styled-components";

const collectionHolderFadein = css`
  @keyframes holderFadeIn {
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

export const CollectionHolderContainer = styled.div`
  ${collectionHolderFadein}
  grid-row: 1 / 2;
  animation: 1s holderFadeIn;
  display: grid;

  @media only screen and (max-width: 768px) {
    margin-bottom: 5rem;
  }
`;

export const CollectionHolderTitle = styled.h2`
  ${getFont}
  font-size: 4rem;
  font-weight: 300;
  padding: 4rem 1rem 4rem 1rem;
  @media only screen and (max-width: 768px) {
    line-height: 1;
  }
`;

export const CollectionHolderWrapper = styled.div`
  display: grid;
`;
