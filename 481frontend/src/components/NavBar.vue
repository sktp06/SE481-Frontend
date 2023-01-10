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
        <Form
          @submit="onSearch"
          :validation-schema="schema"
          class="flex gap-x-2"
        >
          <span class="font-sans mr-2 text-sm font-bold my-auto"
            >SearchBy:</span
          >
          <div>
            <div class="flex items-center gap-x-2">
              <Field name="qoption" type="radio" id="one" value="title" />
              <label class="font-sans mr-2" for="one">Title</label>
            </div>
            <div class="flex items-center gap-x-2">
              <Field name="qoption" type="radio" id="two" value="description" />
              <label class="font-sans" for="two">Description</label>
            </div>
          </div>
          <Field
            class="px-4 py-2 w-80"
            type="text"
            name="query"
            placeholder="Search..."
          />

          <button
            class="flex items-center justify-center px-4 border-l"
            type="submit"
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
        </Form>
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
import SpellService from "@/services/SpellService.js";
import { Form, Field } from "vee-validate";
import * as yup from "yup";

export default {
  inject: ["GStore"],
  name: "navbar-component",
  components: {
    Form,
    Field,
  },
  data() {
    const schema = yup.object().shape({
      qoption: yup.string().required(),
      query: yup.string().required(),
    });
    return {
      schema,
      showMenu: false,
    };
  },
  methods: {
    handleLogout() {
      AuthService.logout();
      this.$router.push("/login");
    },
    onSearch(query) {
      SpellService.correction(query["query"])
        .then((res) => {
          if (query["query"] != res.data) {
            alert("May be you mean: " + res.data);
            if (query["qoption"] === "title") {
              SearchService.getAnimeTitle(res.data);
            } else if (query["qoption"] === "description") {
              SearchService.getAnimeDescription(res.data);
            }
          } else {
            if (query["qoption"] === "title") {
              SearchService.getAnimeTitle(res.data);
            } else if (query["qoption"] === "description") {
              SearchService.getAnimeDescription(res.data);
            }
          }
        })
        .catch(() => {
          alert("Something went wrong!");
        });
      this.$router.push("event-card");
    },
  },
};
</script>
