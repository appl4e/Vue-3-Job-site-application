import Home from "@/pages/Home.vue";
import JobsByTag from '@/pages/JobsByTag.vue'
import Registration from "@/pages/auth/Registration.vue";
import Login from "@/pages/auth/Login.vue";
import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "./store/auth";
const routes = [
	{
		name: "home",
		path: "/",
		component: Home,
		meta: { auth: true },
	},
	{
		name: "JobByTag",
		path: "/tags/:slug",
		component: JobsByTag,
		meta: { auth: true },
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

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	const auth = useAuthStore();

	if (to?.meta?.auth && !auth.isLoggedin) next("/login");

	else next();
	
});

export default router;
