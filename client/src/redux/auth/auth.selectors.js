import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectUserObject = createSelector(
  [selectUser],
  user => user.userObject
);

// export const selectUserPhoto = createSelector([selectUserObject], userObject =>
//   userObject ? userObject.photo : ""
// );

export const selectIsLogged = createSelector(
  [selectUser],
  user => user.isLogged
);
