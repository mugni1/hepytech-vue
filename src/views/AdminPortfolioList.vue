<template>
  <!-- SIDE BAR  -->
  <Sidebar />
  <!-- SIDE BAR  -->

  <!-- MAIN -->
  <main class="w-full min-h-screen flex flex-wrap bg-slate-100">
    <!-- HEADER  -->
    <AdminHeading
      :name="usePortfolioStore().userName"
      :initialName="usePortfolioStore().initialName"
    />
    <!-- END HEADER  -->

    <!-- CONTENT -->
    <section class="min-h-screen w-10/12 pt-20 ms-auto px-5">
      <!-- title  -->
      <h1 class="font-bold text-2xl text-slate-800 text-center my-5">
        Portfolio List
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

        <!-- TABLE  -->
        <table class="w-full">
          <tr>
            <th class="w-1/12 border-b border-slate-300 py-4">No</th>
            <th class="w-2/12 border-b border-slate-300 py-4">Image</th>
            <th class="w-3/12 border-b border-slate-300 py-4">Name</th>
            <th class="w-3/12 border-b border-slate-300 py-4">Categori</th>
            <th class="w-3/12 border-b border-slate-300 py-4" colspan="2">
              Action
            </th>
          </tr>
          <tr v-for="(item, index) in usePortfolioStore().listPortfolio">
            <td class="border-b text-center py-2">{{ index + 1 }}</td>
            <td class="border-b border-slate-200 p-2 text-center">
              <div
                class="w-full h-28 overflow-hidden flex items-center rounded-lg"
              >
                <img
                  class="rounded-lg"
                  :src="`${usePortfolioStore().urlImage}${item.image}`"
                  alt=""
                />
              </div>
            </td>
            <td class="border-b py-2 text-center">{{ item.name }}</td>
            <td class="text-center border-b py-2">{{ item.categori.name }}</td>
            <td class="border-b border-slate-200 py-2 px-2 text-center">
              <button
                class="font-semibold text-white py-2 px-5 bg-red-600 rounded-lg shadow-md hover:bg-red-800"
                @click="useNews().dropNews(item.id, index)"
              >
                Delete
              </button>
            </td>
            <td class="border-b border-slate-200 py-2 px-2 text-center">
              <router-link
                :to="`/admin/news/${item.id}/edit`"
                class="font-semibold text-white py-2 px-5 bg-purple-600 rounded-lg shadow-md hover:bg-purple-800"
              >
                Update
              </router-link>
            </td>
          </tr>
        </table>
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
import { usePortfolioStore } from "@/stores/portfolio";
export default {
  components: {
    Sidebar,
    AdminHeading,
  },
  setup() {
    return {
      usePortfolioStore,
    };
  },
  mounted() {
    usePortfolioStore().getInitialUserName();
    usePortfolioStore().getListPort();
  },
};
</script>
