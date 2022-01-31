<template>
  <label for="text_about">{{ label }}</label>
  <textarea id="text_about" class="form-control mb-4"
            :placeholder="placeholderText"
            v-model="inputValue">
  </textarea>
  <!--<small class="text-left mb-3">About you: {{ inputValue }}</small>-->
</template>

<script>
export default {
  name: "CustomTextarea",
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