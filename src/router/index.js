// Composables
import { createRouter, createWebHistory } from "vue-router";
import TheSpeakers from "@/views/TheSpeakers.vue";
const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "speakers",
        name: "Speakers",
        component: TheSpeakers,
      },
      {
        path: "schedule",
        name: "Schedule",
        component: () => import("@/views/TheSchedule.vue"),
      },
      {
        path: "register",
        name: "Subscribe",
        component: () => import("@/views/TheForm.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
