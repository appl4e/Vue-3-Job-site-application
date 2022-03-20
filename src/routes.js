import Home from "@/pages/Home.vue";
import Registration from "@/pages/auth/Registration.vue";
import Login from "@/pages/auth/Login.vue";
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
	{
		name: "auth.login",
		path: "/login",
		component: Login,
	},
];

export default routes;
