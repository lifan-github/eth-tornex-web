import VueRouter from "vue-router";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/home/Home.vue'),
        }
    ]
})

export default router;
