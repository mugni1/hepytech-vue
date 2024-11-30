import { defineStore } from "pinia";
import axios from "axios";
import swal from "sweetalert";
import router from "@/router";

export const useHomeStore = defineStore("home", {
  state: () => ({
    // loading table
    loadingTable: true,
    loadingButton: false,
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
    updateToDatabase(id) {
      this.loadingButton = true;
      axios({
        method: "post",
        url: `http://localhost:8000/api/home/${id}/update`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
        data: {
          title: this.titleForm,
          description: this.descriptionForm,
          link_contac: this.linkContacForm,
          link_job_vacancy: this.linkJobForm,
          image: this.imageForm,
          _method: "put",
        },
      })
        .then((response) => {
          swal({
            icon: "success",
            title: "Success",
          }).then((isTrue) => {
            if (isTrue) {
              this.formUpdate = false;
              this.dataHomeDetail = response.data.data;
            }
          });
        })
        .catch((error) => {
          swal({
            icon: "error",
            title: "Error",
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
