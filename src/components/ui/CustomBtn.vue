<template>
  <button type="submit" class="btn form-btn btn-primary">{{ label }}</button>
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
  },
}
</script>

<style scoped>
.form-btn {
  min-width: 25%;
}
</style>