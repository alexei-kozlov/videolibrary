<template>
  <section class="search">
    <SearchForm></SearchForm>
    <ul id="movies" class="movie__list">
      <MovieListItem></MovieListItem>
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

<style>
.movie__list {
  /*border: 3px solid #00f;*/

  width: 100%;
  height: auto;
  margin: 10px auto 30px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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
  justify-content: space-between;
}

.btn__arrow {
  display: block;
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-60%);
  transition-duration: .4s;
}

.btn:hover .btn__arrow,
.btn:focus .btn__arrow {
  transform: translate(8px, -60%);
  color: #fff;
  transition-duration: .3s;
}

.movie__btn {
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
}

.movie__btn:hover,
.movie__btn:focus {
  box-shadow: 3px 2px 6px rgb(0 0 0 / 60%), -3px 2px 6px rgb(0 0 0 / 60%);
  background: linear-gradient(45deg, #5474fd 0%, #5474fd 40%, #496bfe 40%, #496bfe 100%);
  color: #fff;
  transition-duration: .3s;
}

.movie__btn:not(:disabled):not(.disabled):active {
  border: 1px solid #fff;
  background: linear-gradient(45deg, #496bfe 0%, #496bfe 40%, #5474fd 40%, #5474fd 100%);
  opacity: .8;
  transition-duration: .3s;
}

.movie__title,
.movie__year {
  display: block;
  line-height: 1.5;
  color: #000;
  font-weight: 500;
  text-shadow: 0 0 3px #fff;
}

.movie__title {
  font-size: 16px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 850px) {
  .movie__title {
    font-size: 14px;
  }
}

.movie__year {
  font-size: 14px;
}

@media screen and (max-width: 850px) {
  .movie__year {
    font-size: 12px;
  }
}

.movie__poster {
  width: 100%;
  height: auto;
}
</style>