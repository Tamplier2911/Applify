// import "./FeedbacksHolder.scss";
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { loadFeedbacksStart } from "../../redux/feedbacks/feedbacks.actions";
import {
  selectAllLoadedFeeds,
  selectIsLoading
} from "../../redux/feedbacks/feedbacks.selectors";

// components
import WithSpinnerHOC from "../WithSpinnerHOC/WithSpinnerHOC";
import CollectionHolder from "../CollectionHolder/CollectionHolder";
import CollectionForHolder from "../CollectionForHolder/CollectionForHolder";
import Button from "../Button/Button";

import FeedbackCard from "../FeedbackCard/FeedbackCard";

// JS Rendering CSS
import { FeedbacksHolderContainer } from "./FeedbacksHolderStyles";

// component constants
import feedbacksHolderData from "../../utils/ComponentFeedbacksHolderConstants/componentFeedbacksHolderConstants";

// buffing collection with spinner
const CollectionForHolderWithSpinner = WithSpinnerHOC(CollectionForHolder);

const FeedbacksHolder = ({
  lang,
  history,
  loadFeedbacksStart,
  feedbacks,
  isLoading
}) => {
  useEffect(() => {
    if (!feedbacks.length) {
      loadFeedbacksStart();
    }
  }, [loadFeedbacksStart, feedbacks.length]);

  const redirectToCreateFeedback = () => {
    history.push("/feedback");
  };

  const { feedsHolderTitle, feedsHolderButton } = feedbacksHolderData[lang];

  return (
    <FeedbacksHolderContainer>
      <Button
        type="button"
        value={feedsHolderButton}
        click={redirectToCreateFeedback}
      />
      <CollectionHolder
        lang={lang}
        title={feedsHolderTitle}
        refresher={1}
        cb={loadFeedbacksStart}
      >
        <CollectionForHolderWithSpinner
          isLoading={isLoading}
          dataCollection={feedbacks}
        >
          <FeedbackCard />
        </CollectionForHolderWithSpinner>
      </CollectionHolder>
    </FeedbacksHolderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
  feedbacks: selectAllLoadedFeeds,
  isLoading: selectIsLoading
});

export default withRouter(
  connect(mapStateToProps, { loadFeedbacksStart })(FeedbacksHolder)
);
