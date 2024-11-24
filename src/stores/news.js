import { defineStore } from "pinia";
import axios from "axios";

export const useNews = defineStore("news", {
  state: () => ({
    loading: true,
    listNews: [],
    initialUser: null,
  }),
  getters: {},
  actions: {
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
    newsFilterText(listNews) {
      const textLimit = 80;
      this.listNews = listNews.filter((item) =>
        item.text.length > textLimit
          ? (item.text = item.text.substring(0, textLimit) + "...")
          : item.text
      );
    },
    getInitialUser() {
      this.initialUser = localStorage
        .getItem("name")
        .substring(0, 1)
        .toUpperCase();
    },
  },
});
