<template>
  <!-- SIDE BAR  -->
  <Sidebar />
  <!--END SIDE BAR  -->
  <!-- MAIN -->
  <main class="w-full min-h-screen flex flex-wrap bg-slate-100">
    <!-- HEADER  -->
    <AdminHeading
      :name="useNews().nameUser"
      :initialName="useNews().initialUser"
    />
    <!-- END HEADER  -->

    <!-- CONTENT -->
    <section class="min-h-screen w-10/12 pt-20 ms-auto px-5">
      <!-- title  -->
      <h1 class="font-bold text-2xl text-slate-800 text-center my-5">
        News Add
      </h1>
      <!-- title  -->
    </section>
    <!-- END CONTENT -->
  </main>
  <!-- END MAIN  -->
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
