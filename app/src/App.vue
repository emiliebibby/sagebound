<template>
    <div class="app-container">
        <main class="main-content">
            <router-view />
        </main>
        <BottomNav v-if="showBottomNav" />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BottomNav from './components/common/BottomNav.vue'

const route = useRoute()

// Hide bottom nav on auth pages
const showBottomNav = computed(() => {
  const authPages = ['Login', 'Register', 'ResetPassword']
  return !authPages.includes(route.name)
})
</script>

<style>
/* Global reset */
* {
    box-sizing: border-box;
}

html {
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
}

body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
    position: relative;
}

#app {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    position: relative;
}
</style>

<style scoped>
.app-container {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
}

.main-content {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
}
</style>
