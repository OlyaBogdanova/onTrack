<template>
  <div class="flex gap-2">
    <BaseButton @click="select(null)" :type="BUTTON_TYPE_NEUTRAL">
      <BaseIcon :name="ICON_XMARK" class="h-8" />
    </BaseButton>
    <select
      name=""
      id=""
      class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
      @change="select($event.target.value)"
    >
      <option :selected="isNotSelected" disabled value="">
        {{ placeholder }}
      </option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="selected === value"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import { BUTTON_TYPE_NEUTRAL } from '@/constans.js'
import { normalizeSelectValue } from '@/functions.js'
import { ICON_XMARK } from '@/icons.js'

import { validateSelectOptions, isUndefinedOrNull, isSelectValueValid } from '@/validators'
const props = defineProps({
  options: {
    type: Array,
    required: false,
    default: () => [],
    validator: validateSelectOptions
  },
  placeholder: {
    type: String,
    required: true
  },
  selected: {
    type: [Number, String, null],
    required: true
  }
})

const emit = defineEmits({
  select: isSelectValueValid
})
const isNotSelected = computed(() => isUndefinedOrNull(props.selected))

function select(val) {
  emit('select', normalizeSelectValue(val))
}
</script>
<style lang=""></style>
