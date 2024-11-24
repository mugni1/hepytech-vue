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

    //data to store db
    nameNews: null,
    textNews: null,
    imageNews: null,
  }),
  getters: {},
  actions: {
    // Get News List
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
    // Store new News
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
