# Sagebound - Redesign & Rebrand Project Guide

## 🎯 Project Overview

**Sagebound** is a sophisticated book tracking and discovery app with AI-powered recommendations and Spotify music pairing integration. The app features a beautiful Rose & Pine color scheme with whimsical, fantasy-themed interactions.

**Tech Stack:**
- **Frontend:** Vue.js 3 (Composition API) ✅ *Existing*
- **UI Framework:** PrimeVue 4 🆕 *New*
- **Authentication:** Firebase Auth ✅ *Existing*
- **Database:** MongoDB ✅ *Existing*
- **Backend:** Node.js/Express server ✅ *Existing*
- **APIs:** Google Books API, Spotify API 🔜 *To Add*
- **Styling:** Custom CSS with PrimeVue theming 🆕 *New*

---

## 📋 Phase 1: UI Redesign & Rebranding (Current Phase)

**Goal:** Migrate existing app to new Rose & Pine branding, replace old components with new PrimeVue-based design system, while keeping existing Firebase/MongoDB backend infrastructure intact.

### ✅ What You Already Have

- ✅ Vue 3 app structure
- ✅ Firebase Authentication setup
- ✅ MongoDB database connection
- ✅ Backend server with API endpoints
- ✅ Basic routing (Vue Router)
- ✅ Existing components and views

### 🎯 What We're Changing

- 🎨 Complete rebrand to Rose & Pine color scheme
- 🎨 Replace all old UI components with new design system
- 🎨 Add PrimeVue framework for consistent, polished components
- 🎨 Implement new animations and interactions
- 🎨 Update all views to match new mobile mockup design
- 🎨 New logo and branding assets

### 🚫 What We're Keeping

- ✅ Firebase Auth configuration
- ✅ MongoDB schemas and connections
- ✅ Backend API structure
- ✅ Existing user data
- ✅ Server infrastructure
- ✅ Build configuration

---

## 🚀 Migration Setup

### Step 1: Create Backup & New Branch

**IMPORTANT: Backup your current work before making changes!**

```bash
# Make sure you're in your project directory
cd /path/to/your/sagebound-app

# Commit any current changes
git add .
git commit -m "Pre-redesign backup"

# Create backup branch
git checkout -b backup-legacy-design
git push origin backup-legacy-design

# Create redesign working branch
git checkout main  # or develop, or whatever your main branch is
git checkout -b redesign-rose-pine
```

### Step 2: Audit Current Project

Document what you currently have:

```bash
# List your current views
ls src/views/

# List your current components
ls src/components/

# Check your current routes
cat src/router/index.js  # or index.ts

# Review your API endpoints
cat server/routes/  # or wherever your routes are

# Check Firebase config
cat src/firebase/config.js  # or wherever your config is
```

**Create an inventory document:**
```
CURRENT_STATE.md
- List all existing routes/pages
- List all existing components
- Note current color scheme
- Note any custom animations
- List API endpoints that exist
- Note any third-party integrations
```

### Step 3: Install New Dependencies

```bash
# Install PrimeVue and related packages
npm install primevue@^4.0.0 primeicons @primevue/themes

# Additional utilities (if not already installed)
npm install @vueuse/core  # Useful Vue composables
npm install gsap  # For advanced animations (optional)

# Check what you already have
npm list --depth=0 > current_dependencies.txt
```

### Step 4: Set Up New Project Structure

**Add these new directories** (keep existing ones):

