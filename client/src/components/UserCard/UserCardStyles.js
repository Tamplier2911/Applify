import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const fieldSharedStyles = css`
  text-align: center;
  font-size: 1.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserCardContainer = styled.div`
  display: grid;
  grid-template-rows: 5fr 5fr 1fr;
  grid-row-gap: 1rem;
  font-family: var(--font-title);
  padding: 2rem;
  box-shadow: 0rem 0rem 0.8rem var(--cl-font);

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0rem 0rem 0.8rem var(--cl-primary);
  }
`;

export const UserCardHeader = styled.div`
  display: grid;
  grid-auto-rows: min-content;
`;

export const UserCardHeaderName = styled.div`
  ${fieldSharedStyles}
`;

export const UserCardHeaderEmail = styled.div`
  ${fieldSharedStyles}
`;

export const UserCardHeaderRole = styled.div`
  text-align: center;
  font-size: 1.8;
`;

export const UserCardBody = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: min-content 1fr;
`;

export const UserCardBodyWrap = styled.div`
  position: absolute;
  top: -10.5rem;
  left: 50%;
  transform: translate(-50%);

  width: 10rem;
  height: 10rem;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0rem 0rem 0.8rem var(--cl-primary);
`;

export const UserCardBodyImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const UserCardBodyAbout = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
`;

export const UserCardBodyAboutLQT = styled.div`
  font-size: 6rem;
  align-self: start;
`;

export const UserCardBodyAboutCTN = styled.div`
  padding: 1rem;
  align-self: center;
  text-align: center;
`;

export const UserCardBodyAboutRQT = styled.div`
  font-size: 6rem;
  align-self: end;
`;

export const UserCardBodyPassword = styled.div`
  align-self: end;
`;

export const UserCardBodyPasswordOptions = styled.div``;

export const UserCardBodyPasswordChanged = styled.div``;

export const UserCardControlls = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
`;

export const UserCardControllsLink = styled(Link)`
  &:link,
  &:visited {
    display: grid;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: var(--cl-white);
    background-color: var(--cl-font);

    transition: background-color 0.3s;
  }

  &:hover,
  &:active {
    background-color: var(--cl-primary);
  }
`;
