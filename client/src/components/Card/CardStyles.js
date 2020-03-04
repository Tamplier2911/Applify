import styled from "styled-components";

const cardSpawnAnimation = props => {
  const { val } = props;
  if (val === 201) {
    return `
        animation: cardFadeIn1 2s;
        @keyframes cardFadeIn1 {
            0% {
              opacity: 0;
            }
            10% {
                opacity: 0;
            }
            100% {
              opacity: 1;
            }
        }
    `;
  } else if (val === 202) {
    return ` 
        animation: cardFadeIn2 2s;
        @keyframes cardFadeIn2 {
            0% {
                opacity: 0;
            }
            20% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
      
    `;
  } else if (val === 203) {
    return ` 
        animation: cardFadeIn2 3s;
        @keyframes cardFadeIn2 {
            0% {
                opacity: 0;
            }
            30% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    
    `;
  } else if (val === 204) {
    return ` 
        animation: cardFadeIn2 4s;
        @keyframes cardFadeIn2 {
            0% {
                opacity: 0;
            }
            40% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    
    `;
  }
};

const getCardBackground = props => {
  const {
    cl: { left, right }
  } = props;
  return `background: linear-gradient(to right, ${left}, ${right});`;
};

const getCardRsponsiveness = props => {
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

export const CardContainer = styled.div`
  ${getCardBackground}
  ${getCardRsponsiveness}
  ${cardSpawnAnimation}
  display: grid;
  grid-template-rows: 4fr 4fr 1fr;
  position: relative;
  background-position: center;
  background-size: cover;
  min-height: 40rem;

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

export const CardContentTitle = styled.h4``;

export const CardContentText = styled.div``;
