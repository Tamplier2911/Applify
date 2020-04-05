// import "./FeedbackPage.scss";
import React, { useEffect } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectIsLoading,
  selectCurrentlyLoadedFeeds,
} from "../../redux/feedbacks/feedbacks.selectors";
import { loadFeedbacksStart } from "../../redux/feedbacks/feedbacks.actions";

// components
import FeedbacksCollection from "../../components/FeedbacksCollection/FeedbacksCollection";
import WithSpinnerHOC from "../../components/WithSpinnerHOC/WithSpinnerHOC";
// import FeedbackCreate from "../../components/FeedbackCreate/FeedbackCreate";

// JS Rendering CSS
import { FeedbackPageContainer } from "./FeedbackPageStyles";

// FeedbacksCollection Buffed With Spinner
const FeedbacksCollectionWithSpinner = WithSpinnerHOC(FeedbacksCollection);

const FeedbackPage = ({ loadFeedbacksStart, loading, allFeeds }) => {
  useEffect(() => {
    if (!allFeeds.length) {
      loadFeedbacksStart();
    }
  }, [loadFeedbacksStart, allFeeds.length]);

  return (
    <FeedbackPageContainer>
      <FeedbacksCollectionWithSpinner
        isLoading={loading}
        feedbacks={allFeeds}
      />
      {/* <FeedbackCreate method="POST" /> */}
    </FeedbackPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectIsLoading,
  allFeeds: selectCurrentlyLoadedFeeds,
});

export default connect(mapStateToProps, {
  loadFeedbacksStart,
})(FeedbackPage);
