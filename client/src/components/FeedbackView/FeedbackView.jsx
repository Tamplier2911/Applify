// import "./FeedbackView.scss";
import React from "react";
import PropTypes from "prop-types";

// transformations
import getImageRelativePath from "../../utils/PathTransformations/getImageRelativePath";

// JS Rendering CSS
import {
  FeedbackViewContainer,
  FeedbackViewLeft,
  FeedbackViewLeftCont,
  FeedbackViewLeftImgWrap,
  FeedbackViewLeftImg,
  FeedbackViewLeftRatingWrap,
  FeedbackViewLeftName,
  FeedbackViewLeftRating,
  FeedbackViewLeftSVG,
  FeedbackViewLeftTriangle,
  FeedbackViewRight,
  FeedbackViewRightCont,
  FeedbackViewRightQLeft,
  FeedbackViewRightText,
  FeedbackViewRightQRight,
} from "./FeedbackViewStyles";

export const FeedbackView = ({
  count,
  rating,
  feedback,
  color,
  user: { name, photo },
}) => {
  const even = count % 2 === 0 ? 1 : 0;
  const groundedRating = Math.floor(rating);

  const image = getImageRelativePath(photo);

  return (
    <FeedbackViewContainer
      data-test="feedback-view"
      {...(even
        ? { animateIn: "bounceInRight", animateOnce: true }
        : { animateIn: "bounceInLeft", animateOnce: true })}
    >
      <FeedbackViewLeft data-test="feedback-view-left" even={even}>
        <FeedbackViewLeftCont>
          <FeedbackViewLeftImgWrap even={even} color={color}>
            <FeedbackViewLeftImg
              alt="happy user"
              src={image}
            ></FeedbackViewLeftImg>
          </FeedbackViewLeftImgWrap>
          <FeedbackViewLeftRatingWrap even={even} color={color}>
            <FeedbackViewLeftName even={even}>{name}</FeedbackViewLeftName>
            <FeedbackViewLeftRating even={even}>
              {Array.from(new Array(groundedRating), (el, i) => i + 1).map(
                (el) => {
                  return <FeedbackViewLeftSVG key={el} />;
                }
              )}
            </FeedbackViewLeftRating>
          </FeedbackViewLeftRatingWrap>
          <FeedbackViewLeftTriangle even={even} color={color} />
        </FeedbackViewLeftCont>
      </FeedbackViewLeft>
      <FeedbackViewRight data-test="feedback-view-right">
        <FeedbackViewRightCont>
          <FeedbackViewRightQLeft color={color}>&ldquo;</FeedbackViewRightQLeft>
          <FeedbackViewRightText>{feedback}</FeedbackViewRightText>
          <FeedbackViewRightQRight color={color}>
            &bdquo;
          </FeedbackViewRightQRight>
        </FeedbackViewRightCont>
      </FeedbackViewRight>
    </FeedbackViewContainer>
  );
};

FeedbackView.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.string,
  feedback: PropTypes.string,
  color: PropTypes.string,
  user: PropTypes.object,
};

export default FeedbackView;
