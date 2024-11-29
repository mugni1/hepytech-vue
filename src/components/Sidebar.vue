<template>
  <!-- SIDE BAR  -->
  <section class="w-2/12 min-h-screen bg-white shadow-md fixed z-50">
    <!-- BRAND  -->
    <div class="font-bold text-slate-700 text-2xl px-5 mt-5">
      <span class="text-orange-600">Hepy</span
      ><span class="text-purple-700">Tech!</span>
    </div>
    <!-- END BRAND  -->

    <!-- TITLE DASHBOARD -->
    <h1 class="my-5 font-semibold text-slate-500 px-5">Dashboard</h1>
    <!-- END TITLE DASHBOARD  -->

    <!-- NAVIGASI LINK  -->
    <ul class="text-slate-600">
      <li class="my-2">
        <router-link
          to=""
          class="flex items-center px-5 hover:bg-purple-500 hover:text-white py-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            class="fill-current me-2"
          >
            <path
              d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"
            ></path>
          </svg>
          <span>User</span>
        </router-link>
      </li>
      <li class="my-2 relative">
        <!-- btn dropdown  -->
        <button
          v-if="showDropdown == false"
          @click="activeDatabase()"
          class="flex items-center w-full px-5 hover:bg-purple-500 hover:text-white py-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            class="fill-current me-2"
          >
            <path
              d="M20 6c0-2.168-3.663-4-8-4S4 3.832 4 6v2c0 2.168 3.663 4 8 4s8-1.832 8-4V6zm-8 13c-4.337 0-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3c0 2.168-3.663 4-8 4z"
            ></path>
            <path
              d="M20 10c0 2.168-3.663 4-8 4s-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3z"
            ></path>
          </svg>
          <span>Database</span>
        </button>
        <button
          v-if="showDropdown == true"
          @click="nonactiveDatabase()"
          class="flex items-center w-full px-5 hover:bg-purple-500 hover:text-white py-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            class="fill-current me-2"
          >
            <path
              d="M20 6c0-2.168-3.663-4-8-4S4 3.832 4 6v2c0 2.168 3.663 4 8 4s8-1.832 8-4V6zm-8 13c-4.337 0-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3c0 2.168-3.663 4-8 4z"
            ></path>
            <path
              d="M20 10c0 2.168-3.663 4-8 4s-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3z"
            ></path>
          </svg>
          <span>Database</span>
        </button>
        <!-- end btn dropdown  -->
        <!-- dropdown  -->
        <ul v-if="showDropdown" class="ps-10 overflow-hidden absolute w-full">
          <li data-aos="fade-down" class="flex">
            <router-link
              class="flex w-full hover:bg-slate-400 hover:text-white rounded-s-lg items-center"
              to="/admin/home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
                ></path>
              </svg>
              <span>Home</span>
            </router-link>
          </li>
          <li data-aos="fade-down" class="flex">
            <router-link
              class="flex w-full hover:bg-slate-400 hover:text-white rounded-s-lg items-center"
              to="/admin/portfolio-list"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
                ></path>
              </svg>
              <span>About</span>
            </router-link>
          </li>
          <li data-aos="fade-down" class="flex">
            <router-link
              class="flex w-full hover:bg-slate-400 hover:text-white rounded-s-lg items-center"
              to="/admin/portfolio-list"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
                ></path>
              </svg>
              <span>Trusted on</span>
            </router-link>
          </li>
          <li data-aos="fade-down" class="flex">
            <router-link
              class="flex w-full hover:bg-slate-400 hover:text-white rounded-s-lg items-center"
              to="/admin/portfolio-list"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
                ></path>
              </svg>
              <span>Contac us</span>
            </router-link>
          </li>
          <li data-aos="fade-down" class="flex">
            <router-link
              class="flex w-full hover:bg-slate-400 hover:text-white rounded-s-lg items-center"
              to="/admin/portfolio-list"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
                ></path>
              </svg>
              <span>Footer</span>
            </router-link>
          </li>
          <li data-aos="fade-down">
            <router-link
              class="flex w-full hover:bg-slate-400 hover:text-white rounded-s-lg items-center"
              to="/admin/news-list"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
                ></path>
              </svg>
              <span>News</span>
            </router-link>
          </li>
          <li data-aos="fade-down" class="flex">
            <router-link
              class="flex w-full hover:bg-slate-400 hover:text-white rounded-s-lg items-center"
              to="/admin/portfolio-list"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
                ></path>
              </svg>
              <span>Portfolio</span>
            </router-link>
          </li>
        </ul>
        <!-- end dropdown  -->
      </li>
      <li :class="`my-2 transition-all ${animateLinkLogout}`">
        <router-link
          to=""
          class="flex items-center px-5 hover:bg-purple-500 hover:text-white py-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            class="fill-current me-2"
          >
            <path
              d="M18 2H6a1 1 0 0 0-1 1v9l5-4v3h6v2h-6v3l-5-4v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"
            ></path>
          </svg>
          <span>Logout</span>
        </router-link>
      </li>
    </ul>
    <!-- END NAVIGASI LINK   -->
  </section>
  <!-- END SIDE BAR  -->
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
      nameAdmin: localStorage.getItem("name"),
      animateLinkLogout: null,
    };
  },
  methods: {
    activeDatabase() {
      this.animateLinkLogout = "translate-y-40";
      this.showDropdown = true;
    },
    nonactiveDatabase() {
      this.animateLinkLogout = null;
      this.showDropdown = false;
    },
  },
};
</script>
