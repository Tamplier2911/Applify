import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as MenuSVG } from "../../assets/svg/menu.svg";
import { ReactComponent as LogoSVG } from "../../assets/svg/logo-min.svg";

export const HeaderContainer = styled.div`
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

  height: 6rem;
  width: 100%;
  position: fixed;
  z-index: 20;
  background-color: var(--cl-header);

  // align-items: center;
  // justify-items: end;

  box-shadow: 0 0.2rem 0.8rem var(--cl-shadow);
`;

export const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.05fr min-content;
  align-items: center;

  /* max-width: 1170px; */
  /* margin: 0 auto;  */

  // display: flex;
  // justify-content: space-between;
  // align-items: center;

  grid-column: 2 / 12;
`;

export const HeaderMenu = styled(MenuSVG)`
  cursor: pointer;
  transition: fill 0.3s;
  &:hover {
    fill: var(--cl-mainhover);
  }
`;

export const HeaderLinksWrapper = styled.div`
  font-size: 1.8rem;
  // font-weight: bold;

  @media only screen and (max-width: 500px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 15rem;
  }

  @media only screen and (max-width: 300px) {
    width: 12rem;
  }
`;

export const HeaderLink = styled(Link)`
  &:link,
  &:visited {
    white-space: nowrap;
    font-family: var(--font-title);
    text-decoration: none;
    color: currentColor;
    transition: color 0.3s;
  }

  &:hover,
  &:active {
    color: var(--cl-mainhover);
  }
`;

export const HeaderLogoLink = styled(Link)`
  display: inline-block;
  width: 4rem;
  height: 4rem;
`;

export const HeaderLogoImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const HeaderLogoSVG = styled(LogoSVG)`
  fill: var(--cl-font);
  width: 4rem;
  height: 4rem;
  transition: fill 0.3s;

  &:hover {
    fill: var(--cl-primary);
  }
`;
