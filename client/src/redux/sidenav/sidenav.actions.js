import sidenavTypes from "./sidenav.types";

const { TOGGLE_SIDENAV } = sidenavTypes;

export const toggleSideNav = () => ({
  type: TOGGLE_SIDENAV
});
