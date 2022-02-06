<template>
  <section class="library">
    <h1 class="title library__title">Library</h1>
    <p class="library__content">The library of movies of the current user of this service will be placed here</p>
    <p class="library__content">({{ $store.getters['library/count'] }} movies)</p>
    <ul class="movie__list w-100 mx-auto mt-2 mb-4 d-flex justify-content-around flex-wrap rounded">
      <li v-for="movie in libraryArray" :key="movie.imdbID"
          class="movie__item">
        <div class="movie__poster-wrapper">
          <img class="movie__poster"
               :alt="movie.Title"
               :src="movie.Poster !== 'N/A' ? movie.Poster : noPoster">
        </div>
        <div class="movie__bottom">
          <span class="movie__title">"{{ movie.Title }}"</span>
          <span class="movie__year">({{ movie.Year }})</span>
          <a class="btn movie__btn" target="_blank"
             :href="'http://www.imdb.com/title/' + movie.imdbID">
            To IMDb
            <span class="btn__arrow">&rarr;</span>
          </a>
          <div class="block-control border-left bg-white rounded text-center font-weight-bold">
            <router-link class="d-inline-block w-100" :to="`/library/${movie.Title}`">GoTo</router-link>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      noPoster: null,
    }
  },
  computed: {
    libraryArray() {
      return this.$store.getters['library/all'];
    },
    genreArray() {
      return this.$store.getters['library/genre'](genreId);
    },
  },
  created() {
    this.$store.dispatch("library/loadLibrary");
    this.noPoster = require('@/assets/img/no-poster.png');
  }
};
</script>

<style scoped>

</style>