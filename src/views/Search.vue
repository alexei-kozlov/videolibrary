<template>
  <section class="search">
    <SearchForm></SearchForm>
    <ul class="movie__list">
      <li class="movie__item">
        <MovieListItem></MovieListItem>
      </li>
    </ul>
  </section>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';
import MovieListItem from '@/components/MovieListItem.vue';

export default {
  name: "Search",
  components: {
    SearchForm,
    MovieListItem
  },
}
</script>

<style scoped>
.movie__list {
  border: 3px solid #00f;

  width: 100%;
  height: auto;
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: flex-start;
}
.movie__item {
  width: 200px;
  height: auto;
  min-height: 300px;
  margin: 20px;
  padding: 5px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>