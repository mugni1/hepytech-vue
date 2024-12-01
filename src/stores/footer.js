import { defineStore } from "pinia";
import axios from "axios";

export const useFooterStore = defineStore("footer", {
  state: () => ({
    // loading table
    loadingTable: true,
    loadingButton: false,
    userName: localStorage.getItem("name"),
    formUpdate: false,

    // DATA FOOTER
    footerDetail: null,
  }),
  getters: {
    initialUserName() {
      return this.userName.substring(0, 1).toUpperCase();
    },
  },
  actions: {
    getContacDetail() {
      axios({
        method: "get",
        url: "http://localhost:8000/api/footer",
      })
        .then((response) => {
          this.footerDetail = response.data.data[0];
        })
        .catch((error) => {
          swal({
            icon: "error",
            title: "Error",
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
        url: "http://localhost:8000/api/footer/" + id + "/update",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: {
          _method: "put",
          brand: this.footerDetail.brand,
          link_faq: this.footerDetail.link_faq,
          link_youtube: this.footerDetail.link_youtube,
          text_information: this.footerDetail.text_information,
          address: this.footerDetail.address,
          link_facebook: this.footerDetail.link_facebook,
          link_instagram: this.footerDetail.link_instagram,
          link_linkedin: this.footerDetail.link_linkedin,
          copyright: this.footerDetail.copyright,
        },
      })
        .then((response) => {
          swal({
            icon: "success",
            title: "Success update",
          }).then((isTrue) => {
            if (isTrue) {
              this.formUpdate = false;
            }
          });
        })
        .catch((error) => {
          swal({
            icon: "error",
            title: "Error, Please Try again later",
          });
        })
        .finally(() => {
          this.loadingButton = false;
        });
    },
  },
});
