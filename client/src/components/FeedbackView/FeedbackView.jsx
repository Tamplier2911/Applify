// import "./FeedbackView.scss";
import React from "react";

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
  FeedbackViewRightQRight
} from "./FeedbackViewStyles";

export const FeedbackView = ({
  name,
  photo,
  rating,
  feedback,
  count,
  color
}) => {
  const even = count % 2 === 0 ? 1 : 0;
  const groundedRating = Math.floor(rating);

  return (
    <FeedbackViewContainer>
      <FeedbackViewLeft even={even}>
        <FeedbackViewLeftCont>
          <FeedbackViewLeftImgWrap even={even} color={color}>
            <FeedbackViewLeftImg
              alt="happy user"
              src={photo}
            ></FeedbackViewLeftImg>
          </FeedbackViewLeftImgWrap>
          <FeedbackViewLeftRatingWrap even={even} color={color}>
            <FeedbackViewLeftName even={even}>{name}</FeedbackViewLeftName>
            <FeedbackViewLeftRating even={even}>
              {Array.from(new Array(groundedRating), (el, i) => i + 1).map(
                el => {
                  return <FeedbackViewLeftSVG key={el} />;
                }
              )}
            </FeedbackViewLeftRating>
          </FeedbackViewLeftRatingWrap>
          <FeedbackViewLeftTriangle even={even} color={color} />
        </FeedbackViewLeftCont>
      </FeedbackViewLeft>
      <FeedbackViewRight>
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

export default FeedbackView;