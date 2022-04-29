import React, { useState, useEffect } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const optionsLanguage = [
	{
		label: "Afrikaans",
		value: "af",
	},
	{ label: "Arabic", value: "ar" },
	{ label: "Hindi", value: "hi" },
];
const Translate = () => {
	const [language, setLanguage] = useState(optionsLanguage[0]);
	const [text, setText] = useState("");

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Text</label>
					<input value={text} onChange={(e) => setText(e.target.value)} />
				</div>
			</div>
			<Dropdown
				label="Select a language"
				selected={language}
				onSelectedChange={setLanguage}
				options={optionsLanguage}
			/>
			<hr></hr>
			<h3 className="ui header">Output</h3>
			<Convert text={text} language={language} />
		</div>
	);
};

export default Translate;
