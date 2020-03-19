import styled from "styled-components";

const getSignColor = props => {
  const { image } = props;
  if (!image) {
    return `color: red;`;
  } else {
    return `color: green;`;
  }
};

export const FileInputContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
`;

export const FileInputLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  font-family: var(--font-title);
  font-size: 1.7rem;
  transition: color 0.3s;
  padding: 0.6rem 0rem;
  white-space: nowrap;

  &:hover {
    color: var(--cl-primary);
  }
`;

export const FileInputSign = styled.div`
  ${getSignColor}
  display: grid;
  justify-items: end;
  font-weight: bold;
`;

export const FileInputElement = styled.input`
  display: none;
`;
