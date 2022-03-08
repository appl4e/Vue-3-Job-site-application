import { create } from "apisauce";

const api = create({
	baseURL: "https://jobs-api.return0.codes",
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

export default api;
