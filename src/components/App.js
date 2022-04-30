import React from "react";
import PostList from "./PostList";

// we will only use redux as our state currently.
const App = () => {
	return (
		<div className="ui container ">
			<PostList />
		</div>
	);
};
export default App;
