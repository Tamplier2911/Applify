// redux
import { combineReducers } from "redux";

// reducers
import authReducer from "./auth/auth.reducer";

const rootReducer = combineReducers({
  user: authReducer
});

export default rootReducer;
