<template>
  <div class="contacts-container">
    <h1 class="contacts-title" :class="{ 'animate-title': showTitle }">Контакты</h1>
    <p v-for="(text, index) in contactTexts" :key="index" class="contacts-text" :class="{ 'animate-text': showTexts }" :style="{ '--delay': (index + 1) * 0.2 + 's' }">{{ text }}</p>
    <p class="contacts-text animate-blink" :class="{ 'animate-text': showTexts }" :style="{ '--delay': (contactTexts.length + 1) * 0.2 + 's' }">Вход исламу запрещен.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const showTitle = ref(false);
const showTexts = ref(false);
const contactTexts = [
  "Свяжитесь с нами по следующим контактам:",
  "Email: info@magasithub.com",
  "Телефон: +7 (123) 456-7890",
  "Адрес: г. Магас, ул. Научная, 1."
];
onMounted(() => {
  setTimeout(() => { showTitle.value = true; }, 400);
  setTimeout(() => { showTexts.value = true; }, 800);
});
</script>

<style scoped>
.contacts-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Inter', sans-serif;
}
.contacts-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text-primary);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.8s, transform 0.8s;
}
.contacts-title.animate-title {
  opacity: 1;
  transform: scale(1);
}
.contacts-text {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 12px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s, transform 0.8s;
  transition-delay: var(--delay, 0s);
}
.contacts-text.animate-text {
  opacity: 1;
  transform: translateY(0);
}
.contacts-text.animate-blink {
  animation: blink 2s infinite alternate;
}
@keyframes blink {
  from { opacity: 0.5; }
  to { opacity: 1; }
}

</style> 