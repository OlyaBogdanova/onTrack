import { getProgressColorClass } from '@/functions.js'
import { calculateActivityCompletionPercentage } from '@/activities.js'
import { calculateTrackedActivitySeconds, timelineItems } from '@/timelineItems.js'
import { computed } from 'vue'

export function useProgress(activity) {
  const percentage = computed(() =>
    calculateActivityCompletionPercentage(activity, trackActivitySeconds.value)
  )
  const colorClass = computed(() => getProgressColorClass(percentage.value))
  const trackActivitySeconds = computed(() =>
    calculateTrackedActivitySeconds(timelineItems.value, activity)
  )

  return {
    percentage,
    colorClass,
    trackActivitySeconds
  }
}
