import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import PortfolioView from "@/views/PortfolioView.vue";
import CareerView from "@/views/CareerView.vue";
import HepyNewsView from "@/views/HepyNewsView.vue";
import HepyNewsDetail from "@/views/HepyNewsDetail.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
