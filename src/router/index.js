import {createRouter, createWebHistory} from 'vue-router'
import Layout from "@/layout/Layout";

export const constantRouterMap = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            component: () => import('@/views/Home'),
            name: 'Dashboard',
            meta: { title: '首页', icon: 'home', noCache: true }
        },{
            path: 'about',
            component: () => import('@/views/About'),
            name: 'about',
            meta: { title: '关于', icon: 'home', noCache: true }
        }]
    },
    {
        path: '/login',
        component: () => import('@/views/404'),
        hidden: true,
        meta: { title: '登录', icon: 'home', noCache: true }

    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: constantRouterMap
})
export default router
