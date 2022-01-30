<template>
  <label for="user_name">{{ label }}</label>
  <input id="user_name" class="form-control" type="text"
         v-model="inputValue"
         :placeholder="placeholderText">
  <small class="text-left mb-3">Your name: {{ inputValue }}</small>
</template>

<script>
export default {
  name: "CustomInput",
  data() {
    return {
      inputValue: '',
    }
  },
  props: {
    modelValue: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: 'Custom label',
    },
    placeholderText: {
      type: String,
      default: 'Custom text',
    },
  },
  watch: {
    modelValue: {
      handler() {
        this.inputValue = this.modelValue;
      },
      immediate: true,
    },
    inputValue: {
      handler() {
        this.$emit('update:modelValue', this.inputValue);
      },
    },
  },
}
</script>

<style scoped>
.form-control {
  border-radius: 0;
  border: none;
  background: #eeeeee;
}
</style>