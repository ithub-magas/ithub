<template>
  <div class="main-hero">
    <transition name="fade">
      <div class="main-title" v-if="showTitle">KABIR</div>
    </transition>
    <div class="main-desc">Научная социальная сеть колледжа IT Hub Magas</div>
    <div class="main-sections">
      <div class="section" v-for="section in sections" :key="section.title">
        <img :src="section.img" :alt="section.title" class="section-img" />
        <div class="section-title">{{ section.title }}</div>
        <div class="section-text">{{ section.text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const showTitle = ref(false);
const sections = [
  {
    title: 'Публикации',
    text: 'Делитесь научными статьями и проектами.',
    img: '/src/assets/Projects/programming.svg',
  },
  {
    title: 'Портфолио',
    text: 'Создавайте цифровое резюме и портфолио.',
    img: '/src/assets/Projects/design.svg',
  },
  {
    title: 'Обсуждения',
    text: 'Общайтесь и обсуждайте научные темы.',
    img: '/src/assets/Projects/cybersecurity.svg',
  },
  {
    title: 'Разработка',
    text: 'Участвуйте в командных проектах.',
    img: '/src/assets/Projects/develop.svg',
  },
];
onMounted(() => {
  setTimeout(() => showTitle.value = true, 400);
});
</script>

<style scoped>
.main-hero {
  min-height: 100vh;
  background: linear-gradient(120deg, #7F5EFF 0%, #0F0B1F 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 80px;
  color: #fff;
  font-family: 'Unbounded', 'Inter', sans-serif;
}
.main-title {
  font-size: 64px;
  font-weight: 900;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
  animation: kabir-glow 2s infinite alternate;
}
@keyframes kabir-glow {
  from { text-shadow: 0 0 10px #fff, 0 0 20px #7F5EFF; }
  to { text-shadow: 0 0 30px #fff, 0 0 60px #7F5EFF; }
}
.main-desc {
  font-size: 22px;
  margin-bottom: 40px;
  opacity: 0.85;
}
.main-sections {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  margin-top: 32px;
}
.section {
  background: rgba(255,255,255,0.08);
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(127,95,255,0.12);
  padding: 32px 24px 24px 24px;
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s;
}
.section:hover {
  transform: translateY(-8px) scale(1.04);
  box-shadow: 0 8px 40px rgba(127,95,255,0.22);
}
.section-img {
  width: 80px;
  height: 80px;
  margin-bottom: 18px;
}
.section-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
}
.section-text {
  font-size: 16px;
  opacity: 0.85;
  text-align: center;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>