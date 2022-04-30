import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
class SongList extends React.Component {
	// THIS.PROPS === {SONGS: stateOfStore.songs}
	renderList() {
		// TODO add button functionality
		return this.props.songs.map((song) => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button
							className="ui button primary"
							onClick={() => this.props.selectSong(song)}
						>
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		});
	}
	render() {
		return <div className="ui divided list">{this.renderList()}</div>;
	}
}

// CONNECT Actor!
// CONVENTION -> call function const mapStateToProps()
const mapStateToProps = (stateOfStore) => {
	return { songs: stateOfStore.songs };
};
export default connect(mapStateToProps, { selectSong })(SongList);
