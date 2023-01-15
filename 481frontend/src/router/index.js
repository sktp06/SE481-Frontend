import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import SignUp from "../views/SignUpView.vue";
import Bookmark from "../views/BookmarkView.vue";
import EventCardView from "../views/EventCardView.vue";
import EventCardDetailsView from "../views/EventCardDetailsView.vue";
import GStore from "@/store";
import BookmarkService from "@/services/BookmarkService";
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
    beforeEnter: () => {
      BookmarkService.getbookmarkList(
        JSON.parse(localStorage.getItem("user")).id
      );
    },
  },
  { path: "/:pathMatch(.*)*", redirect: "/bookmark" },
  {
    path: "/event-card",
    name: "event-card",
    component: EventCardView,
  },
  { path: "/:pathMatch(.*)*", redirect: "/event-card" },
  {
    path: "/animeDetails/:id",
    name: "event-details",
    props: true,
    component: EventCardDetailsView,
    beforeEnter: (to) => {
      GStore.animeDetails = GStore.animeList.filter(
        (itemInArray) => itemInArray.mal_id == to.params.id
      );
      // BookmarkService.getBookmarkById(to.params.id)
      // console.log(to.params.id);
    },
  },
  // fix error path
  {
    path: "/animeDetails/event-card",
    name: "event-card-details",
    component: EventCardView,
  },
  { path: "/:pathMatch(.*)*", redirect: "/event-card" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
