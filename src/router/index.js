import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import CartPage from "../pages/CartPage.vue";
import ProductPage from "../pages/ProductPage.vue";
import CreateProductPage from "../pages/CreateProductPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/cart",
        name: "Cart",
        component: CartPage,
    },
    {
        path: "/product/:id",
        name: "Product",
        component: ProductPage,
        props: true,
    },
    {
        path: "/create",
        name: "Create",
        component: CreateProductPage,
        props: true,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
