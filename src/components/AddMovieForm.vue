<template>
  <section class="new-movie">
    <h1 class="title new-movie__title">Add Movie</h1>
    <p class="new-movie__content">Add a movie to your library</p>
    <form @submit.prevent="addMovie()"
          class="new-movie__form
                 d-flex flex-column
                 px-5 py-4 col-xs-10 col-sm-8 col-md-6 col-lg-4 mx-auto
                 rounded">
      <custom-input v-model="movie_title"
                    label="Movie title:"
                    type="text"
                    required
                    placeholder="Enter movie title"/>
      <custom-input v-model="movie_year"
                    label="Movie year:"
                    type="number"
                    min="1900"
                    max="2030"
                    required
                    placeholder="Enter movie year"/>
      <custom-input v-model="movie_imdbID"
                    label="Movie ID:"
                    type="text"
                    required
                    placeholder="Enter movie id"/>
      <custom-input v-model="movie_posterLink"
                    label="Movie poster-link:"
                    type="url"
                    required
                    placeholder="Add link to movie's poster"/>
      <custom-btn label="Add"/>
    </form>
  </section>
</template>

<script>
export default {
  name: "AddMovieForm",
  data() {
    return {
      movie_title: '',
      movie_year: '',
      movie_imdbID: '',
      movie_posterLink: '',
    };
  },
  methods: {
    addMovie() {
      this.$store.dispatch("library/createMovie",
          {
            Title: this.movie_title,
            Year: this.movie_year,
            imdbID: this.movie_imdbID,
            Poster: this.movie_posterLink,
          });
      this.$router.push("/library");
    },
    onUpdateMovie() {
      this.$store.dispatch("library/updateMovie",
          {
            id: 1,
            Title: this.movie_title,
            Year: this.movie_year,
            imdbID: this.movie_imdbID,
            Poster: this.movie_posterLink,
          });
      this.$router.push("/library");
    },
  },
};
</script>

<style scoped>
.new-movie__form {
  max-width: 320px;
  background: rgba(0, 0, 0, .4);
}
</style>