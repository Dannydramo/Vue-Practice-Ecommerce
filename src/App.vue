<template>
    <div class="w-[90%] mx-auto">
        <Navbar />
        <router-view />
    </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
    components: { Navbar },
};
</script>

<style scoped></style>
