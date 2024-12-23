import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    formAdd: false,
    formUpdate: false,
    loadingButton: false,
    loadingTable: true,
    listUser: [],

    // data form add
    nameAdd: null,
    emailAdd: null,
    passwordAdd: null,
    role_idAdd: null,

    // data form update
    idUpdate: null,
    nameUpdate: null,
    emailUpdate: null,
    passwordUpdate: null,
    role_idUpdate: null,
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
          this.listUser = response.data.data.filter(
            (item) => item.name != localStorage.getItem("name")
          );
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
          this.formAdd = false;
        });
    },
    getDataForUpdate(id, name, email, role_id) {
      this.formUpdate = true;
      this.idUpdate = id;
      this.nameUpdate = name;
      this.emailUpdate = email;
      this.role_idUpdate = role_id;
    },
    updateUser(id) {
      this.loadingButton = true;
      axios({
        method: "post",
        url: "http://localhost:8000/api/user/" + id + "/update",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: {
          name: this.nameUpdate,
          email: this.emailUpdate,
          password: this.passwordUpdate,
          role_id: this.role_idUpdate,
          _method: "put",
        },
      })
        .then((response) => {
          this.getUserList();
          swal({
            icon: "success",
            title: "Success",
            text: response.data.message,
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
          this.formUpdate = false;
          this.loadingButton = false;
        });
    },
    deleteUser(id, name, index) {
      swal({
        icon: "warning",
        title: "Warning",
        text: `Apakah kamu yakin menghapus '${name}' ?`,
        dangerMode: true,
        buttons: true,
      }).then((isTrue) => {
        if (isTrue) {
          axios({
            method: "delete",
            url: "http://localhost:8000/api/user/" + id + "/delete",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
            .then((response) => {
              this.listUser.splice(index, 1);
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
            });
        }
      });
    },
  },
});
