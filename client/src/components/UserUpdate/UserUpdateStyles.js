import styled, { css } from "styled-components";

const sharedFieldStyles = css`
  display: grid;
  grid-template-columns: 3fr 9fr;

  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const sharedWrappingOptions = css`
  display: grid;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserUpdateContainer = styled.div`
  display: grid;
  margin-bottom: 5rem;
`;

export const UserUpdateInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-column-gap: 2rem;
  padding: 1rem;
  font-family: var(--font-title);

  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
    justify-items: center;
  }
`;

export const UserUpdateCred = styled.div`
  display: grid;
`;

export const UserUpdateName = styled.div`
  ${sharedFieldStyles}
`;

export const UserUpdateEmail = styled.div`
  ${sharedFieldStyles}
`;

export const UserUpdateRole = styled.div`
  ${sharedFieldStyles}
`;

export const UserUpdateId = styled.div`
  ${sharedFieldStyles}
`;

export const UserUpdateChanged = styled.div`
  ${sharedFieldStyles}
`;

export const UserUpdatePhoto = styled.div`
  display: grid;
  align-content: center;
`;

export const UserUpdatePhotoWrap = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0rem 0rem 0.8rem var(--cl-primary);
`;

export const UserUpdatePhotoImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const UserFieldKey = styled.div`
  display: grid;
  font-weight: bold;
`;

export const UserFieldValue = styled.div`
  ${sharedWrappingOptions}
`;

export const UserUpdateNotFound = styled.div`
  font-family: var(--font-title);
  line-height: 1;
  font-size: 4rem;
  font-weight: 300;
`;
