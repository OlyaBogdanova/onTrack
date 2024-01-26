<template>
  <component :is="ICONS[name]" />
</template>
<script setup>
import { ICONS } from '@/icons.js'
import { isIconValid } from '@/validators.js'

defineProps({
  name: {
    type: String,
    required: true,
    validator: isIconValid
  }
})
</script>
<style lang=""></style>
