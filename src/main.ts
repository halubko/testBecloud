import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify.ts";
import { VueQueryPlugin } from "@tanstack/vue-query";
import router from "@/router";

const app = createApp(App);

app.use(VueQueryPlugin);
app.use(router);
app.use(vuetify);
app.mount("#app");
