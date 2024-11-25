import { defineStore } from "pinia";
import axios from "axios";
import swal from "sweetalert";
import router from "@/router";

export const useNews = defineStore("news", {
  state: () => ({
    loading: true,
    urlImage: "http://localhost/hepytech-api/public/storage/img/",

    // information admin
    initialUser: null,
    nameUser: localStorage.getItem("name"),

    // list news
    listNews: [],

    // NEWS DETAIL
    newsDetail: null,

    //data to store db and update
    nameNews: null,
    textNews: null,
    imageNews: null,
  }),
  getters: {},
  actions: {
    // GET NEWS LIST
    getNewsList() {
      axios({
        method: "get",
        url: "http://localhost:8000/api/news",
      })
        .then((response) => {
          this.newsFilterText(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    // GET NEWS DETAIL
    getNewsDetail(paramsId) {
      axios({
        method: "get",
        url: `http://localhost:8000/api/news/${paramsId}/detail`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => {
          this.newsDetail = response.data.data;
          this.nameNews = response.data.data.name;
          this.textNews = response.data.data.text;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    },
    // CREATE NEWS
    storeToDatabase() {
      axios({
        method: "post",
        url: "http://localhost:8000/api/news/create",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
        data: {
          name: this.nameNews,
          text: this.textNews,
          image: this.imageNews,
        },
      })
        .then((response) => {
          swal({
            icon: "success",
            title: "Success create news",
          }).then((succes) => {
            router.push({ name: "adminNewsList" });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // UPDATE NEWS
    updateToDatabase(paramsId) {
      axios({
        method: "post",
        url: `http://localhost:8000/api/news/${paramsId}/update`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
        data: {
          name: this.nameNews,
          text: this.textNews,
          image: this.imageNews,
          _method: "put",
        },
      })
        .then((response) => {
          swal({
            icon: "success",
            text: "Update success",
          }).then((isTrue) => {
            if (isTrue) {
              router.push({ name: "adminNewsList" });
            }
          });
        })
        .catch((error) => {
          swal({
            icon: "error",
            text: "Update failed",
          });
        });
    },
    imageChange(e) {
      this.imageNews = e.target.files[0];
    },
    //DELETE NEWS
    dropNews(id, index) {
      swal({
        icon: "warning",
        title: "Warning",
        text: "Do you want to delete",
        buttons: true,
        dangerMode: true,
      }).then((isTrue) => {
        if (isTrue) {
          axios({
            method: "delete",
            url: `http://localhost:8000/api/news/${id}/delete`,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
            .then((response) => {
              this.listNews.splice(index, 1);
              swal({
                icon: "success",
                title: "Success delete",
              });
            })
            .catch((error) => {
              swal({
                icon: "error",
                title: "Error",
              });
            });
        } else {
          swal({
            title: "Cancel Delete",
          });
        }
      });
    },
    // filter text
    newsFilterText(listNews) {
      const textLimit = 80;
      this.listNews = listNews.filter((item) =>
        item.text.length > textLimit
          ? (item.text = item.text.substring(0, textLimit) + "...")
          : item.text
      );
    },
    // get initial for heading
    getInitialUser() {
      this.initialUser = localStorage
        .getItem("name")
        .substring(0, 1)
        .toUpperCase();
    },
  },
});
