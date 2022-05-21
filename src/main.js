import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import router from "./routes";
import { createPinia } from "pinia";
import { useAuthStore } from "./store/auth";
import 'vue-loading-overlay/dist/vue-loading.css';

const app = createApp(App);

// const router = createRouter({
// 	history: createWebHistory(),
// 	routes,
// });

app.use(createPinia());

const auth = useAuthStore();

auth.boot().then(() => {
	app.use(router);
	router.isReady().then(() => {
		app.mount("#app");
	});
});
