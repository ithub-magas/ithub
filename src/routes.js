import { createWebHistory, createRouter } from "vue-router";
import Authorization from "./pages/authorization.vue";
import Main from "./pages/main.vue";
import Developers from "./pages/developers.vue";
import Profile from "./pages/Profile.vue";
import Resume from "./pages/Resume.vue";

// Объединенные импорты
import Projects from "./pages/Projects.vue";
import Portfolio from "./pages/Portfolio.vue";

const routes = [
  { path: "/", component: Main },
  { path: "/authorization", component: Authorization },
  { path: "/dev", component: Developers },
  { path: "/profile", component: Profile },
  { path: "/resume", component: Resume },

  // Объединенные маршруты
  { path: "/projects", component: Projects },
  { path: "/portfolio", component: Portfolio }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
