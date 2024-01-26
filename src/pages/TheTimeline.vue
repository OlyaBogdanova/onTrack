<template>
  <div class="mt-7">
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
import { timelineItems, scrollToCurrentHour, timelineItemRefs } from '@/timelineItems'

onActivated(scrollToCurrentHour)
</script>

<style lang=""></style>
