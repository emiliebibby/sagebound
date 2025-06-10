<template>
    <nav class="bottom-nav">
        <button :class="{ active: isActive('/profile') }" @click="goTo('/profile')">
            <span class="material-icons">person</span>
            <span class="nav-label">Profile</span>
        </button>
        <button :class="{ active: isActive('/friends') }" @click="goTo('/friends')">
            <span class="material-icons">group</span>
            <span class="nav-label">Friends</span>
        </button>
        <button :class="{ active: isActive('/') }" @click="goTo('/')">
            <span class="material-icons">home</span>
            <span class="nav-label">Home</span>
        </button>
        <button :class="{ active: isActive('/bookshelves') }" @click="goTo('/bookshelves')">
            <span class="material-icons">menu_book</span>
            <span class="nav-label">Books</span>
        </button>
        <button :class="{ active: isActive('/favourites') }" @click="goTo('/favourites')">
            <span class="material-icons">favorite</span>
            <span class="nav-label">Hearted</span>
        </button>
    </nav>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

function goTo(path) {
    router.push(path)
}
function isActive(path) {
    return route.path === path
}
</script>

<style scoped>
.bottom-nav {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 96px;
    background: var(--color-secondary); /* lighter shade of tertiary */
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 100;
    padding-left: 12px;
    padding-right: 12px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
}
.bottom-nav button {
    background: none;
    border: none;
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-tertiary);
    font-size: 1.2rem;
    flex: 1 1 0;
    padding: 8px 0 4px 0;
    min-width: 56px;
    transition: color 0.2s;
    box-shadow: none !important;
    outline: none !important;
    -webkit-tap-highlight-color: transparent;
}
.bottom-nav button:focus,
.bottom-nav button:active {
    outline: none !important;
    box-shadow: none !important;
    background: none !important;
}
.bottom-nav button.active,
.bottom-nav button:active {
    color: var(--color-primary);
}
.nav-label {
    font-size: 0.85rem;
    margin-top: 4px;
}
.material-icons {
    font-size: 2.1rem;
}
@media (min-width: 600px) {
    .bottom-nav {
        max-width: 440px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 16px 16px 0 0;
    }
}
</style>

<!-- Add Material Icons font link globally in index.html if not already present -->
