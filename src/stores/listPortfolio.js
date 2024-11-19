import { defineStore } from "pinia";
import axios from "axios";

export const useListPortfolio = defineStore("listPortfolio", {
  state: () => ({
    listPortfolio: [],
    loading: true,
  }),

  getters: {},

  actions: {
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
  },
});
