import { defineStore } from "pinia";
import axios from "axios";

export const useTrustedStore = defineStore("trusted", {
  state: () => ({
    loadingTable: true,
    loadingButton: false,
    linkImage: "http://localhost/hepytech-api/public/storage/img/",
    userName: localStorage.getItem("name"),

    //FORM ADD AND UPDATE
    formCreate: false,
    formUpdate: false,

    // LIST DATA TRUSTED
    trustedList: null,
  }),
  getters: {
    initialUserName() {
      return this.userName.substring(0, 1).toUpperCase();
    },
  },
  actions: {
    getTrustedList() {
      axios({
        method: "get",
        url: "http://localhost:8000/api/trusted",
      })
        .then((response) => {
          this.trustedList = response.data.data;
        })
        .catch((error) => {
          swal({
            icon: "error",
            title: "Error",
            text: "Please check your connections",
          });
        })
        .finally(() => {
          this.loadingTable = false;
        });
    },
    imageChange(e) {
      console.log(e.target.files[0]);
    },
  },
});
