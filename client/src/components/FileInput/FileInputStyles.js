import styled from "styled-components";

export const FileInputContainer = styled.div`
  position: relative;
`;

export const FileInputLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  font-family: var(--font-title);
  font-size: 1.7rem;
  transition: color 0.3s;
  padding: 0.6rem 0rem;

  &:hover {
    color: var(--cl-primary);
  }
`;

export const FileInputElement = styled.input`
  display: none;
`;
