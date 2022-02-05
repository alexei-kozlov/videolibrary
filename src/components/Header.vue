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
      <router-link v-if="$store.getters['user/isAuth']" class="auth-link" @click="showModal" to>
        <img :src="customIconSignOut"
             alt="Authorization" title="Sign Out" class="header__logo-auth header__logo-notAuth">
      </router-link>
      <div v-if="!$store.getters['user/isAuth']" id="sign-menu">
        <div class="selectlink-control">
          <img :src="customIconSignIn" style="width: 33px; height: 33px;"
               alt="Authorization" title="Sign In/Up" class="header__logo-auth header__logo-isAuth">
        </div>
        <ul>
          <li>
            <router-link class="auth-link" to="/sign-in">Sign In</router-link>
          </li>
          <li>
            <router-link class="auth-link" to="/sign-up">Sign Up</router-link>
          </li>
        </ul>
      </div>
      <custom-modal ref="popup">
        <template #header>
          <h5 class="modal-title font-weight-bold">Sign Out</h5>
        </template>
        <template #body>Do you really want to sign out?</template>
        <template #footer>
          <button class="btn btn-secondary" @click="onNoClick">No</button>
          <button class="btn btn-primary" @click="logOutClick">Yes</button>
        </template>
      </custom-modal>
    </div>
  </header>
</template>

<script>
import {isAuth} from '@/App.vue';
import CustomModal from "./ui/CustomModal.vue";
import JQuery from 'jquery';

let $ = JQuery;

export default {
  components: {CustomModal},
  data() {
    return {
      shownModal: false,
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
    showModal() {
      this.$refs.popup.shown = true;
    },
    logOutClick() {
      this.$store.dispatch('user/logOut')
          .then((status) => {
            if (status === 'OK') {
              this.$router.push('/');
            } else if (status !== 'OK') {
              alert('Where are you going? Come back!');
            }
          });
      this.$refs.popup.shown = false;
    },
    onNoClick() {
      this.$refs.popup.shown = false;
    },
  },
}
$(function () {
  $('.selectlink-control').click(function () {
    let $menu_popup = $(this).next();
    $menu_popup.slideToggle(200, function () {
      $('.selectlink ul').not($menu_popup).slideUp(200);
      if ($menu_popup.is(':hidden')) {
        $('body').removeClass('body_pointer');
      } else {
        $('body').addClass('body_pointer');
      }
    });
    return false;
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.selectlink').length) {
      $('body').removeClass('body_pointer');
      $('.selectlink ul').slideUp(200);
    }
  });
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin: 0 auto 20px;
  }

  @media screen and (max-width: 425px) {
    flex-direction: row;
    margin: 0 auto 20px;
  }

  &__logo {
    width: 10vw;
    height: auto;

    @media screen and (max-width: 600px) {
      width: 20vw;
    }

    @media screen and (max-width: 425px) {
      width: 50vw;
    }
  }

  &__logo-auth {
    width: 30px;
    height: 30px;
  }

  &__title {
    margin: 0 0 0 6%;
    font-family: "Nova Mono", "Roboto Mono", monospace;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 5vw;
    letter-spacing: 0.1em;
    text-align: center;
    white-space: nowrap;

    @media screen and (max-width: 600px) {
      font-size: 8vw;
      margin: 0 auto;
    }
  }
}

#nav {
  padding: 30px 0 30px 30px;
  width: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 30px 0;
    justify-content: space-between;
  }

  @media screen and (max-width: 425px) {
    width: 50%;
    padding: 20px 0;
    flex-direction: column;
  }

  a {
    margin: 0 20px;
    font-family: Montserrat, Arial, sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    text-transform: capitalize;
    text-decoration: none;
    color: #333;
    position: relative;
    transition-duration: .3s;
    white-space: nowrap;

    @media screen and (max-width: 850px) {
      font-size: 18px;
    }

    @media screen and (max-width: 600px) {
      margin: 10px 0;
    }

    &:not(.auth-link)::before {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      width: 0;
      height: 1px;
      background: #fff;
      transition: all .5s ease;
    }

    &:hover::before,
    &:focus::before {
      width: 99%;
      left: 0;
      transition: all .5s ease;
    }
  }

  .auth-link {
    margin-right: 0;
  }

  .auth-link:hover {
    cursor: pointer;
    opacity: .6;
    transition-duration: .3s;
  }

  a.router-link-exact-active {
    color: #fff;
    text-shadow: 0 0 4px #000;
    transition-duration: .3s;
  }

  .header__logo-isAuth {
    filter: invert(57%) sepia(92%) saturate(5046%) hue-rotate(126deg) brightness(99%) contrast(81%);
    transition-duration: .3s;
  }

  .auth-link .header__logo-notAuth {
    filter: invert(13%) sepia(87%) saturate(6010%) hue-rotate(353deg) brightness(100%) contrast(92%);
    transition-duration: .3s;
  }
}

#sign-menu {
  position: relative;
  display: inline-block;
  width: 50px;
  text-align: left;
  margin: 10px;
  background: transparent;

  .selectlink-control {
    position: relative;
    border-radius: 4px;
    cursor: pointer;

    &::after {
      content: '';
      border: 5px solid transparent;
      border-top: 5px solid #999;
      position: absolute;
      top: 50%;
      right: 0;
      margin-top: -3px;
      filter: invert(57%) sepia(92%) saturate(5046%) hue-rotate(126deg) brightness(99%) contrast(81%);
    }
  }

  ul {
    display: none;
    margin: 0;
    padding: 0 10px 10px;
    position: absolute;
    top: 100%;
    right: 50%;
    transform: translateX(50%);
    z-index: 3;
    user-select: none;
    background: rgba(0, 0, 0, .3);
    border-radius: 2px;
  }

  li {
    display: block;
    margin: 10px 0 0 0;
    padding: 0;
  }

  li .auth-link {
    position: relative;
    margin: 0;
    font-size: 18px;
    cursor: pointer;
  }
}
</style>