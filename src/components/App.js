import React, { useState, useEffect } from "react";
import { selectSong } from "../actions";
import SongList from "./SongList";
import "../styles/AppStyles.css";
import SongDetail from "./SongDetail";
// we will only use redux as our state currently.
const App = () => {
	return (
		<div className="ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					<SongList />
				</div>
				<div className="column eight wide">
					<SongDetail />
				</div>
			</div>
		</div>
	);
};
export default App;
