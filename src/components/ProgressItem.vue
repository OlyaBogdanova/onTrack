<template>
  <li class="flex flex-col gap-1 p-4">
    <div class="truncate text-xl">{{ activity.name }}</div>
    <div class="flex h-5 overflow-hidden rounded bg-neutral-200">
      <div :class="colorClass" :style="`width: ${percentage}%`"></div>
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
import { formatSeconds } from '@/functions.js'
import { useProgress } from '@/composables/progress'
const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid
  }
})
const { percentage, colorClass, trackActivitySeconds } = useProgress(props.activity)
</script>
<style lang=""></style>
