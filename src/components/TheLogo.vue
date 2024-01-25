<template>
  <a :href="`#${PAGE_TIMELINE}`" @click="navigate(PAGE_TIMELINE)">
    <img src="../assets/img/logo.png" alt="Logo" class="h-9" />
  </a>
</template>
<script setup>
import { PAGE_TIMELINE } from '../constans.js'
import { navigate } from '@/router.js'
</script>
<style lang=""></style>
