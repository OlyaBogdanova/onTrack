import { computed, ref } from 'vue'
import {
  HUNDRED_PERCENT,
  MILLISECONDS_IN_SECOND,
  SECONDS_IN_DAY,
  SECONDS_IN_MINUTE
} from '@/constans'

export const now = ref(today())
const midnight = computed(() => new Date(now.value).setHours(0, 0, 0, 0))
let timer = null
const secondsSinceMidhight = computed(() => (now.value - midnight.value) / MILLISECONDS_IN_SECOND)

export function startTimer() {
  now.value = today()
  timer = setInterval(() => {
    now.value = new Date(now.value.getTime() + SECONDS_IN_MINUTE * MILLISECONDS_IN_SECOND)
  }, MILLISECONDS_IN_SECOND)
}

export function stopTimer() {
  clearInterval(timer)
}

export const calculateSecondsSinceMidnightInPercentage = computed(
  () => (HUNDRED_PERCENT * secondsSinceMidhight.value) / SECONDS_IN_DAY
)

export function today() {
  const today = new Date()
  today.setHours(0, 0)
  return today
}
export function tomorrow() {
  const tomorrow = today()
  tomorrow.setDate(tomorrow.getDate() + 1)

  return tomorrow
}

export function isToday(date) {
  return date.toDateString() === today().toDateString()
}
