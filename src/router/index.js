import { createRouter, createWebHashHistory } from "vue-router";
import LoadingView from "../views/LoadingView.vue";
import PersonView from "../views/PersonView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LoadingView,
  },
  {
    path: "/person",
    name: "person",
    component: PersonView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
