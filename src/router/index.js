import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import PortfolioView from "@/views/PortfolioView.vue";
import CareerView from "@/views/CareerView.vue";
import HepyNewsView from "@/views/HepyNewsView.vue";
import HepyNewsDetail from "@/views/HepyNewsDetail.vue";
import LoginView from "@/views/LoginView.vue";
import AdminDashboardView from "@/views/AdminDashboardView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/portfolio", name: "portfolio", component: PortfolioView },
  { path: "/career", name: "career", component: CareerView },
  { path: "/hepynews", name: "hepynews", component: HepyNewsView },
  {
    path: "/hepynews/:id/detail",
    name: "hepynewsDetail",
    component: HepyNewsDetail,
  },

  // FOR ADMIN
  { path: "/login", name: "login", component: LoginView },
  {
    path: "/admin/dashboard",
    name: "adminDashboard",
    component: AdminDashboardView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  //untuk hash / id
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash, // Scroll ke elemen dengan ID yang sesuai
        behavior: "smooth", // Gulir mulus
      };
    }
    return { top: 0 }; // Default scroll ke atas jika hash tidak ada
  },
});

export default router;
