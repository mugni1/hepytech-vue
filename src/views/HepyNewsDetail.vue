<template>
  <!-- Navbar  -->
  <Navbar />
  <!-- End Navbar  -->

  <main class="w-full pt-24 overflow-hidden">
    <section class="container mx-auto px-5 flex flex-wrap">
      <!-- column 1  -->
      <div v-if="useNews().loading == false" class="w-full md:w-8/12 mb-5">
        <!-- judul  -->
        <h2 class="font-bold text-purple-700 text-2xl mb-2">
          {{ useNews().newsDetail.name }}
        </h2>
        <h5 class="text-slate-600 text-sm mb-2">
          {{ useNews().newsDetail.created_at }}
        </h5>
        <!--end judul  -->

        <!-- image new  -->
        <div
          class="w-full h-60 md:h-80 bg-slate-500 rounded-lg shadow-md overflow-hidden mb-5"
        >
          <div
            :style="`
              background: url(${useNews().urlImage}${
              useNews().newsDetail.image
            });
              background-size: cover;
              background-position: center;
            `"
            class="h-full w-full"
          ></div>
        </div>
        <!-- end image news -->

        <!-- text news  -->
        <div class="text-justify">
          <p>{{ useNews().newsDetail.text }}</p>
        </div>
        <!-- end text news -->
      </div>
      <div
        v-if="useNews().loading == true"
        class="w-full md:w-8/12 mb-5 min-h-screen pb-36 items-center flex justify-center"
      >
        <h1 class="font-semibold text-center text-2xl">Loading ...</h1>
      </div>
      <!--end  column 1  -->

      <!-- column 2  -->
      <div class="w-full md:w-4/12 md:ps-5">
        <!-- title  -->
        <h2 class="font-bold text-slate-700 text-2xl mb-2">
          Also read other news
        </h2>
        <!-- end Title  -->

        <!-- box card -->
        <div
          class="w-full mb-5"
          data-aos="fade-left"
          data-aos-duration="1000"
          @click="pushNewsDetail()"
          v-for="(item, index) in useNews().listNewsFilterId"
        >
          <router-link :to="'/hepynews/' + item.id + '/detail'">
            <div
              class="w-full border rounded-xl shadow-md flex overflow-hidden group"
            >
              <!-- card image -->
              <div class="w-3/12 bg-slate-500 overflow-hidden">
                <div
                  :style="`
                    background: url(${useNews().urlImage}${item.image});
                    background-size: cover;
                    background-position: center;
                  `"
                  class="w-full h-full group-hover:scale-110 transition-all duration-300"
                ></div>
              </div>
              <!-- end card image -->
              <!-- card body  -->
              <div class="w-9/12 p-5 flex flex-wrap">
                <!-- judul  -->
                <h3
                  class="font-bold text-slate-800 w-full text-nowrap truncate text-base mb-1"
                >
                  {{ item.name }}
                </h3>
                <!-- end judul  -->
                <!-- text  -->
                <p class="text-xs text-slate-500 mb-1">
                  {{ item.text }}
                </p>
                <!--end text  -->
                <!-- date and author  -->
                <div>
                  <h4 class="text-slate-700 text-sm flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      class="fill-current"
                    >
                      <path
                        d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
                      ></path>
                    </svg>
                    {{ item.user.name }}
                  </h4>
                </div>
                <!-- end date and author  -->
              </div>
              <!-- end card body  -->
            </div>
          </router-link>
        </div>
        <!-- box card -->
      </div>
      <!--end column 2  -->
    </section>
  </main>

  <!-- Footer  -->
  <Footer />
  <!-- End Footer  -->
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import { useNews } from "@/stores/news";

export default {
  setup() {
    return {
      useNews,
    };
  },
  components: {
    Navbar,
    Footer,
  },
  mounted() {
    useNews().getNewsList();
    useNews().getNewsDetail(this.$route.params.id);
  },
  methods: {
    pushNewsDetail() {
      useNews().loading = true;
      useNews().getNewsDetail(this.$route.params.id);
    },
    // newsDetailAfterClick() {
    //   this.newsDetail = this.listNews.filter(
    //     (item) => item.id == this.$route.params.id
    //   );
    //   console.log(this.newsDetail);
    //   console.log(this.listNews);
    // },
  },
};
</script>
