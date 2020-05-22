import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Enzyme
import { shallow, mount, render } from "enzyme";

// Check Prop Types
import checkPropTypes from "check-prop-types";

// Redux Mock Store
import configureStore from "redux-mock-store";
const middlewares = [];
const mockStore = configureStore(middlewares);

// Root Reducer
import { createStore } from "redux";
import rootReducer from "../redux/root.reducer";

/**
 * Factory function to create mock store utilzing redux-mock-store.
 * @function createStore
 * @param {object} state - Initial state value.
 * @returns {object} - Store mock.
 */
// export const createStore = (state) => mockStore(state);

/**
 * Factory function to create mock store untilizing redux.
 * @function storeFactory
 * @param {object} state - Initial state value.
 * @returns {object} - Store mock.
 */
export const storeFactory = (state) => createStore(rootReducer, state);

/**
 * Factory function for search by certain data-test.
 * @function findByTestAttr
 * @param {ShallowWRapper} wrapper - Component shallow wrapper.
 * @param {string} val - String value to match.
 * @returns {ShallowWRapper} - Shallow wrapper of the component.
 */
export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`);

/**
 * Factory function for checking prop-types components.
 * @function checkProps
 * @param {Component} component - React component.
 * @param {object} props - Props we passing it.
 * @param {string} name - Name of property to be tested.
 */
export const checkProps = (component, props, name) =>
  checkPropTypes(component.propTypes, props, "prop", component[name]);

/**
 * Factory function for Shallow Render.
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
 * Factory function for Shallow Render component that wrapped with following HOC's
 * withRouter(connect()(Component)).
 * @function setShallowWRC
 * @param {JSX} component - React component.
 * @param {any} state - Component initial state.
 * @param {object} props - Component props specific to the setup.
 * @returns {ShallowWRapper} - Shallow wrapper of the component.
 */

export const setShallowWRC = (component, state = null, props = {}) => {
  return !state
    ? shallow(<Router>{React.cloneElement(component, { ...props })}</Router>)
        .dive()
        .dive()
        .dive()
        .dive()
        .dive()
        .dive()
        .dive()
    : shallow(<Router>{React.cloneElement(component, { ...props })}</Router>)
        .setState(state)
        .dive()
        .dive()
        .dive()
        .dive()
        .dive()
        .dive()
        .dive();
};

/**
 * Factory function for Shallow Render component that wrapped with following HOC's
 * connect()(Component).
 * @function setShallowC
 * @param {JSX} component - React component.
 * @param {any} state - Component initial state.
 * @param {object} props - Component props specific to the setup.
 * @returns {ShallowWRapper} - Shallow wrapper of the component.
 */

export const setShallowC = (component, state = null, props = {}) => {
  return !state
    ? shallow(React.cloneElement(component, { ...props }))
        .dive()
        .dive()
    : shallow(React.cloneElement(component, { ...props }))
        .setState(state)
        .dive()
        .dive();
};

/**
 * Factory function for Shallow Render component that wrapped with following HOC's
 * withRouter(Component).
 * @function setShallowR
 * @param {JSX} component - React component.
 * @param {any} state - Component initial state.
 * @param {object} props - Component props specific to the setup.
 * @returns {ShallowWRapper} - Shallow wrapper of the component.
 */

export const setShallowR = (component, state = null, props = {}) => {
  return !state
    ? shallow(<Router>{React.cloneElement(component, { ...props })}</Router>)
        .dive()
        .dive()
        .dive()
        .dive()
        .dive()
    : shallow(<Router>{React.cloneElement(component, { ...props })}</Router>)
        .setState(state)
        .dive()
        .dive()
        .dive()
        .dive()
        .dive();
};

/**
 * Factory function for Mount Render.
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
 * Factory function for HTML Render.
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
