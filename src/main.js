import { createWebHistory, createRouter } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Products from "./pages/Products.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";

const routes = [
  { path: "/", component: Products },
  { path: "/sign-in", component: Login },
  { path: "/sign-up", component: Register },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
