import styled from "styled-components";

const getColumnsAmount = (props) => {
  const { columns } = props;
  return `grid-template-columns: repeat(${columns}, min-content);`;
};

export const SelectInputContainer = styled.div`
  display: grid;
`;

export const SelectInputLabel = styled.div`
  display: grid;
  ${getColumnsAmount}
  grid-column-gap: 2rem;
  justify-content: center;

  padding: 2rem 0rem;
`;

export const SelectInputElement = styled.select`
  cursor: pointer;
  font-family: var(--font-title);
  font-size: 1.6rem;
  padding: 0.5rem 1rem;

  outline: none;
  box-shadow: none;
  transition: border 0.3s;

  &:hover {
    border: 0.1rem solid var(--cl-font);
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &:focus {
    outline: none;
  }

  & option {
    color: var(--cl-select);
  }

  & option:checked {
    color: var(--cl-white);
    background-color: var(--cl-font);
  }
`;

export const SelectInputOptions = styled.option``;
