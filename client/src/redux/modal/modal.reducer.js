import modalTypes from "./modal.types";

const { OPEN_MODAL, CLOSE_MODAL } = modalTypes;

const INITIAL_STATE = {
  modalHidden: true,
  modalContent: {
    header: "",
    content: ""
  }
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, modalHidden: false, modalContent: action.payload };
    case CLOSE_MODAL:
      return {
        ...state,
        modalHidden: true,
        modalContent: { header: "", content: "" }
      };
    default:
      return state;
  }
};

export default modalReducer;
