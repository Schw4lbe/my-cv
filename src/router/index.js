import { createRouter, createWebHashHistory } from "vue-router";
import LoadingView from "../views/LoadingView.vue";
import PersonView from "../views/PersonView.vue";
import SalesView from "../views/SalesView.vue";
import CodingView from "../views/CodingView.vue";
import ReferenceView from "../views/ReferenceView.vue";
import FreelanceView from "../views/FreelanceView.vue";

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