```
src/
├── assets/
│   ├── styles/
│   │   ├── sagebound-custom.css         🆕 NEW
│   │   ├── fonts.css                    🆕 NEW
│   │   └── legacy/                      📦 MOVE OLD STYLES HERE
│   └── images/
│       └── fantasy/                     🆕 NEW
│           ├── dragon.svg
│           ├── fairy.svg
│           └── sparkle.svg
├── components/
│   ├── legacy/                          📦 MOVE OLD COMPONENTS HERE
│   ├── common/                          🆕 NEW
│   │   ├── SparkleButton.vue
│   │   ├── BookCard.vue
│   │   ├── MagicalLoader.vue
│   │   ├── ProgressRing.vue
│   │   ├── BottomNav.vue
│   │   └── AppHeader.vue
│   ├── books/                           🆕 NEW or UPDATE
│   │   ├── BookGrid.vue
│   │   ├── BookList.vue
│   │   ├── BookDetail.vue
│   │   └── ContinueReading.vue
│   ├── shelves/                         🆕 NEW
│   │   ├── ShelfCard.vue
│   │   └── ShelfGrid.vue
│   └── music/                           🆕 NEW
│       └── MusicPairingCard.vue
├── composables/
│   ├── useSparkles.js                   🆕 NEW
│   ├── useFairyDust.js                  🆕 NEW
│   └── useAuth.js                       ✅ KEEP (existing Firebase auth)
├── theme/
│   └── sagebound-theme.js               🆕 NEW
├── views/
│   ├── legacy/                          📦 MOVE OLD VIEWS HERE
│   ├── HomeView.vue                     🔄 REDESIGN
│   ├── DiscoverView.vue                 🔄 REDESIGN
│   ├── LibraryView.vue                  🔄 REDESIGN
│   ├── FavoritesView.vue                🔄 REDESIGN
│   ├── ProfileView.vue                  🔄 REDESIGN
│   ├── BookDetailView.vue               🔄 REDESIGN
│   └── ShelfDetailView.vue              🔄 REDESIGN
├── stores/                              ✅ KEEP (existing Pinia stores)
├── services/                            ✅ KEEP (API service files)
├── firebase/                            ✅ KEEP (Firebase config)
└── utils/
    └── mockData.js                      🆕 NEW (for UI development)
```

### Step 5: Set Up PrimeVue Theme

**Update src/main.js** (or main.ts):

```javascript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// PrimeVue
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import sageboundTheme from './theme/sagebound-theme'

// PrimeVue Services
import ToastService from 'primevue/toastservice'
import DialogService from 'primevue/dialogservice'

// PrimeVue Components (register the ones you'll use most)
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import Toast from 'primevue/toast'
import ProgressBar from 'primevue/progressbar'
import Badge from 'primevue/badge'
import Avatar from 'primevue/avatar'
import Skeleton from 'primevue/skeleton'
import Chip from 'primevue/chip'

// Keep your existing Firebase imports
// import { auth } from './firebase/config'  // or wherever yours is

// Styles
import 'primeicons/primeicons.css'
import './assets/styles/sagebound-custom.css'

const app = createApp(App)

// Use existing Pinia instance
const pinia = createPinia()
app.use(pinia)

// Configure PrimeVue with new theme
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      ...sageboundTheme,
      darkModeSelector: '[data-theme="dark"]',
    }
  }
})

app.use(router)
app.use(ToastService)
app.use(DialogService)

// Register PrimeVue components globally
app.component('Button', Button)
app.component('Card', Card)
app.component('InputText', InputText)
app.component('Dialog', Dialog)
app.component('Toast', Toast)
app.component('ProgressBar', ProgressBar)
app.component('Badge', Badge)
app.component('Avatar', Avatar)
app.component('Skeleton', Skeleton)
app.component('Chip', Chip)

app.mount('#app')
```

### Step 6: Create Mock Data for UI Development

**Create src/utils/mockData.js:**

This allows you to develop UI without backend calls for now.

```javascript
// Mock data for UI development
// Will be replaced with real API calls later

export const mockBooks = [
  {
    id: 1,
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    coverUrl: null,
    genres: ['Fantasy', 'Adventure'],
    progress: 67,
    currentChapter: 24,
    totalChapters: 36,
    isCurrentlyReading: true,
    isFavorite: true,
    rating: 4.5,
    gradient: 'linear-gradient(135deg, #102B1F 0%, #8BA888 100%)'
  },
  // Add more books...
]

export const mockShelves = [
  {
    id: 1,
    name: 'Want to Read',
    bookCount: 32,
    books: [1, 2, 3],
    emoji: '📚'
  },
  // Add more shelves...
]

export const mockUserStats = {
  booksRead: 24,
  readingStreak: 7,
  totalPages: 8432
}
```

