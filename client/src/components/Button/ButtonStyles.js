import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: grid;
`;

export const ButtonBody = styled.button`
  cursor: pointer;
  font-family: var(--font-title);
  padding: 1rem 2rem;
  border: none;
  color: var(--cl-white);
  background-color: var(--cl-font);
  transition: background-color 0.3s;
  outline: none;
  font-size: 1.6rem;

  &:hover {
    background-color: var(--cl-primary);
  }
`;
