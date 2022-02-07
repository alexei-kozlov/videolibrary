<template>
  <section class="new-movie">
    <h1 class="title new-movie__title">Edit Movie</h1>
    <p class="new-movie__content">Edit movie in your library</p>
    <form action="javascript:void(0);"
          class="new-movie__form
                 d-flex flex-column
                 px-5 py-4 col-xs-10 col-sm-8 col-md-6 col-lg-4 mx-auto
                 rounded">
      <custom-input v-model="movie_title"
                    label="Movie title:"
                    type="text"
                    required
                    placeholder="Edit movie title"/>
      <custom-input v-model="movie_year"
                    label="Movie year:"
                    type="text"
                    required
                    placeholder="Edit movie year"/>
      <custom-input v-model="movie_imdbID"
                    label="Movie ID:"
                    type="text"
                    required
                    placeholder="Edit movie id"/>
      <custom-input v-model="movie_posterLink"
                    label="Movie poster-link:"
                    type="text"
                    required
                    placeholder="Edit link to movie's poster"/>
      <custom-btn label="Update"
                  @click="onUpdateMovie"/>
    </form>
  </section>
</template>

<script>
export default {
  name: "EditMovieForm",
  data() {
    return {
      movie_title: '',
      movie_year: '',
      movie_imdbID: '',
      movie_posterLink: '',
      movie_id: '',
    };
  },
  created() {
    const id = this.$route.params.id;
    const movieById = this.$store.getters["library/movieById"];
    const editMovie = movieById(id);
    this.movie_id = editMovie?.id;
    this.movie_title = editMovie?.Title;
    this.movie_year = editMovie?.Year;
    this.movie_imdbID = editMovie?.imdbID;
    this.movie_posterLink = editMovie?.Poster;
  },
  methods: {
    onUpdateMovie() {
      this.$store.dispatch("library/updateMovie", {
        id: this.movie_id,
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