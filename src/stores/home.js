import { defineStore } from "pinia";
import axios from "axios";

export const useHomeStore = defineStore("home", {
  state: () => ({
    // loading table
    loadingTable: true,
    linkImage: "http://localhost/hepytech-api/public/storage/img/",
    userName: localStorage.getItem("name"),

    // form update
    formUpdate: false,
    // Home Detail
    dataHomeDetail: null,
  }),
  getters: {
    initialUserName() {
      return this.userName.substring(0, 1).toUpperCase();
    },
  },
  actions: {
    getHomeDetail() {
      axios({
        method: "get",
        url: "http://localhost:8000/api/home",
      })
        .then((response) => {
          this.dataHomeDetail = response.data.data[0];
        })
        .catch((error) => {
          swal({
            icon: "error",
            title: "Error Connection",
            text: "Please check your connections",
          });
        })
        .finally(() => {
          this.loadingTable = false;
        });
    },
  },
});
