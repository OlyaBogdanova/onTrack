<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex gap-2 items-center">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="deleteAndResetActivity(activity)">
        <BaseIcon :name="ICON_TRASH" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        placeholder="hh:mm"
        :options="PERIOD_SELECT_OPTIONS"
        :selected="activity.secondsToComplete || null"
        @select="updateActivity(activity, { secondsToComplete: $event || 0 })"
        class="font-mono flex-1"
      />
      <RemainingActivitySeconds v-if="activity.secondsToComplete" :activity="activity" />
    </div>
  </li>
</template>
<script setup>
import BaseButton from '@/components/BaseButton.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '@/constans.js'
import { ICON_TRASH } from '@/icons.js'
import { isActivityValid } from '@/validators.js'
import { deleteActivity, updateActivity } from '@/activities.js'
import { resetTimelineItemActivities, timelineItems } from '@/timelineItems.js'
import BaseIcon from '@/components/BaseIcon.vue'
import RemainingActivitySeconds from '@/components/RemainingActivitySeconds.vue'
defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid
  }
})

function deleteAndResetActivity(activity) {
  resetTimelineItemActivities(timelineItems.value, activity)
  deleteActivity(activity)
}
</script>
<style lang=""></style>
