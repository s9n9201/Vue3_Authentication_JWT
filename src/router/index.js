import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        name: "Home",
        component: ()=>import("../components/Home"),
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
    {
        path: "/user",
        name: "BoardUser",
        component: ()=>import("../components/BoardUser")
    },
    {
        path: "/admin",
        name: "BoardAdmin",
        component: ()=>import("../components/BoardAdmin")
    },
    {
        path: "/moderator",
        name: "BoardModerator",
        component: ()=>import("../components/BoardModerator")
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
    } else if (to.path=="/login" && loggedIn) {
        next("/");
    } else {
        next();
    }
});

export default router
