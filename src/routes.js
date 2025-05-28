import { createWebHistory, createRouter } from "vue-router";
import authorization from "./pages/Authorization.vue";
import main from "./pages/Main.vue";
import developers from "./pages/Developers.vue";
import Profile from "./pages/Profile.vue";
import Resume from "./pages/Resume.vue";
import Portfolio from "./pages/Portfolio.vue"
import forum from './pages/Forum.vue'
import postcard from "./pages/Postcard.vue"

const routes = [
  { path: "/", component: main },
  { path: "/authorization", component: authorization },
  { path: "/dev", component: developers },
  { path: "/profile", component: Profile },
  { path: "/resume", component: Resume },
  { path: "/portfolio", component: Portfolio },
  { path: "/forum", component: forum },
  { path: "/postcard", component: postcard}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
