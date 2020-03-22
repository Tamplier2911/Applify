import styled, { css } from "styled-components";

const fadeInCollection = css`
  @keyframes fadeInMsgCollection {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const MessagesCollectionContainer = styled.div`
  ${fadeInCollection}
  display: grid;
  grid-row-gap: 2rem;
  animation: 1s fadeInMsgCollection;
`;
