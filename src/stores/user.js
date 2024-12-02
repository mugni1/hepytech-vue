import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    loadingTable: true,
    listUser: [],
  }),
  getters: {},
  actions: {
    getUserList() {
      axios({
        method: "get",
        url: "http://localhost:8000/api/user",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          this.listUser = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loadingTable = false;
        });
    },
  },
});
