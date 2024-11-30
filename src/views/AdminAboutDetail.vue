<template>
  <!-- Sidebar  -->
  <Sidebar />
  <!-- Edn Sidebar  -->

  <!-- MAIN -->
  <main class="w-full min-h-screen flex flex-wrap bg-slate-100">
    <!-- HEADER  -->
    <AdminHeading
      :name="useAboutStore().userName"
      :initialName="useAboutStore().initialUserName"
    />
    <!-- END HEADER  -->

    <!-- CONTENT -->
    <section class="min-h-screen w-10/12 pt-20 ms-auto px-5">
      <!-- title  -->
      <h1 class="font-bold text-2xl text-slate-800 text-center my-5">
        Home
      </h1>
      <!-- title  -->

      <!-- CARD  -->
      <div class="p-5 bg-white rounded-xl shadow-lg">
        <!-- table news -->
        <table class="w-full">
          <!-- table heading  -->
          <tr>
            <th class="w-3/12 py-5 border-b">Image</th>
            <th class="w-2/12 py-5 border-b">Title</th>
            <th class="w-2/12 py-5 border-b">Description</th>
            <th class="w-2/12 py-5 border-b">Link Contac us</th>
            <th class="w-2/12 py-5 border-b">Link Job</th>
            <th class="w-1/12 py-5 border-b">Action</th>
          </tr>
          <!-- end table heading  -->
          <!-- loading  -->
          <!-- <tr v-if="useHomeStore().loadingTable == true">
            <th colspan="7" class="text-blue-600 pt-5 text-xl">Loading...</th>
          </tr> -->
          <!-- end loading  -->
          <!-- no data  -->
          <!-- <tr
            v-if="
              useHomeStore().loadingTable == false &&
              useHomeStore().dataHomeDetail == null
            "
          >
            <th class="pt-5 text-red-500 text-xl" colspan="7">No Data</th>
          </tr> -->
          <!-- end no data  -->
        </table>
        <!-- table news -->
      </div>
      <!--END CARD  -->
    </section>
    <!-- END CONTENT -->
  </main>
  <!-- END MAIN  -->
</template>

<script>
import AdminHeading from "@/components/AdminHeading.vue";
import Sidebar from "@/components/Sidebar.vue";
import { useAboutStore } from "@/stores/about";

export default {
  components: {
    Sidebar,
    AdminHeading,
  },
  setup() {
    return {
      useAboutStore,
    };
  },
};
</script>
