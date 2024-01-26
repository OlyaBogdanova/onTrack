<template>
  <ul class="divide-y">
    <ProgressItem
      v-for="(activity, index) in trackedActivities"
      :key="activity.id"
      :index="index"
      :activity="activity"
    />
  </ul>
</template>
<script setup>
import ProgressItem from '@/components/ProgressItem.vue'
import { trackedActivities } from '@/activities.js'
</script>
<style lang=""></style>
