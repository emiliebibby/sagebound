<template>
  <div class="home-view">
    <AppHeader
      :user-name="userName"
      :notification-count="3"
      @search="handleSearch"
      @notifications="handleNotifications"
      @favorites="handleFavorites"
    />

    <div class="main-content">
      <!-- Floating Decorations -->
      <div class="float-decoration float-1">🌸</div>
      <div class="float-decoration float-2">🍃</div>
      <div class="float-decoration float-3">✨</div>

      <!-- Category Tabs -->
      <CategoryTabs @category-change="handleCategoryChange" />

      <!-- Continue Reading -->
      <FeaturedBook
        v-if="featuredBook"
        :book="featuredBook"
        @click="goToBook"
      />

      <!-- Popular Section -->
      <section class="section">
        <div class="section-header">
          <h3 class="section-title">Popular</h3>
          <span class="section-action" @click="viewAll('popular')">
            View All
            <i class="pi pi-arrow-right"></i>
          </span>
        </div>
        <div class="books-scroll">
          <BookCard
            v-for="book in popularBooks"
            :key="book.id"
            :book="book"
            @click="goToBook"
          />
        </div>
      </section>

      <!-- New Releases Section -->
      <section class="section">
        <div class="section-header">
          <h3 class="section-title">New Releases</h3>
          <span class="section-action" @click="viewAll('new')">
            View All
            <i class="pi pi-arrow-right"></i>
          </span>
        </div>
        <div class="books-scroll">
          <BookCard
            v-for="book in newReleases"
            :key="book.id"
            :book="book"
            @click="goToBook"
          />
        </div>
      </section>

      <!-- Trending Section -->
      <section class="section">
        <div class="section-header">
          <h3 class="section-title">Trending Now</h3>
          <span class="section-action" @click="viewAll('trending')">
            View All
            <i class="pi pi-arrow-right"></i>
          </span>
        </div>
        <div class="books-scroll">
          <BookCard
            v-for="book in trendingBooks"
            :key="book.id"
            :book="book"
            @click="goToBook"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import AppHeader from '../components/common/AppHeader.vue'
import CategoryTabs from '../components/common/CategoryTabs.vue'
import FeaturedBook from '../components/common/FeaturedBook.vue'
import BookCard from '../components/common/BookCard.vue'
import { mockFeaturedBook, mockPopularBooks, mockNewReleases, mockTrending } from '../utils/mockData'

const router = useRouter()
const authStore = useAuthStore()

// Get user name from auth store
const userName = computed(() => {
  if (authStore.user?.displayName) {
    return authStore.user.displayName
  }
  if (authStore.user?.email) {
    return authStore.user.email.split('@')[0]
  }
  return 'Reader'
})

// Mock data (will be replaced with real API calls)
const featuredBook = ref(mockFeaturedBook)
const popularBooks = ref(mockPopularBooks)
const newReleases = ref(mockNewReleases)
const trendingBooks = ref(mockTrending)

function handleSearch(query) {
  console.log('Searching for:', query)
  // TODO: Implement search functionality
  // router.push({ name: 'Discover', query: { q: query } })
}

function handleNotifications() {
  console.log('Opening notifications')
  // TODO: Implement notifications
}

function handleFavorites() {
  console.log('Opening favorites')
  router.push('/favorites')
}

function handleCategoryChange(categoryId) {
  console.log('Category changed to:', categoryId)
  // TODO: Filter books by category
}

function goToBook(book) {
  console.log('Opening book:', book)
  // TODO: Navigate to book detail page
  // router.push({ name: 'BookDetail', params: { id: book.id } })
}

function viewAll(section) {
  console.log('View all:', section)
  // TODO: Navigate to filtered view
  // router.push({ name: 'Discover', query: { filter: section } })
}
</script>

<style scoped>
.home-view {
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

.main-content {
  padding: 20px;
  padding-bottom: 120px; /* Space for bottom nav */
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
}

.main-content::-webkit-scrollbar {
  width: 0;
}

/* Floating Decorations */
.float-decoration {
  position: absolute;
  font-size: 20px;
  opacity: 0.15;
  animation: float 6s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(10px, -10px) rotate(5deg);
  }
  66% {
    transform: translate(-10px, -20px) rotate(-5deg);
  }
}

.float-1 {
  top: 20px;
  right: 20px;
  animation-delay: 0s;
}

.float-2 {
  top: 200px;
  left: 20px;
  animation-delay: 2s;
}

.float-3 {
  top: 400px;
  right: 30px;
  animation-delay: 4s;
}

/* Section */
.section {
  margin-bottom: 32px;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  width: 100%;
  max-width: 100%;
}

.section-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--sagebound-wine);
  margin: 0;
}

.section-action {
  font-size: 14px;
  color: var(--sagebound-rose);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.section-action:hover {
  color: var(--sagebound-wine);
}

/* Book Scroll Container */
.books-scroll {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.books-scroll::-webkit-scrollbar {
  display: none;
}
</style>
