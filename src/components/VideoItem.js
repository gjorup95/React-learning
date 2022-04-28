import React from "react";
import "./styles.css";

const VideoItem = ({ video }) => {
	return (
		<div className="item">
			<img
				alt={video.snippet.title}
				className="ui image"
				src={video.snippet.thumbnails.medium.url}
			/>
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	);
};
export default VideoItem;
