// redux
import { combineReducers } from "redux";

// reducers
import authReducer from "./auth/auth.reducer";
import projectsReducer from "./projects/projects.reducer";

const rootReducer = combineReducers({
  user: authReducer,
  projects: projectsReducer
});

export default rootReducer;
