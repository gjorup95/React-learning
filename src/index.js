// import the react and reactdom libraries
// Create a react component
// take the react component and show it on the screen
import React from "react";
import { createRoot } from "react-dom/client";

const App = function () {
	const buttonText = { text: "click me!" };
	const style = { backgroundColor: "blue", color: "white" };
	return (
		<div>
			<label className="label" htmlFor="name">
				{" "}
				enter name:{" "}
			</label>
			<input id="name" type="text" />
			<button style={style}>{buttonText.text}</button>
		</div>
	);
};

// Variation
/* ARROW FUNCTION
const App = () => {
	return <div>Hi there!</div>;
};
*/
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
