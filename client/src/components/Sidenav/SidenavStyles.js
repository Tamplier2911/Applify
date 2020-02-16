import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

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
    color: var(--cl-tiles-1);
  }
`;

const dynamicDataStyles = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (max-width: 300px) {
    width: 15rem;
  }
`;

const displaySidenav = props => {
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
        width: 300vw;
        height: 300vh;
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
  height: 200vh;
  background-color: var(--cl-white);
  padding: 2rem;
  box-shadow: -0.1rem 0.2rem 0.4rem var(--cl-sidenav-shadow);
  animation: showSidenav 0.5s;

  @media only screen and (max-width: 300px) {
    width: 25rem;
  }

  ${showSidenavAnimation}
`;

export const SidenavHero = styled.div`
  display: grid;
  grid-row-gap: 2rem;
  animation: showSidenavContent 0.6s;

  ${showSidenavContentAnimation}
`;

export const SidenavHeroImgContainer = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  overflow: hidden;

  justify-self: center;
  box-shadow: 0.1rem 0.2rem 0.4rem var(--cl-sidenav-shadow);
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
