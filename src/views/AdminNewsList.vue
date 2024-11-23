<template>
  <main class="flex w-full min-h-screen flex-wrap bg-slate-100">
    <!-- SIDE BAR -->
    <Sidebar />
    <!-- END SIDE BAR  -->

    <!-- HEADER  -->
    <AdminHeading :name="adminName" />
    <!-- END HEADER  -->
  </main>
</template>

<script>
import AdminHeading from "@/components/AdminHeading.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    AdminHeading,
    Sidebar,
  },
  data() {
    return {
      adminName: localStorage.getItem("name"),
    };
  },
};
</script>
