import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const cartApp = createApp(App);
cartApp.use(router);
cartApp.mount("#app");
