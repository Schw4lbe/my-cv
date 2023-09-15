import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//custom components:
import OutroSummit from "@/components/OutroSummit.vue";

const app = createApp(App);

//register costum components:
app.component("OutroSummit", OutroSummit);

app.use(store);
app.use(router).mount("#app");
