import styled, { css } from "styled-components";

// svg
import { ReactComponent as BlogSVG } from "../../assets/svg/adminpage-blogs.svg";

const blogFadeInAnimation = css`
  @keyframes blogFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const bigOrSmall = props => {
  const { big } = props;
  if (big) {
    return `grid-column: span 2;
              @media only screen and (max-width: 425px) {
                  grid-column: 1 / 2;
              }`;
  } else {
    return `grid-column: span 1;
              @media only screen and (max-width: 768px) {
                  grid-column: span 2;
              }
              @media only screen and (max-width: 425px) {
                  grid-column: 1 / 2;
              }`;
  }
};

export const BlogPlaceholderContainer = styled.div`
  ${bigOrSmall}
  ${blogFadeInAnimation}
  cursor: pointer;
  display: grid;

  font-family: var(--font-title);
  font-weight: 300;
  color: var(--cl-white);

  min-height: 20rem; // double check
  max-height: 20rem; // double check
  box-shadow: 0rem 0rem 0.5rem var(--cl-square-shadow);

  transition: filter 0.5s, box-shadow 0.3s;
  animation: 1s blogFadeIn;
  filter: brightness(90%);

  @media only screen and (max-width: 425px) {
    grid-template-rows: repeat(10, 1fr);
    max-height: 30rem;
  }

  &:hover {
    filter: brightness(130%);
    box-shadow: 0rem 0rem 1rem var(--cl-primary);
  }
`;

export const BlogPlaceholderSVG = styled(BlogSVG)`
  width: 4rem;
  height: 4rem;
  fill: var(--cl-font);
  transition: fill 0.3s;
`;

export const BlogPlaceholderWrapper = styled.div`
  grid-row: 1 / -1;
  display: grid;
  align-items: center;
  justify-items: center;

  &:hover ${BlogPlaceholderSVG} {
    fill: var(--cl-primary);
  }
`;
