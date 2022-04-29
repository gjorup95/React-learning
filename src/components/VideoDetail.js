import React from "react";

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading..</div>;
	}
	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	// using es2015
	return (
		<div>
			<div className="ui embed">
				<iframe title="videoPlayer" src={videoSrc} />
			</div>
			<div className="ui segment">
				<h3 className="ui header">{video.snippet.title}</h3>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
