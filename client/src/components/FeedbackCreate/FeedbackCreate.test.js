import React from "react";

// component
import FeedbackCreate from "./FeedbackCreate";

// utils
import {
  setShallowC,
  findByTestAttr,
  checkProps,
  storeFactory,
} from "../../tests/testUtils";

describe("<FeedbackCreate />", () => {
  const initialStoreNotLogged = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
    user: {
      isLogged: false,
    },
  };

  const initialStoreIsLogged = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
    user: {
      isLogged: true,
    },
  };

  const storeNotLogged = storeFactory(initialStoreNotLogged);
  const storeIsLogged = storeFactory(initialStoreIsLogged);

  it("renders without an error", () => {
    const wrapper = setShallowC(<FeedbackCreate store={storeNotLogged} />);
    const feedbackCreate = findByTestAttr(wrapper, "feedback-create");
    expect(feedbackCreate.length).toBe(0);
  });

  it("renders child - no authorized if user is not logged", () => {
    const wrapper = setShallowC(<FeedbackCreate store={storeNotLogged} />);
    const feedbackCreateNoAuth = findByTestAttr(
      wrapper,
      "feedback-create-not-authorized"
    );
    expect(feedbackCreateNoAuth.length).toBe(1);
  });

  it("renders child - feedback form if user is logged", () => {
    const wrapper = setShallowC(<FeedbackCreate store={storeIsLogged} />);
    const feedbackCreateForm = findByTestAttr(wrapper, "feedback-create-form");
    expect(feedbackCreateForm.length).toBe(1);
  });

  it("recieves expected props", () => {
    const expectedProps = {
      method: "GET",
      updateData: { feedback: "feed", rating: "5", _id: "zzds232ds312" },
    };
    const err = checkProps(FeedbackCreate, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const wrapper = setShallowC(<FeedbackCreate store={storeNotLogged} />);
    const feedbackCreate = findByTestAttr(wrapper, "feedback-create");
    expect(feedbackCreate).toMatchSnapshot();
  });
});
