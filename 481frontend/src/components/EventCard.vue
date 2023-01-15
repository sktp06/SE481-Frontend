<template>
  <div
    class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mr-4 flex flex-col justify-center py-5"
  >
    <router-link
      :to="{
        name: 'event-details',
        params: { id: item.mal_id },
      }"
    >
      <img :src="item.images" alt="images" class="h-[400px] w-full" />
    </router-link>

    <div>
      <p class="text-medium mb-5 text-gray-700 text-center mt-6 capitalize">
        {{ item.title }}
      </p>
    </div>
    <button
      @click="handleAdd(item.mal_id)"
      class="bg-blue-400 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full"
    >
      Add to Favourites
    </button>
  </div>
</template>
<script>
import BookmarkService from "@/services/BookmarkService.js";

export default {
  name: "EventCard",
  props: {
    item: {
      type: Object,
      required: "true",
    },
  },
  methods: {
    handleAdd(animeId) {
      let score = parseInt(prompt("Please enter score [1-10]: "));
      BookmarkService.addBookmark(
        JSON.parse(localStorage.getItem("user")).id,
        animeId,
        score
      );
    },
  },
};
</script>
