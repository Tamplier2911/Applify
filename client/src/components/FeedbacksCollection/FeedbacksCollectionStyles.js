import styled, { css } from "styled-components";

const SharedButtonStyles = css`
  cursor: pointer;
  font-family: var(--font-title);

  display: grid;
  padding: 1rem;
  text-align: center;
  transition: color 0.3s, background-color 0.3s;
`;

const getButtonStyle = props => {
  const { loaded } = props;
  if (loaded) {
    return `background-color: var(--cl-button-disabled-bg);
            color: var(--cl-button-disabled-text);
  
            &:hover {
                background-color: var(--cl-button-disabled-bg);
            }`;
  } else {
    return `background-color: var(--cl-font);
            color: var(--cl-white);
            &:hover {
                background-color: var(--cl-primary);
            }`;
  }
};

export const FeedbacksCollectionContainer = styled.div`
  display: grid;
  grid-row-gap: 4rem;
`;

export const FeedbacksCollectionTitle = styled.h2`
  font-family: var(--font-title);
  font-size: 4rem;
  font-weight: 300;
  padding: 1rem;
`;

export const FeedbacksCollectionBtn = styled.div`
  ${SharedButtonStyles}
  ${getButtonStyle}
`;
