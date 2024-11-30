<template>
  <!-- Sidebar  -->
  <Sidebar />
  <!-- Sidebar  -->

  <!-- FORM CREATE -->
  <section
    v-if="useTrustedStore().formCreate == true"
    class="fixed bg-slate-600 bg-opacity-50 flex items-center justify-center w-full h-screen z-50"
  >
    <form
      data-aos="zoom-in"
      @submit.prevent="useTrustedStore().storeToDatabase()"
      class="container w-11/12 md:w-4/12 h-5/6 relative bg-white rounded-xl shadow-lg p-5 overflow-y-scroll scrollbar-hide border-2 border-slate-400"
    >
      <h1
        class="mx-auto font-semibold text-xl w-full text-center mb-5 text-slate-800"
      >
        UPDATE ABOUT
      </h1>
      <div class="w-full py-2">
        <label for="" class="text-slate-700 font-semibold">
          Link Brand
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="text"
          placeholder="https://facebook.com"
          v-model="useTrustedStore().linkCreate"
        />
      </div>
      <div class="w-full py-2">
        <label for="image" class="font-semibold text-slate-700">
          Image
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="file"
          id="image"
          @change="useTrustedStore().imageChange($event)"
        />
      </div>
      <div class="w-full py-2 flex gap-5">
        <button
          class="py-2 px-5 bg-purple-600 rounded-lg shadow-md text-white font-semibold"
          :disabled="useTrustedStore().loadingButton"
        >
          <span v-if="useTrustedStore().loadingButton == false">Update</span>
          <span v-if="useTrustedStore().loadingButton == true">Loading</span>
        </button>
        <button
          class="py-2 px-5 bg-slate-500 text-white border rounded-lg shadow-md font-semibold"
          @click="useTrustedStore().formCreate = false"
        >
          Cancel
        </button>
      </div>
    </form>
  </section>
  <!-- END FORM CREATE  -->

  <!-- MAIN -->
  <main
    class="w-full min-h-screen flex flex-wrap bg-gradient-to-br from-red-50 via-slate-50 to-yellow-50"
  >
    <!-- HEADER  -->
    <AdminHeading
      :name="useTrustedStore().userName"
      :initialName="useTrustedStore().initialUserName"
    />
    <!-- END HEADER  -->

    <!-- CONTENT -->
    <section class="min-h-screen w-10/12 pt-20 ms-auto px-5">
      <!-- title  -->
      <h1 class="font-bold text-2xl text-slate-800 text-center my-5">
        Trusted on
      </h1>
      <!-- title  -->

      <!-- CARD  -->
      <div class="p-5 bg-white rounded-xl shadow-lg">
        <!-- btn add  -->
        <button
          @click="useTrustedStore().formCreate = true"
          class="px-5 py-2 text-white rounded-lg shadow-md hover:bg-green-800 bg-green-600"
        >
          Add Trusted
        </button>
        <!-- end btn add  -->

        <!-- search  -->
        <div class="w-full py-5">
          <input
            type="search"
            class="p-1 rounded-md shadow-md border outline-none w-5/12"
            placeholder="Search ..."
          />
        </div>
        <!-- end search  -->

        <!-- table news -->
        <table class="w-full">
          <!-- table heading  -->
          <tr>
            <th class="w-3/12 py-5 border-b">Image</th>
            <th class="w-8/12 py-5 border-b">Link</th>
            <th colspan="2" class="w-1/12 py-5 border-b">Action</th>
          </tr>
          <!-- end table heading  -->
          <!-- data  -->
          <tr v-for="(item, index) in useTrustedStore().trustedList">
            <td class="py-5">
              <img
                :src="`${useTrustedStore().linkImage}${item.image}`"
                alt=""
                class="w-full"
              />
            </td>
            <td class="text-center">{{ item.link }}</td>
            <td class="text-center p-2">
              <button
                @click="useTrustedStore().deleteFromDatabase(index, item.id)"
                class="p-2 text-white rounded-lg shadow-md hover:bg-red-800 bg-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="fill-current"
                >
                  <path
                    d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"
                  ></path>
                  <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                </svg>
              </button>
            </td>
            <td class="text-center">
              <button
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
          <tr v-if="useTrustedStore().loadingTable == true">
            <th colspan="7" class="text-blue-600 pt-5 text-xl">Loading...</th>
          </tr>
          <!-- end loading  -->
          <!-- no data  -->
          <tr
            v-if="
              useTrustedStore().loadingTable == false &&
              useTrustedStore().trustedList == null
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
import { useTrustedStore } from "@/stores/trusted";

export default {
  components: {
    Sidebar,
    AdminHeading,
  },
  setup() {
    return { useTrustedStore };
  },
  mounted() {
    useTrustedStore().getTrustedList();
  },
};
</script>
