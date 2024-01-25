<template>
  <div :class="classes">
    {{ seconds }}
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { formatSeconds } from '@/functions.js'
import { isActivityValid } from '@/validators'
import { getTotalActivitySeconds } from '@/timelineItems'

const props = defineProps({
  activity: { type: Number, required: true, validator: isActivityValid }
})

const secondsDiff = computed(
  () => getTotalActivitySeconds(props.activity) - props.activity.secondsToComplete
)
const sign = computed(() => (secondsDiff.value >= 0 ? '+' : '-'))
const seconds = computed(() => `${sign.value}${formatSeconds(secondsDiff.value)}`)
const colorClasses = computed(() =>
  secondsDiff.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
)
const classes = computed(
  () => `${colorClasses.value} flex items-center rounded px-2 font-mono text-xl `
)
</script>

<style lang=""></style>
