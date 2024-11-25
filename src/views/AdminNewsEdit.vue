<template>
  <!-- SIDE BAR  -->
  <Sidebar />
  <!-- END SIDE BAR -->

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
        Edit News
      </h1>
      <!-- title  -->

      <!-- CARD  -->
      <form
        @submit.prevent="useNews().storeToDatabase()"
        class="w-6/12 bg-white mx-auto rounded-lg shadow-lg flex flex-wrap p-5"
      >
        <div class="flex flex-wrap w-full py-1">
          <label class="w-full font-semibold ps-1 text-slate-800" for=""
            >Name</label
          >
          <input
            class="w-full border outline-none p-1 rounded-lg"
            type="text"
            placeholder="Indonesia student"
            v-model="useNews().nameNews"
          />
        </div>
        <div class="flex flex-wrap w-full py-1">
          <label class="w-full font-semibold ps-1 text-slate-800" for=""
            >Image</label
          >
          <input
            class="w-full border outline-none p-1 rounded-lg"
            type="file"
            placeholder="Indonesia student"
            @change="useNews().imageChange($event)"
          />
        </div>
        <div class="flex flex-wrap w-full py-1">
          <label class="w-full font-semibold ps-1 text-slate-800" for=""
            >Text</label
          >
          <textarea
            class="w-full border rounded-lg outline-none p-1"
            name=""
            id=""
            rows="8"
            v-model="useNews().textNews"
          ></textarea>
        </div>
        <div class="flex flex-wrap w-full pt-3">
          <button
            class="py-2 px-5 bg-emerald-600 font-semibold text-white rounded-lg"
          >
            Update
          </button>
        </div>
      </form>
      <!--END CARD  -->
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
  setup() {
    return { useNews };
  },
  components: {
    Sidebar,
    AdminHeading,
  },
  mounted() {
    useNews().getInitialUser();
    useNews().getNewsDetail();
  },
};
</script>
