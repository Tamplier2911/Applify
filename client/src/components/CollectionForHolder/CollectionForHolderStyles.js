import styled from "styled-components";

export const CollectionForHolderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  }

  @media only screen and (max-width: 425px) {
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  }

  @media only screen and (max-width: 425px) {
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  }
`;
