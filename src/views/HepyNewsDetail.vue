<template>
  <main class="w-full pt-24 overflow-hidden">
    <section class="container mx-auto px-5 flex flex-wrap">
      <!-- column 1  -->
      <div class="w-full md:w-8/12 mb-5">
        <!-- judul  -->
        <h2 class="font-bold text-purple-700 text-2xl mb-2">
          Contoh Judul
        </h2>
        <h5 class="text-slate-600 text-sm mb-2">
          HepyTech | 22-06-2024, 12:00 WIB
        </h5>
        <h4 class="font-semibold text-slate-700 text-sm"></h4>
        <!--end judul  -->

        <!-- image new  -->
        <div
          class="w-full h-60 md:h-80 bg-slate-500 rounded-lg shadow-md overflow-hidden mb-5"
        >
          <div
            style="
              background: url('/career/lifeat5.png');
              background-size: cover;
              background-position: center;
            "
            class="h-full w-full"
          ></div>
        </div>
        <!-- end image news -->

        <!-- text news  -->
        <div class="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          provident expedita sit optio nam? Excepturi unde autem culpa accusamus
          sit perferendis, non vero deleniti labore facilis corporis voluptatem
          sunt enim qui maiores at fugit ipsam ducimus mollitia animi corrupti
          magnam voluptates magni. Ut nemo similique culpa officia, iste aut
          modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
          molestias ex possimus fuga quas magnam excepturi eum facilis iusto!
          Placeat dolor similique provident hic maxime nam voluptatum rem
          asperiores assumenda numquam, vitae eius reprehenderit reiciendis
          molestiae est amet, soluta porro expedita? Animi eaque excepturi optio
          asperiores blanditiis unde eveniet deleniti?
        </div>
        <!-- end text news -->
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
          @click="filterId()"
          v-for="(item, index) in listNewsAfterFilterId"
        >
          <router-link :to="'/hepynews/' + item.id + '/detail'">
            <div
              class="w-full border rounded-xl shadow-md flex overflow-hidden group"
            >
              <!-- card image -->
              <div class="w-3/12 bg-slate-500 overflow-hidden">
                <div
                  style="
                    background: url('/career/lifeat1.png');
                    background-size: cover;
                    background-position: center;
                  "
                  class="w-full h-full group-hover:scale-110 transition-all duration-300"
                ></div>
              </div>
              <!-- end card image -->
              <!-- card body  -->
              <div class="w-9/12 p-5 flex flex-wrap">
                <!-- judul  -->
                <h2
                  class="font-bold text-slate-900 w-full text-nowrap truncate text-lg"
                >
                  {{ item.title }}
                </h2>
                <!-- end judul  -->
                <!-- paragraf -->
                <p class="text-slate-500 mb-2 text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Obcaecati quisquam mollit....
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
                    Date
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
                    author
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
</template>

<script>
export default {
  data() {
    return {
      listNews: [
        {
          id: 2,
          title: "Kecelakaan di Jakarta raya",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur recusandae dicta voluptates, at odit alias nobis accusamus a fugit molestias sequi earum, autem facere distinctio fuga eius officiis animi reprehenderit.",
          date: "22-05-2024",
          author: "Admin",
        },
        {
          id: 8,
          title: "Beras Plastik",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur recusandae dicta voluptates, at odit alias nobis accusamus a fugit molestias sequi earum, autem facere distinctio fuga eius officiis animi reprehenderit.",
          date: "16-06-2024",
          author: "Lemon",
        },
        {
          id: 6,
          title: "Mimi Peri",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur recusandae dicta voluptates, at odit alias nobis accusamus a fugit molestias sequi earum, autem facere distinctio fuga eius officiis animi reprehenderit.",
          date: "23-12-2024",
          author: "Admin",
        },
      ],
      listNewsFilter: null,
      listNewsAfterFilterId: null,
      newsDetail: null,
    };
  },
  mounted() {
    //filter text
    const textLimit = 80;
    this.listNewsFilter = this.listNews.filter((item) =>
      item.text.length > textLimit
        ? (item.text = item.text.substring(0, textLimit) + "...")
        : (item.text = "memew")
    );

    this.filterId();
  },
  methods: {
    filterId() {
      //filter id
      const newsId = this.$route.params.id;
      this.listNewsAfterFilterId = this.listNewsFilter.filter(
        (item) => item.id != newsId
      );
    },
  },
};
</script>
