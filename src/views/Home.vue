<template>
  <section class="search">
    <!--<SearchForm></SearchForm>
    <ul id="movies" class="movie__list">
      <MovieListItem></MovieListItem>
    </ul>-->
    <form class="search__form" method="get" action="javascript:void(0);"
          @submit.prevent="SearchMovies()">
      <label class="search__label">
        <input id="search" class="search__input" type="text" placeholder="enter movie name" autofocus
               v-model="search">
      </label>
      <button id="submit" class="search__btn" type="button" @click="SearchMovies()">
        <span class="search__btn-name">Search</span>
        <svg class="search__btn-icon" fill="#fff"
             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.531 56.53" width="20" height="20">
          <path fill-rule="evenodd"
                d="M548.266,1673.81l-2.954,2.96L529,1660.45a18,18,0,0,1-3.094,2.25,24.059,24.059,0,0,1-3.515,1.69,20.8,20.8,0,0,1-3.868,1.06,24.021,24.021,0,0,1-4.007.35,21.867,21.867,0,0,1-8.93-1.83,23.622,23.622,0,0,1-7.242-4.92,22.523,22.523,0,0,1-4.852-7.25,22.224,22.224,0,0,1-1.758-8.78,22.6,22.6,0,0,1,22.782-22.79,22.337,22.337,0,0,1,8.789,1.76,22.794,22.794,0,0,1,7.242,4.85,23.707,23.707,0,0,1,4.922,7.25,21.9,21.9,0,0,1,1.828,8.93,23.551,23.551,0,0,1-.352,4,20.544,20.544,0,0,1-1.054,3.87,24.84,24.84,0,0,1-1.688,3.52,18.988,18.988,0,0,1-2.25,3.09l16.313,16.31h0Zm-54.141-30.79a19.963,19.963,0,0,0,1.547,7.87,20.187,20.187,0,0,0,4.359,6.47,20.879,20.879,0,0,0,6.539,4.43,19.709,19.709,0,0,0,7.946,1.62,19.226,19.226,0,0,0,7.875-1.62,21.318,21.318,0,0,0,10.9-10.9,19.26,19.26,0,0,0,1.617-7.87,19.776,19.776,0,0,0-1.617-7.95,21.078,21.078,0,0,0-4.43-6.54,20.279,20.279,0,0,0-6.468-4.36,20.032,20.032,0,0,0-7.875-1.55,20.538,20.538,0,0,0-7.946,1.55,20.036,20.036,0,0,0-10.9,10.9,20.5,20.5,0,0,0-1.547,7.95h0Z"
                transform="translate(-491.719 -1620.22)"/>
        </svg>
      </button>
    </form>
    <ul id="movies" class="movie__list">
      <li class="movie__item"
          v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movieIMDb/' + movie.imdbID" class="movie__item-link">
          <div class="movie__poster-wrapper">
            <img class="movie__poster"
                 :alt="movie.Title"
                 :src="movie.Poster !== 'N/A' ? movie.Poster : noPoster">
          </div>
          <div class="movie__bottom">
            <span class="movie__title">"{{ movie.Title }}"</span>
            <span class="movie__year">({{ movie.Year }})</span>
            <a class="btn movie__btn" target="_blank"
               :href="`https://www.imdb.com/title/` + movie.imdbID">
              To IMDb
              <span class="movie__btn-arrow">&rarr;</span>
            </a>
          </div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
// import SearchForm from '@/components/SearchForm.vue';
// import MovieListItem from '@/components/MovieListItem.vue';
import {ref} from 'vue';

export default {
  name: "Home",
  components: {
    // SearchForm,
    // MovieListItem
  },
  data() {
    return {
      noPoster: null,
    }
  },
  created() {
    this.noPoster = require('@/assets/img/no-poster.png');
  },
  setup() {
    const search = ref('');
    const movies = ref([]);

    const SearchMovies = () => {
      if (search.value !== "") {
        fetch(`https://www.omdbapi.com/?apikey=1ce9470d&s=${search.value}`)
            .then(response => response.json())
            .then(data => {
              movies.value = data.Search;
              search.value = '';
            });
      }
    }
    return {
      search,
      movies,
      SearchMovies
    }
  }
};
</script>

