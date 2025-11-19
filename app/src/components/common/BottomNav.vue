<script setup>
/////////////////////////////////////////////////////
//// ! BottomNav ! ////
/////////////////////////////////////////////////////

////////////////////////////////
//// ! Functional Imports ! ////
////////////////////////////////
import { useRouter, useRoute } from 'vue-router'

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
const navItems = [
  { path: '/', label: 'Home', icon: 'pi-home' },
  { path: '/discover', label: 'Discover', icon: 'pi-compass' },
  { path: '/library', label: 'Library', icon: 'pi-book' },
  { path: '/favorites', label: 'Favorites', icon: 'pi-heart' },
  { path: '/profile', label: 'Profile', icon: 'pi-user' }
]

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
const router = useRouter()
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
function goTo(path) {
  router.push(path)
}

function isActive(path) {
  return route.path === path
}
</script>

<template>
  <nav class="bottom-nav">
    <div
      v-for="item in navItems"
      :key="item.path"
      :class="['nav-item', { active: isActive(item.path) }]"
      @click="goTo(item.path)"
    >
      <i :class="['pi', item.icon, 'nav-icon']"></i>
      <span class="nav-label">{{ item.label }}</span>
    </div>
  </nav>
</template>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 100vw;
  background: linear-gradient(180deg, rgba(77, 0, 17, 0.98) 0%, rgba(77, 0, 17, 1) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(189, 120, 128, 0.2);
  padding: 12px 16px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 -8px 24px rgba(77, 0, 17, 0.4);
  z-index: 100;
  box-sizing: border-box;
  overflow-x: hidden;
}

@media (min-width: 600px) {
  .bottom-nav {
    max-width: 430px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  padding: 8px 4px;
  border-radius: 16px;
  flex: 1;
  min-width: 0;
  max-width: 80px;
}

.nav-item:active {
  transform: scale(0.9);
}

.nav-icon {
  font-size: 22px;
  color: rgba(255, 217, 217, 0.6);
  transition: all 0.2s ease;
  position: relative;
}

.nav-item.active {
  background: linear-gradient(135deg, rgba(189, 120, 128, 0.3) 0%, rgba(212, 152, 158, 0.2) 100%);
}

.nav-item.active .nav-icon {
  color: #FFD9D9;
  transform: scale(1.1);
}

.nav-item.active::before {
  content: '';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 32px;
  height: 3px;
  background: linear-gradient(135deg, #BD7880 0%, #D4989E 100%);
  border-radius: 0 0 3px 3px;
}

.nav-label {
  font-size: 11px;
  font-weight: 600;
  color: rgba(255, 217, 217, 0.6);
  transition: color 0.2s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.nav-item.active .nav-label {
  color: #FFD9D9;
}
</style>
