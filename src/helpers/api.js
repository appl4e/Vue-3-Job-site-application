import { create } from "apisauce";

// const token = localStorage.getItem("token");
const api = create({
	baseURL: import.meta.env.VITE_API_BASE,
	headers: {
		"Accept": "application/json",
		"Content-Type": "application/json",
		"Authorization": localStorage.getItem("token") && `Bearer  ${localStorage.getItem("token")}`,
	},
});

export default api;
