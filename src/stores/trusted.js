import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";

export const useTrustedStore = defineStore("trusted", {
  state: () => ({
    loadingTable: true,
    loadingButton: false,
    linkImage: "http://localhost/hepytech-api/public/storage/img/",
    userName: localStorage.getItem("name"),

    //FORM ADD AND UPDATE
    formCreate: false,
    formUpdate: false,

    // MODEL FOR FORM CREATE
    linkCreate: null,
    imageCreate: null,

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
    storeToDatabase() {
      this.loadingButton = true;
      axios({
        method: "post",
        url: "http://localhost:8000/api/trusted/create",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
        data: {
          image: this.imageCreate,
          link: this.linkCreate,
        },
      })
        .then((response) => {
          swal({
            icon: "success",
            title: "Success update",
          }).then((isTrue) => {
            if (isTrue) {
              this.formCreate = false;
              this.trustedList.push(response.data.data);
            }
          });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loadingButton = false;
        });
    },
    updateToDatabase() {},
    deleteFromDatabase(index, id) {
      swal({
        icon: "warning",
        title: "Warning",
        text: "Are you sure delete this item?",
        dangerMode: true,
        buttons: true,
      }).then((isTrue) => {
        if (isTrue) {
          axios({
            method: "delete",
            url: "http://localhost:8000/api/trusted/" + id + "/delete",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
            .then((response) => {
              this.trustedList.splice(index, 1);
              swal({
                icon: "success",
                title: "Delete Success",
              });
            })
            .catch((error) => {
              swal({
                icon: "error",
                title: "Error",
                text: "Please Try Again Later",
              });
            });
        }
      });
    },
    imageChange(e) {
      this.imageCreate = e.target.files[0];
    },
  },
});
