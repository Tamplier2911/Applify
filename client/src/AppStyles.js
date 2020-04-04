import styled from "styled-components";

/*
export const HomepageContainer = styled.canvas`
  //   position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #2f66cc, #111111);
`;
*/

export const AppContainer = styled.div`
  overflow: hidden;

  display: grid;
  // grid-template-rows: 10rem calc(100vh - (12rem + 8rem)) 8rem;
  grid-template-columns:
    [full-start] minmax(1rem, 1fr)
    [center-start] repeat(
      10,
      [col-start] minmax(min-content, 11.7rem) [col-end]
    )
    [center-end]
    minmax(1rem, 1fr) [full-end];

  grid-row-gap: 1rem;

  @media only screen and (max-width: 540px) {
    grid-template-rows: 6rem 1fr 12rem;
  }
`;

export const AppMain = styled.main`
  grid-area: 2 / center-start / 3 / center-end;
  display: grid;
  grid-row-gap: 2rem;
  // position: relative;

  margin-top: 8rem;
  min-height: calc(100vh - (10rem + 8rem));

  @media only screen and (max-width: 540px) {
    margin-top: 2rem;
  }
`;
