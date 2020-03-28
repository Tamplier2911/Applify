import styled, { css } from "styled-components";

const DisabledOpacity = css`
  opacity: 0.4;
`;

const getSelectedColor = props => {
  const { selected } = props;
  if (selected) {
    return `color: var(--cl-primary);`;
  }
  return ``;
};

const isDisabledLeft = props => {
  const { disabled } = props;
  if (disabled) {
    return `${DisabledOpacity}`;
  } else {
    return ``;
  }
};

const isDisabledRight = props => {
  const { disabled } = props;
  if (disabled) {
    return `${DisabledOpacity}`;
  } else {
    return ``;
  }
};

export const BlogsCollectionContainer = styled.div``;

export const BlogsCollectionTitle = styled.h2`
  font-family: var(--font-title);
  font-size: 4rem;
  font-weight: 300;
  padding: 1rem;
`;

export const BlogsCollectionBlogs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr) min-content;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogsCollectionNav = styled.div`
  grid-column: 1 / -1;
  grid-row: 7 / 8;
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  justify-content: center;

  & *:not(:last-child) {
    margin-right: 2rem;
  }

  @media only screen and (max-width: 425px) {
    text-align: center;
  }

  & div {
    cursor: pointer;
    transition: color 0.3s;
    font-weight: bold;
    font-size: 2rem;

    @media only screen and (max-width: 425px) {
      font-size: 3rem;
    }

    @media only screen and (max-width: 300px) {
      font-size: 2rem;
    }

    &:hover {
      color: var(--cl-primary);
    }
  }
`;

export const BlogsCollectionNavLeft = styled.div`
  ${isDisabledLeft}
`;

export const BlogsCollectionNavNum = styled.div`
  ${getSelectedColor}
`;

export const BlogsCollectionNavRight = styled.div`
  ${isDisabledRight}
`;
