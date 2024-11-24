<template>
  <!-- Navbar  -->
  <Navbar />
  <!-- End Navbar -->
  <main class="w-full pt-20">
    <section
      data-aos="fade-down"
      data-aos-duration="600"
      class="container mx-auto px-5 w-full"
    >
      <!-- title  -->
      <h1
        class="font-bold text-2xl py-2 my-3 px-5 text-white rounded-xl shadow-md bg-purple-700 inline-block"
      >
        News Update
      </h1>
      <!-- end title  -->
    </section>

    <!-- Menampilkan Loading Indicator -->
    <div
      v-if="useNews().loading"
      class="flex justify-center items-start w-full py-10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="animate-spin w-20 h-20 fill-slate-400"
      >
        <path
          d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
        ></path>
      </svg>
    </div>
    <!-- end loading indicator -->

    <!-- No data from api -->
    <div
      v-if="useNews().listNews.length < 1 && useNews().loading == false"
      data-aos="zoom-in"
      data-aos-duration="700"
      class="container mx-auto p-5 flex justify-center font-bold text-2xl text-red-600"
    >
      <h1 class="border w-full text-center py-10 rounded-2xl shadow-md">
        No Have News
      </h1>
    </div>
    <!-- No data from api -->

    <!-- list news  -->
    <section class="flex container mx-auto w-full flex-wrap">
      <!-- box card -->
      <div
        class="w-full md:w-6/12 p-5"
        data-aos="fade-right"
        data-aos-duration="1000"
        v-for="(item, index) in useNews().listNews"
      >
        <router-link :to="'/hepynews/' + item.id + '/detail'">
          <div
            class="w-full border rounded-xl shadow-md flex overflow-hidden group"
          >
            <!-- card image -->
            <div class="w-3/12 bg-slate-500 overflow-hidden">
              <div
                v-if="item.image == null"
                style="background-image: url('/no_img.png');"
                class="w-full h-full group-hover:scale-110 transition-all duration-300 bg-cover bg-center"
              ></div>
              <div
                v-else
                :style="`background-image: url(${useNews().urlImage}${
                  item.image
                });`"
                class="w-full h-full group-hover:scale-110 transition-all duration-300 bg-cover bg-center"
              ></div>
            </div>
            <!-- end card image -->
            <!-- card body  -->
            <div class="w-9/12 p-5 flex flex-wrap">
              <!-- judul  -->
              <h2
                class="font-bold text-slate-900 w-full text-nowrap truncate text-lg"
              >
                {{ item.name }}
              </h2>
              <!-- end judul  -->
              <!-- paragraf -->
              <p class="text-slate-500 mb-2 text-sm md:text-base w-full">
                {{ item.text }}
              </p>
              <!-- end paragraf  -->
              <!-- date and author  -->
              <div>
                <h3 class="font-semibold text-slate-800 text-base flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    class="fill-current"
                  >
                    <path
                      d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"
                    ></path>
                    <path
                      d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"
                    ></path>
                  </svg>
                  {{ item.created_at }}
                </h3>
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
    </section>
    <!-- list news  -->

    <!-- Navbar  -->
    <Footer />
    <!-- end Navbar  -->
  </main>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import { useNews } from "@/stores/news";

export default {
  components: {
    Footer,
    Navbar,
  },
  setup() {
    return {
      useNews,
    };
  },
  mounted() {
    // fetch saat mounted
    useNews().getNewsList();
  },
};
</script>
