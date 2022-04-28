import axios from "axios";
const KEY = "AIzaSyDfl-7SBMtY70C85FwPamgjDJKDK5jrCNw";

// GET https://www.googleapis.com/youtube/v3/search
// Parameters snippet, maxResults 5, searchTerm -> surfing
export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: { part: "snippet", type: "video", maxResults: 5, key: KEY },
});
