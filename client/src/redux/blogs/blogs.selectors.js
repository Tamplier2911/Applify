import { createSelector } from "reselect";

// data transformation
import transformArrayToObject from "../../utils/DataTransformations/transformArrayToObject";

const selectBlogs = state => state.blogs;

export const selectAllBlogposts = createSelector(
  [selectBlogs],
  blogs => blogs.allBlogposts
);

export const selectAllBlogpostsAsObject = urlParamId =>
  createSelector([selectAllBlogposts], allBlogposts => {
    const transformedToObjectBlogposts = transformArrayToObject(allBlogposts);
    return transformedToObjectBlogposts[urlParamId];
  });

export const selectIsLoading = createSelector(
  [selectBlogs],
  blogs => blogs.isLoading
);

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
