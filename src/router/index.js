import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Education from "../views/Education.vue";
import Portfolio from "../views/Portfolio.vue";
import Skills from "../views/Skills.vue";
import Work from "../views/Work.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/education",
      name: "Education",
      component: Education,
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: Portfolio,
    },
    {
      path: "/skills",
      name: "Skills",
      component: Skills,
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: Portfolio,
    },
    {
      path: "/work",
      name: "Work",
      component: Work,
    },
  ],
});

export default router;
