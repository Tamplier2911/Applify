import { createSelector } from "reselect";

const selectModal = state => state.modal;

export const selectModalHidden = createSelector(
  [selectModal],
  modal => modal.modalHidden
);

export const selectModalContent = createSelector(
  [selectModal],
  modal => modal.modalContent
);
