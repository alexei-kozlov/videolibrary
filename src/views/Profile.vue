<template>
  <section class="profile">
    <h1 class="title profile__title">Profile</h1>
    <p class="profile__content">Information about current user of the service</p>
    <form class="profile__form d-flex flex-column
                 px-5 py-4 col-xs-10 col-sm-8 col-md-6 col-lg-4 mx-auto
                 rounded" @submit.prevent="saveData = true">
      <custom-input label="Your name"
                    v-model="your_name"
                    type="text"
                    minlength="3"
                    required
                    placeholder="Enter your name"></custom-input>
      <custom-input v-model="your_email"
                    label="Your email:"
                    type="email"
                    required
                    placeholder="Enter your email"/>
      <custom-radio :options="radioOptions"
                    v-model="gender"></custom-radio>
      <custom-textarea label="About yourself"
                       v-model="about_yourself"
                       placeholder="Tell me about yourself"></custom-textarea>
      <custom-btn label="Save"></custom-btn>
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
      your_email: '',
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