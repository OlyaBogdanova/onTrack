<template>
  <li class="flex-1">
    <a :href="`#${navItem.page}`" :class="classes" @click="handleClick">
      <BaseIcon :name="navItem.icon" class="h-6 w-6" />{{ navItem.page }}
    </a>
  </li>
</template>

<script setup>
import { computed } from 'vue'
import { navigate, currentPage } from '@/router.js'
import { isNavItemValid } from '@/validators.js'
import BaseIcon from '@/components/BaseIcon.vue'
import { PAGE_TIMELINE } from '@/constans'
import { scrollToCurrentHour } from '@/timelineItems.js'
const props = defineProps({
  navItem: {
    type: Object,
    required: true,
    validator: isNavItemValid
  }
})
const classes = computed(() => [
  `flex flex-col items-center p-2 text-xs capitalize`,
  { 'bg-gray-200': currentPage.value === props.navItem.page }
])
function handleClick() {
  currentPage.value === PAGE_TIMELINE && props.navItem.page === PAGE_TIMELINE
    ? scrollToCurrentHour(true)
    : navigate(props.navItem.page)
}
</script>
<style lang=""></style>
