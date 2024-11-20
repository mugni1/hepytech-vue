import { defineStore } from "pinia";
import axios from "axios";

export const useNews = defineStore("news", {
  state: () => ({
    loading: true,
    listNews: [],
    listNewsFilter: null,
  }),
  getters: {},
  actions: {
    getNewsList() {
      axios({
        method: "get",
        url: "http://localhost:8000/api/news",
      })
        .then((response) => {
          this.listNews = response.data.data;
          this.newsFilterText();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    newsFilterText() {
      const textLimit = 80;
      this.listNewsFilter = this.listNews.filter((item) =>
        item.text.length > textLimit
          ? (item.text = item.text.substring(0, textLimit) + "...")
          : item.text
      );
    },
  },
});
