<template>
  <hr
    ref="indicatorRef"
    class="pointer-events-none absolute z-10 w-full border-b-2 border-red-600 transition-all"
    :style="{ top: calculateTopOffset }"
  />
</template>
<script setup>
import { computed, ref, watchEffect } from 'vue'
import {
  HUNDRED_PERCENT,
  MILLISECONDS_IN_SECOND,
  MINUTES_IN_HOUR,
  SECONDS_IN_DAY,
  SECONDS_IN_MINUTE
} from '../constans'
const indicatorRef = ref()
const secondsSinceMidhight = ref(calculateSecondsSinceMidnight())
const calculateTopOffset = computed(
  () =>
    (calculateSecondsSinceMidnightInPercentage.value * getTimelineHeight()) / HUNDRED_PERCENT + 'px'
)

const calculateSecondsSinceMidnightInPercentage = computed(
  () => (HUNDRED_PERCENT * secondsSinceMidhight.value) / SECONDS_IN_DAY
)
function calculateSecondsSinceMidnight() {
  const now = new Date()
  return (
    SECONDS_IN_MINUTE * MINUTES_IN_HOUR * now.getHours() +
    SECONDS_IN_MINUTE * now.getMinutes() +
    now.getSeconds()
  )
}

function getTimelineHeight() {
  return indicatorRef.value?.parentNode.getBoundingClientRect().height
}

watchEffect(() => {
  if (secondsSinceMidhight.value > SECONDS_IN_DAY) {
    secondsSinceMidhight.value = 0
  }
})
setInterval(() => secondsSinceMidhight.value++, MILLISECONDS_IN_SECOND)
</script>
<style lang=""></style>
