<template>
  <section class="current-movie col-xs-10 col-sm-8 col-md-6 col-lg-4 mx-auto rounded">
    <router-link :to="'/'"
                 class="current-movie__link-to-back p-2 mt-4 d-inline-block w-100 text-light font-weight-bold bg-primary">
      <span class="arrow-left">&larr;</span>
      <span class="current-movie__link-text">Back to Search</span>
    </router-link>
    <h1 class="title current-movie__title">{{ movie.Title }}</h1>
    <p class="current-movie__content">({{ movie.Year }})</p>
    <div class="current-movie__form d-flex flex-column">
      <img :src="movie.Poster !== 'N/A' ? movie.Poster : noPoster"
           :alt="movie.Title">
      <p class="current-movie__description mt-2">{{ movie.Plot }}</p>
      <div class="block-control my-4 text-center font-weight-bold">
        <a class="p-2 d-inline-block w-100 text-body bg-warning" target="_blank"
           :href="'https://www.imdb.com/title/' + movie.imdbID">To IMDb
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import {ref, onBeforeMount} from 'vue';
import {useRoute} from 'vue-router';

export default {
  name: "MovieListItem",
  data() {
    return {
      noPoster: null,
    }
  },
  created() {
    this.noPoster = require('@/assets/img/no-poster.png');
  },
  setup() {
    const movie = ref({});
    const route = useRoute();

    onBeforeMount(() => {
      fetch(`https://www.omdbapi.com/?apikey=1ce9470d&i=${route.params.id}&plot=full`)
          .then(response => response.json())
          .then(data => {
            movie.value = data;
          });
    });
    return {
      movie
    }
  }
}
</script>

<style lang="scss">
.current-movie {
  background: rgba(0, 0, 0, .4);

  &__link-to-back:hover,
  &__link-to-back:focus {
    text-decoration: none;
  }

  &__link-to-back:hover &__link-text,
  &__link-to-back:focus &__link-text {
    text-decoration: underline;
  }
}

.arrow-left {
  font-size: 20px;
  line-height: 1;
  margin-right: 4px;
  text-decoration: none;
}
</style>