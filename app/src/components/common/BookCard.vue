<script setup>
/////////////////////////////////////////////////////
//// ! BookCard ! ////
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
  <div class="book-card" @click="$emit('click', book)">
    <div class="book-cover-container">
      <div
        class="book-cover"
        :style="{
          background: book.gradient || 'var(--gradient-rose)',
          backgroundImage: book.coverUrl ? `url(${book.coverUrl})` : 'none'
        }"
      >
        <span v-if="!book.coverUrl">{{ book.emoji || '📖' }}</span>
      </div>
      <div v-if="book.hasBookmark" class="book-bookmark"></div>
      <div v-if="book.progress" class="book-progress">
        {{ book.progress }}%
      </div>
    </div>
    <div class="book-info">
      <h4 class="book-title">{{ book.title }}</h4>
      <p class="book-author">{{ book.author }}</p>
    </div>
  </div>
</template>

<style scoped>
.book-card {
  flex-shrink: 0;
  width: 140px;
  cursor: pointer;
  position: relative;
}

.book-cover-container {
  position: relative;
  margin-bottom: 12px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(77, 0, 17, 0.15);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.book-card:active .book-cover-container {
  transform: scale(0.97);
}

.book-cover {
  width: 140px;
  height: 210px;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: white;
  font-size: 56px;
}

/* Book cover overlays for depth */
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
  width: 32px;
  height: 44px;
  background: linear-gradient(135deg, #4D0011 0%, #BD7880 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.book-progress {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: var(--sagebound-wine);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 10;
}

.book-info {
  padding: 0 4px;
}

.book-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--sagebound-wine);
  margin: 0 0 4px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.3;
}

.book-author {
  font-size: 12px;
  color: var(--sagebound-warm-gray);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
