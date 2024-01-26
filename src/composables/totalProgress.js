import { trackedActivities, calculateCompletionPercentage } from '@/activities'
import { computed } from 'vue'
import { getProgressColorClass } from '@/functions.js'
import { calculateTrackedActivitySeconds, timelineItems } from '@/timelineItems.js'
export function useTotalProgress() {
  const percentage = computed(() => calculateCompletionPercentage(totalTrackSeconds.value))
  const colorClass = computed(() => getProgressColorClass(percentage.value))

  const totalTrackSeconds = computed(() => {
    return trackedActivities.value
      .map((activity) =>
        Math.min(
          calculateTrackedActivitySeconds(timelineItems.value, activity),
          activity.secondsToComplete
        )
      )
      .reduce((total, seconds) => total + seconds, 0)
  })
  return {
    colorClass,
    percentage
  }
}
