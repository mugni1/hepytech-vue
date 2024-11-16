<template>
  <main class="w-full pt-20">
    <section class="container mx-auto px-5 w-full">
      <!-- title  -->
      <h1
        class="font-bold text-2xl py-2 my-3 px-5 text-white rounded-xl shadow-md bg-purple-700 inline-block"
      >
        News Update
      </h1>
      <!-- end title  -->
    </section>

    <!-- list news  -->
    <section class="flex container mx-auto w-full flex-wrap">
      <!-- box card -->
      <div
        class="w-full md:w-6/12 p-5"
        data-aos="fade-right"
        data-aos-duration="1000"
        v-for="(item, index) in listNewsFilter"
      >
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
                {{ item.date }}
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
                {{ item.author }}
              </h4>
            </div>
            <!-- end date and author  -->
          </div>
          <!-- end card body  -->
        </div>
      </div>
      <!-- box card -->
    </section>
    <!-- list news  -->
  </main>
</template>

<script>
export default {
  data() {
    return {
      listNews: [
        {
          title: "Kecelakaan di Jakarta raya",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur recusandae dicta voluptates, at odit alias nobis accusamus a fugit molestias sequi earum, autem facere distinctio fuga eius officiis animi reprehenderit.",
          date: "22-05-2024",
          author: "Admin",
        },
        {
          title: "Beras Plastik",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur recusandae dicta voluptates, at odit alias nobis accusamus a fugit molestias sequi earum, autem facere distinctio fuga eius officiis animi reprehenderit.",
          date: "16-06-2024",
          author: "Lemon",
        },
        {
          title: "Mimi Peri",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur recusandae dicta voluptates, at odit alias nobis accusamus a fugit molestias sequi earum, autem facere distinctio fuga eius officiis animi reprehenderit.",
          date: "23-12-2024",
          author: "Admin",
        },
      ],
      listNewsFilter: null,
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
  },
};
</script>
