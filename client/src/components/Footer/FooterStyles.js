import styled, { css } from "styled-components";

import { ReactComponent as Facebook } from "../../assets/svg/facebook.svg";
import { ReactComponent as Github } from "../../assets/svg/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/svg/linkedin.svg";

const SVGCSS = css`
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  transition: fill 0.3s;
  //   box-shadow: 0 0.1rem 0.4rem #000;

  @media only screen and (max-width: 540px) {
    width: 5rem;
    height: 5rem;
  }

  &:hover {
    fill: var(--cl-tiles-2);
  }
`;

export const FooterContainer = styled.footer`
  display: grid;
  /* grid-template-columns: subgrid; */
  grid-template-columns:
    [full-start] minmax(1rem, 1fr)
    [center-start] repeat(
      10,
      [col-start] minmax(min-content, 11.7rem) [col-end]
    )
    [center-end]
    minmax(1rem, 1fr) [full-end];
  grid-area: 1 / full-start / 2 / full-end;
  grid-area: 3 / full-start / 4 / full-end;
  align-items: center;
  //   justify-items: center;

  height: 8rem;
`;

export const FooterContent = styled.div`
  /* max-width: 1170px; */
  /* margin: 0 auto; */
  grid-column: 2 / 12;
  display: grid;
  grid-template-columns: min-content 1fr;

  @media only screen and (max-width: 540px) {
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
  }
`;

export const FooterSVGContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-column-gap: 1rem;

  @media only screen and (max-width: 540px) {
    justify-content: center;
    grid-column-gap: 4rem;
  }
`;

export const FooterLink = styled.a`
  display: grid;
  align-items: center;
`;

export const FacebookSVG = styled(Facebook)`
  fill: var(--cl-tiles-4);
  ${SVGCSS}
`;

export const GitHubSVG = styled(Github)`
  fill: var(--cl-tiles-1);
  ${SVGCSS}
`;

export const LinkedInSVG = styled(LinkedIn)`
  fill: var(--cl-tiles-5);
  ${SVGCSS}
`;

export const FooterTextContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: end;
  font-size: 1.4rem;

  @media only screen and (max-width: 540px) {
    justify-items: center;
    text-align: center;
  }
`;
