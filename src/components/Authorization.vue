<template>
  <section class="sign-in">
    <h1 class="title sign-in__title">Sign In</h1>
    <p class="sign-in__content">Please sign in to continue</p>
    <form class="sign-in__form container p-0" action="javascript:void(0);">
      <custom-input label="Your login:"
                    v-model="login"
                    placeholderText="Enter your login"></custom-input>
      <custom-input label="Your password:"
                    v-model="password"
                    placeholderText="Enter your password"></custom-input>
      <custom-btn label="Sign In"
                  @click="signInClick"></custom-btn>
    </form>
  </section>
</template>

<script>
import {isAuth} from '@/App.vue';

export default {
  name: "Authorization",
  data() {
    return {
      login: '',
      password: '',
      isAuth,
    }
  },
  methods: {
    signInClick() {
      this.$store.dispatch("user/signIn", {
        login: this.login,
        password: this.password,
      }).then((status) => {
        if (status === 'OK') {
          this.$router.push('/new-movie')
        } else if (status === 'error') {
          alert('Authorization error! Please try again!')
        }
      });
    },
  },
};
</script>

<style scoped>
.sign-in__form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>