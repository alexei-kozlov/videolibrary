<template>
  <button type="submit" class="btn btn-primary">{{ label }}</button>
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

</style>