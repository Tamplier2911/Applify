import styled from "styled-components";

export const AuthPageContainer = styled.div`
  display: grid;
  grid-row-gap: 5rem;

  // @media only screen and (max-width: 980px) {
  //   grid-template-rows: 68vh 1fr;
  //   grid-row-gap: 0rem;
  // }

  // @media only screen and (max-width: 720px) {
  //   grid-template-rows: 60vh 1fr;
  //   grid-row-gap: 7rem;
  // }

  // @media only screen and (max-width: 540px) {
  //   margin-top: 2rem;
  //   grid-template-rows: 80vh 1fr;
  // }

  @media only screen and (max-width: 768px) {
    grid-row-gap: 5rem;
  }

  @media only screen and (max-width: 425px) {
    grid-row-gap: 5rem;
  }
`;

export const AuthPagePlaceholder = styled.div`
  visibility: hidden;
  height: 0rem;
  min-width: 174px;
`;
