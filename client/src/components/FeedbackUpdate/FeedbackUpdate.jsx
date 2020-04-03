// import "./FeedbackUpdate.scss";
import React from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { selectAllLoadedFeedsAsObject } from "../../redux/feedbacks/feedbacks.selectors";

// components
import GetBack from "../GetBack/GetBack";
import FeedbackCreate from "../FeedbackCreate/FeedbackCreate";

// data formaters
import getImageRelativePath from "../../utils/PathTransformations/getImageRelativePath";
import transformDateToLocaleString from "../../utils/DataTransformations/transformDateToLocaleString";

// JS Rendering CSS
import {
  FeedbackUpdateContainer,
  FeedbackUpdatePostedBy,
  FeedbackUpdateTitle,
  FeedbackUpdateUserDetails,
  FeedbackUpdateDetailsWrap,
  FeedbackUpdateDetailsName,
  FeedbackUpdateDetailsDate,
  FeedbackUpdateImageWrap,
  FeedbackUpdateImage,
} from "./FeedbackUpdateStyles";

// component constants
import feedbackUpdateData from "./FeedbackUpdateConstants";

const FeedbackUpdate = ({ feedbackObject, lang }) => {
  const { rating, createdAt, _id, feedback, user, color } = feedbackObject
    ? feedbackObject
    : {};

  const image = getImageRelativePath(user ? user.photo : "");
  const date = transformDateToLocaleString(createdAt);

  const updateData = { feedback, rating, _id };

  const {
    feedbackUpdateTitle,
    feedbackUpdateName,
    feedbackUpdateDate,
    feedbackUpdateNotFound,
  } = feedbackUpdateData[lang];

  return feedbackObject ? (
    <FeedbackUpdateContainer>
      <FeedbackUpdatePostedBy>
        <FeedbackUpdateTitle>{feedbackUpdateTitle}</FeedbackUpdateTitle>
        <FeedbackUpdateUserDetails>
          <FeedbackUpdateDetailsWrap>
            <FeedbackUpdateDetailsName>
              {feedbackUpdateName} {user ? user.name : ""}
            </FeedbackUpdateDetailsName>
            <FeedbackUpdateDetailsDate>
              {feedbackUpdateDate} {date}
            </FeedbackUpdateDetailsDate>
          </FeedbackUpdateDetailsWrap>
          <FeedbackUpdateImageWrap color={color}>
            <FeedbackUpdateImage alt="happy user" src={image} />
          </FeedbackUpdateImageWrap>
        </FeedbackUpdateUserDetails>
      </FeedbackUpdatePostedBy>
      <FeedbackCreate method="PATCH" updateData={updateData} />
      <GetBack path={"/profile/feeds"} />
    </FeedbackUpdateContainer>
  ) : (
    <FeedbackUpdateTitle>{feedbackUpdateNotFound}</FeedbackUpdateTitle>
  );
};

const mapStateToProps = (state, ownProps) => ({
  lang: selectCurrentLanguage(state),
  feedbackObject: selectAllLoadedFeedsAsObject(ownProps.match.params.id)(state),
});

export default withRouter(connect(mapStateToProps)(FeedbackUpdate));
