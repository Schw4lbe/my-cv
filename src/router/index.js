import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PersonView from "@/views/PersonView.vue";
import SalesView from "@/views/SalesView.vue";
import CodingView from "@/views/CodingView.vue";
import ReferenceView from "@/views/ReferenceView.vue";
import FreelanceView from "@/views/FreelanceView.vue";
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
    path: "/sales",
    name: "sales",
    component: SalesView,
  },
  {
    path: "/coding",
    name: "coding",
    component: CodingView,
  },
  {
    path: "/reference",
    name: "reference",
    component: ReferenceView,
  },
  {
    path: "/freelance",
    name: "freelance",
    component: FreelanceView,
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
