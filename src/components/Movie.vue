<template>
  <section class="current-movie col-xs-10 col-sm-8 col-md-6 col-lg-4 mx-auto rounded">
    <router-link :to="'/library'" class="current-movie__link-to-back p-2 mt-4 d-inline-block w-100 text-light font-weight-bold bg-primary">
      <span class="arrow-left">&larr;</span>
      <span class="current-movie__link-text">Back to Library</span>
    </router-link>
    <h1 class="title current-movie__title" :title="movie_title">{{ movie_title }}</h1>
    <p class="current-movie__content" :title="movie_year">({{ movie_year }})</p>
    <div class="current-movie__form d-flex flex-column">
      <img :src="movie_posterLink" alt="Movie Poster">
      <div class="block-control my-4 text-center font-weight-bold">
        <router-link class="p-2 bg-white d-inline-block w-50"
                     :to="`/movie/edit/` + movie_id">Edit
        </router-link>
        <a class="p-2 d-inline-block w-50 text-body bg-warning" target="_blank"
           :href="'https://www.imdb.com/title/' + movie_imdbID">To IMDb
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
    const movieById = this.$store.getters['library/movieById'];
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