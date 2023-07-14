import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("@/views/home/Home.vue"),
        },
        {
          path: "/tour",
          name: "tour",
          component: () => import("@/views/Tour/Tour.vue"),
        },
        {
          path: "/chat",
          name: "chat",
          component: () => import("@/views/chat/Chat.vue"),
        },
        {
          path: "/emploee",
          name: "emploee",
          component: () => import("@/views/emploee/Emploee.vue"),
        },
        {
          path: "/hotels",
          name: "hotels",
          component: () => import("@/views/hotels/Hotels.vue"),
        },
        {
          path: "/social",
          name: "social",
          component: () => import("@/views/social/Social.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login/Login.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("../views/error/Error.vue"),
    },
  ],
});

export default router;
