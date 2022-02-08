<template>
  <button class="btn form-btn btn-primary"
          type="submit"
          :disabled="disabled">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "CustomBtn",
  data() {
    return {}
  },
  props: {
    label: {
      type: String,
      default: 'Custom Btn',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.form-btn {
  min-width: 25%;
}
</style>