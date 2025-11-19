<script setup>
/////////////////////////////////////////////////////
//// ! FeaturedBook ! ////
/////////////////////////////////////////////////////

////////////////////////////////
//// ! Functional Imports ! ////
////////////////////////////////

///////////////////////////
//// ! Store Imports ! ////
///////////////////////////

//////////////////////////
//// ! View Imports ! ////
//////////////////////////

///////////////////////////////
//// ! Component Imports ! ////
///////////////////////////////

///////////////////////////
//// ! Model Imports ! ////
///////////////////////////

/////////////////////////////////////////
//// ! Global Variable Definitions ! ////
/////////////////////////////////////////

///////////////////
//// ! Props ! ////
///////////////////
defineProps({
  book: {
    type: Object,
    required: true,
    validator: (book) => {
      return book.title && book.author
    }
  }
})

//////////////////////////
//// ! Define Emits ! ////
//////////////////////////
defineEmits(['click'])

/////////////////////////////////
//// ! Component Variables ! ////
/////////////////////////////////

////////////////////////////////
//// ! Composable Imports ! ////
////////////////////////////////

////////////////////
//// ! Mounts ! ////
////////////////////

/////////////////////
//// ! Watches ! ////
/////////////////////

/////////////////////////////
//// ! Const Functions ! ////
/////////////////////////////
</script>

<template>
  <div class="featured-book" @click="$emit('click', book)">
    <div class="featured-content">
      <div class="featured-cover">
        <div
          class="book-cover"
          :style="{
            background: book.gradient || 'var(--gradient-pine)',
            backgroundImage: book.coverUrl ? `url(${book.coverUrl})` : 'none'
          }"
        >
          <span v-if="!book.coverUrl">{{ book.emoji || '📖' }}</span>
        </div>
        <div v-if="book.hasBookmark" class="book-bookmark"></div>
      </div>
      <div class="featured-details">
        <span class="featured-badge">
          <span>📚</span> Continue Reading
        </span>
        <h3 class="featured-title">{{ book.title }}</h3>
        <p class="featured-author">{{ book.author }}</p>
        <div v-if="book.genres && book.genres.length" class="featured-genres">
          <span v-for="genre in book.genres" :key="genre" class="genre-pill">
            {{ genre }}
          </span>
        </div>
        <div v-if="book.progress" class="featured-progress-bar">
          <div class="progress-label">
            <span>{{ book.currentChapter ? `Chapter ${book.currentChapter} of ${book.totalChapters}` : 'In Progress' }}</span>
            <span class="progress-percentage">{{ book.progress }}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" :style="{ width: book.progress + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.featured-book {
  width: 100%;
  max-width: 100%;
  background: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(189, 120, 128, 0.12);
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(189, 120, 128, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.featured-book:hover {
  box-shadow: 0 12px 32px rgba(189, 120, 128, 0.18);
}

.featured-book::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(189, 120, 128, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.featured-content {
  display: flex;
  gap: 16px;
  position: relative;
  z-index: 1;
}

.featured-cover {
  flex-shrink: 0;
  width: 100px;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(77, 0, 17, 0.15);
  position: relative;
}

.featured-cover .book-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 48px;
  position: relative;
}

.book-cover::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,0.1) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.1) 100%);
  pointer-events: none;
}

.book-cover::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%);
  opacity: 0.5;
  pointer-events: none;
}

.book-bookmark {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 28px;
  height: 40px;
  background: linear-gradient(135deg, #4D0011 0%, #BD7880 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.featured-details {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.featured-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: linear-gradient(135deg, var(--sagebound-pink) 0%, var(--sagebound-blush) 100%);
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
  color: var(--sagebound-wine);
  margin-bottom: 8px;
  align-self: flex-start;
}

.featured-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--sagebound-wine);
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.featured-author {
  font-size: 13px;
  color: var(--sagebound-warm-gray);
  margin: 0 0 12px 0;
}

.featured-genres {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.genre-pill {
  padding: 4px 10px;
  background: var(--sagebound-blush);
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  color: var(--sagebound-rose);
  border: 1px solid rgba(189, 120, 128, 0.15);
}

.featured-progress-bar {
  margin-top: auto;
}

.progress-label {
  font-size: 12px;
  color: var(--sagebound-warm-gray);
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
}

.progress-percentage {
  color: var(--sagebound-rose);
  font-weight: 700;
}

.progress-track {
  height: 6px;
  background: var(--sagebound-blush);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #BD7880 0%, #D4989E 100%);
  border-radius: 3px;
  transition: width 0.3s ease;
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 20px;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 100%);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}
</style>
