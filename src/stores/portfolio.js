import { defineStore } from "pinia";
import axios from "axios";

export const usePortfolioStore = defineStore("portfolio", {
  state: () => ({
    listPortfolio: [],
    listPortfolioFilter: null,
    showList: true,
    loading: true,
  }),

  getters: {},

  actions: {
    // fetch list portfolio from api
    getListPort() {
      axios({
        method: "get",
        url: "http://localhost:8000/api/portfolio",
      })
        .then((response) => {
          this.listPortfolio = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },

    all() {
      this.showList = true;
    },
    onlyWebsite() {
      this.listPortfolioFilter = this.listPortfolio.filter(
        (item) => item.categori.name == "website"
      );
      this.showList = false;
    },
    onlyMobile() {
      this.listPortfolioFilter = this.listPortfolio.filter(
        (item) => item.categori.name == "mobile"
      );
      this.showList = false;
    },
    onlyDekstop() {
      this.listPortfolioFilter = this.listPortfolio.filter(
        (item) => item.categori.name == "desktop"
      );
      this.showList = false;
    },
  },
});
