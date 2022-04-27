import React from "react";
import { createRoot } from "react-dom/client";
import Loader from "./Loader";
class App extends React.Component {
	componentDidUpdate() {}
	// React requires a render function
	renderContent() {}

	render() {
		return <div></div>;
	}
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
//
