import styled, { css } from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

// PROPS REQUIRED FOR COMPONENT
// all calculations in rems
/*
const propsExample = {
    width: 10,
    height: 10,
    posX: 20,
    posY: 20,
    shadow: true,
    color: "blue"
  };
*/

const SquareSharedStyles = css`
  z-index: 10;
`;

const calcWidthAndHeight = (props) => {
  const { width, height } = props;
  return `
        width: calc(${width}rem / 3);
        height: calc(${height}rem / 3);
  `;
};

const calcWidthAndHeightTablet = (props) => {
  const { width, height } = props;
  return `
        width: calc(${width / 1.5}rem / 3);
        height: calc(${height / 1.5}rem / 3);
  `;
};

const getSizeColorAndShadow = (props) => {
  const { width, height, color, shadow } = props;
  return `
        width: ${width}rem;
        height: ${height}rem;
        background-color: ${color};
        box-shadow: ${
          shadow
            ? "0.2rem 0.2rem 1rem var(--cl-square-shadow);"
            : `0 0 0 var(--cl-white);`
        }
    `;
};

const getSizeColorAndShadowTablet = (props) => {
  const { width, height, color, shadow } = props;
  return `
        width: ${width / 1.5}rem;
        height: ${height / 1.5}rem;
        background-color: ${color};
        box-shadow: ${
          shadow
            ? "0.2rem 0.2rem 1rem var(--cl-square-shadow);"
            : `0 0 0 var(--cl-white);`
        }
    `;
};

const getSizeAndPosition = (props) => {
  const { width, height, posX, posY } = props;
  return `
        width: ${width}rem;
        height: ${height}rem;
        left: ${posX}rem;
        top: ${posY}rem;
    `;
};

const getSizeAndPositionTablet = (props) => {
  const { width, height, posX, posY } = props;
  return `
        width: ${width / 1.5}rem;
        height: ${height / 1.5}rem;
        left: ${posX / 1.5}rem;
        top: ${posY / 1.5}rem;
    `;
};

export const SquareContainer = styled(ScrollAnimation)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  position: absolute;
  perspective: 1000px;

  ${getSizeAndPosition}

  @media only screen and (max-width: 980px) {
    ${getSizeAndPositionTablet}
  }

  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

export const SquareBody = styled.div`
  grid-area: 1/ 1 / 4 / 4;
  transition: transform 0.5s;

  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cl-white);
  font-size: 1.8rem;
  font-family: var(--font-title);
  font-weight: 400;

  ${getSizeColorAndShadow}

  @media only screen and (max-width: 980px) {
    ${getSizeColorAndShadowTablet}
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

export const SquareMaskOne = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  ${SquareSharedStyles}
  ${calcWidthAndHeight}

  @media only screen and (max-width: 980px) {
    ${calcWidthAndHeightTablet}
  }

  @media only screen and (max-width: 720px) {
    display: none;
  }

  &:hover ~ ${SquareBody} {
    transform: rotateY(-20deg) rotateX(20deg);
  }
`;

export const SquareMaskTwo = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  ${SquareSharedStyles}
  ${calcWidthAndHeight}

  @media only screen and (max-width: 980px) {
    ${calcWidthAndHeightTablet}
  }

  @media only screen and (max-width: 720px) {
    display: none;
  }

  &:hover ~ ${SquareBody} {
    transform: rotateX(20deg);
  }
`;

export const SquareMaskThree = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  ${SquareSharedStyles}
  ${calcWidthAndHeight}

  @media only screen and (max-width: 980px) {
    ${calcWidthAndHeightTablet}
  }

  @media only screen and (max-width: 720px) {
    display: none;
  }

  &:hover ~ ${SquareBody} {
    transform: rotateY(20deg) rotateX(20deg);
  }
`;

export const SquareMaskFour = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  ${SquareSharedStyles}
  ${calcWidthAndHeight}

  @media only screen and (max-width: 980px) {
    ${calcWidthAndHeightTablet}
  }

  @media only screen and (max-width: 720px) {
    display: none;
  }

  &:hover ~ ${SquareBody} {
    transform: rotateY(-20deg);
  }
`;

export const SquareMaskFive = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  ${SquareSharedStyles}
  ${calcWidthAndHeight}

  @media only screen and (max-width: 980px) {
    ${calcWidthAndHeightTablet}
  }

  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

export const SquareMaskSix = styled.div`
  grid-area: 2 / 3 / 3 / 4;
  ${SquareSharedStyles}
  ${calcWidthAndHeight}

  @media only screen and (max-width: 980px) {
    ${calcWidthAndHeightTablet}
  }

  @media only screen and (max-width: 720px) {
    display: none;
  }

  &:hover ~ ${SquareBody} {
    transform: rotateY(20deg);
  }
`;

export const SquareMaskSeven = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  ${SquareSharedStyles}
  ${calcWidthAndHeight}

  @media only screen and (max-width: 980px) {
    ${calcWidthAndHeightTablet}
  }

  @media only screen and (max-width: 720px) {
    display: none;
  }

  &:hover ~ ${SquareBody} {
    transform: rotateY(-20deg) rotateX(-20deg);
  }
`;

export const SquareMaskEight = styled.div`
  grid-area: 3 / 2 / 4 / 3;
  ${SquareSharedStyles}
  ${calcWidthAndHeight}

  @media only screen and (max-width: 980px) {
    ${calcWidthAndHeightTablet}
  }

  @media only screen and (max-width: 720px) {
    display: none;
  }

  &:hover ~ ${SquareBody} {
    transform: rotateX(-20deg);
  }
`;

export const SquareMaskNine = styled.div`
  grid-area: 3 / 3 / 4 / 4;
  ${SquareSharedStyles}
  ${calcWidthAndHeight}

  @media only screen and (max-width: 980px) {
    ${calcWidthAndHeightTablet}
  }

  @media only screen and (max-width: 720px) {
    display: none;
  }

  &:hover ~ ${SquareBody} {
    transform: rotateY(20deg) rotateX(-20deg);
  }
`;
