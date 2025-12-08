import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify.ts";

const pinia = createPinia();
const app = createApp(App);

app.use(vuetify);
app.use(pinia);
app.mount("#app");
