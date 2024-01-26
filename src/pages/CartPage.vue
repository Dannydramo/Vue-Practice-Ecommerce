<template>
    <div>
        <h2 class="text-md text-center text-3xl font-semibold uppercase my-4">
            Cart Items
        </h2>
        <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div v-for="item in cart" :key="item.product.id">
                <CartList :product="item.product" :quantity="item.quantity" />
            </div>
        </div>
    </div>
</template>

<script>
import CartList from "../components/CartList.vue";

export default {
    components: { CartList },
    computed: {
        cart() {
            return JSON.parse(localStorage.getItem("cart")) || [];
        },
    },
};
</script>
