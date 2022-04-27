import React, { Component } from "react";
import SearchBar from "./SearchBar";
class App extends Component {
	// we expect the api to return an array of images

	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}
export default App;
