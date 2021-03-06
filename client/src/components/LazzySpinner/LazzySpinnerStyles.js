import styled, { css } from "styled-components";

const squareAnimations = css`
  @keyframes rotate {
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
    }
    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
    }
  }
`;

export const LazzySpinnerContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  height: 70vh;
`;

export const LazzySpinnerSquare = styled.div`
  ${squareAnimations}
  width: 10rem;
  height: 10rem;
  background-color: var(--cl-font);
  animation: rotate 1.5s infinite ease-in-out;
  box-shadow: 0rem 0rem 2rem var(--cl-shadow);
`;
