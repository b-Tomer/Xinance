import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import UserIndex from '../pages/UserIndex.vue'
import UserDetails from '../pages/UserDetails.vue'
import UserEdit from '../pages/UserEdit.vue'
import Chart from '../pages/Chart.vue'

const routerOptions = {
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/user',
            name: 'users',
            component: UserIndex,
        },
        {
            path: '/chart',
            name: 'chart',
            component: Chart,
        },
        {
            path: '/user/:id',
            name: 'details',
            component: UserDetails,
        },
        {
            path: '/user/edit/:id?',
            name: 'edit',
            component: UserEdit,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/AboutView.vue'),
        },
    ],
}
const router = createRouter(routerOptions)

export default router
