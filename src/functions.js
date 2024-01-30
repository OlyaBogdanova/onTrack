import {
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  MILLISECONDS_IN_SECOND,
  LOW_PERCENT,
  MEDIUM_PERCENT,
  HUNDRED_PERCENT
} from './constans'
import { isNull } from './validators'

export function id() {
  return Date.now().toString(36) + Math.random().toString().substring(2)
}

export function normalizeSelectValue(val) {
  return isNull(val) || isNaN(val) ? val : +val
}

function generatePeriodSelectOtionsLabel(period) {
  const hours = Math.floor(period / MINUTES_IN_HOUR)
    .toString()
    .padStart(2, 0)
  const minutes = (period % MINUTES_IN_HOUR).toString().padStart(2, 0)
  return `${hours}:${minutes}`
}

export function generatePeriodSelectOptions() {
  const periodsInMinutes = [
    15, 30, 45, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480
  ]
  return periodsInMinutes.map((period) => ({
    value: period * SECONDS_IN_MINUTE,
    label: generatePeriodSelectOtionsLabel(period),
    activitySeconds: 0
  }))
}

export function formatSecondsWithSign(seconds) {
  const sign = seconds >= 0 ? '+' : '-'

  return `${sign}${formatSeconds(seconds)}`
}
export function formatSeconds(seconds) {
  const date = new Date()
  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECOND)
  const utc = date.toUTCString()
  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}

export function getProgressColorClass(percentage) {
  if (percentage < LOW_PERCENT) return 'bg-red-500'
  if (percentage < MEDIUM_PERCENT) return 'bg-yellow-500'
  if (percentage < HUNDRED_PERCENT) return 'bg-blue-500'
  return 'bg-green-500'
}
