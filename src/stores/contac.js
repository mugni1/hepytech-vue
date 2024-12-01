import { defineStore } from "pinia";

export const useContacStore = defineStore("contac", {
  state: () => ({
    // loading table
    loadingTable: true,
    loadingButton: false,
    userName: localStorage.getItem("name"),
  }),
  getters: {
    initialUserName() {
      return this.userName.substring(0, 1).toUpperCase();
    },
  },
  actions: {},
});
