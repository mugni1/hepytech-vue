<template>
  <!-- SIDE BAR -->
  <Sidebar />
  <!-- END SIDE BAR  -->

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
        News List
      </h1>
      <!-- title  -->

      <!-- CARD  -->
      <div class="p-5 bg-white rounded-xl shadow-lg">
        <!-- add news  -->
        <router-link
          to="/admin/news-add"
          class="py-2 px-5 bg-emerald-600 mb-5 shadow-md rounded-lg text-white font-semibold inline-block"
        >
          Add News
        </router-link>
        <!-- end add news -->

        <!-- search  -->
        <div>
          <input
            class="p-1 border outline-none rounded-lg mb-5"
            type="search"
            name=""
            placeholder="Search news"
          />
        </div>
        <!-- end search  -->

        <!-- table news -->
        <table class="w-12/12 bg-white">
          <tr class="">
            <th class="border-b border-slate-300 w-1/12 py-2">#</th>
            <th class="border-b border-slate-300 w-2/12">Image</th>
            <th class="border-b border-slate-300 w-3/12">Name</th>
            <th class="border-b border-slate-300 w-3/12">Text</th>
            <th class="border-b border-slate-300 w-2/12">Created</th>
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
              <img class="rounded-lg" src="/no_img.png" alt="" />
            </td>
            <td
              v-if="item.image != null"
              class="border-b border-slate-200 py-5 text-center"
            >
              <div
                class="w-full h-28 overflow-hidden flex items-center rounded-lg"
              >
                <img
                  class="rounded-lg"
                  :src="`${useNews().urlImage}${item.image}`"
                  alt=""
                />
              </div>
            </td>
            <td class="border-b border-slate-200 py-5 px-2 text-center">
              {{ item.name }}
            </td>
            <td class="border-b border-slate-200 py-5 px-2">{{ item.text }}</td>
            <td class="border-b border-slate-200 py-5 px-2 text-center">
              {{ item.created_at }}
            </td>
            <td class="border-b border-slate-200 py-5 px-2">
              <button
                class="font-semibold text-white py-2 px-5 bg-red-600 rounded-lg shadow-md hover:bg-red-800"
                @click="useNews().dropNews(item.id, index)"
              >
                Delete
              </button>
            </td>
            <td class="border-b border-slate-200 py-5 px-2">
              <router-link
                :to="`/admin/news/${item.id}/edit`"
                class="font-semibold text-white py-2 px-5 bg-purple-600 rounded-lg shadow-md hover:bg-purple-800"
              >
                Update
              </router-link>
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
  components: {
    AdminHeading,
    Sidebar,
  },
  setup() {
    return {
      useNews,
    };
  },
  mounted() {
    useNews().getNewsList();
    useNews().getInitialUser();
  },
};
</script>
