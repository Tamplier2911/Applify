import { createSelector } from "reselect";

const selectMessages = state => state.messages;

export const selectAllMessages = createSelector([selectMessages], messages => {
  const transformedToArray = Object.values(messages.allMessages);
  return transformedToArray.length ? transformedToArray : [];
});

export const selectIsLoading = createSelector(
  [selectMessages],
  messages => messages.isLoading
);

export const selectMessage = messageUrlParam =>
  createSelector(
    [selectMessages],
    messages => messages.allMessages[messageUrlParam]
  );
