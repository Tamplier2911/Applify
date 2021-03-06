// redux
import { combineReducers } from "redux";

// reducers
import themeReducer from "./theme/theme.reducer";
import langReducer from "./lang/lang.reducer";
import authReducer from "./auth/auth.reducer";
import usersReducer from "./users/users.reducer";
import projectsReducer from "./projects/projects.reducer";
import sidenavReducer from "./sidenav/sidenav.reducer";
import modalReducer from "./modal/modal.reducer";
import blogsReducer from "./blogs/blogs.reducer";
import messagesReducer from "./messages/messages.reducer";
import feedbacksReducer from "./feedbacks/feedbacks.reducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  lang: langReducer,
  user: authReducer,
  users: usersReducer,
  projects: projectsReducer,
  sidenav: sidenavReducer,
  modal: modalReducer,
  blogs: blogsReducer,
  messages: messagesReducer,
  feedbacks: feedbacksReducer
});

export default rootReducer;
