<template>
  <section class="about">
    <h1 class="title about__title">About service</h1>
    <p class="about__content">Service for finding movies from the IMDb</p>
    <img class="about__poster" alt="IMDb Logo" :src="imdbLogo">
    <p class="about__content">This app allows to get list of recent and popular (or most popular of all time) Movies,
      TV-series and so on by using simple title search which are used to generate and open a IMDb web-link with your
      preferred results.</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imdbLogo: null,
    }
  },
  created() {
    this.imdbLogo = require('@/assets/img/imdb-logo.png');
  }
};
</script>

<style lang="scss" scoped>
.about {
  &__poster {
    display: inline-block;
    max-width: 400px;
    width: 100%;
    height: auto;
    margin: 0 auto 10px;
    border: 1px solid darkgoldenrod;
    border-radius: 6% / 12%;
    box-shadow: inset 0 0 30em 2em #000;
  }
}
</style>