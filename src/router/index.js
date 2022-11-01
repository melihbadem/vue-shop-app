import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Contact from "../views/Contact.vue"
import Cart from "../views/Cart.vue"
import NotFound from "../views/NotFound.vue"
import Detail from "../views/Detail"

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/cart",
        component: Cart
    },
    {
        path: "/contact",
        component: Contact
    },
    {
        path: "/detail/:id",
        component: Detail
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
