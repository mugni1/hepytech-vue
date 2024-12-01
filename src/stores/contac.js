import { defineStore } from "pinia";
import axios from "axios";

export const useContacStore = defineStore("contac", {
  state: () => ({
    // loading table
    loadingTable: true,
    loadingButton: false,
    userName: localStorage.getItem("name"),

    formUpdate: false,

    // DATA CONTAC
    contacDetail: null,
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
        url: "http://localhost:8000/api/contac",
      })
        .then((response) => {
          this.contacDetail = response.data.data[0];
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
    updateToDatabase(id) {
      this.loadingButton = true;
      axios({
        method: "post",
        url: "http://localhost:8000/api/contac/" + id + "/update",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: {
          facebook: this.contacDetail.facebook,
          instagram: this.contacDetail.instagram,
          x: this.contacDetail.x,
          _method: "put",
        },
      })
        .then((response) => {
          swal({
            icon: "success",
            title: "Success update",
          }).then((isTrue) => {
            if (isTrue) {
              this.formUpdate = false;
            }
          });
        })
        .catch((error) => {
          swal({
            icon: "error",
            title: "Error, Please Try again later",
          });
        })
        .finally(() => {
          this.loadingButton = false;
        });
    },
  },
});
