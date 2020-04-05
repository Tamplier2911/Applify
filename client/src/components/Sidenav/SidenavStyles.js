import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as SunSVG } from "../../assets/svg/sun.svg";
import { ReactComponent as MoonSVG } from "../../assets/svg/moon.svg";

const showSidenavContentAnimation = css`
  @keyframes showSidenavContent {
    0% {
      opacity: 0;
    }
    60% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const showSidenavAnimation = css`
  @keyframes showSidenav {
    0% {
      left: -30rem;
    }
    100% {
      left: 0rem;
    }
  }
`;

const linkSharedStyles = css`
  text-decoration: none;
  color: currentColor;
  font-weight: bold;
  transition: color 0.3s;

  &:hover,
  &:active {
    color: var(--cl-mainhover);
  }
`;

const dynamicDataStyles = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  text-align: center;

  @media only screen and (max-width: 300px) {
    width: 15rem;
  }
`;

const svgSharedStyles = css`
  width: 3rem;
  height: 3rem;

  fill: var(--cl-font);
  transition: fill 0.3s;
`;

const displaySidenav = (props) => {
  const { hidden } = props;
  if (hidden) {
    return `
        display: none;
    `;
  } else {
    return `
        font-family: var(--font-title);
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 400vw;
        height: 400vh;
        background-color: var(--cl-sidenav);
  `;
  }
};

export const SidenavContainer = styled.div`
  ${displaySidenav}
`;

export const SidenavContent = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-row-gap: 8rem;

  position: fixed;
  top: 0;
  width: 30rem;
  height: 100vh;
  background-color: var(--cl-white);
  padding: 2rem;
  box-shadow: -0.1rem 0.2rem 0.4rem var(--cl-sidenav-shadow);
  animation: showSidenav 0.5s;

  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.2rem;
    background-color: var(--cl-scroll-bg);
  }

  &::-webkit-scrollbar-thumb {
    background-image: linear-gradient(
      to bottom,
      var(--cl-scrollThumb-bg1),
      var(--cl-scrollThumb-bg2)
    );
    border-radius: 5rem;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px var(--cl-scroll-shadow);
    box-shadow: inset 0 0 6px var(--cl-scroll-shadow);
  }

  @media only screen and (max-width: 310px) {
    height: 400vh;
    grid-row-gap: 3rem;
  }

  @media only screen and (max-width: 300px) {
    width: 25rem;
  }

  ${showSidenavAnimation}
`;

export const SidenavSunSVG = styled(SunSVG)`
  ${svgSharedStyles}
`;

export const SidenavMoonSVG = styled(MoonSVG)`
  ${svgSharedStyles}
`;

export const SidenavTheme = styled.div`
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 5rem;
  height: 5rem;
  background-color: var(--white);
  top: 2rem;
  right: 2rem;
  border-radius: 50%;
  box-shadow: 0rem 0rem 0.4rem var(--cl-shadow);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &:hover ${SidenavSunSVG} {
    fill: var(--cl-primary);
  }

  &:hover ${SidenavMoonSVG} {
    fill: var(--cl-primary);
  }
`;

export const SidenavHero = styled.div`
  display: grid;
  grid-row-gap: 2rem;
  animation: showSidenavContent 0.6s;

  ${showSidenavContentAnimation}

  @media only screen and (max-width: 310px) {
    grid-row-gap: 1rem;
  }
`;

export const SidenavHeroImgContainer = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  overflow: hidden;

  justify-self: center;
  box-shadow: 0rem 0rem 1rem var(--cl-primary);
`;

export const SidenavImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const SidenavUserData = styled.div`
  display: grid;
  justify-items: center;
`;

export const SidenavUserName = styled.div`
  font-size: 1.7rem;
  width: 20rem;
  ${dynamicDataStyles}
`;

export const SidenavUserEmail = styled.div`
  width: 25rem;
  ${dynamicDataStyles}
`;

export const SidenavUserLinks = styled(Link)`
  margin-top: 3rem;
  font-size: 1.6rem;
  ${linkSharedStyles}

  @media only screen and (max-width: 310px) {
    margin-top: 1rem;
  }
`;

export const SidenavLogout = styled.div`
  cursor: pointer;
  display: inline;

  margin-top: 3rem;
  font-size: 1.6rem;
  ${linkSharedStyles}

  @media only screen and (max-width: 310px) {
    margin-top: 1rem;
  }
`;

export const SidenavNavigation = styled.nav`
  position: relative;
  display: grid;
  animation: showSidenavContent 0.6s;

  &::before {
    position: absolute;
    top: -4rem;

    content: "";
    background-color: var(--cl-tiles-6);
    width: 100%;
    height: 0.2rem;

    @media only screen and (max-width: 310px) {
      top: -1.5rem;
    }
  }

  ${showSidenavContentAnimation}
`;

export const SidenavUl = styled.ul`
  display: grid;
  grid-row-gap: 1.5rem;
  list-style: none;
`;

export const SidenavLi = styled.li`
  display: grid;
  justify-items: center;
`;

export const SidenavLink = styled(Link)`
  font-size: 1.7rem;
  ${linkSharedStyles}
`;
