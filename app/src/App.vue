<template>
    <div class="min-h-screen w-full p-0 m-0">
        <main>
            <router-view class="flex-1 w-full h-full p-0 m-0" />
        </main>
    </div>
</template>

<script setup>
// No need to import components here, routing handles it
</script>

<style scoped>
:global(body) {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100vw;
    box-sizing: border-box;
}

/* Remove margin and padding from #app as well */
:global(#app) {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100vw;
}

.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
