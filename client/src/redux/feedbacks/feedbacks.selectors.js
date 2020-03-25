import { createSelector } from "reselect";
import transformArrayToObject from "../../utils/DataTransformations/transformArrayToObject";

const selectFeedbacks = state => state.feedbacks;

export const selectAllLoadedFeeds = createSelector(
  [selectFeedbacks],
  feedbacks => feedbacks.allFeedbacks
);

export const selectAllLoadedFeedsAsObject = feedbackUrlParam =>
  createSelector([selectAllLoadedFeeds], loadedFeeds => {
    const feedsAsObject = transformArrayToObject(loadedFeeds);
    return feedsAsObject[feedbackUrlParam];
  });

export const selectCurrentlyLoadedFeeds = createSelector(
  [selectFeedbacks],
  feedbacks => feedbacks.currentlyLoaded
);

export const selectIsLoading = createSelector(
  [selectFeedbacks],
  feedbacks => feedbacks.isLoading
);

export const selectTotalLoaded = createSelector(
  [selectFeedbacks],
  feedbacks => feedbacks.totalLoaded
);
