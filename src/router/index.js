import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        name: "Main",
        component: ()=>import("../components/Profile"),
    },
    {
        path: "/login",
        name: "Login",
        component: ()=>import("../components/Login"),
    },
    {
        path: "/register",
        name: "Register",
        component: ()=>import("../components/Register")
    },
    {
        path: "/profile",
        name: "Profile",
        component: ()=>import("../components/Profile")
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, form , next)=>{
    const publicPages=["/login","/register"]
    const loggedIn=localStorage.getItem("user");
    if (!publicPages.includes(to.path) && !loggedIn) {
        next("/login");
    } else {
        next();
    }
});

export default router
