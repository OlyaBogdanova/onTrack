<template>
  <li class="flex flex-col gap-1 p-4">
    <div class="truncate text-xl">{{ activity.name }}</div>
    <div class="flex h-5 overflow-hidden rounded bg-neutral-200">
      <div :class="`bg-${color[index - 1]}-500`" :style="`width: ${progress}%`"></div>
    </div>
    <div class="flex justify-between font-mono text-sm">
      <span>{{ progress }}%</span>
      <span>{{ timeProgress[index - 1] }}</span>
    </div>
  </li>
</template>
<script setup>
import { isActivityValid } from '@/validators.js'
import { getActivityProgress } from '@/activities.js'
import { computed } from 'vue'
const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid
  }
})

const color = ['red', 'yellow', 'blue', 'green']

const timeProgress = ['03:00 / 30:00', '15:00 / 30:00', '21:00 / 30:00', '30:00 / 30:00']
const progress = computed(() => getActivityProgress(props.activity))
</script>
<style lang=""></style>
