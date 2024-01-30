import './assets/main.css'
import { saveState, loadState } from '@/storage.js'
import { createApp } from 'vue'
import App from './App.vue'
import { startTimelineItemTimer, findActiveTimelineItem } from '@/timelineItems.js'

loadState()
const activeTimelineItem = findActiveTimelineItem()
if (activeTimelineItem) {
  startTimelineItemTimer(activeTimelineItem)
}

document.addEventListener('visibilitychange', () =>
  document.visibilityState === 'visible' ? loadState() : saveState()
)

createApp(App).mount('#app')
