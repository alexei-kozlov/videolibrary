<template>
  <div id="v-model-radiobutton"
       class="custom-radio d-flex justify-content-start w-100">
    <div class="custom-control custom-radio mr-5"
         v-for="option in options"
         :key="option">
      <input class="custom-control-input mr-1" type="radio" :id="option.value" :value="option.value" v-model="picked"/>
      <label class="custom-control-label m-0" :for="option.value">{{ option.label }}</label>
    </div>
  </div>
  <small class="text-left mb-3">Gender: {{ picked }}</small>
</template>

<script>
export default {
  name: "CustomRadio",
  data() {
    return {
      picked: '',
    }
  },
  props: {
    options: {
      type: Array
    },
    modelValue: {
      type: String
    }
  },
  watch: {
    picked() {
      this.$emit('update:modelValue', this.picked);
    },
    modelValue() {
      this.picked = this.modelValue;
    }
  },
}
</script>

<style scoped>
.custom-radio input:hover,
.custom-radio label:hover {
  cursor: pointer;
}
.custom-control.custom-radio label {
  padding-top: 1px;
}
</style>