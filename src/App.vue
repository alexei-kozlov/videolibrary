<template>
  <img class="bg-image" :src="customBg" alt="Image">
  <Header></Header>
  <main class="container">
    <router-view/>
  </main>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export let isAuth = false;

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      customBg: null,
    }
  },
  created() {
    this.customBg = require('@/assets/img/main-bg.jpg');
  }
}
</script>

<style>
.bg-image {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}
</style>