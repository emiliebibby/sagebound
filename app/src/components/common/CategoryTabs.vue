<template>
  <div class="category-tabs">
    <div
      v-for="category in categories"
      :key="category.id"
      :class="['category-tab', { active: activeCategory === category.id, new: category.isNew }]"
      @click="selectCategory(category.id)"
    >
      <div class="category-icon">
        {{ category.emoji }}
      </div>
      <span class="category-label">{{ category.label }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  categories: {
    type: Array,
    default: () => [
      { id: 'all', label: 'All', emoji: '📚' },
      { id: 'ebooks', label: 'eBooks', emoji: '📖' },
      { id: 'new', label: 'New', emoji: '🆕', isNew: true },
      { id: 'fiction', label: 'Fiction', emoji: '📗' },
      { id: 'romance', label: 'Romance', emoji: '🌹' },
      { id: 'fantasy', label: 'Fantasy', emoji: '🧙' }
    ]
  },
  initialCategory: {
    type: String,
    default: 'all'
  }
})

const emit = defineEmits(['category-change'])

const activeCategory = ref(props.initialCategory)

function selectCategory(categoryId) {
  activeCategory.value = categoryId
  emit('category-change', categoryId)
}
</script>

<style scoped>
.category-tabs {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  overflow-y: hidden;
  margin-bottom: 28px;
  padding-bottom: 4px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.category-tabs::-webkit-scrollbar {
  display: none;
}

.category-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 70px;
  cursor: pointer;
  flex-shrink: 0;
}

.category-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 2px 8px rgba(189, 120, 128, 0.08);
  position: relative;
  border: 1px solid rgba(189, 120, 128, 0.1);
}

.category-tab.active .category-icon {
  background: linear-gradient(135deg, #BD7880 0%, #D4989E 100%);
  box-shadow: 0 8px 20px rgba(189, 120, 128, 0.3);
  transform: translateY(-4px);
  border-color: transparent;
}

.category-tab.new .category-icon::after {
  content: '';
  position: absolute;
  top: -4px;
  right: -4px;
  width: 12px;
  height: 12px;
  background: var(--sagebound-wine);
  border-radius: 50%;
  border: 2px solid var(--sagebound-cream);
}

.category-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--sagebound-warm-gray);
  transition: color 0.2s ease;
}

.category-tab.active .category-label {
  color: var(--sagebound-rose);
}
</style>
