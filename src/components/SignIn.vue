<template>
  <section v-if="!$store.getters['user/isAuth']" class="sign-in">
    <h1 class="title sign-in__title">Sign In</h1>
    <p class="sign-in__content">Please sign in to continue</p>
    <form @submit.prevent="signInClick()"
          class="sign-in__form
                 d-flex flex-column
                 px-5 py-4 col-xs-8 col-sm-8 col-md-6 col-lg-4 mx-auto rounded">
      <custom-input v-model="login"
                    label="Your email:"
                    type="email"
                    required
                    placeholder="Enter your email"/>
      <custom-input v-model="password"
                    label="Your password:"
                    type="password"
                    minlength="6"
                    required
                    placeholder="Enter your password"/>
      <custom-btn label="Sign In"/>
      <small class="mt-3">Don't have an account yet?
        <span style="text-decoration: underline;">
          <router-link style="color: white;" to="/sign-up">Sign Up</router-link>
        </span>
      </small>
    </form>
  </section>
</template>

<script>
import {isAuth} from '@/App.vue';

export default {
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
          this.$router.push('/')
        } else if (status !== 'OK') {
          alert('Authorization error! Please try again!');
        }
      });
    },
  },
};
</script>

<style scoped>
.sign-in__form {
  max-width: 320px;
  background: rgba(0, 0, 0, .4);
}
</style>