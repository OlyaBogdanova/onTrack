<template>
  <form class="sticky bottom-[57px] flex gap-2 botder-t bg-white p-4" @submit.prevent="submit">
    <input
      type="text"
      v-model="name"
      class="flex-1 rounded border px-4 text-xl"
      placeholder="Activity name"
    />
    <BaseButton :disabled="!name.trim()"><PlusIcon class="h-8" /></BaseButton>
  </form>
</template>
<script setup>
import { ref, nextTick } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/BaseButton.vue'
import { SECONDS_IN_HOUR } from '@/constans'
import { id } from '@/functions'
import { createActivity } from '@/activities.js'

const name = ref('')
async function submit() {
  const activity = {
    name: name.value,
    id: id(),
    secondsToComplete: 0 * SECONDS_IN_HOUR
  }
  createActivity(activity)
  name.value = ''
  await nextTick()
  window.scrollTo(0, document.body.scrollHeight)
}
</script>
<style lang=""></style>
