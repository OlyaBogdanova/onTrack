import { ref } from 'vue'
import { HOURS_IN_DAY, MIDNIGHT_HOUR, MILLISECONDS_IN_SECOND } from './constans'
import { now } from '@/time'

export const timelineItemRefs = ref([])
function generateTimelineItems() {
  return [...Array(HOURS_IN_DAY).keys()].map((hour) => ({
    hour,
    activityId: null,
    activitySeconds: 0,
    isActive: false
  }))
}
export const timelineItems = ref(generateTimelineItems())

export function updateTimelineItem(timelineItem, fields) {
  return Object.assign(timelineItem, fields)
}

export function resetTimelineItemActivities(timelineItems, activity) {
  filterTimelineItemsByActivity(timelineItems, activity).forEach((timelineItem) =>
    updateTimelineItem(timelineItem, {
      activityId: null,
      activitySeconds: timelineItem.hour === now.value.getHours() ? timelineItem.activitySeconds : 0
    })
  )
}

function filterTimelineItemsByActivity(timelineItems, { id }) {
  return timelineItems.filter(({ activityId }) => activityId === id)
}

export function calculateTrackedActivitySeconds(timelineItems, activity) {
  return filterTimelineItemsByActivity(timelineItems, activity)
    .map(({ activitySeconds }) => activitySeconds)
    .reduce((total, seconds) => Math.round(total + seconds), 0)
}

export function scrollToHour(hour, isSmooth = true) {
  const el = hour === MIDNIGHT_HOUR ? document.body : timelineItemRefs.value[hour - 1].$el

  el.scrollIntoView({ behavior: isSmooth ? 'smooth' : 'instant' })
}

export function scrollToCurrentHour(isSmooth = false) {
  scrollToHour(now.value.getHours(), isSmooth)
}
export function findActiveTimelineItem() {
  return timelineItems.value.find(({ isActive }) => isActive)
}
let timelineItemTimer = null

export function startTimelineItemTimer(activeTimelineItem) {
  timelineItemTimer = setInterval(() => {
    updateTimelineItem(activeTimelineItem, {
      activitySeconds: activeTimelineItem.activitySeconds + 1
    })
  }, MILLISECONDS_IN_SECOND)
}
export function stopTimelineItemTimer() {
  clearInterval(timelineItemTimer)
}
