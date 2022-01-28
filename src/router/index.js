import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Hello from "../views/Hello.vue";
import Blog from "../views/Blog.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/hello/:mode",
    name: "Hello",
    component: Hello,
  },
  {
    path: "/Blog",
    name: "Blog",
    component: Blog,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
