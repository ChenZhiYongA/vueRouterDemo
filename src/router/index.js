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
            meta: { title: 'about', icon: 'home', noCache: true }
        }]
    },
    {
        path: '/login',
        component: () => import('@/views/404'),
        hidden: true
    },
    {
        path: '/404', component: Layout, hidden: true,
        children: [{
            path: '',
            component: () => import('@/views/404')
        }]
    },
    {
        path: '/login',
        // component: Layout,
        hidden: true,
        name: 'login',
        component: () => import('@/views/About')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: constantRouterMap
})
export default router
