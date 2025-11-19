<template>
  <div class="favorites-view">
    <AppHeader
      user-name="Emilie"
      search-placeholder="Search favorites"
      @search="handleSearch"
    />
    <div class="content">
      <div class="empty-state">
        <div class="empty-state-icon">💖</div>
        <h3 class="empty-state-title">Favorites View</h3>
        <p class="empty-state-description">Coming soon! View all your favorite books.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppHeader from '../components/common/AppHeader.vue'

function handleSearch(query) {
  console.log('Searching:', query)
}
</script>

<style scoped>
.favorites-view {
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

.content {
  padding: 20px;
  padding-bottom: 120px;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}
</style>