<style lang="scss">
.search {
  &__form {
    width: 650px;
    height: 60px;
    border: 2px solid #0039ff;
    border-radius: 5px;
    text-align: left;
    position: relative;
    margin: 50px auto;

    @media screen and (max-width: 850px) {
      margin: 40px auto 30px;
      width: 100%;
    }

    @media screen and (max-width: 680px) {
      margin: 30px auto 20px;
    }

    @media screen and (max-width: 520px) {
      height: 30px;
    }
  }

  &__input {
    width: 78%;
    height: 100%;
    margin: 0;
    padding: 0 10px;
    background: #fff;
    outline: none;
    border: none;
    font-family: "Nova Mono", "Roboto Mono", monospace;
    font-size: 20px;
    color: #5474fd;
    letter-spacing: 0.1em;

    @media screen and (max-width: 520px) {
      width: 88%;
    }

    &::placeholder {
      font-family: "Nova Mono", "Roboto Mono", monospace;
      font-size: 22px;
      color: rgba(84, 116, 253, 0.5);
      letter-spacing: 0.1em;
      text-align: left;
      padding: 0 10px;

      @media screen and (max-width: 600px) {
        padding: 0;
      }

      @media screen and (max-width: 500px) {
        font-size: 4vw;
        text-align: center;
      }
    }
  }

  &__label {
    display: initial;
  }

  &__btn {
    border: 1px solid transparent;
    background: linear-gradient(45deg, #496bfe 0%, #496bfe 40%, #5474fd 40%, #5474fd 100%);
    padding: 15px 50px 15px 12px;
    color: #fff;
    font-family: "Noto Sans SC", Arial, sans-serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    width: 156px;
    height: 56px;
    border-left: 2px solid #0039ff;

    &:hover,
    &:focus {
      background: linear-gradient(45deg, #5474fd 0%, #5474fd 40%, #496bfe 40%, #496bfe 100%);
    }

    &:active {
      border: 1px solid #0039ff;
      background: linear-gradient(45deg, #5474fd 0%, #5474fd 40%, #496bfe 40%, #496bfe 100%);
      opacity: 0.9;
      outline: none;
    }

    @media screen and (max-width: 520px) {
      width: 12%;
      height: 26px;
      padding: 5px;
    }
  }

  &__btn-name {
    text-align: left;

    @media screen and (max-width: 520px) {
      display: none;
    }
  }

  &__btn-icon {
    position: absolute;
    top: 50%;
    right: 13px;
    transform: translateY(-50%);

    @media screen and (max-width: 520px) {
      right: 50%;
      transform: translate(50%, -50%) scale(0.8);
    }
  }
}

.movie {
  &__list {
    width: 100%;
    height: auto;
    margin: 10px auto 30px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    border-radius: .25rem;
    background: rgba(0, 0, 0, .4);
  }

  &__no-movies {
    width: 650px;
    word-break: break-all;
    margin: 0 auto;
    padding: 6px;
    text-align: left;
    background: rgba(0, 0, 0, .5);

    @media screen and (max-width: 850px) {
      width: 100%;
    }
  }

  &__item {
    width: 200px;
    height: auto;
    min-height: 300px;
    margin: 20px;
    padding: 5px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.5);
  }

  &__item-link {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__btn {
    display: block;
    text-decoration: none;
    width: 100px;
    height: 30px;
    margin: 10px auto;
    border-radius: 25px;
    font-size: 10px;
    line-height: 1.5;
    color: #fff;
    padding: 6px 0;
    letter-spacing: 0;
    background: linear-gradient(45deg, #496bfe 0%, #496bfe 40%, #5474fd 40%, #5474fd 100%);
    position: relative;
    transition-duration: .3s;

    &:hover,
    &:focus {
      box-shadow: 3px 2px 6px rgb(0 0 0 / 60%), -3px 2px 6px rgb(0 0 0 / 60%);
      background: linear-gradient(45deg, #5474fd 0%, #5474fd 40%, #496bfe 40%, #496bfe 100%);
      color: #fff;
      transition-duration: .3s;
    }

    &:not(:disabled):not(.disabled):active {
      border: 1px solid #fff;
      background: linear-gradient(45deg, #496bfe 0%, #496bfe 40%, #5474fd 40%, #5474fd 100%);
      opacity: .8;
      transition-duration: .3s;
    }
  }

  &__btn-arrow {
    display: block;
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-60%);
    transition-duration: .4s;

    .movie__btn:hover &,
    .movie__btn:focus & {
      transform: translate(8px, -60%);
      color: #fff;
      transition-duration: .3s;
    }
  }

  &__title,
  &__year {
    display: block;
    line-height: 1.5;
    color: #000;
    font-weight: 500;
    text-shadow: 0 0 3px #fff;
  }

  &__title {
    font-size: 16px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 850px) {
      font-size: 14px;
    }
  }

  &__year {
    font-size: 14px;

    @media screen and (max-width: 850px) {
      font-size: 12px;
    }
  }

  &__poster {
    width: 100%;
    height: auto;
  }
}
</style>