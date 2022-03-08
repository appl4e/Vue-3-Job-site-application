<template>
  <div class="w-full">
    <label for="name">{{ labels }}</label>
    <input
      type="text"
      :name="name"
      :id="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="bg-slate-50 rounded-sm w-full"
      v-bind="$attrs"
    />
    <p v-if="helperText" class="text-sm" :class="{ 'text-red-400': hasError }">{{ helperText }}</p>
  </div>
</template>
<script>
export default {
  inheritAttrs: false
}
</script>
<script setup>
defineProps({
  modelValue: {
    default: "",
    type: String
  },
  name: {
    default: "",
    type: String,
    required: true
  },
  labels: {
    default: "",
    type: String
  },
  helperText: {
    default: "",
    type: String
  },
  hasError: {
    default: false,
    type: Boolean
  }
});

defineEmits(["update:modelValue"]);

</script>