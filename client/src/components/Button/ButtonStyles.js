import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: grid;
`;

export const ButtonBody = styled.button`
  cursor: pointer;
  padding: 1rem 2rem;
  border: none;
  color: var(--cl-white);
  background-color: var(--cl-font);
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--cl-primary);
  }
`;
