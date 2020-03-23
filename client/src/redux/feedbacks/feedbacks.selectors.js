import { createSelector } from "reselect";

const selectFeedbacks = state => state.feedbacks;

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
