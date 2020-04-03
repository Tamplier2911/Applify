// import "./FeedbackCard.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { deleteFeedbackStart } from "../../redux/feedbacks/feedbacks.actions";

// components
import Button from "../Button/Button";

// data formaters
import getImageRelativePath from "../../utils/PathTransformations/getImageRelativePath";
import transformDateToLocaleString from "../../utils/DataTransformations/transformDateToLocaleString";

// JS Rendering CSS
import {
  FeedbackCardContainer,
  FeedbackCardHeader,
  FeedbackCardHeaderName,
  FeedbackCardBody,
  FeedbackCardBodyImgWrapper,
  FeedbackCardBodyImage,
  FeedbackCarBodyRating,
  FeedbackCarBodySVG,
  FeedbackCarBodyFeedback,
  FeedbackCardBodyContent,
  FeedbackCarBodyQuoStart,
  FeedbackCarBodyQueEnd,
  FeedbackCarBodyDate,
  FeedbackCarControlls,
  FeedbackCarControllsLink,
} from "./FeedbackCardStyles";

// component constants
import feedbackCardData from "./FeedbackCardConstants";

const FeedbackCard = ({ data, deleteFeedbackStart, lang }) => {
  const { rating, createdAt, _id, feedback, user, color } = data ? data : {};
  const long = feedback.slice(0, 80)[79];
  const shortenFeedback = feedback.slice(0, 80);
  const image = getImageRelativePath(user ? user.photo : "");
  const date = transformDateToLocaleString(createdAt);
  const { feedbackCardDelete, feedbackCardUpdate } = feedbackCardData[lang];
  return (
    <FeedbackCardContainer key={_id}>
      <FeedbackCardHeader>
        <FeedbackCardHeaderName>{user.name}</FeedbackCardHeaderName>
      </FeedbackCardHeader>
      <FeedbackCardBody>
        <FeedbackCardBodyImgWrapper color={color}>
          <FeedbackCardBodyImage src={`${image}`} alt="happy user" />
        </FeedbackCardBodyImgWrapper>
        <FeedbackCarBodyRating>
          {Array.from(new Array(Number(rating)), (el, i) => i + 1).map(
            (el, i) => {
              return <FeedbackCarBodySVG key={i} />;
            }
          )}
        </FeedbackCarBodyRating>
        <FeedbackCarBodyFeedback>
          <FeedbackCarBodyQuoStart color={color}>
            &ldquo;
          </FeedbackCarBodyQuoStart>
          <FeedbackCardBodyContent>
            {long ? shortenFeedback + "..." : shortenFeedback}
          </FeedbackCardBodyContent>
          <FeedbackCarBodyQueEnd color={color}>&bdquo;</FeedbackCarBodyQueEnd>
        </FeedbackCarBodyFeedback>
        <FeedbackCarBodyDate>{date}</FeedbackCarBodyDate>
      </FeedbackCardBody>
      <FeedbackCarControlls>
        <Button
          type="button"
          value={feedbackCardDelete}
          click={() => deleteFeedbackStart(_id)}
        ></Button>
        <FeedbackCarControllsLink to={`/profile/feeds/${_id}`}>
          {feedbackCardUpdate}
        </FeedbackCarControllsLink>
      </FeedbackCarControlls>
    </FeedbackCardContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps, { deleteFeedbackStart })(FeedbackCard);
