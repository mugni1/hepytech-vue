<template>
  <!-- Sidebar  -->
  <Sidebar />
  <!-- End Sidebar  -->

  <!-- MAIN -->
  <main
    class="w-full min-h-screen flex flex-wrap bg-gradient-to-br from-red-50 via-slate-50 to-yellow-50"
  >
    <!-- HEADER  -->
    <AdminHeading
      :name="useFooterStore().userName"
      :initialName="useFooterStore().initialUserName"
    />
    <!-- END HEADER  -->

    <!-- CONTENT -->
    <section class="min-h-screen w-10/12 pt-20 ms-auto px-5">
      <!-- title  -->
      <h1 class="font-bold text-2xl text-slate-800 text-center my-5">
        Footer
      </h1>
      <!-- title  -->

      <!-- CARD  -->
      <div class="p-5 bg-white rounded-xl shadow-lg">
        <!-- table news -->
        <table class="w-full">
          <!-- table heading  -->
          <tr>
            <th class="w-1/12 py-5 border-b">Brand</th>
            <th class="w-1/12 py-5 border-b">FAQ</th>
            <th class="w-1/12 py-5 border-b">Youtube</th>
            <th class="w-2/12 py-5 border-b">Text Information</th>
            <th class="w-2/12 py-5 border-b">Address</th>
            <th class="w-1/12 py-5 border-b">FB</th>
            <th class="w-1/12 py-5 border-b">IG</th>
            <th class="w-1/12 py-5 border-b">LI</th>
            <th class="w-1/12 py-5 border-b">@</th>
            <th class="w-1/12 py-5 border-b">Action</th>
          </tr>
          <!-- end table heading  -->
          <!-- data  -->
          <tr v-if="useFooterStore().footerDetail != null">
            <td class="text-center pt-5">
              <span>{{ useFooterStore().footerDetail.brand }}</span>
            </td>
            <td class="text-center pt-5">
              <span>{{ useFooterStore().footerDetail.link_faq }}</span>
            </td>
            <td class="text-center pt-5">
              <span>{{ useFooterStore().footerDetail.link_youtube }}</span>
            </td>
            <td class="text-center pt-5">
              <span>{{ useFooterStore().footerDetail.text_information }}</span>
            </td>
            <td class="text-center pt-5">
              <span>{{ useFooterStore().footerDetail.address }}</span>
            </td>
            <td class="text-center pt-5">
              <span>{{ useFooterStore().footerDetail.link_facebook }}</span>
            </td>
            <td class="text-center pt-5">
              <span>{{ useFooterStore().footerDetail.link_instagram }}</span>
            </td>
            <td class="text-center pt-5">
              <span>{{ useFooterStore().footerDetail.link_linkedin }}</span>
            </td>
            <td class="text-center pt-5 w-1/12">
              <span>{{ useFooterStore().footerDetail.copyright }}</span>
            </td>
            <td class="text-center pt-5 w-1/12">
              <button
                class="py-2 px-5 rounded-lg bg-purple-700 shadow-md text-white font-semibold mx-2"
              >
                Update
              </button>
            </td>
          </tr>
          <!-- end data  -->
          <!-- loading  -->
          <tr v-if="useFooterStore().loadingTable == true">
            <th colspan="10" class="text-blue-600 pt-5 text-xl">Loading...</th>
          </tr>
          <!-- end loading  -->
          <!-- no data  -->
          <tr
            v-if="
              useFooterStore().loadingTable == false &&
              useFooterStore().footerDetail == null
            "
          >
            <th class="pt-5 text-red-500 text-xl" colspan="10">No Data</th>
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
import { useFooterStore } from "@/stores/footer";

export default {
  components: {
    Sidebar,
    AdminHeading,
  },
  setup() {
    return { useFooterStore };
  },
  mounted() {
    useFooterStore().getContacDetail();
  },
};
</script>
