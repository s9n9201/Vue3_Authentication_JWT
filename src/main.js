import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import setupInstance from "@/services/setupInstance";

import "@/assets/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "@/assets/css/app.css"
import "@/assets/css/pages/auth.css"

setupInstance(store);
createApp(App).use(store).use(router).mount('#app')
