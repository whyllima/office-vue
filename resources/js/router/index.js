import { createRouter, createWebHistory } from "vue-router";

import employee from '../components/Employee.vue';
import HelloWorld from '../components/HelloWorld.vue';
import notFound from '../components/notFound.vue';
import productIndex from '../components/products/index.vue';

const routes = [
    {
        path: '/',
        name: 'Products',
        component: HelloWorld,
    },
    {
        path: '/employee',
        name: 'Employee',
        component: employee,
    },
    {
        path: '/hello',
        name: 'Hello World',
        component: productIndex,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: notFound,
    },
]

const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes,
    }
)

export default router
