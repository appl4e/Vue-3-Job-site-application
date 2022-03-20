import { create } from "apisauce";

const api = create({
	baseURL: import.meta.env.VITE_API_BASE,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

export default api;
