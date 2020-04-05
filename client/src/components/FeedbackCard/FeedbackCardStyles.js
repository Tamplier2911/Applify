import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

// SVG
import { ReactComponent as StartSVG } from "../../assets/svg/star.svg";

const quoteSharedStyles = css`
  display: inline-block;
  font-size: 6rem;
`;

const getColor = (props) => {
  const { color } = props;
  return `color: ${color};`;
};

const getBoxShadow = (props) => {
  const { color } = props;
  return `box-shadow: 0rem 0rem 0.8rem ${color};`;
};

export const FeedbackCardContainer = styled(ScrollAnimation)`
  display: grid;
  grid-template-rows: 4fr 6fr 1fr;
  box-shadow: 0rem 0rem 0.8rem var(--cl-font);
  padding: 1rem;
  transition: box-shadow 0.3s;
  font-family: var(--font-title);

  &:hover {
    box-shadow: 0rem 0rem 0.8rem var(--cl-primary);
  }
`;

export const FeedbackCardHeader = styled.div`
  display: grid;
`;

export const FeedbackCardHeaderName = styled.div`
  text-align: center;
  font-size: 1.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FeedbackCardBody = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: min-content min-content 1fr;
`;

export const FeedbackCardBodyImgWrapper = styled.div`
  ${getBoxShadow}
  position: absolute;
  width: 10rem;
  height: 10rem;
  overflow: hidden;
  border-radius: 50%;
  left: 50%;
  top: -10rem;
  transform: translate(-50%);
`;

export const FeedbackCardBodyImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const FeedbackCarBodyRating = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;

  & svg:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const FeedbackCarBodySVG = styled(StartSVG)`
  width: 3rem;
  height: 3rem;
`;

export const FeedbackCarBodyFeedback = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
`;

export const FeedbackCardBodyContent = styled.div`
  align-self: center;
  padding: 1rem;
  text-align: center;
`;

export const FeedbackCarBodyQuoStart = styled.span`
  align-self: start;
  ${quoteSharedStyles}
  ${getColor}
`;

export const FeedbackCarBodyQueEnd = styled.span`
  align-self: end;
  ${quoteSharedStyles}
  ${getColor}
`;

export const FeedbackCarBodyDate = styled.div`
  align-self: center;
  text-align: center;
`;

export const FeedbackCarControlls = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
`;

export const FeedbackCarControllsLink = styled(Link)`
  display: grid;
  align-items: center;
  text-align: center;
  &:link,
  &:visited {
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
