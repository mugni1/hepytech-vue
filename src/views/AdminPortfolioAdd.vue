<template>
  <!-- SIDE BAR  -->
  <Sidebar />
  <!-- END SIDE BAR  -->

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
        PortFolio Add
      </h1>
      <!-- title  -->
      <form
        @submit.prevent="usePortfolioStore().storeToDatabase()"
        class="w-6/12 bg-white mx-auto rounded-lg shadow-lg flex flex-wrap p-5"
      >
        <div class="flex flex-wrap w-full py-1">
          <label class="w-full font-semibold text-slate-800" for="">
            Name
          </label>
          <input
            class="w-full border outline-none p-1 rounded-lg"
            type="text"
            placeholder="Indonesia student"
            v-model="usePortfolioStore().portfolioName"
          />
        </div>
        <div class="flex flex-wrap w-full py-1">
          <label class="w-full font-semibold text-slate-800" for="category">
            Category
          </label>
          <select
            name=""
            id="category"
            v-model="usePortfolioStore().portfolioCategoriId"
            class="w-full border p-1 rounded-lg"
          >
            <option
              :value="item.id"
              v-for="(item, index) in usePortfolioStore().categoryList"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
        <div class="flex flex-wrap w-full py-1">
          <label class="w-full font-semibold ps-1 text-slate-800" for=""
            >Image</label
          >
          <input
            @change="usePortfolioStore().imageChange($event)"
            type="file"
            class="border p-1 w-full rounded-lg"
          />
        </div>
        <div class="flex flex-wrap w-full pt-3">
          <button
            v-if="usePortfolioStore().loadingBtnAdd == false"
            class="py-2 px-5 bg-emerald-600 font-semibold text-white rounded-lg"
          >
            Save
          </button>
          <button
            v-if="usePortfolioStore().loadingBtnAdd == true"
            :disabled="usePortfolioStore().loadingBtnAdd"
            class="py-2 px-5 bg-emerald-600 font-semibold text-white rounded-lg"
          >
            Loading
          </button>
        </div>
      </form>
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
  setup() {
    return {
      usePortfolioStore,
    };
  },
  components: {
    Sidebar,
    AdminHeading,
  },
  mounted() {
    usePortfolioStore().getInitialUserName();
    usePortfolioStore().getCategoryList();
  },
};
</script>
