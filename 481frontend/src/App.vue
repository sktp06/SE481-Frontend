<template>
  <div id="app">
    <NavbarComponent v-if="GStore.currentUser"/>
    <router-view />
  </div>
</template>
<script>
import NavbarComponent from "@/components/NavBar.vue";

export default {
  name: "app-page",
  components: {
    NavbarComponent,
  },
  inject: ["GStore"],
}
</script>
