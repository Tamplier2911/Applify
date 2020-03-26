import "./FeedbackUpdate.scss";
import React from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { selectAllLoadedFeedsAsObject } from "../../redux/feedbacks/feedbacks.selectors";

// components
import GetBack from "../GetBack/GetBack";

// data formaters
import getImageRelativePath from "../../utils/PathTransformations/getImageRelativePath";
import transformDateToLocaleString from "../../utils/DataTransformations/transformDateToLocaleString";

// JS Rendering CSS
import {} from "./FeedbackUpdateStyles";

// component constants

const FeedbackUpdate = ({ feedbackObject }) => {
  const { rating, createdAt, _id, feedback, user, color } = feedbackObject
    ? feedbackObject
    : {};

  const image = getImageRelativePath(user ? user.photo : "");
  const date = transformDateToLocaleString(createdAt);

  return feedbackObject ? (
    <div>
      <div>
        Style this later with form, that going to take default vlaues and update
        on submit.
      </div>
      <div>Name: {user ? user.name : ""}</div>
      <div>ID: {_id}</div>
      <div>Date: {date}</div>
      <div
        style={{
          width: "10rem",
          height: "10rem",
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: `0rem 0rem .8rem ${color}`
        }}
      >
        <img
          alt="happy user"
          src={image}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover"
          }}
        ></img>
      </div>
      <div>Feedback: {feedback}</div>
      <div>Rating: {rating}</div>
      <GetBack path={"/profile/feeds"} />
    </div>
  ) : (
    <div>Object with that id not found.</div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  feedbackObject: selectAllLoadedFeedsAsObject(ownProps.match.params.id)(state)
});

export default withRouter(connect(mapStateToProps)(FeedbackUpdate));
