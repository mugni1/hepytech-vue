import router from "@/router";
import axios from "axios";
import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", {
  state: () => ({}),
  getters: {},
  actions: {
    getMe() {
      if (localStorage.getItem("token") == null) {
        router.push({ name: "login" });
      } else {
        axios({
          method: "get",
          url: "http://localhost:8000/api/me",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((response) => {
            this.nameUser = response.data.data.name;
          })
          .catch((error) => {
            localStorage.clear();
            router.push({ name: "login" });
          });
      }
    },
  },
});
