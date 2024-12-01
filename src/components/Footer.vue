<template>
  <footer
    v-if="
      useFooterStore().footerDetail == null ||
      useFooterStore().footerDetail == ''
    "
    class="w-full border-t bg-slate-800 pt-10"
  >
    <div class="container mx-auto px-5 flex flex-wrap">
      <!-- {{ --Brand-- }} -->
      <h1 class="w-full font-bold text-white text-2xl md:text-2xl pt-5 pb-10">
        HEPYTECH
      </h1>
      <!-- {{-- End Brand --}} -->

      <!-- {{-- Quick Menu--}} -->
      <div class="w-full md:w-4/12 mb-10">
        <h1 class="font-bold text-slate-200 text-xl pb-4">Quick Menu</h1>
        <ul class="text-slate-300 text-sm">
          <li class="flex items-center pb-2">
            <svg
              class="h-5 w-5 fill-current me-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"
              ></path></svg
            >Home
          </li>
          <li class="flex items-center pb-2">
            <svg
              class="h-5 w-5 fill-current me-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"
              ></path></svg
            >FAQ
          </li>
          <li class="flex items-center pb-2">
            <svg
              class="h-5 w-5 fill-current me-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"
              ></path></svg
            >Tutorial
          </li>
        </ul>
      </div>
      <!-- {{--Quick Menu --}} -->

      <!-- {{ --Information-- }} -->
      <div class="w-full md:w-4/12 mb-10">
        <h1 class="font-bold text-slate-200 text-xl flex pb-4">
          Information
        </h1>
        <div class="text-sm text-slate-300">
          <div class="pb-2">IT Solution for Your Busines</div>
          <div class="pb-2">
            summarecon mb06, Rancabolang, Kec. Gedebage, Kota Bandung, Jawa
            Barat 40129
          </div>
        </div>
      </div>
      <!-- {{-- End Information --}} -->

      <!-- {{-- Social Media --}} -->
      <div class="w-full md:w-4/12 mb-10 flex justify-start md:justify-center">
        <div class="w-full gap-5 flex md:justify-end">
          <a href="" class="text-slate-400 hover:text-sky-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="fill-current w-10 h-10"
            >
              <path
                d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"
              ></path>
            </svg>
          </a>
          <a href="" class="text-slate-400 hover:text-purple-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="fill-current w-10 h-10"
            >
              <path
                d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"
              ></path>
              <circle cx="11.994" cy="11.979" r="3.003"></circle>
            </svg>
          </a>
          <a href="" class="text-slate-400 hover:text-sky-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="fill-current w-10 h-10"
            >
              <path
                d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <!-- {{-- End Social Media --}} -->
    </div>

    <!-- {{ --hr-- }} -->
    <div class="w-full border-t border-slate-400"></div>
    <!-- {{-- end hr --}} -->

    <!-- {{ --Edn-- }} -->
    <div
      class="container mx-auto py-4 flex flex-wrap items-center justify-center md:justify-center px-5"
    >
      <h1
        class="text-sm md:text-sm font-semibold inter pb-3 md:pb-0 text-slate-400"
      >
        Copyright&copy;2024
      </h1>
    </div>
    <!-- {{ --End-- }} -->
  </footer>

  <footer v-else class="w-full border-t bg-slate-800 pt-10">
    <div class="container mx-auto px-5 flex flex-wrap">
      <!-- {{ --Brand-- }} -->
      <h1 class="w-full font-bold text-white text-2xl md:text-2xl pt-5 pb-10">
        {{ useFooterStore().footerDetail.brand }}
      </h1>
      <!-- {{-- End Brand --}} -->

      <!-- {{-- Quick Menu--}} -->
      <div class="w-full md:w-4/12 mb-10">
        <h1 class="font-bold text-slate-200 text-xl pb-4">Quick Menu</h1>
        <ul class="text-slate-300 text-sm">
          <li class="flex items-center pb-2">
            <svg
              class="h-5 w-5 fill-current me-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"
              ></path></svg
            >Home
          </li>
          <li class="flex items-center pb-2">
            <svg
              class="h-5 w-5 fill-current me-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"
              ></path></svg
            >FAQ
          </li>
          <li class="flex items-center pb-2">
            <svg
              class="h-5 w-5 fill-current me-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"
              ></path></svg
            >Tutorial
          </li>
        </ul>
      </div>
      <!-- {{--Quick Menu --}} -->

      <!-- {{ --Information-- }} -->
      <div class="w-full md:w-4/12 mb-10">
        <h1 class="font-bold text-slate-200 text-xl flex pb-4">
          Information
        </h1>
        <div class="text-sm text-slate-300">
          <div class="pb-2">
            {{ useFooterStore().footerDetail.text_information }}
          </div>
          <div class="pb-2">
            {{ useFooterStore().footerDetail.address }}
          </div>
        </div>
      </div>
      <!-- {{-- End Information --}} -->

      <!-- {{-- Social Media --}} -->
      <div class="w-full md:w-4/12 mb-10 flex justify-start md:justify-center">
        <div class="w-full gap-5 flex md:justify-end">
          <a
            :href="`${useFooterStore().footerDetail.link_facebook}`"
            target="_blank"
            class="text-slate-400 hover:text-sky-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="fill-current w-10 h-10"
            >
              <path
                d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"
              ></path>
            </svg>
          </a>
          <a
            :href="`${useFooterStore().footerDetail.link_instagram}`"
            target="_blank"
            class="text-slate-400 hover:text-purple-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="fill-current w-10 h-10"
            >
              <path
                d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"
              ></path>
              <circle cx="11.994" cy="11.979" r="3.003"></circle>
            </svg>
          </a>
          <a
            :href="`${useFooterStore().footerDetail.link_linkedin}`"
            target="_blank"
            class="text-slate-400 hover:text-sky-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="fill-current w-10 h-10"
            >
              <path
                d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <!-- {{-- End Social Media --}} -->
    </div>

    <!-- {{ --hr-- }} -->
    <div class="w-full border-t border-slate-400"></div>
    <!-- {{-- end hr --}} -->

    <!-- {{ --Edn-- }} -->
    <div
      class="container mx-auto py-4 flex flex-wrap items-center justify-center md:justify-center px-5"
    >
      <h1
        class="text-sm md:text-sm font-semibold inter pb-3 md:pb-0 text-slate-400"
      >
        {{ useFooterStore().footerDetail.copyright }}
      </h1>
    </div>
    <!-- {{ --End-- }} -->
  </footer>
</template>

<script>
import { useFooterStore } from "@/stores/footer";
export default {
  setup() {
    return {
      useFooterStore,
    };
  },
  mounted() {
    useFooterStore().getContacDetail();
  },
};
</script>
