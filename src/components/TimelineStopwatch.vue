<template>
  <div class="flex gap-2">
    <BaseButton :type="BUTTON_TYPE_DANGER" :disabled="!timelineItem.activitySeconds" @click="reset">
      <BaseIcon :name="ICON_ARROW_PATH" />
    </BaseButton>
    <div class="flex flex-1 items-center rounded bg-gray-100 px-2 font-mono text-3xl">
      {{ formatSeconds(timelineItem.activitySeconds) }}
    </div>
    <BaseButton v-if="isRunning" :type="BUTTON_TYPE_WARNING" @click="stop">
      <BaseIcon :name="ICON_PAUSE" />
    </BaseButton>
    <BaseButton
      v-else
      :type="BUTTON_TYPE_SUCCESS"
      :disabled="timelineItem.hour !== currentHour()"
      @click="start"
    >
      <BaseIcon :name="ICON_PLAY" />
    </BaseButton>
  </div>
</template>
<script setup>
import { watch } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import { ICON_ARROW_PATH, ICON_PAUSE, ICON_PLAY } from '@/icons.js'
import { BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING, BUTTON_TYPE_DANGER } from '@/constans.js'
import { isTimelineItemValid } from '@/validators.js'
import { formatSeconds, currentHour } from '@/functions.js'
import { useStopWatch } from '@/composables/stopwatch.js'
import { updateTimelineItem } from '@/timelineItems.js'
const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  }
})

const { isRunning, start, stop, reset, seconds } = useStopWatch(
  props.timelineItem.activitySeconds,
  updateTimelineItemActivitySeconds
)

watch(() => props.timelineItem.activityId, updateTimelineItemActivitySeconds)

function updateTimelineItemActivitySeconds() {
  updateTimelineItem(props.timelineItem, { activitySeconds: seconds.value })
}
</script>
<style lang=""></style>
