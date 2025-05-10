<template>
  <header>
    <div class="header-cont">
      <div class="logo" @click="goToHome">
        KABIR
      </div>

      <div class="menu-toggle" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>

      <nav :class="{ 'active': isMenuOpen }">
        <router-link to="/" @click="closeMenu">Главная</router-link>
        <router-link to="/projects" @click="closeMenu">Проекты</router-link>
        <router-link to="/resume" @click="closeMenu">Портфолио</router-link>
        <router-link to="/forum" @click="closeMenu">Форум</router-link>
        <router-link to="/contacts" @click="closeMenu">Контакты</router-link>
        <router-link to="/about" @click="closeMenu">О нас</router-link>
      </nav>

      <div class="actions" :class="{ 'active': isMenuOpen }">
        <div class="buttons" v-if="!isUser">
          <div class="login" @click="goToLogin">Вход</div>
          <div class="register" @click="goToRegister">Регистрация</div>
        </div>
        <div v-else>
          <div class="avatar" @click="goToProfile">
            <img :src="userAvatar" alt="avatar" v-if="userAvatar">
            <div v-else>{{ userInitials }}</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useAuthStore } from '../stores/auth';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    const isMenuOpen = ref(false);

    const isUser = computed(() => authStore.isAuthenticated);
    const userAvatar = computed(() => authStore.student?.avatar || '');
    const userInitials = computed(() => authStore.userInitials );

    const goToHome = () => {
      router.push("/");
      closeMenu();
    };

    const goToLogin = () => {
      router.push("/authorization");
      closeMenu();
    };

    const goToRegister = () => {
      router.push("/");
      closeMenu();
    };

    const goToProfile = () => {
      router.push("/profile");
      closeMenu();
    };

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    return {
      isUser,
      userAvatar,
      userInitials,
      isMenuOpen,
      goToHome,
      goToLogin,
      goToRegister,
      goToProfile,
      toggleMenu,
      closeMenu,
    };
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Unbounded:wght@200..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Unbounded:wght@200..900&display=swap');

header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 20px;
  background-color: #0F0B1F;
  position: relative;
}

.header-cont {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  position: relative;
}

.logo {
  font-family: "Unbounded";
  font-weight: 700;
  font-size: 32px;
  color: #7F5EFF;
  user-select: none;
  cursor: pointer;
  z-index: 100;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 100;
}

.menu-toggle .bar {
  height: 3px;
  width: 100%;
  background-color: #7F5EFF;
  border-radius: 10px;
  transition: all 0.3s ease;
}

nav {
  display: flex;
}

nav a {
  font-family: "Inter";
  font-weight: 600;
  text-decoration: none;
  color: #FFFFFF;
  transition: 0.3s;
  user-select: none;
}

nav a.router-link-active {
  position: relative;
}

nav a.router-link-active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  top: 20px;
  width: 90%;
  height: 2px;
  background-color: #7F5EFF;
  border-radius: 5px;
  transform: translateX(-50%);
}

nav a:hover {
  color: #7F5EFF;
}

nav a:not(:first-child) {
  margin-left: 60px;
}

.buttons {
  display: flex;
  align-items: center;
}

.login {
  background-color: #7F5EFF;
  border: 2px solid transparent;
  border-radius: 7px;
  padding: 12px 31px;
  font-family: "Inter";
  font-weight: 500;
  color: #FFFFFF;
  width: fit-content;
  user-select: none;
  cursor: pointer;
  transition: 0.3s;
}

.login:hover {
  background-color: transparent;
  border: 2px solid #7F5EFF;
}

.register {
  border: 2px solid #7F5EFF;
  border-radius: 7px;
  padding: 12px 31px;
  font-family: "Inter";
  font-weight: 500;
  color: #FFFFFF;
  width: fit-content;
  user-select: none;
  cursor: pointer;
  transition: 0.3s;
  margin-left: 32px;
}

.register:hover {
  background-color: #7F5EFF;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
}

.avatar img {
  width: 100%;
  height: 100%;
}

.avatar div {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;
  color: #7F5EFF;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 700;
  background-color: rgb(242, 224, 255);
}

@media (max-width: 1100px) {
  nav a:not(:first-child) {
    margin-left: 30px;
  }

  .login,
  .register {
    padding: 6px 15px;
  }

  .register {
    margin-left: 16px;
  }
}

@media (max-width: 964px) {
  .menu-toggle {
    display: flex;
  }

  nav,
  .actions {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #0F0B1F;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateX(-100%);
    transition: transform 0.5s ease;
    z-index: 99;
  }

  .actions{
    background-color: transparent !important;
  }

  nav.active,
  .actions.active {
    transform: translateX(0);
  }

  nav a {
    margin: 15px 0 !important;
    font-size: 20px;
  }

  nav a.router-link-active::after {
    top: 25px;
  }

  .buttons {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .actions {
    top: 88vh;
    margin: 0 auto;
  }

  .header-cont {
    padding-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .logo {
    font-size: 24px;
  }

  .login,
  .register {
    padding: 10px 20px;
    font-size: 14px;
  }

  .avatar {
    width: 40px;
    height: 40px;
  }
}
</style>