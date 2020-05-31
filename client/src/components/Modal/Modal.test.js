import React from "react";
import toJson from "enzyme-to-json";

// component
import Modal from "./Modal";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<Modal />", () => {
  const initialStore = {
    modal: {
      modalHidden: false,
      modalContent: {
        header: "Modal",
        content: "Testing modal!",
      },
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<Modal store={store} test={true} />);
  });

  it("renders without an error", () => {
    const modal = findByTestAttr(wrapper, "modal");
    expect(modal.length).toBe(1);
  });

  it("renders expected content from state", () => {
    const modalHeader = findByTestAttr(wrapper, "modal-header");
    expect(modalHeader.length).toBe(1);
    expect(modalHeader.text()).toBe("Modal");
    const modalContent = findByTestAttr(wrapper, "modal-content");
    expect(modalContent.length).toBe(1);
    expect(modalContent.text()).toBe("Testing modal!");
  });

  it("closes when closeModal action button is clicked", () => {
    const closeModal = findByTestAttr(wrapper, "modal-close");
    expect(closeModal.length).toBe(1);
    closeModal.simulate("click");
    const {
      modal: { modalHidden },
    } = store.getState();
    expect(modalHidden).toBeTruthy();
  });

  it("matches snapshot", () => {
    const modal = findByTestAttr(wrapper, "modal");
    expect(toJson(modal)).toMatchSnapshot();
  });
});
