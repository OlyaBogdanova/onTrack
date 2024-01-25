<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex gap-2 items-center">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="deleteAndResetActivity(activity)">
        <TrashIcon class="h-8"
      /></BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        placeholder="hh:mm"
        :options="PERIOD_SELECT_OPTIONS"
        :selected="activity.secondsToComplete || null"
        @select="setActivitySecondsToComplete(activity, $event)"
        class="font-mono flex-1"
      />
      <ActivitySecondsToComplete v-if="activity.secondsToComplete" :activity="activity" />
    </div>
  </li>
</template>
<script setup>
import BaseButton from '@/components/BaseButton.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '@/constans.js'
import { isActivityValid } from '@/validators.js'
import { deleteActivity, setActivitySecondsToComplete } from '@/activities.js'
import { resetTimelineItemActivities } from '@/timelineItems.js'

import ActivitySecondsToComplete from '@/components/ActivitySecondsToComplete.vue'
defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid
  }
})

function deleteAndResetActivity(activity) {
  resetTimelineItemActivities(activity.id)
  deleteActivity(activity.id)
}
</script>
<style lang=""></style>
