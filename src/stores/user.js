import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    formAdd: false,
    loadingButton: false,
    loadingTable: true,
    listUser: [],

    //data form add
    nameAdd: null,
    emailAdd: null,
    passwordAdd: null,
    role_idAdd: null,
  }),
  getters: {},
  actions: {
    getUserList() {
      axios({
        method: "get",
        url: "http://localhost:8000/api/user",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          this.listUser = response.data.data;
        })
        .catch((error) => {
          swal({
            icon: "error",
            title: "Error",
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.loadingTable = false;
        });
    },
    createUser() {
      this.loadingButton = true;
      axios({
        method: "post",
        url: "http://localhost:8000/api/user/store",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: {
          name: this.nameAdd,
          email: this.emailAdd,
          password: this.passwordAdd,
          role_id: this.role_idAdd,
        },
      })
        .then((response) => {
          this.getUserList();
          swal({
            icon: "success",
            title: "Success",
          });
        })
        .catch((error) => {
          swal({
            icon: "error",
            title: "Error",
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.loadingButton = false;
        });
    },
  },
});
