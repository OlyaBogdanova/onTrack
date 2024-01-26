<template>
  <li class="flex flex-col gap-1 p-4">
    <div class="truncate text-xl">{{ activity.name }}</div>
    <div class="flex h-5 overflow-hidden rounded bg-neutral-200">
      <div :class="color" :style="`width: ${percentage}%`"></div>
    </div>
    <div class="flex justify-between font-mono text-sm">
      <span>{{ percentage }}%</span>
      <span
        >{{ formatSeconds(trackActivitySeconds) }} /
        {{ formatSeconds(activity.secondsToComplete) }}</span
      >
    </div>
  </li>
</template>
<script setup>
import { isActivityValid } from '@/validators.js'
import { calculateActivityCompletionPercentage } from '@/activities.js'
import { calculateTrackedActivitySeconds, timelineItems } from '@/timelineItems.js'
import { getProgressColorClass, formatSeconds } from '@/functions.js'
import { computed } from 'vue'
const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid
  }
})

const percentage = computed(() =>
  calculateActivityCompletionPercentage(props.activity, trackActivitySeconds.value)
)
const color = computed(() => getProgressColorClass(percentage.value))
const trackActivitySeconds = computed(() =>
  calculateTrackedActivitySeconds(timelineItems.value, props.activity)
)
</script>
<style lang=""></style>