---

## 📝 Phase 1 Task List

### 🏗️ Foundation Tasks

#### Setup & Configuration
- [ ] Create backup branch with current code
- [ ] Install PrimeVue and dependencies
- [ ] Create new folder structure (assets/styles, theme, etc.)
- [ ] Copy sagebound-theme.js to `/src/theme/`
- [ ] Copy sagebound-custom.css to `/src/assets/styles/`
- [ ] Set up font imports (Cinzel, Inter)
- [ ] Update main.js with PrimeVue configuration
- [ ] Test that app still runs with new dependencies

#### Legacy Code Management
- [ ] Move old CSS files to `assets/styles/legacy/`
- [ ] Move old components to `components/legacy/`
- [ ] Move old views to `views/legacy/`
- [ ] Document what each legacy file did (for reference)
- [ ] Create migration notes document

### 🎨 Design & Styling Tasks

- [ ] Create SVG icons for fantasy elements (or use emojis initially)
- [ ] Test Rose & Pine color palette across app
- [ ] Replace all old color variables with new ones
- [ ] Update any hardcoded colors in existing code
- [ ] Test dark mode compatibility (if you had it)
- [ ] Ensure animations work smoothly at 60fps
- [ ] Test responsive design on mobile, tablet, desktop

### 🏗️ Core Component Development

#### Essential Components (Build These First)
- [ ] **BottomNav.vue** - Wine-colored bottom navigation (used everywhere)
- [ ] **AppHeader.vue** - Header with search, avatar, icons
- [ ] **SparkleButton.vue** - Button with sparkle effect
- [ ] **MagicalLoader.vue** - Loading state component
- [ ] **BookCard.vue** - Main book display card

#### Book Components
- [ ] **ContinueReading.vue** - Large featured book card
- [ ] **BookGrid.vue** - Grid layout for books
- [ ] **BookList.vue** - List layout for books
- [ ] **BookDetail.vue** - Book detail component (for detail page)

#### Other Components
- [ ] **ShelfCard.vue** - Shelf preview card
- [ ] **ShelfGrid.vue** - Grid of shelves
- [ ] **MusicPairingCard.vue** - Music playlist card
- [ ] **ProgressRing.vue** - Circular progress indicator
- [ ] **CategoryTabs.vue** - Horizontal category selector

### 🧩 Composables Tasks

- [ ] **useSparkles.js** - Sparkle animation logic
- [ ] **useFairyDust.js** - Cursor trail effect
- [ ] Review existing composables (keep auth-related ones)
- [ ] Update any composables that reference old components

### 📄 View Migration Tasks

**For each view, the process is:**
1. Keep the route and basic structure
2. Replace old components with new ones
3. Update styling to Rose & Pine theme
4. Test with mock data first
5. Then reconnect to real backend APIs

#### Views to Update
- [ ] **HomeView.vue** - Main dashboard
  - [ ] Replace old layout with new mobile mockup design
  - [ ] Add search bar
  - [ ] Add category tabs
  - [ ] Add "Continue Reading" section
  - [ ] Add horizontal scroll book sections
  - [ ] Test with mockData
  - [ ] Reconnect to real user data API

- [ ] **DiscoverView.vue** - Browse books
  - [ ] Add genre filter tabs
  - [ ] Implement new book grid
  - [ ] Test with mockData
  - [ ] Reconnect to Google Books API (when ready)

- [ ] **LibraryView.vue** - User shelves
  - [ ] Update to shelf grid design
  - [ ] Add create shelf button
  - [ ] Test with mockData
  - [ ] Reconnect to MongoDB shelves API

