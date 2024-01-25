<template>
  <component :is="icons[name]" />
</template>
<script setup>
import {
  TrashIcon as Trash,
  CheckCircleIcon as CheckCircle,
  ListBulletIcon as ListBullet,
  ArrowPathIcon as ArrowPath,
  ChartBarIcon as ChartBar,
  ClockIcon as Clock,
  XMarkIcon as XMark,
  PauseIcon as Pause,
  PlayIcon as Play,
  PlusIcon as Plus
} from '@heroicons/vue/24/outline'
const icons = {
  Trash,
  CheckCircle,
  ListBullet,
  ArrowPath,
  ChartBar,
  Clock,
  XMark,
  Pause,
  Play,
  Plus
}

defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
<style lang=""></style>
