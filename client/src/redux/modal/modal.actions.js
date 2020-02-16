import modalTypes from "./modal.types";

const { OPEN_MODAL, CLOSE_MODAL } = modalTypes;

export const openModal = modalContent => ({
  type: OPEN_MODAL,
  payload: modalContent
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});
