<template>
  <a href="#" :class="classes" @click.prevent="scrollToHour(hour)">{{ formattedHour }}</a>
</template>
<script setup>
import { isHourValid } from '@/validators.js'

import { computed } from 'vue'
import { scrollToHour } from '@/timelineItems'
import { now } from '@/time.js'
const props = defineProps({
  hour: {
    type: Number,
    required: true,
    validator: isHourValid
  }
})
const classes = computed(() => [
  'rounded  px-2 font-mono text-lg  absolute -top-4 left-1/2 -translate-x-1/2',
  props.hour === now.value.getHours()
    ? 'bg-purple-900 text-white font-bold'
    : 'bg-gray-100 text-gray-500'
])
const formattedHour = computed(() => `${props.hour.toString().padStart(2, 0)}:00`)
</script>
<style lang=""></style>
