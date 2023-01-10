<template>
  <div
    class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mr-4"
  >
    <!-- example of content -->
    <img :src="item.images" alt="images" class="h-auto w-full" />
    <div>
      <p class="text-medium mb-5 text-gray-700 text-center mt-6 capitalize">
        {{ item.title }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "EventCard",
  props: {
    item: {
      type: Object,
      required: "true",
    },
  },
};
</script>
