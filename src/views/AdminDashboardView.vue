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
      <AdminHeading
        :name="useNews().nameUser"
        :initialName="useNews().initialUser"
      />
      <!-- Heading  -->
    </section>
    <!-- END CONTENT  -->
  </main>
</template>

<script>
import AdminHeading from "@/components/AdminHeading.vue";
import Sidebar from "@/components/Sidebar.vue";
import { useNews } from "@/stores/news";

export default {
  components: {
    Sidebar,
    AdminHeading,
  },
  setup() {
    return { useNews };
  },
  mounted() {
    useNews().getInitialUser();
  },
};
</script>
