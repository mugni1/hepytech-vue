<template>
  <main class="w-full overflow-x-hidden">
    <Navbar />

    <!-- hero section  -->
    <section
      class="container mx-auto w-full flex flex-wrap items-center pt-28 md:pt-20 px-5"
    >
      <div class="w-full md:w-1/2">
        <h1
          style="line-height: 4rem;"
          class="font-semibold text-4xl md:text-5xl mb-5 text-slate-800 hidden md:block"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          Solusi Digital Terbaik di Ujung Jari Anda
        </h1>
        <h1
          style="line-height: 3rem;"
          class="font-semibold text-4xl md:text-5xl mb-5 text-slate-800 md:hidden"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          Solusi Digital Terbaik di Ujung Jari Anda
        </h1>
        <div
          class="text-slate-700 mb-5"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <p>
            Kami melayani pembuatan aplikasi berbasis Mobile, Dekstop dan
            Website.
          </p>
          <p>Ayo wujudkan bisnismu mulai dari sini</p>
        </div>
        <!-- btn -->
        <div class="flex gap-5" data-aos="fade-right" data-aos-duration="1000">
          <button
            class="py-2 px-5 border rounded-full shadow-md font-semibold border-purple-700 bg-purple-700 text-white hover:scale-95 hover:bg-purple-900 hover:shadow-sm transition-all"
          >
            Hubungi Kami
          </button>
          <button
            class="py-2 px-5 border rounded-full shadow-md font-semibold border-purple-700 bg-white text-slate-800 hover:text-white hover:scale-95 hover:bg-purple-900 hover:shadow-sm transition-all"
          >
            Lowongan Kerja
          </button>
        </div>
        <!-- end btn  -->
      </div>
      <div
        class="w-full md:w-1/2 flex items-center justify-center mt-20 md:mt-0"
      >
        <div class="md:w-10/12" data-aos="fade-left" data-aos-duration="1000">
          <img src="/herosection.png" alt="" />
        </div>
      </div>
    </section>
    <!-- end hero secton -->

    <!-- about section -->
    <section
      id="about"
      class="container mx-auto w-full flex flex-wrap-reverse md:flex-wrap items-center pt-20 px-5"
    >
      <!-- column 1 -->
      <div
        class="md:w-6/12 xl:w-4/12 pe-5"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img src="/about.png" alt="" />
      </div>
      <!-- end column 1 -->

      <!-- column 2  -->
      <div class="md:w-6/12 xl:w-8/12">
        <h2
          class="font-bold text-3xl mb-5 text-slate-800"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Tentang Kami
        </h2>
        <p
          data-aos="fade-left"
          data-aos-duration="1000"
          class="text-slate-700 text-base text-justify"
        >
          Hepytech is a software development company mobile-based applications
          (android and IOS), desktop applications and website development.
          Hepytech is a subsidiary of PT. Halo Mepy. It was officially
          established on August 17, 2022.
          <br />
          <br />
          However, the business has been running for more than 3 years before
          the establishment of Hepytech. Hepytech is supported by experienced
          and skilled professional experts in their fields. Relationships both
          internally and externally, honesty and professionalism, as well as
          providing the best solutions & innovations in the field of software
          development are our commitments to provide satisfaction to our
          clients.
        </p>
        <div
          class="w-full py-5 mt-5 flex"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div class="w-4/12 flex flex-wrap">
            <div class="mx-auto w-full">
              <h1 class="font-semibold text-purple-700 text-3xl">
                200+
              </h1>
              <h2 class="text-sm">Clients</h2>
            </div>
          </div>
          <div class="w-4/12 flex flex-wrap">
            <div class="mx-auto w-full">
              <h1 class="font-semibold text-purple-700 text-3xl">
                200+
              </h1>
              <h2 class="text-sm">Project</h2>
            </div>
          </div>
          <div class="w-4/12 flex flex-wrap">
            <div class="mx-auto w-full">
              <h1 class="font-semibold text-purple-700 text-3xl">
                200+
              </h1>
              <h2 class="text-sm">Staff</h2>
            </div>
          </div>
        </div>
      </div>
      <!-- end column 2  -->
    </section>
    <!-- about section -->

    <!-- trust on  -->
    <section
      class="container mx-auto w-full flex flex-wrap pt-20 px-5 overflow-x-hidden overflow-y-hidden"
    >
      <h1
        class="w-full text-center font-bold text-slate-800 text-3xl"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Di Percaya Oleh
      </h1>
      <!-- box -->
      <div
        class="w-full py-5 flex flex-wrap justify-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          class="w-6/12 md:w-2/12 filter grayscale hover:grayscale-0 transition-all hover:ring-1 ring-slate-200 rounded-full hover:shadow-md cursor-pointer flex justify-center items-center"
        >
          <img src="/marquee/bahana.webp" alt="" class="p-5" />
        </div>
        <div
          class="w-6/12 md:w-2/12 filter grayscale hover:grayscale-0 transition-all hover:ring-1 ring-slate-200 rounded-full hover:shadow-md cursor-pointer flex justify-center items-center"
        >
          <img src="/marquee/bukalapak.webp" alt="" class="p-5 w-full" />
        </div>
        <div
          class="w-6/12 md:w-2/12 filter grayscale hover:grayscale-0 transition-all hover:ring-1 ring-slate-200 rounded-full hover:shadow-md cursor-pointer flex justify-center items-center"
        >
          <img src="/marquee/pertamina.webp" alt="" class="p-5" />
        </div>
        <div
          class="w-6/12 md:w-2/12 filter grayscale hover:grayscale-0 transition-all hover:ring-1 ring-slate-200 rounded-full hover:shadow-md cursor-pointer flex justify-center items-center"
        >
          <img src="/marquee/otsuka.webp" alt="" class="p-5" />
        </div>
        <div
          class="w-6/12 md:w-2/12 filter grayscale hover:grayscale-0 transition-all hover:ring-1 ring-slate-200 rounded-full hover:shadow-md cursor-pointer flex justify-center items-center"
        >
          <img src="/marquee/telkomsel.webp" alt="" class="p-5" />
        </div>
        <div
          class="w-6/12 md:w-2/12 filter grayscale hover:grayscale-0 transition-all hover:ring-1 ring-slate-200 rounded-full hover:shadow-md cursor-pointer flex justify-center items-center"
        >
          <img src="/marquee/yamaha.webp" alt="" class="p-5" />
        </div>
        <div
          class="w-6/12 md:w-2/12 filter grayscale hover:grayscale-0 transition-all hover:ring-1 ring-slate-200 rounded-full hover:shadow-md cursor-pointer flex justify-center items-center"
        >
          <img src="/marquee/unilever.webp" alt="" class="p-5" />
        </div>
        <div
          class="w-6/12 md:w-2/12 filter grayscale hover:grayscale-0 transition-all hover:ring-1 ring-slate-200 rounded-full hover:shadow-md cursor-pointer flex justify-center items-center"
        >
          <img src="/marquee/toyota.webp" alt="" class="p-5" />
        </div>
        <div
          class="w-6/12 md:w-2/12 filter grayscale hover:grayscale-0 transition-all hover:ring-1 ring-slate-200 rounded-full hover:shadow-md cursor-pointer flex justify-center items-center"
        >
          <img src="/marquee/unicef.webp" alt="" class="p-5" />
        </div>
      </div>
      <!-- end box -->
    </section>
    <!-- end trust on  -->

    <!-- contac us  -->
    <section
      id="contacus"
      class="overflow-hidden w-full flex items-center mb-20 pt-24"
    >
      <div
        class="container md:px-5 flex flex-wrap mx-auto w-full justify-center"
      >
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          class="h-full w-full md:w-4/12 flex flex-wrap justify-center mb-10"
        >
          <div
            class="w-full text-center mb-8 mx-5 text-3xl font-bold mt-2 text-slate-800"
          >
            Get in touch with us
          </div>
          <div class="w-full flex justify-center gap-5">
            <a
              href=""
              class="rounded-full border h-16 w-16 flex justify-center items-center hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-md"
            >
              <svg
                class="h-10 w-10"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#paint0_radial_87_7153)"
                  ></rect>
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#paint1_radial_87_7153)"
                  ></rect>
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#paint2_radial_87_7153)"
                  ></rect>
                  <path
                    d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                    fill="white"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                    fill="white"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                    fill="white"
                  ></path>
                  <defs>
                    <radialGradient
                      id="paint0_radial_87_7153"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                    >
                      <stop stop-color="#B13589"></stop>
                      <stop offset="0.79309" stop-color="#C62F94"></stop>
                      <stop offset="1" stop-color="#8A3AC8"></stop>
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial_87_7153"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                    >
                      <stop stop-color="#E0E8B7"></stop>
                      <stop offset="0.444662" stop-color="#FB8A2E"></stop>
                      <stop offset="0.71474" stop-color="#E2425C"></stop>
                      <stop
                        offset="1"
                        stop-color="#E2425C"
                        stop-opacity="0"
                      ></stop>
                    </radialGradient>
                    <radialGradient
                      id="paint2_radial_87_7153"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                    >
                      <stop offset="0.156701" stop-color="#406ADC"></stop>
                      <stop offset="0.467799" stop-color="#6A45BE"></stop>
                      <stop
                        offset="1"
                        stop-color="#6A45BE"
                        stop-opacity="0"
                      ></stop>
                    </radialGradient>
                  </defs>
                </g>
              </svg>
            </a>
            <a
              href=""
              class="rounded-full border h-16 w-16 flex justify-center items-center hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-md"
            >
              <svg
                class="h-10 w-10"
                viewBox="0 -4 48 48"
                version="1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>Twitter-color</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Icons"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Color-"
                      transform="translate(-300.000000, -164.000000)"
                      fill="#00AAEC"
                    >
                      <path
                        d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283"
                        id="Twitter"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <a
              href=""
              class="rounded-full border h-16 w-16 flex justify-center items-center hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-md"
            >
              <svg
                class="w-10 h-10"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#3B5998"
                    fill-rule="evenodd"
                    d="M9.94474914,22 L9.94474914,13.1657526 L7,13.1657526 L7,9.48481614 L9.94474914,9.48481614 L9.94474914,6.54006699 C9.94474914,3.49740494 11.8713513,2 14.5856738,2 C15.8857805,2 17.0033128,2.09717672 17.3287076,2.13987558 L17.3287076,5.32020466 L15.4462767,5.32094085 C13.9702212,5.32094085 13.6256856,6.02252733 13.6256856,7.05171716 L13.6256856,9.48481614 L17.306622,9.48481614 L16.5704347,13.1657526 L13.6256856,13.1657526 L13.6845806,22"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          class="w-full md:w-8/12 mb-10 px-5 md:px-0"
        >
          <div class="w-full border p-10 rounded-xl shadow-lg">
            <div class="w-full flex flex-wrap md:flex-nowrap md:mb-10 md:gap-5">
              <div class="relative w-full md:w-1/2 mb-5 md:mb-0">
                <div
                  class="absolute right-2 top-0 bottom-0 flex items-center text-slate-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-current"
                  >
                    <path
                      d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
                    ></path>
                  </svg>
                </div>
                <span
                  class="absolute left-5 -top-3 px-2 bg-white text-slate-600"
                  >Full Name</span
                >
                <input
                  type="text"
                  class="w-full border-2 py-2 ps-2 pe-10 rounded-xl outline-neutral-600"
                />
              </div>
              <div class="relative w-full md:w-1/2 mb-5 md:mb-0">
                <div
                  class="absolute right-2 top-0 bottom-0 flex items-center text-slate-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-current"
                  >
                    <path
                      d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"
                    ></path>
                  </svg>
                </div>
                <span
                  class="absolute left-5 -top-3 px-2 bg-white text-slate-600"
                  >Email Address</span
                >
                <input
                  type="text"
                  class="w-full border-2 py-2 ps-2 pe-10 rounded-xl outline-neutral-600"
                />
              </div>
            </div>
            <div class="w-full flex flex-wrap md:flex-nowrap md:mb-10 md:gap-5">
              <div class="relative w-full md:w-1/2 mb-5 md:mb-0">
                <div
                  class="absolute right-2 top-0 bottom-0 flex items-center text-slate-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-current"
                  >
                    <path
                      d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"
                    ></path>
                  </svg>
                </div>
                <span
                  class="absolute left-5 -top-3 px-2 bg-white text-slate-600"
                  >Mobile Number</span
                >
                <input
                  type="text"
                  class="w-full border-2 py-2 ps-2 pe-10 rounded-xl outline-neutral-600"
                />
              </div>
              <div class="relative w-full md:w-1/2 mb-5 md:mb-0">
                <div
                  class="absolute right-2 top-0 bottom-0 flex items-center text-slate-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-current"
                  >
                    <path
                      d="M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10v16z"
                    ></path>
                    <path
                      d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 .001h2v2H7z"
                    ></path>
                  </svg>
                </div>
                <span
                  class="absolute left-5 -top-3 px-2 bg-white text-slate-600"
                  >City</span
                >
                <input
                  type="text"
                  class="w-full border-2 py-2 ps-2 pe-10 rounded-xl outline-neutral-600"
                />
              </div>
            </div>
            <div class="w-full flex md:gap-5 mb-10">
              <div class="relative w-full">
                <span
                  class="absolute left-5 -top-3 px-2 bg-white text-slate-500"
                  >Message</span
                >
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  class="w-full border-2 py-2 outline-slate-600 rounded-lg px-3"
                ></textarea>
              </div>
            </div>
            <div class="w-full flex md:gap-5">
              <div class="relative w-full flex justify-end">
                <button
                  @click="contacSubmit()"
                  type="submit"
                  class="py-3 px-8 bg-slate-500 hover:bg-orange-600 hover:scale-105 shadow-md md:shadow-lg transition-all rounded-lg text-white font-semibold"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end contac us  -->

    <!-- footer -->
    <Footer />
    <!--end footer -->
  </main>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Footer,
    Navbar,
  },
  methods: {
    contacSubmit() {
      swal({
        icon: "success",
        title: "Success",
        text: "Pesan Berhasil Terkirim",
      });
    },
  },
};
</script>
