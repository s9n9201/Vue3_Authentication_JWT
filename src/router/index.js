import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        name: "Login",
        component: ()=>import("../components/Login")
    },
    {
        path: "/register",
        name: "Register",
        component: ()=>import("../components/Register")
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
