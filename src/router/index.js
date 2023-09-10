import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PersonView from "@/views/PersonView.vue";
import SalesView from "@/views/SalesView.vue";
import CodingView from "@/views/CodingView.vue";
import ReferenceView from "@/views/ReferenceView.vue";
import FreelanceView from "@/views/FreelanceView.vue";
// import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: LoginView,
  // },
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
