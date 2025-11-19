<script setup>
/////////////////////////////////////////////////////
//// ! App ! ////
/////////////////////////////////////////////////////

////////////////////////////////
//// ! Functional Imports ! ////
////////////////////////////////
import { computed } from 'vue'

///////////////////////////
//// ! Store Imports ! ////
///////////////////////////

//////////////////////////
//// ! View Imports ! ////
//////////////////////////

///////////////////////////////
//// ! Component Imports ! ////
///////////////////////////////
import BottomNav from './components/common/BottomNav.vue'

///////////////////////////
//// ! Model Imports ! ////
///////////////////////////

/////////////////////////////////////////
//// ! Global Variable Definitions ! ////
/////////////////////////////////////////

///////////////////
//// ! Props ! ////
///////////////////

//////////////////////////
//// ! Define Emits ! ////
//////////////////////////

/////////////////////////////////
//// ! Component Variables ! ////
/////////////////////////////////

////////////////////////////////
//// ! Composable Imports ! ////
////////////////////////////////
import { useRoute } from 'vue-router'

const route = useRoute()

////////////////////
//// ! Mounts ! ////
////////////////////

/////////////////////
//// ! Watches ! ////
/////////////////////

/////////////////////////////
//// ! Const Functions ! ////
/////////////////////////////
const showBottomNav = computed(() => {
  const authPages = ['Login', 'Register', 'ResetPassword']
  return !authPages.includes(route.name)
})
</script>

<template>
    <div class="app-container">
        <main class="main-content">
            <router-view />
        </main>
        <BottomNav v-if="showBottomNav" />
    </div>
</template>

<style>
/* Global reset */
* {
    box-sizing: border-box;
}

html {
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
}

body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
    position: relative;
}

#app {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    position: relative;
}
</style>

<style scoped>
.app-container {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
}

.main-content {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
}
</style>
