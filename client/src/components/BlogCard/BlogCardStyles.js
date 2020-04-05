import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

// svg
import { ReactComponent as HeartSVG } from "../../assets/svg/heart.svg";

const sharedStylesBg = css`
  background-color: var(--cl-white);
  padding: 1rem;
`;

const sharedStylesTextOverflow = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const getBackgroundImage = (props) => {
  const { img } = props;
  return `background: center / cover no-repeat url(${img});`;
};

export const BlogCardContainer = styled(ScrollAnimation)`
  display: grid;
  grid-template-rows: 2.5fr 2fr 1fr;
  font-family: var(--font-title);
  grid-row-gap: 1rem;
  padding: 1rem;
  box-shadow: 0rem 0rem 0.8rem var(--cl-font);
  transition: box-shadow 0.3s;

  ${getBackgroundImage}

  &:hover {
    box-shadow: 0rem 0rem 0.8rem var(--cl-primary);
  }
`;

export const BlogCardHeader = styled.div`
  ${sharedStylesBg}
  display: grid;
  grid-auto-rows: min-content;
  text-align: center;
`;

export const BlogCardHeaderTitle = styled.div`
  ${sharedStylesTextOverflow}
  font-size: 1.8rem;
`;
export const BlogCardHeaderTheme = styled.div`
  ${sharedStylesTextOverflow}
`;

export const BlogCardHeaderDate = styled.div``;

export const BlogCardBody = styled.div`
  ${sharedStylesBg}
  display: grid;
  position: relative;
  grid-auto-rows: min-content;
  align-content: end;
`;
export const BlogCardBodyImgWrap = styled.div`
  position: absolute;
  left: 50%;
  top: -5rem;

  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0rem 0rem 0.8rem var(--cl-primary);

  transform: translate(-50%);
`;

export const BlogCardBodyImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const BlogCardBodyName = styled.div`
  ${sharedStylesTextOverflow}
  text-align: center;
`;

export const BlogCardBodyLikes = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
`;

export const BlogCardBodyAmount = styled.div``;

export const BlogCardBodySvgWrap = styled.div``;

export const BlogCardBodySVG = styled(HeartSVG)`
  width: 2rem;
  height: 2rem;
  fill: var(--cl-font);
`;

export const BlogCardControlls = styled.div`
  ${sharedStylesBg}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
`;

export const BlogCardControllsLink = styled(Link)`
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
