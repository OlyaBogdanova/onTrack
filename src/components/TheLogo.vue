<template>
  <a :href="`#${PAGE_TIMELINE}`" @click="handleClick">
    <img src="../assets/img/logo.png" alt="Logo" class="h-9" />
  </a>
</template>
<script setup>
import { PAGE_TIMELINE } from '../constans.js'
import { navigate, currentPage } from '@/router.js'
import { scrollToCurrentHour } from '@/timelineItems.js'

function handleClick() {
  currentPage.value === PAGE_TIMELINE ? scrollToCurrentHour(true) : navigate(PAGE_TIMELINE)
}
</script>
<style lang=""></style>
