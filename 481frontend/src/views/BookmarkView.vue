<template>
  <div class="flex flex-col items-center">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-pink-800 text-center mt-5"
    >
      My Favourites Lists
    </h5>
    <div
      v-for="item in GStore.bookmarks"
      :key="item.mal_id"
      class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-yellow-700 dark:bg-yellow-200 mt-8 w-[500px]"
    >
      <img
        :src="item.images"
        alt="image"
        class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      />
      <div class="flex m-auto">
        <div
          class="flex flex-col justify-between p-4 leading-normal items-center"
        >
          <p class="mb-3 font-normal text-black-400">
            Anime ID: {{ item.mal_id }}
          </p>
          <p class="mb-3 font-normal text-black-400">
            Anime Name: {{ item.title }}
          </p>
          <p class="mb-3 font-normal text-black-400">
            Given Score: {{ item.score }}
          </p>
        </div>
      </div>
      <button
        @click="handleRemove(item.mal_id)"
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        Remove
      </button>
    </div>
  </div>
</template>
<script>
import BookmarkService from "@/services/BookmarkService.js";

export default {
  name: "bookmark-page",
  inject: ["GStore"],
  methods: {
    handleRemove(animeId) {
      BookmarkService.removeBookmark(
        JSON.parse(localStorage.getItem("user")).id,
        animeId
      );
    },
  },
};
</script>
