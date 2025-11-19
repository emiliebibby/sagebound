<template>
    <div class="app-header">
        <div class="header-top">
            <div class="greeting">
                <div class="user-avatar">
                    {{ userInitial }}
                </div>
                <div class="greeting-text">
                    <h2>Hi, {{ userName }}!</h2>
                    <p>Ready to dive in?</p>
                </div>
            </div>
            <div class="header-icons">
                <div class="icon-btn" @click="$emit('notifications')">
                    <i class="pi pi-bell"></i>
                    <span v-if="notificationCount > 0" class="badge">{{ notificationCount }}</span>
                </div>
                <div class="icon-btn" @click="$emit('favorites')">
                    <i class="pi pi-heart"></i>
                </div>
            </div>
        </div>

        <div class="search-container">
            <i class="pi pi-search search-icon"></i>
            <input v-model="searchQuery" type="text" class="search-input" :placeholder="searchPlaceholder" @keyup.enter="handleSearch" />
            <button class="search-btn" @click="handleSearch">
                <i class="pi pi-arrow-right"></i>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
    userName: {
        type: String,
        default: 'Reader'
    },
    notificationCount: {
        type: Number,
        default: 0
    },
    searchPlaceholder: {
        type: String,
        default: 'Search for books'
    }
})

const emit = defineEmits(['search', 'notifications', 'favorites'])

const router = useRouter()
const searchQuery = ref('')

const userInitial = computed(() => props.userName.charAt(0).toUpperCase())

function handleSearch() {
    if (searchQuery.value.trim()) {
        emit('search', searchQuery.value)
        // Optionally navigate to search/discover page
        // router.push({ name: 'Discover', query: { q: searchQuery.value } })
    }
}
</script>

<style scoped>
.app-header {
    background: linear-gradient(180deg, rgba(255, 245, 240, 0.98) 0%, rgba(255, 245, 240, 0.95) 100%);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 40px 20px 20px;
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 1px solid rgba(189, 120, 128, 0.1);
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
    overflow-x: hidden;
}

.header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.greeting {
    display: flex;
    align-items: center;
    gap: 12px;
}

.user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, #bd7880 0%, #d4989e 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(189, 120, 128, 0.3);
}

.greeting-text h2 {
    font-size: 20px;
    font-weight: 700;
    color: var(--sagebound-wine);
    margin: 0 0 2px 0;
}

.greeting-text p {
    font-size: 13px;
    color: var(--sagebound-warm-gray);
    margin: 0;
}

.header-icons {
    display: flex;
    gap: 12px;
}

.icon-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    border: 1px solid rgba(189, 120, 128, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
}

.icon-btn:active {
    transform: scale(0.95);
}

.icon-btn i {
    color: var(--sagebound-wine);
    font-size: 18px;
}

.icon-btn .badge {
    position: absolute;
    top: -4px;
    right: -4px;
    min-width: 18px;
    height: 18px;
    padding: 0 4px;
    background: var(--sagebound-rose);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: white;
    font-weight: 700;
    border: 2px solid white;
}

.search-container {
    position: relative;
    width: 100%;
    max-width: 100%;
}

.search-input {
    width: 100%;
    max-width: 100%;
    padding: 14px 50px 14px 48px;
    border: none;
    border-radius: 16px;
    font-size: 15px;
    background: white;
    box-shadow: 0 2px 8px rgba(189, 120, 128, 0.08);
    transition: all 0.2s ease;
    color: var(--sagebound-charcoal);
    box-sizing: border-box;
}

.search-input:focus {
    outline: none;
    box-shadow: 0 4px 16px rgba(189, 120, 128, 0.15);
}

.search-input::placeholder {
    color: var(--sagebound-warm-gray);
}

.search-icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--sagebound-warm-gray);
    font-size: 18px;
    pointer-events: none;
}

.search-btn {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
    width: 38px;
    height: 38px;
    border-radius: 12px;
    background: linear-gradient(135deg, #bd7880 0%, #d4989e 100%);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(189, 120, 128, 0.3);
    transition: all 0.2s ease;
}

.search-btn:active {
    transform: translateY(-50%) scale(0.95);
}

.search-btn i {
    color: white;
    font-size: 16px;
}
</style>
