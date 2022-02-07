<!--<template>
  <section class="library">
    <h1 class="h2 title library__title">&laquo;{{ $route.params.id }}&raquo;</h1>
    <p class="library__content">{{ $store.getters['library/single'] }}</p>
    <p class="library__content">The selected movie and all information about it will be placed here.</p>
    <router-link :to="`/library`">Back</router-link>
  </section>
</template>-->
<template>
  <section class="current-movie col-xs-10 col-sm-8 col-md-6 col-lg-4 mx-auto rounded">
    <h1 class="title current-movie__title" :title="movie_title">{{ movie_title }}</h1>
    <p class="current-movie__content" :title="movie_year">({{ movie_year }})</p>
    <div class="current-movie__form d-flex flex-column">
      <img :src="movie_posterLink" alt="Movie Poster">
      <div class="block-control my-4 text-center font-weight-bold">
        <router-link class="p-2 bg-white d-inline-block w-50"
                     :to="`/movie/edit/` + movie_id">Edit
        </router-link>
        <a class="p-2 d-inline-block w-50 text-body bg-warning" target="_blank"
           :href="'http://www.imdb.com/title/' + movie_imdbID">To IMDb
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Movie",
  data() {
    return {
      movie_id: '',
      movie_title: '',
      movie_year: '',
      movie_imdbID: '',
      movie_posterLink: '',
    };
  },
  created() {
    const id = this.$route.params.id;
    const movieById = this.$store.getters["library/movieById"];
    const addMovie = movieById(id);
    this.movie_id = addMovie.id;
    this.movie_title = addMovie.Title;
    this.movie_year = addMovie.Year;
    this.movie_imdbID = addMovie.imdbID;
    this.movie_posterLink = addMovie.Poster;
  },
  methods: {
    onUpdateMovie() {
    },
  },
};
</script>

<style lang="scss" scoped>
.current-movie {
  background: rgba(0, 0, 0, .4);

  &__form {
    max-width: 320px;
  }
}
</style>