import { ref } from 'vue'

import { isPageValid } from './validators'
import { PAGE_TIMELINE } from './constans'

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
