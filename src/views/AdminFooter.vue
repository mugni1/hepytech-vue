<template>
  <!-- Sidebar  -->
  <Sidebar />
  <!-- End Sidebar  -->

  <!-- FORM UPDATE -->
  <section
    v-if="useFooterStore().formUpdate == true"
    class="fixed bg-slate-600 bg-opacity-50 flex items-center justify-center w-full h-screen z-50"
  >
    <form
      data-aos="zoom-in"
      @submit.prevent="
        useFooterStore().updateToDatabase(useFooterStore().footerDetail.id)
      "
      class="container w-11/12 md:w-4/12 h-5/6 relative bg-white rounded-xl shadow-lg p-5 overflow-y-scroll scrollbar-hide border-2 border-slate-400"
    >
      <h1
        class="mx-auto font-semibold text-xl w-full text-center mb-5 text-slate-800"
      >
        UPDATE FOOTER
      </h1>

      <!-- data  -->
      <div class="w-full py-2">
        <label for="" class="text-slate-700 font-semibold">
          Brand
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="text"
          placeholder="HEPYTECH"
          v-model="useFooterStore().footerDetail.brand"
        />
      </div>
      <div class="w-full py-2">
        <label for="" class="text-slate-700 font-semibold">
          Link FAQ
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="text"
          placeholder="https://google.com"
          v-model="useFooterStore().footerDetail.link_faq"
        />
      </div>
      <div class="w-full py-2">
        <label for="" class="text-slate-700 font-semibold">
          Link Youtube
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="text"
          placeholder="https://youtube.com"
          v-model="useFooterStore().footerDetail.link_youtube"
        />
      </div>
      <div class="w-full py-2">
        <label for="" class="text-slate-700 font-semibold">
          Text Information
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="text"
          placeholder="Lorem ipsum dolor sit amet dolor ipsum sit amet"
          v-model="useFooterStore().footerDetail.text_information"
        />
      </div>
      <div class="w-full py-2">
        <label for="" class="text-slate-700 font-semibold">
          Address
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="text"
          placeholder="Rancabolang, Kec. Gedebage, Kota Bandung, Jawa Barat 40129"
          v-model="useFooterStore().footerDetail.address"
        />
      </div>
      <div class="w-full py-2">
        <label for="" class="text-slate-700 font-semibold">
          Link Facebook
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="text"
          placeholder="https://faceebook.com"
          v-model="useFooterStore().footerDetail.link_facebook"
        />
      </div>
      <div class="w-full py-2">
        <label for="" class="text-slate-700 font-semibold">
          Link Instagram
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="text"
          placeholder="https://instagram.com"
          v-model="useFooterStore().footerDetail.link_instagram"
        />
      </div>
      <div class="w-full py-2">
        <label for="" class="text-slate-700 font-semibold">
          Link Linked In
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="text"
          placeholder="https://faceebook.com"
          v-model="useFooterStore().footerDetail.link_linkedin"
        />
      </div>
      <div class="w-full py-2">
        <label for="" class="text-slate-700 font-semibold">
          Copyright
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="text"
          placeholder="https://faceebook.com"
          v-model="useFooterStore().footerDetail.copyright"
        />
      </div>
      <!-- end data  -->

      <!-- btn update adn cancel -->
      <div class="w-full py-2 flex gap-5">
        <button
          class="py-2 px-5 bg-purple-600 rounded-lg shadow-md text-white font-semibold"
          :disabled="useFooterStore().loadingButton"
        >
          <span v-if="useFooterStore().loadingButton == false">Update</span>
          <span v-if="useFooterStore().loadingButton == true">Loading</span>
        </button>
        <button
          class="py-2 px-5 bg-slate-500 text-white border rounded-lg shadow-md font-semibold"
          @click="useFooterStore().formUpdate = false"
        >
          Cancel
        </button>
      </div>
      <!-- end btn update and cancel  -->
    </form>
  </section>
  <!-- END FORM UPDATE  -->

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
            <th class="w-1/12 py-5 border-b">LinkedIn</th>
            <th class="w-1/12 py-5 border-b">&copy</th>
            <th class="w-1/12 py-5 border-b">Action</th>
          </tr>
          <!-- end table heading  -->
          <!-- data  -->
          <tr v-if="useFooterStore().footerDetail != null">
            <td class="text-center pt-5 px-1">
              <span>{{ useFooterStore().footerDetail.brand }}</span>
            </td>
            <td class="text-center pt-5 px-1">
              <span class="text-xs">{{
                useFooterStore().footerDetail.link_faq
              }}</span>
            </td>
            <td class="text-center pt-5 px-1">
              <span class="text-xs">{{
                useFooterStore().footerDetail.link_youtube
              }}</span>
            </td>
            <td class="text-center pt-5 px-1">
              <span class="text-sm">{{
                useFooterStore().footerDetail.text_information
              }}</span>
            </td>
            <td class="text-center pt-5 px-1">
              <span class="text-sm">{{
                useFooterStore().footerDetail.address
              }}</span>
            </td>
            <td class="text-center pt-5 px-1">
              <span class="text-xs">
                {{ useFooterStore().footerDetail.link_facebook }}
              </span>
            </td>
            <td class="text-center pt-5 px-1">
              <span class="text-xs">
                {{ useFooterStore().footerDetail.link_instagram }}
              </span>
            </td>
            <td class="text-center pt-5 px-1">
              <span class="text-xs">
                {{ useFooterStore().footerDetail.link_linkedin }}
              </span>
            </td>
            <td class="text-center pt-5 px-1 w-1/12">
              <span class="text-sm">
                {{ useFooterStore().footerDetail.copyright }}
              </span>
            </td>
            <td class="text-center pt-5 px-1 w-1/12">
              <button
                @click="useFooterStore().formUpdate = true"
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
          <tr v-if="useFooterStore().loadingTable == true">
            <th colspan="10" class="text-blue-600 pt-5 px-1 text-xl">
              Loading...
            </th>
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
