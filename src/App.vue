<template>
  <!-- <Navbar v-if="$route.path != '/login'" /> -->
  <div class="">
    <RouterView />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
