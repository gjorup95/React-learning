import axios from "axios";

// GET https://www.googleapis.com/youtube/v3/search
// Parameters snippet, maxResults 5, searchTerm -> surfing
export default axios.create({
	baseURL:
		"en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=",
	params: { part: "snippet",  maxResults: 5 },
});
