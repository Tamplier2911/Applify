// import "./FeedbackCard.scss";
import React from "react";
import PropTypes from "prop-types";

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
    <FeedbackCardContainer
      data-test="feedback-card"
      key={_id}
      animateIn={"flipInY"}
      animateOnce={true}
    >
      <FeedbackCardHeader>
        <FeedbackCardHeaderName>{user.name}</FeedbackCardHeaderName>
      </FeedbackCardHeader>
      <FeedbackCardBody data-test="feedback-card-body">
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
      <FeedbackCarControlls data-test="feedback-card-controlls">
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

FeedbackCard.propTypes = {
  data: PropTypes.shape({
    color: PropTypes.string,
    createdAt: PropTypes.string,
    feedback: PropTypes.string,
    rating: PropTypes.string,
    user: PropTypes.object,
    _id: PropTypes.string,
  }),
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps, { deleteFeedbackStart })(FeedbackCard);
