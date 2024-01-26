import { ref, computed } from 'vue'
import { SECONDS_IN_HOUR } from '@/constans.js'
import { id } from '@/functions.js'

export const activities = ref(generateActivities())
export const trackedActivities = computed(() =>
  activities.value.filter((activity) => activity.secondsToComplete)
)

export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

export function createActivity(activity) {
  activities.value.push(activity)
}

export function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

export function updateActivity(activity, fields) {
  return Object.assign(activity, fields)
}

function generateActivities() {
  return [' Coding', 'Reading', 'Training'].map((name, hour) => ({
    id: id(),
    name,
    secondsToComplete: hour * SECONDS_IN_HOUR
  }))
}

function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({ label: activity.name, value: activity.id }))
}
