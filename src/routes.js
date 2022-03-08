import Home from "@/pages/Home.vue";
import Registration from "@/pages/auth/Registration.vue";
const routes = [
	{
		name: "home",
		path: "/",
		component: Home,
	},
	{
		name: "auth.registration",
		path: "/registration",
		component: Registration,
	},
];

export default routes;
