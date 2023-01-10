import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import SignUp from "../views/SignUpView.vue";
import Bookmark from "../views/BookmarkView.vue";
import EventCardView from "../views/EventCardView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  { path: "/:pathMatch(.*)*", redirect: "/login" },
  {
    path: "/sign-up",
    name: "sign-up",
    component: SignUp,
  },
  { path: "/:pathMatch(.*)*", redirect: "/sign-up" },
  {
    path: "/bookmark",
    name: "bookmark",
    component: Bookmark,
  },
  { path: "/:pathMatch(.*)*", redirect: "/bookmark" },
  {
    path: "/event-card",
    name: "event-card",
    component: EventCardView,
  },
  { path: "/:pathMatch(.*)*", redirect: "/event-card" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
