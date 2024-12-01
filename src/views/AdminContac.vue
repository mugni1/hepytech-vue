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
          <tr v-if="useContacStore().contacDetail != null">
            <td class="text-center pt-5">
              <span>{{ useContacStore().contacDetail.facebook }}</span>
            </td>
            <td class="text-center pt-5">
              <span>{{ useContacStore().contacDetail.instagram }}</span>
            </td>
            <td class="text-center pt-5">
              <span>{{ useContacStore().contacDetail.x }}</span>
            </td>
            <td class="text-center pt-5">
              <button
                @click="
                  useTrustedStore().dataFormUpdate(index, item.id, item.link)
                "
                class="p-2 text-white rounded-lg shadow-md hover:bg-purple-800 bg-purple-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="fill-current"
                >
                  <path
                    d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"
                  ></path>
                  <path
                    d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"
                  ></path>
                </svg>
              </button>
            </td>
          </tr>
          <!-- end data  -->
          <!-- loading  -->
          <tr v-if="useContacStore().loadingTable == true">
            <th colspan="7" class="text-blue-600 pt-5 text-xl">Loading...</th>
          </tr>
          <!-- end loading  -->
          <!-- no data  -->
          <tr
            v-if="
              useContacStore().loadingTable == false &&
              useContacStore().contacDetail == null
            "
          >
            <th class="pt-5 text-red-500 text-xl" colspan="7">No Data</th>
          </tr>
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
  mounted() {
    useContacStore().getContacDetail();
  },
};
</script>
