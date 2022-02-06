<template>
  <section class="profile">
    <h1 class="title profile__title">Profile</h1>
    <p class="profile__content">Information about the user of the service will be placed here</p>
    <form class="profile__form d-flex flex-column
                 px-5 py-4 col-xs-10 col-sm-8 col-md-6 col-lg-4 mx-auto
                 rounded" action="javascript:void(0);">
      <custom-input label="Name"
                    v-model="your_name"
                    placeholder="Enter your name"></custom-input>
      <custom-radio :options="radioOptions"
                    v-model="gender"></custom-radio>
      <custom-textarea label="About yourself"
                       v-model="about_yourself"
                       placeholder="Tell me about yourself"></custom-textarea>
      <custom-btn label="Save"
                  @click="saveData = true"></custom-btn>
    </form>
  </section>
</template>
<script>

export default {
  name: "Profile",
  components: {},
  data() {
    return {
      your_name: '',
      about_yourself: '',
      gender: '',
      radioOptions: [
        {value: 'male', label: 'Male'},
        {value: 'female', label: 'Female'},
      ],
      saveData: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.profile {
  &__form {
    background: rgba(0, 0, 0, .4);
  }
}
</style>