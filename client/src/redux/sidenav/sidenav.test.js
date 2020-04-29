// reducer
import sidenavReducer from "./sidenav.reducer";

// actions
import { toggleSideNav } from "./sidenav.actions";

// types
import sidenavTypes from "./sidenav.types";

const { TOGGLE_SIDENAV } = sidenavTypes;

const defaultState = {
  sidenavHidden: true,
};

describe("sidenav.actions", () => {
  it("returns an action object with expected type", () => {
    const actionObject = toggleSideNav();
    expect(actionObject.type).toBe(TOGGLE_SIDENAV);
  });
});

describe("sidenav.reducer", () => {
  it("returns default state if no action type matched", () => {
    const state = sidenavReducer(defaultState, {});
    expect(state).toEqual(defaultState);
  });

  it("perform certain changes depends on action type", () => {
    let state = sidenavReducer(defaultState, toggleSideNav());
    expect(state).toEqual({ sidenavHidden: false });
    state = sidenavReducer(state, toggleSideNav());
    expect(state).toEqual({ sidenavHidden: true });
  });
});
