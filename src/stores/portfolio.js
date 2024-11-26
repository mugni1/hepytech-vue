import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";

export const usePortfolioStore = defineStore("portfolio", {
  state: () => ({
    loading: true,
    loadingBtnDelete: false,
    loadingBtnAdd: false,

    // PORTFOLIO
    listPortfolio: [],
    listPortfolioFilter: null,
    showList: true,

    //URL IMAGE
    urlImage: "http://localhost/hepytech-api/public/storage/img/",

    // CATEOGRY
    categoryList: null,

    //USERNAME
    userName: localStorage.getItem("name"),
    initialName: null,

    // data potfolio
    portfolioDetail: null,

    // data form
    portfolioName: null,
    portfolioCategoriId: null,
    portfolioImage: null,
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

    // GET CATEGORI
    getCategoryList() {
      axios({
        method: "get",
        url: "http://localhost:8000/api/categori",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => {
          this.categoryList = response.data.data;
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

    // IMAGE CHANGE
    imageChange(e) {
      this.portfolioImage = e.target.files[0];
      console.log(this.portfolioImage);
    },
    // CREATE / STORE TO DATABASE
    storeToDatabase() {
      this.loadingBtnAdd = true;
      axios({
        method: "post",
        url: "http://localhost:8000/api/portfolio/store",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
        data: {
          name: this.portfolioName,
          categori_id: this.portfolioCategoriId,
          image: this.portfolioImage,
        },
      })
        .then((response) => {
          swal({
            icon: "success",
            title: "Success create news",
          }).then((succes) => {
            router.push({ name: "porfolioList" });
          });
        })
        .catch((error) => {
          swal({
            icon: "error",
            title: "Error create new portfolio",
          });
        })
        .finally(() => {
          this.loadingBtnAdd = false;
        });
    },
    // SHOW / DETAIL
    getPortfolioDetail(id) {
      axios({
        method: "get",
        url: `http://localhost:8000/api/portfolio/${id}/detail`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          this.portfolioDetail = response.data.data;
          this.portfolioName = response.data.data.name;
          this.portfolioCategoriId = response.data.data.categori.id;
        })
        .catch((error) => {
          swal({
            icon: "error",
            title: "Please Check your connections",
          });
        })
        .finally(() => {
          this.loadingBtnAdd = false;
        });
    },
    // UPDATE / PORTFOLIO
    updatePortfolio(id) {
      this.loadingBtnAdd = true;
      axios({
        method: "post",
        url: `http://localhost:8000/api/portfolio/${id}/update`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
        data: {
          name: this.portfolioName,
          categori_id: this.portfolioCategoriId,
          image: this.portfolioImage,
          _method: "put",
        },
      })
        .then((response) => {
          swal({
            icon: "success",
            title: "Success create news",
          }).then((isTrue) => {
            if (isTrue) {
              router.push({ name: "portfolioList" });
            }
          });
        })
        .catch((error) => {
          swal({
            icon: "error",
            title: "Error create new portfolio",
          });
        })
        .finally(() => {
          this.loadingBtnAdd = false;
        });
    },
  },
});