- [ ] **FavoritesView.vue** - Favorite books
  - [ ] Update to new book grid
  - [ ] Add filter/sort options
  - [ ] Test with mockData
  - [ ] Reconnect to favorites API

- [ ] **ProfileView.vue** - User profile
  - [ ] Redesign with new stats cards
  - [ ] Update settings UI
  - [ ] Keep Firebase auth integration
  - [ ] Update user data display

- [ ] **BookDetailView.vue** - Individual book
  - [ ] New layout with large cover
  - [ ] Add genre chips
  - [ ] Add action buttons
  - [ ] Keep existing add-to-shelf functionality

- [ ] **ShelfDetailView.vue** - Individual shelf
  - [ ] New book grid layout
  - [ ] Keep add/remove book functionality
  - [ ] Update edit shelf UI

### 🛣️ Router Updates

- [ ] Review existing routes (keep them!)
- [ ] Update any route names if needed
- [ ] Add route transitions (fade/slide effects)
- [ ] Test navigation between all views
- [ ] Ensure auth guards still work

### 🔌 Backend Integration Tasks

**Keep Your Existing APIs - Just Update the Frontend:**

- [ ] Review existing API service files
- [ ] Ensure they still work with new views
- [ ] Update any response mapping if needed
- [ ] Test Firebase auth still works
- [ ] Test MongoDB queries still work
- [ ] Update error handling with new Toast notifications

### ✅ Testing & Polish

- [ ] Test all navigation flows
- [ ] Verify sparkle effects work
- [ ] Test horizontal scroll carousels
- [ ] Test bottom nav highlights current page
- [ ] Test category tab switching
- [ ] Verify Firebase auth (login/logout)
- [ ] Test book CRUD operations
- [ ] Test shelf CRUD operations
- [ ] Mobile responsiveness check
- [ ] Tablet layout check
- [ ] Desktop layout check
- [ ] Browser compatibility test
- [ ] Performance check (60fps animations)

---

## 🎯 Migration Strategy

### Week 1: Foundation
**Goal: Get new design system integrated without breaking existing functionality**

**Day 1-2: Setup**
- [ ] Create backups
- [ ] Install dependencies
- [ ] Set up PrimeVue theme
- [ ] Copy new CSS files
- [ ] Test app still runs

**Day 3-4: Core Components**
- [ ] Build BottomNav (most critical)
- [ ] Build AppHeader
- [ ] Test on one existing view

**Day 5-7: Component Library**
- [ ] Build SparkleButton
- [ ] Build BookCard
- [ ] Build other common components
- [ ] Create component demo page

### Week 2: View Migration
**Goal: Update main views one at a time**

**Priority Order:**
1. **HomeView** (most important - main dashboard)
2. **LibraryView** (shelves functionality)
3. **BookDetailView** (individual book)
4. **DiscoverView** (search/browse)
5. **FavoritesView**
6. **ProfileView**
7. **ShelfDetailView**

**For each view:**
- Work with mockData first
- Get UI perfect
- Then reconnect to real APIs
- Test thoroughly before moving to next

### Week 3: Refinement
**Goal: Polish and connect everything**

- [ ] Reconnect all views to backend APIs
- [ ] Test full user flows
- [ ] Add all animations
- [ ] Fix any bugs
- [ ] Performance optimization

### Week 4: Final Polish
**Goal: Perfect the details**

- [ ] Final responsive design check
- [ ] Browser testing
- [ ] Add any missing features
- [ ] User testing
- [ ] Deploy to staging

---

## 📚 Key Files to Add/Update

### Files to Copy From Design System

1. **sagebound-theme.js** → `/src/theme/sagebound-theme.js` 🆕
2. **sagebound-custom.css** → `/src/assets/styles/sagebound-custom.css` 🆕
3. **sagebound-design-system.md** → Keep in project root for reference 📖
4. **sagebound-rose-pine-mobile.html** → Keep for visual reference 📖

