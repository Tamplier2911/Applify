import { createSelector } from "reselect";
import transformArrayToObject from "../../utils/DataTransformations/transformArrayToObject";

const selectUsers = state => state.users;

export const selectAllUsers = createSelector(
  [selectUsers],
  users => users.allUsers
);

export const selectUsersIsLoading = createSelector(
  [selectUsers],
  users => users.isLoading
);

export const selectAllUsersAsObject = urlParamsId =>
  createSelector([selectAllUsers], allUsers => {
    const transformedToObjectUsers = transformArrayToObject(allUsers);
    return transformedToObjectUsers[urlParamsId];
  });
