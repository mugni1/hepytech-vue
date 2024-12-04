<template>
  <main class="flex w-full min-h-screen flex-wrap bg-slate-100">
    <!-- SIDE BAR -->
    <Sidebar />
    <!-- END SIDE BAR  -->

    <!-- CONTENT  -->
    <section
      class="w-full h-20 bg-white flex justify-end items-center fixed z-0"
    >
      <!-- Heading  -->
      <AdminHeading :name="userName" :initialName="initialUserName" />
      <!-- Heading  -->
    </section>
    <!-- END CONTENT  -->
  </main>
</template>

<script>
import AdminHeading from "@/components/AdminHeading.vue";
import Sidebar from "@/components/Sidebar.vue";
import { useNews } from "@/stores/news";
import { useDashboardStore } from "@/stores/dashboard";
import router from "@/router";

export default {
  components: {
    Sidebar,
    AdminHeading,
  },
  setup() {
    return { useDashboardStore };
  },
  data() {
    return {
      userName: localStorage.getItem("name"),
    };
  },
  computed: {
    initialUserName() {
      return this.userName.substring(0, 1).toUpperCase();
    },
  },
  mounted() {
    useDashboardStore().getMe();
  },
};
</script>
