import { APP_NAME } from '@/constans.js'
import { today } from '@/time.js'
import { timelineItems } from './timelineItems'
import { activities } from './activities'
import { isToday } from '@/time.js'

export function loadState() {
  const serializedState = localStorage.getItem(APP_NAME)
  const state = serializedState ? JSON.parse(serializedState) : {}
  timelineItems.value = isToday(new Date(state.date)) ? state?.timelineItems : timelineItems.value
  activities.value = state?.activities || activities.value
}

export function saveState() {
  localStorage.setItem(
    APP_NAME,
    JSON.stringify({
      timelineItems: timelineItems.value,
      activities: activities.value,

      date: today()
    })
  )
}
