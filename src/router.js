import { ref } from 'vue'
import TheTimeline from '@/pages/TheTimeline.vue'
import TheProgress from '@/pages/TheProgress.vue'
import TheActivities from '@/pages/TheActivities.vue'
import { isPageValid } from './validators'

import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constans'
function normalizePageHash() {
  const hash = window.location.hash.slice(1)
  if (isPageValid(hash)) {
    return hash
  }
  window.location.hash = PAGE_TIMELINE
  return PAGE_TIMELINE
}
export const currentPage = ref(normalizePageHash())

export function navigate(page) {
  document.body.scrollIntoView()

  currentPage.value = page
}

export const routes = {
  [PAGE_TIMELINE]: TheTimeline,
  [PAGE_ACTIVITIES]: TheActivities,
  [PAGE_PROGRESS]: TheProgress
}
