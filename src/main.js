import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Aos from "aos";
import "aos/dist/aos.css";
// Inisialisasi AOS
Aos.init({
  offset: 120, // Offset dari titik trigger animasi
  duration: 400, // Durasi animasi
  easing: "ease", // Efek easing animasi
  once: false, // Animasi akan berjalan setiap kali elemen terlihat
});

const app = createApp(App);

// Menambahkan AOS sebagai global property jika ingin mengakses AOS di komponen lain
app.config.globalProperties.$aos = Aos;

app.use(createPinia());
app.use(router);

app.mount("#app");
