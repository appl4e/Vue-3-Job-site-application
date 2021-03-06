import { defineStore } from "pinia";
import api from "@/helpers/api";

export const useAuthStore = defineStore("auth", {
	state: () => {
		return {
			user: null,
			isLoggedin: false,
		};
	},
	actions: {
		boot() {
			return new Promise(async (resolve) => {
				const { ok, data } = await api.get("/api/auth/me");
				if (ok) {
					// console.log(data);
					this.user = data;
					this.isLoggedin = true;
				}
				resolve(data);
			});
		},
		async logout() {
			const { ok } = await api.post("/api/auth/logout");
			if (ok) {
				this.user = null;
				this.isLoggedin = false;
				localStorage.removeItem("token");
			}
		},
	},
});
