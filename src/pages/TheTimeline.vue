<template>
  <div class="relative mt-7">
    <TheTimelineIndicator />
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        ref="timelineItemRefs"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
      />
    </ul>
  </div>
</template>

<script setup>
import { onActivated, onDeactivated } from 'vue'
import TimelineItem from '@/components/TimelineItem.vue'
import TheTimelineIndicator from '@/components/TheTimelineIndicator.vue'
import { timelineItems, scrollToCurrentHour, timelineItemRefs } from '@/timelineItems'
import { startTimer, stopTimer } from '@/time.js'

onActivated(() => {
  scrollToCurrentHour(), startTimer()
})

onDeactivated(stopTimer)
</script>

<style lang=""></style>
