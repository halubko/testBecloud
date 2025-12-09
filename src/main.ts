import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify.ts";
import { VueQueryPlugin } from "@tanstack/vue-query";

const pinia = createPinia();
const app = createApp(App);

app.use(VueQueryPlugin);
app.use(vuetify);
app.use(pinia);
app.mount("#app");
