import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//custom components:
import Outro from "@/components/Outro.vue";

const app = createApp(App);

//register costum components:
app.component("Outro", Outro);

app.use(store);
app.use(router).mount("#app");
