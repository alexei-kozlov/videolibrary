<template>
  <label class="text-left">
    {{ label }}
    <input class="form-control mb-4 rounded"
           v-model="inputValue"
           :placeholder="placeholder"
           :required="required"
           :type="type">
  </label>

  <!--<small class="text-left mb-3">Your name: {{ inputValue }}</small>-->
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
    placeholder: {
      type: String,
      default: 'Custom text',
    },
    required: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: '',
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