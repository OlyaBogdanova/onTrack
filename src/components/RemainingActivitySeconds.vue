<template>
  <div :class="classes">
    {{ formatSecondsWithSign(remainingSeconds) }}
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { formatSecondsWithSign } from '@/functions.js'
import { isActivityValid } from '@/validators'
import { calculateTrackedActivitySeconds, timelineItems } from '@/timelineItems'

const props = defineProps({
  activity: { type: Number, required: true, validator: isActivityValid }
})

const remainingSeconds = computed(
  () =>
    calculateTrackedActivitySeconds(timelineItems.value, props.activity) -
    props.activity.secondsToComplete
)

const classes = computed(() => [
  'flex items-center rounded px-2 font-mono text-xl',
  remainingSeconds.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
])
</script>

<style lang=""></style>
