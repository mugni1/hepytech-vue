<template>
  <section class="flex w-full min-h-screen items-center justify-center px-5">
    <div
      action=""
      class="p-5 border w-full flex flex-wrap md:w-3/12 shadow-md rounded-xl"
    >
      <!-- title  -->
      <h2 class="text-center font-bold text-2xl w-full my-5 text-purple-700">
        Login Admin
      </h2>
      <!-- end title -->
      <!-- email  -->
      <div class="w-full flex flex-wrap my-1">
        <label
          v-if="messageEmail == 'has valid'"
          for=""
          class="font-semibold text-green-600"
          >Email {{ messageEmail }}</label
        >
        <label
          v-if="messageEmail == 'not valid'"
          for=""
          class="font-semibold text-red-600"
          >Email {{ messageEmail }}</label
        >
        <input
          type="email"
          name=""
          id=""
          class="w-full border p-1 rounded-md outline-none"
          placeholder="abankr342@gmail.com"
          v-model="inputEmail"
        />
      </div>
      <!-- end email  -->

      <!-- password  -->
      <div class="w-full flex flex-wrap mt-1 mb-5">
        <label for="" class="font-semibold text-slate-800">Password</label>
        <!-- type password  -->
        <div v-if="typePassword" class="w-full relative h-8">
          <input
            type="password"
            name=""
            id=""
            v-model="inputPassword"
            class="w-full border py-1 ps-1 pe-8 rounded-md absolute outline-none"
            placeholder="contoh123"
          />
          <button
            @click="showPw()"
            class="h-full absolute right-0 items-center p-1"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAd9JREFUSEvt1EuojlEUBuDnoCShKEkRynVCmGBCDMiAkWsM5DJkRklnYGKGYkKZIDFzyUhyiwFSysQtSbkMKKTc7VX76Du77z979M/OV3+7f++117ved71r9+jy19Pl/AYBqgrXJJqIjViNyZiQM77Da1zBGXzohNQJYCwOYldah1bK/IXjOIAvZWwbwGxcQ1T/I60ncA/P8i9yTMcMLMHOXMRLLMvM/uOUAFPwAONwF1vxosJgZgI8iwV4k2RbiPd9d5oAw5LW9zEPt7ACP3PgNBzDSnxN/TiFPQ3gEZnl3MTiJpa2AezFIbzCfHxqJLiKVQWTowVImOARon/B/HTENxmEhlNT0JoEcKlI9qeIjeNo6OgibjtO4mGWqh/AE8zB+rReKC5+xqhirw1gc7btY4Rc/QA24FxuVBx+bCQ8kiTbXZEoXBcSjcdaXCwBhqTG3sEi3M6W+12AbMv/yyYPz66L3l1P95e3NTn2xuQZCKsF2Jbc9IGc2rTpjTz13zoBxP7I5OnLmUEMWkxp2PcpniPsHLadhcXYkQctjLEO35vVdHoq4nnoTXOwHyHdQF8UsS+xP9wWVHvsJqXKN+UB63vs/qY36m2WLpieb05uCVIDqBRfPx4EqGrUdYn+AW7RVxkKyEc6AAAAAElFTkSuQmCC"
            />
          </button>
        </div>
        <!-- end type password  -->
        <!-- type string  -->
        <div v-else class="w-full relative h-8">
          <input
            type="text"
            name=""
            id=""
            v-model="inputPassword"
            class="w-full border py-1 ps-1 pe-8 rounded-md absolute outline-none"
          />
          <div
            @click="hidePw()"
            class="h-full absolute right-0 items-center p-1"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAiBJREFUSEu11Unoz0EYx/EXLiglSyGUshQXspSUrRQ5kAtRLkpxVU44KRcHDuSAgyVyQUnJwRpFiOwkiayR5GLLPJrfvzF9/0v5mcu3Zp6Z93w+z/PMt5f/PHr95/PVgI04gDftApeA9diFR5iNd+2AlIBhuISxeJgh7/8VUls0HBcwDnewFIvydwxiPUZY+AKn0oUOdaW2Kcmlkp4I+JGt3Ywv9YbOqqhUEns24Tzu5QNC4XjMwlr0wbOkfl5W1sGpASOyJfuyHS27HuTNbxskTUiWHsZUvEy2TUNHXAnojYv5VotxuoLEpiH4gJ3YVsD64Qom41w6Z35rrQRswPYsNW7xKQdFTgIctpRjK8L31hiNWxiUzliNg7FQAl4hLFqG49VhdU5iOeJHVnFr0txeXE8OzKgBdzEJy3Gswesa8hGDq7glyaYTuJ/P+kvBChzJiZqSva45JSQSOr14VkLNzVSyQ7EQZ2oFkeTLaWFm7ugouZ8NSsqcPM4dH3FRcROxJ1XRuqYkx9zAVEVnc6nFsxHJet6NXU/QF6NwNVXRHHzvDBDzA3Ay1/037MY1xG2f4nPeXOckmnABXpcX6qyTozO35DKsY35hFY5WfXI7X6pV3n843f1wQvbKnLSo8/C/P75mK25kSPRJvMLR8XPLx687QIP9jVPlAxn/k8jDn+eiXYA4q8xJNNz+dgNakGjUHV1VUU9t6VFcOy1qBP4Gk99tGZQgg34AAAAASUVORK5CYII="
            />
          </div>
        </div>
        <!-- end type string  -->
      </div>
      <!-- end password  -->

      <!-- btn  -->
      <button
        v-if="statusSubmit == true"
        @click="submit()"
        class="w-full py-2 bg-purple-700 font-bold rounded-xl text-white hover:bg-purple-900 active:ring-4 ring-purple-600"
        :disabled="loadingSubmit"
      >
        <span v-if="loadingSubmit == true">Loading</span>
        <span v-if="loadingSubmit == false">Submit</span>
      </button>
      <!-- end btn  -->
      <!-- btn  -->
      <button
        v-if="statusSubmit == false"
        @click="submit()"
        class="w-full py-2 bg-slate-500 font-bold rounded-xl text-white hover:bg-slate-700"
        :disabled="!statusSubmit"
      >
        <span v-if="loadingSubmit == true">Loading</span>
        <span v-if="loadingSubmit == false">Submit</span>
      </button>
      <!-- end btn  -->

      <!-- back to home  -->
      <router-link to="/" class="mx-auto mt-3 text-purple-600"
        >Back to home</router-link
      >
      <!-- end back to home  -->
    </div>
  </section>
