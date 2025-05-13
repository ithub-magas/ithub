<template>
  <transition name="splash-fade">
    <div v-if="show" class="splash-bg">
      <div class="splash-text">kabir</div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const show = ref(true);
onMounted(() => {
  setTimeout(() => show.value = false, 2000);
});
</script>

<style scoped>
.splash-bg {
  position: fixed;
  z-index: 9999;
  inset: 0;
  background: linear-gradient(120deg, #7F5EFF 0%, #0F0B1F 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: splash-bg-anim 2s;
}
.splash-text {
  font-size: 72px;
  font-family: 'Unbounded', 'Inter', sans-serif;
  font-weight: 900;
  color: #fff;
  letter-spacing: 0.15em;
  text-shadow: 0 0 40px #7F5EFF, 0 0 80px #fff;
  animation: kabir-glow 2s infinite alternate;
}
@keyframes kabir-glow {
  from { text-shadow: 0 0 10px #fff, 0 0 20px #7F5EFF; }
  to { text-shadow: 0 0 40px #fff, 0 0 80px #7F5EFF; }
}
@keyframes splash-bg-anim {
  from { filter: blur(8px) brightness(0.7); }
  to { filter: blur(0) brightness(1); }
}
.splash-fade-enter-active, .splash-fade-leave-active {
  transition: opacity 1s;
}
.splash-fade-enter-from, .splash-fade-leave-to {
  opacity: 0;
}
</style> 