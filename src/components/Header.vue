<template>
  <header class="header" data-vue-component="Header">
    <div class="header__logo">
      <img :src="customLogo"
           alt="Search Movie" class="header__logo">
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/library">Library</router-link>
      <router-link v-if="$store.getters['user/isAuth']" to="/new-movie">Add Movie</router-link>
      <!--<router-link to="/profile">Profile</router-link>-->
      <router-link to="/about">About</router-link>
      <router-link v-if="!$store.getters['user/isAuth']" class="auth-link" to="/authorization">
        <img :src="customIconSignIn" style="width: 33px; height: 33px;"
             alt="Authorization" title="Sign In" class="header__logo-auth header__logo-isAuth">
      </router-link>
      <div v-if="$store.getters['user/isAuth']" class="auth-link" @click="signOutClick">
        <img :src="customIconSignOut"
             alt="Authorization" title="Sign Out" class="header__logo-auth header__logo-notAuth">
      </div>
    </div>
  </header>
</template>

<script>
import {isAuth} from '@/App.vue';

export default {
  name: "Header",
  data() {
    return {
      customLogo: null,
      customIconSignIn: null,
      customIconSignOut: null,
      isAuth,
    };
  },
  created() {
    this.customLogo = require('@/assets/img/logo.png');
    this.customIconSignIn = require('@/assets/img/sign-in-btn.svg');
    this.customIconSignOut = require('@/assets/img/sign-out-btn.svg');
  },
  methods: {
    signOutClick() {
      this.$store.dispatch('user/signOut')
          .then((status) => {
            if (status === 'OK') {
              this.$router.push('/');
            } else if (status !== 'OK') {
              alert('Where are you going? Come back!');
            }
          });
    },
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
}

@media screen and (max-width: 600px) {
  .header {
    flex-direction: column;
    margin: 0 auto 20px;
  }
}

@media screen and (max-width: 425px) {
  .header {
    flex-direction: row;
    margin: 0 auto 20px;
  }
}

.header__logo {
  width: 10vw;
  height: auto;
}

@media screen and (max-width: 600px) {
  .header__logo {
    width: 20vw;
  }
}

@media screen and (max-width: 425px) {
  .header__logo {
    width: 50vw;
  }
}

.header__logo-auth {
  width: 30px;
  height: 30px;
}

.header__title {
  margin: 0 0 0 6%;
  font-family: "Nova Mono", "Roboto Mono", monospace;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 5vw;
  letter-spacing: 0.1em;
  text-align: center;
  white-space: nowrap;
}

@media screen and (max-width: 600px) {
  .header__title {
    font-size: 8vw;
    margin: 0 auto;
  }
}

#nav {
  padding: 30px 0 30px 30px;
  width: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

@media screen and (max-width: 600px) {
  #nav {
    width: 100%;
    padding: 30px 0;
    justify-content: space-between;
  }
}

@media screen and (max-width: 425px) {
  #nav {
    width: 50%;
    padding: 20px 0;
    flex-direction: column;
  }
}

#nav a {
  margin: 0 20px;
  font-family: Montserrat, Arial, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  text-transform: capitalize;
  text-decoration: none;
  color: #2c3e50;
  position: relative;
  transition-duration: .3s;
}

@media screen and (max-width: 850px) {
  #nav a {
    font-size: 18px;
  }
}

@media screen and (max-width: 600px) {
  #nav a {
    margin: 10px 0;
  }
}

#nav a:not(.auth-link)::before {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  width: 0;
  height: 1px;
  background: #fff;
  transition: all .5s ease;
}

#nav a:hover::before,
#nav a:focus::before {
  width: 99%;
  left: 0;
  transition: all .5s ease;
}

#nav .auth-link {
  margin-right: 0;
}

#nav .auth-link:hover {
  cursor: pointer;
  opacity: .6;
  transition-duration: .3s;
}

#nav a.router-link-exact-active {
  color: #fff;
  text-shadow: 0 0 4px #000;
  transition-duration: .3s;
}

#nav .auth-link .header__logo-isAuth {
  filter: invert(57%) sepia(92%) saturate(5046%) hue-rotate(126deg) brightness(99%) contrast(81%);
  transition-duration: .3s;
}

#nav .auth-link .header__logo-notAuth {
  filter: invert(13%) sepia(87%) saturate(6010%) hue-rotate(353deg) brightness(100%) contrast(92%);
  transition-duration: .3s;
}
</style>