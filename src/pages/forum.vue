<template>
  <div class="forum-container">
    <h1 class="forum-title">Форум</h1>
    <div class="search-container">
      <input v-model="searchQuery" placeholder="Поиск по проектам..." class="search-input" />
    </div>
    <div class="publications">
      <div v-for="(pub, index) in filteredPublications" :key="index" class="publication">
        <h2 class="pub-title">{{ pub.title }}</h2>
        <div class="pub-meta">Автор: {{ pub.author }} • {{ pub.date }}</div>
        <p class="pub-text">{{ pub.text }}</p>
        <div class="pub-tags">
          <span v-for="(tag, i) in pub.tags" :key="i" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const searchQuery = ref('');

const publications = [
  { title: 'Проект "Машинное обучение"', author: 'Иван Иванов', date: '2023-10-01', text: 'В рамках проекта "Машинное обучение" мы разработали алгоритм предсказания трендов на основе исторических данных. Подробности и исходный код доступны в репозитории.', tags: ['ML', 'Python', 'Data Science'] },
  { title: 'Исследование "Безопасность в облаке"', author: 'Мария Петрова', date: '2023-09-15', text: 'Наша группа провела исследование безопасности облачных сервисов. В публикации приведены результаты аудита и рекомендации по защите данных.', tags: ['Cloud', 'Security', 'Audit'] },
  { title: 'Проект "Мобильная разработка"', author: 'Алексей Сидоров', date: '2023-08-20', text: 'Разработано мобильное приложение для учёта научных публикаций. Приложение поддерживает синхронизацию с облаком и имеет современный интерфейс.', tags: ['Mobile', 'Flutter', 'Cloud'] },
  { title: 'Публикация "Искусственный интеллект"', author: 'Елена Смирнова', date: '2023-07-10', text: 'В статье рассмотрены последние достижения в области искусственного интеллекта и их применение в научных исследованиях.', tags: ['AI', 'Research', 'Science'] },
  { title: 'Проект "Веб-разработка"', author: 'Дмитрий Кузнецов', date: '2023-06-05', text: 'Создан веб-портал для обмена научными публикациями. Проект использует Vue.js и REST API.', tags: ['Web', 'Vue', 'API'] }
];

const filteredPublications = computed(() => {
  if (!searchQuery.value) return publications;
  const query = searchQuery.value.toLowerCase();
  return publications.filter(pub => pub.title.toLowerCase().includes(query) || pub.text.toLowerCase().includes(query) || pub.tags.some(tag => tag.toLowerCase().includes(query)));
});

</script>

<style scoped>
.forum-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Inter', sans-serif;
}
.forum-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text-primary);
}
.search-container {
  margin-bottom: 20px;
}
.search-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
}
.search-input:focus {
  border-color: var(--primary);
  outline: none;
}
.publications {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.publication {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 20px;
}
.pub-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 8px;
}
.pub-meta {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 12px;
}
.pub-text {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 12px;
}
.pub-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.tag {
  background: var(--secondary);
  color: var(--primary);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 14px;
}

</style> 