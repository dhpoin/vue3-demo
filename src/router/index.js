import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    redirect: '/compositionAPI'
  },
  {
    path: "/compositionAPI",
    name: "compositionAPI",
    component: () => import("../views/CompositionAPI.vue"),
  },
  {
    path: "/todoList",
    name: "todoList",
    component: () => import("../views/TodoList.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
