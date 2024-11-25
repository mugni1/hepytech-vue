import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";

export const usePortfolioStore = defineStore("portfolio", {
  state: () => ({
    listPortfolio: [],
    listPortfolioFilter: null,
    showList: true,
    loading: true,
    loadingBtnDelete: false,
    //URL IMAGE
    urlImage: "http://localhost/hepytech-api/public/storage/img/",

    //USERNAME
    userName: localStorage.getItem("name"),
    initialName: null,
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
          swal({
            icon: "error",
            title: "Error Connection",
            text: "Please check your connections",
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    /// ADD PORTFOLIO
    createPortfolio() {
      swal({
        icon: "success",
      });
    },
    // DELETE PORTFOLIO
    dropPortfolio(itemId, index) {
      swal({
        icon: "warning",
        title: "Warning Delete",
        buttons: true,
        dangerMode: true,
      }).then((isTrue) => {
        if (isTrue) {
          this.loadingBtnDelete = true;
          axios({
            method: "delete",
            url: `http://localhost:8000/api/portfolio/${itemId}/delete`,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
            .then((response) => {
              swal({
                icon: "success",
                title: "Success Delete",
              }).then((isTrue) => {
                if (isTrue) {
                  this.listPortfolio.splice(index, 1);
                }
              });
            })
            .catch((error) => {
              swal({
                icon: "error",
                title: "Error Connection",
                text: "Please check your connections",
              });
            })
            .finally(() => {
              this.loadingBtnDelete = false;
            });
        } else {
          swal({
            title: "Cancel delete",
          });
        }
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

    // GET INITIAL USERNAME
    getInitialUserName() {
      this.initialName = this.userName.substring(0, 1).toUpperCase();
    },

    // DELERW PORTFOLIO
  },
});
