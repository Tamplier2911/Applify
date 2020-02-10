import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  /* grid-template-columns: subgrid; */
  grid-template-columns:
    [full-start] minmax(1rem, 1fr)
    [center-start] repeat(
      10,
      [col-start] minmax(min-content, 11.7rem) [col-end]
    )
    [center-end]
    minmax(1rem, 1fr) [full-end];
  grid-area: 1 / full-start / 2 / full-end;

  height: 6rem;
  width: 100%;
  position: fixed;
  z-index: 20;
  background-color: var(--cl-header);

  align-items: center;
  justify-items: center;

  box-shadow: 0 0.2rem 0.8rem var(--cl-shadow);
`;

export const HeaderContent = styled.div`
  /* max-width: 1170px; */
  /* margin: 0 auto;  */
  // color: #e4e4e4;
  grid-column: center-start / center-end;
  grid-column: 2 / 12;
`;
