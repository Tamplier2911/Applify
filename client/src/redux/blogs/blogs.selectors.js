import { createSelector } from "reselect";

const selectBlogs = state => state.blogs;

export const selectCurrentSet = createSelector(
  [selectBlogs],
  blogs => blogs.currentSet
);

export const selectAllSets = createSelector(
  [selectBlogs],
  blogs => blogs.allSets
);

export const selectCurrentSlot = createSelector(
  [selectBlogs],
  blogs => blogs.currentSlot
);

export const selectAllSlots = createSelector(
  [selectBlogs],
  blogs => blogs.allSlots
);
