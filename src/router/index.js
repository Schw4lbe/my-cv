import { createRouter, createWebHashHistory } from "vue-router";
import LoadingView from "../views/LoadingView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LoadingView,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   }
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
