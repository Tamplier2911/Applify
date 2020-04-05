import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// svg
import { ReactComponent as HartSVG } from "../../assets/svg/heart.svg";

const contentOverflowFix = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

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

const getLikeColor = (props) => {
  const { liked } = props;
  if (liked) {
    return `fill: var(--cl-bpost-liked);`;
  } else {
    return `fill: var(--cl-white);`;
  }
};

const bigOrSmall = (props) => {
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

export const BlogViewContainer = styled(Link)`
  ${bigOrSmall}
  ${blogFadeInAnimation}
  cursor: pointer;
  display: grid;
  grid-template-rows: repeat(2, 1fr);

  color: var(--cl-blogview-desc);
  text-decoration: none;
  font-weight: 300;
  font-family: var(--font-title);

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
    // box-shadow: 0rem 0rem 1rem var(--cl-card-shadow-hover);
    box-shadow: 0rem 0rem 1rem var(--cl-primary);
  }
`;

export const BlogViewImg = styled.img`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const BlogViewContent = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / -1;
  display: grid;
  background-color: var(--cl-bpost-view-shadow);
  grid-template-columns: repeat(2, 1fr);
  grid-template-columns: 1fr min-content;

  @media only screen and (max-width: 425px) {
    grid-row: 8 / 11;
  }
`;

export const BlogViewContentWrap = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  align-content: center;
  padding: 1rem 2rem;
`;

export const BlogViewContentTheme = styled.div`
  font-size: 1.5rem;
  ${contentOverflowFix}
`;

export const BlogViewContentTitle = styled.h4`
  font-weight: 400;
  font-size: 1.7rem;
  ${contentOverflowFix}
`;

export const BlogViewContentDateWrap = styled.div`
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
`;

export const BlogViewContentDate = styled.div`
  align-items: center;
`;

export const BlogViewContentLikeWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 0.5rem;
  align-items: center;
`;

export const BlogViewContentLike = styled.div`
  font-size: 1.5rem;
`;

export const BlogViewContentLikeSVG = styled(HartSVG)`
  ${getLikeColor}
  width: 2rem;
  height: 2rem;
  transition: fill 0.3s;
  &:hover {
    fill: var(--cl-bpost-like-hover);
  }
`;
