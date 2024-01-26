<template>
    <div class="p-2">
        <h2 class="text-md text-center text-3xl font-semibold uppercase my-4">
            Products
        </h2>

        <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div v-for="product in products" :key="product.id">
                <ProductList :product="product" />
            </div>
        </div>
    </div>
</template>
<script>
import ProductList from "../components/ProductList.vue";
import data from "../data.json";
export default {
    components: { ProductList },
    data() {
        return {
            products: data,
        };
    },
    mounted() {
        const storedProducts = localStorage.getItem("products");

        this.products = storedProducts ? JSON.parse(storedProducts) : data;

        localStorage.setItem("products", JSON.stringify(this.products));
    },
};
</script>
