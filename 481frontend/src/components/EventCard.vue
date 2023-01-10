<template>
  <div class="flex h-screen items-center justify-center bg-indigo-50 px-4">
    <div
      class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mr-4"
    >
      <!-- example of content -->
      <img
        src="https://i.imgur.com/5dmBrx6.jpg"
        alt="plant"
        class="h-auto w-full"
      />
      <div class="p-5">
        <p class="text-medium mb-5 text-gray-700">
          Well, aren't you going up to the lake tonight, you've been planning it
          for two weeks.
        </p>
        <button
          class="w-full rounded-md bg-indigo-600 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75"
        >
          See More
        </button>
      </div>
    </div>
    <!-- example of content2 -->
    <div
      class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mt-4"
    >
      <img
        src="https://www.comingsoon.net/wp-content/uploads/sites/3/2022/11/one-piece-film-red-uta-header.png?w=800"
        alt="plant"
        class="h-auto w-full"
      />
      <div class="p-5">
        <p class="text-medium mb-5 text-gray-700">
          “Keep pace with the present. Take a trip to the moon. envision the
          future.” ― Uta Hagen, Respect for Acting
        </p>
        <button
          class="w-full rounded-md bg-red-600 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75"
        >
          See More
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EventCard",
  props: {
    items: {
      type: Object,
      required: "true",
    },
  },
};
</script>
