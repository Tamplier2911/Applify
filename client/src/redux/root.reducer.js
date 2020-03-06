// redux
import { combineReducers } from "redux";

// reducers
import themeReducer from "./theme/theme.reducer";
import langReducer from "./lang/lang.reducer";
import authReducer from "./auth/auth.reducer";
import projectsReducer from "./projects/projects.reducer";
import sidenavReducer from "./sidenav/sidenav.reducer";
import modalReducer from "./modal/modal.reducer";
import blogsReducer from "./blogs/blogs.reducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  lang: langReducer,
  user: authReducer,
  projects: projectsReducer,
  sidenav: sidenavReducer,
  modal: modalReducer,
  blogs: blogsReducer
});

export default rootReducer;
