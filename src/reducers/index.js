import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

// TODO Fix this reducer
export default combineReducers({
	posts: postsReducer,
	users: usersReducer,
});
