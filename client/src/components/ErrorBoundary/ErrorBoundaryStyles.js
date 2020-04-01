import styled from "styled-components";

// svg
import { ReactComponent as ErrorSVG } from "../../assets/svg/error.svg";

export const ErrorBoundaryContainer = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
  background-color: var(--cl-contacts-bg);
  box-shadow: 0rem 0.1rem 0.4rem var(--cl-square-shadow);
  padding: 2rem;
  margin-bottom: 5rem;
`;

export const ErrorBoundaryErrorSVG = styled(ErrorSVG)`
  width: 100%;
`;

export const ErrorBoundaryText = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  font-family: var(--font-title);
  font-weight: 300;
`;

export const ErrorBoundaryTitle = styled.div`
  line-height: 1;
  font-size: 5rem;
  align-self: end;
`;

export const ErrorBoundaryCry = styled.div`
  align-self: start;
  font-size: 3rem;
`;
