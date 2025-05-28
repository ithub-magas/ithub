import { createWebHistory, createRouter } from "vue-router";
import Authorization from "./pages/authorization.vue";
import Main from "./pages/main.vue";
import Developers from "./pages/developers.vue";
import Profile from "./pages/Profile.vue";
import Resume from "./pages/Portfolio.vue";
import forum from "./pages/forum.vue";
import postcard from "./pages/postcard.vue";

// Объединенные импорты
import Projects from "./pages/Projects.vue";
import Portfolio from "./pages/Portfolio.vue";
import Home from "./pages/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/authorization", component: Authorization },
  { path: "/dev", component: Developers },
  { path: "/profile", component: Profile },
  { path: "/resume", component: Resume },
  { path: "/forum", component: forum },
  { path: "/postcard", component: postcard},

  // Объединенные маршруты
  { path: "/projects", component: Projects },
  { path: "/portfolio", component: Portfolio }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;