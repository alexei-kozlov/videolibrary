<template>
  <section class="sign-up">
    <h1 class="title sign-up__title">Sign Up</h1>
    <p class="sign-up__content">Please sign up to continue</p>
    <form action="javascript:void(0);"
          class="sign-up__form
                 d-flex flex-column
                 px-5 py-4 col-xs-8 col-sm-8 col-md-6 col-lg-4 mx-auto rounded">
      <custom-input v-model="your_name"
                    label="Your name:"
                    type="text"
                    required
                    placeholder="Enter your name"/>
      <custom-input v-model="login"
                    label="Your email:"
                    type="email"
                    required
                    placeholder="Enter your email"/>
      <custom-input v-model="password"
                    label="Your password:"
                    type="password"
                    required
                    placeholder="At least 6 characters"/>
      <custom-input v-model="confirm_password"
                    label="Confirm password:"
                    type="password"
                    required
                    placeholder="Confirm your password"/>
      <custom-btn label="Sign Up"
                  @click="signUpClick"/>
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
      your_name: '',
      login: '',
      password: '',
      confirm_password: '',
      isAuth,
    }
  },
  methods: {
    signUpClick() {
      this.$store.dispatch("user/signUp", {
        login: this.login,
        password: this.password,
      }).then((status) => {
        if (status === 'OK') {
          this.$router.push('/new-movie')
        } else if (status !== 'OK') {
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