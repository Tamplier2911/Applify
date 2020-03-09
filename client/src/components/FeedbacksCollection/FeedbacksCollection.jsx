// import "./FeedbacksCollection.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import FeedbackView from "../FeedbackView/FeedbackView";

// JS Rendering CSS
import {
  FeedbacksCollectionContainer,
  FeedbacksCollectionTitle,
  FeedbacksCollectionBtn
} from "./FeedbacksCollectionStyles";

// temporary DTO
import feedbacksCollectionData, {
  feedbacksTemporaryData
} from "../../utils/ComponentFeedbacksCollectionConstants/componentFeedbacksCollectionConstants";

const reviewData = feedbacksTemporaryData;

const FeedbacksCollection = ({ lang }) => {
  const {
    feedbacksCollectionTitle,
    feedbacksCollectionMore
  } = feedbacksCollectionData[lang];

  const [feedsData, setFeedsData] = useState({
    currentlyLoadedFeeds: reviewData.slice(0, 4),
    allFeedsCollection: reviewData,
    totalFeeds: reviewData.length
  });

  const { currentlyLoadedFeeds, allFeedsCollection, totalFeeds } = feedsData;
  let count = -1;

  // if all feedbacks loaded - statement is true
  const allFeedbacksLoaded = currentlyLoadedFeeds.length === totalFeeds ? 1 : 0;

  return (
    <FeedbacksCollectionContainer>
      <FeedbacksCollectionTitle>
        {feedbacksCollectionTitle}
      </FeedbacksCollectionTitle>
      {currentlyLoadedFeeds.map(feedback => {
        count++;
        return <FeedbackView key={feedback.id} {...feedback} count={count} />;
      })}
      <FeedbacksCollectionBtn
        loaded={allFeedbacksLoaded}
        onClick={
          allFeedbacksLoaded
            ? () => {}
            : () =>
                setFeedsData({
                  ...feedsData,
                  currentlyLoadedFeeds: [
                    ...currentlyLoadedFeeds,
                    ...allFeedsCollection.splice(4, 4)
                  ]
                })
        }
      >
        {feedbacksCollectionMore}
      </FeedbacksCollectionBtn>
    </FeedbacksCollectionContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps)(FeedbacksCollection);
