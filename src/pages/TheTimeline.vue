<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        ref="timelineItemRefs"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        @scroll-to-hour="scrollToHour(timelineItem.hour)"
      />
    </ul>
  </div>
</template>

<script setup>
import { nextTick, watchPostEffect } from 'vue'
import TimelineItem from '@/components/TimelineItem.vue'
import { PAGE_TIMELINE } from '../constans'
import { currentPage } from '@/router.js'
import { timelineItems, scrollToCurrentHour, scrollToHour, timelineItemRefs } from '@/timelineItems'

watchPostEffect(async () => {
  if (currentPage.value === PAGE_TIMELINE) {
    await nextTick()

    scrollToCurrentHour(false)
  }
})
</script>

<style lang=""></style>
