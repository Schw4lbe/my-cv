import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PersonView from "@/views/PersonView.vue";
import CarrerView from "@/views/CarrerView.vue";
import ReferenceView from "@/views/ReferenceView.vue";
import OutroView from "@/views/OutroView.vue";

import DevView from "@/views/DevView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/person",
    name: "person",
    component: PersonView,
  },
  {
    path: "/carrer",
    name: "carrer",
    component: CarrerView,
  },
  {
    path: "/reference",
    name: "reference",
    component: ReferenceView,
  },
  {
    path: "/outro",
    name: "outro",
    component: OutroView,
  },
  {
    path: "/dev",
    name: "dev",
    component: DevView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
