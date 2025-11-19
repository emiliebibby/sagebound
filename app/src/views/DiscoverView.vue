<template>
  <div class="discover-view">
    <AppHeader
      user-name="Emilie"
      search-placeholder="Search for books to discover"
      @search="handleSearch"
    />
    <div class="content">
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <h3 class="empty-state-title">Discover View</h3>
        <p class="empty-state-description">Coming soon! Browse and discover new books.</p>
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
.discover-view {
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
