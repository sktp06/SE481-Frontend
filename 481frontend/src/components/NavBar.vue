<template>
  <div
    class="top-0 flex justify-between items-center px-3 md:px-6 w-full h-[60px] bg-pink-200"
  >
    <div
      class="text-sm font-bold leading-relaxed i -2 whitespace-nowrap uppercase text-blue-900 gap-x-3 flex flex-row drop-shadow-lg shadow-blue-600/50"
    >
      <router-link to="/">Anime</router-link>
      <router-link v-if="GStore.currentUser" to="/bookmark"
        >Bookmark</router-link
      >
    </div>
    <div
      v-if="GStore.currentUser"
      class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
    >
      <div class="flex items-center justify-center">
        <!-- adding the searBy button -->
        <div class="font-sans mr-2 text-sm font-bold">SearchBy:</div>
        <input type="radio" id="one" value="Title" v-model="SearchBy" />
        <label class="font-sans mr-2" for="one">Title</label>
        <input type="radio" id="two" value="Description" v-model="SearchBy" />
        <label class="font-sans" for="two">Description</label>
        <div class="flex border-2 rounded h-9 ml-4">
          <input
            type="text"
            class="px-4 py-2 w-80"
            v-model="search"
            placeholder="Search..."
          />
          <button
            class="flex items-center justify-center px-4 border-l"
            @click="onSearch"
          >
            <svg
              class="w-6 h-6 text-blue-300"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <button
      v-if="!GStore.currentUser && $route.name != 'login'"
      @click="$router.push('login')"
      class="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 m-3 animate-bounce"
    >
      Login
    </button>
    <div
      class="flex flex-row items-center justify-center gap-x-[12px]"
      v-if="GStore.currentUser"
    >
      <p class="text-white text-xs font-bold uppercase text-rose-700">
        Username: {{ GStore.currentUser && GStore.currentUser.username }}
      </p>
      <button
        @click="handleLogout"
        class="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
      >
        logout
      </button>
    </div>
  </div>
</template>
<script>
import AuthService from "@/services/AuthService.js";
import SearchService from "@/services/SearchService.js";
import { ref } from "vue";

export default {
  name: "navbar-component",
  data() {
    return {
      showMenu: false,
    };
  },
  inject: ["GStore"],
  methods: {
    handleLogout() {
      AuthService.logout();
      this.$router.push("/login");
    },
    onSearch() {
      SearchService.getAnimeTitle();
    },
  },
  //set up searchBy radio button
  setup() {
    const SearchBy = ref("");
    return { SearchBy };
  },
};
</script>
