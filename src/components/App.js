import React, { Component } from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
const users = [
    { id: 1, name: 'Leanne Graham' },
    { id: 2, name: 'Ervin Howell' },
    { id: 3, name: 'Clementine Bauch' },
    { id: 4, name: 'Patricia Lebsack' }
  ];
class App extends Component {
	// we expect the api to return an array of images
	state = { images: [] };
	onSearchSubmit = async (term) => {
		const response = await unsplash.get("/search/photos", {
			params: { query: term },
		});
		this.setState({ images: response.data.results });
	};
    
	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}
export default App;
