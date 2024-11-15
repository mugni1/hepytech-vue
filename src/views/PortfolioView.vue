<template>
  <main class="w-full overflow-x-hidden overflow-y-hidden">
    <section class="pt-20 container mx-auto px-5">
      <h1
        data-aos="fade-right"
        data-aos-duration="1000"
        class="text-3xl xl:text-4xl font-bold pt-5 mb-5 pb-2 text-slate-800 border-b"
      >
        Portfolio
      </h1>
      <!-- navigasi portfolio  -->
      <div
        class="w-full pb-5 flex flex-wrap justify-between gap-5"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <button
          class="border px-5 py-2 rounded-full shadow-md bg-purple-700 text-white md:w-2/12 w-5/12 hover:scale-95 transition-all hover:shadow-sm hover:bg-purple-900"
          @click="all()"
        >
          All
        </button>
        <button
          class="border px-5 py-2 rounded-full shadow-md bg-purple-700 text-white md:w-2/12 w-5/12 hover:scale-95 transition-all hover:shadow-sm hover:bg-purple-900"
          @click="onlyWebsite()"
        >
          Website
        </button>
        <button
          class="border px-5 py-2 rounded-full shadow-md bg-purple-700 text-white md:w-2/12 w-5/12 hover:scale-95 transition-all hover:shadow-sm hover:bg-purple-900"
          @click="onlyMobile()"
        >
          Mobile
        </button>
        <button
          class="border px-5 py-2 rounded-full shadow-md bg-purple-700 text-white md:w-2/12 w-5/12 hover:scale-95 transition-all hover:shadow-sm hover:bg-purple-900"
          @click="onlyDekstop()"
        >
          Desktop
        </button>
      </div>
      <!-- navigasi portfolio  -->
    </section>

    <!-- list portfolio  -->
    <section class="container mx-auto w-full flex flex-wrap mb-10">
      <!-- box card -->
      <div
        class="p-5 w-full md:w-4/12"
        v-for="(item, index) in listPortfolioFilter"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div class="border shadow-md rounded-xl flex flex-wrap">
          <!-- card image  -->
          <div class="h-56 w-full bg-slate-400 rounded-t-xl"></div>
          <!-- end card image -->
          <!-- card body  -->
          <div class="w-10/12">
            <h2 class="text-slate-900 font-semibold px-2 pt-2 text-lg">
              {{ item.name }}
            </h2>
            <h4 class="text-slate-700 font-semibold px-2 text-sm pb-2">
              {{ item.category }}
            </h4>
          </div>
          <div class="w-2/12 flex justify-center items-center">
            <img
              v-if="item.category == 'mobile'"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJNJREFUSEvtlbEJgDAQRV/mEASx0G1cxsYNdCEHsbETBfdQLK5JOHIpYpXUj/8vP+G+I/NxmfXRDAZgBnrjADswAqvPawY3UBnFBTuA1mrwJIoLHgys3UAMrG+k8sVAsi8RRT9tiahEFCbw27KLhu8Byds0m8EF1InqJ9BYC+erzAXojCYbMKVUplE3jlkbK66kEC/59yYZ6oqzowAAAABJRU5ErkJggg=="
            />
            <img
              v-if="item.category == 'website'"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAqxJREFUSEu11V3o33MUB/DXtDw0rJFNHppStqw8LFcj4UJMLlCY50V5KFtKtiLPccFcmMhDW8is1dZak6gVaVFSzAUT5QZjGuUhY8znvc5P3337/X5/F/t/bn79vufzOe9zzvt9zpliks+USfZvIoBDcAUuwuk4CXvxNT7Gm9iAv0YFOg7gYjxbTscl+iVuw5Zhl0YBPNgifaAe/IZpFeWZ+Buf4GAMbLl6N1b0QYYBxHEAfsYynI+rm8PHGsi95eBxLK/ybMaTOApL2+/TXZA+wKXYhN9xAb7Cd1X3E/BDPZ5ePByBExHbOzgU52LrAKQLkMtf4Nj2+Ca8jFvwYkUasrtnFRZXtg/Vm9XY3u6fhj9zuQtwe5H6Kc7AP3i9ynMz4rB7Btm+jwU4CNswr3F0WfOxsQ/wBhZiCVaWp88wtwBDbPck05QvXM0oQ4h+Ai802619gG+a4bieszxOvY/Bj0Nk+Esj+PCW+UzsxFn4sHokituvRCH2sAPU2T+VqvYDGERzIDDi68h+BmH/lF6JdmBWU9Lx+HYIcsp2dCnv+ybx+fgI4e7UPsBrTabX4E48U85yOY+ikqile0LsrpJj9J8ZdVeL/Cm8ghv7ANeXIWqJTHPSCze0BrujZfLcCJmmqc4p2+dN2nNaBle1DNb1AUJwypTOXNTkuRbR/0utdGtwbQ8g32PPWEmjXYdXq1nTaLv7APl/Id6qUXF2m5LhIFr/tYAj25yUJ5ykNKn1yViPqW1knIf3BsEMG3YZaI+W7u/BlbUPHu5M2Psr6g9qJ2RAppO7/O3DGDWu78MjFcVgJCflLJ28ybLJMvqjsgjBmaSDCfBfNcctnEvwfEl0XG9k4WQovjvs0kQrMzW+vGZUiJtdcswYj4TfrqG2Z1QEEwGMi/x/2SYd4F9DQooZvsQXDgAAAABJRU5ErkJggg=="
            />
            <img
              v-if="item.category == 'desktop'"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKVJREFUSEvtlE0OQDAUhD/nkEjEgtu4jI0bcCEHsbETEvcgRBN/1SdNbei282Y603Y8HC/PMT+vCqRAASSWrhogA6qZZ+tgAHxLcjXeAtFRYFx3bWPb8WzJfgGV/x+R8SF/ICJjBkLA8seuPppw3gg7CfRAYByTATogPDqY27QEYhmHFlUD+VWbSngf99XT5nQioEh1Dm8PKXHgXEByN1qMxIGVwAR45SIZPNjn9AAAAABJRU5ErkJggg=="
            />
          </div>
          <!-- end card body -->
        </div>
      </div>
      <!-- box card -->
    </section>
    <!-- end portfolio  -->

    <!-- footer -->
    <Footer />
    <!--end footer -->
  </main>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer,
  },
  data() {
    return {
      listPortfolio: [
        { name: "Moksa Pradana", category: "website" },
        { name: "Lazada", category: "website" },
        { name: "Shoppe", category: "website" },
        { name: "Netflix", category: "mobile" },
        { name: "Roblox", category: "desktop" },
        { name: "Valorant", category: "desktop" },
      ],
      listPortfolioFilter: null,
    };
  },
  mounted() {
    this.listPortfolioFilter = this.listPortfolio;
  },
  methods: {
    all() {
      this.listPortfolioFilter = this.listPortfolio;
    },
    onlyWebsite() {
      this.listPortfolioFilter = this.listPortfolio.filter(
        (item) => item.category == "website"
      );
    },
    onlyMobile() {
      this.listPortfolioFilter = this.listPortfolio.filter(
        (item) => item.category == "mobile"
      );
    },
    onlyDekstop() {
      this.listPortfolioFilter = this.listPortfolio.filter(
        (item) => item.category == "desktop"
      );
    },
  },
};
</script>
