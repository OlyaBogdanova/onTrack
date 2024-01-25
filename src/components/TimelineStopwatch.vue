<template>
  <div class="flex gap-2">
    <BaseButton :type="BUTTON_TYPE_DANGER" :disabled="!timelineItem.activitySeconds" @click="reset"
      ><ArrowPathIcon class="h-8"
    /></BaseButton>
    <div class="flex flex-1 items-center rounded bg-gray-100 px-2 font-mono text-3xl">
      {{ formatSeconds(timelineItem.activitySeconds) }}
    </div>
    <BaseButton v-if="isRunning" :type="BUTTON_TYPE_WARNING"
      ><PauseIcon class="h-8" @click="stop"
    /></BaseButton>
    <BaseButton v-else :type="BUTTON_TYPE_SUCCESS" :disabled="isStartButtonDisabled"
      ><PlayIcon class="h-8" @click="start"
    /></BaseButton>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline'
import { BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING, BUTTON_TYPE_DANGER } from '@/constans.js'
import { isTimelineItemValid } from '@/validators.js'
import { formatSeconds, currentHour } from '@/functions.js'
import { MILLISECONDS_IN_SECOND } from '../constans'
import { updateTimelineActivitySeconds } from '@/timelineItems.js'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  }
})

const seconds = ref(props.timelineItem.activitySeconds)
const isRunning = ref(false)

const isStartButtonDisabled = computed(() => props.timelineItem.hour !== currentHour())

function start() {
  isRunning.value = setInterval(() => {
    updateTimelineActivitySeconds(props.timelineItem, 1)
    seconds.value++
  }, MILLISECONDS_IN_SECOND)
}

function stop() {
  clearInterval(isRunning.value)
  isRunning.value = false
}

function reset() {
  stop()
  updateTimelineActivitySeconds()
  updateTimelineActivitySeconds(props.timelineItem, -seconds.value)
  seconds.value = 0
}
</script>
<style lang=""></style>
