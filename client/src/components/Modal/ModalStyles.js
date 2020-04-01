import styled, { css } from "styled-components";

const showModalAnimation = css`
  @keyframes showModal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const dysplayModal = props => {
  const { hidden } = props;
  if (hidden) {
    return `
        display: none
    `;
  } else {
    return `
        display: grid;
        font-family: var(--font-title);
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: var(--cl-sidenav);
        z-index: 150;
        
        align-items: center;
        justify-items: center;
        
        @media only screen and (max-width: 310px) {
            width: 300vw;
            height: 300vh;
            display: inline-block;
        }
    `;
  }
};

export const ModalContainer = styled.div`
  ${dysplayModal}
`;

export const ModalContentBox = styled.div`
  ${showModalAnimation}

  display: grid;
  grid-template-rows: 2fr 0.5fr 7fr;

  position: relative;
  grid-auto-rows: min-content;
  width: 40rem;
  height: 30rem;

  padding: 2rem;
  overflow-x: hidden;
  overflow-y: scroll;

  background-color: var(--cl-white);
  box-shadow: 0 0.2rem 0.4rem var(--cl-sidenav-shadow);

  animation: showModal 1s;

  @media only screen and (max-width: 360px) {
    width: 30rem;
    height: 40rem;
  }

  @media only screen and (max-width: 310px) {
    margin: 10rem auto auto 4rem;
  }

  @media only screen and (max-width: 300px) {
    margin: 0;
    width: 100vw;
    height: 100vh;
  }

  @media only screen and (max-width: 200px) {
    width: 100vw;
    height: 130vh;
  }

  &::-webkit-scrollbar {
    width: 0.4rem;
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

  &::after {
    content: "";
    margin: 0.4rem 0 0.4rem 0;
    grid-row: 2 / 3;
    display: inline-block;
    width: 100%;
    height: 0.2rem;
    background-color: var(--cl-dark-grey);
  }
`;

export const ModalHeader = styled.h3`
  font-size: 2.4rem;
  font-weight: 400;
`;

export const ModalClose = styled.div`
  position: absolute;
  cursor: pointer;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  transition: color 0.3s;

  &:hover,
  &:active {
    color: var(--cl-primary);
  }
`;

export const ModalContent = styled.div`
  font-size: 1.7rem;
`;
