// import "./FeedbacksCollection.scss";
import React from "react";
import PropTypes from "prop-types";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { selectTotalLoaded } from "../../redux/feedbacks/feedbacks.selectors";
import { getMoreFeeds } from "../../redux/feedbacks/feedbacks.actions";

// components
import FeedbackView from "../FeedbackView/FeedbackView";
import FeedbackCreate from "../../components/FeedbackCreate/FeedbackCreate";

// JS Rendering CSS
import {
  FeedbacksCollectionContainer,
  FeedbacksCollectionTitle,
  FeedbacksCollectionBtn,
} from "./FeedbacksCollectionStyles";

// component constants
import feedbacksCollectionData from "./FeedbacksCollectionConstants";

const FeedbacksCollection = ({
  lang,
  feedbacks,
  totalLoaded,
  getMoreFeeds,
}) => {
  const {
    feedbacksCollectionTitle,
    feedbacksCollectionMore,
  } = feedbacksCollectionData[lang];

  let count = -1;

  const allFeedbacksLoaded = feedbacks.length === totalLoaded ? 1 : 0;

  return (
    <FeedbacksCollectionContainer data-test="feedbacks-collection">
      <FeedbacksCollectionTitle>
        {feedbacksCollectionTitle}
      </FeedbacksCollectionTitle>
      {feedbacks.map((feedback) => {
        count++;
        return <FeedbackView key={feedback._id} {...feedback} count={count} />;
      })}
      <FeedbacksCollectionBtn
        data-test="feedbacks-collection-controlls"
        loaded={allFeedbacksLoaded}
        onClick={allFeedbacksLoaded ? () => {} : () => getMoreFeeds()}
      >
        {feedbacksCollectionMore}
      </FeedbacksCollectionBtn>
      <FeedbackCreate method="POST" />
    </FeedbacksCollectionContainer>
  );
};

FeedbacksCollection.propTypes = {
  feedbacks: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
  totalLoaded: selectTotalLoaded,
});

export default connect(mapStateToProps, { getMoreFeeds })(FeedbacksCollection);
