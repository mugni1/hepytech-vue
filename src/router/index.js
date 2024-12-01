import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import PortfolioView from "@/views/PortfolioView.vue";
import CareerView from "@/views/CareerView.vue";
import HepyNewsView from "@/views/HepyNewsView.vue";
import HepyNewsDetail from "@/views/HepyNewsDetail.vue";
import LoginView from "@/views/LoginView.vue";
import AdminDashboardView from "@/views/AdminDashboardView.vue";
import AdminNewsList from "@/views/AdminNewsList.vue";
import AdminNewsAdd from "@/views/AdminNewsAdd.vue";
import AdminNewsEdit from "@/views/AdminNewsEdit.vue";
import AdminPortfolioList from "@/views/AdminPortfolioList.vue";
import AdminPortfolioAdd from "@/views/AdminPortfolioAdd.vue";
import AdminPortfolioEdit from "@/views/AdminPortfolioEdit.vue";
import AdminHomeDetail from "@/views/AdminHomeDetail.vue";
import AdminAboutDetail from "@/views/AdminAboutDetail.vue";
import AdminTrusted from "@/views/AdminTrusted.vue";
import AdminContac from "@/views/AdminContac.vue";

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

  // NEWS
  { path: "/admin/news-list", name: "adminNewsList", component: AdminNewsList },
  { path: "/admin/news-add", name: "adminNewsAdd", component: AdminNewsAdd },
  {
    path: "/admin/news/:id/edit",
    name: "adminNewsEdti",
    component: AdminNewsEdit,
  },

  // PORTFOLIO
  {
    path: "/admin/portfolio-list",
    name: "portfolioList",
    component: AdminPortfolioList,
  },
  {
    path: "/admin/portfolio-add",
    name: "portfolioAdd",
    component: AdminPortfolioAdd,
  },
  {
    path: "/admin/portfolio/:id/edit",
    name: "portfolioUpdate",
    component: AdminPortfolioEdit,
  },

  // ADMIN HOME
  { path: "/admin/home", name: "homeDetail", component: AdminHomeDetail },
  // ADMIN ABOUT
  { path: "/admin/about", name: "aboutDetail", component: AdminAboutDetail },
  // ADMIN TRUSTED
  { path: "/admin/trusted", name: "adminTrusted", component: AdminTrusted },
  // ADMIN CONTAC
  { path: "/admin/contac", name: "adminContac", component: AdminContac },
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
