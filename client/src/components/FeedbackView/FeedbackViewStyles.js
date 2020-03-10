import styled, { css } from "styled-components";

// svg
import { ReactComponent as StarSVG } from "../../assets/svg/star.svg";

const getQuoteColor = props => {
  const { color } = props;
  return `color ${color};`;
};

const getOrder = props => {
  const { even } = props;
  if (even) {
    return `order: 2;
            @media only screen and (max-width: 678px) {
                order: 0;
            }`;
  } else {
    return `order: 0;`;
  }
};

const ImageWrapSharedStyles = css`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  order: 2;
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0.2rem 0.2rem var(--cl-feedback-view-shadow);

  @media only screen and (max-width: 310px) {
    justify-self: center;
    margin-bottom: 1rem;
    width: 12rem;
    height: 12rem;
  }
`;

const getImageWrapStyles = props => {
  const { even, color } = props;
  if (even) {
    return `border: 0.3rem solid ${color};
            background-color: ${color};
            justify-self: end;`;
  } else {
    return `border: 0.3rem solid ${color};
            background-color: ${color};`;
  }
};

const RatingWrapSharedStyles = css`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  order: 1;
  align-self: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  padding: 1.6rem;

  @media only screen and (max-width: 310px) {
    grid-template-columns: 1fr;
    grid-row: 2 / 3;
  }
`;

const getRatingWrapStyles = props => {
  const { even, color } = props;
  if (even) {
    return `grid-template-columns: repeat(5, 1fr);
            background-image: linear-gradient(
                to right,
                ${color} 90%,
                transparent 90%
            );
        
            @media only screen and (max-width: 876px) {
                grid-template-columns: repeat(5, 1fr);
            }
        
            @media only screen and (max-width: 678px) {
                grid-template-columns: repeat(5, 1fr);
            }
        
            @media only screen and (max-width: 360px) {
                grid-template-columns: repeat(5, 1fr);
            }
        
            @media only screen and (max-width: 310px) {
                background-image: linear-gradient(
                    to right,
                    ${color},
                    ${color}
                );
            }`;
  } else {
    return `background-image: linear-gradient(
                to right,
                transparent 10%,
                ${color} 10%
            );

            @media only screen and (max-width: 876px) {
                grid-template-columns: repeat(3, 1fr);
            }

            @media only screen and (max-width: 678px) {
                grid-template-columns: repeat(5, 1fr);
            }

            @media only screen and (max-width: 360px) {
                grid-template-columns: repeat(3, 1fr);
            }

            @media only screen and (max-width: 310px) {
                background-image: linear-gradient(
                  to right,
                  ${color},
                  ${color}
                );
            }
    `;
  }
};

const FeedbackNameSharedStyles = css`
  font-family: var(--font-title);
  font-size: 2rem;
  color: var(--cl-white);
  width: 15rem;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media only screen and (max-width: 768px) {
    width: 14rem;
  }

  @media only screen and (max-width: 678px) {
    width: 20rem;
  }

  @media only screen and (max-width: 360px) {
    width: 15rem;
  }

  @media only screen and (max-width: 310px) {
    font-size: 1.8rem;
    grid-column: 1 / -1;
  }
`;

const getFeedbackNameStyles = props => {
  const { even } = props;
  if (even) {
    return `grid-column: 1 / 5;
            @media only screen and (max-width: 425px) {
                grid-column: 1 / 2;
            }`;
  } else {
    return `grid-column: 2 / -1;
            @media only screen and (max-width: 425px) {
                grid-column: 5 / 6;
            }`;
  }
};

const FeedbackRatingSharedStyles = css`
  display: grid;
  grid-template-columns: repeat(5, min-content);
  grid-column-gap: 1rem;
  justify-self: center;
`;

const getFeedbackRatingStyles = props => {
  const { even } = props;
  if (even) {
    return `grid-column: 1 / 5;
            @media only screen and (max-width: 425px) {
                grid-column: 1 / 2;
            }
            @media only screen and (max-width: 310px) {
                grid-column: 1 / -1;
            }`;
  } else {
    return `grid-column: 2 / -1;
            @media only screen and (max-width: 425px) {
                grid-column: 5 / 6;
            }
            @media only screen and (max-width: 310px) {
                grid-column: 1 / -1;
            }`;
  }
};

const TriangleSharedStyles = css`
  position: absolute;
  bottom: 36%;
  width: 0;
  height: 0;
  border-top: 2rem solid transparent;
  border-bottom: 2rem solid transparent;

  @media only screen and (max-width: 678px) {
    display: none;
  }
`;

const getTriangleStyles = props => {
  const { even, color } = props;
  if (even) {
    return `
    left: -1.4rem;
    border-right: 2rem solid ${color};`;
  } else {
    return `
    right: -1.4rem;
    border-left: 2rem solid ${color};`;
  }
};

export const FeedbackViewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;

  padding: 2rem;
  align-items: center;

  @media only screen and (max-width: 678px) {
    grid-template-columns: 1fr;
  }
`;

export const FeedbackViewLeft = styled.div`
  ${getOrder}
`;

export const FeedbackViewLeftCont = styled.div`
  position: relative;
  display: grid;
`;

export const FeedbackViewLeftImgWrap = styled.div`
  ${ImageWrapSharedStyles}
  ${getImageWrapStyles}
`;

export const FeedbackViewLeftImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const FeedbackViewLeftRatingWrap = styled.div`
  ${RatingWrapSharedStyles}
  ${getRatingWrapStyles}
`;

export const FeedbackViewLeftName = styled.div`
  ${getFeedbackNameStyles}
  ${FeedbackNameSharedStyles}
`;

export const FeedbackViewLeftRating = styled.div`
  ${getFeedbackRatingStyles}
  ${FeedbackRatingSharedStyles}
`;

export const FeedbackViewLeftSVG = styled(StarSVG)`
  width: 2rem;
  height: 2rem;

  @media only screen and (max-width: 310px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const FeedbackViewLeftTriangle = styled.div`
  ${TriangleSharedStyles}
  ${getTriangleStyles}
`;

export const FeedbackViewRight = styled.div``;

export const FeedbackViewRightCont = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  grid-column-gap: 1rem;
`;

export const FeedbackViewRightQLeft = styled.div`
  ${getQuoteColor}
  align-self: start;
  font-size: 6rem;
`;

export const FeedbackViewRightText = styled.div`
  align-self: center;
  font-family: var(--font-title);
  font-size: 1.8rem;
  padding: 1rem;
  font-style: italic;
`;

export const FeedbackViewRightQRight = styled.div`
  ${getQuoteColor}
  align-self: end;
  font-size: 6rem;
`;
