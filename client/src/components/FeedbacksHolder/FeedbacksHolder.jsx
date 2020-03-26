// import "./FeedbacksHolder.scss";
import React, { useEffect, useState } from "react";
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
import FormInput from "../FormInput/FormInput";
import FeedbackCard from "../FeedbackCard/FeedbackCard";

// data formaters
import { simpleFeedbacksSearch } from "../../utils/DataTransformations/simpleSearches";

// JS Rendering CSS
import {
  FeedbacksHolderContainer,
  FeedbacksHolderSearchBarContainer
} from "./FeedbacksHolderStyles";

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

  const [searchInput, setSearchInput] = useState({ search: "" });
  const { search } = searchInput;

  const onInputChange = e => {
    const { name, value } = e.target;
    setSearchInput({ ...searchInput, [name]: value });
  };

  const redirectToCreateFeedback = () => {
    history.push("/feedback");
  };

  const {
    feedsHolderTitle,
    feedsHolderButton,
    feedsHolderSearch
  } = feedbacksHolderData[lang];

  const feedbacksArray = simpleFeedbacksSearch(feedbacks, search);

  return (
    <FeedbacksHolderContainer>
      <Button
        type="button"
        value={feedsHolderButton}
        click={redirectToCreateFeedback}
      />
      <FeedbacksHolderSearchBarContainer>
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={search}
          name="search"
          label={feedsHolderSearch}
          type="text"
        />
      </FeedbacksHolderSearchBarContainer>
      <CollectionHolder
        lang={lang}
        title={feedsHolderTitle}
        refresher={1}
        cb={loadFeedbacksStart}
      >
        <CollectionForHolderWithSpinner
          isLoading={isLoading}
          dataCollection={feedbacksArray}
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
