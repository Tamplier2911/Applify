import styled, { css } from "styled-components";

const sharedMessageReadStyles = css`
  width: 50rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (max-width: 720px) {
    width: 35rem;
  }

  @media only screen and (max-width: 425px) {
    width: 25rem;
  }

  @media only screen and (max-width: 300px) {
    width: 20rem;
  }
`;

export const MessageReadContainer = styled.div`
  display: grid;
  grid-row-gap: 2rem;
  font-family: var(--font-title);

  margin-bottom: 4rem;
`;

export const MessageReadHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;

  @media only screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-row-gap: 1rem;
  }
`;

export const MessageReadCredentials = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  align-content: center;

  @media only screen and (max-width: 425px) {
    order: 3;
    text-align: center;
  }
`;

export const MessageReadName = styled.div`
  ${sharedMessageReadStyles}
  order: 1;
  font-size: 2rem;
  font-weight: bold;
`;

export const MessageReadEmail = styled.div`
  ${sharedMessageReadStyles}
  order: 3;
  font-size: 1.8rem;
`;

export const MessageReadPortrait = styled.div`
  order: 2;
`;

export const MessageReadWrapper = styled.div`
  width: 10rem;
  height: 10rem;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0 0.8rem var(--cl-primary);
`;

export const MessageReadImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const MessageReadBody = styled.div``;

export const MessageReadMessage = styled.div`
  font-size: 1.7rem;
`;

export const MessageReadDateWrap = styled.div`
  display: grid;
  justify-items: end;
`;

export const MessageReadDate = styled.div`
  color: var(--cl-darkest-grey);
`;

export const MessageReadControlls = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
`;

export const MessageReadNotFound = styled.div`
  font-size: 1.8rem;
  font-family: var(--font-title);
`;
