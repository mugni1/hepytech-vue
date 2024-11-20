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
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/#about">About</router-link></li>
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li><router-link to="/career">Career</router-link></li>
          <li><router-link to="/hepynews">HepyNews</router-link></li>
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
        class="text-base md:hidden font-semibold h-screen w-6/12 top-0 absolute right-0 bg-white"
      >
        <button
          @click="navLinkHidden()"
          class="h-20 w-full flex items-center justify-end md:hidden text-slate-500"
        >
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
        <ul class="md:flex gap-5 text-slate-800">
          <li>
            <router-link
              class="ps-2 py-2 hover:bg-purple-700 hover:text-white w-full block"
              to="/"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              class="ps-2 py-2 hover:bg-purple-700 hover:text-white w-full block"
              to="/#about"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              class="ps-2 py-2 hover:bg-purple-700 hover:text-white w-full block"
              to="/portfolio"
              >Portfolio</router-link
            >
          </li>
          <li>
            <router-link
              class="ps-2 py-2 hover:bg-purple-700 hover:text-white w-full block"
              to="/career"
              >Career</router-link
            >
          </li>
          <li>
            <router-link
              class="ps-2 py-2 hover:bg-purple-700 hover:text-white w-full block"
              to="/hepynews"
              >HepyNews</router-link
            >
          </li>
          <li>
            <router-link
              class="ps-2 py-2 hover:bg-purple-700 hover:text-white w-full block"
              to="/#contacus"
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
