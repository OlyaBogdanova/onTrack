<template>
  <div class="flex flex-col flex-1">
    <ul v-if="activities.length" class="divide-y flex-1">
      <ActivityItem v-for="activity in activities" :key="activity.id" :activity="activity" />
    </ul>

    <TheActivitiesEmptyState v-else />

    <TheActivityForm />
  </div>
</template>
<script setup>
import ActivityItem from '@/components/ActivityItem.vue'
import TheActivitiesEmptyState from '@/components/TheActivitiesEmptyState.vue'
import TheActivityForm from '@/components/TheActivityForm.vue'
import { activities } from '@/activities'
</script>
<style lang=""></style>
