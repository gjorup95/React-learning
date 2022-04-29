import React, { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Search from "./Search";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const items = [
	{
		title: "What is react?",
		content: "React is a front end javascript framework",
	},
	{
		title: "Why use React",
		content: "React is a favorite JS library among engineers",
	},
	{
		title: "How do you use React?",
		content: "You use React by creating components",
	},
];

const options = [
	{ label: "The Color Red", value: "Red" },
	{ label: "The Color Green", value: "Green" },
	{ label: "A Shade of Blue", value: "Blue" },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	const [selected, setSelected] = useState(options[0]);

	return (
		<div>
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/dropdown">
				<Dropdown
					label="Select a color"
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
		</div>
	);
};
