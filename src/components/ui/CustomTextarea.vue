<template>
  <div class="form-group w-100">
    <textarea name="" type="text" class="form-control" id="aboutCompany"
              placeholder="Tell me about yourself"
              v-model="message">
    </textarea>
    <p class="text-left my-3">Message: {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "CustomTextarea",
  data() {
    return {
      message: ''
    }
  }
}
</script>

<style scoped>
.form-control {
  border-radius: 0;
  border: none;
  background: #eeeeee;
}
</style>