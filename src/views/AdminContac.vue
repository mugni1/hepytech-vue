<template>
  <!-- sidebar  -->
  <Sidebar />
  <!-- end side bar  -->

  <!-- MAIN -->
  <main
    class="w-full min-h-screen flex flex-wrap bg-gradient-to-br from-red-50 via-slate-50 to-yellow-50"
  >
    <!-- HEADER  -->
    <AdminHeading
      :name="useContacStore().userName"
      :initialName="useContacStore().initialUserName"
    />
    <!-- END HEADER  -->

    <!-- CONTENT -->
    <section class="min-h-screen w-10/12 pt-20 ms-auto px-5">
      <!-- title  -->
      <h1 class="font-bold text-2xl text-slate-800 text-center my-5">
        ContacUs
      </h1>
      <!-- title  -->

      <!-- CARD  -->
      <div class="p-5 bg-white rounded-xl shadow-lg">
        <!-- table news -->
        <table class="w-full">
          <!-- table heading  -->
          <tr>
            <th class="w-3/12 py-5 border-b">Facebook</th>
            <th class="w-3/12 py-5 border-b">Instagram</th>
            <th class="w-3/12 py-5 border-b">X</th>
            <th class="w-3/12 py-5 border-b">Action</th>
          </tr>
          <!-- end table heading  -->
          <!-- data  -->
          <!-- end data  -->
          <!-- loading  -->
          <!-- <tr v-if="useAboutStore().loadingTable == true">
            <th colspan="7" class="text-blue-600 pt-5 text-xl">Loading...</th>
          </tr> -->
          <!-- end loading  -->
          <!-- no data  -->
          <!-- <tr
            v-if="
              useAboutStore().loadingTable == false &&
              useAboutStore().dataAboutDetail == null
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
import { useContacStore } from "@/stores/contac";

export default {
  components: {
    Sidebar,
    AdminHeading,
  },
  setup() {
    return {
      useContacStore,
    };
  },
};
</script>
