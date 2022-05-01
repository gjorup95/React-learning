import JSONPlaceHolder from "../api/JSONPlaceHolder";
import _ from "lodash";
export const fetchPosts = () => async (dispatch) => {
	const response = await JSONPlaceHolder.get("/posts");

	dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
	const response = await JSONPlaceHolder.get(`/users/${id} `);
	dispatch({ type: "FETCH_USER", payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());

	// LODASH
	_.chain(getState().posts)
		.map("userId")
		.uniq()
		.forEach((id) => dispatch(fetchUser(id)))
		.value();
};
// Memoization
/*
const _fetchUser = _.memoize(async (id, dispatch) => {
	const response = await JSONPlaceHolder.get(`/users/${id} `);
	dispatch({ type: "FETCH_USER", payload: response.data });
});
*/
// THIS IS A BAD APPROACH
// this does not return a plain JS object.

// what happens if we remove the async await syntax?
// Then we are returning a promise of some data.
// The problem here is that the actionhandler ->
// will invoke this promise before it is actually fetched and ready.

// what does redux thunk help us with
// We can return a function

// Redux thunk we can manually dispatch an action when we receive the RESPONSE!
