import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import bg from "../../assets/jpeg/tabletbg-min.jpg";

import ScrollAnimation from "react-animate-on-scroll";

const fadeInHeroComponent = css`
  @keyframes heroFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const HeroContainer = styled.div`
  ${fadeInHeroComponent}
  animation: 1s heroFadeIn;

  display: grid;
  position: relative;
  overflow: hidden;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 720px) {
    grid-template-columns: min-content;
    background-image: linear-gradient(to bottom right, #fffffffb, #ffffff2c),
      url(${bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media only screen and (max-width: 720px) {
    @supports (-ms-ime-align: auto) {
      background-image: linear-gradient(
          to bottom right,
          rgba(255, 255, 255, 0.9),
          rgba(255, 255, 255, 0.2)
        ),
        url(${bg});
    }
  }
`;

export const HeroActiveCTA = styled.div`
  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

export const HeroActiveCTALink = styled(Link)``;

export const HeroContent = styled.div`
  grid-column: 2 / 3;
  font-family: var(--font-title);

  display: grid;
  grid-template-rows: repeat(2, min-content);
  align-content: center;
  justify-items: center;
  margin-bottom: 10rem;

  @media only screen and (max-width: 980px) {
    margin-bottom: 25rem;
    justify-items: start;
  }

  @media only screen and (max-width: 720px) {
    margin: 0;
    grid-row-gap: 4rem;
    justify-items: center;
  }

  @media only screen and (max-width: 540px) {
    grid-row-gap: 5rem;
  }

  @media only screen and (max-width: 360px) {
    grid-row-gap: 8rem;
  }
`;

export const HeroTextbox = styled(ScrollAnimation)`
  display: grid;
  justify-items: center;
`;

export const HeroHeader = styled.h1`
  font-size: 5rem;
  font-weight: 400;

  @media only screen and (max-width: 980px) {
    font-size: 4rem;
  }

  @media only screen and (max-width: 720px) {
    font-size: 4.2rem;
  }

  @media only screen and (max-width: 300px) {
    font-size: 3.5rem;
    text-align: center;
  }
`;

export const HeroText = styled.h3`
  font-weight: 400;

  @media only screen and (max-width: 980px) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 720px) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 300px) {
    font-size: 1.7rem;
    text-align: center;
  }
`;

export const HeroPassiveCTA = styled(Link)`
  @media only screen and (min-width: 721px) {
    display: none;
  }

  &:link,
  &:visited {
    text-decoration: none;
    background-color: var(--cl-tiles-2);
    padding: 1rem 5rem;
    color: var(--cl-white);
    font-size: 1.5rem;
    border: 0.1rem solid var(--cl-tiles-2);
    box-shadow: 0 0.2rem 0.4rem var(--cl-shadow);

    transition: color 0.3s, background-color 0.3s;

    @media only screen and (max-width: 540px) {
      padding: 1rem 8rem;
    }

    @media only screen and (max-width: 300px) {
      padding: 1rem 4rem;
    }
  }

  &:hover,
  &:active {
    color: var(--cl-tiles-2);
    background-color: var(--cl-white);
  }
`;
