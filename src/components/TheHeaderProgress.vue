<template>
  <a :href="`#${PAGE_PROGRESS}`" class="text-sm" @click="navigate(PAGE_PROGRESS)">
    <div v-if="percentage < HUNDRED_PERCENT" class="flex items-center gap-1">
      <div>
        Progress: <span class="font-mono">{{ percentage }}%</span>
      </div>
      <div :class="`h-3 w-3 rounded-full ${colorClass}`" />
    </div>
    <div v-else class="flex items-center gap-1">
      Day complete!
      <BaseIcon :name="ICON_CHECK_CIRCLE" class="h-7 text-green-500" />
    </div>
  </a>
</template>
<script setup>
import BaseIcon from '@/components/BaseIcon.vue'
import { PAGE_PROGRESS, HUNDRED_PERCENT } from '@/constans.js'
import { navigate } from '@/router.js'
import { ICON_CHECK_CIRCLE } from '@/icons.js'

import { useTotalProgress } from '@/composables/totalProgress'

const { percentage, colorClass } = useTotalProgress()
</script>
<style lang=""></style>
