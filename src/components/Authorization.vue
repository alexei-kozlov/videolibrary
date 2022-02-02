<template>
  <section class="sign-in">
    <h1 class="title sign-in__title">Sign In</h1>
    <p class="sign-in__content">Please sign in to continue</p>
    <form class="sign-in__form
                 d-flex flex-column align-items-start
                 px-5 py-4 col-xs-10 col-sm-8 col-md-6 col-lg-4 mx-auto rounded">
      <custom-input v-model="login"
                    label="Your login:"
                    type="text"
                    required
                    placeholder="Enter your login"/>
      <custom-input v-model="password"
                    label="Your password:"
                    type="password"
                    required
                    placeholder="Enter your password"/>
      <custom-btn label="Sign In"
                  @click="signInClick"/>
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
  background: rgba(0, 0, 0, .4);
}
</style>