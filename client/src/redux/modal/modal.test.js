// reducer
import modalReducer from "./modal.reducer";

// actions
import { openModal, closeModal } from "./modal.actions";

// types
import actionTypes from "./modal.types";

const { OPEN_MODAL, CLOSE_MODAL } = actionTypes;

const defaultState = {
  modalHidden: true,
  modalContent: {
    header: "",
    content: "",
  },
};

describe("modal.actions", () => {
  it("returns an action object with expected type", () => {
    const actionObject = openModal();
    expect(actionObject.type).toBe(OPEN_MODAL);
  });

  it("recieving payload object", () => {
    const actionObject = openModal({ header: "Test", content: "Test" });
    expect(actionObject.payload).toEqual({ header: "Test", content: "Test" });
  });

  it("returns an action object with expected type", () => {
    const actionObject = closeModal();
    expect(actionObject.type).toBe(CLOSE_MODAL);
  });
});

describe("modal.reducer", () => {
  it("returns default state if no action type matched", () => {
    const state = modalReducer(defaultState, {});
    expect(state).toEqual(defaultState);
  });

  it("performs changes to state depends on action type", () => {
    const state = modalReducer(
      defaultState,
      openModal({ header: "Test", content: "Test" })
    );
    expect(state).toEqual({
      modalHidden: false,
      modalContent: { header: "Test", content: "Test" },
    });
  });

  it("performs changes to state depends on action type", () => {
    const state = modalReducer(defaultState, closeModal());
    expect(state).toEqual({
      modalHidden: true,
      modalContent: { header: "", content: "" },
    });
  });
});
