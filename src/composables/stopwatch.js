import { ref, watch } from 'vue'
import { MILLISECONDS_IN_SECOND } from '../constans'
import { updateTimelineItem } from '@/timelineItems.js'

export function useStopWatch(timelineItem) {
  const isRunning = ref(false)
  const seconds = ref(timelineItem.activitySeconds)
  function start() {
    isRunning.value = setInterval(() => {
      updateTimelineItem(timelineItem, {
        activitySeconds: timelineItem.activitySeconds + 1
      })
      seconds.value++
    }, MILLISECONDS_IN_SECOND)
  }

  function stop() {
    clearInterval(isRunning.value)
    isRunning.value = false
  }

  function reset() {
    stop()

    updateTimelineItem(timelineItem, {
      activitySeconds: timelineItem.activitySeconds - seconds.value
    })
    seconds.value = 0
  }
  watch(
    () => timelineItem.activityId,
    () => updateTimelineItem(timelineItem, { activitySeconds: seconds.value })
  )

  return {
    isRunning,
    start,
    stop,
    reset
  }
}
