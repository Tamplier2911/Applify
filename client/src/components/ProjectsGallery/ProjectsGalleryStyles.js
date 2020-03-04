import styled, { css } from "styled-components";

import { ReactComponent as ChevronLeftSVG } from "../../assets/svg/chevron-left.svg";
import { ReactComponent as ChevronRightSVG } from "../../assets/svg/chevron-right.svg";

const fadeInImage = props => {
  const { load } = props;
  if (!load) {
    return `opacity: 0;`;
  } else if (load) {
    return `transition: opacity 1s ease-in;
    opacity: 1;`;
  }
};

/*
const ImageAnimation = css`
  @keyframes imageFadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
*/

const ArrowStyles = css`
  align-self: center;
`;

const ArrowSVGStyles = css`
  cursor: pointer;
  fill: var(--cl-tiles-2);
  width: 5rem;
  height: 5rem;
  transition: fill 0.3s, background-color 0.3s;

  background-color: var(--cl-projects-gal-bg-col);
  padding: 1rem;
  border-radius: 50%;
  box-shadow: 0 0.2rem 1rem var(--cl-square-shadow);

  &:hover {
    fill: var(--cl-mainhover);
    background-color: var(--white);
    animation: pulse 2s infinite;

    @media (hover: none) {
      animation: none;
    }
  }

  @media only screen and (max-width: 720px) {
    width: 4rem;
    height: 4rem;
  }

  @media only screen and (max-width: 425px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const ArrowsAnimation = css`
  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 var(--cl-projects-gal-pulse);
    }
    70% {
      -webkit-box-shadow: 0 0 0 15px var(--cl-projects-gal-pulse-shadow);
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 var(--cl-projects-gal-pulse-shadow);
    }
  }
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 var(--cl-projects-gal-pulse);
      box-shadow: 0 0 0 0 var(--cl-projects-gal-pulse);
    }
    70% {
      -moz-box-shadow: 0 0 0 15px var(--cl-projects-gal-pulse-shadow);
      box-shadow: 0 0 0 15px var(--cl-projects-gal-pulse-shadow);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 var(--cl-projects-gal-pulse-shadow);
      box-shadow: 0 0 0 0 var(--cl-projects-gal-pulse-shadow);
    }
  }
`;

export const ProjectsGalleryContainer = styled.div`
  display: grid;
`;

export const ProjectsGalleryTitle = styled.h2`
  font-family: var(--font-title);
  font-size: 4rem;
  font-weight: 300;
  padding: 1rem;
`;

export const ProjectsGalleryComposition = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  grid-column-gap: 2rem;
`;

export const ProjectsGalleryArrow = styled.div`
  ${ArrowStyles}
`;

export const ProjectsGalleryArrowLeftSVG = styled(ChevronLeftSVG)`
  ${ArrowSVGStyles}
  ${ArrowsAnimation}
`;

export const ProjectsGalleryArrowRightSVG = styled(ChevronRightSVG)`
  ${ArrowSVGStyles}
  ${ArrowsAnimation}
`;

export const ProjectsGalleryImageContainer = styled.div`
  ${fadeInImage}
  box-shadow: 0 0.2rem 1rem var(--cl-square-shadow);
`;

export const ProjectsGalleryImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;
