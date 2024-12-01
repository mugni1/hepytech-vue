import { defineStore } from "pinia";
import axios from "axios";

export const useFooterStore = defineStore("footer", {
  state: () => ({
    // loading table
    loadingTable: true,
    loadingButton: false,
    userName: localStorage.getItem("name"),
    formUpdate: false,

    // DATA FOOTER
    footerDetail: null,
  }),
  getters: {
    initialUserName() {
      return this.userName.substring(0, 1).toUpperCase();
    },
  },
  actions: {
    getContacDetail() {
      axios({
        method: "get",
        url: "http://localhost:8000/api/footer",
      })
        .then((response) => {
          this.footerDetail = response.data.data[0];
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
  },
});
