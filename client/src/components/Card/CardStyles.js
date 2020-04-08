import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const getCardBackground = (props) => {
  const {
    cl: { left, right },
  } = props;
  return `background: linear-gradient(to right, ${left}, ${right});`;
};

const getCardRsponsiveness = (props) => {
  const { val } = props;
  if (val === 204) {
    return `
        @media only screen and (max-width: 1157px) {
            grid-column: 1 / -1;
        }
        @media only screen and (max-width: 872px) {
            grid-column: auto;
        }
    `;
  }
};

export const CardIconWrapper = styled.div`
  position: absolute;
  width: 8rem;
  height: 8rem;
  background-color: var(--cl-white);
  border-radius: 50%;

  top: 13.5rem;
  left: 50%;
  transform: translateX(-50%);

  transition: transform 0.3s;
`;

export const CardContainer = styled(ScrollAnimation)`
${getCardBackground}
${getCardRsponsiveness}
  display: grid;
  grid-template-rows: 4fr 4fr 1fr;
  position: relative;z
  background-position: center;
  background-size: cover;
  min-height: 40rem;
  max-height: 40rem;

  box-shadow: 0rem 0.1rem 1rem var(--cl-card-shadow);
  transition: box-shadow 0.3s;

  //   animation: cardFadeIn1 2s;

  &:hover {
    box-shadow: 0rem 0.1rem 1rem var(--cl-card-shadow-hover);
  }

  &:hover ${CardIconWrapper} {
    transform: scale(1.4) translateX(-35%);
  }
`;

export const CardContent = styled.div`
  grid-row: 2 / 3;
  display: grid;
  grid-auto-rows: min-content;
  justify-items: center;
  align-content: center;
  background-color: var(--cl-white);
`;

export const CardContentTitle = styled.h4`
  white-space: nowrap;
`;

export const CardContentText = styled.div`
  white-space: nowrap;
`;
