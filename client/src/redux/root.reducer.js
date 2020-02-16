// redux
import { combineReducers } from "redux";

// reducers
import authReducer from "./auth/auth.reducer";
import projectsReducer from "./projects/projects.reducer";
import sidenavReducer from "./sidenav/sidenav.reducer";

const rootReducer = combineReducers({
  user: authReducer,
  projects: projectsReducer,
  sidenav: sidenavReducer
});

export default rootReducer;
