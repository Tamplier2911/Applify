import styled, { css } from "styled-components";

const getColor = props => {
  const { color } = props;
  return `box-shadow: 0rem 0rem 0.8rem ${color};`;
};

const fadeInFeedbackUpdate = css`
  @keyframes updatedFeedFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const FeedbackUpdateContainer = styled.div`
  ${fadeInFeedbackUpdate}
  display: grid;
  font-family: var(--font-title);
  animation: updatedFeedFadeIn 1s;
`;

export const FeedbackUpdatePostedBy = styled.div`
  display: grid;
  padding: 1rem;
`;

export const FeedbackUpdateTitle = styled.h2`
  font-family: var(--font-title);
  font-size: 4rem;
  font-weight: 300;
`;

export const FeedbackUpdateUserDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const FeedbackUpdateDetailsWrap = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  align-content: center;
`;

export const FeedbackUpdateDetailsName = styled.div`
  font-size: 1.8rem;
`;

export const FeedbackUpdateDetailsDate = styled.div`
  font-size: 1.8rem;
`;

export const FeedbackUpdateImageWrap = styled.div`
  ${getColor}
  justify-self: end;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  overflow: hidden;
`;

export const FeedbackUpdateImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;
