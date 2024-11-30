import { defineStore } from "pinia";

export const useAboutStore = defineStore("about", {
  state: () => ({
    // loading table
    loadingTable: true,
    loadingButton: false,
    linkImage: "http://localhost/hepytech-api/public/storage/img/",
    userName: localStorage.getItem("name"),
  }),
  getters: {
    initialUserName() {
      return this.userName.substring(0, 1).toUpperCase();
    },
  },
  actions: {},
});
