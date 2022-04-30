import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

// TODO Fix this reducer
export default combineReducers({
	posts: postsReducer,
});
