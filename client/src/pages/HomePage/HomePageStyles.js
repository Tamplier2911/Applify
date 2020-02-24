import styled from "styled-components";

export const HomePageContainer = styled.section`
  display: grid;
  grid-template-rows: 70vh 1fr;
  // grid-row-gap: 10rem;
  grid-row-gap: 20rem;

  @media only screen and (max-width: 980px) {
    grid-template-rows: 68vh 1fr;
    grid-row-gap: 4rem;
    // grid-row-gap: 0rem;
    // grid-row-gap: 10rem;
  }

  @media only screen and (max-width: 768px) {
    grid-template-rows: 65vh 1fr;
  }

  @media only screen and (max-width: 720px) {
    grid-template-rows: 60vh 1fr;
    grid-row-gap: 7rem;
  }

  @media only screen and (max-width: 540px) {
    margin-top: 2rem;
    grid-template-rows: 80vh 1fr;
  }
`;

export const HomePagePlaceholder = styled.div``;
