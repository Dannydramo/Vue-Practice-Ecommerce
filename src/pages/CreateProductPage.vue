<template>
    <div class="w-full">
        <div class="p-2 mx-auto">
            <h2 class="text-md font-semibold uppercase my-4">Create Product</h2>

            <form @submit.prevent="createProduct">
                <div class="my-4">
                    <label for="productName">Product Name:</label>
                    <input
                        v-model="productName"
                        type="text"
                        id="productName"
                        placeholder="name of product"
                        class="capitalize w-full block mt-2 md:w-1/2 p-2 border-2 border-green-400"
                        required
                    />
                </div>
                <div class="my-4">
                    <label for="productDescription">Product Description:</label>
                    <textarea
                        v-model="productDescription"
                        id="productDescription"
                        class="capitalize w-full block mt-2 md:w-1/2 p-2 border-2 border-green-400"
                        required
                    ></textarea>
                </div>

                <div class="my-4">
                    <label for="productPrice">Product Price:</label>
                    <input
                        v-model="productPrice"
                        type="text"
                        class="capitalize w-full block mt-2 md:w-1/2 p-2 border-2 border-green-400"
                        id="productPrice"
                        required
                    />
                </div>

                <div class="my-4">
                    <label for="productPrice">Product Producer:</label>
                    <input
                        v-model="productProducer"
                        type="text"
                        class="capitalize w-full block mt-2 md:w-1/2 p-2 border-2 border-green-400"
                        id="productProducer"
                        required
                    />
                </div>

                <button
                    type="submit"
                    class="capitalize w-full block mt-2 md:w-1/2 p-2 bg-green-400 rounded-md my-2"
                >
                    Create Product
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            productName: "",
            productDescription: "",
            productPrice: "",
            productProducer: "",
        };
    },
    methods: {
        createProduct() {
            const newProduct = {
                id: Date.now(),
                item_name: this.productName || "Default Product Name",
                desc: this.productDescription || "Default Product Description",
                price: this.productPrice || "N/A",
                url: "img" + (Math.floor(Math.random() * 4) + 1) + ".avif",
                prod: "Automated Creator",
                liked: false,
            };

            const existingProducts =
                JSON.parse(localStorage.getItem("products")) || [];
            existingProducts.push(newProduct);
            localStorage.setItem("products", JSON.stringify(existingProducts));

            this.$router.push("/");
        },
    },
};
</script>
