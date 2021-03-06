import styled from "styled-components";

// svg
import { ReactComponent as RefreshSVG } from "../../assets/svg/refresh.svg";

export const RefresherContainer = styled.div`
  z-index: 20;

  cursor: pointer;
  position: fixed;
  bottom: 4rem;
  left: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;

  background-color: var(--cl-white);
  box-shadow: 0.1rem 0.2rem 0.6rem var(--cl-langpan-shadow);
  border-radius: 50%;
  width: 7rem;
  height: 7rem;

  transition: color 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &:hover * {
    fill: var(--cl-primary);
  }
`;

export const RefresherSVG = styled(RefreshSVG)`
  fill: var(--cl-font);
  width: 4rem;
  height: 4rem;

  transition: fill 0.3s;
`;
