import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const MessageViewContentSharedStyles = css`
  width: 50rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (max-width: 720px) {
    width: 40rem;
  }

  @media only screen and (max-width: 425px) {
    width: 30rem;
  }

  @media only screen and (max-width: 300px) {
    width: 20rem;
  }
`;

export const MessageViewContainer = styled(ScrollAnimation)`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding: 1rem;
  box-shadow: 0rem 0rem 0.5rem var(--cl-darkest-grey);
  transition: box-shadow 0.3s;
  font-family: var(--font-title);

  &:hover {
    box-shadow: 0rem 0rem 0.8rem var(--cl-primary);
  }

  @media only screen and (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const MessageViewPortrait = styled.div`
  grid-row: 1 / 3;
  align-self: center;

  @media only screen and (max-width: 520px) {
    grid-row: 1 / 2;
    justify-self: center;
  }
`;

export const MessageViewImageWrap = styled.div`
  width: 10rem;
  height: 10rem;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0rem 0rem 0.5rem var(--cl-primary);
`;

export const MessageViewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const MessageViewContent = styled.div`
  display: grid;
  grid-row-gap: 0.5rem;
`;

export const MessageViewName = styled.h3`
  ${MessageViewContentSharedStyles}
`;

export const MessageViewEmail = styled.div`
  ${MessageViewContentSharedStyles}
`;

export const MessageViewMessage = styled.div``;

export const MessageViewDate = styled.div`
  display: grid;
  justify-items: start;
  color: var(--cl-darkest-grey);
`;

export const MessageViewControlls = styled.div`
  grid-column: 2 / -1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;

  @media only screen and (max-width: 520px) {
    grid-column: 1 / -1;
  }
`;

export const MessageViewLink = styled(Link)`
  &:link,
  &:visited {
    display: grid;
    align-items: center;
    font-family: var(--font-title);
    font-size: 1.6rem;
    text-align: center;
    text-decoration: none;
    color: var(--cl-white);
    background-color: var(--cl-font);
    transition: color 0.3s, background-color 0.3s;
  }
  &:active,
  &:hover {
    background-color: var(--cl-primary);
  }
`;
