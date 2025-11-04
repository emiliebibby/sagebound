<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Book from './Book.vue'

defineProps({
    msg: String
})

const count = ref(0)
const searchQuery = ref('')

function onSearch() {
    // Placeholder for search logic
    alert('Searching for: ' + searchQuery.value)
}
</script>

<template>
    <div>
        <div class="top-bar">
            <img class="profile-photo" src="/logo.png" alt="Profile photo" />
            <span class="greeting">Hi Emilie!</span>
        </div>
        <div class="search-row">
            <InputText v-model="searchQuery" class="search-input" type="text" placeholder="Search..." />
            <Button class="search-btn p-button-rounded p-button-icon-only" @click="onSearch" icon="pi pi-search" aria-label="Search" />
        </div>
        <div class="books-row">
            <Book v-for="n in 10" :key="n" :cover="`https://picsum.photos/seed/book${n}/180/260`" />
        </div>
    </div>
</template>

<style scoped>
.top-bar {
    display: flex;
    align-items: center;
    padding: 1.2rem 1.2rem 0.5rem 1.2rem;
    background: transparent;
}
.profile-photo {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1rem;
    border: none;
    background: #fff;
}
.greeting {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--color-secondary);
}
.search-row {
    display: flex;
    align-items: stretch;
    padding: 0 1.2rem 1.2rem 1.2rem;
    gap: 0.5rem;
}
.search-input {
    flex: 1 1 0;
    font-size: 1.15em;
    border-radius: 2em !important;
    padding: 1.1em 1.2em !important;
    height: 56px;
    min-height: 56px;
    box-sizing: border-box;
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
}
.search-input:focus {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
}
.search-btn :deep(button),
.search-btn {
    border-radius: 50% !important;
    font-size: 1.7rem;
    padding: 0 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px !important;
    height: 56px !important;
    min-width: 56px;
    min-height: 56px;
    box-sizing: border-box;
    cursor: pointer;
    transition: background 0.2s;
}
.search-btn:hover {
    background: var(--color-secondary);
    color: #fff;
}
.books-row {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 1.2rem;
    padding: 0 1.2rem 1.2rem 1.2rem;
    margin-bottom: 1.2rem;
    scrollbar-width: thin;
    scrollbar-color: var(--color-primary) var(--color-tertiary);
}
.books-row::-webkit-scrollbar {
    height: 8px;
}
.books-row::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 4px;
}
</style>
