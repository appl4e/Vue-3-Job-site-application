import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import {createRouter, createWebHistory} from 'vue-router';
import routes  from './routes';
import { createPinia } from "pinia";
import { useAuthStore } from "./store/auth";

const app = createApp(App);

const router = createRouter({
	history: createWebHistory(),
	routes,
});

app.use(createPinia());
app.use(router);

const auth = useAuthStore();

router.isReady().then(() => {
	auth.boot().then(() => {
		app.mount("#app");
	});
});





