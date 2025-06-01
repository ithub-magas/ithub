import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const student = ref(JSON.parse(localStorage.getItem('student')) || null);

  const isAuthenticated = computed(() => student.value !== null);
  const userInitials = computed(() => 
    student.value ? `${student.value.firstName?.[0]}${student.value.lastName?.[0]}` : ''
  );

  function setUser(userData) {
    student.value = userData;
    localStorage.setItem('student', JSON.stringify(userData));
  }

  function clearUser() {
    student.value = null;
    localStorage.removeItem('student');
  }

  return { student, isAuthenticated, userInitials, setUser, clearUser };
});
