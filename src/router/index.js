import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SkillView from "@/views/SkillView.vue";
import TimeLineView from "@/views/TimeLineView.vue";
import ReferenceView from "@/views/ReferenceView.vue";
import OutroView from "@/views/OutroView.vue";

import DevView from "@/views/development/DevView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/person",
    name: "person",
    component: SkillView,
  },
  {
    path: "/carrer",
    name: "carrer",
    component: TimeLineView,
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