### Files to Create

1. **src/utils/mockData.js** - Mock data for development 🆕
2. **src/components/common/** - All new common components 🆕
3. **MIGRATION_NOTES.md** - Track what you've changed 📝
4. **CURRENT_STATE.md** - Document existing structure 📝

### Files to Update

1. **src/main.js** - Add PrimeVue configuration 🔄
2. **src/App.vue** - Update root styles if needed 🔄
3. **src/views/** - All view files (one by one) 🔄
4. **package.json** - New dependencies added ✅

### Files to Keep As-Is

1. **Firebase config files** - Don't touch! ✅
2. **MongoDB connection files** - Don't touch! ✅
3. **Server directory** - Backend stays the same ✅
4. **API service files** - Keep existing (may need minor updates) ✅
5. **Auth composables/stores** - Keep existing ✅
6. **.env files** - Don't change ✅

---

## 🔥 Migration Gotchas & Tips

### Common Issues to Watch For

**1. Component Import Paths**
- Old: `import MyComponent from '@/components/MyComponent.vue'`
- New: `import MyComponent from '@/components/legacy/MyComponent.vue'`
- Solution: Use find & replace carefully

**2. CSS Variables**
- Old color variables will break
- Solution: Find all old color refs and update to new Rose & Pine palette

**3. API Integration**
- Don't disconnect APIs while redesigning UI
- Solution: Keep existing API calls, just update the UI layer

**4. State Management**
- Your existing Pinia stores should work fine
- May need to update some state properties for new UI

**5. Route Guards**
- Keep your existing auth guards
- Just update the views they protect

### Development Tips

**Work in Layers:**
1. Get the component looking right (with mockData)
2. Then wire it up to real data
3. Don't try to do both at once

**Test Frequently:**
- Run the app after every major change
- Commit working code often
- Use Git branches for experimental work

**Use Mock Data Liberally:**
- Easier to develop UI without backend dependencies
- Switch to real APIs once UI is solid

**Keep Legacy Components Initially:**
- Don't delete old code right away
- Move to `legacy/` folder instead
- Once new version works, then delete

---

## 📱 Pages to Redesign (Priority Order)

### 1. HomeView (Priority: HIGHEST)
**Why first:** Main entry point, showcases most features

**Redesign Tasks:**
- [ ] New header with search and user greeting
- [ ] Category tabs (All, eBooks, New, Fiction, etc.)
- [ ] Continue Reading featured card
- [ ] Popular books horizontal scroll
- [ ] New releases section
- [ ] Trending section
- [ ] Test with mockData
- [ ] Reconnect to user's actual books API

### 2. LibraryView (Priority: HIGH)
**Why second:** Core functionality for organizing books

**Redesign Tasks:**
- [ ] Shelf grid layout
- [ ] Shelf preview cards
- [ ] Create new shelf button
- [ ] Test with mockData
- [ ] Reconnect to MongoDB shelves

### 3. BookDetailView (Priority: HIGH)
**Why third:** Users need to see book details

**Redesign Tasks:**
- [ ] Large book cover display
- [ ] Book info layout
- [ ] Genre chips
- [ ] Add to shelf button
- [ ] Mark as favorite
- [ ] Progress tracking UI
- [ ] Keep existing API connections

### 4-7. Other Views (Priority: MEDIUM)
Continue with DiscoverView, FavoritesView, ProfileView, ShelfDetailView

---

## 🚫 What NOT to Change (Yet)

### Backend - Leave Completely Alone
- ❌ Don't modify Firebase Auth setup
- ❌ Don't change MongoDB schemas
- ❌ Don't modify server API endpoints
- ❌ Don't change authentication logic
- ❌ Don't modify environment variables

### Why?
- Backend is working - don't break it!
- Focus on frontend redesign first
- Backend improvements come in Phase 2

### When Can I Change Backend?
**Phase 2** (after UI is complete):
- Add Google Books API integration
- Add Spotify API integration
- Add AI chatbot backend
- Optimize MongoDB queries
- Add new API endpoints

---

## ✅ Success Criteria for Phase 1

Before considering Phase 1 complete:

### UI/UX
✅ All views redesigned with Rose & Pine theme
✅ Navigation works smoothly
✅ Animations are smooth (60fps)
✅ Mobile responsive (tested on real device)
✅ Sparkle effects work
✅ Bottom nav highlights correct page

### Functionality
✅ Firebase auth still works (login/logout)
✅ Can view books from MongoDB
✅ Can add books to shelves
✅ Can create/delete shelves
✅ Can mark books as favorites
✅ Progress tracking works

### Technical
✅ No console errors
✅ App runs in dev mode
✅ App builds for production
✅ All routes work
✅ No broken API calls

### Polish
✅ Looks professional and polished
✅ Matches mobile mockup design
✅ Works on Chrome, Safari, Firefox
✅ Performance is good
✅ User testing shows positive response

---

## 🚀 Phase 2 Preview (Don't Start Yet!)

**After UI redesign is complete, Phase 2 will add:**

### New APIs
- Google Books API integration (replace mockData)
- Spotify API for music pairings
- AI/LLM API for book recommendations

### New Features
- Real book search
- Music playlist integration
- AI chatbot interface
- Book recommendations engine

### Backend Improvements
- Optimize MongoDB queries
- Add caching layer
- New API endpoints for new features
- Enhanced error handling

---

## 💡 Pro Tips for Migration

### 1. Use Feature Flags (Optional)
```javascript
// In your .env or config
VITE_USE_NEW_DESIGN=true

// In your code
const useNewDesign = import.meta.env.VITE_USE_NEW_DESIGN === 'true'

// Conditionally show old or new component
<OldComponent v-if="!useNewDesign" />
<NewComponent v-else />
```

### 2. Side-by-Side Comparison
- Keep legacy views accessible
- Add route param to switch between old/new
- Example: `/home` (new) and `/home?legacy=true` (old)

### 3. Component Playground
Create `src/views/ComponentPlayground.vue` to test new components in isolation

### 4. Git Workflow
```bash
# Create feature branches for each view
git checkout -b redesign-home-view
# Work on HomeView
git commit -m "Redesign HomeView with Rose & Pine theme"
git push origin redesign-home-view
# Create PR, review, merge
# Then move to next view
```

### 5. Document Everything
Keep notes on:
- What broke and how you fixed it
- Components that need more work
- API endpoints that need updating
- Performance issues
- Browser bugs

---

## 📞 Getting Started Checklist

### Today (Day 1)
- [ ] Read through this entire guide
- [ ] Create backup branch
- [ ] Document current project state
- [ ] Install new dependencies
- [ ] Copy theme files to project
- [ ] Test that app still runs

### This Week
- [ ] Set up PrimeVue in main.js
- [ ] Build BottomNav component
- [ ] Build AppHeader component
- [ ] Update App.vue with new components
- [ ] Test basic navigation

### Next 2-3 Weeks
- [ ] Redesign HomeView
- [ ] Redesign LibraryView
- [ ] Redesign BookDetailView
- [ ] Build remaining components
- [ ] Test everything thoroughly

### Week 4
- [ ] Final polish
- [ ] Performance optimization
- [ ] User testing
- [ ] Prepare for Phase 2

---

## 🎉 Final Notes

- **Take your time** - Rushing leads to bugs
- **Test frequently** - Small changes, test, commit
- **Keep backend working** - Don't break what works
- **Use mockData** - Easier than real APIs while designing
- **Document changes** - Future you will thank you
- **Have fun!** - This redesign is going to look amazing! ✨

---

**Ready to transform Sagebound into something beautiful?** 

Start with creating that backup branch, then let's build! 🌹📚

Good luck, Emilie! 🎨✨
