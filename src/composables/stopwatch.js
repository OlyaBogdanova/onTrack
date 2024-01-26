import { ref } from 'vue'
import { MILLISECONDS_IN_SECOND } from '../constans'

export function useStopWatch(initialSeconds, handleSecondsChange) {
  const isRunning = ref(false)
  const seconds = ref(initialSeconds)

  function start() {
    isRunning.value = setInterval(() => {
      handleSecondsChange()
      seconds.value++
    }, MILLISECONDS_IN_SECOND)
  }

  function stop() {
    clearInterval(isRunning.value)
    isRunning.value = false
  }

  function reset() {
    stop()

    seconds.value = 0
    handleSecondsChange()
  }

  return {
    isRunning,
    start,
    stop,
    reset,
    seconds
  }
}
