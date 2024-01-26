<template>
    <div
        class="p-2 w-4/3 h-full flex max-w-[400px] flex-col border-2 border-black border-opacity-50 items-center justify-center rounded-lg shadow-md hover:scale-[1.04] duration-100 ease-linear"
    >
        <div class="w-full h-28 md:w-full md:h-36 rounded-lg shadow-sm">
            <img
                :src="product?.url"
                :alt="product.item_name"
                class="rounded-lg w-full h-full"
            />
        </div>
        <div class="flex flex-col items-center">
            <p class="capitalize font-semibold text-center text-sm my-2">
                {{ product.item_name }} - ${{ product.price }}
            </p>
            <p class="capitalize font-semibold text-center text-sm my-2">
                - Quantity: {{ quantity }}
            </p>
            <button class="border p-2 rounded" @click="removeFromCart(product)">
                Remove
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
        quantity: {
            type: Number,
            required: true,
        },
    },
    methods: {
        removeFromCart(item) {
            console.log(item);
            const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

            const updatedCart = existingCart.filter(
                (cartItem) => cartItem.product.id !== item.id
            );

            localStorage.setItem("cart", JSON.stringify(updatedCart));
            this.$router.push("/");
        },
    },
};
</script>
