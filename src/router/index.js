import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import PortfolioView from "@/views/PortfolioView.vue";
import CareerView from "@/views/CareerView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/portfolio", name: "portfolio", component: PortfolioView },
  { path: "/career", name: "career", component: CareerView },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
