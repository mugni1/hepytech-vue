import axios from "axios";
import { defineStore } from "pinia";

export const useAboutStore = defineStore("about", {
  state: () => ({
    // loading table
    loadingTable: true,
    loadingButton: false,
    linkImage: "http://localhost/hepytech-api/public/storage/img/",
    userName: localStorage.getItem("name"),

    //form update
    formUpdate: false,

    // DATA ABOUT DETAIL
    dataAboutDetail: null,
    dataAboutFilter: null,

    // DATA FOR FORM UPDATE
    imageForm: null,
  }),
  getters: {
    initialUserName() {
      return this.userName.substring(0, 1).toUpperCase();
    },
  },
  actions: {
    getAboutDetail() {
      axios({
        method: "get",
        url: "http://localhost:8000/api/about",
      })
        .then((response) => {
          this.dataAboutDetail = response.data.data[0];
          // salin data about ke  data about filter
          this.dataAboutFilter = { ...this.dataAboutDetail };
          this.dataAboutFilter.description = this.textFilter();
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
    textFilter() {
      const limiText = 200;
      if (this.dataAboutFilter.description.length > limiText) {
        return this.dataAboutFilter.description.substring(0, limiText) + "...";
      } else {
        return this.dataAboutFilter.description;
      }
    },
    updateToDatabase(id) {
      this.loadingButton = true;
      axios({
        method: "post",
        url: "http://localhost:8000/api/about/" + id + "/update",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
        data: {
          clients: this.dataAboutDetail.clients,
          project: this.dataAboutDetail.project,
          staff: this.dataAboutDetail.staff,
          description: this.dataAboutDetail.description,
          image: this.imageForm,
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
              this.dataAboutDetail = response.data.data;
              this.dataAboutFilter = { ...this.dataAboutDetail };
              this.dataAboutFilter.description = this.textFilter();
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
    imageChange(e) {
      this.imageForm = e.target.files[0];
    },
  },
});
