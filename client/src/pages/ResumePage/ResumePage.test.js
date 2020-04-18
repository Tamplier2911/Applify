import React from "react";
// import { Provider } from "react-redux";

// component
import ResumePage from "./ResumePage";

// utils
import {
  findByTestAttr,
  setShallow,
  // setRender,
  // setMount,
  // createStore,
} from "../../tests/testUtils";

describe("<ResumePage /> -- shallow", () => {
  it("renders without error", () => {
    const wrapper = setShallow(<ResumePage />);
    const resumePage = findByTestAttr(wrapper, "resume-page");
    expect(resumePage.length).toBe(1);
  });

  it("renders children", () => {
    // const store = createStore({
    //   lang: {
    //     languagePanelHidden: true,
    //     currentLanguage: "eng",
    //   },
    // });
    // const wrapper = setRender(
    //   <Provider store={store}>
    //     <ResumePage />
    //   </Provider>
    // );
    // expect(wrapper.children.length).toBeTruthy();
  });

  it("testing state", () => {
    //   const wrapper = setup();
    //   const initialCounterState = wrapper.state('counter');
    //   expect(initialCounterState).toBe(0);
  });

  it("testing clicks", () => {
    /*
    const counter = 7;
    const wrapper = setup({ counter });

    // get button
    const button = findByTestAttr(wrapper, "button");
    button.simulate("click");
    wrapper.update();

    // get proper display value
    const counterDisplay = findByTestAttr(wrapper, "display");
    expect(counterDisplay.text()).toContain(counter + 1);
    */
  });

  it("matches snapshot", () => {
    const wrapper = setShallow(<ResumePage />);
    const resumePage = findByTestAttr(wrapper, "resume-page");
    expect(resumePage).toMatchSnapshot();
  });
});
