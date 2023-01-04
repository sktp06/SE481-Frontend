<template>
  <div
    class="top-0 w-full h-[60px] bg-gray-900"
  >
    <nav
      class="flex tems-center justify-between px-2 py-3"
    >
      <div
        class="container px-4 mx-auto flex flex-wrap items-center justify-between"
      >
        <div
          class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
        >
          <router-link
            to="/"
            class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-blue-300"
            >Anime</router-link
          >
          <router-link
            to="/bookmark"
            class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-blue-300"
            >Bookmark</router-link
          >
        </div>
        <div
          class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
        >
          <div class="flex items-center justify-center">
            <div class="flex border-2 rounded h-9">
              <input type="text" class="px-4 py-2 w-80" placeholder="Search..." />
              <button class="flex items-center justify-center px-4 border-l">
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
          v-if="!GStore.currentUser"
          @click="$router.push('login')"
          class="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
        >
          Login
        </button>
        <button
          v-else
          @click="handleLogout"
          class="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
        >
          logout
        </button>
      </div>
    </nav>
  </div>
</template>
<script>
import AuthService from "@/services/AuthService.js";
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
  },
};
</script>
