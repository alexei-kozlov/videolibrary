<template>
  <section v-if="!$store.getters['user/isAuth']" class="sign-up">
    <h1 class="title sign-up__title">Sign Up</h1>
    <p class="sign-up__content">Please sign up to continue</p>
    <form @submit.prevent="signUpClick()"
          class="sign-up__form
                 d-flex flex-column
                 px-5 py-4 col-xs-8 col-sm-8 col-md-6 col-lg-4 mx-auto rounded">
      <custom-input v-model="login"
                    label="Your email:"
                    type="email"
                    required
                    placeholder="Enter your email"/>
      <custom-input v-model="password"
                    id="password"
                    label="Your password:"
                    type="password"
                    minlength="6"
                    required
                    placeholder="At least 6 characters"
                    @change="validatePassword()"/>
      <custom-input v-model="confirm_password"
                    id="confirm-password"
                    label="Confirm password:"
                    type="password"
                    minlength="6"
                    required
                    placeholder="Confirm your password"
                    @keyup="validatePassword()"/>
      <custom-btn label="Sign Up"/>
      <small class="mt-3">Already have an account?
        <span style="text-decoration: underline;">
          <router-link style="color: white;" to="/sign-in">Sign In</router-link>
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
      confirm_password: '',
      isAuth,
    }
  },
  methods: {
    validatePassword() {
      let password = document.getElementById('password'),
          confirmPassword = document.getElementById('confirm-password');
      if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Passwords don\'t match');
      } else {
        confirmPassword.setCustomValidity('');
      }
    },
    signUpClick() {
      this.$store.dispatch('user/signUp', {
        login: this.login,
        password: this.password,
      }).then((status) => {
        console.log(status);
        if (status !== 'error') {
          this.$router.push('/');
        } else if (status === 'error') {
          alert('Registration error! Please try again!');
        }
      });
    },
  },
};
</script>

<style scoped>
.sign-up__form {
  max-width: 320px;
  background: rgba(0, 0, 0, .4);
}
</style>