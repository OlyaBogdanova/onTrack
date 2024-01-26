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
import { onActivated } from 'vue'
import TimelineItem from '@/components/TimelineItem.vue'
import TheTimelineIndicator from '@/components/TheTimelineIndicator.vue'
import { timelineItems, scrollToCurrentHour, timelineItemRefs } from '@/timelineItems'

onActivated(scrollToCurrentHour)
</script>

<style lang=""></style>
