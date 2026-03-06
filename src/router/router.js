import {createRouter, createWebHistory} from "vue-router";
import home from "../views/home.vue";
import about from "../views/about.vue";
import Navbar from "../components/Navbar.vue";


// PORTS
const routes = [
    {
        path: "/",
        component: Navbar,
        children: [
            {
                path:'/',
                name: 'Home',
                component: home,
            },
            {
                path: '/about',
                name: 'About',
                component: about,
            },
        ],
       
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;