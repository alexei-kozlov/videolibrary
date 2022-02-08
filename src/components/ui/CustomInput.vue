<template>
  <label class="text-left" :for="id">
    {{ label }}
    <input class="form-control mb-4 rounded"
           v-model="inputValue"
           :placeholder="placeholder"
           :required="required"
           :type="type"
           :min="min"
           :max="max"
           :minlength="minlength"
           :maxlength="maxlength"
           :id="id">
  </label>
  <!--<small class="text-left mb-3">Your name: {{ inputValue }}</small>-->
</template>

<script>
export default {
  name: "CustomInput",
  data() {
    return {
      inputValue: null,
    }
  },
  props: {
    modelValue: {
      default: null,
    },
    label: {
      type: String,
      default: 'Custom label',
    },
    id: {
      type: String,
    },
    placeholder: {
      type: String,
      default: 'Custom text',
    },
    required: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
    min: {
      type: String,
      default: '',
    },
    max: {
      type: String,
      default: '',
    },
    minlength: {
      type: String,
      default: '',
    },
    maxlength: {
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