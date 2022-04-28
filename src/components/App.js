import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../api/Youtube";
import VideoList from "./VideoList";

class App extends Component {
	state = { videos: [] };
	// we expect the api to return an array of images
	onTermSubmit = async (term) => {
		const response = await Youtube.get("/search", {
			params: { q: term },
		});
		this.setState({ videos: response.data.items });
	};
	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}
export default App;
