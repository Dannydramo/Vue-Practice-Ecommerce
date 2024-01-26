<template>
    <div class="p-2">
        <h2 class="text-md text-center text-3xl font-semibold uppercase my-4">
            {{ product.item_name }}
        </h2>

        <div v-if="product">
            <div
                class="flex flex-col space-x-4 md:items-center md:flex-row w-full"
            >
                <div class="md:w-1/2 h-72 mb-2 md:mb-0 md:h-[500px]">
                    <img
                        :src="`/${product.url}`"
                        :alt="product.item_name"
                        class="rounded-lg w-full h-full"
                    />
                </div>
                <div class="md:w-1/2 flex flex-col space-y-4">
                    <div
                        class="text-green-400 mt-4 font-bold uppercase text-2xl"
                    >
                        {{ product.item_name }}
                    </div>
                    <div>
                        <h2 class="font-semibold uppercase my-4 text-2xl">
                            description:
                        </h2>
                        <p>{{ product.desc }}</p>
                    </div>
                    <div class="flex items-center space-x-4">
                        <p class="uppercase font-semibold text-2xl">Price:</p>
                        <p>{{ product.price }}</p>
                    </div>
                    <div class="flex items-center space-x-4">
                        <p class="uppercase font-semibold text-2xl">
                            Manufacturer:
                        </p>
                        <p>{{ product.prod }}</p>
                    </div>
                    <button
                        @click="addToCart(product)"
                        class="bg-green-400 py-2 px-4 rounded-md w-fit text-white"
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
        <div v-else>
            <p>Product not found</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            product: null,
        };
    },
    mounted() {
        const productId = this.id;

        const storedProducts =
            JSON.parse(localStorage.getItem("products")) || [];

        this.product = storedProducts.find(
            (product) => product.id === parseInt(productId)
        );
    },
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
};
</script>
