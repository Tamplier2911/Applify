import React from "react";
import { shallow, mount, render } from "enzyme";

import configureStore from "redux-mock-store";
const middlewares = [];
const mockStore = configureStore(middlewares);

/**
 * @function createStore
 * @param {object} state - Initial state value.
 * @returns {object} - Store mock.
 */
export const createStore = (state) => mockStore(state);

/**
 * @function findByTestAttr
 * @param {ShallowWRapper} wrapper - Component shallow wrapper.
 * @param {string} val - String value to match.
 * @returns {ShallowWRapper} - Shallow wrapper of the component.
 */
export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`);

/**
 * Factory function for ResumePage Shallow Wrapper
 * @function setShallow
 * @param {JSX} component - React component.
 * @param {any} state - Component initial state.
 * @param {object} props - Component props specific to the setup.
 * @returns {ShallowWRapper} - Shallow wrapper of the component.
 */
// export const setup = (component, state = null, props = {}) => {
//   const wrapper = shallow(React.cloneElement(component, { ...props }));
//   if (state) wrapper.setState(state);
//   return wrapper;
// };
export const setShallow = (component, state = null, props = {}) =>
  !state
    ? shallow(React.cloneElement(component, { ...props }))
    : shallow(React.cloneElement(component, { ...props })).setState(state);

/**
 * Factory function for ResumePage Shallow Wrapper
 * @function setMount
 * @param {JSX} component - React component.
 * @param {any} state - Component initial state.
 * @param {object} props - Component props specific to the setup.
 * @returns {MountedComponent} - Mounted wrapper of the component.
 */
export const setMount = (component, state = null, props = {}) =>
  !state
    ? mount(React.cloneElement(component, { ...props }))
    : mount(React.cloneElement(component, { ...props })).setState(state);

/**
 * Factory function for ResumePage Shallow Wrapper
 * @function setRender
 * @param {JSX} component - React component.
 * @param {any} state - Component initial state.
 * @param {object} props - Component props specific to the setup.
 * @returns {RenderedComponent} - Rendered wrapper of the component.
 */
export const setRender = (component, state = null, props = {}) =>
  !state
    ? render(React.cloneElement(component, { ...props }))
    : render(React.cloneElement(component, { ...props })).setState(state);
