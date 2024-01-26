<template>
    <div
        class="p-2 w-4/3 h-full flex flex-col border-2 border-black border-opacity-50 items-center justify-center rounded-lg shadow-md hover:scale-[1.04] duration-100 ease-linear"
    >
        <div class="w-full h-28 md:w-full md:h-36 rounded-lg shadow-sm">
            <router-link :to="{ name: 'Product', params: { id: product.id } }">
                <img
                    :src="product?.url"
                    :alt="product.item_name"
                    class="rounded-lg w-full h-full"
                />
            </router-link>
        </div>
        <div class="flex flex-col items-center">
            <p class="capitalize font-semibold text-center text-sm my-2">
                {{ product.item_name }}
            </p>
            <button @click="addToCart(product)">
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    methods: {
        addToCart(product) {
            const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

            const existingItem = existingCart.find(
                (item) => item.product.id === product.id
            );

            if (existingItem) {
                existingItem.quantity++;
            } else {
                existingCart.push({ product, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(existingCart));
            console.log(existingCart);
        },
    },
};
</script>
