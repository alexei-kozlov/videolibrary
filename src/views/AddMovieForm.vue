<template>
  <section class="new-movie">
    <h1 class="title new-movie__title">Add Movie</h1>
    <p class="new-movie__content">Adding movie in Library will be placed here</p>
    <form class="new-movie__form container p-0" action="javascript:void(0);">
      <custom-input label="Movie title:"
                    v-model="movie_title"
                    placeholderText="Enter movie title"></custom-input>
      <custom-input label="Movie year:"
                    v-model="movie_year"
                    placeholderText="Enter movie year"></custom-input>
      <custom-btn label="Add"
                  @click="addMovie"></custom-btn>
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
    };
  },
  methods: {
    addMovie() {
      this.$store.dispatch("library/createMovie", {Title: this.movie_title, Year: this.movie_year});
      this.$router.push("/library");
    },
  },
};
</script>

<style scoped>
.new-movie__form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>