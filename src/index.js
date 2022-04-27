import React from "react";
import { createRoot } from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
class App extends React.Component {
	state = { lat: null, errorMessage: "" };
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}
	componentDidUpdate() {}
	// React requires a render function
	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}
		if (!this.state.errorMessage && this.state.lat) {
			return (
				<div>
					<SeasonDisplay lat={this.state.lat} />
				</div>
			);
		}
		return <Loader message="Please accept location request :)" />;
	}

	render() {
		return <div className="border red">{this.renderContent()}</div>;
	}
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
//
