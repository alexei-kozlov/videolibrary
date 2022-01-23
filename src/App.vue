<template>
  <Header></Header>
  <main>
    <router-view/>
  </main>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
#app {
  width: 90%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}
</style>
