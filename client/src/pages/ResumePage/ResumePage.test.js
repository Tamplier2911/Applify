import React from "react";
import { shallow, render } from "enzyme";

// component
import ResumePage from "./ResumePage";

// initial store
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const middlewares = [];
const mockStore = configureStore(middlewares);

const store = mockStore({
  lang: {
    languagePanelHidden: true,
    currentLanguage: "eng",
  },
});

/**
 * Factory function for ResumePage Shallow Wrapper
 * @function setup
 * @param {any} state - Component initial state
 * @param {object} props - Component props specific to the setup
 * @returns {ShallowWRapper}
 */
const setup = (state = null, props = {}) => {
  const wrapper = shallow(<ResumePage {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * @function findByTestAttr
 * @param {ShallowWRapper} wrapper - Component shallow wrapper
 * @param {string} val - String value to match
 * @returns {ShallowWRapper}
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

describe("<ResumePage /> -- shallow", () => {
  it("renders without error", () => {
    const wrapper = setup();
    const resumePage = findByTestAttr(wrapper, "resume-page");
    expect(resumePage.length).toBe(1);
  });

  it("renders children", () => {
    // const wrapper = render(
    //   <Provider store={store}>
    //     <ResumePage />
    //   </Provider>
    // );
    // console.log(wrapper.children());
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
    const wrapper = setup();
    const resumePage = findByTestAttr(wrapper, "resume-page");
    expect(resumePage).toMatchSnapshot();
  });
});
