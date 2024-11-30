<template>
  <!-- Sidebar  -->
  <Sidebar />
  <!-- Sidebar  -->

  <!-- FORM UPDATE -->
  <section
    v-if="useHomeStore().formUpdate"
    class="fixed bg-slate-600 bg-opacity-50 flex items-center justify-center w-full h-screen z-50"
  >
    <form
      data-aos="zoom-in"
      class="container w-11/12 md:w-4/12 h-5/6 relative bg-white rounded-xl shadow-lg p-5 overflow-y-scroll scrollbar-hide border-2 border-slate-400"
    >
      <h1
        class="mx-auto font-semibold text-xl w-full text-center mb-5 text-slate-800"
      >
        UPDATE HOME
      </h1>
      <div class="w-full py-2">
        <label for="" class="text-slate-700 font-semibold">Title</label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="text"
          placeholder="Sample : Lorem ipsum dolor sit amet"
          v-model="useHomeStore().titleForm"
        />
      </div>
      <div class="w-full py-2">
        <label for="" class="text-slate-700 font-semibold">
          Link Contac us
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="text"
          placeholder="https://facebook.com"
          v-model="useHomeStore().linkContacForm"
        />
      </div>
      <div class="w-full py-2">
        <label for="" class="text-slate-700 font-semibold">
          Link Job Vacancy
        </label>
        <input
          class="w-full border outline-none rounded-md p-1 shadow-md"
          type="text"
          placeholder="https://facebook.com"
          v-model="useHomeStore().linkJobForm"
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
          @change="useHomeStore().imageChange($event)"
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
          v-model="useHomeStore().descriptionForm"
        ></textarea>
      </div>
      <div class="w-full py-2 flex gap-5">
        <button
          class="py-2 px-5 bg-purple-600 rounded-lg shadow-md text-white font-semibold"
        >
          Update
        </button>
        <button
          class="py-2 px-5 bg-slate-500 text-white border rounded-lg shadow-md font-semibold"
          @click="useHomeStore().formUpdate = false"
        >
          Cancel
        </button>
      </div>
    </form>
  </section>
  <!-- END FORM UPDATE  -->

  <!-- MAIN -->
  <main class="w-full min-h-screen flex flex-wrap bg-slate-100">
    <!-- HEADER  -->
    <AdminHeading
      :name="useHomeStore().userName"
      :initialName="useHomeStore().initialUserName"
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
          <tr v-if="useHomeStore().loadingTable == true">
            <th colspan="7" class="text-blue-600 pt-5 text-xl">Loading...</th>
          </tr>
          <!-- end loading  -->
          <!-- data  -->
          <tr
            v-if="
              useHomeStore().loadingTable == false &&
              useHomeStore().dataHomeDetail != null
            "
          >
            <td class="w-3/12 text-center py-5 border-b">
              <img
                :src="`${useHomeStore().linkImage}${
                  useHomeStore().dataHomeDetail.image
                }`"
                alt=""
              />
            </td>
            <td class="w-2/12 text-center py-5 border-b px-3">
              <span class="font-semibold">
                {{ useHomeStore().dataHomeDetail.title }}
              </span>
            </td>
            <td class="w-2/12 py-5 border-b px-3">
              <span class="text-xs">
                {{ useHomeStore().dataHomeDetail.description }}
              </span>
            </td>
            <td class="w-2/12 py-5 border-b px-3">
              <span class="text-xs">
                {{ useHomeStore().dataHomeDetail.link_contac }}
              </span>
            </td>
            <td class="w-2/12 text-center py-5 border-b px-3">
              <span class="text-xs">
                {{ useHomeStore().dataHomeDetail.link_job_vacancy }}
              </span>
            </td>
            <td class="w-1/12 text-center py-5 border-b">
              <button
                @click="useHomeStore().formUpdate = true"
                class="py-1 px-2 bg-purple-600 text-white rounded-lg shadow-md"
              >
                UPDATE
              </button>
            </td>
          </tr>
          <!-- end data  -->
          <!-- no data  -->
          <tr
            v-if="
              useHomeStore().loadingTable == false &&
              useHomeStore().dataHomeDetail == null
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
import { useHomeStore } from "@/stores/home";

export default {
  components: {
    Sidebar,
    AdminHeading,
  },
  setup() {
    return {
      useHomeStore,
    };
  },
  mounted() {
    useHomeStore().getHomeDetail();
  },
};
</script>
