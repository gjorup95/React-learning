import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com/",
	headers: {
		Authorization: "Client-ID 0Y0RIZdDq4EP-8P3U0MDpFPe_LtAWPptjlAFAthXr3g",
	}, // We take the promise
});
