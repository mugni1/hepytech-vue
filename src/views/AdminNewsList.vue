<template>
  <!-- SIDE BAR -->
  <Sidebar />
  <!-- END SIDE BAR  -->

  <!-- MAIN -->
  <main class="w-full min-h-screen flex flex-wrap bg-slate-100">
    <!-- HEADER  -->
    <AdminHeading :name="adminName" :initialName="useNews().initialUser" />
    <!-- END HEADER  -->

    <!-- CONTENT -->
    <section class="min-h-screen w-10/12 pt-20 ms-auto px-5">
      <!-- title  -->
      <h1 class="font-bold text-2xl text-slate-800 text-center my-5">
        News List
      </h1>
      <!-- title  -->

      <div class="p-5 bg-white rounded-xl shadow-lg">
        <!-- add news  -->
        <button
          class="py-2 px-5 bg-emerald-600 mb-5 shadow-md rounded-lg text-white font-semibold"
        >
          Add News
        </button>
        <!-- end add news -->
        <div>
          <input
            class="p-1 border outline-none rounded-lg mb-5"
            type="search"
            name=""
            placeholder="Search news"
          />
        </div>
        <!-- table news -->
        <table class="w-12/12 bg-white">
          <tr class="">
            <th class="border-b border-slate-300 w-1/12 py-2">#</th>
            <th class="border-b border-slate-300 w-2/12">Image</th>
            <th class="border-b border-slate-300 w-1/12">Name</th>
            <th class="border-b border-slate-300 w-3/12">Text</th>
            <th class="border-b border-slate-300 w-2/12">Created</th>
            <th class="border-b border-slate-300 w-2/12">Updated</th>
            <th class="border-b border-slate-300 w-1/12" colspan="2">Action</th>
          </tr>
          <tr v-for="(item, index) in useNews().listNews">
            <td class="border-b border-slate-200 py-5 text-center">
              {{ index + 1 }}
            </td>
            <td
              v-if="item.image == null"
              class="border-b border-slate-200 py-5 text-center"
            >
              Tidak Ada Gambar
            </td>
            <td
              v-if="item.image != null"
              class="border-b border-slate-200 py-5 text-center"
            >
              Ada Gambar
            </td>
            <td class="border-b border-slate-200 py-5 px-2 text-center">
              {{ item.name }}
            </td>
            <td class="border-b border-slate-200 py-5 px-2">{{ item.text }}</td>
            <td class="border-b border-slate-200 py-5 px-2">
              {{ item.created_at }}
            </td>
            <td class="border-b border-slate-200 py-5 px-2">
              {{ item.updated_at }}
            </td>
            <td class="border-b border-slate-200 py-5 px-2">
              <button
                class="font-semibold text-white py-2 px-5 bg-red-600 rounded-lg shadow-md hover:bg-red-800"
              >
                Delete
              </button>
            </td>
            <td class="border-b border-slate-200 py-5 px-2">
              <button
                class="font-semibold text-white py-2 px-5 bg-purple-600 rounded-lg shadow-md hover:bg-purple-800"
              >
                Update
              </button>
            </td>
          </tr>
          <tr v-if="useNews().loading">
            <td colspan="7" class="text-center py-4">
              <h1 class="font-semibold text-2xl">Loading</h1>
            </td>
          </tr>
        </table>
        <!-- table news -->
      </div>
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
    AdminHeading,
    Sidebar,
  },
  setup() {
    return {
      useNews,
    };
  },
  data() {
    return {
      adminName: localStorage.getItem("name"),
    };
  },
  mounted() {
    useNews().getNewsList();
    useNews().getInitialUser();
  },
};
</script>
