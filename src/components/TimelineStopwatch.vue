<template>
  <div class="flex gap-2">
    <BaseButton :type="BUTTON_TYPE_DANGER" :disabled="!timelineItem.activitySeconds" @click="reset">
      <BaseIcon :name="ICON_ARROW_PATH" class="h-8" />
    </BaseButton>
    <div class="flex flex-1 items-center rounded bg-gray-100 px-2 font-mono text-3xl">
      {{ formatSeconds(timelineItem.activitySeconds) }}
    </div>
    <BaseButton v-if="isRunning" :type="BUTTON_TYPE_WARNING" @click="stop">
      <BaseIcon :name="ICON_PAUSE" class="h-8" />
    </BaseButton>
    <BaseButton v-else :type="BUTTON_TYPE_SUCCESS" :disabled="isStartButtonDisabled" @click="start">
      <BaseIcon :name="ICON_PLAY" class="h-8" />
    </BaseButton>
  </div>
</template>
<script setup>
import { computed, ref, watch } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import { ICON_ARROW_PATH, ICON_PAUSE, ICON_PLAY } from '@/icons.js'
import { BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING, BUTTON_TYPE_DANGER } from '@/constans.js'
import { isTimelineItemValid } from '@/validators.js'
import { formatSeconds, currentHour } from '@/functions.js'
import { MILLISECONDS_IN_SECOND } from '../constans'
import { updateTimelineItem } from '@/timelineItems.js'

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
    updateTimelineItem(props.timelineItem, {
      activitySeconds: props.timelineItem.activitySeconds + 1
    })
    seconds.value++
  }, MILLISECONDS_IN_SECOND)
}

function stop() {
  clearInterval(isRunning.value)
  isRunning.value = false
}

function reset() {
  stop()

  updateTimelineItem(props.timelineItem, {
    activitySeconds: props.timelineItem.activitySeconds - seconds.value
  })
  seconds.value = 0
}
watch(
  () => props.timelineItem.activityId,
  () => updateTimelineItem(props.timelineItem, { activitySeconds: seconds.value })
)
</script>
<style lang=""></style>
