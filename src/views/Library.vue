<template>
  <section class="library">
    <h1 class="title library__title">Library</h1>
    <p class="library__content">The library of movies of the current user of this service will be placed here</p>
    <p class="library__content">({{ $store.getters['library/count'] }} movies)</p>
    <ul>
      <li v-for="movie in libraryArray" :key="movie.Title"
          class="mx-auto w-50 d-flex justify-content-between align-items-center border-bottom py-1">
        <p class="block-description m-0">
<!--          <span>{{ movie.id }}) </span>-->
          <span>{{ movie.Title }}</span>
          <span> ({{ movie.Year }})</span>
        </p>
        <div class="block-control"> |
          <router-link :to="`/library/${movie.Title}`">GoTo</router-link>
        </div>
      </li>
    </ul>
    <!--{{ $store.getters.likesCaption }}-->
  </section>
</template>

<script>
export default {
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
  },
};
</script>