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

    // DATA FORM
    titleForm: null,
    linkContacForm: null,
    linkJobForm: null,
    descriptionForm: null,
    imageForm: null,
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
          this.titleForm = response.data.data[0].title;
          this.linkContacForm = response.data.data[0].link_contac;
          this.linkJobForm = response.data.data[0].link_job_vacancy;
          this.descriptionForm = response.data.data[0].description;
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
    updateToDatabase() {},
    imageChange(e) {
      this.imageForm = e.target.files[0];
      console.log(this.imageForm);
    },
  },
});