</template>

<script>
import router from "@/router";
import axios from "axios";
import swal from "sweetalert";
import AdminDashboardView from "./AdminDashboardView.vue";
export default {
  data() {
    return {
      typePassword: true,
      messageEmail: null,
      inputEmail: null,
      inputPassword: null,
      statusSubmit: false,
      loadingSubmit: false,
    };
  },

  methods: {
    showPw() {
      this.typePassword = false;
    },
    hidePw() {
      this.typePassword = true;
    },
    submit() {
      this.loadingSubmit = true;
      axios({
        method: "post",
        url: "http://localhost:8000/api/login/auth",
        data: {
          email: this.inputEmail,
          password: this.inputPassword,
        },
      })
        .then((response) => {
          // show alert
          swal({
            title: "Login Succesfully ",
            text: `Welcome to dashboar ${response.data.data.name}`,
            icon: "success",
          }).finally(() => {
            router.push({ name: "adminDashboard" });
          });
          // set local storage
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("name", response.data.data.name);
          localStorage.setItem("email", response.data.data.email);
          localStorage.setItem("role_id", response.data.data.role_id);
        })
        .catch((error) => {
          // show alert
          swal({
            title: "Error",
            text: "Incorrect email or password",
            icon: "error",
          });
        })
        .finally(() => {
          this.loadingSubmit = false;
        });
    },
  },
  watch: {
    inputEmail(value) {
      let regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (regex.test(value)) {
        this.messageEmail = "has valid";
        this.statusSubmit = true;
      } else {
        this.messageEmail = "not valid";
        this.statusSubmit = false;
      }
    },
  },
};
</script>
