import { createWebHistory, createRouter } from "vue-router";

const Home = () => import("./views/Home.vue");

const Profile = () => import("./views/Profile.vue");

export const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: [
    { path: "/", component: Home },
    { path: "/profile", component: Profile },
  ],
});
