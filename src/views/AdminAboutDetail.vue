<template>
  <!-- Sidebar  -->
  <Sidebar />
  <!-- Edn Sidebar  -->

  <!-- FORM UPDATE -->
  <section
    v-if="useAboutStore().formUpdate == true"
    class="fixed bg-slate-600 bg-opacity-50 flex items-center justify-center w-full h-screen z-50"
  >
    <form
      data-aos="zoom-in"
      @submit.prevent="
        useAboutStore().updateToDatabase(useAboutStore().dataAboutDetail.id)
      "
      class="container w-11/12 md:w-4/12 h-5/6 relative bg-white rounded-xl shadow-lg p-5 overflow-y-scroll scrollbar-hide border-2 border-slate-400"
    >
      <h1
        class="mx-auto font-semibold text-xl w-full text-center mb-5 text-slate-800"
      >
        UPDATE ABOUT
      </h1>
      <div class="w-full py-2">
        <label for="" class="text-slate-700 font-semibold">
          Clients
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="number"
          placeholder="999"
          v-model="useAboutStore().dataAboutDetail.clients"
        />
      </div>
      <div class="w-full py-2">
        <label for="" class="text-slate-700 font-semibold">
          Project
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="number"
          placeholder="999"
          v-model="useAboutStore().dataAboutDetail.project"
        />
      </div>
      <div class="w-full py-2">
        <label for="" class="text-slate-700 font-semibold">
          Staff
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="number"
          placeholder="999"
          v-model="useAboutStore().dataAboutDetail.staff"
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
          @change="useAboutStore().imageChange($event)"
        />
      </div>
      <div class="w-full py-2">
        <label for="description" class="font-semibold text-slate-700">
          Description
        </label>
        <textarea
          class="w-full border rounded-lg shadow-md p-1 outline-none"
          id="description"
          rows="8"
          v-model="useAboutStore().dataAboutDetail.description"
        ></textarea>
      </div>
      <div class="w-full py-2 flex gap-5">
        <button
          class="py-2 px-5 bg-purple-600 rounded-lg shadow-md text-white font-semibold"
          :disabled="useAboutStore().loadingButton"
        >
          <span v-if="useAboutStore().loadingButton == false">Update</span>
          <span v-if="useAboutStore().loadingButton == true">Loading</span>
        </button>
        <button
          class="py-2 px-5 bg-slate-500 text-white border rounded-lg shadow-md font-semibold"
          @click="useAboutStore().formUpdate = false"
        >
          Cancel
        </button>
      </div>
    </form>
  </section>
  <!-- END FORM UPDATE  -->

  <!-- MAIN -->
  <main
    class="w-full min-h-screen flex flex-wrap bg-gradient-to-br from-red-50 via-slate-50 to-yellow-50"
  >
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
        About
      </h1>
      <!-- title  -->

      <!-- CARD  -->
      <div class="p-5 bg-white rounded-xl shadow-lg">
        <!-- table news -->
        <table class="w-full">
          <!-- table heading  -->
          <tr>
            <th class="w-3/12 py-5 border-b">Image</th>
            <th class="w-3/12 py-5 border-b">Description</th>
            <th class="w-2/12 py-5 border-b">Clients</th>
            <th class="w-2/12 py-5 border-b">Project</th>
            <th class="w-1/12 py-5 border-b">Staff</th>
            <th class="w-1/12 py-5 border-b">Action</th>
          </tr>
          <!-- end table heading  -->
          <!-- data  -->
          <tr v-if="useAboutStore().dataAboutFilter != null">
            <!-- image  -->
            <td class="text-center pt-5">
              <img
                :src="`${useAboutStore().linkImage}${
                  useAboutStore().dataAboutDetail.image
                }`"
                alt=""
              />
            </td>
            <!-- end imgae  -->
            <!-- Description  -->
            <td class="px-2">
              <span class="text-sm">
                {{ useAboutStore().dataAboutFilter.description }}
              </span>
            </td>
            <!-- End Description  -->
            <td class="text-center">
              <span>{{ useAboutStore().dataAboutFilter.clients }}</span>
            </td>
            <td class="text-center">
              <span>{{ useAboutStore().dataAboutFilter.project }}</span>
            </td>
            <td class="text-center">
              <span>{{ useAboutStore().dataAboutFilter.staff }}</span>
            </td>
            <td class="text-center">
              <button
                @click="useAboutStore().formUpdate = true"
                class="py-1 px-2 bg-purple-600 text-white rounded-lg shadow-md"
              >
                UPDATE
              </button>
            </td>
          </tr>
          <!-- end data  -->
          <!-- loading  -->
          <tr v-if="useAboutStore().loadingTable == true">
            <th colspan="7" class="text-blue-600 pt-5 text-xl">Loading...</th>
          </tr>
          <!-- end loading  -->
          <!-- no data  -->
          <tr
            v-if="
              useAboutStore().loadingTable == false &&
              useAboutStore().dataAboutDetail == null
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
  mounted() {
    useAboutStore().getAboutDetail();
  },
};
</script>
