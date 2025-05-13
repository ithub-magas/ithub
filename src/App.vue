<template>
  <SplashScreen v-if="showSplash" />
  <div v-else>
    <Header />
    <transition name="route-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script setup>
import Header from "./components/header.vue";
import SplashScreen from "./components/SplashScreen.vue";
import { ref, onMounted } from 'vue';
const showSplash = ref(true);
onMounted(() => {
  setTimeout(() => showSplash.value = false, 2000);
});
</script>

<style>
.route-fade-enter-active, .route-fade-leave-active {
  transition: opacity 0.7s cubic-bezier(.4,0,.2,1);
}
.route-fade-enter-from, .route-fade-leave-to {
  opacity: 0;
}
</style>