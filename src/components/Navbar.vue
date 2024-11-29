<template>
  <header
    class="w-full h-20 border-b shadow-md flex justify-between items-center fixed fixed-top bg-white z-50"
  >
    <nav
      class="mx-auto container flex h-full w-full justify-between items-center px-5"
    >
      <!-- brand  -->
      <div class="font-bold text-xl text-slate-900">
        <span class="text-orange-600">Hepy</span
        ><span class="text-purple-700">Tech!</span>
      </div>
      <!-- end brand  -->

      <!-- FOR MD ++++  -->
      <!-- nav link item -->
      <div class="text-base font-semibold hidden md:block">
        <ul class="flex gap-5 text-slate-800">
          <li>
            <router-link
              class="px-2 py-1 hover:bg-purple-700 hover:text-white w-full block rounded-lg transition-all"
              to="/"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              class="px-2 py-1 hover:bg-purple-700 hover:text-white w-full block rounded-lg transition-all"
              to="/#about"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              class="px-2 py-1 hover:bg-purple-700 hover:text-white w-full block rounded-lg transition-all"
              to="/portfolio"
              >Portfolio</router-link
            >
          </li>
          <li>
            <router-link
              class="px-2 py-1 hover:bg-purple-700 hover:text-white w-full block rounded-lg transition-all"
              to="/career"
              >Career</router-link
            >
          </li>
          <li>
            <router-link
              class="px-2 py-1 hover:bg-purple-700 hover:text-white w-full block rounded-lg transition-all"
              to="/hepynews"
              >HepyNews</router-link
            >
          </li>
        </ul>
      </div>
      <!-- end nav link item  -->

      <!-- contac us only md  -->
      <button
        class="py-2 px-5 border rounded-full shadow-md font-semibold bg-purple-700 text-white hover:scale-95 hover:bg-purple-900 hover:shadow-sm hidden md:block"
      >
        <router-link to="/#contacus">Contac US</router-link>
      </button>
      <!-- end contac us only md  -->
      <!-- FOR MD ++++  -->

      <!-- FOR MOBILE  -->
      <!-- nav link item -->
      <div
        v-if="navLink"
        data-aos="fade-left"
        class="text-base md:hidden font-semibold h-screen w-6/12 top-0 absolute right-0 bg-white shadow-lg"
      >
        <button
          @click="navLinkHidden()"
          class="h-20 w-full flex items-center justify-between md:hidden text-slate-500"
        >
          <span class="ps-3 text-lg">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-11 w-11 mx-5 fill-current"
          >
            <path
              d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
            ></path>
          </svg>
        </button>
        <ul class="md:flex gap-5 text-slate-700">
          <li>
            <router-link
              class="ps-2 py-2 hover:bg-purple-700 hover:text-white w-full flex items-center gap-1 transition-all"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"
                ></path>
              </svg>
              Home</router-link
            >
          </li>
          <li>
            <router-link
              class="ps-2 py-2 hover:bg-purple-700 hover:text-white w-full flex items-center transition-all gap-1"
              to="/#about"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="M15 11h7v2h-7zm1 4h6v2h-6zm-2-8h8v2h-8zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2zm4-7c1.995 0 3.5-1.505 3.5-3.5S9.995 5 8 5 4.5 6.505 4.5 8.5 6.005 12 8 12z"
                ></path>
              </svg>
              About</router-link
            >
          </li>
          <li>
            <router-link
              class="ps-2 py-2 hover:bg-purple-700 hover:text-white w-full flex items-center gap-1 transition-all"
              to="/portfolio"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="M16 3H8c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM2 7v10c0 1.103.897 2 2 2V5c-1.103 0-2 .897-2 2zm18-2v14c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z"
                ></path></svg
              >Portfolio</router-link
            >
          </li>
          <li>
            <router-link
              class="ps-2 py-2 hover:bg-purple-700 hover:text-white w-full flex items-center gap-1 transition-all"
              to="/career"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path d="M7 14.001h2v2H7z"></path>
                <path
                  d="M19 2h-8a2 2 0 0 0-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2zM5 20v-8h6v8H5zm9-12h-2V6h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2z"
                ></path></svg
              >Career</router-link
            >
          </li>
          <li>
            <router-link
              class="ps-2 py-2 hover:bg-purple-700 hover:text-white w-full flex items-center gap-1 transition-all"
              to="/hepynews"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="M20 17a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13a2 2 0 0 0 2 2h15c1.654 0 3-1.346 3-3V7h-2v10zM12 7h3v2h-3V7zm0 4h3v2h-3v-2zM5 7h5v6H5V7zm0 10v-2h10v2H5z"
                ></path></svg
              >HepyNews</router-link
            >
          </li>
          <li>
            <router-link
              class="ps-2 py-2 hover:bg-purple-700 hover:text-white w-full flex items-center gap-1 transition-all"
              to="/#contacus"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0 1 13 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z"
                ></path></svg
              >Contac Us</router-link
            >
          </li>
        </ul>
      </div>
      <!-- end nav link item  -->
      <!-- burger for mobile  -->
      <div
        @click="navLinkShow()"
        class="h-11 w-11 text-slate-500 active:bg-slate-400 rounded-md md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
        </svg>
      </div>
      <!-- burger for mobile  -->
      <!-- END FOR MOBILE  -->
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navLink: false,
    };
  },
  methods: {
    navLinkShow() {
      this.navLink = true;
    },
    navLinkHidden() {
      this.navLink = false;
    },
  },
};
</script>
