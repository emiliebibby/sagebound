import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const loading = ref(true)
  const initialized = ref(false)

  const isAuthenticated = computed(() => !!user.value)

  // Initialize auth state listener
  function initAuth() {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (firebaseUser) => {
        user.value = firebaseUser
        loading.value = false
        initialized.value = true
        resolve(firebaseUser)
      })
    })
  }

  function setUser(firebaseUser) {
    user.value = firebaseUser
  }

  function clearUser() {
    user.value = null
  }

  return {
    user,
    loading,
    initialized,
    isAuthenticated,
    initAuth,
    setUser,
    clearUser
  }
})
